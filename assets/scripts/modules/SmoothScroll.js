// ==========================================================================
// Locomotive smooth scroll
// ==========================================================================
import AbstractModule from './AbstractModule';
import Scrollbar from 'smooth-scrollbar';

export default class extends AbstractModule {
    constructor (options) {
        super(options);

        this.scrollbar = Scrollbar.init(this.$el[0]);
        this.windowHeight = this.$window.height();
        this.windowMiddle = this.windowHeight / 2;
        this.scrollbarLimit = this.scrollbar.limit.y + this.windowHeight;
        this.elements = {};
        // Create elements object
        this.addElements();
        // First load
        this.checkElements('first');
        // On scroll
        this.scrollbar.addListener(() => this.checkElements());

        // Scrollto buttons event
        $('.js-scrollto').on('click', (event) => this.scrollTo(event));
    }

    // Add elements
    // ==========================================================================
    addElements() {
        $('.js-parallax').each((i, el) => {
            let $element = $(el);
            let elementSpeed = $element.data('speed') / 10;
            let elementPosition = $element.data('position');
            let elementTarget = $element.data('target');
            let elementHorizontal = $element.data('horizontal');
            let $target = (elementTarget) ? $(elementTarget) : $element;
            let elementOffset = $target.offset().top;
            let elementLimit = elementOffset + $target.outerHeight();
            let elementMiddle = ((elementLimit - elementOffset) / 2) + elementOffset;

            this.elements[i] = {
                $element: $element,
                offset: elementOffset,
                limit: elementLimit,
                middle: elementMiddle,
                speed: elementSpeed,
                position: elementPosition,
                horizontal: elementHorizontal
            }
        });
    }

    // Check elements
    // ==========================================================================
    checkElements(option) {
        let scrollbarTop = this.scrollbar.scrollTop;
        let scrollbarBottom = scrollbarTop + this.windowHeight;
        let scrollbarMiddle = scrollbarTop + this.windowMiddle;

        for(let i in this.elements) {
            let scrollBottom = scrollbarBottom;
            let $element = this.elements[i].$element;
            let elementOffset = this.elements[i].offset;
            let elementLimit = this.elements[i].limit;
            let elementMiddle = this.elements[i].middle;
            let elementSpeed = this.elements[i].speed;
            let elementPosition = this.elements[i].position;
            let elementHorizontal = this.elements[i].horizontal;

            if (elementPosition === 'top') {
                scrollBottom = scrollbarTop;
            }
            // If element is in view
            if ((scrollBottom >= elementOffset && scrollbarTop <= elementLimit)) {
                $element.addClass('is-inview');

                if (elementSpeed) {
                    let transformDistance;

                    if (elementPosition === 'top') {
                        transformDistance = (scrollbarTop - elementOffset) * -elementSpeed;
                    } else if (elementPosition === 'bottom') {
                        transformDistance = (this.scrollbarLimit - scrollBottom) * elementSpeed;
                    } else {
                        transformDistance = (scrollbarMiddle - elementMiddle) * -elementSpeed;
                    }

                    if (elementHorizontal !== undefined) {
                        this.transformX($element, transformDistance);
                    } else {
                        this.transformY($element, transformDistance);
                    }
                }
            // If first load
            } else if(option === 'first') {
                if (elementSpeed) {
                    let transformDistance;

                    if (elementPosition !== 'top') {
                        transformDistance = ((elementOffset - this.windowMiddle)  - elementMiddle) * -elementSpeed;
                    }

                    if (elementHorizontal !== undefined) {
                        this.transformX($element, transformDistance);
                    } else {
                        this.transformY($element, transformDistance);
                    }
                }
            // Else element not in view
            } else {
                $element.removeClass('is-inview');
            }
        }
    }

    // Transform element vertical
    // ==========================================================================
    transformY($element, transformDistance) {
        $element.css({
            '-webkit-transform': 'translate3d(0, '+ transformDistance +'px, 0)',
            '-ms-transform': 'translate3d(0, '+ transformDistance +'px, 0)',
            'transform': 'translate3d(0, '+ transformDistance +'px, 0)'
        });
    }

    // Transform element horizontal
    // ==========================================================================
    transformX($element, transformDistance) {
        $element.css({
            '-webkit-transform': 'translate3d('+ transformDistance +'px, 0, 0)',
            '-ms-transform': 'translate3d('+ transformDistance +'px, 0, 0)',
            'transform': 'translate3d('+ transformDistance +'px, 0, 0)'
        });
    }

    // Scroll to
    // ==========================================================================
    scrollTo(event) {
        event.preventDefault();

        let $target = $($(event.currentTarget).attr('href'));
        let targetOffset = $target.offset().top + this.scrollbar.scrollTop;

        this.scrollbar.scrollTo(0, targetOffset, 900);
    }

    // Destroy
    // ==========================================================================
    destroy() {

    }
}
