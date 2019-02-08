// ==========================================================================
// Locomotive Smooth Scroll
// ==========================================================================
/* jshint esnext: true */
import { $window, $document, $html } from '../../utils/environment';
import Scroll, { DEFAULTS, EVENT } from '../Scroll';

import debounce from '../../utils/debounce';
import VirtualScroll from 'virtual-scroll';
import { isNumeric } from '../../utils/is';

/**
 * Smooth scrolling using `smooth-scrollbar`.
 * Based on `Scroll` class, which allows animations of elements on the page
 * according to scroll position.
 *
 */
export default class extends Scroll {
    constructor(options) {
        super(options);

        this.isReversed = options.reversed || DEFAULTS.reversed;
        this.getWay = options.getWay || DEFAULTS.getWay;
        this.getSpeed = options.getSpeed || DEFAULTS.getSpeed;
        this.inertia = options.inertia || DEFAULTS.inertia;

        this.parallaxElements = [];

        if(this.getSpeed) {
            this.scroll.speed = 0;
        }

    }

    /**
     * Initialize scrolling animations
     */
    init() {
        // Add class to the document to know if SmoothScroll is initialized (to manage overflow on containers)
        $html.addClass('has-smooth-scroll');

        this.instance = new VirtualScroll({
            mouseMultiplier: 0.5,
            touchMultiplier: 4,
            firefoxMultiplier: 30
        });

        this.inertia = this.inertia * 0.1;

        this.instance.scroll = {
            x: 0,
            y: 0
        }

        this.instance.delta = {
            x: 0,
            y: 0
        }

        // @todo : to optimize
        this.instance.on((e) => {

            this.instance.delta.y -= e.deltaY;
            this.isScrolling = true;

            if(this.instance.delta.y < 0) this.instance.delta.y = 0;
            if(this.instance.delta.y > this.instance.limit) this.instance.delta.y = this.instance.limit;

        });

        this.setScrollLimit();

        // @todo
        // this.setWheelDirection(this.isReversed);

        this.addElements();

        // Rebuild event
        this.$container.on(EVENT.REBUILD, () => {
            // @todo
            // this.scrollbar.scrollTo(0, 0, 1);
            this.update();
        });

        // Update event
        this.$container.on(EVENT.UPDATE, (event, options) => this.update(options));

        // Scrollto button event
        this.$container.on(EVENT.CLICK, '.js-scrollto', (event) => {
            event.preventDefault();

            let $target = $(event.currentTarget);
            let offset = $target.data('offset');

            this.scrollTo({
                sourceElem: $target,
                offsetElem: offset
            });
        });

        // @todo scrollto
        // this.$container.on(EVENT.SCROLLTO, (event) => this.scrollTo(event.options));

        // Setup done
        $document.triggerHandler({
            type: EVENT.ISREADY
        });

        // Resize event
        $window.on(EVENT.RESIZE,() => {
            this.update()
        });

        this.preloadImages();
        this.render();

    }

    /**
     * Reset existing elements and find all animatable elements.
     * Called on page load and any subsequent updates.
     */
    addElements() {
        this.animatedElements = [];
        this.parallaxElements = [];

        const $elements = $(this.selector);
        const len = $elements.length;
        let i = 0;

        for (; i < len; i ++) {
            let $element = $elements.eq(i);
            let elementSpeed = $element.attr('data-speed') ? $element.attr('data-speed') / 10 : false;
            let elementPosition = $element.attr('data-position');
            let elementTarget = $element.attr('data-target');
            let elementHorizontal = (typeof $element.attr('data-horizontal') === 'string');
            let elementSticky = (typeof $element.attr('data-sticky') === 'string');
            let elementStickyTarget = $element.attr('data-sticky-target');
            let $target = (elementTarget && $(elementTarget).length) ? $(elementTarget) : $element;
            let elementOffset = $target.offset().top + this.instance.scroll.y;
            let elementLimit = elementOffset + $target.outerHeight();


            let elementViewportOffset = null;
            if(typeof $element.attr('data-viewport-offset') === 'string') {
               elementViewportOffset = $element.attr('data-viewport-offset').split(',');
            }

            //Manage callback
            let elementCallbackString = (typeof $element.attr('data-callback') === 'string') ? $element.attr('data-callback') : null;
            let elementCallback = null;

            if(elementCallbackString != null){
                let event = elementCallbackString.substr(0, elementCallbackString.indexOf('('));
                let optionsString = elementCallbackString.substr(elementCallbackString.indexOf('('),elementCallbackString.length - event.length);

                optionsString = optionsString.replace('(','');
                optionsString = optionsString.replace(')','');

                let options = optionsString.split('|');

                let obj = {};

                for (var j = 0; j < options.length; j++) {

                    let option = options[j].split(':');
                    option[0] = option[0].replace(' ','');

                    let val;
                    //check if value is a boolean
                    if(option[1] === "true") {
                        val = true;
                    }
                    else if(option[1] === "false") {
                        val = false;
                    }
                    //check if value is numeric
                    else if(/^\d+$/.test(option[1])) {
                        val = parseInt(option[1]);
                    }
                    //check if value is a String
                    else {
                        val = option[1];
                    }
                    obj[option[0]] = val;
                }

                elementCallback = {event:event, options:obj};
            }

            // If elements stays visible after scrolling past it
            let elementRepeat = (typeof $element.attr('data-repeat') === 'string');

            let elementInViewClass = $element.attr('data-inview-class');
            if (typeof elementInViewClass === 'undefined') {
                elementInViewClass = 'is-show';
            }

            if (!elementTarget && $element.attr('data-transform')) {
                elementOffset -= parseFloat($element.attr('data-transform').y);
                elementLimit = elementOffset + $target.outerHeight();
            }

            if (elementSticky) {
                if (typeof elementStickyTarget === 'undefined') {
                    elementLimit = Infinity;
                } else {
                    elementLimit = $(elementStickyTarget).offset().top - $element.height() + this.instance.scroll.y;
                }
            }

            const newElement = {
                $element: $element,
                inViewClass: elementInViewClass,
                limit: elementLimit,
                offset: Math.round(elementOffset),
                repeat: elementRepeat,
                callback: elementCallback,
                viewportOffset: elementViewportOffset
            };

            // For parallax animated elements
            if (elementSpeed !== false) {
                let elementPosition = $element.attr('data-position');
                let elementHorizontal = (typeof $element.attr('data-horizontal') === 'string');
                let elementMiddle = ((elementLimit - elementOffset) / 2) + elementOffset;
                let elementDelay = $element.attr('data-delay');

                newElement.horizontal = elementHorizontal;
                newElement.middle = elementMiddle;
                newElement.offset = elementOffset;
                newElement.position = elementPosition;
                newElement.speed = elementSpeed
                newElement.delay = elementDelay;

                this.parallaxElements.push(newElement);

            } else {
                newElement.sticky = elementSticky;

                this.animatedElements.push(newElement);

                if (elementSticky) {
                    //launch the toggle function to set the position of the sticky element
                    this.toggleElement(newElement);
                }
            }
        };
    }

