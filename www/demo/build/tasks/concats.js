import loconfig from '../helpers/config.js';
import glob, { supportsGlob } from '../helpers/glob.js';
import message from '../helpers/message.js';
import notification from '../helpers/notification.js';
import resolve from '../helpers/template.js';
import { merge } from '../utils/index.js';
import concat from 'concat';
import {
    basename,
    normalize,
} from 'node:path';

/**
 * @const {object} defaultGlobOptions     - The default shared glob options.
 * @const {object} developmentGlobOptions - The predefined glob options for development.
 * @const {object} productionGlobOptions  - The predefined glob options for production.
 */
export const defaultGlobOptions = {
};
export const developmentGlobOptions = Object.assign({}, defaultGlobOptions);
export const productionGlobOptions  = Object.assign({}, defaultGlobOptions);

/**
 * @typedef  {object} ConcatOptions
 * @property {boolean} removeDuplicates - Removes duplicate paths from
 *     the array of matching files and folders.
 *     Only the first occurrence of each path is kept.
 */

/**
 * @const {ConcatOptions} defaultConcatOptions     - The default shared concatenation options.
 * @const {ConcatOptions} developmentConcatOptions - The predefined concatenation options for development.
 * @const {ConcatOptions} productionConcatOptions  - The predefined concatenation options for production.
 */
export const defaultConcatOptions = {
    removeDuplicates: true,
};
export const developmentConcatOptions = Object.assign({}, defaultConcatOptions);
export const productionConcatOptions  = Object.assign({}, defaultConcatOptions);

/**
 * @const {object} developmentConcatFilesArgs - The predefined `concatFiles()` options for development.
 * @const {object} productionConcatFilesArgs  - The predefined `concatFiles()` options for production.
 */
export const developmentConcatFilesArgs = [
    developmentGlobOptions,
    developmentConcatOptions,
];
export const productionConcatFilesArgs  = [
    productionGlobOptions,
    productionConcatOptions,
];

/**
 * Concatenates groups of files.
 *
 * @todo Add support for minification.
 *
 * @async
 * @param  {object|boolean} [globOptions=null]   - Customize the glob options.
 *     If `null`, default production options are used.
 *     If `false`, the glob function will be ignored.
 * @param  {object}         [concatOptions=null] - Customize the concatenation options.
 *     If `null`, default production options are used.
 * @return {Promise}
 */
export default async function concatFiles(globOptions = null, concatOptions = null) {
    if (supportsGlob) {
        if (globOptions == null) {
            globOptions = productionGlobOptions;
        } else if (
            globOptions !== false &&
            globOptions !== developmentGlobOptions &&
            globOptions !== productionGlobOptions
        ) {
            globOptions = merge({}, defaultGlobOptions, globOptions);
        }
    }

    if (concatOptions == null) {
        concatOptions = productionConcatOptions;
    } else if (
        concatOptions !== developmentConcatOptions &&
        concatOptions !== productionConcatOptions
    ) {
        concatOptions = merge({}, defaultConcatOptions, concatOptions);
    }

    /**
     * @async
     * @param  {object}   entry          - The entrypoint to process.
     * @param  {string[]} entry.includes - One or more paths to process.
     * @param  {string}   entry.outfile  - The file to write to.
     * @param  {?string}  [entry.label]  - The task label.
     *     Defaults to the outfile name.
     * @return {Promise}
     */
    loconfig.tasks.concats.forEach(async ({
        includes,
        outfile,
        label = null
    }) => {
        if (!label) {
            label = basename(outfile || 'undefined');
        }

        const timeLabel = `${label} concatenated in`;
        console.time(timeLabel);

        try {
            if (!Array.isArray(includes)) {
                includes = [ includes ];
            }

            includes = resolve(includes);
            outfile  = resolve(outfile);

            if (supportsGlob && globOptions) {
                includes = await glob(includes, globOptions);
            }

            if (concatOptions.removeDuplicates) {
                includes = includes.map((path) => normalize(path));
                includes = [ ...new Set(includes) ];
            }

            await concat(includes, outfile);

            if (includes.length) {
                message(`${label} concatenated`, 'success', timeLabel);
            } else {
                message(`${label} is empty`, 'notice', timeLabel);
            }
        } catch (err) {
            message(`Error concatenating ${label}`, 'error');
            message(err);

            notification({
                title:   `${label} concatenation failed 🚨`,
                message: `${err.name}: ${err.message}`
            });
        }
    });
};
