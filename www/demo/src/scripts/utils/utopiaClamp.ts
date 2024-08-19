// © Andy Bell - https://buildexcellentwebsit.es/
// https://utopia.fyi/

import { config } from '../config';

/**
 * Utopia Clamp Function.
 *
 * This function calculates a CSS `clamp` value based on provided minimum and maximum pixel sizes.
 *
 * @param {number} min - Minimum pixel size.
 * @param {number} max - Maximum pixel size.
 * @returns {string} - The CSS `clamp` value in rems.
 *
 * @throws {Error} - Throws an error if min and max are not equal and rootSize is not defined in the config.
 *
 * @example
 * const result = utopiaClamp(320, 1440);
 * // Returns 'clamp(20rem, 4.33rem + 6.94vw, 80rem)'
 */
export const utopiaClamp = (min: number, max: number): string => {
    if (min === max) {
        return `${min / config.utopia.rootSize}rem`;
    }

    if (!config.utopia.rootSize) {
        throw new Error('Root size is not defined in the config.');
    }

    // Calculate minSize and maxSize in rems
    const minSize: number = min / config.utopia.rootSize;
    const maxSize: number = max / config.utopia.rootSize;

    // Convert the pixel viewport sizes into rems
    const minViewport: number = config.utopia.minViewport / config.utopia.rootSize;
    const maxViewport: number = config.utopia.maxViewport / config.utopia.rootSize;

    // Slope and intersection allow us to have a fluid value but also keep that sensible
    const slope: number = (maxSize - minSize) / (maxViewport - minViewport);
    const intersection: number = -1 * minViewport * slope + minSize;

    return `clamp(${minSize}rem, ${intersection.toFixed(2)}rem + ${(slope * 100).toFixed(2)}vw, ${maxSize}rem)`;
};
