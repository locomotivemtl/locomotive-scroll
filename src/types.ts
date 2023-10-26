import ScrollElement from './core/ScrollElement';

/**
 * @typedef {Object} IModular
 *
 * @property {HTMLElement} el
 * @property {any}         events
 * @property {function}    $
 * @property {function}    parent
 * @property {function}    call
 * @property {function}    on
 * @property {function}    getData
 * @property {function}    setData
 */
export interface IModular {
    el: HTMLElement;
    events: any;
    modules: any;
    $(): any;
    parent(): any;
    call(
        func: string,
        args: any | null,
        moduleName: string,
        moduleId?: string
    ): any;
    on(): any;
    getData(): any;
    setData(): any;
}

/**
 * @typedef {Object} ILenisOptions
 *
 * @property {(HTMLElement|Window)}  wrapper            - The element that will be used as the scroll container
 * @property {HTMLElement}           content            - The element that contains the content that will be scrolled, usually wrapper's direct child
 * @property {HTMLElement}           eventsTarget       - The element that will listen to wheel and touch events
 * @property {number}                lerp               - Linear interpolation (lerp) intensity (between 0 and 1)
 * @property {number}                duration           - The duration of scroll animation (in seconds). Useless if lerp defined
 * @property {scrollOrientation}     orientation        - The orientation of the scrolling.
 * @property {gestureOrientation}    gestureOrientation - The orientation of the gestures.
 * @property {boolean}               smoothWheel        - Whether or not to enable smooth scrolling for mouse wheel events
 * @property {boolean}               smoothTouch        - Whether or not to enable smooth scrolling for touch events.
 * @property {boolean}               syncTouch          - Mimic touch device scroll while allowing scroll sync (can be unstable on iOS<16)
 * @property {number}                syncTouchLerp      - Lerp applied during syncTouch inertia
 * @property {number}                wheelMultiplier    - The multiplier to use for mouse wheel events
 * @property {number}                touchMultiplier    - The multiplier to use for touch events
 * @property {boolean}               normalizeWheel     - Normalize wheel inputs across browsers
 * @property {boolean}               autoResize         - Resize instance automatically based on ResizeObserver. If false you must resize manually using .resize()
 * @property {function}              easing             - The easing function to use for the scroll animation, our default is custom but you can pick one from Easings.net. Useless if lerp defined
 */
export interface ILenisOptions {
    wrapper?: HTMLElement | Window,
    content?: HTMLElement,
    eventsTarget?: HTMLElement | Window,
    lerp?: number;
    duration?: number;
    orientation?: scrollOrientation;
    gestureOrientation?: gestureOrientation;
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    syncTouch?: boolean;
    syncTouchLerp?: number;
    touchInertiaMultiplier?: number;
    wheelMultiplier?: number;
    touchMultiplier?: number;
    normalizeWheel?: boolean;
    autoResize?: boolean;
    easing?(t: number): number;
}

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
 * @property {ILenisOptions} [lenisOptions]      - Object to override default Lenis options.
 * @property {IModular}      [modularInstance]   - Modular instance to execute call functions.
 * @property {string}        [triggerRootMargin] - Root margin for trigger Intersection Observer.
 * @property {string}        [rafRootMargin]     - Root margin for RAF Intersection Observer.
 * @property {boolean}       [autoResize]        - Enable/Disable the resize logic of the library.
 * @property {boolean}       [autoStart]         - Enable/Disable RAF auto start.
 * @property {function}      [scrollCallback]    - Scroll callback binded on the Lenis scroll event.
 */
