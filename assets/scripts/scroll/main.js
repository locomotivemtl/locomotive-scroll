import { defaults } from './options';
import scroll from './scroll';
import smoothScroll from './smoothScroll.js';

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

        if (this.smooth == true && !this.isMobile) {
            this.scroll = new smoothScroll(this.options);
        } else {
            this.scroll = new scroll(this.options);
        }

        this.scroll.init();

        // const $scrollToOnLoadEl = $('.js-scrollto-on-load').first();

        // if ($scrollToOnLoadEl.length === 1) {
        //     $document.triggerHandler({
        //         type: 'Event.SCROLLTO',
        //         options: {
        //             targetElem: $scrollToOnLoadEl
        //         }
        //     });
        // }
    }

    destroy() {
        this.scroll.destroy();
    }
}
