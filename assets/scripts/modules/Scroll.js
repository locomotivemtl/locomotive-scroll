/* jshint esnext: true */
import { $window, $document, APP_NAME } from '../utils/environment';

import debounce from '../utils/debounce';
import { isNumeric } from '../utils/is';

const DATA_KEY  = `${APP_NAME}.Scrolling`;
const EVENT_KEY = `.${DATA_KEY}`;

const Event = {
    CLICK: `click${EVENT_KEY}`,
    ISREADY: `isReady${EVENT_KEY}`,
    REBUILD: `rebuild${EVENT_KEY}`,
    RENDER: `render${EVENT_KEY}`,
    RESIZE: `resize${EVENT_KEY}`,
    SCROLL: `scroll${EVENT_KEY}`,
    SCROLLTO: `scrollTo${EVENT_KEY}`,
    UPDATE: `update${EVENT_KEY}`
};

const Defaults = {
    $container: $document,
    onScroll: function(){},
    selector: '.js-animate',
    reversed: false
};

/**
 * Manage animation of elements on the page according to scroll position.
 *
 * @todo  Manage some options (normally from data attributes) with constructor options (ex.: set repeat for all)
 * @todo  Method to get the distance (as percentage) of an element in the viewport
 */
export default class {
    constructor(options) {
        this.$container = options.$container || Defaults.$container;
        this.selector = options.selector || Defaults.selector;

        this.callbacks = {
            onScroll: typeof options.onScroll === 'function' ? options.onScroll : Defaults.onScroll
        };

        this.scroll = {
            x: 0,
            y: 0,
            direction: ''
        }

        this.windowHeight = $window.height();
        this.windowMiddle = this.windowHeight / 2;

        this.animatedElements = [];

        this.requestId = undefined;
    }

    /**
     * Initialize scrolling animations
     */
    init() {
        this.addElements();

        this.renderAnimations();

        // On scroll
        this.$container.on(Event.SCROLL, debounce(() => {
            this.renderAnimations();
        }, 10));

        // Rebuild event
        this.$container.on(Event.REBUILD, () => {
            this.scrollTo({
                targetOffset: 0
            });
            this.updateElements();
        });

        // Update event
        this.$container.on(Event.UPDATE, (event, options) => this.updateElements(options));

        // Render event
        this.$container.on(Event.RENDER, () => this.renderAnimations());

        // Scrollto button event
        this.$container.on(Event.CLICK, '.js-scrollto', (event) => {
            event.preventDefault();
            this.scrollTo({
                sourceElem: $(event.currentTarget)
            });
        });
        this.$container.on(Event.SCROLLTO, (event) => this.scrollTo(event.options));

        // Setup done
        $document.triggerHandler({
            type: Event.ISREADY
        });

        // Resize event
        $window.on(Event.RESIZE, debounce(() => {
            this.updateElements()
        }, 20));
    }

    /**
     * Find all animatable elements.
     * Called on page load and any subsequent updates.
     */
    addElements() {
        this.animatedElements = [];

        const $elements = $(this.selector);
        const len = $elements.length;
        let i = 0;

        for (; i < len; i ++) {
            let $element = $elements.eq(i);
            let elementTarget = $element.data('target');
            let elementPosition = $element.data('position');
            let $target = (elementTarget) ? $(elementTarget) : $element;
            let elementOffset = $target.offset().top;
            let elementLimit = elementOffset + $target.outerHeight();
            let elementSticky = (typeof $element.data('sticky') === 'string');
            let elementStickyTarget = $element.data('sticky-target');

            // If elements loses its animation after scrolling past it
            let elementRepeat = (typeof $element.data('repeat') === 'string');

            let elementInViewClass = $element.data('inview-class');
            if (typeof elementInViewClass === 'undefined') {
                elementInViewClass = 'is-show';
            }

            if (elementSticky) {
                if (typeof elementStickyTarget === 'undefined') {
                    elementLimit = this.$container.height();
                } else {
                    elementLimit = $(elementStickyTarget).offset().top - $element.height();
                }

                // Reset offset
                $element.removeClass(elementInViewClass);
                $element.removeClass('-after');

                $element.css({
                    '-webkit-transform': 'translate3d(0, 0, 0)',
                    '-ms-transform': 'translate3d(0, 0, 0)',
                    'transform': 'translate3d(0, 0, 0)'
                });
            }

            // Don't add element if it already has its inview class and doesn't repeat
            if (elementRepeat || !$element.hasClass(elementInViewClass)) {
                this.animatedElements[i] = {
                    $element: $element,
                    offset: Math.round(elementOffset),
                    repeat: elementRepeat,
                    position: elementPosition,
                    limit: elementLimit,
                    inViewClass: elementInViewClass,
                    sticky: elementSticky
                }
            }
        };
    }

