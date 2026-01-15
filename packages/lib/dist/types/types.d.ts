import ScrollElement from './core/ScrollElement';
import type { LenisOptions } from 'lenis';
import type Lenis from 'lenis';
/**
 * @typedef {Object} ILenisScrollValues
 *
 * @property {number} scroll
 * @property {number} limit
 * @property {number} velocity
 * @property {number} direction
 * @property {number} progress
 */
export interface ILenisScrollValues {
    scroll: number;
    limit: number;
    velocity: number;
    direction: number;
    progress: number;
}
/**
 * @typedef {(number|HTMLElement|string)} LenisTargetScrollTo
 */
export type lenisTargetScrollTo = number | HTMLElement | string;
/**
 *
 * @typedef {Object} ILenisScrollTo
 *
 * @property {LenisTargetScrollTo} target      - Target that can be number, NodeElement or string (CSS selector).
 * @property {ILenisScrollToOptions} [options] - Scroll to options.
 */
export interface ILenisScrollTo {
    target: number | HTMLElement | string;
    options?: ILenisScrollToOptions;
}
/**
 * @typedef {Object} ILenisScrollToOptions
 *
 * @property {number} [offset]       - Number equivalent to scroll-padding-top.
 * @property {number} [lerp]         - Animation lerp intensity.
 * @property {number} [duration]     - Number scroll duration in seconds.
 * @property {boolean} [immediate]   - Ignore duration and easing.
 * @property {boolean} [lock]        - Whether or not to prevent the user from scrolling until the target is reached.
 * @property {boolean} [force]       - Reach target even if instance is stopped.
 * @property {function} [easing]     - Smooth scroll easing function.
 * @property {function} [onComplete] - Called when the target is reached.
 */
export interface ILenisScrollToOptions {
    offset?: number;
    lerp?: number;
    duration?: number;
    immediate?: boolean;
    lock?: boolean;
    force?: boolean;
    easing?(t: number): number;
    onComplete?(): void;
}
/**
 * @typedef {Object} ILocomotiveScrollOptions
 *
 * @property {LenisOptions}  [lenisOptions]      - Object to override default Lenis options.
 * @property {string}        [triggerRootMargin] - Root margin for trigger Intersection Observer.
 * @property {string}        [rafRootMargin]     - Root margin for RAF Intersection Observer.
 * @property {boolean}       [autoStart]         - Enable/Disable RAF auto start.
 * @property {function}      [scrollCallback]    - Scroll callback binded on the Lenis scroll event.
 */
export interface ILocomotiveScrollOptions {
    lenisOptions?: LenisOptions;
    triggerRootMargin?: string;
    rafRootMargin?: string;
    autoStart?: boolean;
    scrollCallback?(scrollValues: ILenisScrollValues): void;
    initCustomTicker?(render: () => void): void;
    destroyCustomTicker?(render: () => void): void;
}
/**
 * @typedef {Object} IScrollElementOptions
 *
 * @property {HTMLElement} $el                        - DOM Element with data-scroll attribute.
 * @property {number}      id                         - Instance UID.
 * @property {boolean}     needRaf                    - RequestAnimationFrame status.
 * @property {Lenis}       lenisInstance              - Lenis instance for scroll data.
 * @property {function}    subscribeElementUpdateFn   - Callback to subscribe instance to the main RAF.
 * @property {function}    unsubscribeElementUpdateFn - Callback to unsubscribe instance to the main RAF.
 * @property {function}    [scrollCallback]           - Scroll callback binded on the Lenis scroll event.
 */
