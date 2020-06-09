import { defaults } from './options';
import Scroll from './Native';

export class Native {
    constructor(options = {}) {
        this.options = options;

        // Override default options with given ones
        Object.assign(this, defaults, options);
        this.smartphone = defaults.smartphone;
        if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
        this.tablet = defaults.tablet;
        if (options.tablet) Object.assign(this.tablet, options.tablet);

        this.init();
    }

    init() {
        this.scroll = new Scroll(this.options);

        this.scroll.init();

        if (window.location.hash) {
            // Get the hash without the '#' and find the matching element
            const id = window.location.hash.slice(1, window.location.hash.length);
            let target = document.getElementById(id);

            // If found, scroll to the element
            if (target) this.scroll.scrollTo(target);
        }
    }

    update() {
        this.scroll.update();
    }

    start() {
        this.scroll.startScroll();
    }

    stop() {
        this.scroll.stopScroll();
    }

    scrollTo(target, options) {
        this.scroll.scrollTo(target, options);
    }

    setScroll(x, y) {
        this.scroll.setScroll(x, y);
    }

    on(event, func) {
        this.scroll.setEvents(event, func);
    }

    off(event, func) {
        this.scroll.unsetEvents(event, func);
    }

    destroy() {
        this.scroll.destroy();
    }
}
