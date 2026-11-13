/**
 * Font Faces
 *
 * Eagerly loads fonts with the CSS Font Loading API.
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

/**
 * Loads the font faces that match the references, or waits for them
 * if they are already loading.
 *
 * Most user agents only fetch fonts when they are first needed,
 * which can result in a perceptible delay.
 *
 * @param {FontFaceReference[]} fonts
 *
 * @returns {Promise<FontFace[]>} The matching faces that loaded.
 */
async function loadFonts(fonts) {
    const loaded = await Promise.all(
        fonts.map(({ family, style = 'normal', weight = '400' }) =>
            document.fonts.load(`${style} ${weight} 1em "${family}"`).catch((error) => {
                // The text keeps its fallback font, the page goes on
                console.warn(`Font failed to load: ${family} ${style} ${weight}`, error);
                return [];
            })
        )
    );

    return loaded.flat();
}

export {
    loadFonts,
}
