import Core from './Core';

export default class extends Core {
    constructor(options = {}) {
        super(options);

        window.addEventListener('scroll', this.checkScroll, false);
    }

    init() {
        this.instance.scroll.y = window.pageYOffset;

        this.addElements();
        this.detectElements();

        super.init();
    }

    checkScroll() {
        super.checkScroll();

        this.instance.scroll.y = window.pageYOffset;

        if (this.els.length) {
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
        this.els = [];
        const els = this.el.querySelectorAll('[data-'+this.name+']');

        els.forEach((el, i) => {
            let cl = el.dataset[this.name + 'Class'] || this.class;
            let top = el.getBoundingClientRect().top + this.instance.scroll.y;
            let bottom = top + el.offsetHeight;
                let offset = (typeof el.dataset[this.name + 'Offset'] === 'string') ? el.dataset[this.name + 'Offset'].split(',') : this.offset;
            let repeat = el.dataset[this.name + 'Repeat'];
            let call = el.dataset[this.name + 'Call'];

            if(repeat == 'false') {
                repeat = false;
            } else if (repeat != undefined) {
                repeat = true;
            } else {
                repeat = this.repeat;
            }

            let relativeOffset = [0,0];
            if(offset) {
                for (var i = 0; i < offset.length; i++) {
                    if(typeof offset[i] == 'string') {
                        if(offset[i].includes('%')) {
                            relativeOffset[i] = parseInt(offset[i].replace('%','') * this.windowHeight / 100);
                        } else {
                            relativeOffset[i] = parseInt(offset[i]);
                        }
                    } else {
                        relativeOffset[i] = offset[i];
                    }
                }
            }

            const mappedEl = {
                el: el,
                id: i,
                class: cl,
                top: top + relativeOffset[0],
                bottom: bottom - relativeOffset[1],
                offset: offset,
                repeat: repeat,
                inView: false,
                call: call
            }

            this.els.push(mappedEl);
        });
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
                offset = this.html.offsetHeight - window.innerHeight;
            } else {
                target = document.querySelectorAll(targetOption)[0];
            }

        } else if(!targetOption.target) {
            target = targetOption;
        }

        if (target) {
            offset = target.getBoundingClientRect().top + offset;
        }
        offset += this.instance.scroll.y;

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
