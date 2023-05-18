/**
 * @file Provides generic functions and constants.
 */

/**
 * @type {RegExp} - Match all special characters.
 */
const regexUnescaped = /[\[\]\{\}\(\)\-\*\+\?\.\,\\\^\$\|\#\s]/g;

/**
 * Quotes regular expression characters.
 *
 * @param  {string} str - The input string.
 * @return {string} Returns the quoted (escaped) string.
 */
function escapeRegExp(str) {
    return str.replace(regexUnescaped, '\\$&');
}

/**
 * Creates a new object with all nested object properties
 * concatenated into it recursively.
 *
 * Nested keys are flattened into a property path:
 *
 * ```js
 * {
 *   a: {
 *     b: {
 *       c: 1
 *     }
 *   },
 *   d: 1
 * }
 * ```
 *
 * ```js
 * {
 *   "a.b.c": 1,
 *   "d": 1
 * }
 * ```
 *
 * @param  {object} input  - The object to flatten.
 * @param  {string} prefix - The parent key prefix.
 * @param  {object} target - The object that will receive the flattened properties.
 * @return {object} Returns the `target` object.
 */
function flatten(input, prefix, target = {}) {
    for (const key in input) {
        const field = (prefix ? prefix + '.' + key : key);

        if (isObjectLike(input[key])) {
            flatten(input[key], field, target);
        } else {
            target[field] = input[key];
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

/**
 * Creates a new object with all nested object properties
 * merged into it recursively.
 *
 * @param  {object}   target     - The target object.
 * @param  {object[]} ...sources - The source object(s).
 * @throws {TypeError} If the target and source are the same.
 * @return {object} Returns the `target` object.
 */
function merge(target, ...sources) {
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

export {
    escapeRegExp,
    flatten,
    isObjectLike,
    merge,
    regexUnescaped,
};
