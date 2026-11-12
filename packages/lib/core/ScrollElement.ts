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
 * - scrollDelay - Lerp factor that makes the parallax lag behind the scroll
 */

import type Lenis from 'lenis';
import type {
    IScrollElementAttributes,
    IScrollElementCallbacksValues,
    IScrollElementIntersection,
    IScrollElementMetrics,
    IScrollElementOptions,
    scrollOrientation,
} from '../types';
import {
    clamp,
    closestNumber,
    damp,
    mapRange,
    normalize,
} from '../utils/maths';

/** Constants */
const INVIEW_CLASS = 'is-inview';
const PROGRESS_CSS_VAR = '--progress';
/** Distance in px under which a delayed element snaps to its target */
const DELAY_SETTLE_EPSILON = 0.01;
/** Minimum share of the element's screen motion that trails, so a delay works without data-scroll-speed */
const DELAY_TRAIL_FLOOR = 0.25;
/** Soft limit of the trail, as a fraction of the viewport */
const DELAY_TRAIL_LIMIT = 0.25;

/**
 * Parse `data-scroll-delay` as a lerp factor.
 *
 * @param {string} [value] - Attribute value.
 *
 * @returns {?number} - Factor between 0 and 1 excluded, null otherwise.
 */
function parseScrollDelay(value?: string): number | null {
    const delay = parseFloat(value ?? '');
    return delay > 0 && delay < 1 ? delay : null;
}

export default class ScrollElement {
    public $el: HTMLElement;
    public id: number;
    public needRaf: boolean;
    public attributes: IScrollElementAttributes;
    public scrollOrientation: scrollOrientation;
    public isAlreadyIntersected: boolean;

    private intersection: IScrollElementIntersection;
    private triggerIntersection: IScrollElementIntersection;
    private metrics: IScrollElementMetrics;
    private currentScroll: number;
    private translateValue: number;
    private targetTranslateValue: number;
    private lastProgress: number | null;
    private isInview: boolean;
    private isInteractive: boolean;
    private isInFold: boolean;
    private isFirstResize: boolean;
    private isFirstRender: boolean;
    private isSettling: boolean;
    private delayedScroll: number;
    private legacyTriggers: boolean;
    private isTranslated: boolean;

    private subscribeElementUpdateFn: (scrollElement: ScrollElement) => void;
    private unsubscribeElementUpdateFn: (scrollElement: ScrollElement) => void;
    private lenisInstance: Lenis;

    // Cached functions to avoid orientation checks every frame
    private getWindowSize: () => number;
    private getMetricsStart: (bcr: DOMRect) => number;
    private getMetricsSize: (bcr: DOMRect) => number;

    // Position handlers for intersection.start (includes wSize)
    private readonly startPositionHandlers: Record<
        string,
        (
            offsetStart: number,
            wSize: number,
            viewport: number,
            size: number
        ) => number
    > = {
        start: (offsetStart, wSize, viewport) => offsetStart - wSize + viewport,
        middle: (offsetStart, wSize, viewport, size) =>
            offsetStart - wSize + viewport + size * 0.5,
        end: (offsetStart, wSize, viewport, size) =>
            offsetStart - wSize + viewport + size,
        fold: () => 0,
    };

    // Position handlers for intersection.end (DOES NOT include wSize - critical difference)
    private readonly endPositionHandlers: Record<
        string,
        (offsetStart: number, viewport: number, size: number) => number
    > = {
        start: (offsetStart, viewport) => offsetStart - viewport,
        middle: (offsetStart, viewport, size) =>
            offsetStart - viewport + size * 0.5,
        end: (offsetStart, viewport, size) => offsetStart - viewport + size,
    };

