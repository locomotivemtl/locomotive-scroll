import { defaults } from './options';
import Scroll from './Native';
import Smooth from './Smooth';

export default class {
    constructor(options = {}) {
        this.options = options;

        // Override default options with given ones
        Object.assign(this, defaults, options);
        this.smartphone = defaults.smartphone
        if(options.smartphone) Object.assign(this.smartphone, options.smartphone)
        this.tablet = defaults.tablet
        if(options.tablet) Object.assign(this.tablet, options.tablet)

        this.init();
    }

    init() {
        this.options.isMobile = (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) || window.innerWidth < this.tablet.breakpoint;
        this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint

        if (
            (this.smooth && !this.options.isMobile)
            ||
            (this.tablet.smooth && this.options.isTablet)
            ||
            (this.smartphone.smooth && this.options.isMobile && !this.options.isTablet)
        ) {
            this.scroll = new Smooth(this.options);
        } else {
            this.scroll = new Scroll(this.options);
        }

        this.scroll.init();

        if(window.location.hash) {
            this.scroll.scrollTo(window.location.hash);
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

    scrollTo(target, offset) {
        this.scroll.scrollTo(target, offset);
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
