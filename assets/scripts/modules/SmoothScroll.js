// ==========================================================================
// Locomotive smooth scroll
// ==========================================================================
import AbstractModule from './AbstractModule';
import Scrollbar from 'smooth-scrollbar';
import { $document } from '../utils/environment';

export default class extends AbstractModule {
    constructor (options) {
        super(options);

        this.scrollbar;
        this.persist = false;
        this.selector = '.js-parallax';

        this.build();
    }

    // Set
    // ==========================================================================
    set() {
        this.windowHeight = this.$window.height();
        this.windowMiddle = this.windowHeight / 2;
        this.scrollbarLimit = this.scrollbar.limit.y + this.windowHeight;
        // Create elements object
        this.addElements();
        // First load
        this.checkElements(true);
    }

    // Build
    // ==========================================================================
    build() {
        setTimeout(() => {
            this.scrollbar = Scrollbar.init(this.$el[0]);
            this.elements = {};
            this.set();

            // On scroll
            this.scrollbar.addListener(() => this.checkElements());
            // Rebuild event
            $document.on('SmoothScroll.rebuild', () => this.updateElements());
            // Scrollto button event
            $('.js-scrollto').on('click.SmoothScroll', (event) => this.scrollTo(event));

            // Setup done
            $document.trigger({
                type: 'SmoothScroll.isReady'
            });
        }, 100);
    }

    // Add elements
    // ==========================================================================
    addElements() {
        $(this.selector).each((i, el) => {
            let $element = $(el);
            let elementSpeed = $element.data('speed') / 10;
            let elementPosition = $element.data('position');
            let elementTarget = $element.data('target');
            let elementHorizontal = $element.data('horizontal');
            let $target = (elementTarget) ? $(elementTarget) : $element;
            let elementOffset = $target.offset().top + this.scrollbar.scrollTop;

            // if (!elementTarget && $element.data('transform')) {
            //     let transform = $element.data('transform');
            //     elementOffset -= parseFloat(transform.y);
            // }

            let elementLimit = elementOffset + $target.outerHeight();
            let elementMiddle = ((elementLimit - elementOffset) / 2) + elementOffset;
            let elementPersist = $element.data('persist');

            this.elements[i] = {
                $element: $element,
                offset: elementOffset,
                limit: elementLimit,
                middle: elementMiddle,
                speed: elementSpeed,
                position: elementPosition,
                horizontal: elementHorizontal,
                persist: elementPersist
            }
        });
    }

    // Update elements
    // ==========================================================================
    updateElements() {
        this.scrollbar.update();
        this.set();
        $document.trigger('SmoothScroll.update');
    }

    // Check elements
    // ==========================================================================
    checkElements(first) {
        let scrollbarTop = this.scrollbar.scrollTop;
        let scrollbarLimit = this.scrollbarLimit;
        let scrollbarBottom = scrollbarTop + this.windowHeight;
        let scrollbarMiddle = scrollbarTop + this.windowMiddle;

        for(let i in this.elements) {
            let transformDistance;
            let scrollBottom = scrollbarBottom;
            let $element = this.elements[i].$element;
            let elementOffset = this.elements[i].offset;
            let elementLimit = this.elements[i].limit;
            let elementMiddle = this.elements[i].middle;
            let elementSpeed = this.elements[i].speed;
            let elementPosition = this.elements[i].position;
            let elementHorizontal = this.elements[i].horizontal;
            let elementPersist = this.elements[i].persist;

            if (elementPosition === 'top') {
                scrollBottom = scrollbarTop;
            }

            // Define if the element is inview
            let inview = (scrollBottom >= elementOffset && scrollbarTop <= elementLimit);

            // Add class if inview, remove if not
            if (inview) {
                $element.addClass('is-inview');
            } else if (!persist) {
                $element.removeClass('is-inview');
            }

            if (first && !inview && elementSpeed) {
                // Different calculation if first call and the item is not in view
                if (elementPosition !== 'top') {
                    // transformDistance = ((elementOffset - this.windowMiddle)  - elementMiddle) * -elementSpeed;
                }
            }

            // If element is in view
            if (inview && elementSpeed) {
                switch (elementPosition) {
                    case 'top':
                        transformDistance = (scrollbarTop - elementOffset) * -elementSpeed;
                    break;

                    case 'bottom':
                        transformDistance = (scrollbarLimit - scrollBottom) * elementSpeed;
                    break;

                    default:
                        transformDistance = (scrollbarMiddle - elementMiddle) * -elementSpeed;
                    break;
                }
            }

            if (transformDistance) {
                // Transform horizontal OR vertical, default vertical
                (elementHorizontal !== undefined) ? this.transform($element, transformDistance+'px') : this.transform($element, 0, transformDistance+'px');
            }
        }
    }

    // Transform element
    // ==========================================================================
    /**
     * [transform description]
     * @param  {[type]} $element Jquery element.
     * @param  {mixed}  x        Translate value
     * @param  {mixed}  y        Translate value
     * @param  {mixed}  z        Translate value
     * @return {void}
     */
    transform($element, x, y, z) {
        // Defaults
        x = x || 0;
        y = y || 0;
        z = z || 0;

        // Translate
        $element.css({
            '-webkit-transform': 'translate3d('+ x +', '+ y +', '+ z +')',
            '-ms-transform': 'translate3d('+ x +', '+ y +', '+ z +')',
            'transform': 'translate3d('+ x +', '+ y +', '+ z +')'
        });
        // $element.css({
        //     '-webkit-transform': 'translate3d('+ x +', '+ y +', '+ z +')',
        //     '-ms-transform': 'translate3d('+ x +', '+ y +', '+ z +')',
        //     'transform': 'translate3d('+ x +', '+ y +', '+ z +')'
        // }).data('transform',{
        //     x : x,
        //     y : y,
        //     z : z
        // });
        // Remember

        // $element.find(this.selector).each((i, e) => {
        //     let $this = $(e);
        //     if (!$this.data('transform')) {
        //         $this.data('transform', {
        //             x : x,
        //             y : y,
        //             z : z
        //         })
        //     }
        // })
    }

    // Scroll to
    // ==========================================================================
    scrollTo(event) {
        if(!$.isNumeric(event)){
            event.preventDefault();

            let $target = $($(event.currentTarget).attr('href'));
            var targetOffset = $target.offset().top + this.scrollbar.scrollTop;
        }
        else{
            targetOffset = event;
        }

        this.scrollbar.scrollTo(0, targetOffset, 900);
    }

    // Destroy
    // ==========================================================================
    destroy() {
        this.$el.off('.SmoothScroll');
        this.elements = {};
    }
}
