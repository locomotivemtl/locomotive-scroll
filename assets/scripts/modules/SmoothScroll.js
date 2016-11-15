// ==========================================================================
// Locomotive smooth scroll
// ==========================================================================
import Scroll from './Scroll';
import Scrollbar from 'smooth-scrollbar';
import { $window , $document , $body} from '../utils/environment';

export default class extends Scroll {
    constructor (options) {
        super(options);

    }

    // Set
    // ==========================================================================
    set() {

        this.scrollbarLimit = this.scrollbar.limit.y + this.windowHeight;
    }

    // Init
    // ==========================================================================
    init() {
        this.scrollbar;

        //Add class to the body to know if smooth-scroll is init or not (to manage overflows on containers)
        $body.addClass('has-smooth-scroll');

        this.parallaxElements = [];

        this.addElements();

        this.scrollbar = Scrollbar.init(this.$el[0]);
        this.set();

        this.raf('first');
        // On scroll
        this.scrollbar.addListener(() => this.raf(false));

        // Rebuild event
        $document.on('SmoothScroll.rebuild', () => this.updateElements());

        // Scrollto button event
        $('.js-scrollto').on('click.SmoothScroll', (event) => this.scrollTo(event));

        // Setup done
        $document.trigger({
            type: 'SmoothScroll.isReady'
        });

    }

    // Add elements
    // ==========================================================================
    addElements() {

        $(this.selector).each((i, el) => {
            let $element = $(el);
            let elementTarget = $element.data('target');
            let $target = (elementTarget) ? $(elementTarget) : $element;
            let elementOffset = $target.offset().top;
            let elementLimit = elementOffset + $target.outerHeight();

            let elementPersist = $element.data('persist');

            if(elementPersist != undefined){
                elementPersist = true;
            }else{
                elementPersist = false;
            }

            let elementSpeed = $element.data('speed');

            //For parallax animated elements
            if(elementSpeed != undefined){
                elementSpeed = elementSpeed / 10;
                let elementPosition = $element.data('position');
                let elementHorizontal = $element.data('horizontal');
                let elementMiddle = ((elementLimit - elementOffset) / 2) + elementOffset;
                this.parallaxElements[i] = {
                    $element: $element,
                    offset: elementOffset,
                    limit: elementLimit,
                    middle: elementMiddle,
                    speed: elementSpeed,
                    position: elementPosition,
                    horizontal: elementHorizontal,
                    persist: elementPersist
                }
            }else{
                this.animatedElements[i] = {
                    $element: $element,
                    offset: Math.round(elementOffset),
                    persist: elementPersist,
                    limit: elementLimit
                }
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

    // Override RAF AbstractScroll by the transform value
    // ==========================================================================
    raf(option) {

        //toggle class in-view
        this.checkElements(option);

        this.checkElementsAnimation();

        let scrollbarTop = this.scrollbar.scrollTop;

        if(scrollbarTop > this.scroll.y){
            if(this.scroll.way != 'down'){
                this.scroll.way = 'down';
            }
        }else if(scrollbarTop < this.scroll.y){
            if(this.scroll.way != 'up'){
                this.scroll.way = 'up';
            }
        }

        if(this.scroll.y != scrollbarTop){
            this.scroll.y = scrollbarTop;
        }

        window.App.scroll = this.scroll;


    }

    // Check elements
    // ==========================================================================
    checkElements(option){
        let scrollbarTop = this.scrollbar.scrollTop;
        let scrollbarLimit = this.scrollbarLimit;
        let scrollbarBottom = scrollbarTop + this.windowHeight;
        let scrollbarMiddle = scrollbarTop + this.windowMiddle;

        let first = option;

        for(let i in this.parallaxElements) {
            let transformDistance;
            let scrollBottom = scrollbarBottom;
            let $element = this.parallaxElements[i].$element;
            let elementOffset = this.parallaxElements[i].offset;
            let elementLimit = this.parallaxElements[i].limit;
            let elementMiddle = this.parallaxElements[i].middle;
            let elementSpeed = this.parallaxElements[i].speed;
            let elementPosition = this.parallaxElements[i].position;
            let elementHorizontal = this.parallaxElements[i].horizontal;
            let elementPersist = this.parallaxElements[i].persist;

            let inview = (scrollBottom >= elementOffset && this.scroll.y <= elementLimit);

            if (elementPosition === 'top') {
                scrollBottom = scrollbarTop;
                inview = (scrollBottom + this.windowHeight >= elementOffset && this.scroll.y <= elementLimit);
            }

            this.toggleClasses(this.parallaxElements[i], i, this.parallaxElements);


            if (first && !inview && elementSpeed) {
                // Different calculation if first call and the item is not in view
                if (elementPosition !== 'top') {
                    // transformDistance = ((elementOffset - this.windowMiddle)  - elementMiddle) * -elementSpeed;
                }
            }

            // If element is in view
            if (inview && elementSpeed && !first) {
                switch (elementPosition) {
                    case 'top':
                        transformDistance = scrollbarTop * -elementSpeed;
                        break;

                    case 'bottom':
                        transformDistance = (scrollbarLimit - scrollBottom) * elementSpeed;
                        break;

                    default:
                        transformDistance = (scrollbarMiddle - elementMiddle) * -elementSpeed;
                        break;
                }
            }else if(option === 'first') {
                if (elementSpeed) {
                    var transformDistance;

                    if (elementPosition !== 'top') {
                        transformDistance = ((elementOffset - this.windowMiddle)  - elementMiddle) * -elementSpeed;
                    }

                    if (elementHorizontal !== undefined) {
                        this.transform($element, transformDistance , 0 , 0);
                    } else {
                        this.transform($element, transformDistance , 0 , 0);
                    }
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
        this.animatedElements = [];
        this.parallaxElements = [];
    }
}
