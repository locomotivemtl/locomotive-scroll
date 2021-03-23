import { defaults } from './options';

export default class {
    constructor(options = {}) {
        Object.assign(this, defaults, options);
        this.smartphone = defaults.smartphone;
        if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
        this.tablet = defaults.tablet;
        if (options.tablet) Object.assign(this.tablet, options.tablet);

        this.namespace = 'locomotive';
        this.html = document.documentElement;
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.windowMiddle = {
            x: this.windowWidth / 2,
            y: this.windowHeight / 2
        };
        this.els = {};
        this.currentElements = {};
        this.listeners = {};

        this.hasScrollTicking = false;
        this.hasCallEventSet = false;

        this.checkScroll = this.checkScroll.bind(this);
        this.checkResize = this.checkResize.bind(this);
        this.checkEvent = this.checkEvent.bind(this);

        this.instance = {
            scroll: {
                x: 0,
                y: 0
            },
            limit: {
                x: this.html.offsetWidth,
                y: this.html.offsetHeight
            },
            currentElements: this.currentElements
        };

        if (this.isMobile) {
            if (this.isTablet) {
                this.context = 'tablet';
            } else {
                this.context = 'smartphone';
            }
        } else {
            this.context = 'desktop';
        }

        if (this.isMobile) this.direction = this[this.context].direction;
        if (this.direction === 'horizontal') {
            this.directionAxis = 'x';
        } else {
            this.directionAxis = 'y';
        }

        if (this.getDirection) {
            this.instance.direction = null;
        }

        if (this.getDirection) {
            this.instance.speed = 0;
        }

        this.html.classList.add(this.initClass);

        window.addEventListener('resize', this.checkResize, false);
    }

    init() {
        this.initEvents();
    }

    checkScroll() {
        this.dispatchScroll();
    }

    checkResize() {
        if (!this.resizeTick) {
            this.resizeTick = true;
            requestAnimationFrame(() => {
                this.resize();
                this.resizeTick = false;
            });
        }
    }

    resize() {}

    checkContext() {
        if (!this.reloadOnContextChange) return;

        this.isMobile =
            /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
            this.windowWidth < this.tablet.breakpoint;
        this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;

        let oldContext = this.context;
        if (this.isMobile) {
            if (this.isTablet) {
                this.context = 'tablet';
            } else {
                this.context = 'smartphone';
            }
        } else {
            this.context = 'desktop';
        }

        if (oldContext != this.context) {
            let oldSmooth = oldContext == 'desktop' ? this.smooth : this[oldContext].smooth;
            let newSmooth = this.context == 'desktop' ? this.smooth : this[this.context].smooth;

            if (oldSmooth != newSmooth) window.location.reload();
        }
    }

    initEvents() {
        this.scrollToEls = this.el.querySelectorAll(`[data-${this.name}-to]`);
        this.setScrollTo = this.setScrollTo.bind(this);

        this.scrollToEls.forEach((el) => {
            el.addEventListener('click', this.setScrollTo, false);
        });
    }

    setScrollTo(event) {
        event.preventDefault();

        this.scrollTo(
            event.currentTarget.getAttribute(`data-${this.name}-href`) ||
                event.currentTarget.getAttribute('href'),
            {
                offset: event.currentTarget.getAttribute(`data-${this.name}-offset`)
            }
        );
    }

    addElements() {}

    detectElements(hasCallEventSet) {
        const scrollTop = this.instance.scroll.y;
        const scrollBottom = scrollTop + this.windowHeight;

        const scrollLeft = this.instance.scroll.x;
        const scrollRight = scrollLeft + this.windowWidth;

        Object.entries(this.els).forEach(([i, el]) => {
            if (el && (!el.inView || hasCallEventSet)) {
                if (this.direction === 'horizontal') {
                    if (scrollRight >= el.left && scrollLeft < el.right) {
                        this.setInView(el, i);
                    }
                } else {
                    if (scrollBottom >= el.top && scrollTop < el.bottom) {
                        this.setInView(el, i);
                    }
                }
            }

            if (el && el.inView) {
                if (this.direction === 'horizontal') {
                    let width = el.right - el.left;
                    el.progress =
                        (this.instance.scroll.x - (el.left - this.windowWidth)) /
                        (width + this.windowWidth);

                    if (scrollRight < el.left || scrollLeft > el.right) {
                        this.setOutOfView(el, i);
                    }
                } else {
                    let height = el.bottom - el.top;
                    el.progress =
                        (this.instance.scroll.y - (el.top - this.windowHeight)) /
                        (height + this.windowHeight);

                    if (scrollBottom < el.top || scrollTop > el.bottom) {
                        this.setOutOfView(el, i);
                    }
                }
            }
        });

        // this.els = this.els.filter((current, i) => {
        //     return current !== null;
        // });

        this.hasScrollTicking = false;
    }

    setInView(current, i) {
        this.els[i].inView = true;
        current.el.classList.add(current.class);

        this.currentElements[i] = current;

        if (current.call && this.hasCallEventSet) {
            this.dispatchCall(current, 'enter');

            if (!current.repeat) {
                this.els[i].call = false;
            }
        }

        // if (!current.repeat && !current.speed && !current.sticky) {
        //     if (!current.call || current.call && this.hasCallEventSet) {
        //        this.els[i] = null
        //     }
        // }
    }

    setOutOfView(current, i) {
        // if (current.repeat || current.speed !== undefined) {
        this.els[i].inView = false;
        // }

        Object.keys(this.currentElements).forEach((el) => {
            el === i && delete this.currentElements[el];
        });

        if (current.call && this.hasCallEventSet) {
            this.dispatchCall(current, 'exit');
        }

        if (current.repeat) {
            current.el.classList.remove(current.class);
        }
    }

    dispatchCall(current, way) {
        this.callWay = way;
        this.callValue = current.call.split(',').map((item) => item.trim());
        this.callObj = current;

        if (this.callValue.length == 1) this.callValue = this.callValue[0];

        const callEvent = new Event(this.namespace + 'call');
        this.el.dispatchEvent(callEvent);
    }

    dispatchScroll() {
        const scrollEvent = new Event(this.namespace + 'scroll');
        this.el.dispatchEvent(scrollEvent);
    }

    setEvents(event, func) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        const list = this.listeners[event];
        list.push(func);

        if (list.length === 1) {
            this.el.addEventListener(this.namespace + event, this.checkEvent, false);
        }

        if (event === 'call') {
            this.hasCallEventSet = true;
            this.detectElements(true);
        }
    }

    unsetEvents(event, func) {
        if (!this.listeners[event]) return;

        const list = this.listeners[event];
        const index = list.indexOf(func);

        if (index < 0) return;

        list.splice(index, 1);

        if (list.index === 0) {
            this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
        }
    }

    checkEvent(event) {
        const name = event.type.replace(this.namespace, '');
        const list = this.listeners[name];

        if (!list || list.length === 0) return;

        list.forEach((func) => {
            switch (name) {
                case 'scroll':
                    return func(this.instance);
                case 'call':
                    return func(this.callValue, this.callWay, this.callObj);
                default:
                    return func();
            }
        });
    }

    startScroll() {}

    stopScroll() {}

    setScroll(x, y) {
        this.instance.scroll = {
            x: 0,
            y: 0
        };
    }

    destroy() {
        window.removeEventListener('resize', this.checkResize, false);

        Object.keys(this.listeners).forEach((event) => {
            this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
        });
        this.listeners = {};

        this.scrollToEls.forEach((el) => {
            el.removeEventListener('click', this.setScrollTo, false);
        });

        this.html.classList.remove(this.initClass);
    }
}
