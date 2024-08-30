/**
 * Resize Observer
 *
 * The Resize Observer API provides a performant mechanism by which code can monitor an element for changes to its size,
 * with notifications being delivered to the observer each time the size changes.
 *
 * Features functions to:
 *
 * - Trigger the resize callback if the specified element's size change.
 *
 * References:
 *
 * - {@link https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API}
 */
import type { IROOptions } from '../types';
export default class RO {
    private $resizeElements;
    private isFirstObserve;
    private observer;
    private resizeCallback;
    constructor({ resizeElements, resizeCallback }: IROOptions);
    /**
     * Lifecyle - Initialize Resize Observer.
     *
     * @private
     */
    private _init;
    /**
     * Lifecyle - Destroy Resize Observer.
     */
    destroy(): void;
}
