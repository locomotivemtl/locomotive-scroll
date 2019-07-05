export const defaults = {
    el: document,
    elMobile: document,
    name: 'scroll',
    class: 'is-inview',
    scrollBarClassName: 'o-scrollbar',
    isScrollingClassName: 'is-scrolling',
    isDraggingClassName: 'is-dragging',
    smoothClass: 'has-smoothscroll',
    offset: 0,
    inertia: 1,
    repeat: false,
    smooth: false,
    smoothMobile: false,
    getDirection: false,
    getSpeed: false,
    onScroll: (e) => {}
};
