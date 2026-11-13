/**
 * @file Builds the scripts, styles and SVG sprite into the Eleventy output,
 * and returns a content hash per asset for cache busting.
 */

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import esbuild from 'esbuild';
import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import postcss from 'postcss';
import postcssCustomMedia from 'postcss-custom-media';
import postcssImport from 'postcss-import';
import postcssNesting from 'postcss-nesting';
import { PurgeCSS } from 'purgecss';

const root = dirname(import.meta.dirname);

export const SCRIPT = 'assets/scripts/app.js';
export const STYLE = 'assets/styles/main.css';
export const SPRITE = 'assets/images/sprite.svg';

/**
 * The compile plugins, in the order they run.
 * `postcss-import` comes first so the other plugins see a single file,
 * and the custom media queries are resolved before the nesting is flattened.
 */
const compileProcessor = postcss([
    postcssImport(),
    postcssCustomMedia(),
    postcssNesting(),
    autoprefixer(),
]);

const minifyProcessor = postcss([
    // Keep `scale3d(0, 1, 1)` → `scale3d(1, 1, 1)` transitions between the same functions.
    cssnano({ preset: [ 'default', { reduceTransforms: false } ] }),
]);

/**
 * Builds every asset. Any failure rejects, so the Eleventy build fails with it.
 *
 * @param  {object}  options
 * @param  {string}  options.output     - The Eleventy output directory.
 * @param  {boolean} options.production - Whether to minify and purge.
 * @return {Promise<Record<string, string>>} The content hash of each asset, by URL.
 */
export async function buildAssets({ output, production }) {
    const [ script, style, sprite ] = await Promise.all([
        buildScript(join(output, SCRIPT), production),
        buildStyle(join(output, STYLE), production),
        buildSprite(join(output, SPRITE)),
    ]);

    return {
        [SCRIPT]: hash(script),
        [STYLE]: hash(style),
        [SPRITE]: hash(sprite),
    };
}

/**
 * @param  {string}  outfile
 * @param  {boolean} production
 * @return {Promise<string>} The bundled script.
 */
async function buildScript(outfile, production) {
    // Minifying also sets `process.env.NODE_ENV` to "production", "development" otherwise.
    await esbuild.build({
        entryPoints: [ join(root, SCRIPT) ],
        outfile,
        bundle: true,
        minify: production,
        sourcemap: true,
        target: [ 'es2015' ],
        logLevel: 'warning',
    });

    return readFile(outfile, 'utf8');
}

/**
 * @param  {string}  outfile
 * @param  {boolean} production
 * @return {Promise<string>} The compiled stylesheet.
 */
async function buildStyle(outfile, production) {
    const infile = join(root, STYLE);
    const result = await compileProcessor.process(await readFile(infile, 'utf8'), {
        from: infile,
        to: outfile,
        map: false,
    });

    for (const warning of result.warnings()) {
        console.warn(warning.toString());
    }

    let css = result.css;

    if (production) {
        css = await purge(css);
        css = (await minifyProcessor.process(css, { from: outfile, to: outfile, map: false })).css;
    }

    await mkdir(dirname(outfile), { recursive: true });
    await writeFile(outfile, css);

    return css;
}

/**
 * Removes the grid and spacing utilities that no source uses.
 * Reads the sources rather than the generated HTML,
 * so the stylesheet hash is known before the templates render.
 *
 * @param  {string} css
 * @return {Promise<string>}
 */
async function purge(css) {
    const [ result ] = await new PurgeCSS().purge({
        content: [
            join(root, 'views/**/*.twig'),
            join(root, 'data/**/*.json'),
            join(root, 'assets/scripts/**/*.js'),
        ],
        css: [ { raw: css } ],
        defaultExtractor: (content) => content.match(/[a-z0-9_\-\\\/\@]+/gi) || [],
        fontFaces: true,
        keyframes: true,
        safelist: {
            // Keep all except .u-gc-* | .u-margin-* | .u-padding-*
            standard: [ /^(?!.*\b(u-gc-|u-margin|u-padding)).*$/ ],
            // Preserve CSS variables and their content in these selectors
            deep: [ /fadeInText/ ],
        },
        // Disable variable purging to preserve all CSS custom properties
        variables: false,
    });

    return result.css;
}

/**
 * Turns each SVG of `assets/images/sprite/` into a `<symbol>` named after its file.
 *
 * @param  {string} outfile
 * @return {Promise<string>} The sprite.
 */
async function buildSprite(outfile) {
    const dir = join(root, 'assets/images/sprite');
    const files = (await readdir(dir)).filter((file) => file.endsWith('.svg')).sort();

    const symbols = await Promise.all(files.map(async (file) => {
        const svg = await readFile(join(dir, file), 'utf8');
        const match = svg.match(/<svg\b([^>]*)>([\s\S]*)<\/svg>/);

        if (!match) {
            throw new Error(`${file} has no <svg> root element`);
        }

        const attributes = match[1].replace(/\s+(?:xmlns(?::\w+)?|xml:space|width|height)="[^"]*"/g, '');

        return `<symbol id="${basename(file, '.svg')}"${attributes}>${match[2].trim()}</symbol>`;
    }));

    const sprite = `<svg xmlns="http://www.w3.org/2000/svg"><defs>${symbols.join('')}</defs></svg>`;

    await mkdir(dirname(outfile), { recursive: true });
    await writeFile(outfile, sprite);

    return sprite;
}

/**
 * @param  {string} content
 * @return {string}
 */
function hash(content) {
    return createHash('sha256').update(content).digest('hex').slice(0, 10);
}
