import virtualScroll from 'virtual-scroll';
import Core from './Core';
import { lerp } from '../utils/maths'
import { getTranslate } from '../utils/transform'
import { getParents, queryClosestParent } from '../utils/html';

const html = document.documentElement;

export default class extends Core {
    constructor(options = {}) {
        super(options);

        this.inertia = this.inertia * 0.1;
        this.isScrolling = false;
        this.isDraggingScrollBar = false;
        this.isTicking = false;
        this.hasScrollTicking = false;
        this.parallaxElements = [];
    }

    init() {
        html.classList.add(this.smoothClass);

        this.instance = {
            vs: new virtualScroll({
                mouseMultiplier: (navigator.platform.indexOf('Win') > -1) ? 1 : 0.4,
                touchMultiplier: 4,
                firefoxMultiplier: 30
            }),
            delta: {
                x: 0,
                y: 0
            },
            ...this.instance
        }

        this.instance.vs.on((e) => {
            if (!this.isTicking && !this.isDraggingScrollBar) {
                requestAnimationFrame(() => {
                    if (!this.isScrolling) this.startScrolling();

                    this.updateDelta(e);
                });
                this.isTicking = true;
            }
            this.isTicking = false;
        });

        this.setScrollLimit();
        this.initScrollBar();

        this.addSections();
        this.addElements();
        this.detectElements();
        this.transformElements(true);

        super.init();

    }

    /**
     * Scroll to a desired target.
     *
     * @param  {object} options
     *      Available options :
     *          {node} targetElem - The DOM element we want to scroll to
     *          {node} sourceElem - An `<a>` element with an href targeting the anchor we want to scroll to
     *          {node} offsetElem - A DOM element from which we get the height to substract from the targetOffset
     *              (ex: use offsetElem to pass a mobile header that is above content, to make sure the scrollTo will be aligned with it)
     *          {int} targetOffset - An absolute vertical scroll value to reach, or an offset to apply on top of given `targetElem` or `sourceElem`'s target
     *          {int} delay - Amount of milliseconds to wait before starting to scroll
     *          {boolean} toTop - Set to true to scroll all the way to the top
     *          {boolean} toBottom - Set to true to scroll all the way to the bottom
     * @return {void}
     */
    scrollTo(params) {

        const options = params.options;

        let targetElem = options.targetElem;
        const sourceElem = options.sourceElem;
        const offsetElem = options.offsetElem;
        let targetOffset = options.targetOffset ? options.targetOffset : 0 ;
        const delay = options.delay;
        const toTop = options.toTop;
        const toBottom = options.toBottom;

        // If sourceElem is given, find and store the targetElem it's related to
        if (sourceElem) {
            let targetData = '';

            // Get the selector (given with `data-target` or `href` attributes on sourceElem)
            let sourceElemTarget = sourceElem.getAttribute('data-target')
            targetData = sourceElemTarget ? sourceElemTarget : sourceElem.getAttribute('href')

            // Store the target for later
            targetElem = document.querySelectorAll(targetData)[0]
        }

        // We have a targetElem, get it's coordinates
        if (targetElem) {
            // Get targetElem offset from top
            const targetElemBCR = targetElem.getBoundingClientRect()
            const targetElemOffsetTop = targetElemBCR.top + this.instance.scroll.y

            // Try and find the targetElem's parent section
            const targetParents = getParents(targetElem)
            console.log(targetParents);
            const parentSection = targetParents.find(candidate => this.sections.find(section => section.element == candidate))
            let parentSectionOffset = 0
            if(parentSection) {
                parentSectionOffset = getTranslate(parentSection).y // We got a parent section, store it's current offset to remove it later
            }

            // Final value of scroll destination : targetElemOffsetTop + (optional offset given in options) - (parent's section translate)
            targetOffset = targetElemOffsetTop + targetOffset - parentSectionOffset;
        }

        // We have an offsetElem, get its height and remove it from targetOffset already computed
        if (offsetElem) {
            let offset = offsetElem.offsetHeight;
            targetOffset = targetOffset - offset;
        }

        // If we want to go to one of boundaries
        if (toTop === true) {
            targetOffset = 0;
        } else if (toBottom === true) {
            targetOffset = this.instance.limit;
        }

        // Wait for the asked delay if needed
        setTimeout(() => {
            this.instance.delta.y = targetOffset; // Actual scrollTo (the lerp will do the animation itself)

            // Update the scroll. If we were in idle state: we're not anymore
            this.isScrolling = true;
            this.checkScroll();
            html.classList.add(this.isScrollingClassName);
        }, delay);
    }

