/* jshint esnext: true */
import { $window , $document , $body} from '../utils/environment';
import Resize from 'throttled-resize';

/**
 * Manage animation of elements on the page according to scroll position.
 *
 * @todo  Manage some options (normally from data attributes) with constructor options (ex.: set repeat for all)
 * @todo  Method to get the distance (as percentage) of an element in the viewport
 */
export default class {
    constructor() {

        this.scroll = {
            x: 0,
            y: 0,
            direction: ''
        }

        window.App.scroll = this.scroll;

        this.windowHeight = $window.height();
        this.windowMiddle = this.windowHeight / 2;

        this.selector = '.js-anim';

        // Set the scrollable container for the smoothscroll module
        this.$el = $('#js-scroll');

        this.animatedElements = [];

        this.requestId = undefined;

        this.init();
    }

    /**
     * Initialize scrolling animations
     */
    init(){
        this.addElements();

        var resize = new Resize();
        resize.on('resize:end', () => this.updateElements());

        $document.on('scrollTo.Scroll',(options)=>this.scrollTo(options.value));
        // Update event
        $document.on('update.Scroll', (event, options) => this.updateElements(options));
        // Render event
        $document.on('render.Scroll', () => this.renderAnimations(false));

        // Rebuild event
        $document.on('rebuild.Scroll', () =>{
            this.scrollTo(0);
            this.updateElements();
        });
    }

    /**
     * Find all animatable elements.
     * Called on page load and any subsequent updates.
     */
    addElements() {
        this.animatedElements = [];

        var $elements = $(this.selector);
        var i = 0;
        var len = $elements.length;

        for (; i < len; i ++) {
            let $element = $elements.eq(i);
            let elementTarget = $element.data('target');
            let $target = (elementTarget) ? $(elementTarget) : $element;
            let elementOffset = $target.offset().top;
            let elementLimit = elementOffset + $element.outerHeight();

            // If elements loses its animation after scrolling past it
            let elementRepeat = (typeof $element.data('repeat') === 'string');

            let elementInViewClass = $element.data('inview-class');
            if (typeof elementInViewClass === 'undefined') {
                elementInViewClass = 'is-show';
            }

            // Don't add element if it already has its in view class and doesn't repeat
            if (elementRepeat || !$element.hasClass(elementInViewClass)) {
                this.animatedElements[i] = {
                    $element: $element,
                    offset: Math.round(elementOffset),
                    repeat: elementRepeat,
                    limit: elementLimit,
                    inViewClass: elementInViewClass
                }
            }
        };

        this.requestId = window.requestAnimationFrame(() => this.renderAnimations());
    }

    /**
     * Loop through all animatable elements and apply animation method(s).
     */
    animateElements() {
        var len = this.animatedElements.length;
        var i = 0;
        var removeIndexes = [];
        for (; i < len; i++) {
            let element = this.animatedElements[i];

            // If the element's visibility must not be manipulated any further, remove it from the list
            if (this.toggleElementClasses(element, i)) {
                removeIndexes.push(i);
            }
        }

        // Remove animated elements after looping through elements
        i = removeIndexes.length;
        while (i--) {
            this.animatedElements.splice(removeIndexes[i], 1);
        }
    }

    /**
     * Render the class animations, and update the global scroll positionning.
     */
    renderAnimations() {
        if (window.pageYOffset > this.scroll.y) {
            if (this.scroll.direction !== 'down') {
                this.scroll.direction = 'down';
            }
        } else if (window.pageYOffset < this.scroll.y) {
            if (this.scroll.direction !== 'up') {
                this.scroll.direction = 'up';
            }
        }

        if (this.scroll.y !== window.pageYOffset) {
            this.scroll.y = window.pageYOffset;
        }
        if (this.scroll.x !== window.pageXOffset) {
            this.scroll.x = window.pageXOffset;
        }

        this.animateElements();

        this.requestId = window.requestAnimationFrame(() => this.renderAnimations());
    }

    /**
     * Toggle classes on an element if it's visible.
     *
     * @param  {object}      element Current element to test
     * @param  {int}         index   Index of the element within it's container
     * @return {boolean}             Wether the item must be removed from its container
     */
    toggleElementClasses(element, index) {
        var removeFromContainer = false;

        if (typeof element !== 'undefined') {
            // Find the bottom edge of the scroll container
            var scrollBottom = this.scroll.y + this.windowHeight;

            // Define if the element is inView
            var inView = (scrollBottom >= element.offset && this.scroll.y <= element.limit);

            // Add class if inView, remove if not
            if (inView) {
                element.$element.addClass(element.inViewClass);

                if (!element.repeat){
                    removeFromContainer = true;
                }
            } else if (element.repeat) {
                element.$element.removeClass(element.inViewClass);
            }
        }

        return removeFromContainer;
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

        $body.animate({
            scrollTop:targetOffset
        }, 'slow');
    }

    /**
     * Update elements and recalculate all the positions on the page
     */
    updateElements() {
        this.addElements();
    }

    /**
     * Destroy
     */
    destroy() {
        this.$el.off('.Scroll');
        window.cancelAnimationFrame(this.requestId);
        this.requestId = undefined;
        this.animatedElements = undefined;
    }
}