export interface ILocomotiveScrollOptions {
    lenisOptions?: ILenisOptions;
    modularInstance?: IModular;
    triggerRootMargin?: string;
    rafRootMargin?: string;
    autoResize?: boolean;
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
 * @property {IModular}    [modularInstance]          - Modular instance to execute call functions.
 * @property {function}    subscribeElementUpdateFn   - Callback to subscribe instance to the main RAF.
 * @property {function}    unsubscribeElementUpdateFn - Callback to unsubscribe instance to the main RAF.
 * @property {function}    [scrollCallback]           - Scroll callback binded on the Lenis scroll event.
 */
export interface IScrollElementOptions {
    $el: HTMLElement;
    id: number;
    needRaf: boolean;
    scrollOrientation: scrollOrientation;
    modularInstance?: IModular;
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
 *  @property {boolean} scrollModuleProgress    - Send scroll progress to modular module that have a specific method (PROGRESS_MODULAR_METHOD).
 *  @property {boolean} scrollCssProgress       - Add a specific css variable (PROGRESS_CSS_VAR) that store the scroll progress.
 *  @property {?string} scrollEventProgress     - Send scroll progress to custom event listeners.
 *  @property {?number} scrollSpeed             - Add a scroll multiplicator to create a parallax effect.
 *  @property {boolean} scrollRepeat            - Repeat the option to trigger animation each time the element is intersected.
 *  @property {?string} scrollCall              - Call a custom event or a modular callback when the element is intersected.
 *  @property {?string} scrollCallSelf          - Specify that the modular callback is set on the scroll element itself.
 *  @property {boolean} scrollIgnoreFold        - Ignore fold progress remapping.
 *  @property {boolean} scrollEnableTouchSpeed  - Enable parallax on touch devices.
 */
export interface IScrollElementAttributes {
    scrollClass: string;
    scrollOffset: string;
    scrollPosition: string;
    scrollModuleProgress: boolean;
    scrollCssProgress: boolean;
    scrollEventProgress: string | null;
    scrollSpeed: number | null;
    scrollRepeat: boolean;
    scrollCall: string | null;
    scrollCallSelf: boolean;
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
 *  @property {number}   currentScroll - Scroll value returned by Lenis.
 *  @property {?boolean} smooth        - Lenis smooth option status.
 */
export interface IScrollElementCallbacksValues {
    currentScroll: number;
    smooth: boolean | null;
}

/**
 * @typedef {Object} IProgressModularModules
 *
 *  @property {string} moduleName
 *  @property {string} moduleId
 */
export interface IProgressModularModules {
    moduleName: string;
    moduleId: string;
}

export type scrollCallWay = 'enter' | 'leave';
export type scrollCallFrom = 'start' | 'end';

/**
 * @typedef {Object} IIOOptions
 *
 *  @property {ScrollElement[]} scrollElements - A list of objects with property values to match.
 *  @property {boolean}         IORaf          - Defined if it concern elements which need a RAF.
 *  @property {string}          [rootMargin]   - Margin around the root.
 */
export interface IIOOptions {
    scrollElements: ScrollElement[];
    IORaf: boolean;
    rootMargin?: string;
}

/**
 * @typedef {Object} CoreOptions
 *
 * @property {HTMLElement} $el                                     - DOM Element used as scroll container.
 * @property {IModular}    [modularInstance]                       - Modular instance to execute call functions.
 * @property {string}      [triggerRootMargin=TRIGGER_ROOT_MARGIN] - Root margin for trigger Intersection Observer.
 * @property {string}      [rafRootMargin=RAF_ROOT_MARGIN]         - Root margin for raf Intersection Observer.
 */
export interface CoreOptions {
    $el: HTMLElement;
    modularInstance?: IModular;
    triggerRootMargin?: string;
    rafRootMargin?: string;
    scrollOrientation: scrollOrientation;
}

export type scrollOrientation = 'vertical' | 'horizontal';

export type gestureOrientation = 'vertical' | 'horizontal' | 'both';

/**
 * @typedef {Object} IROOptions
 *
 *  @property {HTMLElement[]} resizeElements - A list of DOM elements to watch.
 *  @property {function} resizeCallback      - Resize callback function.
 */
export interface IROOptions {
    resizeElements: HTMLElement[];
    resizeCallback(): void;
}
