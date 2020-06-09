/**
 * Returns an array containing all the parent nodes of the given node
 * @param  {object} node
 * @return {array} parent nodes
 */
export function getParents(elem) {
    // Set up a parent array
    let parents = [];

    // Push each parent element to the array
    for (; elem && elem !== document; elem = elem.parentNode) {
        parents.push(elem);
    }

    // Return our parent array
    return parents;
}

// https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/
export function queryClosestParent(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;
}
