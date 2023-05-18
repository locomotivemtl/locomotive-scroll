import loconfig from '../utils/config.js';
import message from '../utils/message.js';
import notification from '../utils/notification.js';
import resolve from '../utils/template.js';
import esbuild from 'esbuild';
import { basename } from 'node:path';

/**
 * @const {object} defaultESBuildOptions     - The default shared ESBuild options.
 * @const {object} developmentESBuildOptions - The predefined ESBuild options for development.
 * @const {object} productionESBuildOptions  - The predefined ESBuild options for production.
 */
export const defaultESBuildOptions = {
    bundle: true,
    color: true,
    sourcemap: true,
    target: [
        'es2015',
    ],
};
export const developmentESBuildOptions = Object.assign({}, defaultESBuildOptions);
export const productionESBuildOptions  = Object.assign({}, defaultESBuildOptions, {
    logLevel: 'warning',
    minify: true,
});

/**
 * @const {object} developmentScriptsArgs - The predefined `compileScripts()` options for development.
 * @const {object} productionScriptsArgs  - The predefined `compileScripts()` options for production.
 */
export const developmentScriptsArgs = [
    developmentESBuildOptions,
];
export const productionScriptsArgs  = [
    productionESBuildOptions,
];

/**
 * Bundles and minifies main JavaScript files.
 *
 * @async
 * @param  {object} [esBuildOptions=null] - Customize the ESBuild build API options.
 *     If `null`, default production options are used.
 * @return {Promise}
 */
export default async function compileScripts(esBuildOptions = null) {
    if (esBuildOptions == null) {
        esBuildOptions = productionESBuildOptions;
    } else if (
        esBuildOptions !== developmentESBuildOptions &&
        esBuildOptions !== productionESBuildOptions
    ) {
        esBuildOptions = Object.assign({}, defaultESBuildOptions, esBuildOptions);
    }

    loconfig.tasks.scripts.forEach(async ({
        includes,
        outdir = '',
        outfile = '',
        label = null
    }) => {
        if (!label) {
            label = basename(outdir || outfile || 'undefined');
        }

        const timeLabel = `${label} compiled in`;
        console.time(timeLabel);

        try {
            includes = resolve(includes);

            if (outdir) {
                outdir = resolve(outdir);
            } else if (outfile) {
                outfile = resolve(outfile);
            } else {
                throw new TypeError(
                    'Expected \'outdir\' or \'outfile\''
                );
            }

            await esbuild.build(Object.assign({}, esBuildOptions, {
                entryPoints: includes,
                outdir,
                outfile,
            }));

            message(`${label} compiled`, 'success', timeLabel);
        } catch (err) {
            // errors managments (already done in esbuild)
            notification({
                title:   `${label} compilation failed 🚨`,
                message: `${err.errors[0].text} in ${err.errors[0].location.file} line ${err.errors[0].location.line}`
            });
        }
    });
};
