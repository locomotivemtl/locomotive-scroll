// ==========================================================================
// Locomotive Scroll Manager
// ==========================================================================
/* jshint esnext: true */
import { $document, $window, $html, $body, APP_NAME } from '../utils/environment';
import Scroll, { Defaults } from './Scroll';
import SmoothScroll from './SmoothScroll';

/**
 * Basic module that detects which scrolling module we'll be using
 */
export default class {
    constructor(options) {
        this.options = options;
        this.smooth = options.smooth || Defaults.smooth;
        this.smoothMobile = options.smoothMobile || Defaults.smoothMobile;
        this.mobileContainer = options.mobileContainer || Defaults.mobileContainer;
        this.isMobile = false;

        this.init();

        // Add a callback when reaching top or bottom
        // options.onScroll = function(scrollStatus) {
        //     $html.toggleClass('has-scrolled', (scrollStatus.y > 0));
        // };
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
                type: 'scrollTo.Scrolling',
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
