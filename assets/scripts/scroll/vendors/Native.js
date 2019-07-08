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
    scrollTo(targetOption, offsetOption) {
        let target;
        let offset = offsetOption ? parseInt(offsetOption) : 0;

        if(typeof targetOption === 'string') {

            if(targetOption === 'top') {
                target = this.html;
            } else if(targetOption === 'bottom') {
                offset = document.offsetHeight;
                this.html.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest"});

                return;

            } else {
                target = document.querySelectorAll(targetOption)[0];
            }

        } else if(!targetOption.target) {
            target = targetOption;
        }

        if (target) {
            offset = target.getBoundingClientRect().top + offset;
        }

        target.scrollIntoView({ behavior: 'smooth'});
    }


    destroy() {
        super.destroy();

        window.removeEventListener('scroll', this.checkScroll, false);
    }

}
