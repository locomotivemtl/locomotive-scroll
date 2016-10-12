/**
 * @see  https://github.com/ractivejs/ractive/blob/dev/src/utils/html.js
 */
export function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

/**
 * Prepare HTML content that contains mustache characters for use with Ractive
 * @param  {string} str
 * @return {string}
 */
export function unescapeHtml(str) {
    return str
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}

/**
 * Get element data attributes
 * @param   {DOMElement}  node
 * @return  {Array}       data
 */
export function getNodeData(node) {
    // All attributes
    var attributes = node.attributes;

    // Regex Pattern
    var pattern = /^data\-(.+)$/;

    // Output
    var data = {};

    for (let i in attributes) {
        if (!attributes[i]) {
            continue;
        }

        // Attributes name (ex: data-module)
        let name = attributes[i].name;

        // This happens.
        if (!name) {
            continue;
        }

        let match = name.match(pattern);
        if (!match) {
            continue;
        }

        // If this throws an error, you have some
        // serious problems in your HTML.
        data[match[1]] = node.getAttribute(name);
    }

    return data;
}