    constructor({
        $el,
        id,
        subscribeElementUpdateFn,
        unsubscribeElementUpdateFn,
        needRaf,
        scrollOrientation,
        lenisInstance,
        enableTouchSpeed,
        legacyTriggers,
    }: IScrollElementOptions) {
        // Scroll DOM element
        this.$el = $el;
        // Unique ID
        this.id = id;
        // RAF option
        this.needRaf = needRaf;
        // Scroll Direction
        this.scrollOrientation = scrollOrientation;
        // Lenis instance
        this.lenisInstance = lenisInstance;
        // Triggers on the natural position, as 5.0
        this.legacyTriggers = legacyTriggers;
        // Parent's callbacks
        this.subscribeElementUpdateFn = subscribeElementUpdateFn;
        this.unsubscribeElementUpdateFn = unsubscribeElementUpdateFn;

        // Attributes
        this.attributes = {
            scrollClass: this.$el.dataset['scrollClass'] ?? INVIEW_CLASS,
            scrollOffset: this.$el.dataset['scrollOffset'] ?? '0,0',
            scrollPosition: this.$el.dataset['scrollPosition'] ?? 'start,end',
            scrollCssProgress:
                this.$el.dataset['scrollCssProgress'] !== undefined,
            scrollEventProgress:
                this.$el.dataset['scrollEventProgress'] ?? null,
            scrollSpeed:
                this.$el.dataset['scrollSpeed'] !== undefined
                    ? parseFloat(this.$el.dataset['scrollSpeed'])
                    : null,
            scrollRepeat: this.$el.dataset['scrollRepeat'] !== undefined,
            scrollCall: this.$el.dataset['scrollCall'] ?? null,
            scrollIgnoreFold:
                this.$el.dataset['scrollIgnoreFold'] !== undefined,
            scrollEnableTouchSpeed:
                enableTouchSpeed ||
                this.$el.dataset['scrollEnableTouchSpeed'] !== undefined,
            scrollDelay: parseScrollDelay(this.$el.dataset['scrollDelay']),
        };

        // Limits: intersection drives the parallax, triggerIntersection the progress and triggers
        this.intersection = {
            start: 0,
            end: 0,
        };
        this.triggerIntersection = {
            start: 0,
            end: 0,
        };

        // Metrics
        this.metrics = {
            offsetStart: 0,
            offsetEnd: 0,
            bcr: {} as DOMRect,
        };

        // Scroll Values
        this.currentScroll = this.lenisInstance.scroll;

        // Parallax: translateValue is the applied value, it trails targetTranslateValue with scrollDelay
        this.translateValue = 0;
        this.targetTranslateValue = 0;

        // Progress
        this.lastProgress = null;

        // Inview
        this.isInview = false;
        this.isInteractive = false;
        this.isAlreadyIntersected = false;
        this.isInFold = false;
        this.isFirstResize = true;
        // The delay starts from the target, as v4 forced it on init, instead of sliding in from 0
        this.isFirstRender = true;
        // Out of the RAF margin but still subscribed until the delayed translation lands
        this.isSettling = false;
        // Scroll value the element follows with scrollDelay
        this.delayedScroll = this.currentScroll;
        // Parallax applied on the last render, so triggers follow the displayed position
        this.isTranslated = false;

        // Cache orientation-dependent functions to avoid repeated conditionals
        this.getWindowSize =
            this.scrollOrientation === 'vertical'
                ? () => this.lenisInstance.dimensions.height
                : () => this.lenisInstance.dimensions.width;

        this.getMetricsStart =
            this.scrollOrientation === 'vertical'
                ? (bcr: DOMRect) => bcr.top
                : (bcr: DOMRect) => bcr.left;

        this.getMetricsSize =
            this.scrollOrientation === 'vertical'
                ? (bcr: DOMRect) => bcr.height
                : (bcr: DOMRect) => bcr.width;

        // Init
        this._init();
    }

    /**
     * Lifecyle - Initialize progress tracking.
     *
     * @private
     */
    private _init() {
        if (!this.needRaf) {
            return;
        }

        // First resize to compute all values
        this._resize();
    }

    /**
     * Callback - Resize callback
     */
    public onResize({ currentScroll }: IScrollElementCallbacksValues) {
        this.currentScroll = currentScroll;
        this._resize();
    }

