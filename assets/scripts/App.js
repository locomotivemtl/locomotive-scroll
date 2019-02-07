// ==========================================================================
// App
// ==========================================================================
/* jshint esnext: true */
import ScrollManager from './scroll/vendors/ScrollManager';

(function() {

    // Init Locomotive Scroll
    const smoothScroll = new ScrollManager({
        container: $('#js-scroll'),
        selector: '.js-animate',
        smooth: true,
        smoothMobile: true,
        mobileContainer: $(document),
        getWay: false,
        getSpeed: false,
        inertia: 0.75
    });

})();
