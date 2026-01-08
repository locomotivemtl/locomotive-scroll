/**
 * Scroll Element
 *
 * Give tools to compute element progress in the viewport and triggers callbacks to animate it.
 *
 * Features functions to:
 *
 * - scrollClass - Add a custom class when the element is intersected by the offset
 * - scrollOffset - Determine offsets to intersect the element
 * - scrollPosition - Determine the element positions to consider an element as intersected.
 * - scrollCssProgress - Add a specific css variable (PROGRESS_CSS_VAR) that store the scroll progress
 * - scrollEventProgress - Send scroll progress to custom event listeners.
 * - scrollSpeed - Add a scroll multiplicator to create a parallax effect
 * - scrollRepeat - Repeat the option to trigger animation each time the element is intersected
 * - scrollCall - Call a custom event when the element is intersected
 */
import type { IScrollElementOptions, IScrollElementAttributes, IScrollElementCallbacksValues, scrollOrientation } from '../types';
export default class ScrollElement {
    $el: HTMLElement;
    id: number;
    needRaf: boolean;
    attributes: IScrollElementAttributes;
    scrollOrientation: scrollOrientation;
    isAlreadyIntersected: boolean;
    private intersection;
    private metrics;
    private currentScroll;
    private translateValue;
    private progress;
    private lastProgress;
    private isInview;
    private isInteractive;
    private isInFold;
    private isFirstResize;
    private subscribeElementUpdateFn;
    private unsubscribeElementUpdateFn;
    private lenisInstance;
    private getWindowSize;
    private getMetricsStart;
    private getMetricsSize;
    private readonly startPositionHandlers;
    private readonly endPositionHandlers;
    constructor({ $el, id, subscribeElementUpdateFn, unsubscribeElementUpdateFn, needRaf, scrollOrientation, lenisInstance, }: IScrollElementOptions);
    /**
     * Lifecyle - Initialize progress tracking.
     *
     * @private
     */
    private _init;
    /**
     * Callback - Resize callback
     */
    onResize({ currentScroll }: IScrollElementCallbacksValues): void;
    /**
     * Callback - RAF callback
     */
    onRender({ currentScroll, smooth }: IScrollElementCallbacksValues): void;
    /**
     * Inview callback
     */
    setInview(): void;
    /**
     * Out of view callback
     */
    setOutOfView(): void;
    /**
     * Switch interactivity on to subscribe the instance to the RAF
     * and start calculations.
     */
    setInteractivityOn(): void;
    /**
     * Switch interactivity off to unsubscribe the instance to the RAF
     * and stop calculations.
     */
    setInteractivityOff(): void;
    /**
     * Resize method that compute the element's values.
     *
     * @private
     */
    private _resize;
    /**
     * Compute element's offsets and determine if the element is in fold.
     *
     * @private
     */
    private _computeMetrics;
    /**
     * Compute intersection values depending on the context.
     * Uses handler-based approach for cleaner, more maintainable code.
     *
     * @private
     */
    private _computeIntersection;
    /**
     * Compute the scroll progress of the element depending
     * on its intersection values.
     *
     * @private
     *
     * @param {number} [forcedProgress] - Value to force progress.
     */
    private _computeProgress;
    /**
     * Set the element's progress to a specific css variable.
     *
     * @private
     *
     * @param {number} [currentProgress] - Progress value.
     */
    _setCssProgress(currentProgress?: number): void;
    /**
     * Set the element's progress to the custom event listeners.
     *
     * @private
     *
     * @param {number} [currentProgress] - Progress value.
     */
    _setCustomEventProgress(currentProgress?: number): void;
    /**
     * Function to get scroll call from.
     *
     * @private
     */
    _getScrollCallFrom(): "start" | "end";
    /**
     * Lifecyle - Destroy and cleanup the scroll element.
     *
     * Removes all CSS modifications and clears references to prevent memory leaks.
     */
    destroy(): void;
    /**
     * Function to dispatch a custom event.
     *
     * @private
     *
     * @param {string} way - Enter or leave.
     * @param {string} from - Start or end.
     */
    _dispatchCall(way: string, from: string): void;
}
//# sourceMappingURL=ScrollElement.d.ts.map