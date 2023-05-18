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

import { IROOptions } from '../types';

export default class RO {
    private $resizeElements: HTMLElement[];
    private isFirstObserve: boolean;
    private observer!: ResizeObserver;
    private resizeCallback: () => void;

    constructor({ resizeElements, resizeCallback = () => {} }: IROOptions) {
        // Parameters
        this.$resizeElements = resizeElements;
        this.resizeCallback = resizeCallback;

        // Flags
        this.isFirstObserve = true;

        // Init
        this._init();
    }

    /**
     * Lifecyle - Initialize Resize Observer.
     *
     * @private
     */
    private _init() {
        // Callback
        const onResize = (entries: ResizeObserverEntry[]) => {
            !this.isFirstObserve && this.resizeCallback?.();
            this.isFirstObserve = false;
        };

        // Instance
        this.observer = new ResizeObserver(onResize);

        // Observe each default elements
        for (const $resizeElement of this.$resizeElements) {
            this.observer.observe($resizeElement);
        }
    }

    /**
     * Lifecyle - Destroy Resize Observer.
     */
    public destroy() {
        this.observer.disconnect();
    }
}
