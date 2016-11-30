import { $window , $document , $body} from '../utils/environment';
import Scroll from './Scroll';
import Scrollbar from 'smooth-scrollbar';
import Resize from 'throttled-resize';

import { isNumeric } from '../utils/is';

/**
 * Smooth scrolling using `smooth-scrollbar`.
 * Based on `Scroll` class, which allows animations of elements on the page
 * according to scroll position.
 *
 * @todo  Method to get the distance (as percentage) of an element in the viewport
 * @todo  Manage responsive (resize/update)
 */
export default class extends Scroll {
    constructor() {
        super();

        this.scrollbar;
    }

    /**
     * Initialize scrolling animations
     */
    init() {
        // Add class to the body to know if SmoothScroll is initialized (to manage overflow on containers)
        $body.addClass('has-smooth-scroll');

        this.scrollbar = Scrollbar.init(this.$el[0]);

        this.setScrollbarLimit();

        this.parallaxElements = [];

        this.addElements();

        this.renderAnimations(true);

        // On scroll
        this.scrollbar.addListener(() => this.renderAnimations(false));

        // Rebuild event
        $document.on('rebuild.SmoothScroll', () =>{
            this.scrollbar.scrollTo(0,0,1000);
            this.updateElements();
        });

        // Update event
        $document.on('update.SmoothScroll', () => this.updateElements());

        // Render event
        $document.on('render.SmoothScroll', () => this.renderAnimations(false));

        // Scrollto button event
        $('.js-scrollto').on('click.SmoothScroll', (event) => {
            event.preventDefault();
            this.scrollTo($(event.currentTarget));
        });

        // Setup done
        $document.trigger({
            type: 'isReady.SmoothScroll'
        });

        // Resize event
        var resize = new Resize();
        resize.on('resize:end', () => this.updateElements());
    }

    /**
     * Reset existing elements and find all animatable elements.
     * Called on page load and any subsequent updates.
     */
    addElements() {
        this.animatedElements = [];
        this.parallaxElements = [];

        var $elements = $(this.selector);
        var i = 0;
        var len = $elements.length;

        for (; i < len; i ++) {
            let $element = $elements.eq(i);
            let elementSpeed = isNumeric($element.data('speed')) ? parseInt($element.data('speed')) / 10 : false
            let elementPosition = $element.data('position');
            let elementTarget = $element.data('target');
            let elementHorizontal = $element.data('horizontal');

            let $target = (elementTarget) ? $(elementTarget) : $element;
            let elementOffset = $target.offset().top + this.scrollbar.scrollTop;
            let elementLimit = elementOffset + $target.outerHeight();

            // If elements stays visible after scrolling past it
            let elementPersist = (typeof $element.data('persist') === 'string')

            let elementInViewClass = $element.data('inview-class');
            if (typeof elementInViewClass === 'undefined') {
                elementInViewClass = 'is-show';
            }

            if (!elementTarget && $element.data('transform')) {
                elementOffset -= parseFloat($element.data('transform').y);
            }

            var newElement = {};

            // For parallax animated elements
            if (elementSpeed !== false) {
                let elementPosition = $element.data('position');
                let elementHorizontal = $element.data('horizontal');
                let elementMiddle = ((elementLimit - elementOffset) / 2) + elementOffset;

                newElement = {
                    $element: $element,
                    horizontal: elementHorizontal,
                    inViewClass: elementInViewClass,
                    limit: elementLimit,
                    middle: elementMiddle,
                    offset: elementOffset,
                    persist: elementPersist,
                    position: elementPosition,
                    speed: elementSpeed
                };
                this.parallaxElements.push(newElement);
            } else {
                newElement = {
                    $element: $element,
                    inViewClass: elementInViewClass,
                    limit: elementLimit,
                    offset: Math.round(elementOffset),
                    persist: elementPersist
                };

                this.animatedElements.push(newElement);
            }
        };
    }

    /**
     * Render the class/transform animations, and update the global scroll positionning.
     *
     * @param  {boolean} isFirstCall Determines if this is the first occurence of method being called
     * @return {void}
     */
    renderAnimations(isFirstCall) {
        var scrollbarTop = this.scrollbar.scrollTop;

        if (scrollbarTop > this.scroll.y) {
            if (this.scroll.direction !== 'down') {
                this.scroll.direction = 'down';
            }
        } else if (scrollbarTop < this.scroll.y) {
            if (this.scroll.direction !== 'up') {
                this.scroll.direction = 'up';
            }
        }

        if (this.scroll.y !== scrollbarTop) {
            this.scroll.y = scrollbarTop;
        }

        this.transformElements(isFirstCall);
        this.animateElements();

        window.App.scroll = this.scroll;
    }

