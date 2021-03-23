import Core from './Core';
import smoothscroll from 'smoothscroll-polyfill';

export default class extends Core {
    constructor(options = {}) {
        super(options);

        if (this.resetNativeScroll) {
            if (history.scrollRestoration) {
                history.scrollRestoration = 'manual';
            }
            window.scrollTo(0, 0);
        }

        window.addEventListener('scroll', this.checkScroll, false);

        if (window.smoothscrollPolyfill === undefined) {
            window.smoothscrollPolyfill = smoothscroll;
            window.smoothscrollPolyfill.polyfill();
        }
    }

    init() {
        this.instance.scroll.y = window.pageYOffset;

        this.addElements();
        this.detectElements();

        super.init();
    }

    checkScroll() {
        super.checkScroll();

        if (this.getDirection) {
            this.addDirection();
        }

        if (this.getSpeed) {
            this.addSpeed();
            this.speedTs = Date.now();
        }

        this.instance.scroll.y = window.pageYOffset;

        if (Object.entries(this.els).length) {
            if (!this.hasScrollTicking) {
                requestAnimationFrame(() => {
                    this.detectElements();
                });
                this.hasScrollTicking = true;
            }
        }
    }

    addDirection() {
        if (window.pageYOffset > this.instance.scroll.y) {
            if (this.instance.direction !== 'down') {
                this.instance.direction = 'down';
            }
        } else if (window.pageYOffset < this.instance.scroll.y) {
            if (this.instance.direction !== 'up') {
                this.instance.direction = 'up';
            }
        }
    }

    addSpeed() {
        if (window.pageYOffset != this.instance.scroll.y) {
            this.instance.speed =
                (window.pageYOffset - this.instance.scroll.y) /
                Math.max(1, Date.now() - this.speedTs);
        } else {
            this.instance.speed = 0;
        }
    }

    resize() {
        if (Object.entries(this.els).length) {
            this.windowHeight = window.innerHeight;
            this.updateElements();
        }
    }

    addElements() {
        this.els = {};
        const els = this.el.querySelectorAll('[data-' + this.name + ']');

        els.forEach((el, index) => {
            const BCR = el.getBoundingClientRect();
            let cl = el.dataset[this.name + 'Class'] || this.class;
            let id =
                typeof el.dataset[this.name + 'Id'] === 'string'
                    ? el.dataset[this.name + 'Id']
                    : index;
            let top;
            let left;
            let offset =
                typeof el.dataset[this.name + 'Offset'] === 'string'
                    ? el.dataset[this.name + 'Offset'].split(',')
                    : this.offset;
            let repeat = el.dataset[this.name + 'Repeat'];
            let call = el.dataset[this.name + 'Call'];

            let target = el.dataset[this.name + 'Target'];
            let targetEl;

            if (target !== undefined) {
                targetEl = document.querySelector(`${target}`);
            } else {
                targetEl = el;
            }

            const targetElBCR = targetEl.getBoundingClientRect();
            top = targetElBCR.top + this.instance.scroll.y;
            left = targetElBCR.left + this.instance.scroll.x;

            let bottom = top + targetEl.offsetHeight;
            let right = left + targetEl.offsetWidth;

            if (repeat == 'false') {
                repeat = false;
            } else if (repeat != undefined) {
                repeat = true;
            } else {
                repeat = this.repeat;
            }

            let relativeOffset = this.getRelativeOffset(offset);
            top = top + relativeOffset[0];
            bottom = bottom - relativeOffset[1];

            const mappedEl = {
                el: el,
                targetEl: targetEl,
                id,
                class: cl,
                top: top,
                bottom: bottom,
                left,
                right,
                offset,
                progress: 0,
                repeat,
                inView: false,
                call
            };

            this.els[id] = mappedEl;
            if (el.classList.contains(cl)) {
                this.setInView(this.els[id], id);
            }
        });
    }

    updateElements() {
        Object.entries(this.els).forEach(([i, el]) => {
            const top = el.targetEl.getBoundingClientRect().top + this.instance.scroll.y;
            const bottom = top + el.targetEl.offsetHeight;
            const relativeOffset = this.getRelativeOffset(el.offset);

            this.els[i].top = top + relativeOffset[0];
            this.els[i].bottom = bottom - relativeOffset[1];
        });

        this.hasScrollTicking = false;
    }

    getRelativeOffset(offset) {
        let relativeOffset = [0, 0];

        if (offset) {
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
        }

        return relativeOffset;
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
        const callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

        if (typeof target === 'string') {
            // Selector or boundaries
            if (target === 'top') {
                target = this.html;
            } else if (target === 'bottom') {
                target = this.html.offsetHeight - window.innerHeight;
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
            offset = target.getBoundingClientRect().top + offset + this.instance.scroll.y;
        } else {
            offset = target + offset;
        }

        const isTargetReached = () => { return parseInt(window.pageYOffset) === parseInt(offset) }
        if (callback) {
            if (isTargetReached()) {
                callback();
                return;
            } else {
                let onScroll = function () {
                    if (isTargetReached()) {
                        window.removeEventListener('scroll', onScroll);
                        callback();
                    }
                };
                window.addEventListener('scroll', onScroll);
            }
        }

        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }

    update() {
        this.addElements();
        this.detectElements();
    }

    destroy() {
        super.destroy();

        window.removeEventListener('scroll', this.checkScroll, false);
    }
}
