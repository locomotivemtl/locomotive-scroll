/**
 * Intersection Observer
 *
 * Detecting visibility of an element in the viewport.
 *
 * Features functions to:
 *
 * - Trigger inview/outOfView callbacks
 * - If the element has a requestAnimationFrame dependency, set interactivy status for the ScrollElement Class
 *
 * References:
 *
 * - {@link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API}
 */
import type { IIOOptions } from '../types';
import ScrollElement from './ScrollElement';
export default class IO {
    scrollElements: ScrollElement[];
    private rootMargin;
    private IORaf;
    private observer;
    constructor({ scrollElements, rootMargin, IORaf, }: IIOOptions);
    /**
     * Lifecyle - Initialize Intersection Observer.
     *
     * @private
     */
    private _init;
    /**
     * Lifecyle - Destroy Intersection Observer.
     */
    destroy(): void;
    /**
     * Subscribe element to the Intersection Observer.
     *
     * @param {HTMLElement} $scrollElement - DOM Element to observe.
     */
    observe($scrollElement: HTMLElement): void;
    /**
     * Unsubscribe element to the Intersection Observer.
     *
     * @param {HTMLElement} $scrollElement - DOM Element to unobserve.
     */
    unobserve($scrollElement: HTMLElement): void;
    /**
     * Find ScrollElementReference instance and trigger inview callbacks.
     *
     * @private
     *
     * @param {IntersectionObserverEntry} entry - DOM Element to observe.
     */
    private _setInview;
    /**
     * Find ScrollElementReference instance and trigger out of view callbacks.
     *
     * @private
     *
     * @param {IntersectionObserverEntry} entry - DOM Element to observe.
     */
    private _setOutOfView;
}
