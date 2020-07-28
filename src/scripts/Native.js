import Core from './Core';
import smoothscroll from 'smoothscroll-polyfill';

export default class extends Core {
    constructor(options = {}) {
        super(options);

        window.addEventListener('scroll', this.checkScroll, false);
        smoothscroll.polyfill();
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
            let cl = el.dataset[this.name + 'Class'] || this.class;
            let id =
                typeof el.dataset[this.name + 'Id'] === 'string'
                    ? el.dataset[this.name + 'Id']
                    : index;
            let top = el.getBoundingClientRect().top + this.instance.scroll.y;
            let bottom = top + el.offsetHeight;
            let offset =
                typeof el.dataset[this.name + 'Offset'] === 'string'
                    ? el.dataset[this.name + 'Offset'].split(',')
                    : this.offset;
            let repeat = el.dataset[this.name + 'Repeat'];
            let call = el.dataset[this.name + 'Call'];

            if (repeat == 'false') {
                repeat = false;
            } else if (repeat != undefined) {
                repeat = true;
            } else {
                repeat = this.repeat;
            }

            let relativeOffset = this.getRelativeOffset(offset);

            const mappedEl = {
                el: el,
                id: id,
                class: cl,
                top: top + relativeOffset[0],
                bottom: bottom - relativeOffset[1],
                offset: offset,
                progress: 0,
                repeat: repeat,
                inView: el.classList.contains(cl) ? true : false,
                call: call
            };

            this.els[id] = mappedEl;
        });
    }

    updateElements() {
        Object.entries(this.els).forEach(([i, el]) => {
            const top = el.el.getBoundingClientRect().top + this.instance.scroll.y;
            const bottom = top + el.el.offsetHeight;
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

        if (callback) {
            offset = offset.toFixed();
            let onScroll = function () {
                if (window.pageYOffset.toFixed() === offset) {
                    window.removeEventListener('scroll', onScroll);
                    callback();
                }
            };
            window.addEventListener('scroll', onScroll);
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