    setScrollLimit() {
        this.instance.limit = this.el.offsetHeight - this.windowHeight;
    }

    startScrolling() {
        this.isScrolling = true;
        this.checkScroll();
        html.classList.add(this.scrollingClass);
    }

    stopScrolling() {
        this.isScrolling = false;
        this.instance.scroll.y = Math.round(this.instance.scroll.y);
        html.classList.remove(this.scrollingClass);
    }

    checkScroll() {
        if (this.isScrolling || this.isDraggingScrollBar) {
            if (!this.hasScrollTicking) {
                requestAnimationFrame(() => this.checkScroll());
                this.hasScrollTicking = true;
            }

            const distance = (Math.abs(this.instance.delta.y - this.instance.scroll.y));
            if ((distance < 1 && this.instance.delta.y != 0) || (distance < 0.5 && this.instance.delta.y == 0)) {
                this.stopScrolling();
            }

            this.updateScroll();

            for (let i = this.sections.length - 1; i >= 0; i--) {
                if(this.sections[i].persistent || (this.instance.scroll.y > this.sections[i].offset && this.instance.scroll.y < this.sections[i].limit)) {
                    this.transform(this.sections[i].el,0,-this.instance.scroll.y);
                    this.sections[i].el.style.visibility = 'visible';
                    this.sections[i].inView = true;
                } else {
                    this.sections[i].el.style.visibility = 'hidden';
                    this.sections[i].inView = false;
                }
            }

            if (this.getDirection) {
                this.getDirection();
            }

            if (this.getSpeed) {
                this.getSpeed();
                this.timestamp = Date.now();
            }

            this.detectElements();
            this.transformElements();

            // scrollbar translation
            const scrollBarTranslation = (this.instance.scroll.y / this.instance.limit) * this.scrollBarLimit;
            this.transform(this.scrollbar,0,scrollBarTranslation);

            this.hasScrollTicking = false;
        }
    }

    checkResize() {
        this.windowHeight = window.innerHeight;
        this.windowMiddle = this.windowHeight / 2;

        this.setScrollLimit();
        this.addSections();
        this.addElements();
        this.detectElements();
        this.updateScroll();
        this.transformElements(true);

    }

    updateDelta(e) {
        this.instance.delta.y -= e.deltaY;
        if (this.instance.delta.y < 0) this.instance.delta.y = 0;
        if (this.instance.delta.y > this.instance.limit) this.instance.delta.y = this.instance.limit;
    }

    updateScroll() {
        if (this.isScrolling) {
            this.instance.scroll.y = lerp(this.instance.scroll.y, this.instance.delta.y, this.inertia);
        } else if (this.isDraggingScrollBar) {
            this.instance.scroll.y = lerp(this.instance.scroll.y, this.instance.delta.y, (this.inertia * 2));
        } else {
            this.instance.scroll.y = this.instance.delta.y;
        }
    }

    getDirection() {
        if (this.instance.delta.y > this.instance.scroll.y) {
            if (this.instance.scroll.direction !== 'down') {
                this.instance.scroll.direction = 'down';
            }
        } else if (this.instance.delta.y < this.instance.scroll.y) {
            if (this.instance.scroll.direction !== 'up') {
                this.instance.scroll.direction = 'up';
            }
        }
    }

