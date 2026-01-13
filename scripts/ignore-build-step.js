#!/usr/bin/env node

/**
 * Vercel Ignore Build Step Script
 *
 * This script determines whether Vercel should skip the build process.
 * Returns exit code 0 to skip build, exit code 1 to proceed with build.
 *
 * Build is skipped ONLY when:
 * - Only non-code files changed (README, .github, IDE config)
 * - Changes are only in landing package (deployed separately via committed builds)
 *
 * Build proceeds for ANY changes in:
 * - packages/lib, packages/demo, packages/docs (including all files)
 * - Config files (vercel.json, turbo.json, package.json, etc.)
 *
 * Note: Turbo handles caching - we only skip truly irrelevant changes.
 * Turbo will cache unchanged packages automatically.
 */

const { execSync } = require('child_process');

const SKIP_BUILD_EXIT_CODE = 0;
const PROCEED_BUILD_EXIT_CODE = 1;

function log(message) {
  console.log(`[Ignore Build] ${message}`);
}

function getChangedFiles() {
  try {
    // Get the commit SHA to compare against
    const beforeCommit = process.env.VERCEL_GIT_PREVIOUS_SHA || 'HEAD~1';
    const command = `git diff --name-only ${beforeCommit} HEAD`;

    log(`Running: ${command}`);
    const output = execSync(command, { encoding: 'utf-8' });
    const files = output.split('\n').filter(Boolean);

    log(`Changed files (${files.length}):`);
    files.forEach(file => log(`  - ${file}`));

    return files;
  } catch (error) {
    log(`Error getting changed files: ${error.message}`);
    log('Proceeding with build to be safe');
    return null;
  }
}

function shouldSkipBuild(changedFiles) {
  // If we can't determine changed files, proceed with build
  if (!changedFiles || changedFiles.length === 0) {
    log('No changed files detected or error occurred');
    return false;
  }

  // Patterns that are safe to skip (truly non-critical files)
  // Everything else will trigger a build
  const skipPatterns = [
    /^README\.md$/i,              // Root README only
    /^LICENSE$/i,                 // License file
    /^\.github\//,                // GitHub workflows/actions
    /^\.vscode\//,                // VSCode settings
    /^\.idea\//,                  // JetBrains IDE settings
    /^\.editorconfig$/,           // Editor config
    /^\.gitignore$/,              // Git ignore
    /^\.gitattributes$/,          // Git attributes
    /^packages\/landing\//,       // Landing page (deployed separately with committed builds)
  ];

  // Check if ALL changed files match skip patterns
  const allFilesCanBeSkipped = changedFiles.every(file =>
    skipPatterns.some(pattern => pattern.test(file))
  );

  if (allFilesCanBeSkipped) {
    log('Build can be skipped: Only non-critical files changed');
    log('Changed files are: ' + changedFiles.join(', '));
    return true;
  }

  // If any file doesn't match skip patterns, we need to build
  const criticalFiles = changedFiles.filter(file =>
    !skipPatterns.some(pattern => pattern.test(file))
  );

  log('Build required: Critical files changed');
  log('Critical files: ' + criticalFiles.join(', '));
  return false;
}

function main() {
  log('Starting Vercel ignore build check...');

  // Check environment variables
  const branch = process.env.VERCEL_GIT_COMMIT_REF;
  const isProduction = process.env.VERCEL_ENV === 'production';

  log(`Branch: ${branch}`);
  log(`Environment: ${process.env.VERCEL_ENV}`);
  log(`Previous SHA: ${process.env.VERCEL_GIT_PREVIOUS_SHA || 'not available'}`);

  // Always build on production/master branch to be safe
  if (isProduction || branch === 'master' || branch === 'main') {
    log('Production branch detected - proceeding with build');
    process.exit(PROCEED_BUILD_EXIT_CODE);
  }

  // Get changed files and determine if we should skip
  const changedFiles = getChangedFiles();
  const shouldSkip = shouldSkipBuild(changedFiles);

  if (shouldSkip) {
    log('✓ Skipping build - no relevant changes detected');
    process.exit(SKIP_BUILD_EXIT_CODE);
  } else {
    log('✓ Proceeding with build - relevant changes detected');
    process.exit(PROCEED_BUILD_EXIT_CODE);
  }
}

main();
