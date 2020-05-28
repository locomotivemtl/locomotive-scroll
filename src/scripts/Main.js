import { defaults } from './options';
import Scroll from './Native';
import Smooth from './Smooth';

export default class {
    constructor(options = {}) {
        this.options = options;
        Object.assign(this, defaults, options);

        this.init();
    }

    init() {
        if (!this.smoothMobile) {
            this.isMobile = (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        }

        if (this.smooth === true && !this.isMobile) {
            this.scroll = new Smooth(this.options);
        } else {
            this.scroll = new Scroll(this.options);
        }

        this.scroll.init();

        if(window.location.hash) {
            // Get the hash without the '#' and find the matching element
            const id = window.location.hash.slice(1, window.location.hash.length)
            let target = document.getElementById(id)

            // If found, scroll to the element
            if(target)
                this.scroll.scrollTo(target);
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

    scrollTo(target, offset, duration, easing, disableLerp, callback) { // TODO - In next breaking update, use an object as 2nd parameter for options (offset, duration, easing, disableLerp, callback)
        this.scroll.scrollTo(target, offset, duration, easing, disableLerp, callback);
    }

    setScroll(x,y) {
        this.scroll.setScroll(x,y);
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
