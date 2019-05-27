// ==========================================================================
// Locomotive Smooth Scroll
// ==========================================================================
/* jshint esnext: true */
import { $window, $document, $html, html } from '../../utils/environment';
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

        this.sectionsSelector = (options.sections) ? document.querySelectorAll(options.sections) : document.querySelectorAll(DEFAULTS.sections);
        this.isReversed = options.reversed || DEFAULTS.reversed;
        this.getDirection = options.getDirection || DEFAULTS.getDirection;
        this.getSpeed = options.getSpeed || DEFAULTS.getSpeed;
        this.inertia = options.inertia || DEFAULTS.inertia;
        this.scrollBarClassName = options.scrollBarClassName || DEFAULTS.scrollBarClassName;
        this.isScrollingClassName = options.isScrollingClassName || DEFAULTS.isScrollingClassName;

        this.parallaxElements = [];
        this.isDraggingScrollBar = false;

    }

    /**
     * Initialize scrolling animations
     */
    init() {
        // Add class to the document to know if SmoothScroll is initialized (to manage overflow on containers)
        $html.addClass('has-smooth-scroll');

        this.instance = new VirtualScroll({
            mouseMultiplier: (navigator.platform.indexOf('Win') > -1) ? 1 : 0.4,
            touchMultiplier: 4,
            firefoxMultiplier: 30
        });

        this.inertia = this.inertia * 0.1;

        this.instance.scroll = {
            x: 0,
            y: 0,
            direction: null
        }

        this.instance.delta = {
            x: 0,
            y: 0
        }

        if(this.getSpeed) {
            this.instance.scroll.speed = 0;
        }

        // @todo : to optimize
        this.instance.on((e) => {

            if(!this.isDraggingScrollBar) {
                this.instance.delta.y -= e.deltaY;
                this.isScrolling = true;
                html.classList.add(this.isScrollingClassName);

                if(this.instance.delta.y < 0) this.instance.delta.y = 0;
                if(this.instance.delta.y > this.instance.limit) this.instance.delta.y = this.instance.limit;
            }
        });

        this.setScrollLimit();
        this.initScrollBar();

        this.addSections();
        this.addElements();

        this.events();

        this.preloadImages();

        this.timestamp = Date.now();
        this.render();

    }

    /**
    * Listen/trigger events
    **/
    events() {
        // Rebuild event
        this.$container.on(EVENT.REBUILD, () => {
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

        this.$container.on(EVENT.SCROLLTO, (event) => this.scrollTo(event.options));

        // Setup done
        $document.triggerHandler({
            type: EVENT.ISREADY
        });

        // Resize event
        $window.on(EVENT.RESIZE, debounce(() => {
            this.update();
        },600));
    }

    initScrollBar() {
        this.scrollbarWrapper = document.createElement('span');
        this.scrollbar = document.createElement('span');
        this.scrollbarWrapper.classList.add(`${this.scrollBarClassName}_wrapper`);
        this.scrollbar.classList.add(`${this.scrollBarClassName}`);

        this.scrollbarWrapper.append(this.scrollbar);
        document.body.append(this.scrollbarWrapper);
        this.scrollbar.style.height = `${(window.innerHeight * window.innerHeight) / this.instance.limit}px`;
        this.scrollBarLimit = window.innerHeight - this.scrollbar.getBoundingClientRect().height;

        this.scrollbar.addEventListener('mousedown',(e) => this.getScrollBar(e));
        window.addEventListener('mouseup',(e) => this.releaseScrollBar(e));
        window.addEventListener('mousemove',(e) => this.moveScrollBar(e));

    }

    reinitScrollBar() {
        this.scrollbar.style.height = `${(window.innerHeight * window.innerHeight) / this.instance.limit}px`;
        this.scrollBarLimit = window.innerHeight - this.scrollbar.getBoundingClientRect().height;

    }

    destroyScrollBar() {
        this.scrollbar.removeEventListener('mousedown',(e) => this.getScrollBar(e));
        window.removeEventListener('mouseup',(e) => this.releaseScrollBar(e));
        window.removeEventListener('mousemove',(e) => this.moveScrollBar(e));
    }

    getScrollBar(e) {
        this.isScrolling = false;
        this.isDraggingScrollBar = true;
        html.classList.remove(this.isScrollingClassName);

    }

    releaseScrollBar(e) {
        this.isScrolling = true;
        this.isDraggingScrollBar = false;
        html.classList.add(this.isScrollingClassName);
    }

    moveScrollBar(e) {
        if(this.isDraggingScrollBar) {

            let y = (e.pageY * 100 / (window.innerHeight)) * this.instance.limit / 100;

            if(y > 0 && y < this.instance.limit) {
                this.instance.delta.y = y;
            }
        }
    }

    /**
     * Reset existing sections and find all sections.
     * Called on page load and any subsequent updates.
     */

    addSections() {
        this.sections = [];

        for (let i = 0 ; i < this.sectionsSelector.length; i ++) {
            let sectionElement = this.sectionsSelector[i];
            let offset = sectionElement.getBoundingClientRect().top - (window.innerHeight * 1.5) - this.getTranslate(sectionElement).y;
            let limit = offset + sectionElement.getBoundingClientRect().height + (window.innerHeight * 2);

            let inView = false;
            for (let i = this.sections.length - 1; i >= 0; i--) {
                if(this.instance.scroll.y > offset && this.instance.scroll.y < limit) {
                    inView = true;
                }
            }

            const section = {
                element: sectionElement,
                offset: offset,
                limit: limit,
                inView: inView
            }

            this.sections.push(section);

            if(i === 2) {
                let debug = {
                    offset: sectionElement.getBoundingClientRect().top - (window.innerHeight * 1.5),
                    scrollValue: parseInt(this.instance.scroll.y),
                    limit: limit,
                    final: offset
                }
            }
        }

    }

    /**
     * Reset existing elements and find all animatable elements.
     * Called on page load and any subsequent updates.
     */
    addElements() {
        this.animatedElements = [];
        this.parallaxElements = [];


        for (let y = 0 ; y < this.sections.length; y ++) {

            const elements = document.querySelectorAll(this.selector, this.sections[y].element);
            const len = elements.length;

            for (let i = 0 ; i < elements.length; i ++) {
                let element = elements[i];
                let elementSpeed = element.getAttribute('data-speed') ? element.getAttribute('data-speed') / 10 : false;
                let elementPosition = element.getAttribute('data-position');
                let elementTarget = element.getAttribute('data-target');
                let elementHorizontal = (typeof element.getAttribute('data-horizontal') === 'string');
                let elementSticky = (typeof element.getAttribute('data-sticky') === 'string');
                let elementStickyTarget = element.getAttribute('data-sticky-target');
                let target = (elementTarget && document.querySelectorAll(elementTarget).length) ? document.querySelectorAll(elementTarget) : element;
                let elementOffset;
                // reset transform to get the real offset

                if(!this.sections[y].inView) {
                    elementOffset = parseInt(target.getBoundingClientRect().top - this.getTranslate(this.sections[y].element).y)
                } else {
                    elementOffset = parseInt(target.getBoundingClientRect().top + this.instance.scroll.y);
                }

                let elementLimit = elementOffset + target.offsetHeight;

                let elementViewportOffset = null;
                if(typeof element.getAttribute('data-viewport-offset') === 'string') {
                   elementViewportOffset = $element.attr('data-viewport-offset').split(',');
                }

                //Manage callback
                let elementCallbackString = (typeof element.getAttribute('data-callback') === 'string') ? element.getAttribute('data-callback') : null;
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
                let elementRepeat = (typeof element.getAttribute('data-repeat') === 'string');

                let elementInViewClass = (typeof element.getAttribute('data-inview-class') === 'string') ? element.getAttribute('data-inview-class') : 'is-show';

                if (!elementTarget && element.getAttribute('data-transform')) {
                    elementOffset -= parseInt(JSON.parse(element.getAttribute('data-transform')).y);
                    elementLimit = elementOffset + target.offsetHeight;
                }

                if (elementSticky) {
                    if (typeof elementStickyTarget === 'undefined') {
                        elementLimit = Infinity;
                    } else {
                        elementLimit = $(elementStickyTarget)[0].getBoundingClientRect().top - element.offsetHeight + this.instance.scroll.y;
                    }
                }

                const newElement = {
                    $element: $(element),
                    inViewClass: elementInViewClass,
                    limit: elementLimit,
                    offset: Math.round(elementOffset),
                    repeat: elementRepeat,
                    callback: elementCallback,
                    viewportOffset: elementViewportOffset
                };

                // For parallax animated elements
                if (elementSpeed !== false) {
                    let elementPosition = element.getAttribute('data-position');
                    let elementHorizontal = (typeof element.getAttribute('data-horizontal') === 'string');
                    let elementMiddle = ((elementLimit - elementOffset) / 2) + elementOffset;
                    let elementDelay = element.getAttribute('data-delay');

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
            }
        }
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
        } else if(this.isDraggingScrollBar) {
            this.instance.scroll.y = this.lerp(this.instance.scroll.y,this.instance.delta.y, 0.2);
        }else {
            this.instance.scroll.y = this.lerp(this.instance.scroll.y,this.instance.delta.y, this.inertia * 0.5);
        }

        for (let i = this.sections.length - 1; i >= 0; i--) {
            if(this.instance.scroll.y > this.sections[i].offset && this.instance.scroll.y < this.sections[i].limit) {
                this.transform(this.sections[i].element,0,-this.instance.scroll.y);
                this.sections[i].element.style.visibility = 'visible';
            } else {
                this.sections[i].element.style.visibility = 'hidden';
            }
        }

        if(this.getDirection){
            if (this.instance.delta.y > this.instance.scroll.y) {
                if (this.instance.scroll.direction !== 'down') {
                    this.instance.scroll.direction = 'down';
                }
            } else if (this.instance.delta.y < this.instance.scroll.y) {
                if (this.instance.scroll.direction !== 'up') {
                    this.instance.scroll.direction = 'up';
                }
            }
        }

        if(this.getSpeed) {

            if (this.instance.delta.y !== this.instance.scroll.y) {
                this.instance.scroll.speed = (this.instance.delta.y - this.instance.scroll.y) / (Date.now() - this.timestamp);
                this.instance.delta.y = this.instance.delta.y;
            }else {
                this.instance.scroll.speed = 0;
            }
        }

        if(Math.abs(this.instance.scroll.y - this.instance.delta.y) < 1 ) {
            html.classList.remove(this.isScrollingClassName);
        }

        this.transformElements(isFirstCall);
        this.animateElements();

        this.callbacks.onScroll(this.instance)
        this.timestamp = Date.now();

        // scrollbar translation
        let scrollBarTranslation = (this.instance.scroll.y / this.instance.limit) * this.scrollBarLimit
        this.transform(this.scrollbar,0,scrollBarTranslation)
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
            html.classList.remove(this.isScrollingClassName);
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
    transform(element, x, y, delay) {
        // Defaults
        x = parseInt(x*10000)/10000 || 0;
        y = parseInt(y*10000)/10000 || 0;

        if(!delay) {
            // Translate and store the positionning as `data`
            const transform = `matrix(1,0,0,1,${x},${y})`

            element.style.webkitTransform = transform;
            element.style.MozTransform = transform;
            element.style.msTransform = transform;
            element.style.OTransform = transform;
            element.style.transform = transform;

            element.setAttribute('data-transform',`{"x": ${parseInt(x)},"y": ${parseInt(y)}}`)

        } else {

            let start = this.getTranslate(element);
            let lerpY = this.lerp(start.y, y, delay);
            let lerpX = this.lerp(start.x, x, delay);

            const transform = `matrix(1,0,0,1,${lerpX},${lerpY})`

            element.style.webkitTransform = transform;
            element.style.MozTransform = transform;
            element.style.msTransform = transform;
            element.style.OTransform = transform;
            element.style.transform = transform;

            element.setAttribute('data-transform',`{"x": ${parseInt(lerpX)},"y": ${parseInt(lerpY)}}`);
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
                        this.transform(curEl.$element[0], transformDistance,0, curEl.delay) :
                        this.transform(curEl.$element[0], 0, transformDistance, curEl.delay);
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

        this.windowHeight = $window.height();
        this.windowMiddle = this.windowHeight / 2;
        this.setScrollLimit();

        this.addSections();
        this.addElements();
        this.transformElements(true);
        this.reinitScrollBar();

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
        this.scrollbarWrapper.remove();

        cancelAnimationFrame(this.raf);

    }
}
