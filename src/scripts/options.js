export const defaults = {
    el: document,
    name: 'scroll',
    offset: [0, 0],
    repeat: false,
    smooth: false,
    initPosition: { x: 0, y: 0 },
    direction: 'vertical',
    gestureDirection: 'vertical',
    reloadOnContextChange: false,
    lerp: 0.1,
    class: 'is-inview',
    scrollbarContainer: false,
    scrollbarClass: 'c-scrollbar',
    scrollingClass: 'has-scroll-scrolling',
    draggingClass: 'has-scroll-dragging',
    smoothClass: 'has-scroll-smooth',
    initClass: 'has-scroll-init',
    getSpeed: false,
    getDirection: false,
    scrollFromAnywhere: false,
    multiplier: 1,
    firefoxMultiplier: 50,
    touchMultiplier: 2,
    resetNativeScroll: true,
    tablet: {
        smooth: false,
        direction: 'vertical',
        gestureDirection: 'vertical',
        breakpoint: 1024
    },
    smartphone: {
        smooth: false,
        direction: 'vertical',
        gestureDirection: 'vertical'
    }
};