    /**
     * Callback - RAF callback
     */
    public onRender({
        currentScroll,
        smooth,
        reducedMotion,
        deltaTime,
    }: IScrollElementCallbacksValues) {
        const wSize = this.getWindowSize();
        this.currentScroll = currentScroll;
        // Reduced motion wins over data-scroll-enable-touch-speed
        this.isTranslated =
            !reducedMotion &&
            (this.attributes.scrollEnableTouchSpeed || smooth);
        this._computeProgress();

        if (!this._getParallaxSpeed() && !this.attributes.scrollDelay) {
            return;
        }

        if (!this.isTranslated) {
            if (this.translateValue) {
                this.$el.style.transform = `translate3d(0, 0, 0)`;
            }
            this.translateValue = 0;
            this.targetTranslateValue = 0;
            this.isFirstRender = true;
            this._stopSettling();
            return;
        }

        this.targetTranslateValue = this._getParallaxTranslate(
            this._getParallaxProgress(this.currentScroll),
            wSize
        );

        if (this.attributes.scrollDelay) {
            this._applyDelay(this.attributes.scrollDelay, wSize, deltaTime);
        } else {
            this.translateValue = this.targetTranslateValue;
        }

        this.$el.style.transform =
            this.scrollOrientation === 'vertical'
                ? `translate3d(0, ${this.translateValue}px, 0)`
                : `translate3d(${this.translateValue}px, 0, 0)`;
    }

    /**
     * Inview callback
     */
    public setInview() {
        if (this.isInview) {
            return;
        }

        this.isInview = true;
        this.$el.classList.add(this.attributes.scrollClass);

        const way = 'enter';
        const from = this._getScrollCallFrom();
        this.attributes.scrollCall && this._dispatchCall(way, from);
    }

    /**
     * Out of view callback
     */
    public setOutOfView() {
        if (!(this.isInview && this.attributes.scrollRepeat)) {
            return;
        }

        this.isInview = false;
        this.$el.classList.remove(this.attributes.scrollClass);

        const way = 'leave';
        const from = this._getScrollCallFrom();
        this.attributes.scrollCall && this._dispatchCall(way, from);
    }

    /**
     * Switch interactivity on to subscribe the instance to the RAF
     * and start calculations.
     */
    public setInteractivityOn() {
        if (this.isInteractive) {
            return;
        }

        this.isInteractive = true;

        // A settling element is still subscribed
        if (this.isSettling) {
            this.isSettling = false;
            return;
        }

        this.subscribeElementUpdateFn(this);
    }

    /**
     * Switch interactivity off to unsubscribe the instance to the RAF
     * and stop calculations.
     */
    public setInteractivityOff() {
        if (!this.isInteractive) {
            return;
        }

        this.isInteractive = false;

        // Keep rendering until the delayed translation reaches its target
        if (
            this.attributes.scrollDelay &&
            Math.abs(this.targetTranslateValue - this.translateValue) >
                DELAY_SETTLE_EPSILON
        ) {
            this.isSettling = true;
        } else {
            this.unsubscribeElementUpdateFn(this);
        }

        // Force progress to progress limit when the element is out
        this.lastProgress !== null &&
            this._computeProgress(closestNumber([0, 1], this.lastProgress));
    }

    /**
     * Move translateValue toward targetTranslateValue by following a delayed scroll.
     *
     * The parallax is computed on the delayed scroll. When it trails less than
     * DELAY_TRAIL_FLOOR of the screen motion, a share of the page scroll trails too.
     *
     * @private
     *
     * @param {number} factor    - Lerp factor from data-scroll-delay.
     * @param {number} wSize     - Viewport size on the scroll axis.
     * @param {number} deltaTime - Time elapsed since the last frame, in seconds.
     */
    private _applyDelay(factor: number, wSize: number, deltaTime: number) {
        // Start on the target, as v4 forced it on init, instead of sliding in
        if (this.isFirstRender) {
            this.isFirstRender = false;
            this.delayedScroll = this.currentScroll;
        } else {
            this.delayedScroll = damp(
                this.delayedScroll,
                this.currentScroll,
                factor,
                deltaTime
            );
        }

        const trailShare = Math.max(
            0,
            DELAY_TRAIL_FLOOR - this._getParallaxShare(wSize)
        );
        const trailLimit = DELAY_TRAIL_LIMIT * wSize;

        // Bound the lag too, so the element never waits at the limit once the scroll stops
        if (trailShare && trailLimit) {
            const lagLimit = (1.5 * trailLimit) / trailShare;
            this.delayedScroll =
                this.currentScroll -
                clamp(
                    -lagLimit,
                    lagLimit,
                    this.currentScroll - this.delayedScroll
                );
        }

        if (
            Math.abs(this.currentScroll - this.delayedScroll) <=
            DELAY_SETTLE_EPSILON
        ) {
            this.delayedScroll = this.currentScroll;
            this.translateValue = this.targetTranslateValue;
            this._stopSettling();
            return;
        }

        const trail = trailShare * (this.currentScroll - this.delayedScroll);
        this.translateValue =
            (trailLimit ? trailLimit * Math.tanh(trail / trailLimit) : trail) +
            this._getParallaxTranslate(
                this._getParallaxProgress(this.delayedScroll),
                wSize
            );
    }

