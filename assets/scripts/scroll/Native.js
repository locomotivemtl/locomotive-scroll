import { defaults } from './options';
import Core from './Core';

export default class extends Core {
    constructor(options = {}) {

        super(options);
        window.addEventListener('scroll', this.checkScroll, false);

    }

    init() {
        this.instance.scroll.y = window.scrollY;

        this.addElements();
        this.detectElements();

        super.init();
    }

    checkScroll() {
        if (this.els.length) {
            this.instance.scroll.y = window.scrollY;

            if(!this.hasScrollTicking) {
                requestAnimationFrame(() => {
                    this.detectElements();
                });
                this.hasScrollTicking = true;
            }
        }
    }

    checkResize() {
        if (this.els.length) {
            this.windowHeight = window.innerHeight;

            if(!this.hasScrollTicking) {
                requestAnimationFrame(() => {
                    this.updateElements();
                });
                this.hasScrollTicking = true;
            }
        }
    }

    addElements() {
        const els = this.el.querySelectorAll('[data-'+this.name+']');

        els.forEach((el, i) => {
            let cl = el.dataset[this.name + 'Class'] || this.class;
            let top = el.getBoundingClientRect().top + this.instance.scroll.y;
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

    }

    /**
     * Scroll to a desired target.
     *
     * @param  {object} options
     * @return {void}
     */
    scrollTo(params) {
        const options = params.options;

        let targetElem = options.targetElem;
        let sourceElem = options.sourceElem;
        const offsetElem = options.offsetElem;
        let targetOffset = options.targetOffset ? options.targetOffset : 0 ;
        const speed = options.speed ? options.speed : 800 ;
        const delay = options.delay;
        let toTop = options.toTop;
        let toBottom = options.toBottom;
        let offset = 0;


        // If sourceElem is given, find and store the targetElem it's related to
        if (sourceElem) {
            let targetData = '';

            // Get the selector (given with `data-target` or `href` attributes on sourceElem)
            let sourceElemTarget = sourceElem.getAttribute('data-target')
            targetData = sourceElemTarget ? sourceElemTarget : sourceElem.getAttribute('href')

            // Store the target for later
            targetElem = document.querySelectorAll(targetData)[0]
        }

        if (targetElem) {
            targetOffset = targetElem.getBoundingClientRect().top + targetOffset;
        }

        if (offsetElem) {
            let offset = offsetElem.offsetHeight;
            targetOffset = targetOffset - offset;
        }

        if (toTop === true) {
            targetElem =  document.querySelectorAll('html')[0];
        } else if (toBottom === true) {
            targetOffset = document.offsetHeight;

            setTimeout(() => {
                document.querySelectorAll('html')[0].scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest"});
            }, delay);

            return;
        }

        setTimeout(() => {
            targetElem.scrollIntoView({ behavior: 'smooth'});
        }, delay);

    }


    destroy() {
        super.destroy();

        window.removeEventListener('scroll', this.checkScroll, false);
    }

}