    /**
     * Render the class/transform animations, and update the global scroll positionning.
     *
     * @param  {boolean} isFirstCall Determines if this is the first occurence of method being called
     * @param  {object}  status      Optional status object received when method is
     *                               called by smooth-scrollbar instance listener.
     * @return {void}
     */
    render(isFirstCall, e) {
        this.raf = requestAnimationFrame(()=>this.render());

        if(this.isScrolling) {
            this.instance.scroll.y = this.lerp(this.instance.scroll.y,this.instance.delta.y, this.inertia);
        } else {
            this.instance.scroll.y = this.lerp(this.instance.scroll.y,this.instance.delta.y, this.inertia * 0.5);

        }

        const scrollbarTop = this.instance.scroll.y;

        // need to move the container
        this.$container.css({
            '-webkit-transform': `translate3d(0, ${-this.instance.scroll.y}px, 0)`,
            '-ms-transform': `translate3d(0, ${-this.instance.scroll.y}px, 0)`,
            'transform': `translate3d(0, ${-this.instance.scroll.y}px, 0)`
        });

        if(this.getWay){
            if (this.instance.scroll.y > this.scroll.y) {
                if (this.scroll.direction !== 'down') {
                    this.scroll.direction = 'down';
                }
            } else if (this.instance.scroll.y < this.scroll.y) {
                if (this.scroll.direction !== 'up') {
                    this.scroll.direction = 'up';
                }
            }
        }

        if(this.getSpeed) {
            if (this.scroll.y !== this.instance.scroll.y) {
                this.scroll.speed = this.scrollbar.movement.y;
                this.scroll.y = this.instance.scroll.y;
            }else {
                this.scroll.speed = 0;
            }
        }

        if (this.scroll.y !== this.instance.scroll.y) {
            this.scroll.y = this.instance.scroll.y;
        }

        this.transformElements(isFirstCall);
        this.animateElements();
    }

    lerp (start, end, amt){
        return (1-amt)*start+amt*end
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
        const offsetElem = options.offsetElem;
        let targetOffset = isNumeric(options.targetOffset) ? parseInt(options.targetOffset) : 0;
        const delay = isNumeric(options.delay) ? parseInt(options.delay) : 0;
        const speed = isNumeric(options.speed) ? parseInt(options.speed) : 900;
        const toTop = options.toTop;
        const toBottom = options.toBottom;
        let offset = 0;

        if (typeof $targetElem === 'undefined' && typeof $sourceElem === 'undefined' && typeof targetOffset === 'undefined') {
            console.warn('You must specify at least one parameter.')
            return false;
        }

        if (typeof $targetElem !== 'undefined' && $targetElem instanceof jQuery && $targetElem.length > 0) {
            targetOffset = $targetElem.offset().top + this.instance.scroll.y + targetOffset;
        }

        if (typeof $sourceElem !== 'undefined' && $sourceElem instanceof jQuery && $sourceElem.length > 0) {
            let targetData = '';

            if ($sourceElem.attr('data-target')) {
                targetData = $sourceElem.attr('data-target');
            } else {
                targetData = $sourceElem.attr('href');
            }

            targetOffset = $(targetData).offset().top + this.instance.scroll.y + targetOffset;
        }

        if (typeof offsetElem !== 'undefined') {
            offset = $(offsetElem).outerHeight();
            targetOffset = targetOffset - offset;
        }

        if (toTop === true) {
            targetOffset = 0;
        } else if (toBottom === true) {
            targetOffset = this.instance.limit;
        }

        setTimeout(() => {
            this.isScrolling = false;
            this.instance.delta.y = targetOffset;
        }, delay);
    }

