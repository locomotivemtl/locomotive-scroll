import virtualScroll from 'virtual-scroll';
import Core from './Core';
import { lerp } from './utils/maths'
import { getTranslate } from './utils/transform'
import { getParents, queryClosestParent } from './utils/html';

const keyCodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32,
    TAB: 9
};

export default class extends Core {
    constructor(options = {}) {
        super(options);

        this.inertia = this.inertia * 0.1;
        this.isScrolling = false;
        this.isDraggingScrollbar = false;
        this.isTicking = false;
        this.hasScrollTicking = false;
        this.parallaxElements = [];
        this.inertiaRatio = 1;
        this.stop = false;

        this.checkKey = this.checkKey.bind(this);
        window.addEventListener('keydown', this.checkKey, false);
    }

    init() {
        this.html.classList.add(this.smoothClass);

        this.instance = {
            delta: {
                x: 0,
                y: 0
            },
            ...this.instance
        }

        this.vs = new virtualScroll({
            el: this.el,
            mouseMultiplier: (navigator.platform.indexOf('Win') > -1) ? 1 : 0.4,
            touchMultiplier: 4,
            firefoxMultiplier: this.firefoxMultiplier,
            useKeyboard: false,
            passive: true
        });

        this.vs.on((e) => {
            if (this.stop) {
                return;
            }

            if (!this.isTicking && !this.isDraggingScrollbar) {
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

    setScrollLimit() {
        this.instance.limit = this.el.offsetHeight - this.windowHeight;
    }

    startScrolling() {
        this.isScrolling = true;
        this.checkScroll();
        this.html.classList.add(this.scrollingClass);
    }

    stopScrolling() {
        this.isScrolling = false;
        this.inertiaRatio = 1;
        this.instance.scroll.y = Math.round(this.instance.scroll.y);
        this.html.classList.remove(this.scrollingClass);
    }

    checkKey(e) {

        switch(e.keyCode) {
            case keyCodes.TAB:
                setTimeout(() => {
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                    if(!(document.activeElement instanceof HTMLBodyElement)){
                        this.scrollTo(document.activeElement, - window.innerHeight / 2);
                    }
                }, 0);
                break;
            case keyCodes.UP:
                this.instance.delta.y -= 240;
                break;
            case keyCodes.DOWN:
                this.instance.delta.y += 240;
                break;
            case keyCodes.SPACE:
                if(!(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement)) {
                    if(e.shiftKey) {
                        this.instance.delta.y -= window.innerHeight;
                    } else {
                        this.instance.delta.y += window.innerHeight;
                    }
                }
                break;
            default:
                return;
        }

        if(this.instance.delta.y < 0) this.instance.delta.y = 0;
        if(this.instance.delta.y > this.instance.limit) this.instance.delta.y = this.instance.limit;

        this.isScrolling = true;
        this.checkScroll();
        this.html.classList.add(this.scrollingClass);

    }

    checkScroll() {
        if (this.isScrolling || this.isDraggingScrollbar) {
            if (!this.hasScrollTicking) {
                requestAnimationFrame(() => this.checkScroll());
                this.hasScrollTicking = true;
            }

            const distance = (Math.abs(this.instance.delta.y - this.instance.scroll.y));
            if ((distance < 0.5 && this.instance.delta.y != 0) || (distance < 0.5 && this.instance.delta.y == 0)) {
                this.stopScrolling();
            }

            this.updateScroll();

            for (let i = this.sections.length - 1; i >= 0; i--) {
                if(this.sections[i].persistent || (this.instance.scroll.y > this.sections[i].offset && this.instance.scroll.y < this.sections[i].limit)) {
                    this.transform(this.sections[i].el, 0, -this.instance.scroll.y);
                    this.sections[i].el.style.visibility = 'visible';
                    this.sections[i].inView = true;
                } else {
                    this.sections[i].el.style.visibility = 'hidden';
                    this.sections[i].inView = false;
                    this.transform(this.sections[i].el, 0, 0);
                }
            }

            if (this.getDirection) {
                this.addDirection();
            }

            if (this.getSpeed) {
                this.addSpeed();
                this.timestamp = Date.now();
            }

            this.detectElements();
            this.transformElements();

            const scrollBarTranslation = (this.instance.scroll.y / this.instance.limit) * this.scrollBarLimit;
            this.transform(this.scrollbarThumb, 0, scrollBarTranslation);

            super.checkScroll();

            this.hasScrollTicking = false;
        }
    }

    checkResize() {
        this.windowHeight = window.innerHeight;
        this.windowMiddle = this.windowHeight / 2;
        this.update();
    }

    updateDelta(e) {
        this.instance.delta.y -= e.deltaY;
        if (this.instance.delta.y < 0) this.instance.delta.y = 0;
        if (this.instance.delta.y > this.instance.limit) this.instance.delta.y = this.instance.limit;
    }

    updateScroll(e) {
        if (this.isScrolling || this.isDraggingScrollbar) {
            this.instance.scroll.y = lerp(this.instance.scroll.y, this.instance.delta.y, this.inertia * this.inertiaRatio);
        } else {
            this.instance.scroll.y = this.instance.delta.y;
        }
    }

    addDirection() {
        if (this.instance.delta.y > this.instance.scroll.y) {
            if (this.instance.direction !== 'down') {
                this.instance.direction = 'down';
            }
        } else if (this.instance.delta.y < this.instance.scroll.y) {
            if (this.instance.direction !== 'up') {
                this.instance.direction = 'up';
            }
        }
    }

    addSpeed() {
        if (this.instance.delta.y != this.instance.scroll.y) {
            this.instance.speed = (this.instance.delta.y - this.instance.scroll.y) / (Date.now() - this.timestamp);
        } else {
            this.instance.speed = 0;
        }
    }

    initScrollBar() {
        this.scrollbar = document.createElement('span');
        this.scrollbarThumb = document.createElement('span');
        this.scrollbar.classList.add(`${this.scrollbarClass}`);
        this.scrollbarThumb.classList.add(`${this.scrollbarClass}_thumb`);

        this.scrollbar.append(this.scrollbarThumb);
        document.body.append(this.scrollbar);
        this.scrollbarThumb.style.height = `${(window.innerHeight * window.innerHeight) / (this.instance.limit + window.innerHeight)}px`;
        this.scrollBarLimit = window.innerHeight - this.scrollbarThumb.getBoundingClientRect().height;

        this.getScrollBar = this.getScrollBar.bind(this);
        this.releaseScrollBar = this.releaseScrollBar.bind(this);
        this.moveScrollBar = this.moveScrollBar.bind(this);

        this.scrollbarThumb.addEventListener('mousedown', this.getScrollBar);
        window.addEventListener('mouseup', this.releaseScrollBar);
        window.addEventListener('mousemove', this.moveScrollBar);
    }

    reinitScrollBar() {
        this.scrollbarThumb.style.height = `${(window.innerHeight * window.innerHeight) / this.instance.limit}px`;
        this.scrollBarLimit = window.innerHeight - this.scrollbarThumb.getBoundingClientRect().height;
    }

    destroyScrollBar() {
        this.scrollbarThumb.removeEventListener('mousedown', this.getScrollBar);
        window.removeEventListener('mouseup', this.releaseScrollBar);
        window.removeEventListener('mousemove', this.moveScrollBar);
        this.scrollbar.remove();
    }

    getScrollBar(e) {
        this.isDraggingScrollbar = true;
        this.checkScroll();
        this.html.classList.remove(this.scrollingClass);
        this.html.classList.add(this.draggingClass);
    }

    releaseScrollBar(e) {
        this.isDraggingScrollbar = false;
        this.html.classList.add(this.scrollingClass);
        this.html.classList.remove(this.draggingClass);
    }

    moveScrollBar(e) {
        if (!this.isTicking && this.isDraggingScrollbar) {
            requestAnimationFrame(() => {
                let y = (e.clientY * 100 / (window.innerHeight)) * this.instance.limit / 100;

                if(y > 0 && y < this.instance.limit) {
                    this.instance.delta.y = y;
                }
            });
            this.isTicking = true;
        }
        this.isTicking = false;
    }

    addElements() {
        this.els = []
        this.parallaxElements = []
        let count = 0;

        this.sections.forEach((section, y) => {
            const els = this.sections[y].el.querySelectorAll(`[data-${this.name}]`);

            els.forEach((el, i) => {
                let cl = el.dataset[this.name + 'Class'] || this.class;
                let top;
                let repeat = el.dataset[this.name + 'Repeat'];
                let call = el.dataset[this.name + 'Call'];
                let position = el.dataset[this.name + 'Position'];
                let delay = el.dataset[this.name + 'Delay'];
                let direction = el.dataset[this.name + 'Direction'];
                let sticky = typeof el.dataset[this.name + 'Sticky'] === 'string';
                let speed = el.dataset[this.name + 'Speed'] ? parseFloat(el.dataset[this.name + 'Speed'])/10 : false;
                let offset = (typeof el.dataset[this.name + 'Offset'] === 'string') ? el.dataset[this.name + 'Offset'].split(',') : false;

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
                    const elDistance = el.getBoundingClientRect().top - top;

                    top += window.innerHeight;
                    bottom = top + targetEl.offsetHeight - window.innerHeight - el.offsetHeight - elDistance;
                    middle = ((bottom - top) / 2) + top;
                }

                if(repeat == 'false') {
                    repeat = false;
                } else if (repeat != undefined) {
                    repeat = true;
                } else {
                    repeat = this.repeat;
                }

                let relativeOffset = [0,0];
                if(offset) {
                    for (var i = 0; i < offset.length; i++) {
                        if(offset[i].includes('%')) {
                            relativeOffset[i] = parseInt(offset[i].replace('%','') * this.windowHeight / 100);
                        } else {
                            relativeOffset[i] = parseInt(offset[i]);
                        }
                    }
                }

                const mappedEl = {
                    el,
                    id: count,
                    class: cl,
                    top: top + relativeOffset[0],
                    middle,
                    bottom: bottom - relativeOffset[1],
                    offset,
                    repeat,
                    inView: false,
                    call,
                    speed,
                    delay,
                    position,
                    target: targetEl,
                    direction,
                    sticky
                }

                count++;
                this.els.push(mappedEl);

                if(speed !== false || sticky) {
                    this.parallaxElements.push(mappedEl);
                }
            });

        })
    }

    addSections() {
        this.sections = [];

        let sections = this.el.querySelectorAll(`[data-${this.name}-section]`);
        if (sections.length === 0) {
           sections = [this.el];
        }

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

            if(isForced) {
                transformDistance = 0
            }

            if(current.inView) {
                switch (current.position) {
                    case 'top':
                        transformDistance = this.instance.scroll.y * -current.speed;
                    break;

                    case 'elementTop':
                        transformDistance = (scrollBottom - current.top) * -current.speed;
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
                    if(this.instance.scroll.y < current.top - window.innerHeight && this.instance.scroll.y < current.top - (window.innerHeight/2)) {
                        transformDistance = 0;
                    } else if(this.instance.scroll.y > current.bottom && this.instance.scroll.y > current.bottom + 100) {
                        transformDistance = current.bottom - current.top + window.innerHeight;
                    } else {
                        transformDistance = false;
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

    /**
     * Scroll to a desired target.
     *
     * @param  {object} options
     *      Available options :
     *          {node, string, "top", "bottom"} targetOption - The DOM element we want to scroll to
     *          {int} offsetOption - An absolute vertical scroll value to reach, or an offset to apply on top of given `target` or `sourceElem`'s target
     *          {boolean} toBottom - Set to true to scroll all the way to the bottom
     * @return {void}
     */
    scrollTo(targetOption, offsetOption) {
        let target;
        let offset = offsetOption ? parseInt(offsetOption) : 0;

        if(typeof targetOption === 'string') {

            if(targetOption === 'top') {
                offset = 0;
            } else if(targetOption === 'bottom') {
                offset = this.instance.limit;
            } else {
                target = document.querySelectorAll(targetOption)[0];
            }

        } else if(!targetOption.target) {
            target = targetOption;
        }

        // We have a target, get it's coordinates
        if (target) {
            // Get target offset from top
            const targetBCR = target.getBoundingClientRect()
            const offsetTop = targetBCR.top + this.instance.scroll.y

            // Try and find the target's parent section
            const targetParents = getParents(target)
            const parentSection = targetParents.find(candidate => this.sections.find(section => section.el == candidate))
            let parentSectionOffset = 0
            if(parentSection) {
                parentSectionOffset = getTranslate(parentSection).y // We got a parent section, store it's current offset to remove it later
            }
            // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)
            offset = offsetTop + offset - parentSectionOffset;
        }
        offset -= this.instance.scroll.y;

        this.instance.delta.y = Math.min(offset, this.instance.limit); // Actual scrollTo (the lerp will do the animation itself)
        this.inertiaRatio = Math.min(4000 / Math.abs(this.instance.delta.y - this.instance.scroll.y),0.8);

        // Update the scroll. If we were in idle state: we're not anymore
        this.isScrolling = true;
        this.checkScroll();
        this.html.classList.add(this.scrollingClass);
    }

    update() {
        this.setScrollLimit();
        this.addSections();
        this.addElements();
        this.detectElements();
        this.updateScroll();
        this.transformElements(true);
    }

    startScroll() {
        this.stop = false;
    }

    stopScroll() {
        this.stop = true;
    }

    setScroll(x,y) {
        this.instance = {
            scroll: {
                x: x,
                y: y
            },
            delta: {
                x: x,
                y: y
            }
        }
    }

    destroy() {
        super.destroy();

        this.stopScrolling();
        this.html.classList.remove(this.smoothClass);
        this.vs.destroy();
        this.destroyScrollBar();
        window.removeEventListener('keydown', this.checkKey, false);
    }
}
