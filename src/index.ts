//@ts-ignore
import Lenis from '@studio-freight/lenis';
import Core from './core/Core';
import RO from './core/RO';
import {
    ILenisOptions,
    ILenisScrollToOptions,
    ILenisScrollValues,
    ILocomotiveScrollOptions,
    IModular,
    lenisTargetScrollTo,
} from './types';

/**
 * @type {ILenisOptions}
 */
const defaultLenisOptions: ILenisOptions = {
    wrapper: window,
    content: document.documentElement,
    eventsTarget: window,
    lerp: 0.1,
    duration: 0.75,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
    syncTouch: false,
    syncTouchLerp: 0.1,
    touchInertiaMultiplier: 35,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    normalizeWheel: false,
    autoResize: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
};

/**
 * Locomotive Scroll
 *
 * Detection of elements in viewport & smooth scrolling with parallax.
 *
 * Inspired by
 * {@link https://github.com/locomotivemtl/locomotive-scroll locomotive-scroll.js}
 * and built around
 * {@link https://github.com/studio-freight/lenis lenis.js}.
 */

export default class LocomotiveScroll {
    public rafPlaying: boolean;

    private lenisInstance: any;
    private coreInstance: any;

    private lenisOptions: ILenisOptions;
    private modularInstance?: IModular;
    private triggerRootMargin?: string;
    private rafRootMargin?: string;
    private rafInstance?: any;
    private autoResize?: boolean;
    private autoStart?: boolean;
    private ROInstance?: RO;
    private scrollCallback?(scrollValues: ILenisScrollValues): void;
    private initCustomTicker?: (render: () => void) => void;
    private destroyCustomTicker?: (render: () => void) => void;
    private _onRenderBind: () => void;
    private _onResizeBind: () => void;
    private _onScrollToBind: (event: MouseEvent) => void;

    constructor({
        lenisOptions = {},
        modularInstance,
        triggerRootMargin,
        rafRootMargin,
        autoResize = true,
        autoStart = true,
        scrollCallback = () => {},
        initCustomTicker,
        destroyCustomTicker,
    }: ILocomotiveScrollOptions = {}) {
        // Arguments
        this.lenisOptions = { ...defaultLenisOptions, ...lenisOptions };

        Object.assign(this, {
            lenisOptions,
            modularInstance,
            triggerRootMargin,
            rafRootMargin,
            autoResize,
            autoStart,
            scrollCallback,
            initCustomTicker,
            destroyCustomTicker,
        });

        // Binding
        this._onRenderBind = this._onRender.bind(this);
        this._onScrollToBind = this._onScrollTo.bind(this);
        this._onResizeBind = this._onResize.bind(this);

        // Data
        this.rafPlaying = false;

        // Init
        this._init();
    }

    /**
     * Lifecyle - Initialize instance.
     *
     * @private
     */
    private _init(): void {
        // Create Lenis instance
        this.lenisInstance = new Lenis({
            wrapper: this.lenisOptions.wrapper,
            content: this.lenisOptions.content,
            eventsTarget: this.lenisOptions.eventsTarget,
            lerp: this.lenisOptions.lerp,
            duration: this.lenisOptions.duration,
            orientation: this.lenisOptions.orientation,
            gestureOrientation: this.lenisOptions.gestureOrientation,
            smoothWheel: this.lenisOptions.smoothWheel,
            smoothTouch: this.lenisOptions.smoothTouch,
            syncTouch: this.lenisOptions.syncTouch,
            syncTouchLerp: this.lenisOptions.syncTouchLerp,
            touchInertiaMultiplier: this.lenisOptions.touchInertiaMultiplier,
            wheelMultiplier: this.lenisOptions.wheelMultiplier,
            touchMultiplier: this.lenisOptions.touchMultiplier,
            normalizeWheel: this.lenisOptions.normalizeWheel,
            easing: this.lenisOptions.easing,
        });
        this.lenisInstance?.on('scroll', this.scrollCallback);

        // Add scroll direction attribute on body
        document.documentElement.setAttribute(
            'data-scroll-orientation',
            this.lenisInstance.options.orientation
        );

        requestAnimationFrame(() => {
            // Create Core Instance
            this.coreInstance = new Core({
                $el: this.lenisInstance.rootElement,
                modularInstance: this.modularInstance,
                triggerRootMargin: this.triggerRootMargin,
                rafRootMargin: this.rafRootMargin,
                scrollOrientation: this.lenisInstance.options.orientation,
            });

            // Bind Events
            this._bindEvents();

            // RAF warning
            if (this.initCustomTicker && !this.destroyCustomTicker) {
                console.warn(
                    'initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.'
                );
            } else if (!this.initCustomTicker && this.destroyCustomTicker) {
                console.warn(
                    'destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble.'
                );
            }

            // Start RAF
            this.autoStart && this.start();
        });
    }

    /**
     * Lifecyle - Destroy instance.
     */
    public destroy(): void {
        // Stop raf
        this.stop();
        // Unbind Events
        this._unbindEvents();
        // Destroy Lenis
        this.lenisInstance.destroy();
        // Destroy Core
        this.coreInstance?.destroy();

        // Ensure a delay before destroying to handle cases of instant destruction
        requestAnimationFrame(() => {
            this.coreInstance?.destroy();
        });
    }

