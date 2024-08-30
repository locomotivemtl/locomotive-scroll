import type { ILenisScrollToOptions, ILocomotiveScrollOptions, lenisTargetScrollTo } from './types';
/**
 * Locomotive Scroll
 *
 * Detection of elements in viewport & smooth scrolling with parallax.
 *
 * Inspired by
 * {@link https://github.com/locomotivemtl/locomotive-scroll locomotive-scroll.js}
 * and built around
 * {@link https://github.com/darkroomengineering/lenis lenis.js}.
 */
export default class LocomotiveScroll {
    rafPlaying: boolean;
    lenisInstance: any;
    private coreInstance;
    private lenisOptions?;
    private modularInstance?;
    private triggerRootMargin?;
    private rafRootMargin?;
    private rafInstance?;
    private autoResize?;
    private autoStart?;
    private ROInstance?;
    private scrollCallback;
    private initCustomTicker?;
    private destroyCustomTicker?;
    private _onRenderBind;
    private _onResizeBind;
    private _onScrollToBind;
    constructor({ lenisOptions, modularInstance, triggerRootMargin, rafRootMargin, autoResize, autoStart, scrollCallback, initCustomTicker, destroyCustomTicker, }?: ILocomotiveScrollOptions);
    /**
     * Lifecyle - Initialize instance.
     *
     * @private
     */
    private _init;
    /**
     * Lifecyle - Destroy instance.
     */
    destroy(): void;
    /**
     * Events - Subscribe events to listen.
     */
    private _bindEvents;
    /**
     * Events - Unsubscribe listened events.
     */
    private _unbindEvents;
    /**
     * Events - Subscribe scrollTo events to listen.
     */
    private _bindScrollToEvents;
    /**
     * Events - Unsubscribe scrollTo listened events.
     */
    private _unbindScrollToEvents;
    /**
     * Callback - Resize callback.
     */
    private _onResize;
    /**
     * Callback - Render callback.
     */
    private _onRender;
    /**
     * Callback - Scroll To callback.
     */
    private _onScrollTo;
    /**
     * Start RequestAnimationFrame that active Lenis smooth and scroll progress.
     */
    start(): void;
    /**
     * Stop RequestAnimationFrame that active Lenis smooth and scroll progress.
     */
    stop(): void;
    /**
     * Remove old scroll elements items and rebuild ScrollElements instances.
     */
    removeScrollElements($oldContainer: HTMLElement): void;
    /**
     * Add new scroll elements items and rebuild ScrollElements instances.
     */
    addScrollElements($newContainer: HTMLElement): void;
    /**
     * Trigger resize callback.
     */
    resize(): void;
    /**
     * Trigger scroll to callback.
     */
    scrollTo(target: lenisTargetScrollTo, options?: ILenisScrollToOptions): void;
    /**
     * RequestAnimationFrame that active Lenis smooth and scroll progress.
     *
     * @private
     *
     */
    private _raf;
}
export * from './types';