    getSpeed() {
        if (this.instance.delta.y != this.instance.scroll.y) {
            this.instance.scroll.speed = (this.instance.delta.y - this.instance.scroll.y) / (Date.now() - this.timestamp);
        } else {
            this.instance.scroll.speed = 0;
        }
    }

    // Scrollbar functions
    initScrollBar() {
        this.scrollbarWrapper = document.createElement('span');
        this.scrollbar = document.createElement('span');
        this.scrollbarWrapper.classList.add(`${this.scrollBarClassName}_wrapper`);
        this.scrollbar.classList.add(`${this.scrollBarClassName}`);

        this.scrollbarWrapper.append(this.scrollbar);
        document.body.append(this.scrollbarWrapper);
        this.scrollbar.style.height = `${(window.innerHeight * window.innerHeight) / this.instance.limit}px`;
        this.scrollBarLimit = window.innerHeight - this.scrollbar.getBoundingClientRect().height;

        this.scrollbar.addEventListener('mousedown',(e) => this.getScrollBar(e));
        window.addEventListener('mouseup',(e) => this.releaseScrollBar(e));
        window.addEventListener('mousemove',(e) => this.moveScrollBar(e));

    }

    reinitScrollBar() {
        this.scrollbar.style.height = `${(window.innerHeight * window.innerHeight) / this.instance.limit}px`;
        this.scrollBarLimit = window.innerHeight - this.scrollbar.getBoundingClientRect().height;
    }

    destroyScrollBar() {
        this.scrollbar.removeEventListener('mousedown',(e) => this.getScrollBar(e));
        window.removeEventListener('mouseup',(e) => this.releaseScrollBar(e));
        window.removeEventListener('mousemove',(e) => this.moveScrollBar(e));
    }

    getScrollBar(e) {
        this.isDraggingScrollBar = true;
        this.checkScroll();
        html.classList.remove(this.isScrollingClassName);
        html.classList.add(this.isDraggingClassName);
    }

    releaseScrollBar(e) {
        this.isDraggingScrollBar = false;
        html.classList.add(this.isScrollingClassName);
        html.classList.remove(this.isDraggingClassName);
    }

    moveScrollBar(e) {
        if (!this.isTicking && this.isDraggingScrollBar) {
            requestAnimationFrame(() => {
                console.log(window.innerHeight)
                let y = (e.clientY * 100 / (window.innerHeight)) * this.instance.limit / 100;

                if(y > 0 && y < this.instance.limit) {
                    this.instance.delta.y = y;
                }
            });
            this.isTicking = true;
        }
        this.isTicking = false;
    }


    // Manage elements and sections
    addElements() {
        this.els = []
        this.parallaxElements = []

        this.sections.forEach((section, y) => {

            const els = this.sections[y].el.querySelectorAll(`[data-${this.name}]`);

            els.forEach((el, i) => {
                let cl = el.dataset[this.name + 'Class'] || this.class;
                let top;
                let offset = parseInt(el.dataset[this.name + 'Offset']) || parseInt(this.offset);
                let repeat = el.dataset[this.name + 'Repeat'];
                let call = el.dataset[this.name + 'Call'];
                let position = el.dataset[this.name + 'Position'];
                let delay = el.dataset[this.name + 'Delay'];
                let direction = el.dataset[this.name + 'Direction'];
                let sticky = typeof el.dataset[this.name + 'Sticky'] === 'string';
                let speed = el.dataset[this.name + 'Speed'] ? parseFloat(el.dataset[this.name + 'Speed'])/10 : false;
                let target = el.dataset[this.name + 'Target'];
                let targetEl;

                if(target !== undefined) {
                    targetEl = document.querySelector(`${target}`);
                } else {
                    targetEl = el;
                }

                if(!this.sections[y].inView) {
                    top = targetEl.getBoundingClientRect().top - getTranslate(this.sections[y].el).y - getTranslate(targetEl).y;
                } else {
                    top = targetEl.getBoundingClientRect().top + this.instance.scroll.y - getTranslate(targetEl).y;
                }

                let bottom = top + targetEl.offsetHeight;
                let middle = ((bottom - top) / 2) + top;

                if(sticky) {
                    top += window.innerHeight;
                    bottom = top + targetEl.offsetHeight - window.innerHeight - el.offsetHeight;
                    middle = ((bottom - top) / 2) + top;
                }


                if(repeat == 'false') {
                    repeat = false;
                } else if (repeat != undefined) {
                    repeat = true;
                } else {
                    repeat = this.repeat;
                }

                const mappedEl = {
                    el,
                    class: cl,
                    top: top + offset,
                    middle,
                    bottom,
                    offset,
                    repeat,
                    inView: false,
                    call,
                    speed,
                    delay,
                    position,
                    target,
                    direction,
                    sticky
                }

                this.els.push(mappedEl);

                if(speed !== false || sticky) {
                    this.parallaxElements.push(mappedEl);
                }
            });

        })

    }

