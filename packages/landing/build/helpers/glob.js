/**
 * @file Retrieve the first available glob library.
 *
 * Note that options vary between libraries.
 *
 * Candidates:
 *
 * - {@link https://npmjs.com/package/tiny-glob tiny-glob} [1][5][6]
 * - {@link https://npmjs.com/package/globby globby} [2][5]
 * - {@link https://npmjs.com/package/fast-glob fast-glob} [3]
 * - {@link https://npmjs.com/package/glob glob} [1][4][5]
 *
 * Notes:
 *
 * - [1] The library's function accepts only a single pattern.
 * - [2] The library's function accepts only an array of patterns.
 * - [3] The library's function accepts either a single pattern
 *       or an array of patterns.
 * - [4] The library's function does not return a Promise but will be
 *       wrapped in a function that does return a Promise.
 * - [5] The library's function will be wrapped in a function that
 *       supports a single pattern and an array of patterns.
 * - [6] The library's function returns files and directories but will be
 *       preconfigured to return only files.
 */

import { promisify } from 'node:util';

/**
 * @callback GlobFn
 *
 * @param {string|string[]} patterns - A string pattern
 *     or an array of string patterns.
 * @param {object}          options
 *
 * @returns {Promise<string[]>}
 */

/**
 * @typedef {object} GlobOptions
 */

/**
 * @type {GlobFn|undefined} The discovered glob function.
 */
let glob;

/**
 * @type {string[]} A list of packages to attempt import.
 */
const candidates = [
    'tiny-glob',
    'globby',
    'fast-glob',
    'glob',
];

try {
    glob = await importGlob();
} catch (err) {
    // do nothing
}

/**
 * @type {boolean} Whether a glob function was discovered (TRUE) or not (FALSE).
 */
const supportsGlob = (typeof glob === 'function');

/**
 * Imports the first available glob function.
 *
 * @throws {TypeError} If no glob library was found.
 *
 * @returns {GlobFn}
 */
async function importGlob() {
    for (let name of candidates) {
        try {
            let globModule = await import(name);

            if (typeof globModule.default !== 'function') {
                throw new TypeError(`Expected ${name} to be a function`);
            }

            /**
             * Wrap the function to ensure
             * a common pattern.
             */
            switch (name) {
                case 'tiny-glob':
                    /** [1][5] */
                    return createArrayableGlob(
                        /** [6] */
                        createPresetGlob(globModule.default, {
                            filesOnly: true
                        })
                    );

                case 'globby':
                    /** [2][5] - If `patterns` is a string, wraps into an array. */
                    return (patterns, options) => globModule.default([].concat(patterns), options);

                case 'glob':
                    /** [1][5] */
                    return createArrayableGlob(
                        /** [4] */
                        promisify(globModule.default)
                    );

                default:
                    return globModule.default;
            }
        } catch (err) {
            // swallow this error; skip to the next candidate.
        }
    }

    throw new TypeError(
        `No glob library was found, expected one of: ${candidates.join(', ')}`
    );
}

/**
 * Creates a wrapper function for the glob function
 * to provide support for arrays of patterns.
 *
 * @param {function} globFn - The glob function.
 *
 * @returns {GlobFn}
 */
function createArrayableGlob(globFn) {
    return (patterns, options) => {
        /** [2] If `patterns` is a string, wraps into an array. */
        patterns = [].concat(patterns);

        const globs = patterns.map((pattern) => globFn(pattern, options));

        return Promise.all(globs).then((files) => {
            return [].concat.apply([], files);
        });
    };
}

/**
 * Creates a wrapper function for the glob function
 * to define new default options.
 *
 * @param {function}    globFn  - The glob function.
 * @param {GlobOptions} presets - The glob function options to preset.
 *
 * @returns {GlobFn}
 */
function createPresetGlob(globFn, presets) {
    return (patterns, options) => globFn(patterns, Object.assign({}, presets, options));
}

export default glob;

export {
    glob,
    supportsGlob,
};
