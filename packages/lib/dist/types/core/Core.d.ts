/**
 * Integrates Lenis with Locomotive's built-in animation system
 */
import type { CoreOptions, IScrollElementCallbacksValues } from '../types';
import ScrollElement from './ScrollElement';
export default class Core {
    private $scrollContainer;
    private modularInstance?;
    private triggerRootMargin;
    private rafRootMargin;
    private scrollElements;
    private triggeredScrollElements;
    private RAFScrollElements;
    private scrollElementsToUpdate;
    private IOTriggerInstance;
    private IORafInstance;
    private scrollOrientation;
    constructor({ $el, modularInstance, triggerRootMargin, rafRootMargin, scrollOrientation, }: CoreOptions);
    /**
     * Lifecyle - Initialize the core.
     *
     * @private
     */
    private _init;
    /**
     * Lifecyle - Destroy core.
     */
    destroy(): void;
    /**
     * Callback - Resize callback.
     */
    onResize({ currentScroll }: IScrollElementCallbacksValues): void;
    /**
     * Callback - RAF callback.
     */
    onRender({ currentScroll, smooth }: IScrollElementCallbacksValues): void;
    /**
     * Remove items from lists of scroll elements and compute all new values.
     *
     * @param {HTMLElement} $oldContainer - HTMLElement that contains data-scroll elements to unsubscribe
     */
    removeScrollElements($oldContainer: HTMLElement): void;
    /**
     * Add items to lists of scroll elements and compute all new values.
     *
     * @param {HTMLElement} $newContainer - HTMLElement that contains data-scroll elements to subscribe
     */
    addScrollElements($newContainer: HTMLElement): void;
    /**
     * Create a ScrollElement instance for each elements with
     * `data-scroll` attribute.
     *
     * @private
     *
     * @param {HTMLElement[]} $scrollElements - List of elements that need
     *     to be regarded.
     */
    _subscribeScrollElements($scrollElements: HTMLElement[], fromIndex?: number, toObserve?: boolean): void;
    /**
     * Clear all ScrollElement arrays.
     *
     * @private
     */
    _unsubscribeAllScrollElements(): void;
    /**
     * Subscribe ScrollElement instance that needs to be updated.
     *
     * @private
     *
     * @param {ScrollElement} scrollElement - ScrollElement instance inview
     *     that needs to be updated.
     */
    _subscribeElementUpdate(scrollElement: ScrollElement): void;
    /**
     * Unscribe ScrollElement instance that doesn't need to be updated.
     *
     * @private
     *
     * @param {ScrollElement} scrollElement - The updated ScrollElement instance
     *     out of view now.
     */
    _unsubscribeElementUpdate(scrollElement: ScrollElement): void;
    /**
     * Check if a DOM Element need a requestAnimationFrame to be used.
     *
     * @private
     *
     * @param {HTMLElement} $scrollElement - The element that needs to be checked.
     *
     * @returns {boolean}
     */
    _checkRafNeeded($scrollElement: HTMLElement): boolean;
}
