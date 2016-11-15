/* jshint esnext: true */
import { $document, $window, $html, $body } from '../utils/environment';

/**
 * Abstract scroll
 */


export default class {
    constructor(options) {

        this.scroll = {
            y:0,
            x:0,
            way:''
        }

        window.App.scroll = {
            y:0,
            x:0,
            way:''
        }

        this.windowHeight = $window.height();
        this.windowMiddle = this.windowHeight / 2;

        this.selector = '.js-anim';

        //Set the scrollable container for the smoothscroll module
        this.$el = $('.js-scroll');



        this.animatedElements = [];

        this.init();

    }

    // Init
    // ==========================================================================
    init(){

        // Create elements object
        this.addElements();
    }

    // Request Animation Frame
    // ==========================================================================
    raf(first){

        this.checkElementsAnimation();

        if(window.pageYOffset > this.scroll.y){
            if(this.scroll.way != 'down'){
                this.scroll.way = 'down';
            }
        }else if(window.pageYOffset < this.scroll.y){
            if(this.scroll.way != 'up'){
                this.scroll.way = 'up';
            }
        }

        if(this.scroll.y != window.pageYOffset){
            this.scroll.y = window.pageYOffset;
        }
        if(this.scroll.x != window.pageXOffset){
            this.scroll.x = window.pageXOffset;
        }
        if(this.scroll.way != window.pageYOffset){

        }

        window.App.scroll = this.scroll;

        requestAnimationFrame(()=>this.raf());
    }

    // Add animated elements
    // ==========================================================================
    addElements() {
        $(this.selector).each((i, el) => {
            let $element = $(el);
            let elementOffset = $element.offset().top;
            let elementLimit = elementOffset + $element.outerHeight();
            let elementPersist = $element.data('persist');

            if(elementPersist != undefined){
                elementPersist = true;
            }else{
                elementPersist = false;
            }

            this.animatedElements[i] = {
                $element: $element,
                offset: Math.round(elementOffset),
                persist: elementPersist,
                limit: elementLimit
            }
        });

        requestAnimationFrame(()=>this.raf(false));

    }

    // Check elements animation
    // ==========================================================================
    checkElementsAnimation() {

        for(let i in this.animatedElements) {
            this.toggleClasses(this.animatedElements[i], i, this.animatedElements);
        }
    }

    // Toggles classes if is in view
    // ==========================================================================
    toggleClasses($el, i, arrayElements){
        let scrollBottom = this.scroll.y + this.windowHeight;
        let $element = $el.$element;
        let elementOffset = $el.offset;
        let elementLimit = $el.limit;
        let elementPersist = $el.persist;
        let elementPosition = $el.position;


        // Define if the element is inview
        let inview = (scrollBottom >= elementOffset && this.scroll.y <= elementLimit);

        // Add class if inview, remove if not
        if (inview) {
            $element.addClass('is-show');
            if(elementPersist){
                arrayElements.splice(i,1);
            }
        } else if (!elementPersist) {
            $element.removeClass('is-show');
        }
    }


    // Destroy
    // ==========================================================================
    destroy() {
        this.$el.off('.SmoothScroll');
        this.animatedElements = [];
    }


}
