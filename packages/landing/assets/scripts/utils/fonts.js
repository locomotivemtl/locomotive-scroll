/**
 * Font Faces
 *
 * Provides utilities to facilitate interactions with the CSS Font Loading API.
 *
 * Features functions to:
 *
 * - Retrieve one or more `FontFace` instances based on a font search query.
 * - Check if a `FontFace` instance matches a font search query.
 * - Eagerly load fonts that match a font search query.
 * - Wait until fonts that match a font search query are loaded.
 *
 * References:
 *
 * - {@link https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API}
 */

/**
 * @typedef {Object} FontFaceReference
 *
 * @property {string} family   - The name used to identify the font in our CSS.
 * @property {string} [style]  - The style used by the font in our CSS.
 * @property {string} [weight] - The weight used by the font in our CSS.
 */

const isFontLoadingAPIAvailable = ('fonts' in document);

/**
 * Determines if the given font matches the given `FontFaceReference`.
 *
 * @param {FontFace}          font      - The font to inspect.
 * @param {FontFaceReference} criterion - The object of property values to match.
 *
 * @returns {boolean}
 */
function conformsToReference(font, criterion)
{
    for (const [ key, value ] of Object.entries(criterion)) {
        switch (key) {
            case 'family': {
                if (trim(font[key]) !== value) {
                    return false;
                }
                break;
            }

            case 'weight': {
                /**
                 * Note concerning font weights:
                 * Loose equality (`==`) is used to compare numeric weights,
                 * a number (`400`) and a numeric string (`"400"`).
                 * Comparison between numeric and keyword values is neglected.
                 *
                 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#common_weight_name_mapping
                 */
                if (font[key] != value) {
                    return false;
                }
                break;
            }

            default: {
                if (font[key] !== value) {
                    return false;
                }
                break;
            }
        }
    }

    return true;
}

/**
 * Determines if the given font matches the given font shorthand.
 *
 * @param {FontFace} font      - The font to inspect.
 * @param {string}   criterion - The font shorthand to match.
 *
 * @returns {boolean}
 */
function conformsToShorthand(font, criterion)
{
    const family = trim(font.family);

    if (trim(family) === criterion) {
        return true;
    }

    if (
        criterion.endsWith(trim(family)) && (
            criterion.match(font.weight) ||
            criterion.match(font.style)
        )
    ) {
        return true;
    }

    return true;
}

/**
 * Determines if the given font matches any of the given criteria.
 *
 * @param {FontFace}            font     - The font to inspect.
 * @param {FontFaceReference[]} criteria - A list of objects with property values to match.
 *
 * @returns {boolean}
 */
function conformsToAnyReference(font, criteria)
{
    for (const criterion of criteria) {
        if (conformsToReference(font, criterion)) {
            return true;
        }
    }

    return false;
}

/**
 * Returns an iterator of all `FontFace` from `document.fonts` that satisfy
 * the provided `FontFaceReference`.
 *
 * @param {FontFaceReference} font
 *
 * @returns {FontFace[]}
 */
function findManyByReference(search)
{
    const found = [];

    for (const font of document.fonts) {
        if (conformsToReference(font, search)) {
            found.push(font);
        }
    }

    return found;
}

/**
 * Returns an iterator of all `FontFace` from `document.fonts` that satisfy
 * the provided font shorthand.
 *
 * @param {string} font
 *
 * @returns {FontFace[]}
 */
function findManyByShorthand(search)
{
    const found = [];

    for (const font of document.fonts) {
        if (conformsToShorthand(font, search)) {
            found.push(font);
        }
    }

    return found;
}

/**
 * Returns the first `FontFace` from `document.fonts` that satisfies
 * the provided `FontFaceReference`.
 *
 * @param {FontFaceReference} font
 *
 * @returns {?FontFace}
 */
function findOneByReference(search)
{
    for (const font of document.fonts) {
        if (conformsToReference(font, criterion)) {
            return font;
        }
    }

    return null;
}

/**
 * Returns the first `FontFace` from `document.fonts` that satisfies
 * the provided font shorthand.
 *
 * Examples:
 *
 * - "Roboto"
 * - "italic bold 16px Roboto"
 *
 * @param {string} font
 *
 * @returns {?FontFace}
 */
function findOneByShorthand(search)
{
    for (const font of document.fonts) {
        if (conformsToShorthand(font, search)) {
            return font;
        }
    }

    return null;
}