    /**
     * Set the scroll bar limit
     */
    setScrollLimit() {
        this.instance.limit = this.$container[0].offsetHeight - this.windowHeight;
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
    transformElement($element, x, y, z, delay) {
        // Defaults
        x = x || 0;
        y = y || 0;
        z = z || 0;

        if(!delay) {
            // Translate and store the positionning as `data`
            $element.css({
                '-webkit-transform': `translate3d(${x}px, ${y}px, ${z}px)`,
                '-ms-transform': `translate3d(${x}px, ${y}px, ${z}px)`,
                'transform': `translate3d(${x}px, ${y}px, ${z}px)`
            }).data('transform',{
                x : x,
                y : y,
                z : z
            });
        } else {

            let start = this.getTranslate($element[0]);
            let lerpY = this.lerp(start.y, y, delay);
            let lerpX = this.lerp(start.x, x, delay);

            $element.css({
                '-webkit-transform': `translate3d(${lerpX}px, ${lerpY}px, ${z}px)`,
                '-ms-transform': `translate3d(${lerpX}px, ${lerpY}px, ${z}px)`,
                'transform': `translate3d(${lerpX}px, ${lerpY}px, ${z}px)`
            }).data('transform',{
                x : lerpX,
                y : lerpY,
                z : z
            });
        }

    }

    getTranslate(el){
        const translate = {}
        if(!window.getComputedStyle) return;

        const style = getComputedStyle(el);
        const transform = style.transform || style.webkitTransform || style.mozTransform;

        let mat = transform.match(/^matrix3d\((.+)\)$/);
        if(mat) return parseFloat(mat[1].split(', ')[13]);
        mat = transform.match(/^matrix\((.+)\)$/);
        translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
        translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0;

        return translate;
    }

    /**
     * Loop through all parallax-able elements and apply transform method(s).
     *
     * @param  {boolean} isFirstCall Determines if this is the first occurence of method being called
     * @return {void}
     */
    transformElements(isFirstCall) {
        if (this.parallaxElements.length > 0) {
            const scrollBottom = this.instance.scroll.y + this.windowHeight;
            const scrollMiddle = this.instance.scroll.y + this.windowMiddle;

            let i = 0;
            const len = this.parallaxElements.length;
            const removeIndexes = [];

            for (; i < len; i++) {
                let curEl = this.parallaxElements[i];

                let transformDistance = false;

                // Define if the element is in view
                let inView = ((scrollBottom + this.windowHeight) >= curEl.offset && this.instance.scroll.y <= curEl.limit);

                this.toggleElement(curEl, i);

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
                            transformDistance = this.instance.scroll.y * -curEl.speed;
                        break;

                        case 'bottom':
                            transformDistance = (this.instance.limit - scrollBottom + this.windowHeight) * curEl.speed;
                        break;

                        default:
                            transformDistance = (scrollMiddle - curEl.middle) * -curEl.speed;
                        break;
                    }
                }

                // Transform horizontal OR vertical. Defaults to vertical
                if (isNumeric(transformDistance)) {
                    (curEl.horizontal) ?
                        this.transformElement(curEl.$element, transformDistance,0,0, curEl.delay) :
                        this.transformElement(curEl.$element, 0, transformDistance,0, curEl.delay);
                }
            }
        }
    }

    /**
     * Update elements and recalculate all the positions on the page
     *
     * @param {object} options
     */
    update(options) {
        options = options || {};

        // @todo
        // this.scrollbar.update();
        this.windowHeight = $window.height();
        this.windowMiddle = this.windowHeight / 2;
        this.setScrollLimit();

        // @todo
        // this.setWheelDirection(this.isReversed);
        this.addElements();
        this.transformElements(true);

    }

    /**
     * Set smooth-scrollbar scrolling direction for wheel event
     * @param {Boolean} isReversed
     */
    setWheelDirection(isReversed){
        this.scrollbar.reverseWheel(isReversed);
    }

    preloadImages() {
        const images = Array.from(document.querySelectorAll('img'))

        images.forEach((image) => {
            const img = document.createElement('img');

            img.addEventListener('load', () => {
                images.splice(images.indexOf(image), 1)
                images.length === 0 && this.update()
            });

            img.src = image.getAttribute('src')
        })
    }

    /**
     * Destroy
     */
    destroy() {
        super.destroy();
        $html.removeClass('has-smooth-scroll');
        this.parallaxElements = [];
        this.instance.destroy();

        cancelAnimationFrame(this.raf);

    }
}