    /**
     * Loop through all animatable elements and apply animation method(s).
     */
    animateElements() {
        const len = this.animatedElements.length;
        const removeIndexes = [];
        let i = 0;
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

        this.callbacks.onScroll(this.scroll)

        this.animateElements();
    }

    /**
     * Toggle classes on an element if it's visible.
     *
     * @param  {object}      element Current element to test
     * @param  {int}         index   Index of the element within it's container
     * @return {boolean}             Wether the item must be removed from its container
     */
    toggleElementClasses(element, index) {
        let removeFromContainer = false;

        if (typeof element !== 'undefined') {
            // Find the bottom edge of the scroll container
            const scrollTop = this.scroll.y;
            const scrollBottom = scrollTop + this.windowHeight;

            // Define if the element is inView
            let inView = false;

            if (element.position === 'top') {
                inView = (scrollTop >= element.offset && scrollTop <= element.limit);
            } else if (element.sticky) {
                inView = (scrollTop >= element.offset && scrollTop <= element.limit);
            } else {
                inView = (scrollBottom >= element.offset && scrollTop <= element.limit);
            }

            if (element.sticky) {
                if (scrollTop > element.limit) {
                    element.$element.addClass('-after');
                } else {
                    element.$element.removeClass('-after');
                }

                if (scrollTop < element.offset) {
                    element.$element.removeClass(element.inViewClass);
                }
            }

            // Add class if inView, remove if not
            if (inView) {
                element.$element.addClass(element.inViewClass);

                if (!element.repeat && !element.sticky) {
                    removeFromContainer = true;
                }

                if (element.sticky) {
                    let y = this.scroll.y - element.offset;

                    element.$element.css({
                        '-webkit-transform': `translate3d(0, ${y}px, 0)`,
                        '-ms-transform': `translate3d(0, ${y}px, 0)`,
                        'transform': `translate3d(0, ${y}px, 0)`
                    });
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
     * @param  {object} options
     * @return {void}
     */
    scrollTo(options) {
        const $targetElem = options.targetElem;
        const $sourceElem = options.sourceElem;
        let targetOffset = isNumeric(options.targetOffset) ? parseInt(options.targetOffset) : 0;
        const speed = isNumeric(options.speed) ? parseInt(options.speed) : 800;
        const delay = isNumeric(options.delay) ? parseInt(options.delay) : 0;
        const toTop = options.toTop;
        const toBottom = options.toBottom;

        if (typeof $targetElem === 'undefined' && typeof $sourceElem === 'undefined' && typeof targetOffset === 'undefined') {
            console.warn('You must specify at least one parameter.')
            return false;
        }

        if (typeof $targetElem !== 'undefined' && $targetElem instanceof jQuery && $targetElem.length > 0) {
            targetOffset = $targetElem.offset().top + targetOffset;
        }

        if (typeof $sourceElem !== 'undefined' && $sourceElem instanceof jQuery && $sourceElem.length > 0) {
            let targetData = '';

            if ($sourceElem.data('target')) {
                targetData = $sourceElem.data('target');
            } else {
                targetData = $sourceElem.attr('href');
            }

            targetOffset = $(targetData).offset().top + targetOffset;
        }

        if (toTop === true) {
            targetOffset = 0;
        } else if (toBottom === true) {
            targetOffset = $document.height();
        }

        setTimeout(() => {
            $('html, body').animate({
                scrollTop: targetOffset
            }, speed);
        }, delay);
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
        $window.off(EVENT_KEY);
        this.$container.off(EVENT_KEY);
        window.cancelAnimationFrame(this.requestId);
        this.requestId = undefined;
        this.animatedElements = undefined;
    }
}
