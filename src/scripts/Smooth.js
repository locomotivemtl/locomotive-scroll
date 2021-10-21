import virtualScroll from 'virtual-scroll';
import Core from './Core';
import { lerp } from './utils/maths';
import { getTranslate } from './utils/transform';
import { getParents, queryClosestParent } from './utils/html';
import BezierEasing from 'bezier-easing';

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
        if (history.scrollRestoration) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);

        super(options);

        if (this.inertia) this.lerp = this.inertia * 0.1;
        this.isScrolling = false;
        this.isDraggingScrollbar = false;
        this.isTicking = false;
        this.hasScrollTicking = false;
        this.parallaxElements = {};
        this.stop = false;
        this.scrollbarContainer = options.scrollbarContainer;

        this.checkKey = this.checkKey.bind(this);
        window.addEventListener('keydown', this.checkKey, false);
    }

    init() {
        this.html.classList.add(this.smoothClass);
        this.html.setAttribute(`data-${this.name}-direction`, this.direction);

        this.instance = {
            delta: {
                x: this.initPosition.x,
                y: this.initPosition.y
            },
            scroll: {
                x: this.initPosition.x,
                y: this.initPosition.y
            },
            ...this.instance
        };

        this.vs = new virtualScroll({
            el: this.scrollFromAnywhere ? document : this.el,
            mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
            firefoxMultiplier: this.firefoxMultiplier,
            touchMultiplier: this.touchMultiplier,
            useKeyboard: false,
            passive: true
        });

        this.vs.on((e) => {
            if (this.stop) {
                return;
            }

            if (!this.isDraggingScrollbar) {
                requestAnimationFrame(() => {
                    this.updateDelta(e);
                    if (!this.isScrolling) this.startScrolling();
                });
            }
        });

        this.setScrollLimit();
        this.initScrollBar();
        this.addSections();
        this.addElements();

        this.checkScroll(true);
        this.transformElements(true, true);

        super.init();
    }

    setScrollLimit() {
        this.instance.limit.y = this.el.offsetHeight - this.windowHeight;

        if (this.direction === 'horizontal') {
            let totalWidth = 0;
            let nodes = this.el.children;
            for (let i = 0; i < nodes.length; i++) {
                totalWidth += nodes[i].offsetWidth;
            }

            this.instance.limit.x = totalWidth - this.windowWidth;
        }
    }

    startScrolling() {
        this.startScrollTs = Date.now(); // Record timestamp

        this.isScrolling = true;
        this.checkScroll();
        this.html.classList.add(this.scrollingClass);
    }

    stopScrolling() {
        cancelAnimationFrame(this.checkScrollRaf); // Prevent checkScroll to continue looping

        //Pevent scrollbar glitch/locking
        this.startScrollTs = undefined;

        if (this.scrollToRaf) {
            cancelAnimationFrame(this.scrollToRaf);
            this.scrollToRaf = null;
        }

        this.isScrolling = false;
        this.instance.scroll.y = Math.round(this.instance.scroll.y);
        this.html.classList.remove(this.scrollingClass);
    }

    checkKey(e) {
        if (this.stop) {
            // If we are stopped, we don't want any scroll to occur because of a keypress
            // Prevent tab to scroll to activeElement
            if (e.keyCode == keyCodes.TAB) {
                requestAnimationFrame(() => {
                    // Make sure native scroll is always at top of page
                    this.html.scrollTop = 0;
                    document.body.scrollTop = 0;
                    this.html.scrollLeft = 0;
                    document.body.scrollLeft = 0;
                });
            }
            return;
        }

        switch (e.keyCode) {
            case keyCodes.TAB:
                // Do not remove the RAF
                // It allows to override the browser's native scrollTo, which is essential
                requestAnimationFrame(() => {
                    // Make sure native scroll is always at top of page
                    this.html.scrollTop = 0;
                    document.body.scrollTop = 0;
                    this.html.scrollLeft = 0;
                    document.body.scrollLeft = 0;

                    // Request scrollTo on the focusedElement, putting it at the center of the screen
                    this.scrollTo(document.activeElement, { offset: -window.innerHeight / 2 });
                });
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
                if (
                    !(document.activeElement instanceof HTMLInputElement) &&
                    !(document.activeElement instanceof HTMLTextAreaElement)
                ) {
                    if (e.shiftKey) {
                        this.instance.delta[this.directionAxis] -= window.innerHeight;
                    } else {
                        this.instance.delta[this.directionAxis] += window.innerHeight;
                    }
                }
                break;
            default:
                return;
        }

        if (this.instance.delta[this.directionAxis] < 0)
            this.instance.delta[this.directionAxis] = 0;
        if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis])
            this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];

        this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening
        this.isScrolling = true;
        this.checkScroll();
        this.html.classList.add(this.scrollingClass);
    }

    checkScroll(forced = false) {
        if (forced || this.isScrolling || this.isDraggingScrollbar) {
            if (!this.hasScrollTicking) {
                this.checkScrollRaf = requestAnimationFrame(() => this.checkScroll());
                this.hasScrollTicking = true;
            }

            this.updateScroll();

            const distance = Math.abs(
                this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]
            );
            const timeSinceStart = Date.now() - this.startScrollTs; // Get the time since the scroll was started: the scroll can be stopped again only past 100ms
            if (
                !this.animatingScroll &&
                timeSinceStart > 100 &&
                ((distance < 0.5 && this.instance.delta[this.directionAxis] != 0) ||
                    (distance < 0.5 && this.instance.delta[this.directionAxis] == 0))
            ) {
                this.stopScrolling();
            }

            Object.entries(this.sections).forEach(([i, section]) => {
                if (
                    section.persistent ||
                    (this.instance.scroll[this.directionAxis] >
                        section.offset[this.directionAxis] &&
                        this.instance.scroll[this.directionAxis] <
                            section.limit[this.directionAxis])
                ) {
                    if (this.direction === 'horizontal') {
                        this.transform(section.el, -this.instance.scroll[this.directionAxis], 0);
                    } else {
                        this.transform(section.el, 0, -this.instance.scroll[this.directionAxis]);
                    }

                    if (!section.inView) {
                        section.inView = true;
                        section.el.style.opacity = 1;
                        section.el.style.pointerEvents = 'all';
                        section.el.setAttribute(`data-${this.name}-section-inview`, '');
                    }
                } else {
                    if (section.inView || forced) {
                        section.inView = false;
                        section.el.style.opacity = 0;
                        section.el.style.pointerEvents = 'none';
                        section.el.removeAttribute(`data-${this.name}-section-inview`);
                    }

                    this.transform(section.el, 0, 0);
                }
            });

            if (this.getDirection) {
                this.addDirection();
            }

            if (this.getSpeed) {
                this.addSpeed();
                this.speedTs = Date.now();
            }

            this.detectElements();
            this.transformElements();

            if (this.hasScrollbar) {
                const scrollBarTranslation =
                    (this.instance.scroll[this.directionAxis] /
                        this.instance.limit[this.directionAxis]) *
                    this.scrollBarLimit[this.directionAxis];
                if (this.direction === 'horizontal') {
                    this.transform(this.scrollbarThumb, scrollBarTranslation, 0);
                } else {
                    this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
                }
            }

            super.checkScroll();

            this.hasScrollTicking = false;
        }
    }

    resize() {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;

        this.checkContext();

        this.windowMiddle = {
            x: this.windowWidth / 2,
            y: this.windowHeight / 2
        };
        this.update();
    }

    updateDelta(e) {
        let delta;
        const gestureDirection =
            this[this.context] && this[this.context].gestureDirection
                ? this[this.context].gestureDirection
                : this.gestureDirection;

        if (gestureDirection === 'both') {
            delta = e.deltaX + e.deltaY;
        } else if (gestureDirection === 'vertical') {
            delta = e.deltaY;
        } else if (gestureDirection === 'horizontal') {
            delta = e.deltaX;
        } else {
            delta = e.deltaY;
        }

        this.instance.delta[this.directionAxis] -= delta * this.multiplier;

        if (this.instance.delta[this.directionAxis] < 0)
            this.instance.delta[this.directionAxis] = 0;
        if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis])
            this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
    }

    updateScroll(e) {
        if (this.isScrolling || this.isDraggingScrollbar) {
            this.instance.scroll[this.directionAxis] = lerp(
                this.instance.scroll[this.directionAxis],
                this.instance.delta[this.directionAxis],
                this.lerp
            );
        } else {
            if (
                this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]
            ) {
                this.setScroll(
                    this.instance.scroll[this.directionAxis],
                    this.instance.limit[this.directionAxis]
                );
            } else if (this.instance.scroll.y < 0) {
                this.setScroll(this.instance.scroll[this.directionAxis], 0);
            } else {
                this.setScroll(
                    this.instance.scroll[this.directionAxis],
                    this.instance.delta[this.directionAxis]
                );
            }
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
            this.instance.speed =
                (this.instance.delta[this.directionAxis] -
                    this.instance.scroll[this.directionAxis]) /
                Math.max(1, Date.now() - this.speedTs);
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
        if (this.scrollbarContainer) {
            this.scrollbarContainer.append(this.scrollbar);
        } else {
            document.body.append(this.scrollbar);
        }

        // Scrollbar Events
        this.getScrollBar = this.getScrollBar.bind(this);
        this.releaseScrollBar = this.releaseScrollBar.bind(this);
        this.moveScrollBar = this.moveScrollBar.bind(this);

        this.scrollbarThumb.addEventListener('mousedown', this.getScrollBar);
        window.addEventListener('mouseup', this.releaseScrollBar);
        window.addEventListener('mousemove', this.moveScrollBar);

        // Set scrollbar values
        this.hasScrollbar = false;
        if (this.direction == 'horizontal') {
            if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
                return;
            }
        } else {
            if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
                return;
            }
        }
        this.hasScrollbar = true;

        this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
        this.scrollbarHeight = this.scrollbarBCR.height;
        this.scrollbarWidth = this.scrollbarBCR.width;

        if (this.direction === 'horizontal') {
            this.scrollbarThumb.style.width = `${
                (this.scrollbarWidth * this.scrollbarWidth) /
                (this.instance.limit.x + this.scrollbarWidth)
            }px`;
        } else {
            this.scrollbarThumb.style.height = `${
                (this.scrollbarHeight * this.scrollbarHeight) /
                (this.instance.limit.y + this.scrollbarHeight)
            }px`;
        }

        this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
        this.scrollBarLimit = {
            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
        };
    }

    reinitScrollBar() {
        this.hasScrollbar = false;
        if (this.direction == 'horizontal') {
            if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
                return;
            }
        } else {
            if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
                return;
            }
        }
        this.hasScrollbar = true;

        this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
        this.scrollbarHeight = this.scrollbarBCR.height;
        this.scrollbarWidth = this.scrollbarBCR.width;

        if (this.direction === 'horizontal') {
            this.scrollbarThumb.style.width = `${
                (this.scrollbarWidth * this.scrollbarWidth) /
                (this.instance.limit.x + this.scrollbarWidth)
            }px`;
        } else {
            this.scrollbarThumb.style.height = `${
                (this.scrollbarHeight * this.scrollbarHeight) /
                (this.instance.limit.y + this.scrollbarHeight)
            }px`;
        }

        this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
        this.scrollBarLimit = {
            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
        };
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

        if (this.isScrolling) {
            this.html.classList.add(this.scrollingClass);
        }

        this.html.classList.remove(this.draggingClass);
    }

    moveScrollBar(e) {
        if (this.isDraggingScrollbar) {
            requestAnimationFrame(() => {
                let x =
                    ((((e.clientX - this.scrollbarBCR.left) * 100) / this.scrollbarWidth) *
                        this.instance.limit.x) /
                    100;
                let y =
                    ((((e.clientY - this.scrollbarBCR.top) * 100) / this.scrollbarHeight) *
                        this.instance.limit.y) /
                    100;

                if (y > 0 && y < this.instance.limit.y) {
                    this.instance.delta.y = y;
                }
                if (x > 0 && x < this.instance.limit.x) {
                    this.instance.delta.x = x;
                }
            });
        }
    }

    addElements() {
        this.els = {};
        this.parallaxElements = {};

        // this.sections.forEach((section, y) => {
        const els = this.el.querySelectorAll(`[data-${this.name}]`);

        els.forEach((el, index) => {
            // Try and find the target's parent section
            const targetParents = getParents(el);
            let section = Object.entries(this.sections)
                .map(([key, section]) => section)
                .find((section) => targetParents.includes(section.el));

            let cl = el.dataset[this.name + 'Class'] || this.class;
            let id =
                typeof el.dataset[this.name + 'Id'] === 'string'
                    ? el.dataset[this.name + 'Id']
                    : 'el' + index;
            let top;
            let left;
            let repeat = el.dataset[this.name + 'Repeat'];
            let call = el.dataset[this.name + 'Call'];
            let position = el.dataset[this.name + 'Position'];
            let delay = el.dataset[this.name + 'Delay'];
            let direction = el.dataset[this.name + 'Direction'];
            let sticky = typeof el.dataset[this.name + 'Sticky'] === 'string';
            let speed = el.dataset[this.name + 'Speed']
                ? parseFloat(el.dataset[this.name + 'Speed']) / 10
                : false;
            let offset =
                typeof el.dataset[this.name + 'Offset'] === 'string'
                    ? el.dataset[this.name + 'Offset'].split(',')
                    : this.offset;

            let target = el.dataset[this.name + 'Target'];
            let targetEl;

            if (target !== undefined) {
                targetEl = document.querySelector(`${target}`);
            } else {
                targetEl = el;
            }

            const targetElBCR = targetEl.getBoundingClientRect();
            if (section === null) {
                top = targetElBCR.top + this.instance.scroll.y - getTranslate(targetEl).y;
                left = targetElBCR.left + this.instance.scroll.x - getTranslate(targetEl).x;
            } else {
                if (!section.inView) {
                    top = targetElBCR.top - getTranslate(section.el).y - getTranslate(targetEl).y;
                    left = targetElBCR.left - getTranslate(section.el).x - getTranslate(targetEl).x;
                } else {
                    top = targetElBCR.top + this.instance.scroll.y - getTranslate(targetEl).y;
                    left = targetElBCR.left + this.instance.scroll.x - getTranslate(targetEl).x;
                }
            }

            let bottom = top + targetEl.offsetHeight;
            let right = left + targetEl.offsetWidth;
            let middle = {
                x: (right - left) / 2 + left,
                y: (bottom - top) / 2 + top
            };

            if (sticky) {
                const elBCR = el.getBoundingClientRect();
                const elTop = elBCR.top;
                const elLeft = elBCR.left;

                const elDistance = {
                    x: elLeft - left,
                    y: elTop - top
                };

                top += window.innerHeight;
                left += window.innerWidth;
                bottom =
                    elTop +
                    targetEl.offsetHeight -
                    el.offsetHeight -
                    elDistance[this.directionAxis];
                right =
                    elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[this.directionAxis];
                middle = {
                    x: (right - left) / 2 + left,
                    y: (bottom - top) / 2 + top
                };
            }

            if (repeat == 'false') {
                repeat = false;
            } else if (repeat != undefined) {
                repeat = true;
            } else {
                repeat = this.repeat;
            }

            let relativeOffset = [0, 0];
            if (offset) {
                if (this.direction === 'horizontal') {
                    for (var i = 0; i < offset.length; i++) {
                        if (typeof offset[i] == 'string') {
                            if (offset[i].includes('%')) {
                                relativeOffset[i] = parseInt(
                                    (offset[i].replace('%', '') * this.windowWidth) / 100
                                );
                            } else {
                                relativeOffset[i] = parseInt(offset[i]);
                            }
                        } else {
                            relativeOffset[i] = offset[i];
                        }
                    }
                    left = left + relativeOffset[0];
                    right = right - relativeOffset[1];
                } else {
                    for (var i = 0; i < offset.length; i++) {
                        if (typeof offset[i] == 'string') {
                            if (offset[i].includes('%')) {
                                relativeOffset[i] = parseInt(
                                    (offset[i].replace('%', '') * this.windowHeight) / 100
                                );
                            } else {
                                relativeOffset[i] = parseInt(offset[i]);
                            }
                        } else {
                            relativeOffset[i] = offset[i];
                        }
                    }
                    top = top + relativeOffset[0];
                    bottom = bottom - relativeOffset[1];
                }
            }

            const mappedEl = {
                el,
                id: id,
                class: cl,
                section: section,
                top,
                middle,
                bottom,
                left,
                right,
                offset,
                progress: 0,
                repeat,
                inView: false,
                call,
                speed,
                delay,
                position,
                target: targetEl,
                direction,
                sticky
            };

            this.els[id] = mappedEl;
            if (el.classList.contains(cl)) {
                this.setInView(this.els[id], id);
            }

            if (speed !== false || sticky) {
                this.parallaxElements[id] = mappedEl;
            }
        });
        // });
    }

    addSections() {
        this.sections = {};

        let sections = this.el.querySelectorAll(`[data-${this.name}-section]`);
        if (sections.length === 0) {
            sections = [this.el];
        }

        sections.forEach((section, index) => {
            let id =
                typeof section.dataset[this.name + 'Id'] === 'string'
                    ? section.dataset[this.name + 'Id']
                    : 'section' + index;
            const sectionBCR = section.getBoundingClientRect();
            let offset = {
                x: sectionBCR.left - window.innerWidth * 1.5 - getTranslate(section).x,
                y: sectionBCR.top - window.innerHeight * 1.5 - getTranslate(section).y
            };
            let limit = {
                x: offset.x + sectionBCR.width + window.innerWidth * 2,
                y: offset.y + sectionBCR.height + window.innerHeight * 2
            };
            let persistent = typeof section.dataset[this.name + 'Persistent'] === 'string';
            section.setAttribute('data-scroll-section-id', id);

            const mappedSection = {
                el: section,
                offset: offset,
                limit: limit,
                inView: false,
                persistent: persistent,
                id: id
            };

            this.sections[id] = mappedSection;
        });
    }

    transform(element, x, y, delay) {
        let transform;

        if (!delay) {
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

    transformElements(isForced, setAllElements = false) {
        const scrollRight = this.instance.scroll.x + this.windowWidth;
        const scrollBottom = this.instance.scroll.y + this.windowHeight;

        const scrollMiddle = {
            x: this.instance.scroll.x + this.windowMiddle.x,
            y: this.instance.scroll.y + this.windowMiddle.y
        };

        Object.entries(this.parallaxElements).forEach(([i, current]) => {
            let transformDistance = false;

            if (isForced) {
                transformDistance = 0;
            }

            if (current.inView || setAllElements) {
                switch (current.position) {
                    case 'top':
                        transformDistance =
                            this.instance.scroll[this.directionAxis] * -current.speed;
                        break;

                    case 'elementTop':
                        transformDistance = (scrollBottom - current.top) * -current.speed;
                        break;

                    case 'bottom':
                        transformDistance =
                            (this.instance.limit[this.directionAxis] -
                                scrollBottom +
                                this.windowHeight) *
                            current.speed;
                        break;

                    case 'left':
                        transformDistance =
                            this.instance.scroll[this.directionAxis] * -current.speed;
                        break;

                    case 'elementLeft':
                        transformDistance = (scrollRight - current.left) * -current.speed;
                        break;

                    case 'right':
                        transformDistance =
                            (this.instance.limit[this.directionAxis] -
                                scrollRight +
                                this.windowHeight) *
                            current.speed;
                        break;

                    default:
                        transformDistance =
                            (scrollMiddle[this.directionAxis] -
                                current.middle[this.directionAxis]) *
                            -current.speed;
                        break;
                }
            }

            if (current.sticky) {
                if (current.inView) {
                    if (this.direction === 'horizontal') {
                        transformDistance =
                            this.instance.scroll.x - current.left + window.innerWidth;
                    } else {
                        transformDistance =
                            this.instance.scroll.y - current.top + window.innerHeight;
                    }
                } else {
                    if (this.direction === 'horizontal') {
                        if (
                            this.instance.scroll.x < current.left - window.innerWidth &&
                            this.instance.scroll.x < current.left - window.innerWidth / 2
                        ) {
                            transformDistance = 0;
                        } else if (
                            this.instance.scroll.x > current.right &&
                            this.instance.scroll.x > current.right + 100
                        ) {
                            transformDistance = current.right - current.left + window.innerWidth;
                        } else {
                            transformDistance = false;
                        }
                    } else {
                        if (
                            this.instance.scroll.y < current.top - window.innerHeight &&
                            this.instance.scroll.y < current.top - window.innerHeight / 2
                        ) {
                            transformDistance = 0;
                        } else if (
                            this.instance.scroll.y > current.bottom &&
                            this.instance.scroll.y > current.bottom + 100
                        ) {
                            transformDistance = current.bottom - current.top + window.innerHeight;
                        } else {
                            transformDistance = false;
                        }
                    }
                }
            }

            if (transformDistance !== false) {
                if (
                    current.direction === 'horizontal' ||
                    (this.direction === 'horizontal' && current.direction !== 'vertical')
                ) {
                    this.transform(
                        current.el,
                        transformDistance,
                        0,
                        isForced ? false : current.delay
                    );
                } else {
                    this.transform(
                        current.el,
                        0,
                        transformDistance,
                        isForced ? false : current.delay
                    );
                }
            }
        });
    }

    /**
     * Scroll to a desired target.
     *
     * @param  Available options :
     *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
     *          options {object} - Options object for additionnal settings.
     * @return {void}
     */
    scrollTo(target, options = {}) {
        // Parse options
        let offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target
        const duration = !isNaN(parseInt(options.duration)) ? parseInt(options.duration) : 1000; // Duration of the scroll animation in milliseconds
        let easing = options.easing || [0.25, 0.0, 0.35, 1.0]; // An array of 4 floats between 0 and 1 defining the bezier curve for the animation's easing. See http://greweb.me/bezier-easing-editor/example/
        const disableLerp = options.disableLerp ? true : false; // Lerp effect won't be applied if set to true
        const callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

        easing = BezierEasing(...easing);

        if (typeof target === 'string') {
            // Selector or boundaries
            if (target === 'top') {
                target = 0;
            } else if (target === 'bottom') {
                target = this.instance.limit.y;
            } else if (target === 'left') {
                target = 0;
            } else if (target === 'right') {
                target = this.instance.limit.x;
            } else {
                target = document.querySelector(target);
                // If the query fails, abort
                if (!target) {
                    return;
                }
            }
        } else if (typeof target === 'number') {
            // Absolute coordinate
            target = parseInt(target);
        } else if (target && target.tagName) {
            // DOM Element
            // We good 👍
        } else {
            console.warn('`target` parameter is not valid');
            return;
        }

        // We have a target that is not a coordinate yet, get it
        if (typeof target !== 'number') {
            // Verify the given target belongs to this scroll scope
            let targetInScope = getParents(target).includes(this.el);
            if (!targetInScope) {
                // If the target isn't inside our main element, abort any action
                return;
            }

            // Get target offset from top
            const targetBCR = target.getBoundingClientRect();
            const offsetTop = targetBCR.top;
            const offsetLeft = targetBCR.left;

            // Try and find the target's parent section
            const targetParents = getParents(target);
            const parentSection = targetParents.find((candidate) => {
                return Object.entries(this.sections) // Get sections associative array as a regular array
                    .map(([key, section]) => section) // map to section only (we dont need the key here)
                    .find((section) => section.el == candidate); // finally find the section that matches the candidate
            });
            let parentSectionOffset = 0;
            if (parentSection) {
                parentSectionOffset = getTranslate(parentSection)[this.directionAxis]; // We got a parent section, store it's current offset to remove it later
            } else {
                // if no parent section is found we need to use instance scroll directly
                parentSectionOffset = -this.instance.scroll[this.directionAxis];
            }

            // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)
            if (this.direction === 'horizontal') {
                offset = offsetLeft + offset - parentSectionOffset;
            } else {
                offset = offsetTop + offset - parentSectionOffset;
            }
        } else {
            offset = target + offset;
        }

        // Actual scrollto
        // ==========================================================================

        // Setup
        const scrollStart = parseFloat(this.instance.delta[this.directionAxis]);
        const scrollTarget = Math.max(0, Math.min(offset, this.instance.limit[this.directionAxis])); // Make sure our target is in the scroll boundaries
        const scrollDiff = scrollTarget - scrollStart;
        const render = (p) => {
            if (disableLerp) {
                if (this.direction === 'horizontal') {
                    this.setScroll(scrollStart + scrollDiff * p, this.instance.delta.y);
                } else {
                    this.setScroll(this.instance.delta.x, scrollStart + scrollDiff * p);
                }
            } else {
                this.instance.delta[this.directionAxis] = scrollStart + scrollDiff * p;
            }
        };

        // Prepare the scroll
        this.animatingScroll = true; // This boolean allows to prevent `checkScroll()` from calling `stopScrolling` when the animation is slow (i.e. at the beginning of an EaseIn)
        this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening
        this.startScrolling(); // Restart the scroll

        // Start the animation loop
        const start = Date.now();
        const loop = () => {
            var p = (Date.now() - start) / duration; // Animation progress

            if (p > 1) {
                // Animation ends
                render(1);
                this.animatingScroll = false;

                if (duration == 0) this.update();
                if (callback) callback();
            } else {
                this.scrollToRaf = requestAnimationFrame(loop);
                render(easing(p));
            }
        };
        loop();
    }

    update() {
        this.setScrollLimit();
        this.addSections();
        this.addElements();
        this.detectElements();
        this.updateScroll();
        this.transformElements(true);
        this.reinitScrollBar();

        this.checkScroll(true);
    }

    startScroll() {
        this.stop = false;
    }

    stopScroll() {
        this.stop = true;
    }

    setScroll(x, y) {
        this.instance = {
            ...this.instance,
            scroll: {
                x: x,
                y: y
            },
            delta: {
                x: x,
                y: y
            },
            speed: 0
        };
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
