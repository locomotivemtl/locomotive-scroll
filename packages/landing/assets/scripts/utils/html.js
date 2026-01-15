/**
 * Escape HTML string
 * @param {string}  str   - string to escape
 * @return {string} escaped string
 */

const escapeHtml = str =>
    str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag]))


/**
 * Unescape HTML string
 * @param {string}  str   - string to unescape
 * @return {string} unescaped string
 */

const unescapeHtml = str =>
    str.replace('&amp;', '&')
        .replace('&lt;', '<')
        .replace('&gt;', '>')
        .replace('&#39;', "'")
        .replace('&quot;', '"')


/**
 * Get element data attributes
 * @param {HTMLElement}  node   - node element
 * @return {array}       node data
 */

const getNodeData = node => {

    // All attributes
    const attributes = node.attributes

    // Regex Pattern
    const pattern = /^data\-(.+)$/

    // Output
    const data = {}

    for (let i in attributes) {
        if (!attributes[i]) {
            continue
        }

        // Attributes name (ex: data-module)
        let name = attributes[i].name

        // This happens.
        if (!name) {
            continue
        }

        let match = name.match(pattern)
        if (!match) {
            continue
        }

        // If this throws an error, you have some
        // serious problems in your HTML.
        data[match[1]] = getData(node.getAttribute(name))
    }

    return data;

}




/**
 * Parse value to data type.
 *
 * @link   https://github.com/jquery/jquery/blob/3.1.1/src/data.js
 * @param  {string} data - value to convert
 * @return {mixed}  value in its natural data type
 */

const rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
const getData = data => {
    if (data === 'true') {
        return true
    }

    if (data === 'false') {
        return false
    }

    if (data === 'null') {
        return null
    }

    // Only convert to a number if it doesn't change the string
    if (data === +data+'') {
        return +data
    }

    if (rbrace.test(data)) {
        return JSON.parse(data)
    }

    return data
}


/**
 * Returns an array containing all the parent nodes of the given node
 * @param  {HTMLElement}    $el     - DOM Element
 * @return {array}          parent nodes
 */

const getParents = $el => {

    // Set up a parent array
    let parents = []

    // Push each parent element to the array
    for (; $el && $el !== document; $el = $el.parentNode) {
        parents.push($el)
    }

    // Return our parent array
    return parents
}


export {
    escapeHtml,
    unescapeHtml,
    getNodeData,
    getData,
    getParents,
}
