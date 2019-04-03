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
        getDirection: true,
        getSpeed: true,
        inertia: 1,
        scrollBarClassName: 'o-scrollbar',
        onScroll: (e) => {
            // console.log(e.scroll.y);
        }
    });

})();