    /**
     * Parallax speed from data-scroll-speed, null when it sets no parallax.
     *
     * @private
     */
    private _getParallaxSpeed(): number | null {
        const { scrollSpeed } = this.attributes;
        return scrollSpeed && !Number.isNaN(scrollSpeed) ? scrollSpeed : null;
    }

    /**
     * Parallax progress for a scroll, on the element's natural position.
     *
     * @private
     *
     * @param {number} scroll - Scroll value.
     */
    private _getParallaxProgress(scroll: number): number {
        return clamp(
            0,
            1,
            normalize(this.intersection.start, this.intersection.end, scroll)
        );
    }

    /**
     * Parallax translation for a progress, 0 without data-scroll-speed.
     *
     * @private
     *
     * @param {number} progress - Element progress.
     * @param {number} wSize    - Viewport size on the scroll axis.
     */
    private _getParallaxTranslate(progress: number, wSize: number): number {
        const scrollSpeed = this._getParallaxSpeed();
        if (!scrollSpeed) {
            return 0;
        }

        if (this.isInFold) {
            return Math.max(0, progress) * wSize * scrollSpeed * -1;
        }
        return mapRange(0, 1, -1, 1, progress) * wSize * scrollSpeed * -1;
    }

    /**
     * Parallax px per scroll px, negative when the element moves slower than the page.
     *
     * @private
     *
     * @param {number} wSize - Viewport size on the scroll axis.
     */
    private _getParallaxShare(wSize: number): number {
        const scrollSpeed = this._getParallaxSpeed();
        const range = this.intersection.end - this.intersection.start;
        if (!scrollSpeed || range <= 0) {
            return 0;
        }

        const progressScale = this.isInFold ? 1 : 2;
        return (progressScale * wSize * scrollSpeed) / range;
    }

    /**
     * Unsubscribe a settling element from the RAF.
     *
     * @private
     */
    private _stopSettling() {
        if (!this.isSettling) {
            return;
        }

        this.isSettling = false;
        this.unsubscribeElementUpdateFn(this);
    }

    /**
     * Resize method that compute the element's values.
     *
     * @private
     */
    private _resize() {
        this.metrics.bcr = this.$el.getBoundingClientRect();
        this._computeMetrics();
        this._computeIntersection();

        // First resize logic
        if (this.isFirstResize) {
            this.isFirstResize = false;
            // Dispatch default call if the element is in fold.
            if (this.isInFold) {
                this.setInview();
            }
        }
    }

    /**
     * Compute element's offsets and determine if the element is in fold.
     *
     * @private
     */
    private _computeMetrics() {
        const wSize = this.getWindowSize();
        const metricsStart = this.getMetricsStart(this.metrics.bcr);
        const metricsSize = this.getMetricsSize(this.metrics.bcr);

        this.metrics.offsetStart =
            this.currentScroll + metricsStart - this.translateValue;
        this.metrics.offsetEnd = this.metrics.offsetStart + metricsSize;

        if (
            this.metrics.offsetStart < wSize &&
            !this.attributes.scrollIgnoreFold
        ) {
            this.isInFold = true;
        } else {
            this.isInFold = false;
        }
    }

