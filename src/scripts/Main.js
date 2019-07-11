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
            this.isMobile = (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        }

        if (this.smooth === true && !this.isMobile) {
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

    destroy() {
        this.scroll.destroy();
    }
}
