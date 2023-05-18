import loconfig from '../helpers/config.js';
import message from '../helpers/message.js';
import notification from '../helpers/notification.js';
import {
    createProcessor,
    pluginsMap as postcssPluginsMap,
    supportsPostCSS
} from '../helpers/postcss.js';
import resolve from '../helpers/template.js';
import { merge } from '../utils/index.js';
import { writeFile } from 'node:fs/promises';
import { basename } from 'node:path';
import { promisify } from 'node:util';
import sass from 'sass';
import { PurgeCSS } from 'purgecss';

const sassRender = promisify(sass.render);

let postcssProcessor;

/**
 * @const {object} defaultSassOptions     - The default shared Sass options.
 * @const {object} developmentSassOptions - The predefined Sass options for development.
 * @const {object} productionSassOptions  - The predefined Sass options for production.
 */
export const defaultSassOptions = {
    omitSourceMapUrl: true,
    sourceMap: true,
    sourceMapContents: true,
};

export const developmentSassOptions = Object.assign({}, defaultSassOptions, {
    outputStyle: 'expanded',
});
export const productionSassOptions = Object.assign({}, defaultSassOptions, {
    outputStyle: 'compressed',
});

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
    developmentSassOptions,
    developmentPostCSSOptions,
];
export const productionStylesArgs  = [
    productionSassOptions,
    productionPostCSSOptions,
];

/**
 * Compiles and minifies main Sass files to CSS.
 *
 * @todo Add deep merge of `postcssOptions` to better support customization
 *     of default processor options.
 *
 * @async
 * @param  {object}         [sassOptions=null]    - Customize the Sass render API options.
 *     If `null`, default production options are used.
 * @param  {object|boolean} [postcssOptions=null] - Customize the PostCSS processor API options.
 *     If `null`, default production options are used.
 *     If `false`, PostCSS processing will be ignored.
 * @return {Promise}
 */
export default async function compileStyles(sassOptions = null, postcssOptions = null) {
    if (sassOptions == null) {
        sassOptions = productionSassOptions;
    } else if (
        sassOptions !== developmentSassOptions &&
        sassOptions !== productionSassOptions
    ) {
        sassOptions = merge({}, defaultSassOptions, sassOptions);
    }

    if (supportsPostCSS) {
        if (postcssOptions == null) {
            postcssOptions = productionPostCSSOptions;
        } else if (
            postcssOptions !== false &&
            postcssOptions !== developmentPostCSSOptions &&
            postcssOptions !== productionPostCSSOptions
        ) {
            postcssOptions = merge({}, defaultPostCSSOptions, postcssOptions);
        }
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
    loconfig.tasks.styles.forEach(async ({
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

            let result = await sassRender(Object.assign({}, sassOptions, {
                file: infile,
                outFile: outfile,
            }));

            if (supportsPostCSS && postcssOptions) {
                if (typeof postcssProcessor === 'undefined') {
                    postcssProcessor = createProcessor(
                        postcssPluginsMap,
                        postcssOptions
                    );
                }

                result = await postcssProcessor.process(
                    result.css,
                    Object.assign({}, postcssOptions.processor, {
                        from: outfile,
                        to: outfile,
                    })
                );

                if (result.warnings) {
                    const warnings = result.warnings();
                    if (warnings.length) {
                        message(`Error processing ${label || `${filestem}.css`}`, 'warning');
                        warnings.forEach((warn) => {
                            message(warn.toString());
                        });
                    }
                }
            }

            try {
                await writeFile(outfile, result.css).then(() => {
                    // Purge CSS once file exists.
                    if (outfile) {
                        purgeUnusedCSS(outfile, `${label || `${filestem}.css`}`);
                    }
                });

                if (result.css) {
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
            message(`Error compiling ${label || `${filestem}.scss`}`, 'error');
            message(err.formatted || err);

            notification({
                title:   `${label || `${filestem}.scss`} compilation failed 🚨`,
                message: (err.formatted || `${err.name}: ${err.message}`)
            });
        }
    });
};

/**
 * Purge unused styles from CSS files.
 *
 * @async
 *
 * @param  {string} outfile - The path of a css file
 *      If missing the function stops.
 * @param  {string} label   - The CSS file label or name.
 * @return {Promise}
 */
async function purgeUnusedCSS(outfile, label) {
    label = label ?? basename(outfile);

    const timeLabel = `${label} purged in`;
    console.time(timeLabel);

    const purgeCSSContentFiles = Array.from(loconfig.tasks.purgeCSS.content);

    const purgeCSSResults = await (new PurgeCSS()).purge({
        content: purgeCSSContentFiles,
        css: [ outfile ],
        rejected: true,
        defaultExtractor: (content) => content.match(/[a-z0-9_\-\\\/\@]+/gi) || [],
        safelist: {
            standard: [ /^((?!\bu-gc-).)*$/ ]
        }
    })

    for (let result of purgeCSSResults) {
        await writeFile(outfile, result.css)

        message(`${label} purged`, 'chore', timeLabel);
    }
}
