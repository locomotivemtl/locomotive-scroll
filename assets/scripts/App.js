// ==========================================================================
// App
// ==========================================================================
/* jshint esnext: true */
import ScrollManager from './scroll/vendors/ScrollManager';

(function() {

    // Init Locomotive Scroll
    const smoothScroll = new ScrollManager({
        container: $('#js-scroll'),
        sections: '.js-section',
        selector: '.js-animate',
        smooth: true,
        smoothMobile: true,
        mobileContainer: $(document),
        getDirection: true,
        getSpeed: true,
        inertia: 1,
        scrollBarClassName: 'o-scrollbar',
        isScrollingClassName: 'is-scrolling',
        onScroll: (e) => {
            // console.log(e.scroll.y);
        }
    });

})();
