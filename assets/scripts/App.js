// ==========================================================================
// App
// ==========================================================================
/* jshint esnext: true */
import LocomotiveScroll from './modules/ScrollManager';

(function() {

    // Init Locomotive Scroll
    const smoothScroll = new LocomotiveScroll({
        container: $('#js-scroll'),
        selector: '.js-animate',
        smooth: false,
        smoothMobile: false,
        mobileContainer: $(document)
    });

})();
