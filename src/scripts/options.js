export const defaults = {
    el: document,
    elMobile: document,
    name: 'scroll',
    offset: [0,0],
    repeat: false,
    smooth: false,
    direction: 'vertical',
    horizontalGesture: false,
    reloadOnContextChange: false,
    inertia: 1,
    class: 'is-inview',
    scrollbarClass: 'c-scrollbar',
    scrollingClass: 'has-scroll-scrolling',
    draggingClass: 'has-scroll-dragging',
    smoothClass: 'has-scroll-smooth',
    initClass: 'has-scroll-init',
    getSpeed: false,
    getDirection: false,
    firefoxMultiplier: 50,
    touchMultiplier: 2,
    tablet: {
        smooth: false,
        direction: 'vertical',
        horizontalGesture: false,
        breakpoint: 1024
    },
    smartphone: {
        smooth: false,
        direction: 'vertical',
        horizontalGesture: false
    }
};
