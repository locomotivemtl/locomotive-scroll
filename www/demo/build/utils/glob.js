/**
 * @file Retrieve the first available glob library.
 *
 * Note that options vary between libraries.
 *
 * Candidates:
 *
 * - {@link https://npmjs.com/package/tiny-glob tiny-glob}
 * - {@link https://npmjs.com/package/globby globby}
 * - {@link https://npmjs.com/package/fast-glob fast-glob}
 * - {@link https://npmjs.com/package/glob glob}
 */

import { promisify } from 'node:util';

/**
 * @type {string[]} A list of packages to attempt import.
 */
const candidates = [
    'tiny-glob',
    'globby',
    'fast-glob',
    'glob',
];

let glob;

try {
    glob = await importGlob();
} catch (err) {
    // do nothing
}

export default glob;

/**
 * Imports the first available glob function.
 *
 * @throws {TypeError} If no glob library was found.
 * @return {function}
 */
async function importGlob() {
    let glob, module;

    for (let name of candidates) {
        try {
            module = await import(name);

            if (typeof module.default !== 'function') {
                throw new TypeError(`Expected ${name} to be a function`);
            }

            /**
             * Wrap the function to ensure
             * a common pattern.
             */
            switch (name) {
                case 'tiny-glob':
                    return createArrayableGlob(module.default, {
                        filesOnly: true
                    });

                case 'glob':
                    return promisify(module.default);

                default:
                    return module.default;
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
 * @param  {function} glob    - The glob function.
 * @param  {object}   options - The glob options.
 * @return {function}
 */
function createArrayableGlob(glob, options) {
    return (patterns, options) => {
        const globs = patterns.map((pattern) => glob(pattern, options));

        return Promise.all(globs).then((files) => {
            return [].concat.apply([], files);
        });
    };
}
