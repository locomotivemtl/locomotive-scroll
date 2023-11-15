import { module as Module } from 'modujs';
import { gsap } from 'gsap/all';
import { lazyLoadImage } from '../utils/image';
import LocomotiveScroll from '../../../../../dist/locomotive-scroll.modern.mjs';

export default class extends Module {
    constructor(m) {
        super(m);

        // Binding
        // this.onResizeBind = this.onResize.bind(this);
        this.onScrollBind = this.onScroll.bind(this);

        // Data
        this.scrollOrientation = 1;
        this.lastProgress = 0;
        this.orientation = this.getData('orientation') || 'vertical';
    }

    ///////////////
    // Lifecyle
    ///////////////
    init() {
        // Events
        // this.bindEvents();

        // Scroll Instance
        this.locomotiveScroll = new LocomotiveScroll({
            lenisOptions: {
                wrapper: document.documentElement,
                orientation: this.orientation,
                gestureOrientation: this.orientation,
            },
            autoResize: true,
            autoStart: true,
            modularInstance: this,
            scrollCallback: this.onScrollBind,
            initCustomTicker: (render) => {
                gsap.ticker.add(render);
            },
            destroyCustomTicker: (render) => {
                gsap.ticker.remove(render);
            },
        });
    }

    destroy() {
        // Events
        // this.unbindEvents();

        // Scroll Instance
        this.locomotiveScroll?.destroy();
    }

    ///////////////
    // Events
    ///////////////
    // bindEvents() {
    //     window.addEventListener('resize', this.onResizeBind);
    // }

    // unbindEvents() {
    //     window.removeEventListener('resize', this.onResizeBind);
    // }

    ///////////////
    // Callbacks
    ///////////////
    onScroll({ scroll, limit, velocity, direction, progress }) {
        //console.log(scroll, limit, velocity, direction, progress);

        if (progress > this.lastProgress) {
            if (this.scrollOrientation != 1) {
                this.scrollOrientation = 1;
                document.documentElement.style.setProperty(
                    '--scroll-direction',
                    this.scrollOrientation
                );
            }
        } else {
            if (this.scrollOrientation != -1) {
                this.scrollOrientation = -1;
                document.documentElement.style.setProperty(
                    '--scroll-direction',
                    this.scrollOrientation
                );
            }
        }

        this.lastProgress = progress;
    }

    // onResize() {
    //     this.locomotiveScroll?.resize();
    // }

    ///////////////
    // Methods
    ///////////////

    /**
     * Lazy load the related image.
     *
     * @see ../utils/image.js
     *
     * It is recommended to wrap your `<img>` into an element with the
     * CSS class name `.c-lazy`. The CSS class name modifier `.-lazy-loaded`
     * will be applied on both the image and the parent wrapper.
     *
     * ```html
     * <div class="c-lazy o-ratio u-4:3">
     *     <img data-scroll data-scroll-call="lazyLoad, Scroll, main" data-src="http://picsum.photos/640/480?v=1" alt="" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
     * </div>
     * ```
     *
     * @param {LocomotiveScroll} args - The Locomotive Scroll instance.
     */
    lazyLoad(args) {
        lazyLoadImage(args.target, null, () => {
            //callback
        });
    }

    /**
     * ScrollTo
     *
     * @param {(number|HTMLElement|string)} target - The scrollTo a target
     * @param {Object} options - The scrollTo options (offset, duration, easing, immediate)
     *
     * @see https://github.com/studio-freight/lenis#methods
     *
     */
    scrollTo(params) {
        const { target, options } = params;
        this.locomotiveScroll?.scrollTo(target, options);
    }

    /**
     * Start
     * Resumes the scroll
     *
     * @see https://github.com/studio-freight/lenis#methods
     *
     */
    start() {
        this.locomotiveScroll?.start();
    }

    /**
     * Stop
     * Pauses the scroll
     *
     * @see https://github.com/studio-freight/lenis#methods
     *
     */
    stop() {
        this.locomotiveScroll?.stop();
    }
}
