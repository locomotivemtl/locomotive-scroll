import locomotiveScroll from './scroll/vendors/main';

(function() {

    const scroll = new locomotiveScroll({
        el: document.querySelector('#js-scroll'),
        smooth: true,
        smoothMobile: false,
        mobileContainer: $(document),
        inertia: 1,
        scrollBarClassName: 'o-scrollbar',
        isScrollingClassName: 'is-scrolling',
        isDraggingClassName: 'is-dragging',
        onScroll: (e) => {
            // console.log(e.scroll.y);
        }
    });

})();
