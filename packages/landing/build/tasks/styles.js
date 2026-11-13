import loconfig from '../helpers/config.js';
import message from '../helpers/message.js';
import notification from '../helpers/notification.js';
import {
    createProcessor,
    minifyPluginsMap,
    pluginsMap as postcssPluginsMap
} from '../helpers/postcss.js';
import resolve from '../helpers/template.js';
import { merge } from '../utils/index.js';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname } from 'node:path';
import { PurgeCSS } from 'purgecss';

let postcssProcessor;
let minifyProcessor;

/**
 * @const {object} defaultPostCSSOptions     - The default shared PostCSS options.
 * @const {object} developmentPostCSSOptions - The predefined PostCSS options for development.
 * @const {object} productionPostCSSOptions  - The predefined PostCSS options for production.
 */
export const defaultPostCSSOptions = {
    processor: {
        map: {
            annotation: false,
            inline: false,
            sourcesContent: true,
        },
    },
};
export const developmentPostCSSOptions = Object.assign({}, defaultPostCSSOptions);
export const productionPostCSSOptions  = Object.assign({}, defaultPostCSSOptions);

/**
 * @const {object|boolean} developmentStylesArgs - The predefined `compileStyles()` options for development.
 * @const {object|boolean} productionStylesArgs  - The predefined `compileStyles()` options for production.
 */
export const developmentStylesArgs = [
    developmentPostCSSOptions,
    false,
    false
];
export const productionStylesArgs  = [
    productionPostCSSOptions,
    true,
    true
];

/**
 * Compiles main CSS files with PostCSS, then purges and minifies them.
 *
 * @todo Add deep merge of `postcssOptions` to better support customization
 *     of default processor options.
 *
 * @async
 * @param  {object}  [postcssOptions=null] - Customize the PostCSS processor API options.
 *     If `null`, default production options are used.
 * @param  {boolean} [purge=true]          - Whether to purge unused styles.
 * @param  {boolean} [minify=true]         - Whether to minify the styles, after the purge.
 * @return {Promise}
 */
export default async function compileStyles(postcssOptions = null, purge = true, minify = true) {
    if (postcssOptions == null) {
        postcssOptions = productionPostCSSOptions;
    } else if (
        postcssOptions !== developmentPostCSSOptions &&
        postcssOptions !== productionPostCSSOptions
    ) {
        postcssOptions = merge({}, defaultPostCSSOptions, postcssOptions);
    }

    /**
     * @async
     * @param  {object}   entry         - The entrypoint to process.
     * @param  {string[]} entry.infile  - The file to process.
     * @param  {string}   entry.outfile - The file to write to.
     * @param  {?string}  [entry.label] - The task label.
     *     Defaults to the outfile name.
     * @return {Promise}
     */
    await Promise.all((loconfig.tasks.styles ?? []).map(async ({
        infile,
        outfile,
        label = null
    }) => {
        const filestem = basename((outfile || 'undefined'), '.css');

        const timeLabel = `${label || `${filestem}.css`} compiled in`;
        console.time(timeLabel);

        try {
            infile  = resolve(infile);
            outfile = resolve(outfile);

            if (typeof postcssProcessor === 'undefined') {
                postcssProcessor = createProcessor(
                    postcssPluginsMap,
                    postcssOptions
                );
            }

            const result = await postcssProcessor.process(
                await readFile(infile, 'utf8'),
                Object.assign({}, postcssOptions.processor, {
                    from: infile,
                    to: outfile,
                })
            );

            const warnings = result.warnings();
            if (warnings.length) {
                message(`Error processing ${label || `${filestem}.css`}`, 'warning');
                warnings.forEach((warn) => {
                    message(warn.toString());
                });
            }

            let css = result.css;

            if (purge) {
                css = await purgeUnusedCSS(css, `${label || `${filestem}.css`}`);
            }

            if (minify) {
                css = await minifyCSS(css, outfile);
            }

            try {
                await mkdir(dirname(outfile), { recursive: true });
                await writeFile(outfile, css);

                if (css) {
                    message(`${label || `${filestem}.css`} compiled`, 'success', timeLabel);
                } else {
                    message(`${label || `${filestem}.css`} is empty`, 'notice', timeLabel);
                }
            } catch (err) {
                message(`Error compiling ${label || `${filestem}.css`}`, 'error');
                message(err);

                notification({
                    title:   `${label || `${filestem}.css`} save failed 🚨`,
                    message: `Could not save stylesheet to ${label || `${filestem}.css`}`
                });
            }

            if (result.map) {
                try {
                    await writeFile(outfile + '.map', result.map.toString());
                } catch (err) {
                    message(`Error compiling ${label || `${filestem}.css.map`}`, 'error');
                    message(err);

                    notification({
                        title:   `${label || `${filestem}.css.map`} save failed 🚨`,
                        message: `Could not save sourcemap to ${label || `${filestem}.css.map`}`
                    });
                }
            }
        } catch (err) {
            message(`Error compiling ${label || `${filestem}.css`}`, 'error');
            message(err.showSourceCode?.() ?? err);

            notification({
                title:   `${label || `${filestem}.css`} compilation failed 🚨`,
                message: `${err.name}: ${err.message}`
            });
        }
    }));
};

/**
 * Purge unused styles from CSS.
 *
 * @async
 *
 * @param  {string} css   - The CSS to purge.
 * @param  {string} label - The CSS file label or name.
 * @return {Promise<string>} The purged CSS, or the CSS as is without content files to scan.
 */
async function purgeUnusedCSS(css, label) {
    const contentFiles = loconfig.tasks.purgeCSS?.content;
    if (!Array.isArray(contentFiles) || !contentFiles.length) {
        return css;
    }

    const timeLabel = `${label} purged in`;
    console.time(timeLabel);

    const [ purgeCSSResult ] = await (new PurgeCSS()).purge({
        content: contentFiles,
        css: [ { raw: css } ],
        defaultExtractor: content => content.match(/[a-z0-9_\-\\\/\@]+/gi) || [],
        fontFaces: true,
        keyframes: true,
        safelist: {
            // Keep all except .u-gc-* | .u-margin-* | .u-padding-*
            standard: [ /^(?!.*\b(u-gc-|u-margin|u-padding)).*$/ ],
            // Preserve CSS variables and their content in these selectors
            deep: [ /fadeInText/ ]
        },
        // Disable variable purging to preserve all CSS custom properties
        variables: false,
    })

    message(`${label} purged`, 'chore', timeLabel);

    return purgeCSSResult.css;
}

/**
 * Minify CSS with cssnano.
 *
 * @async
 *
 * @param  {string} css     - The CSS to minify.
 * @param  {string} outfile - The path of the CSS file, for cssnano's warnings.
 * @return {Promise<string>} The minified CSS.
 */
async function minifyCSS(css, outfile) {
    if (typeof minifyProcessor === 'undefined') {
        minifyProcessor = createProcessor(minifyPluginsMap, {
            cssnano: {
                // Keep `scale3d(0, 1, 1)` → `scale3d(1, 1, 1)` transitions between the same functions.
                preset: [ 'default', { reduceTransforms: false } ],
            },
        });
    }

    const result = await minifyProcessor.process(css, {
        from: outfile,
        to: outfile,
        map: false,
    });

    return result.css;
}