    /**
     * Events - Subscribe events to listen.
     */
    private _bindEvents() {
        this._bindScrollToEvents();

        if (this.autoResize) {
            if ('ResizeObserver' in window) {
                this.ROInstance = new RO({
                    resizeElements: [document.body],
                    resizeCallback: this._onResizeBind,
                });
            } else {
                (window as any).addEventListener('resize', this._onResizeBind);
            }
        }
    }

    /**
     * Events - Unsubscribe listened events.
     */
    private _unbindEvents() {
        this._unbindScrollToEvents();

        if (this.autoResize) {
            if ('ResizeObserver' in window) {
                this.ROInstance && this.ROInstance.destroy();
            } else {
                (window as any).removeEventListener(
                    'resize',
                    this._onResizeBind
                );
            }
        }
    }

    /**
     * Events - Subscribe scrollTo events to listen.
     */
    private _bindScrollToEvents($container?: HTMLElement) {
        const $rootContainer = $container
            ? $container
            : this.lenisInstance.rootElement;
        const $scrollToElements =
            $rootContainer?.querySelectorAll('[data-scroll-to]');

        $scrollToElements?.length &&
            $scrollToElements.forEach(($el: HTMLElement): void => {
                $el.addEventListener('click', this._onScrollToBind, false);
            });
    }

    /**
     * Events - Unsubscribe scrollTo listened events.
     */
    private _unbindScrollToEvents($container?: HTMLElement) {
        const $rootContainer = $container
            ? $container
            : this.lenisInstance.rootElement;
        const $scrollToElements =
            $rootContainer?.querySelectorAll('[data-scroll-to]');
        $scrollToElements?.length &&
            $scrollToElements.forEach(($el: HTMLElement) => {
                $el.removeEventListener('click', this._onScrollToBind, false);
            });
    }

    /**
     * Callback - Resize callback.
     */
    private _onResize() {
        // Waiting the next frame to get the new current scroll value return by Lenis
        requestAnimationFrame(() => {
            this.coreInstance?.onResize({
                currentScroll: this.lenisInstance.scroll,
            });
        });
    }

    /**
     * Callback - Render callback.
     */
    private _onRender() {
        this.lenisInstance?.raf(Date.now());

        this.coreInstance?.onRender({
            currentScroll: this.lenisInstance.scroll,
            smooth: this.lenisInstance.isSmooth,
        });
    }

    /**
     * Callback - Scroll To callback.
     */
    private _onScrollTo(event: MouseEvent) {
        event.preventDefault();
        const $target = (event.currentTarget as HTMLElement) ?? null;
        if (!$target) return;
        const target =
            $target.getAttribute('data-scroll-to-href') ||
            $target.getAttribute('href');
        const offset = $target.getAttribute('data-scroll-to-offset') || 0;
        const duration =
            $target.getAttribute('data-scroll-to-duration') ||
            this.lenisOptions.duration ||
            defaultLenisOptions.duration;

        target &&
            this.scrollTo(target, {
                offset: typeof offset === 'string' ? parseInt(offset) : offset,
                duration:
                    typeof duration === 'string'
                        ? parseInt(duration)
                        : duration,
            });
    }

    /**
     * Start RequestAnimationFrame that active Lenis smooth and scroll progress.
     */
    public start(): void {
        if (this.rafPlaying) {
            return;
        }

        // Call lenis start method
        this.lenisInstance?.start();

        this.rafPlaying = true;
        this.initCustomTicker
            ? this.initCustomTicker(this._onRenderBind)
            : this._raf();
    }

    /**
     * Stop RequestAnimationFrame that active Lenis smooth and scroll progress.
     */
    public stop(): void {
        if (!this.rafPlaying) {
            return;
        }

        // Call lenis stop method
        this.lenisInstance?.stop();

        this.rafPlaying = false;
        this.destroyCustomTicker
            ? this.destroyCustomTicker(this._onRenderBind)
            : this.rafInstance && cancelAnimationFrame(this.rafInstance);
    }

    /**
     * Remove old scroll elements items and rebuild ScrollElements instances.
     */
    public removeScrollElements($oldContainer: HTMLElement): void {
        if (!$oldContainer) {
            console.error('Please provide a DOM Element as $oldContainer');
            return;
        }

        this._unbindScrollToEvents($oldContainer);
        this.coreInstance?.removeScrollElements($oldContainer);
    }

    /**
     * Add new scroll elements items and rebuild ScrollElements instances.
     */
    public addScrollElements($newContainer: HTMLElement): void {
        if (!$newContainer) {
            console.error('Please provide a DOM Element as $newContainer');
            return;
        }

        this.coreInstance?.addScrollElements($newContainer);
        requestAnimationFrame(() => {
            this._bindScrollToEvents($newContainer);
        });
    }

    /**
     * Trigger resize callback.
     */
    public resize(): void {
        this._onResizeBind();
    }

    /**
     * Trigger scroll to callback.
     */
    public scrollTo(
        target: lenisTargetScrollTo,
        options?: ILenisScrollToOptions
    ): void {
        this.lenisInstance?.scrollTo(target, {
            offset: options?.offset,
            lerp: options?.lerp,
            duration: options?.duration,
            immediate: options?.immediate,
            lock: options?.lock,
            force: options?.force,
            easing: options?.easing,
            onComplete: options?.onComplete,
        });
    }

    /**
     * RequestAnimationFrame that active Lenis smooth and scroll progress.
     *
     * @private
     *
     */
    private _raf() {
        this._onRenderBind();
        this.rafInstance = requestAnimationFrame(() => this._raf());
    }
}
