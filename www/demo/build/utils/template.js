/**
 * @file Provides simple template tags.
 */

import loconfig from './config.js';

const templateData = flatten({
    paths: loconfig.paths
});

/**
 * Replaces all template tags from a map of keys and values.
 *
 * If replacement pairs contain a mix of substrings, regular expressions,
 * and functions, regular expressions are executed last.
 *
 * @param  {*}      input  - The value being searched and replaced on.
 *     If input is, or contains, a string, tags will be resolved.
 *     If input is, or contains, an object, it is mutated directly.
 *     If input is, or contains, an array, a shallow copy is returned.
 *     Otherwise, the value is left intact.
 * @param  {object} [data] - An object in the form `{ 'from': 'to', … }`.
 * @return {*} Returns the transformed value.
 */
export default function resolve(input, data = templateData) {
    switch (typeof input) {
        case 'string': {
            return resolveValue(input, data);
        }

        case 'object': {
            if (input == null) {
                break;
            }

            if (Array.isArray(input)) {
                return input.map((value) => resolve(value, data));
            } else {
                for (const key in input) {
                    input[key] = resolve(input[key], data);
                }
            }
        }
    }

    return input;
}

/**
 * Replaces all template tags in a string from a map of keys and values.
 *
 * If replacement pairs contain a mix of substrings, regular expressions,
 * and functions, regular expressions are executed last.
 *
 * @param  {string} input  - The string being searched and replaced on.
 * @param  {object} [data] - An object in the form `{ 'from': 'to', … }`.
 * @return {string} Returns the translated string.
 */
export function resolveValue(input, data = templateData) {
    const tags = [];

    if (data !== templateData) {
        data = flatten(data);
    }

    for (let tag in data) {
        tags.push(escapeRegExp(tag));
    }

    if (tags.length === 0) {
        return input;
    }

    const search = new RegExp('\\{%\\s*(' + tags.join('|') + ')\\s*%\\}', 'g');
    return input.replace(search, (match, key) => {
        let value = data[key];

        switch (typeof value) {
            case 'function':
                /**
                 * Retrieve the offset of the matched substring `args[0]`
                 * and the whole string being examined `args[1]`.
                 */
                let args = Array.prototype.slice.call(arguments, -2);
                return value.call(data, match, args[0], args[1]);

            case 'string':
            case 'number':
                return value;
        }

        return '';
    });
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
    for (let key in input) {
        let field = (prefix ? prefix + '.' + key : key);

        if (typeof input[key] === 'object') {
            flatten(input[key], field, target);
        } else {
            target[field] = input[key];
        }
    }

    return target;
}

/**
 * Quotes regular expression characters.
 *
 * @param  {string} str - The input string.
 * @return {string} Returns the quoted (escaped) string.
 */
function escapeRegExp(str) {
    return str.replace(/[\[\]\{\}\(\)\-\*\+\?\.\,\\\^\$\|\#\s]/g, '\\$&');
}
