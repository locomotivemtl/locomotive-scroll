/* jshint esnext: true */
import { $document, $window, $html, $body, APP_NAME } from '../utils/environment';
import AbstractModule from './AbstractModule';
import Scroll from './Scroll';
import SmoothScroll from './SmoothScroll';

/**
 * Basic module that detects which scrolling module we'll be using
 */
export default class extends AbstractModule {
    constructor(options) {
        super(options);

        // Add a callback when reaching top or bottom
        options.onScroll = function(scrollStatus) {
            $html.toggleClass('has-scrolled', (scrollStatus.y > 0));
        };
    }

    init() {
        $html[0].scrollTop = 0;
        $body[0].scrollTop = 0;

        this.instance = (() => {
            if ($html.hasClass('is-smooth-scroll-compatible')) {
                return new SmoothScroll({
                    $container: this.$el,
                    selector: '.js-animate',
                    reversed: (typeof $('body').data('wheel-reversed') === 'string')
                });
            } else {
                return new Scroll({
                    $container: $window,
                    selector: '.js-animate'
                });
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
