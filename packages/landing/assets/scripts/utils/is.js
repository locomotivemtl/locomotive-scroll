/**
 * Determines if the argument is object-like.
 *
 * A value is object-like if it's not `null` and has a `typeof` result of "object".
 *
 * @param  {*} x - The value to be checked.
 * @return {boolean}
 */

const isObject = x => (x && typeof x === 'object')

/**
 * Determines if the argument is a function.
 *
 * @param  {*} x - The value to be checked.
 * @return {boolean}
 */

const isFunction = x => typeof x === 'function'


export {
    isObject,
    isFunction
}
