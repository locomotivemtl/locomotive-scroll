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

    init() {

        this.initEvents();
    }

    checkScroll(){}
    checkResize(){}

    initEvents() {

        // scroll to elements
        this.scrollToElements = this.el.querySelectorAll(`[data-${this.name}-to]`);

        this.prepareScrollTo = this.prepareScrollTo.bind(this);
        this.scrollToElements.forEach((el) => {
            el.addEventListener('click', this.prepareScrollTo, false);
        });

        // scroll to event
        this.scrollTo = this.scrollTo.bind(this);
        window.addEventListener('scrollto', this.scrollTo, false);

        // example to trigger a scroll to
        // const scrollToEvent = new CustomEvent('scrollto',{
        //     detail: {
        //         options: {
        //             targetElem: document.querySelectorAll('#introduction')[0]
        //         }
        //     }
        // });

        // window.dispatchEvent(scrollToEvent)

    }

    prepareScrollTo(event) {
        event.preventDefault();

        this.scrollTo({
            detail: {
                options: {
                    sourceElem: event.currentTarget,
                    offsetElem: event.currentTarget.getAttribute('data-offset')
                }
            }
        });
    }

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

    setInView(current, i) {

        this.els[i].inView = true;
        current.el.classList.add(current.class);

        if (current.call) {
            this.callValue = current.call.split(',').map(item => item.trim());
            if (this.callValue.length == 1) this.callValue = this.callValue[0];

            const callEvent = new Event(this.namespace + 'call');
            window.dispatchEvent(callEvent);
        }

        if (!current.repeat && current.speed === false && !current.sticky ){
            this.els.splice(i, 1);
        }
    }

    setOutOfView(current, i) {

        if(current.repeat || current.speed !== undefined) {
            this.els[i].inView = false;
            current.el.classList.remove(current.class);
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

        this.scrollToElements.forEach((el) => {
            el.removeEventListener('click', this.prepareScrollTo, false);
        });
    }

}
