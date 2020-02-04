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
    TAB: 9,
    PAGEUP: 33,
    PAGEDOWN: 34,
    HOME: 36,
    END: 35
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
        this.html.setAttribute(`data-${this.name}-direction`, this.direction)

        this.instance = {
            delta: {
                x: 0,
                y: 0
            },
            ...this.instance
        }

        this.vs = new virtualScroll({
            el: this.el,
            mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
            firefoxMultiplier: this.firefoxMultiplier,
            touchMultiplier: this.touchMultiplier,
            useKeyboard: false,
            passive: true,
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

        this.instance.limit.y = this.el.offsetHeight - this.windowHeight;

        if(this.direction === 'horizontal') {
            let totalWidth = 0;
            let nodes = this.el.children;
            for(let i = 0; i<nodes.length; i++) {
                totalWidth += nodes[i].offsetWidth;
            }

            this.instance.limit.x = totalWidth - this.windowWidth;
        }
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
                this.instance.delta[this.directionAxis] -= 240;
                break;
            case keyCodes.DOWN:
                this.instance.delta[this.directionAxis] += 240;
                break;
            case keyCodes.PAGEUP:
                this.instance.delta[this.directionAxis] -= window.innerHeight;
                break;
            case keyCodes.PAGEDOWN:
                this.instance.delta[this.directionAxis] += window.innerHeight;
                break;
            case keyCodes.HOME:
                this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                break;
            case keyCodes.END:
                this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                break;
            case keyCodes.SPACE:
                if(!(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement)) {
                    if(e.shiftKey) {
                        this.instance.delta[this.directionAxis] -= window.innerHeight;
                    } else {
                        this.instance.delta[this.directionAxis] += window.innerHeight;
                    }
                }
                break;
            default:
                return;
        }

        if(this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
        if(this.instance.delta[this.directionAxis] > this.instance.limit) this.instance.delta[this.directionAxis] = this.instance.limit;

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

            const distance = (Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]));
            if ((distance < 0.5 && this.instance.delta[this.directionAxis] != 0) || (distance < 0.5 && this.instance.delta[this.directionAxis] == 0)) {
                this.stopScrolling();
            }

            this.updateScroll();

            for (let i = this.sections.length - 1; i >= 0; i--) {
                if(this.sections[i].persistent || (this.instance.scroll[this.directionAxis] > this.sections[i].offset[this.directionAxis] && this.instance.scroll[this.directionAxis] < this.sections[i].limit[this.directionAxis])) {
                    if(this.direction === 'horizontal') {
                        this.transform(this.sections[i].el, -this.instance.scroll[this.directionAxis], 0);
                    } else {
                        this.transform(this.sections[i].el, 0, -this.instance.scroll[this.directionAxis]);
                    }
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

            const scrollBarTranslation = (this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis]) * this.scrollBarLimit[this.directionAxis];
            if(this.direction === 'horizontal') {
                this.transform(this.scrollbarThumb, scrollBarTranslation, 0);
            } else {
                this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
            }

            super.checkScroll();

            this.hasScrollTicking = false;
        }
    }

    checkResize() {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;

        this.checkContext()

        this.windowMiddle = {
            x: this.windowWidth / 2,
            y: this.windowHeight / 2
        }
        this.update();
    }

    updateDelta(e) {
        let delta
        if(this.isMobile) {
            delta = this[this.context].horizontalGesture ? e.deltaX : e.deltaY
        } else {
            delta = this.horizontalGesture ? e.deltaX : e.deltaY
        }

        this.instance.delta[this.directionAxis] -= delta;

        if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
        if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
    }

    updateScroll(e) {
        if (this.isScrolling || this.isDraggingScrollbar) {
            this.instance.scroll[this.directionAxis] = lerp(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.inertia * this.inertiaRatio);
        } else {
            this.instance.scroll[this.directionAxis] = this.instance.delta[this.directionAxis];
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

        if (this.instance.delta.x > this.instance.scroll.x) {
            if (this.instance.direction !== 'right') {
                this.instance.direction = 'right';
            }
        } else if (this.instance.delta.x < this.instance.scroll.x) {
            if (this.instance.direction !== 'left') {
                this.instance.direction = 'left';
            }
        }
    }

    addSpeed() {
        if (this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]) {
            this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / (Date.now() - this.timestamp);
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

        this.scrollbarHeight = this.scrollbar.getBoundingClientRect().height;
        this.scrollbarWidth = this.scrollbar.getBoundingClientRect().width;

        if(this.direction === 'horizontal') {
            this.scrollbarThumb.style.width = `${(this.scrollbarWidth * this.scrollbarWidth) / (this.instance.limit.x + this.scrollbarWidth)}px`;
        } else {
            this.scrollbarThumb.style.height = `${(this.scrollbarHeight * this.scrollbarHeight) / (this.instance.limit.y + this.scrollbarHeight)}px`;
        }

        this.scrollBarLimit = {
            x: this.scrollbarWidth - this.scrollbarThumb.getBoundingClientRect().width,
            y: this.scrollbarHeight - this.scrollbarThumb.getBoundingClientRect().height
        }

        this.getScrollBar = this.getScrollBar.bind(this);
        this.releaseScrollBar = this.releaseScrollBar.bind(this);
        this.moveScrollBar = this.moveScrollBar.bind(this);

        this.scrollbarThumb.addEventListener('mousedown', this.getScrollBar);
        window.addEventListener('mouseup', this.releaseScrollBar);
        window.addEventListener('mousemove', this.moveScrollBar);
    }

    reinitScrollBar() {
        this.scrollbarHeight = this.scrollbar.getBoundingClientRect().height;
        this.scrollbarWidth = this.scrollbar.getBoundingClientRect().width;

        if(this.direction === 'horizontal') {
            this.scrollbarThumb.style.width = `${(this.scrollbarWidth * this.scrollbarWidth) / (this.instance.limit.x + this.scrollbarWidth)}px`;
        } else {
            this.scrollbarThumb.style.height = `${(this.scrollbarHeight * this.scrollbarHeight) / (this.instance.limit.y + this.scrollbarHeight)}px`;
        }
        this.scrollBarLimit = {
            x: this.scrollbarWidth - this.scrollbarThumb.getBoundingClientRect().width,
            y: this.scrollbarHeight - this.scrollbarThumb.getBoundingClientRect().height
        }
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
                let x = (e.clientX * 100 / (this.scrollbarWidth)) * this.instance.limit.x / 100;
                let y = (e.clientY * 100 / (this.scrollbarHeight)) * this.instance.limit.y / 100;

                if(y > 0 && y < this.instance.limit.y) {
                    this.instance.delta.y = y;
                }
                if(x > 0 && x < this.instance.limit.x) {
                    this.instance.delta.x = x;
                }
            });
            this.isTicking = true;
        }
        this.isTicking = false;
    }

    addElements() {
        this.els = []
        this.parallaxElements = []

        this.sections.forEach((section, y) => {
            const els = this.sections[y].el.querySelectorAll(`[data-${this.name}]`);

            els.forEach((el, i) => {
                let cl = el.dataset[this.name + 'Class'] || this.class;
                let top;
                let left;
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
                    left = targetEl.getBoundingClientRect().left - getTranslate(this.sections[y].el).x - getTranslate(targetEl).x;
                } else {
                    top = targetEl.getBoundingClientRect().top + this.instance.scroll.y - getTranslate(targetEl).y;
                    left = targetEl.getBoundingClientRect().left + this.instance.scroll.x - getTranslate(targetEl).x;
                }

                let bottom = top + targetEl.offsetHeight;
                let right = left + targetEl.offsetWidth;
                let middle = {
                    x: ((right - left) / 2) + left,
                    y: ((bottom - top) / 2) + top
                };

                if(sticky) {
                    const elDistance = {
                        x: el.getBoundingClientRect().left - left,
                        y: el.getBoundingClientRect().top - top
                    }

                    top += window.innerHeight;
                    left += window.innerWidth;
                    bottom = top + targetEl.offsetHeight - window.innerHeight - el.offsetHeight - elDistance[this.directionAxis];
                    right = left + targetEl.offsetWidth - window.innerWidth - el.offsetWidth - elDistance[this.directionAxis];
                    middle = {
                        x: ((right - left) / 2) + left,
                        y: ((bottom - top) / 2) + top
                    };
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
                    if(this.direction === 'horizontal') {
                        for (var i = 0; i < offset.length; i++) {
                            if(offset[i].includes('%')) {
                                relativeOffset[i] = parseInt(offset[i].replace('%','') * this.windowWidth / 100);
                            } else {
                                relativeOffset[i] = parseInt(offset[i]);
                            }
                        }
                        left = left + relativeOffset[0];
                        right = right - relativeOffset[1];
                    } else {
                        for (var i = 0; i < offset.length; i++) {
                            if(offset[i].includes('%')) {
                                relativeOffset[i] = parseInt(offset[i].replace('%','') * this.windowHeight / 100);
                            } else {
                                relativeOffset[i] = parseInt(offset[i]);
                            }
                        }
                        top = top + relativeOffset[0];
                        bottom = bottom - relativeOffset[1];
                    }
                }



                const mappedEl = {
                    el,
                    id: i,
                    class: cl,
                    top,
                    middle,
                    bottom,
                    left,
                    right,
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
            let offset = {
                x: section.getBoundingClientRect().left - (window.innerWidth * 1.5) - getTranslate(section).x,
                y: section.getBoundingClientRect().top - (window.innerHeight * 1.5) - getTranslate(section).y
            };
            let limit = {
                x: offset.x + section.getBoundingClientRect().width + (window.innerWidth * 2),
                y: offset.y + section.getBoundingClientRect().height + (window.innerHeight * 2)
            }
            let persistent = typeof section.dataset[this.name + 'Persistent'] === 'string';

            let inView = false;
            if(this.instance.scroll[this.directionAxis] >= offset[this.directionAxis] && this.instance.scroll[this.directionAxis] <= limit[this.directionAxis]) {
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
            transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${x},${y},0,1)`;
        } else {
            let start = getTranslate(element);
            let lerpX = lerp(start.x, x, delay);
            let lerpY = lerp(start.y, y, delay);

            transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${lerpX},${lerpY},0,1)`;
        }

        element.style.webkitTransform = transform;
        element.style.msTransform = transform;
        element.style.transform = transform;
    }

    transformElements(isForced) {
        const scrollRight = this.instance.scroll.x + this.windowWidth;
        const scrollBottom = this.instance.scroll.y + this.windowHeight;

        const scrollMiddle = {
            x: this.instance.scroll.x + this.windowMiddle.x,
            y: this.instance.scroll.y + this.windowMiddle.y
        };


        this.parallaxElements.forEach((current, i) => {
            let transformDistance = false;

            if(isForced) {
                transformDistance = 0
            }

            if(current.inView) {
                switch (current.position) {
                    case 'top':
                        transformDistance = this.instance.scroll[this.directionAxis] * -current.speed;
                    break;

                    case 'elementTop':
                        transformDistance = (scrollBottom - current.top) * -current.speed;
                    break;

                    case 'bottom':
                        transformDistance = (this.instance.limit[this.directionAxis] - scrollBottom + this.windowHeight) * current.speed;
                    break;

                    case 'left':
                        transformDistance = this.instance.scroll[this.directionAxis] * -current.speed;
                    break;

                    case 'elementLeft':
                        transformDistance = (scrollRight - current.left) * -current.speed;
                    break;

                    case 'right':
                        transformDistance = (this.instance.limit[this.directionAxis] - scrollRight + this.windowHeight) * current.speed;
                    break;

                    default:
                        transformDistance = (scrollMiddle[this.directionAxis] - current.middle[this.directionAxis]) * -current.speed;
                    break;
                }
            }

            if(current.sticky) {

                if(current.inView) {

                    if(this.direction === 'horizontal') {
                        transformDistance = this.instance.scroll.x - current.left + window.innerWidth;
                    } else {
                        transformDistance = this.instance.scroll.y - current.top + window.innerHeight;
                    }

                } else {
                    if(this.direction === 'horizontal') {
                        if(this.instance.scroll.x < current.left - window.innerWidth && this.instance.scroll.x < current.left - (window.innerWidth/2)) {
                            transformDistance = 0;
                        } else if(this.instance.scroll.x > current.right && this.instance.scroll.x > current.right + 100) {
                            transformDistance = current.right - current.left + window.innerWidth;
                        } else {
                            transformDistance = false;
                        }
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
            }

            if(transformDistance !== false) {
                if(current.direction === 'horizontal' || (this.direction === 'horizontal' && current.direction !== 'vertical' )) {
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
                offset = this.instance.limit.y;
            } else if(targetOption === 'left') {
                offset = 0;
            } else if(targetOption === 'right') {
                offset = this.instance.limit.x;
            } else {
                target = document.querySelectorAll(targetOption)[0];
            }

        } else if(!targetOption.target) {
            target = targetOption;
        }

        // We have a target, get it's coordinates
        if (target) {
            // Get target offset from top
            const targetBCR = target.getBoundingClientRect();
            const offsetTop = targetBCR.top + this.instance.scroll.y;
            const offsetLeft = targetBCR.left + this.instance.scroll.x;

            // Try and find the target's parent section
            const targetParents = getParents(target)
            const parentSection = targetParents.find(candidate => this.sections.find(section => section.el == candidate))
            let parentSectionOffset = 0
            if(parentSection) {
                parentSectionOffset = getTranslate(parentSection)[this.directionAxis] // We got a parent section, store it's current offset to remove it later
            }
            // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)
            if(this.direction === 'horizontal') {
                offset = offsetLeft + offset - parentSectionOffset;
            } else {
                offset = offsetTop + offset - parentSectionOffset;
            }

        }
        offset -= this.instance.scroll[this.directionAxis];

        this.instance.delta[this.directionAxis] = Math.min(offset, this.instance.limit[this.directionAxis]); // Actual scrollTo (the lerp will do the animation itself)
        this.inertiaRatio = Math.min(4000 / Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]),0.8);

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
        this.reinitScrollBar();
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