export interface IScrollElementOptions {
    $el: HTMLElement;
    id: number;
    needRaf: boolean;
    scrollOrientation: scrollOrientation;
    lenisInstance: Lenis;
    subscribeElementUpdateFn(scrollElement: ScrollElement): void;
    unsubscribeElementUpdateFn(scrollElement: ScrollElement): void;
    scrollCallback?(scrollValues: ILenisScrollValues): void;
}
/**
 * @typedef {Object} IScrollElementAttributes
 *
 *  @property {string}  scrollClass             - Add a custom class when the element is intersected by the offset.
 *  @property {string}  scrollOffset            - Determine offsets to intersect the element.
 *  @property {string}  scrollPosition          - Determine the element positions to consider an element as intersected..
 *  @property {boolean} scrollCssProgress       - Add a specific css variable (PROGRESS_CSS_VAR) that store the scroll progress.
 *  @property {?string} scrollEventProgress     - Send scroll progress to custom event listeners.
 *  @property {?number} scrollSpeed             - Add a scroll multiplicator to create a parallax effect.
 *  @property {boolean} scrollRepeat            - Repeat the option to trigger animation each time the element is intersected.
 *  @property {?string} scrollCall              - Call a custom event when the element is intersected.
 *  @property {boolean} scrollIgnoreFold        - Ignore fold progress remapping.
 *  @property {boolean} scrollEnableTouchSpeed  - Enable parallax on touch devices.
 */
export interface IScrollElementAttributes {
    scrollClass: string;
    scrollOffset: string;
    scrollPosition: string;
    scrollCssProgress: boolean;
    scrollEventProgress: string | null;
    scrollSpeed: number | null;
    scrollRepeat: boolean;
    scrollCall: string | null;
    scrollIgnoreFold: boolean;
    scrollEnableTouchSpeed: boolean;
}
/**
 * @typedef {Object} IScrollElementIntersection
 *
 *  @property {number} start
 *  @property {number} end
 */
export interface IScrollElementIntersection {
    start: number;
    end: number;
}
/**
 * @typedef {Object} IScrollElementMetrics
 *
 *  @property {number}  offsetTop
 *  @property {number}  offsetBottom
 *  @property {DOMRect} bcr
 */
export interface IScrollElementMetrics {
    offsetStart: number;
    offsetEnd: number;
    bcr: DOMRect;
}
/**
 * @typedef {Object} IScrollElementCallbacksValues
 *
 *  @property {number}  currentScroll - Scroll value returned by Lenis.
 *  @property {boolean} smooth        - Whether parallax should be enabled (false on touch devices).
 */
export interface IScrollElementCallbacksValues {
    currentScroll: number;
    smooth: boolean;
}
/**
 * @typedef {Object} IIOOptions
 *
 *  @property {ScrollElement[]} scrollElements - A list of objects with property values to match.
 *  @property {boolean}         IORaf          - Defined if it concern elements which need a RAF.
 *  @property {string}          [rootMargin]   - Margin around the root.
 *  @property {HTMLElement}     [root]         - The Element that is used as the viewport for checking visibility (null for window).
 */
export interface IIOOptions {
    scrollElements: ScrollElement[];
    IORaf: boolean;
    rootMargin?: string;
    root?: HTMLElement | null;
}
/**
 * @typedef {Object} CoreOptions
 *
 * @property {HTMLElement} $el                                     - DOM Element used as scroll container.
 * @property {string}      [triggerRootMargin=TRIGGER_ROOT_MARGIN] - Root margin for trigger Intersection Observer.
 * @property {string}      [rafRootMargin=RAF_ROOT_MARGIN]         - Root margin for raf Intersection Observer.
 * @property {Lenis}       lenisInstance                          - Lenis instance for scroll data.
 */
export interface CoreOptions {
    $el: HTMLElement;
    triggerRootMargin?: string;
    rafRootMargin?: string;
    scrollOrientation: scrollOrientation;
    lenisInstance: Lenis;
}
export type scrollOrientation = 'vertical' | 'horizontal';
export type gestureOrientation = 'vertical' | 'horizontal' | 'both';
declare global {
    interface Window {
        locomotiveScrollVersion: string;
    }
}
//# sourceMappingURL=types.d.ts.map