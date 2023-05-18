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

import { IIOOptions } from '../types';
import ScrollElement from './ScrollElement';

export default class IO {
    public scrollElements: ScrollElement[];
    private rootMargin: string;
    private IORaf: boolean;
    private observer!: IntersectionObserver;

    constructor({
        scrollElements,
        rootMargin = '-1px -1px -1px -1px',
        IORaf,
    }: IIOOptions) {
        // Parameters
        this.scrollElements = scrollElements;
        this.rootMargin = rootMargin;
        this.IORaf = IORaf;

        // Init
        this._init();
    }

    /**
     * Lifecyle - Initialize Intersection Observer.
     *
     * @private
     */
    private _init() {
        // Options
        const observerOptions = {
            rootMargin: this.rootMargin,
        };

        // Callback
        const onIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                const $targetItem: ScrollElement | undefined =
                    this.scrollElements.find(
                        (item) => item.$el === entry.target
                    );

                if (entry.isIntersecting) {
                    $targetItem && ($targetItem.isAlreadyIntersected = true);
                    this._setInview(entry);
                } else if ($targetItem && $targetItem.isAlreadyIntersected) {
                    this._setOutOfView(entry);
                }
            });
        };

        // Instance
        this.observer = new IntersectionObserver(onIntersect, observerOptions);

        // Observe each default elements
        for (const scrollElement of this.scrollElements) {
            const $scrollElement = scrollElement.$el;
            this.observe($scrollElement);
        }
    }

    /**
     * Lifecyle - Destroy Intersection Observer.
     */
    public destroy() {
        this.observer.disconnect();
    }

    /**
     * Subscribe element to the Intersection Observer.
     *
     * @param {HTMLElement} $scrollElement - DOM Element to observe.
     */
    public observe($scrollElement: HTMLElement) {
        if (!$scrollElement) {
            return;
        }

        this.observer.observe($scrollElement);
    }

    /**
     * Unsubscribe element to the Intersection Observer.
     *
     * @param {HTMLElement} $scrollElement - DOM Element to unobserve.
     */
    public unobserve($scrollElement: HTMLElement) {
        if (!$scrollElement) {
            return;
        }

        this.observer.unobserve($scrollElement);
    }

    /**
     * Find ScrollElementReference instance and trigger inview callbacks.
     *
     * @private
     *
     * @param {IntersectionObserverEntry} entry - DOM Element to observe.
     */
    private _setInview(entry: IntersectionObserverEntry) {
        const scrollElement = this.scrollElements.find(
            (scrollElement) => scrollElement.$el === entry.target
        );

        this.IORaf && scrollElement?.setInteractivityOn();
        !this.IORaf && scrollElement?.setInview();
    }

    /**
     * Find ScrollElementReference instance and trigger out of view callbacks.
     *
     * @private
     *
     * @param {IntersectionObserverEntry} entry - DOM Element to observe.
     */
    private _setOutOfView(entry: IntersectionObserverEntry) {
        const scrollElement = this.scrollElements.find(
            (scrollElement) => scrollElement.$el === entry.target
        );

        this.IORaf && scrollElement?.setInteractivityOff();
        !this.IORaf && scrollElement?.setOutOfView();

        // Unobserve if element doesn't have repeat attribute
        if (!scrollElement?.attributes.scrollRepeat && !this.IORaf) {
            this.unobserve(entry.target as HTMLElement);
        }
    }
}