    addSections() {
        this.sections = [];

        const sections = this.el.querySelectorAll(`[data-${this.name}-section]`);

        sections.forEach((section, i) => {

            let offset = section.getBoundingClientRect().top - (window.innerHeight * 1.5) - getTranslate(section).y;
            let limit = offset + section.getBoundingClientRect().height + (window.innerHeight * 2);
            let persistent = typeof section.dataset[this.name + 'Persistent'] === 'string';

            let inView = false;
            if(this.instance.scroll.y >= offset && this.instance.scroll.y <= limit) {
                inView = true;
            }

            const mappedSection = {
                el: section,
                offset: offset,
                limit: limit,
                inView: inView,
                persistent: persistent
            }

            this.sections[i] = mappedSection;

        });
    }

    transform(element, x, y, delay) {
        let transform;

        if(!delay) {
            transform = `matrix(1,0,0,1,${x},${y})`

        } else {
            let start = getTranslate(element);
            let lerpX = lerp(start.x, x, delay);
            let lerpY = lerp(start.y, y, delay);

            transform = `matrix(1,0,0,1,${lerpX},${lerpY})`
        }

        element.style.webkitTransform = transform;
        element.style.msTransform = transform;
        element.style.transform = transform;
    }

    transformElements(isForced) {

        const scrollBottom = this.instance.scroll.y + this.windowHeight;
        const scrollMiddle = this.instance.scroll.y + this.windowMiddle;

        this.parallaxElements.forEach((current, i) => {
            let transformDistance = false;

            if((isForced && !current.inView)) {
                transformDistance = 0
            }

            if(current.inView) {
                switch (current.position) {
                    case 'top':
                        transformDistance = this.instance.scroll.y * -current.speed;
                    break;

                    case 'bottom':
                        transformDistance = (this.instance.limit - scrollBottom + this.windowHeight) * current.speed;
                    break;

                    default:
                        transformDistance = (scrollMiddle - current.middle) * -current.speed;
                    break;
                }

            }

            if(current.sticky) {
                if(current.inView) {
                    transformDistance = this.instance.scroll.y - current.top + window.innerHeight;
                } else {
                    if(this.instance.scroll.y < current.top) {
                        transformDistance = 0;
                    }
                    if(this.instance.scroll.y > current.bottom) {
                        transformDistance = current.bottom - current.offsetHeight;
                    }
                }
            }

            if(transformDistance !== false) {
                if(current.direction === 'horizontal') {
                    this.transform(current.el, transformDistance, 0, (isForced ? false : current.delay))
                } else {
                    this.transform(current.el, 0, transformDistance, (isForced ? false : current.delay))
                }
            }

        });
    }

    destroy() {
        super.destroy();
    }
}
