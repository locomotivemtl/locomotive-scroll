/**
 * @file Provides simple user configuration options.
 */

import loconfig from '../../loconfig.json';

let usrconfig;

try {
    usrconfig = await import('../../loconfig.local.json');
    usrconfig = usrconfig.default;

    merge(loconfig, usrconfig);
} catch (err) {
    // do nothing
}

export default loconfig;

/**
 * Creates a new object with all nested object properties
 * merged into it recursively.
 *
 * @param  {object}   target     - The target object.
 * @param  {object[]} ...sources - The source object(s).
 * @throws {TypeError} If the target and source are the same.
 * @return {object} Returns the `target` object.
 */
export function merge(target, ...sources) {
    for (const source of sources) {
        if (target === source) {
            throw new TypeError(
                'Cannot merge, target and source are the same'
            );
        }

        for (const key in source) {
            if (source[key] != null) {
                if (isObjectLike(source[key]) && isObjectLike(target[key])) {
                    merge(target[key], source[key]);
                    continue;
                } else if (Array.isArray(source[key]) && Array.isArray(target[key])) {
                    target[key] = target[key].concat(source[key]);
                    continue;
                }
            }

            target[key] = source[key];
        }
    }

    return target;
}

/**
 * Determines whether the passed value is an `Object`.
 *
 * @param  {*} value - The value to be checked.
 * @return {boolean} Returns `true` if the value is an `Object`,
 *     otherwise `false`.
 */
function isObjectLike(value) {
    return (value != null && typeof value === 'object');
}
