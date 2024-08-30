/**
 * Clamp a value to fit within a specific range (ex: clamp(0, 100, -12) --> 0).
 *
 * @param {number} min   - Minimum value expected.
 * @param {number} max   - Maximum value expected.
 * @param {number} value - Current value.
 *
 * @returns {number} - Clamped value.
 */
export declare function clamp(min: number, max: number, value: number): number;
/**
 * Map one range to another (ex: mapRange(-10, 10, 0, 100, 5) --> 75).
 *
 * @param {number} inMin  - Current minimum value.
 * @param {number} inMax  - Current maximum value.
 * @param {number} outMin - Maximum value expected.
 * @param {number} outMax - Maximum value expected.
 * @param {number} value  - Current value.
 *
 * @returns {number} - New value that should be between minimum value expected and maximum value.
 */
export declare function mapRange(inMin: number, inMax: number, outMin: number, outMax: number, value: number): number;
/**
 * Map a number within a range to a progress between 0 to 1 (ex: normalize(100, 200, 150) --> 0.5).
 *
 * @param {number} min   - Current minimum value.
 * @param {number} max   - Current maximum value.
 * @param {number} value - Current value.
 *
 * @returns {number} - New value that should be between 0 and 1.
 */
export declare function normalize(min: number, max: number, value: number): number;
/**
 * Get closest number from an array.
 *
 * @param {number[]} array  - Numbers array.
 * @param {number}   target - Reference value.
 *
 * @returns {number} - Closest number.
 */
export declare function closestNumber(array: number[], target: number): number;
