// ==========================================================================
// Locomotive Scroll Manager
// ==========================================================================
/* jshint esnext: true */
import { $document, $window, $html, $body } from '../../utils/environment';
import Scroll, { DEFAULTS, EVENT } from '../Scroll';
import SmoothScroll from '../SmoothScroll';

/**
 * Basic module that detects which scrolling module we'll be using
 */
export default class {
    constructor(options) {
        this.options = options;
        this.smooth = options.smooth || DEFAULTS.smooth;
        this.smoothMobile = options.smoothMobile || DEFAULTS.smoothMobile;
        this.mobileContainer = options.mobileContainer || DEFAULTS.mobileContainer;
        this.isMobile = false;

        this.init();
    }

    init() {
        $html[0].scrollTop = 0;
        $body[0].scrollTop = 0;

        if (!this.smoothMobile) {
            this.isMobile = (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        }

        this.instance = (() => {
            if (this.smooth === true && !this.isMobile) {
                return new SmoothScroll(this.options);
            } else {
                if (this.mobileContainer) {
                    this.options.container = this.mobileContainer
                }
                return new Scroll(this.options);
            }
        })();

        this.instance.init();

        const $scrollToOnLoadEl = $('.js-scrollto-on-load').first();

        if ($scrollToOnLoadEl.length === 1) {
            $document.triggerHandler({
                type: 'Event.SCROLLTO',
                options: {
                    targetElem: $scrollToOnLoadEl
                }
            });
        }
    }

    destroy() {
        this.instance.destroy();
    }
}