/**
 * Returns a `FontFace` from `document.fonts` that satisfies
 * the provided query.
 *
 * @param {FontFaceReference|string} font - Either:
 *     - a `FontFaceReference` object
 *     - a font family name
 *     - a font specification, for example "italic bold 16px Roboto"
 *
 * @returns {?FontFace}
 *
 * @throws {TypeError}
 */
function getAny(search) {
    if (search) {
        switch (typeof search) {
            case 'string':
                return findOneByShorthand(search);

            case 'object':
                return findOneByReference(search);
        }
    }

    throw new TypeError(
        'Expected font query to be font shorthand or font reference'
    );
}

/**
 * Returns an iterator of all `FontFace` from `document.fonts` that satisfy
 * the provided queries.
 *
 * @param {FontFaceReference|string|(FontFaceReference|string)[]} queries
 *
 * @returns {FontFace[]}
 *
 * @throws {TypeError}
 */
function getMany(queries) {
    if (!Array.isArray(queries)) {
        queries = [ queries ];
    }

    const found = new Set();

    queries.forEach((search) => {
        if (search) {
            switch (typeof search) {
                case 'string':
                    found.add(...findManyByShorthand(search));
                    return;

                case 'object':
                    found.add(...findManyByReference(search));
                    return;
            }
        }

        throw new TypeError(
            'Expected font query to be font shorthand or font reference'
        );
    })

    return [ ...found ];
}

/**
 * Determines if a font face is registered.
 *
 * @param {FontFace|FontFaceReference|string} search - Either:
 *     - a `FontFace` instance
 *     - a `FontFaceReference` object
 *     - a font family name
 *     - a font specification, for example "italic bold 16px Roboto"
 *
 * @returns {boolean}
 */
function hasAny(search) {
    if (search instanceof FontFace) {
        return document.fonts.has(search);
    }

    return getAny(search) != null;
}

/**
 * Eagerly load fonts.
 *
 * Most user agents only fetch and load fonts when they are first needed
 * ("lazy loaded"), which can result in a perceptible delay.
 *
 * This function will "eager load" the fonts.
 *
 * @param {(FontFace|FontFaceReference)[]} fontsToLoad - List of fonts to load.
 * @param {boolean}             [debug]     - If TRUE, log details to the console.
 *
 * @returns {Promise}
 */
async function loadFonts(fontsToLoad, debug = false)
{
    if ((fontsToLoad.size ?? fontsToLoad.length) === 0) {
        throw new TypeError(
            'Expected at least one font'
        );
    }

    return await loadFontsWithAPI([ ...fontsToLoad ], debug);
}

/**
 * Eagerly load a font using `FontFaceSet` API.
 *
 * @param {FontFace} font
 *
 * @returns {Promise}
 */
async function loadFontFaceWithAPI(font)
{
    return await (font.status === 'unloaded'
        ? font.load()
        : font.loaded
    ).then((font) => font, (err) => font)
}

/**
 * Eagerly load fonts using `FontFaceSet` API.
 *
 * @param {FontFaceReference[]} fontsToLoad
 * @param {boolean}             [debug]
 *
 * @returns {Promise}
 */
async function loadFontsWithAPI(fontsToLoad, debug = false)
{
    debug && console.group('[loadFonts:API]', fontsToLoad.length, '/', document.fonts.size);

    const fontsToBeLoaded = [];

    for (const fontToLoad of fontsToLoad) {
        if (fontToLoad instanceof FontFace) {
            if (!document.fonts.has(fontToLoad)) {
                document.fonts.add(fontToLoad);
            }

            fontsToBeLoaded.push(
                loadFontFaceWithAPI(fontToLoad)
            );
        } else {
            fontsToBeLoaded.push(
                ...getMany(fontToLoad).map((font) => loadFontFaceWithAPI(font))
            );
        }
    }

    debug && console.groupEnd();

    return await Promise.all(fontsToBeLoaded);
}

/**
 * Removes quotes from the the string.
 *
 * When a `@font-face` is declared, the font family is sometimes
 * defined in quotes which end up included in the `FontFace` instance.
 *
 * @param {string} value
 *
 * @returns {string}
 */
function trim(value) {
    return value.replace(/['"]+/g, '');
}

/**
 * Returns a Promise that resolves with the specified fonts
 * when they are done loading or failed.
 *
 * @param {FontFaceReference|string|(FontFaceReference|string)[]} queries
 *
 * @returns {Promise}
 */
async function whenReady(queries)
{
    const fonts = getMany(queries);

    return await Promise.all(fonts.map((font) => font.loaded));
}

export {
    getAny,
    getMany,
    hasAny,
    isFontLoadingAPIAvailable,
    loadFonts,
    whenReady,
}
