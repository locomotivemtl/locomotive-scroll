import virtualScroll from 'virtual-scroll';
import scroll from './scroll';

const html = document.documentElement;

export default class extends scroll {
    constructor(options = {}) {
        super(options);

        this.inertia = this.inertia * 0.1;
        this.isScrolling = false;
        this.isDraggingScrollBar = false;
        this.isTicking = false;
        this.hasScrollTicking = false;
    }

    init() {
        html.classList.add(this.smoothClass);

        this.instance = new virtualScroll({
            mouseMultiplier: (navigator.platform.indexOf('Win') > -1) ? 1 : 0.4,
            touchMultiplier: 4,
            firefoxMultiplier: 30
        });

        this.instance.scroll = {
            x: 0,
            y: 0,
            direction: null
        }

        this.instance.delta = {
            x: 0,
            y: 0
        }

        this.setScrollLimit();

        this.instance.on((e) => {
            if (!this.isTicking && !this.isDraggingScrollBar) {
                requestAnimationFrame(() => {
                    if (!this.isScrolling) this.startScrolling();

                    this.updateDelta(e);
                });
                this.isTicking = true;
            }
            this.isTicking = false;
        });
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
            this.transform(this.el, 0, -this.instance.scroll.y);

            if (this.getDirection) {
                this.getDirection();
            }

            if (this.getSpeed) {
                this.getSpeed();
                this.timestamp = Date.now();
            }

            this.hasScrollTicking = false;
        }
    }

    updateDelta(e) {
        this.instance.delta.y -= e.deltaY;
        if (this.instance.delta.y < 0) this.instance.delta.y = 0;
        if (this.instance.delta.y > this.instance.limit) this.instance.delta.y = this.instance.limit;
    }

    updateScroll() {
        if (this.isScrolling) {
            this.instance.scroll.y = this.lerp(this.instance.scroll.y, this.instance.delta.y, this.inertia);
        } else if (this.isDraggingScrollBar) {
            this.instance.scroll.y = this.lerp(this.instance.scroll.y, this.instance.delta.y, (this.inertia * 2));
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

    // render(isFirstCall, e) {
    //     for (let i = this.sections.length - 1; i >= 0; i--) {
    //         if(this.instance.scroll.y > this.sections[i].offset && this.instance.scroll.y < this.sections[i].limit) {
    //             this.transform(this.sections[i].element,0,-this.instance.scroll.y);
    //             this.sections[i].element.style.visibility = 'visible';
    //         } else {
    //             this.sections[i].element.style.visibility = 'hidden';
    //         }
    //     }

    //     this.transformElements(isFirstCall);
    //     this.animateElements();

    //     // scrollbar translation
    //     let scrollBarTranslation = (this.instance.scroll.y / this.instance.limit) * this.scrollBarLimit;
    //     this.transform(this.scrollbar,0,scrollBarTranslation);
    // }

    lerp(start, end, amt){
        return (1 - amt) * start + amt * end
    }

    transform(element, x, y, delay) {
        const transform = `matrix(1,0,0,1,${x},${y})`

        element.style.webkitTransform = transform;
        element.style.msTransform = transform;
        element.style.transform = transform;
    }

    destroy() {
        super.destroy();
    }
}
