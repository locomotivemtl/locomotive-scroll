import { defaults } from './options';

export default class {
    constructor(options = {}) {
        Object.assign(this, defaults, options);

        this.namespace = 'locomotive';
        this.windowHeight = window.innerHeight;
        this.windowMiddle = this.windowHeight / 2;
        this.els = [];


        this.hasScrollTicking = false;
        this.checkScroll = this.checkScroll.bind(this);
        this.checkResize = this.checkResize.bind(this);

        this.instance = {
            scroll: {
                x: 0,
                y: 0,
                direction: null,
                speed: 0
            }
        }

        window.addEventListener('scroll', this.checkScroll, false);
        window.addEventListener('resize', this.checkResize, false);
    }

    checkScroll(){}
    checkResize(){}

    // addElements(){}

    detectElements() {

        const scrollTop = this.instance.scroll.y;
        const scrollBottom = scrollTop + this.windowHeight;

        this.els.forEach((el, i) => {
            if (!el.inView) {
                if ((scrollBottom >= el.top) && (scrollTop < el.bottom)) {
                    this.setInView(el, i);
                }
            }
            if(el.inView) {
                if ((scrollBottom < el.top) || (scrollTop > el.bottom)) {
                    this.setOutOfView(el, i);
                }
            }
        });

        this.hasScrollTicking = false;
    }

    setInView(el, i) {

        this.els[i].inView = true;
        el.el.classList.add(el.class);

        if (el.call) {
            this.callValue = el.call.split(',').map(item => item.trim());
            if (this.callValue.length == 1) this.callValue = this.callValue[0];

            const callEvent = new Event(this.namespace + 'call');
            window.dispatchEvent(callEvent);
        }

        if (!el.repeat && el.speed === undefined ){
            this.els.splice(i, 1);
        }
    }

    setOutOfView(el, i) {

        if(el.repeat) {
            this.els[i].inView = false;
            el.el.classList.remove(el.class);
        }

    }

    updateElements() {
        this.els.forEach((el, i) => {
            const top = el.el.getBoundingClientRect().top + this.instance.scroll.y;
            const bottom = top + el.el.offsetHeight;

            this.els[i].top = top + el.offset;
            this.els[i].bottom = bottom;
        });

        this.hasScrollTicking = false;
    }


    on(event, func) {
        window.addEventListener(this.namespace + event, () => {
            switch (event) {
                case 'call':
                    return func(this.callValue);
                default:
                    return func();
            }
        }, false);
    }

    destroy() {
        window.removeEventListener('scroll', this.checkScroll, false);
        window.removeEventListener('resize', this.checkResize, false);
    }

}