    /**
     * Scroll to a desired target.
     *
     * @param  {object|int} target Either a jQuery element or a `y` position
     * @return {void}
     */
    scrollTo(target) {
        var targetOffset = 0;
        if (target instanceof jQuery && target.length > 0) {
            var targetData;

            if (target.data('target')) {
                targetData = target.data('target');
            } else {
                targetData = target.attr('href');
            }

            targetOffset = $(targetData).offset().top + this.scrollbar.scrollTop;
        } else {
            targetOffset = target;
        }

        this.scrollbar.scrollTo(0, targetOffset, 900);
    }

    /**
     * Set the scroll bar limit
     */
    setScrollbarLimit() {
        this.scrollbarLimit = this.scrollbar.limit.y + this.windowHeight;
    }

    /**
     * Apply CSS transform properties on an element.
     *
     * @param  {object}  $element Targetted jQuery element
     * @param  {int}     x        Translate value
     * @param  {int}     y        Translate value
     * @param  {int}     z        Translate value
     * @return {void}
     */
    transformElement($element, x, y, z) {
        // Defaults
        x = x || 0;
        y = y || 0;
        z = z || 0;

        // Translate and store the positionning as `data`
        $element.css({
            '-webkit-transform': 'translate3d('+ x +', '+ y +', '+ z +')',
            '-ms-transform': 'translate3d('+ x +', '+ y +', '+ z +')',
            'transform': 'translate3d('+ x +', '+ y +', '+ z +')'
        }).data('transform',{
            x : x,
            y : y,
            z : z
        });

        // Affect child elements with the same positionning
        var children = $element.find(this.selector);
        var i = 0;
        var len = children.length;
        for (; i < len; i++) {
            let $child = $(children[i]);
            if (!$child.data('transform')) {
                $child.data('transform', {
                    x : x,
                    y : y,
                    z : z
                })
            }
        };
    }

    /**
     * Loop through all parallax-able elements and apply transform method(s).
     *
     * @param  {boolean} isFirstCall Determines if this is the first occurence of method being called
     * @return {void}
     */
    transformElements(isFirstCall) {
        if (this.parallaxElements.length > 0) {
            var scrollbarBottom = this.scrollbar.scrollTop + this.windowHeight;
            var scrollbarMiddle = this.scrollbar.scrollTop + this.windowMiddle;

            var i = 0;
            var len = this.parallaxElements.length;
            var removeIndexes = [];

            for (; i < len; i++) {
                let curEl = this.parallaxElements[i];
                // Old
                let scrollBottom = scrollbarBottom;
                // New
                // let scrollBottom = (curEl.position === 'top') ? this.scrollbar.scrollTop : scrollbarBottom;

                let transformDistance = false;

                // Define if the element is in view
                // Old
                let inView = (scrollBottom >= curEl.offset && this.scroll.y <= curEl.limit);
                // New
                // let inView = (scrollBottom >= curEl.offset && this.scrollbar.scrollTop <= curEl.limit);

                // Add class if in view, remove if not
                if (inView) {
                    curEl.$element.addClass('is-inview');

                    if (curEl.persist === true) {
                        curEl.$element.addClass('is-visible');
                    }
                } else {
                    curEl.$element.removeClass('is-inview');
                }

                this.toggleClasses(curEl, i);

                if (isFirstCall && !inView && curEl.speed) {
                    // Different calculations if it is the first call and the item is not in the view
                    if (curEl.position !== 'top') {
                        transformDistance = (curEl.offset - this.windowMiddle - curEl.middle) * -curEl.speed;
                    }
                }

                // If element is in view
                if (inView && curEl.speed) {
                    switch (curEl.position) {
                        case 'top':
                            // Old
                            transformDistance = this.scrollbar.scrollTop * -curEl.speed;
                            // New
                            // transformDistance = (this.scrollbar.scrollTop - curEl.offset) * -curEl.speed;
                        break;

                        case 'bottom':
                            transformDistance = (this.scrollbarLimit - scrollBottom) * curEl.speed;
                        break;

                        default:
                            transformDistance = (scrollbarMiddle - curEl.middle) * -curEl.speed;
                        break;
                    }
                }

                // Transform horizontal OR vertical. Defaults to vertical
                if (isNumeric(transformDistance)) {
                    (curEl.horizontal) ?
                        this.transformElement(curEl.$element, transformDistance + 'px') :
                        this.transformElement(curEl.$element, 0, transformDistance + 'px');
                }
            }
        }
    }

    /**
     * Update elements and recalculate all the positions on the page
     */
    updateElements()
    {
        this.scrollbar.update();
        this.windowHeight = $window.height();
        this.windowMiddle = this.windowHeight / 2;
        this.setScrollbarLimit();
        this.addElements();
        this.transformElements(true);
    }

    /**
     * Destroy
     */
    destroy() {
        super.destroy();
        this.$el.off('.SmoothScroll');
        this.parallaxElements = undefined;
        this.scrollbar.destroy();
    }
}