    /**
     * Compute intersection values depending on the context.
     * Uses handler-based approach for cleaner, more maintainable code.
     *
     * @private
     */
    private _computeIntersection() {
        const wSize = this.getWindowSize();
        const metricsSize = this.getMetricsSize(this.metrics.bcr);

        // Parse offset
        const offset = this.attributes.scrollOffset.split(',');
        const offsetStart = offset[0]?.trim() ?? '0';
        const offsetEnd = offset[1]?.trim() ?? '0';

        // Parse positions
        const scrollPosition = this.attributes.scrollPosition.split(',');
        let scrollPositionStart = scrollPosition[0]?.trim() ?? 'start';
        const scrollPositionEnd = scrollPosition[1]?.trim() ?? 'end';

        // Calculate viewport offsets
        const viewportStart = offsetStart.includes('%')
            ? wSize * parseInt(offsetStart.replace('%', '').trim()) * 0.01
            : parseInt(offsetStart);
        const viewportEnd = offsetEnd.includes('%')
            ? wSize * parseInt(offsetEnd.replace('%', '').trim()) * 0.01
            : parseInt(offsetEnd);

        // Fold exception
        if (this.isInFold) {
            scrollPositionStart = 'fold';
        }

        // Calculate intersection.start using handlers
        const startHandler = this.startPositionHandlers[scrollPositionStart];
        this.intersection.start = startHandler
            ? startHandler(
                  this.metrics.offsetStart,
                  wSize,
                  viewportStart,
                  metricsSize
              )
            : this.metrics.offsetStart - wSize + viewportStart; // default fallback

        // Calculate intersection.end using handlers
        const endHandler = this.endPositionHandlers[scrollPositionEnd];
        this.intersection.end = endHandler
            ? endHandler(this.metrics.offsetStart, viewportEnd, metricsSize)
            : this.metrics.offsetStart - viewportEnd + metricsSize; // default fallback

        // Ensure end > start
        if (this.intersection.end <= this.intersection.start) {
            switch (scrollPositionEnd) {
                case 'start':
                    this.intersection.end = this.intersection.start + 1;
                    break;
                case 'middle':
                    this.intersection.end =
                        this.intersection.start + metricsSize * 0.5;
                    break;
                case 'end':
                    this.intersection.end =
                        this.intersection.start + metricsSize;
                    break;
                default:
                    this.intersection.end = this.intersection.start + 1;
                    break;
            }
        }

        this._computeTriggerIntersection(wSize);
    }

    /**
     * Compute the scroll values where the displayed element meets the intersection.
     *
     * @private
     *
     * @param {number} wSize - Viewport size on the scroll axis.
     */
    private _computeTriggerIntersection(wSize: number) {
        if (this.legacyTriggers || !this._getParallaxSpeed()) {
            this.triggerIntersection.start = this.intersection.start;
            this.triggerIntersection.end = this.intersection.end;
            return;
        }

        this.triggerIntersection.start = this._getDisplayedTriggerScroll(
            this.intersection.start,
            wSize,
            true
        );
        this.triggerIntersection.end = this._getDisplayedTriggerScroll(
            this.intersection.end,
            wSize,
            false
        );
    }

    /**
     * Scroll where the displayed element reaches a natural trigger scroll.
     *
     * Solves scroll - translate(scroll) = naturalScroll. The parallax is linear
     * inside the intersection and constant outside, so each piece solves directly.
     * When the element stops or moves backward on screen, several scrolls match:
     * an entry keeps the first one, an exit the last one.
     *
     * @private
     *
     * @param {number}  naturalScroll - Trigger scroll on the natural position.
     * @param {number}  wSize         - Viewport size on the scroll axis.
     * @param {boolean} isEntry       - Whether the trigger starts the intersection.
     */
    private _getDisplayedTriggerScroll(
        naturalScroll: number,
        wSize: number,
        isEntry: boolean
    ): number {
        const { start, end } = this.intersection;
        const startTranslate = this._getParallaxTranslate(0, wSize);
        const endTranslate = this._getParallaxTranslate(1, wSize);
        // Displayed px per scroll px inside the intersection, 0 or less when the element stops or moves backward
        const insideSlope = 1 - (endTranslate - startTranslate) / (end - start);

        const beforeScroll = naturalScroll + startTranslate;
        const insideScroll =
            start + (naturalScroll - start + startTranslate) / insideSlope;
        const afterScroll = naturalScroll + endTranslate;

        const isBefore = beforeScroll <= start;
        const isInside = insideScroll >= start && insideScroll <= end;
        const isAfter = afterScroll >= end;

        if (isEntry) {
            if (isBefore) return beforeScroll;
            return isInside ? insideScroll : afterScroll;
        }
        if (isAfter) return afterScroll;
        return isInside ? insideScroll : beforeScroll;
    }

