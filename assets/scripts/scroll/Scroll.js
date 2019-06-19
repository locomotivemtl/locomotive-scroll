import { defaults } from './options';

export default class {
    constructor(options = {}) {
        Object.assign(this, defaults, options);

        this.namespace = 'modular';
        this.windowHeight = window.innerHeight;
        this.els = [];
        this.scrollPosition = 0;
        this.frame = false;

        this.checkScroll = this.checkScroll.bind(this);
        this.checkResize = this.checkResize.bind(this);

        window.addEventListener('scroll', this.checkScroll, false);
        window.addEventListener('resize', this.checkResize, false);
    }

    init() {
        this.scrollPosition = window.scrollY;

        const els = this.el.querySelectorAll('[data-'+this.name+']');

        els.forEach((el, i) => {
            let cl = el.dataset[this.name + 'Class'] || this.class;
            let top = el.getBoundingClientRect().top + this.scrollPosition;
            let bottom = top + el.offsetHeight;
            let offset = parseInt(el.dataset[this.name + 'Offset']) || parseInt(this.offset);
            let repeat = el.dataset[this.name + 'Repeat'];
            let call = el.dataset[this.name + 'Call'];

            if(repeat == 'false') {
                repeat = false;
            } else if (repeat != undefined) {
                repeat = true;
            } else {
                repeat = this.repeat;
            }

            this.els[i] = {
                el: el,
                class: cl,
                top: top + offset,
                bottom: bottom,
                offset: offset,
                repeat: repeat,
                inView: false,
                call: call
            }
        });

        this.detectElements();
    }

    update() {
        this.updateElements();
    }

    checkScroll() {
        if (this.els.length) {
            this.scrollPosition = window.scrollY;

            if(!this.frame) {
                requestAnimationFrame(() => {
                    this.detectElements();
                });
                this.frame = true;
            }
        }
    }

    checkResize() {
        if (this.els.length) {
            this.windowHeight = window.innerHeight;

            if(!this.frame) {
                requestAnimationFrame(() => {
                    this.updateElements();
                });
                this.frame = true;
            }
        }
    }

    detectElements() {
        const scrollTop = this.scrollPosition;
        const scrollBottom = scrollTop + this.windowHeight;

        this.els.forEach((el, i) => {
            if (!el.inView) {
                if ((scrollBottom > el.top) && (scrollTop < el.bottom)) {
                    this.setInView(el, i);
                }
            } else {
                if ((scrollBottom < el.top) || (scrollTop > el.bottom)) {
                    this.setOutOfView(el, i);
                }
            }
        });

        this.frame = false;
    }

    setInView(el, i) {
        if (el.repeat) {
            this.els[i].inView = true;
        } else {
            this.els.splice(i, 1);
        }

        el.el.classList.add(el.class);

        if (el.call) {
            this.callValue = el.call.split(',').map(item => item.trim());
            if (this.callValue.length == 1) this.callValue = this.callValue[0];

            const callEvent = new Event(this.namespace + 'call');
            window.dispatchEvent(callEvent);
        }
    }

    setOutOfView(el, i) {
        this.els[i].inView = false;
        el.el.classList.remove(el.class);
    }

    updateElements() {
        this.els.forEach((el, i) => {
            const top = el.el.getBoundingClientRect().top + this.scrollPosition;
            const bottom = top + el.el.offsetHeight;

            this.els[i].top = top + el.offset;
            this.els[i].bottom = bottom;
        });

        this.frame = false;
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
