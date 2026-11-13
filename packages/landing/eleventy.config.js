import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import twig from 'twig';
import { buildAssets } from './build/assets.js';

export default function (eleventyConfig) {
    let assetHashes = {};

    // Assets build before the templates, which read their hashes
    eleventyConfig.on('eleventy.before', async ({ directories, runMode }) => {
        assetHashes = await buildAssets({
            output: directories.output,
            production: runMode === 'build',
        });
    });

    eleventyConfig.setServerOptions({
        port: 3000,
    });

    eleventyConfig.addWatchTarget('views/**/*');
    eleventyConfig.addWatchTarget('assets/**/*');

    eleventyConfig.addPassthroughCopy({ 'assets/static': 'assets' });

    // Without it, watch rebuilds keep serving stale includes
    twig.cache(false);

    eleventyConfig.addExtension('twig', {
        outputFileExtension: 'html',
        compile: (inputContent, inputPath) => {
            const template = twig.twig({
                data: inputContent,
                path: inputPath,
                namespaces: {
                    layouts: 'views/layouts',
                    partials: 'views/partials',
                    snippets: 'views/snippets',
                },
            });

            return (data) => template.render(data);
        },
    });

    twig.extendFilter('log', function (value) {
        return '<pre>' + JSON.stringify(value) + '</pre>';
    });

    twig.extendFilter('slug', function (str) {
        return str
            .toLowerCase() // Convert the string to lowercase
            .replace(/\s+/g, '-') // Replace spaces with dashes
            .replace(/[^\w-]/g, '') // Remove non-word characters
            .replace(/--+/g, '-') // Replace consecutive dashes with a single dash
            .trim(); // Trim any leading or trailing dashes
    });

    twig.extendFilter('asset', function (url) {
        const hash = assetHashes[url];

        if (!hash) {
            throw new Error(`${url} is not a built asset`);
        }

        return `${url}?v=${hash}`;
    });

    eleventyConfig.addGlobalData('libVersion', function () {
        const libPackagePath = join(import.meta.dirname, '../lib/package.json');
        const { version } = JSON.parse(readFileSync(libPackagePath, 'utf-8'));
        return version.split('.').slice(0, 2).join('.');
    });

    return {
        templateFormats: [ 'twig' ],
        dir: {
            input: 'views/templates',
            output: '../../www/landing',
            data: '../../data',
        },
    };
}
