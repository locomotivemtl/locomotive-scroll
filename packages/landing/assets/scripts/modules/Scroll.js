import { module } from 'modujs'
import { $html } from '../utils/dom'
import LocomotiveScroll from '../../../../lib/index';

export default class Scroll extends module {
    constructor(m) {
        super(m);

        // Binding
        this.onScrollBind = this.onScroll.bind(this)
    }

    init() {
        this.scroll = new LocomotiveScroll({
            modularInstance: this,
            scrollCallback: this.onScrollBind,
        })

        // Force scroll to top
        if (history.scrollRestoration) {
            history.scrollRestoration = 'manual'
            window.scrollTo(0, 0)
        }
    }

    ///////////////
    // Callbacks
    ///////////////
    onScroll({ scroll, limit, velocity, direction, progress }) {
        //get direction
        if (progress > this.lastProgress) {
            if (this.scrollDirection != 1) {
                this.scrollDirection = 1;
            }
        } else {
            if (this.scrollDirection != -1) {
                this.scrollDirection = -1;
            }
        }

        if (this.scrollDirection < 0) {
            $html.classList.add("is-scrolling-up");
        } else {
            $html.classList.remove("is-scrolling-up");
        }

        this.lastProgress = progress;

        // used by Rail.js
        this.call('onScroll', { velocity, direction }, 'Rail');
    }

    ///////////////
    // Methods
    ///////////////
    scrollTo(params) {
        let { target, ...options } = params

        options = Object.assign({
            // Defaults
            duration: 1,
        }, options)

        this.scroll?.scrollTo(target, options)
    }

    changeHeaderTheme(args) {
        const { target, way, from } = args
        if (way == 'enter') {
            const theme = target?.parentNode?.getAttribute('data-theme')
            theme && $html.setAttribute('data-header-theme', theme)
        }
    }

    /**
     * Observe new scroll elements
     *
     * @param $newContainer (HTMLElement)
     */
    addScrollElements($newContainer) {
        this.scroll?.addScrollElements($newContainer);
    }

    /**
     * Unobserve scroll elements
     *
     * @param $oldContainer (HTMLElement)
     */
    removeScrollElements($oldContainer) {
        this.scroll?.removeScrollElements($oldContainer);
    }

    destroy() {
        this.scroll.destroy();
    }
}