    /**
     * Intersection that drives the progress and triggers, on the displayed position.
     *
     * @private
     */
    private _getTriggerIntersection(): IScrollElementIntersection {
        return this.isTranslated ? this.triggerIntersection : this.intersection;
    }

    /**
     * Compute the scroll progress of the element depending
     * on its intersection values.
     *
     * @private
     *
     * @param {number} [forcedProgress] - Value to force progress.
     */
    private _computeProgress(forcedProgress?: number) {
        const { start, end } = this._getTriggerIntersection();
        const progress =
            forcedProgress ??
            clamp(0, 1, normalize(start, end, this.currentScroll));

        if (progress !== this.lastProgress) {
            this.lastProgress = progress;

            // Set the element's progress to the css variable
            this.attributes.scrollCssProgress && this._setCssProgress(progress);

            // Set the element's progress to the custom event listeners
            this.attributes.scrollEventProgress &&
                this._setCustomEventProgress(progress);

            // Logic to trigger the inview/out of view callbacks
            progress > 0 && progress < 1 && this.setInview();
            progress === 0 && this.setOutOfView();
            progress === 1 && this.setOutOfView();
        }
    }

    /**
     * Set the element's progress to a specific css variable.
     *
     * @private
     *
     * @param {number} [currentProgress] - Progress value.
     */
    _setCssProgress(currentProgress = 0) {
        this.$el.style.setProperty(
            PROGRESS_CSS_VAR,
            currentProgress.toString()
        );
    }

    /**
     * Set the element's progress to the custom event listeners.
     *
     * @private
     *
     * @param {number} [currentProgress] - Progress value.
     */
    _setCustomEventProgress(currentProgress = 0) {
        const customEventName = this.attributes.scrollEventProgress;

        if (!customEventName) return;

        const customEvent = new CustomEvent(customEventName, {
            detail: {
                target: this.$el,
                progress: currentProgress,
            },
        });
        window.dispatchEvent(customEvent);
    }

    /**
     * Function to get scroll call from.
     *
     * @private
     */
    _getScrollCallFrom() {
        const { start, end } = this._getTriggerIntersection();
        const closestIntersectionValue = closestNumber(
            [start, end],
            this.currentScroll
        );
        return start === closestIntersectionValue ? 'start' : 'end';
    }

    /**
     * Lifecyle - Destroy and cleanup the scroll element.
     *
     * Removes all CSS modifications and clears references to prevent memory leaks.
     */
    public destroy(): void {
        // Remove CSS variables
        if (this.attributes.scrollCssProgress) {
            this.$el.style.removeProperty(PROGRESS_CSS_VAR);
        }

        // Remove transform if parallax was applied
        if (this.attributes.scrollSpeed) {
            this.$el.style.removeProperty('transform');
        }

        // Remove class if added
        if (this.isInview && this.attributes.scrollClass) {
            this.$el.classList.remove(this.attributes.scrollClass);
        }
    }

    /**
     * Function to dispatch a custom event.
     *
     * @private
     *
     * @param {string} way - Enter or leave.
     * @param {string} from - Start or end.
     */
    _dispatchCall(way: string, from: string) {
        const customEventName = this.attributes.scrollCall;

        if (!customEventName) return;

        // Using CustomEvent API (https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
        const customEvent = new CustomEvent(customEventName, {
            detail: {
                target: this.$el,
                way,
                from,
            },
        });
        window.dispatchEvent(customEvent);
    }
}
