(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _ScrollManager = _interopRequireDefault(require("./scroll/vendors/ScrollManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ==========================================================================
// App
// ==========================================================================

/* jshint esnext: true */
(function () {
  // Init Locomotive Scroll
  var smoothScroll = new _ScrollManager["default"]({
    container: $('#js-scroll'),
    sections: '.js-section',
    selector: '.js-animate',
    smooth: true,
    smoothMobile: true,
    mobileContainer: $(document),
    getDirection: true,
    getSpeed: true,
    inertia: 1,
    scrollBarClassName: 'o-scrollbar',
    isScrollingClassName: 'is-scrolling',
    onScroll: function onScroll(e) {// console.log(e.scroll.y);
    }
  });
})();

},{"./scroll/vendors/ScrollManager":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DEFAULTS = exports.EVENT = exports.EVENT_KEY = void 0;

var _Scroll2 = _interopRequireWildcard(require("./vendors/Scroll"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * UNCOMMENT ONLY THE LINES YOU NEED
 */
// import { $window, $document } from '../../utils/environment';
// import debounce from '../../utils/debounce';
// import { isNumeric } from '../../utils/is';
var EVENT_KEY = _Scroll2.EVENT_KEY;
exports.EVENT_KEY = EVENT_KEY;
var EVENT = Object.assign(_Scroll2.EVENT, {// TEST: `test.${EVENT_KEY}`
});
exports.EVENT = EVENT;
var DEFAULTS = Object.assign(_Scroll2.DEFAULTS, {});
exports.DEFAULTS = DEFAULTS;

var _default =
/*#__PURE__*/
function (_Scroll) {
  _inherits(_default, _Scroll);

  function _default(options) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, options));
  }

  return _default;
}(_Scroll2["default"]);

exports["default"] = _default;

},{"./vendors/Scroll":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SmoothScroll2 = _interopRequireDefault(require("./vendors/SmoothScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * UNCOMMENT ONLY THE LINES YOU NEED
 */
// import { $window, $document, $html } from '../utils/environment';
// import Scroll, { DEFAULTS, EVENT } from './Scroll';
// import debounce from '../utils/debounce';
// import Scrollbar from 'smooth-scrollbar';
// import { isNumeric } from '../utils/is';
var _default =
/*#__PURE__*/
function (_SmoothScroll) {
  _inherits(_default, _SmoothScroll);

  function _default(options) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, options));
  }

  return _default;
}(_SmoothScroll2["default"]);

exports["default"] = _default;

},{"./vendors/SmoothScroll":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DEFAULTS = exports.EVENT = exports.EVENT_KEY = void 0;

var _environment = require("../../utils/environment");

var _debounce = _interopRequireDefault(require("../../utils/debounce"));

var _is = require("../../utils/is");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EVENT_KEY = "LocomotiveScroll";
exports.EVENT_KEY = EVENT_KEY;
var EVENT = {
  CLICK: "click.".concat(EVENT_KEY),
  ISREADY: "isReady.".concat(EVENT_KEY),
  REBUILD: "rebuild.".concat(EVENT_KEY),
  RENDER: "render.".concat(EVENT_KEY),
  RESIZE: "resize.".concat(EVENT_KEY),
  SCROLL: "scroll.".concat(EVENT_KEY),
  SCROLLTO: "scrollTo.".concat(EVENT_KEY),
  UPDATE: "update.".concat(EVENT_KEY)
};
exports.EVENT = EVENT;
var DEFAULTS = {
  container: _environment.$document,
  sections: '.js-section',
  mobileContainer: _environment.$document,
  onScroll: function onScroll() {},
  selector: '.js-animate',
  smooth: false,
  smoothMobile: false,
  reversed: false,
  getDirection: false,
  getSpeed: false,
  scrollBarClassName: 'o-scrollbar',
  isScrollingClassName: 'is-scrolling'
};
/**
 * Manage animation of elements on the page according to scroll position.
 *
 * @todo  Manage some options (normally from data attributes) with constructor options (ex.: set repeat for all)
 * @todo  Method to get the distance (as percentage) of an element in the viewport
 */

exports.DEFAULTS = DEFAULTS;

var _default =
/*#__PURE__*/
function () {
  function _default(options) {
    _classCallCheck(this, _default);

    this.$container = options.container ? options.container : DEFAULTS.container;
    this.selector = options.selector ? options.selector : DEFAULTS.selector;
    this.callbacks = {
      onScroll: typeof options.onScroll === 'function' ? options.onScroll : DEFAULTS.onScroll
    };
    this.instance = {
      scroll: {
        x: 0,
        y: 0,
        direction: ''
      }
    };
    this.windowHeight = _environment.$window.height();
    this.windowMiddle = this.windowHeight / 2;
    this.animatedElements = [];
    this.requestId = undefined;
  }
  /**
   * Initialize scrolling animations
   */


  _createClass(_default, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.addElements();
      this.render(); // On scroll

      this.$container.on(EVENT.SCROLL, function () {
        _this.render();
      }); // Rebuild event

      this.$container.on(EVENT.REBUILD, function () {
        _this.scrollTo({
          targetOffset: 0
        });

        _this.update();
      }); // Update event

      this.$container.on(EVENT.UPDATE, function (event, options) {
        return _this.update(options);
      }); // Render event

      this.$container.on(EVENT.RENDER, function () {
        return _this.render();
      }); // Scrollto button event

      this.$container.on(EVENT.CLICK, '.js-scrollto', function (event) {
        event.preventDefault();
        var $target = $(event.currentTarget);
        var offset = $target.data('offset');

        _this.scrollTo({
          sourceElem: $target,
          offsetElem: offset
        });
      });
      this.$container.on(EVENT.SCROLLTO, function (event) {
        return _this.scrollTo(event.options);
      }); // Setup done

      _environment.$document.triggerHandler({
        type: EVENT.ISREADY
      }); // Resize event


      _environment.$window.on(EVENT.RESIZE, (0, _debounce["default"])(function () {
        _this.update();
      }, 20));
    }
    /**
     * Find all animatable elements.
     * Called on page load and any subsequent updates.
     */

  }, {
    key: "addElements",
    value: function addElements() {
      this.animatedElements = [];
      var $elements = $(this.selector);
      var len = $elements.length;
      var i = 0;

      for (; i < len; i++) {
        var $element = $elements.eq(i);
        var elementTarget = $element.attr('data-target');
        var elementPosition = $element.attr('data-position');
        var $target = elementTarget && $(elementTarget).length ? $(elementTarget) : $element;
        var elementOffset = $target.offset().top;
        var elementLimit = elementOffset + $target.outerHeight();
        var elementSticky = typeof $element.attr('data-sticky') === 'string';
        var elementStickyTarget = $element.attr('data-sticky-target');
        var elementViewportOffset = null;

        if (typeof $element.attr('data-viewport-offset') === 'string') {
          elementViewportOffset = $element.attr('data-viewport-offset').split(',');
        } //Manage callback


        var elementCallbackString = typeof $element.attr('data-callback') === 'string' ? $element.attr('data-callback') : null;
        var elementCallback = null;

        if (elementCallbackString != null) {
          var event = elementCallbackString.substr(0, elementCallbackString.indexOf('('));
          var optionsString = elementCallbackString.substr(elementCallbackString.indexOf('('), elementCallbackString.length - event.length);
          optionsString = optionsString.replace('(', '');
          optionsString = optionsString.replace(')', '');
          var options = optionsString.split('|');
          var obj = {};

          for (var j = 0; j < options.length; j++) {
            var option = options[j].split(':');
            option[0] = option[0].replace(' ', '');
            var val = void 0; //check if value is a boolean

            if (option[1] === "true") {
              val = true;
            } else if (option[1] === "false") {
              val = false;
            } //check if value is numeric
            else if (/^\d+$/.test(option[1])) {
                val = parseInt(option[1]);
              } //check if value is a String
              else {
                  val = option[1];
                }

            obj[option[0]] = val;
          }

          elementCallback = {
            event: event,
            options: obj
          };
        } // If elements loses its animation after scrolling past it


        var elementRepeat = typeof $element.attr('data-repeat') === 'string';
        var elementInViewClass = $element.attr('data-inview-class');

        if (typeof elementInViewClass === 'undefined') {
          elementInViewClass = 'is-show';
        }

        if (elementSticky) {
          if (typeof elementStickyTarget === 'undefined') {
            elementLimit = this.$container.height();
          } else {
            elementLimit = $(elementStickyTarget).offset().top - $element.height();
          } // Reset offset


          $element.removeClass(elementInViewClass);
          $element.removeClass('is-unstuck');
          $element.css({
            '-webkit-transform': 'translate3d(0, 0, 0)',
            '-ms-transform': 'translate3d(0, 0, 0)',
            'transform': 'translate3d(0, 0, 0)'
          });
        } // Don't add element if it already has its inview class and doesn't repeat


        if (elementRepeat || !$element.hasClass(elementInViewClass)) {
          this.animatedElements[i] = {
            $element: $element,
            offset: Math.round(elementOffset),
            repeat: elementRepeat,
            position: elementPosition,
            limit: elementLimit,
            inViewClass: elementInViewClass,
            sticky: elementSticky,
            callback: elementCallback,
            viewportOffset: elementViewportOffset
          };
        }
      }

      ;
    }
    /**
     * Loop through all animatable elements and apply animation method(s).
     */

  }, {
    key: "animateElements",
    value: function animateElements() {
      var len = this.animatedElements.length;
      var removeIndexes = [];
      var i = 0;

      for (; i < len; i++) {
        var element = this.animatedElements[i]; // If the element's visibility must not be manipulated any further, remove it from the list

        if (this.toggleElement(element, i)) {
          removeIndexes.push(i);
        }
      } // Remove animated elements after looping through elements


      i = removeIndexes.length;

      while (i--) {
        this.animatedElements.splice(removeIndexes[i], 1);
      }
    }
    /**
     * Render the class animations, and update the global scroll positionning.
     */

  }, {
    key: "render",
    value: function render() {
      // if (window.pageYOffset > this.instance.scroll.y) {
      //     if (this.instance.scroll.direction !== 'down') {
      //         this.instance.scroll.direction = 'down';
      //     }
      // } else if (window.pageYOffset < this.instance.scroll.y) {
      //     if (this.instance.scroll.direction !== 'up') {
      //         this.instance.scroll.direction = 'up';
      //     }
      // }
      if (this.instance.scroll.y !== window.pageYOffset) {
        this.instance.scroll.y = window.pageYOffset;
      }

      if (this.instance.scroll.x !== window.pageXOffset) {
        this.instance.scroll.x = window.pageXOffset;
      }

      this.callbacks.onScroll(this.scroll);
      this.animateElements();
    }
    /**
     * Toggle classes on an element if it's visible.
     *
     * @param  {object}      element Current element to test
     * @param  {int}         index   Index of the element within it's container
     * @return {boolean}             Wether the item must be removed from its container
     */

  }, {
    key: "toggleElement",
    value: function toggleElement(element, index) {
      var removeFromContainer = false;

      if (typeof element !== 'undefined') {
        // Find the bottom edge of the scroll container
        var scrollTop = this.instance.scroll.y;
        var scrollBottom = scrollTop + this.windowHeight; // Define if the element is inView

        var inView = false;

        if (element.position === 'top') {
          inView = scrollTop >= element.offset && scrollTop <= element.limit;
        } else if (element.position === 'below') {
          inView = scrollTop > element.limit;
        } else if (element.sticky) {
          inView = scrollTop >= element.offset && scrollTop <= element.limit;
        } else if (element.viewportOffset != undefined) {
          if (element.viewportOffset.length > 1) {
            var scrollViewportOffsetTop = scrollTop + this.windowHeight * element.viewportOffset[1];
            var scrollViewportOffsetBottom = scrollBottom - this.windowHeight * element.viewportOffset[0];
            inView = scrollViewportOffsetBottom > element.offset && scrollViewportOffsetTop < element.limit;
          } else {
            var scrollViewportOffset = scrollBottom - this.windowHeight * element.viewportOffset[0];
            inView = scrollViewportOffset > element.offset && scrollViewportOffset < element.limit;
          }
        } else {
          inView = scrollBottom >= element.offset && scrollTop <= element.limit;
        }

        if (element.sticky) {
          if (scrollTop > element.limit) {
            element.$element.addClass('is-unstuck');
          } else {
            element.$element.removeClass('is-unstuck');
          }

          if (scrollTop < element.offset) {
            element.$element.removeClass(element.inViewClass);
          }
        } // Add class if inView, remove if not


        if (inView) {
          if (!element.$element.hasClass(element.inViewClass)) {
            element.$element.addClass(element.inViewClass);
            this.triggerCallback(element, 'enter');
          }

          if (!element.repeat && !element.sticky) {
            removeFromContainer = true;
          }

          if (element.sticky) {
            var y = this.instance.scroll.y - element.offset;
            element.$element.css({
              '-webkit-transform': "translate3d(0, ".concat(y, "px, 0)"),
              '-ms-transform': "translate3d(0, ".concat(y, "px, 0)"),
              'transform': "translate3d(0, ".concat(y, "px, 0)")
            });
          }
        } else {
          if (element.repeat) {
            if (element.$element.hasClass(element.inViewClass)) {
              element.$element.removeClass(element.inViewClass);
              this.triggerCallback(element, 'leave');
            }
          }
        }
      }

      return removeFromContainer;
    }
    /**
     * check if the element have a callback, and trigger the event set in the data-callback
     *
     * @param  {object}      element Current element to test
     * @return void
     */

  }, {
    key: "triggerCallback",
    value: function triggerCallback(element, way) {
      if (element.callback != undefined) {
        element.$element.trigger({
          type: element.callback.event,
          options: element.callback.options,
          way: way
        }); //add this where you want dude (in your module btw)
        // $document.on(event.Namespace,(e)=>{
        //     console.log(e.options, e.way);
        // });
        /////////////////////////////////////////////
      }
    }
    /**
     * Scroll to a desired target.
     *
     * @param  {object} options
     * @return {void}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(options) {
      var $targetElem = options.targetElem;
      var $sourceElem = options.sourceElem;
      var offsetElem = options.offsetElem;
      var targetOffset = (0, _is.isNumeric)(options.targetOffset) ? parseInt(options.targetOffset) : 0;
      var speed = (0, _is.isNumeric)(options.speed) ? parseInt(options.speed) : 800;
      var delay = (0, _is.isNumeric)(options.delay) ? parseInt(options.delay) : 0;
      var toTop = options.toTop;
      var toBottom = options.toBottom;
      var offset = 0;

      if (typeof $targetElem === 'undefined' && typeof $sourceElem === 'undefined' && typeof targetOffset === 'undefined') {
        console.warn('You must specify at least one parameter.');
        return false;
      }

      if (typeof $targetElem !== 'undefined' && $targetElem instanceof jQuery && $targetElem.length > 0) {
        targetOffset = $targetElem.offset().top + targetOffset;
      }

      if (typeof $sourceElem !== 'undefined' && $sourceElem instanceof jQuery && $sourceElem.length > 0) {
        var targetData = '';

        if ($sourceElem.attr('data-target')) {
          targetData = $sourceElem.attr('data-target');
        } else {
          targetData = $sourceElem.attr('href');
        }

        targetOffset = $(targetData).offset().top + targetOffset;
      }

      if (typeof offsetElem !== 'undefined') {
        offset = $(offsetElem).outerHeight();
        targetOffset = targetOffset - offset;
      }

      if (toTop === true) {
        targetOffset = 0;
      } else if (toBottom === true) {
        targetOffset = _environment.$document.height();
      }

      setTimeout(function () {
        $('html, body').animate({
          scrollTop: targetOffset
        }, speed);
      }, delay);
    }
    /**
     * Update elements and recalculate all the positions on the page
     */

  }, {
    key: "update",
    value: function update() {
      this.addElements();
      this.animateElements();
      this.windowHeight = _environment.$window.height();
      this.windowMiddle = this.windowHeight / 2;
    }
    /**
     * Destroy
     */

  }, {
    key: "destroy",
    value: function destroy() {
      _environment.$window.off(".".concat(EVENT_KEY));

      this.$container.off(".".concat(EVENT_KEY));
      window.cancelAnimationFrame(this.requestId);
      this.requestId = undefined;
      this.animatedElements = undefined;
    }
  }]);

  return _default;
}();

exports["default"] = _default;

},{"../../utils/debounce":7,"../../utils/environment":8,"../../utils/is":9}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _environment = require("../../utils/environment");

var _Scroll = _interopRequireWildcard(require("../Scroll"));

var _SmoothScroll = _interopRequireDefault(require("../SmoothScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Basic module that detects which scrolling module we'll be using
 */
var _default =
/*#__PURE__*/
function () {
  function _default(options) {
    _classCallCheck(this, _default);

    this.options = options;
    this.smooth = options.smooth || _Scroll.DEFAULTS.smooth;
    this.smoothMobile = options.smoothMobile || _Scroll.DEFAULTS.smoothMobile;
    this.mobileContainer = options.mobileContainer || _Scroll.DEFAULTS.mobileContainer;
    this.isMobile = false;
    this.init();
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      var _this = this;

      _environment.$html[0].scrollTop = 0;
      _environment.$body[0].scrollTop = 0;

      if (!this.smoothMobile) {
        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      }

      this.instance = function () {
        if (_this.smooth === true && !_this.isMobile) {
          return new _SmoothScroll["default"](_this.options);
        } else {
          if (_this.mobileContainer) {
            _this.options.container = _this.mobileContainer;
          }

          return new _Scroll["default"](_this.options);
        }
      }();

      this.instance.init();
      var $scrollToOnLoadEl = $('.js-scrollto-on-load').first();

      if ($scrollToOnLoadEl.length === 1) {
        _environment.$document.triggerHandler({
          type: 'Event.SCROLLTO',
          options: {
            targetElem: $scrollToOnLoadEl
          }
        });
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.instance.destroy();
    }
  }]);

  return _default;
}();

exports["default"] = _default;

},{"../../utils/environment":8,"../Scroll":2,"../SmoothScroll":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _environment = require("../../utils/environment");

var _Scroll2 = _interopRequireWildcard(require("../Scroll"));

var _debounce = _interopRequireDefault(require("../../utils/debounce"));

var _virtualScroll = _interopRequireDefault(require("virtual-scroll"));

var _is = require("../../utils/is");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Smooth scrolling using `smooth-scrollbar`.
 * Based on `Scroll` class, which allows animations of elements on the page
 * according to scroll position.
 *
 */
var _default =
/*#__PURE__*/
function (_Scroll) {
  _inherits(_default, _Scroll);

  function _default(options) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, options));
    _this.sectionsSelector = options.sections ? document.querySelectorAll(options.sections) : document.querySelectorAll(_Scroll2.DEFAULTS.sections);
    _this.isReversed = options.reversed || _Scroll2.DEFAULTS.reversed;
    _this.getDirection = options.getDirection || _Scroll2.DEFAULTS.getDirection;
    _this.getSpeed = options.getSpeed || _Scroll2.DEFAULTS.getSpeed;
    _this.inertia = options.inertia || _Scroll2.DEFAULTS.inertia;
    _this.scrollBarClassName = options.scrollBarClassName || _Scroll2.DEFAULTS.scrollBarClassName;
    _this.isScrollingClassName = options.isScrollingClassName || _Scroll2.DEFAULTS.isScrollingClassName;
    _this.parallaxElements = [];
    _this.isDraggingScrollBar = false;
    return _this;
  }
  /**
   * Initialize scrolling animations
   */


  _createClass(_default, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      // Add class to the document to know if SmoothScroll is initialized (to manage overflow on containers)
      _environment.$html.addClass('has-smooth-scroll');

      this.instance = new _virtualScroll["default"]({
        mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
        touchMultiplier: 4,
        firefoxMultiplier: 30
      });
      this.inertia = this.inertia * 0.1;
      this.instance.scroll = {
        x: 0,
        y: 0,
        direction: null
      };
      this.instance.delta = {
        x: 0,
        y: 0
      };

      if (this.getSpeed) {
        this.instance.scroll.speed = 0;
      } // @todo : to optimize


      this.instance.on(function (e) {
        if (!_this2.isDraggingScrollBar) {
          _this2.instance.delta.y -= e.deltaY;
          _this2.isScrolling = true;

          _environment.html.classList.add(_this2.isScrollingClassName);

          if (_this2.instance.delta.y < 0) _this2.instance.delta.y = 0;
          if (_this2.instance.delta.y > _this2.instance.limit) _this2.instance.delta.y = _this2.instance.limit;
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

  }, {
    key: "events",
    value: function events() {
      var _this3 = this;

      // Rebuild event
      this.$container.on(_Scroll2.EVENT.REBUILD, function () {
        _this3.update();
      }); // Update event

      this.$container.on(_Scroll2.EVENT.UPDATE, function (event, options) {
        return _this3.update(options);
      }); // Scrollto button event

      this.$container.on(_Scroll2.EVENT.CLICK, '.js-scrollto', function (event) {
        event.preventDefault();
        var $target = $(event.currentTarget);
        var offset = $target.data('offset');

        _this3.scrollTo({
          sourceElem: $target,
          offsetElem: offset
        });
      });
      this.$container.on(_Scroll2.EVENT.SCROLLTO, function (event) {
        return _this3.scrollTo(event.options);
      }); // Setup done

      _environment.$document.triggerHandler({
        type: _Scroll2.EVENT.ISREADY
      }); // Resize event


      _environment.$window.on(_Scroll2.EVENT.RESIZE, (0, _debounce["default"])(function () {
        _this3.update();
      }, 600));
    }
  }, {
    key: "initScrollBar",
    value: function initScrollBar() {
      var _this4 = this;

      this.scrollbarWrapper = document.createElement('span');
      this.scrollbar = document.createElement('span');
      this.scrollbarWrapper.classList.add("".concat(this.scrollBarClassName, "_wrapper"));
      this.scrollbar.classList.add("".concat(this.scrollBarClassName));
      this.scrollbarWrapper.append(this.scrollbar);
      document.body.append(this.scrollbarWrapper);
      this.scrollbar.style.height = "".concat(window.innerHeight * window.innerHeight / this.instance.limit, "px");
      this.scrollBarLimit = window.innerHeight - this.scrollbar.getBoundingClientRect().height;
      this.scrollbar.addEventListener('mousedown', function (e) {
        return _this4.getScrollBar(e);
      });
      window.addEventListener('mouseup', function (e) {
        return _this4.releaseScrollBar(e);
      });
      window.addEventListener('mousemove', function (e) {
        return _this4.moveScrollBar(e);
      });
    }
  }, {
    key: "reinitScrollBar",
    value: function reinitScrollBar() {
      this.scrollbar.style.height = "".concat(window.innerHeight * window.innerHeight / this.instance.limit, "px");
      this.scrollBarLimit = window.innerHeight - this.scrollbar.getBoundingClientRect().height;
    }
  }, {
    key: "destroyScrollBar",
    value: function destroyScrollBar() {
      var _this5 = this;

      this.scrollbar.removeEventListener('mousedown', function (e) {
        return _this5.getScrollBar(e);
      });
      window.removeEventListener('mouseup', function (e) {
        return _this5.releaseScrollBar(e);
      });
      window.removeEventListener('mousemove', function (e) {
        return _this5.moveScrollBar(e);
      });
    }
  }, {
    key: "getScrollBar",
    value: function getScrollBar(e) {
      this.isScrolling = false;
      this.isDraggingScrollBar = true;

      _environment.html.classList.remove(this.isScrollingClassName);
    }
  }, {
    key: "releaseScrollBar",
    value: function releaseScrollBar(e) {
      this.isScrolling = true;
      this.isDraggingScrollBar = false;

      _environment.html.classList.add(this.isScrollingClassName);
    }
  }, {
    key: "moveScrollBar",
    value: function moveScrollBar(e) {
      if (this.isDraggingScrollBar) {
        var y = e.pageY * 100 / window.innerHeight * this.instance.limit / 100;

        if (y > 0 && y < this.instance.limit) {
          this.instance.delta.y = y;
        }
      }
    }
    /**
     * Reset existing sections and find all sections.
     * Called on page load and any subsequent updates.
     */

  }, {
    key: "addSections",
    value: function addSections() {
      this.sections = [];

      for (var i = 0; i < this.sectionsSelector.length; i++) {
        var sectionElement = this.sectionsSelector[i];
        var offset = sectionElement.getBoundingClientRect().top - window.innerHeight * 1.5 - this.getTranslate(sectionElement).y;
        var limit = offset + sectionElement.getBoundingClientRect().height + window.innerHeight * 2;
        var inView = false;

        for (var _i = this.sections.length - 1; _i >= 0; _i--) {
          if (this.instance.scroll.y > offset && this.instance.scroll.y < limit) {
            inView = true;
          }
        }

        var section = {
          element: sectionElement,
          offset: offset,
          limit: limit,
          inView: inView
        };
        this.sections.push(section);

        if (i === 2) {
          var debug = {
            offset: sectionElement.getBoundingClientRect().top - window.innerHeight * 1.5,
            scrollValue: parseInt(this.instance.scroll.y),
            limit: limit,
            "final": offset
          };
        }
      }
    }
    /**
     * Reset existing elements and find all animatable elements.
     * Called on page load and any subsequent updates.
     */

  }, {
    key: "addElements",
    value: function addElements() {
      this.animatedElements = [];
      this.parallaxElements = [];

      for (var y = 0; y < this.sections.length; y++) {
        var $elements = $(this.selector, this.sections[y].element);
        var len = $elements.length;
        var i = 0;

        for (; i < len; i++) {
          var $element = $elements.eq(i);
          var elementSpeed = $element.attr('data-speed') ? $element.attr('data-speed') / 10 : false;
          var elementPosition = $element.attr('data-position');
          var elementTarget = $element.attr('data-target');
          var elementHorizontal = typeof $element.attr('data-horizontal') === 'string';
          var elementSticky = typeof $element.attr('data-sticky') === 'string';
          var elementStickyTarget = $element.attr('data-sticky-target');
          var $target = elementTarget && $(elementTarget).length ? $(elementTarget) : $element; // reset transform to get the real offset

          var elementOffset = parseInt($target.offset().top + this.instance.scroll.y);

          if (!this.sections[y].inView) {
            elementOffset = parseInt($target.offset().top - this.getTranslate(this.sections[y].element).y);
          }

          var elementLimit = elementOffset + $target.outerHeight();
          var elementViewportOffset = null;

          if (typeof $element.attr('data-viewport-offset') === 'string') {
            elementViewportOffset = $element.attr('data-viewport-offset').split(',');
          } //Manage callback


          var elementCallbackString = typeof $element.attr('data-callback') === 'string' ? $element.attr('data-callback') : null;
          var elementCallback = null;

          if (elementCallbackString != null) {
            var event = elementCallbackString.substr(0, elementCallbackString.indexOf('('));
            var optionsString = elementCallbackString.substr(elementCallbackString.indexOf('('), elementCallbackString.length - event.length);
            optionsString = optionsString.replace('(', '');
            optionsString = optionsString.replace(')', '');
            var options = optionsString.split('|');
            var obj = {};

            for (var j = 0; j < options.length; j++) {
              var option = options[j].split(':');
              option[0] = option[0].replace(' ', '');
              var val = void 0; //check if value is a boolean

              if (option[1] === "true") {
                val = true;
              } else if (option[1] === "false") {
                val = false;
              } //check if value is numeric
              else if (/^\d+$/.test(option[1])) {
                  val = parseInt(option[1]);
                } //check if value is a String
                else {
                    val = option[1];
                  }

              obj[option[0]] = val;
            }

            elementCallback = {
              event: event,
              options: obj
            };
          } // If elements stays visible after scrolling past it


          var elementRepeat = typeof $element.attr('data-repeat') === 'string';
          var elementInViewClass = $element.attr('data-inview-class');

          if (typeof elementInViewClass === 'undefined') {
            elementInViewClass = 'is-show';
          }

          if (!elementTarget && $element.attr('data-transform')) {
            elementOffset -= parseInt(JSON.parse($element.attr('data-transform')).y);
            elementLimit = elementOffset + $target.outerHeight();
          }

          if (elementSticky) {
            if (typeof elementStickyTarget === 'undefined') {
              elementLimit = Infinity;
            } else {
              elementLimit = $(elementStickyTarget).offset().top - $element.height() + this.instance.scroll.y;
            }
          }

          var newElement = {
            $element: $element,
            inViewClass: elementInViewClass,
            limit: elementLimit,
            offset: Math.round(elementOffset),
            repeat: elementRepeat,
            callback: elementCallback,
            viewportOffset: elementViewportOffset
          }; // For parallax animated elements

          if (elementSpeed !== false) {
            var _elementPosition = $element.attr('data-position');

            var _elementHorizontal = typeof $element.attr('data-horizontal') === 'string';

            var elementMiddle = (elementLimit - elementOffset) / 2 + elementOffset;
            var elementDelay = $element.attr('data-delay');
            newElement.horizontal = _elementHorizontal;
            newElement.middle = elementMiddle;
            newElement.offset = elementOffset;
            newElement.position = _elementPosition;
            newElement.speed = elementSpeed;
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

  }, {
    key: "render",
    value: function render(isFirstCall, e) {
      var _this6 = this;

      this.raf = requestAnimationFrame(function () {
        return _this6.render();
      });

      if (this.isScrolling) {
        this.instance.scroll.y = this.lerp(this.instance.scroll.y, this.instance.delta.y, this.inertia);
      } else if (this.isDraggingScrollBar) {
        this.instance.scroll.y = this.lerp(this.instance.scroll.y, this.instance.delta.y, 0.2);
      } else {
        this.instance.scroll.y = this.lerp(this.instance.scroll.y, this.instance.delta.y, this.inertia * 0.5);
      }

      for (var i = this.sections.length - 1; i >= 0; i--) {
        if (this.instance.scroll.y > this.sections[i].offset && this.instance.scroll.y < this.sections[i].limit) {
          var transform = "matrix(1,0,0,1,0,".concat(-this.instance.scroll.y, ")");
          this.sections[i].element.style.webkitTransform = transform;
          this.sections[i].element.style.MozTransform = transform;
          this.sections[i].element.style.msTransform = transform;
          this.sections[i].element.style.OTransform = transform;
          this.sections[i].element.style.transform = transform;
          this.sections[i].element.style.visibility = 'visible';
        } else {
          this.sections[i].element.style.visibility = 'hidden';
        }
      }

      if (this.getDirection) {
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

      if (this.getSpeed) {
        if (this.instance.delta.y !== this.instance.scroll.y) {
          this.instance.scroll.speed = (this.instance.delta.y - this.instance.scroll.y) / (Date.now() - this.timestamp);
          this.instance.delta.y = this.instance.delta.y;
        } else {
          this.instance.scroll.speed = 0;
        }
      }

      if (Math.abs(this.instance.scroll.y - this.instance.delta.y) < 1) {
        _environment.html.classList.remove(this.isScrollingClassName);
      }

      this.transformElements(isFirstCall);
      this.animateElements();
      this.callbacks.onScroll(this.instance);
      this.timestamp = Date.now(); // scrollbar translation

      var scrollBarTranslation = this.instance.scroll.y / this.instance.limit * this.scrollBarLimit;
      this.scrollbar.style.transform = "translate3d(0,".concat(scrollBarTranslation, "px,0)");
    }
  }, {
    key: "lerp",
    value: function lerp(start, end, amt) {
      return (1 - amt) * start + amt * end;
    }
    /**
     * Scroll to a desired target.
     *
     * @param  {object} options
     * @return {void}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(options) {
      var _this7 = this;

      var $targetElem = options.targetElem;
      var $sourceElem = options.sourceElem;
      var offsetElem = options.offsetElem;
      var targetOffset = (0, _is.isNumeric)(options.targetOffset) ? parseInt(options.targetOffset) : 0;
      var delay = (0, _is.isNumeric)(options.delay) ? parseInt(options.delay) : 0;
      var speed = (0, _is.isNumeric)(options.speed) ? parseInt(options.speed) : 900;
      var toTop = options.toTop;
      var toBottom = options.toBottom;
      var offset = 0;

      if (typeof $targetElem === 'undefined' && typeof $sourceElem === 'undefined' && typeof targetOffset === 'undefined') {
        console.warn('You must specify at least one parameter.');
        return false;
      }

      if (typeof $targetElem !== 'undefined' && $targetElem instanceof jQuery && $targetElem.length > 0) {
        targetOffset = $targetElem.offset().top + this.instance.scroll.y + targetOffset;
      }

      if (typeof $sourceElem !== 'undefined' && $sourceElem instanceof jQuery && $sourceElem.length > 0) {
        var targetData = '';

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

      setTimeout(function () {
        _this7.isScrolling = false;
        _this7.instance.delta.y = targetOffset;

        _environment.html.classList.remove(_this7.isScrollingClassName);
      }, delay);
    }
    /**
     * Set the scroll bar limit
     */

  }, {
    key: "setScrollLimit",
    value: function setScrollLimit() {
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

  }, {
    key: "transformElement",
    value: function transformElement($element, x, y, z, delay) {
      // Defaults
      x = parseInt(x * 10000) / 10000 || 0;
      y = parseInt(y * 10000) / 10000 || 0;
      z = parseInt(z * 10000) / 10000 || 0;

      if (!delay) {
        // Translate and store the positionning as `data`
        $element.css({
          '-webkit-transform': "translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)"),
          '-ms-transform': "translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)"),
          'transform': "translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)")
        }).attr('data-transform', "{\"x\": ".concat(x, ",\"y\": ").concat(y, ",\"z\": ").concat(z, "}"));
      } else {
        var start = this.getTranslate($element[0]);
        var lerpY = this.lerp(start.y, y, delay);
        var lerpX = this.lerp(start.x, x, delay);
        $element.css({
          '-webkit-transform': "translate3d(".concat(parseInt(lerpX * 10000) / 10000, "px, ").concat(parseInt(lerpY * 10000) / 10000, "px, ").concat(z, "px)"),
          '-ms-transform': "translate3d(".concat(parseInt(lerpX * 10000) / 10000, "px, ").concat(parseInt(lerpY * 10000) / 10000, "px, ").concat(z, "px)"),
          'transform': "translate3d(".concat(parseInt(lerpX * 10000) / 10000, "px, ").concat(parseInt(lerpY * 10000) / 10000, "px, ").concat(z, "px)")
        }).attr('data-transform', "{\"x\": ".concat(parseInt(lerpX * 10000) / 10000, ",\"y\": ").concat(parseInt(lerpY * 10000) / 10000, ",\"z\": ").concat(z, "}"));
      }
    }
  }, {
    key: "getTranslate",
    value: function getTranslate(el) {
      var translate = {};
      if (!window.getComputedStyle) return;
      var style = getComputedStyle(el);
      var transform = style.transform || style.webkitTransform || style.mozTransform;
      var mat = transform.match(/^matrix3d\((.+)\)$/);
      if (mat) return parseFloat(mat[1].split(', ')[13]);
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

  }, {
    key: "transformElements",
    value: function transformElements(isFirstCall) {
      if (this.parallaxElements.length > 0) {
        var scrollBottom = this.instance.scroll.y + this.windowHeight;
        var scrollMiddle = this.instance.scroll.y + this.windowMiddle;
        var i = 0;
        var len = this.parallaxElements.length;
        var removeIndexes = [];

        for (; i < len; i++) {
          var curEl = this.parallaxElements[i];
          var transformDistance = false; // Define if the element is in view

          var inView = scrollBottom + this.windowHeight >= curEl.offset && this.instance.scroll.y <= curEl.limit;
          this.toggleElement(curEl, i);

          if (isFirstCall && !inView && curEl.speed) {
            // Different calculations if it is the first call and the item is not in the view
            if (curEl.position !== 'top') {
              transformDistance = (curEl.offset - this.windowMiddle - curEl.middle) * -curEl.speed;
            }
          } // If element is in view


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
          } // Transform horizontal OR vertical. Defaults to vertical


          if ((0, _is.isNumeric)(transformDistance)) {
            curEl.horizontal ? this.transformElement(curEl.$element, transformDistance, 0, 0, curEl.delay) : this.transformElement(curEl.$element, 0, transformDistance, 0, curEl.delay);
          }
        }
      }
    }
    /**
     * Update elements and recalculate all the positions on the page
     *
     * @param {object} options
     */

  }, {
    key: "update",
    value: function update(options) {
      options = options || {};
      this.windowHeight = _environment.$window.height();
      this.windowMiddle = this.windowHeight / 2;
      this.setScrollLimit();
      this.addSections();
      this.addElements();
      this.transformElements(true);
      this.reinitScrollBar();
    }
  }, {
    key: "preloadImages",
    value: function preloadImages() {
      var _this8 = this;

      var images = Array.from(document.querySelectorAll('img'));
      images.forEach(function (image) {
        var img = document.createElement('img');
        img.addEventListener('load', function () {
          images.splice(images.indexOf(image), 1);
          images.length === 0 && _this8.update();
        });
        img.src = image.getAttribute('src');
      });
    }
    /**
     * Destroy
     */

  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

      _environment.$html.removeClass('has-smooth-scroll');

      this.parallaxElements = [];
      this.instance.destroy();
      this.scrollbarWrapper.remove();
      cancelAnimationFrame(this.raf);
    }
  }]);

  return _default;
}(_Scroll2["default"]);

exports["default"] = _default;

},{"../../utils/debounce":7,"../../utils/environment":8,"../../utils/is":9,"../Scroll":2,"virtual-scroll":15}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDebug = exports.html = exports.$body = exports.$html = exports.$window = exports.$document = exports.DATA_API_KEY = void 0;
var DATA_API_KEY = '.data-api';
exports.DATA_API_KEY = DATA_API_KEY;
var $document = $(document);
exports.$document = $document;
var $window = $(window);
exports.$window = $window;
var $html = $(document.documentElement).removeClass('has-no-js').addClass('has-js');
exports.$html = $html;
var $body = $(document.body);
exports.$body = $body;
var html = document.getElementsByTagName('html')[0];
exports.html = html;
var body = document.getElementsByTagName('body')[0];
var isDebug = !!$html.data('debug');
exports.isDebug = isDebug;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = isArray;
exports.isArrayLike = isArrayLike;
exports.isEqual = isEqual;
exports.isNumeric = isNumeric;
exports.isObject = isObject;
exports.isFunction = isFunction;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var toString = Object.prototype.toString,
    arrayLikePattern = /^\[object (?:Array|FileList)\]$/; // thanks, http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/

function isArray(thing) {
  return toString.call(thing) === '[object Array]';
}

function isArrayLike(obj) {
  return arrayLikePattern.test(toString.call(obj));
}

function isEqual(a, b) {
  if (a === null && b === null) {
    return true;
  }

  if (_typeof(a) === 'object' || _typeof(b) === 'object') {
    return false;
  }

  return a === b;
} // http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric


function isNumeric(thing) {
  return !isNaN(parseFloat(thing)) && isFinite(thing);
}

function isObject(thing) {
  return thing && toString.call(thing) === '[object Object]';
}

function isFunction(thing) {
  var getType = {};
  return thing && getType.toString.call(thing) === '[object Function]';
}

},{}],10:[function(require,module,exports){
'use strict';

var toString = Object.prototype.toString,
    hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function(object) {
    if(!object) return console.warn('bindAll requires at least one argument.');

    var functions = Array.prototype.slice.call(arguments, 1);

    if (functions.length === 0) {

        for (var method in object) {
            if(hasOwnProperty.call(object, method)) {
                if(typeof object[method] == 'function' && toString.call(object[method]) == "[object Function]") {
                    functions.push(method);
                }
            }
        }
    }

    for(var i = 0; i < functions.length; i++) {
        var f = functions[i];
        object[f] = bind(object[f], object);
    }
};

/*
    Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
    bindAll is only needed for events binding so no need to make slow fixes for constructor
    or partial application.
*/
function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}
},{}],11:[function(require,module,exports){
// Generated by CoffeeScript 1.9.2
(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.Lethargy = (function() {
    function Lethargy(stability, sensitivity, tolerance, delay) {
      this.stability = stability != null ? Math.abs(stability) : 8;
      this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
      this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
      this.delay = delay != null ? delay : 150;
      this.lastUpDeltas = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
      this.lastDownDeltas = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
      this.deltasTimestamp = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
    }

    Lethargy.prototype.check = function(e) {
      var lastDelta;
      e = e.originalEvent || e;
      if (e.wheelDelta != null) {
        lastDelta = e.wheelDelta;
      } else if (e.deltaY != null) {
        lastDelta = e.deltaY * -40;
      } else if ((e.detail != null) || e.detail === 0) {
        lastDelta = e.detail * -40;
      }
      this.deltasTimestamp.push(Date.now());
      this.deltasTimestamp.shift();
      if (lastDelta > 0) {
        this.lastUpDeltas.push(lastDelta);
        this.lastUpDeltas.shift();
        return this.isInertia(1);
      } else {
        this.lastDownDeltas.push(lastDelta);
        this.lastDownDeltas.shift();
        return this.isInertia(-1);
      }
      return false;
    };

    Lethargy.prototype.isInertia = function(direction) {
      var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
      lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;
      if (lastDeltas[0] === null) {
        return direction;
      }
      if (this.deltasTimestamp[(this.stability * 2) - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[(this.stability * 2) - 1]) {
        return false;
      }
      lastDeltasOld = lastDeltas.slice(0, this.stability);
      lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
      oldSum = lastDeltasOld.reduce(function(t, s) {
        return t + s;
      });
      newSum = lastDeltasNew.reduce(function(t, s) {
        return t + s;
      });
      oldAverage = oldSum / lastDeltasOld.length;
      newAverage = newSum / lastDeltasNew.length;
      if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && (this.sensitivity < Math.abs(newAverage))) {
        return direction;
      } else {
        return false;
      }
    };

    Lethargy.prototype.showLastUpDeltas = function() {
      return this.lastUpDeltas;
    };

    Lethargy.prototype.showLastDownDeltas = function() {
      return this.lastDownDeltas;
    };

    return Lethargy;

  })();

}).call(this);

},{}],12:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],13:[function(require,module,exports){
function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;

},{}],14:[function(require,module,exports){
'use strict';

module.exports = function(source) {
    return JSON.parse(JSON.stringify(source));
};
},{}],15:[function(require,module,exports){
'use strict';

var objectAssign = require('object-assign');
var Emitter = require('tiny-emitter');
var Lethargy = require('lethargy').Lethargy;
var support = require('./support');
var clone = require('./clone');
var bindAll = require('bindall-standalone');
var EVT_ID = 'virtualscroll';

module.exports = VirtualScroll;

var keyCodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
};

function VirtualScroll(options) {
    bindAll(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown');

    this.el = window;
    if (options && options.el) {
        this.el = options.el;
        delete options.el;
    }
    this.options = objectAssign({
        mouseMultiplier: 1,
        touchMultiplier: 2,
        firefoxMultiplier: 15,
        keyStep: 120,
        preventTouch: false,
        unpreventTouchClass: 'vs-touchmove-allowed',
        limitInertia: false
    }, options);

    if (this.options.limitInertia) this._lethargy = new Lethargy();

    this._emitter = new Emitter();
    this._event = {
        y: 0,
        x: 0,
        deltaX: 0,
        deltaY: 0
    };
    this.touchStartX = null;
    this.touchStartY = null;
    this.bodyTouchAction = null;

    if (this.options.passive !== undefined) {
        this.listenerOptions = {passive: this.options.passive};
    }
}

VirtualScroll.prototype._notify = function(e) {
    var evt = this._event;
    evt.x += evt.deltaX;
    evt.y += evt.deltaY;

   this._emitter.emit(EVT_ID, {
        x: evt.x,
        y: evt.y,
        deltaX: evt.deltaX,
        deltaY: evt.deltaY,
        originalEvent: e
   });
};

VirtualScroll.prototype._onWheel = function(e) {
    var options = this.options;
    if (this._lethargy && this._lethargy.check(e) === false) return;
    var evt = this._event;

    // In Chrome and in Firefox (at least the new one)
    evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
    evt.deltaY = e.wheelDeltaY || e.deltaY * -1;

    // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
    // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
    if(support.isFirefox && e.deltaMode == 1) {
        evt.deltaX *= options.firefoxMultiplier;
        evt.deltaY *= options.firefoxMultiplier;
    }

    evt.deltaX *= options.mouseMultiplier;
    evt.deltaY *= options.mouseMultiplier;

    this._notify(e);
};

VirtualScroll.prototype._onMouseWheel = function(e) {
    if (this.options.limitInertia && this._lethargy.check(e) === false) return;

    var evt = this._event;

    // In Safari, IE and in Chrome if 'wheel' isn't defined
    evt.deltaX = (e.wheelDeltaX) ? e.wheelDeltaX : 0;
    evt.deltaY = (e.wheelDeltaY) ? e.wheelDeltaY : e.wheelDelta;

    this._notify(e);
};

VirtualScroll.prototype._onTouchStart = function(e) {
    var t = (e.targetTouches) ? e.targetTouches[0] : e;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
};

VirtualScroll.prototype._onTouchMove = function(e) {
    var options = this.options;
    if(options.preventTouch
        && !e.target.classList.contains(options.unpreventTouchClass)) {
        e.preventDefault();
    }

    var evt = this._event;

    var t = (e.targetTouches) ? e.targetTouches[0] : e;

    evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
    evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;

    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;

    this._notify(e);
};

VirtualScroll.prototype._onKeyDown = function(e) {
    var evt = this._event;
    evt.deltaX = evt.deltaY = 0;
    var windowHeight = window.innerHeight - 40

    switch(e.keyCode) {
        case keyCodes.LEFT:
        case keyCodes.UP:
            evt.deltaY = this.options.keyStep;
            break;

        case keyCodes.RIGHT:
        case keyCodes.DOWN:
            evt.deltaY = - this.options.keyStep;
            break;
        case keyCodes.SPACE && e.shiftKey:
            evt.deltaY = windowHeight;
            break;
        case keyCodes.SPACE:
            evt.deltaY = - windowHeight;
            break;
        default:
            return;
    }

    this._notify(e);
};

VirtualScroll.prototype._bind = function() {
    if(support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
    if(support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);

    if(support.hasTouch) {
        this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
        this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
    }

    if(support.hasPointer && support.hasTouchWin) {
        this.bodyTouchAction = document.body.style.msTouchAction;
        document.body.style.msTouchAction = 'none';
        this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
    }

    if(support.hasKeyDown) document.addEventListener('keydown', this._onKeyDown);
};

VirtualScroll.prototype._unbind = function() {
    if(support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel);
    if(support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel);

    if(support.hasTouch) {
        this.el.removeEventListener('touchstart', this._onTouchStart);
        this.el.removeEventListener('touchmove', this._onTouchMove);
    }

    if(support.hasPointer && support.hasTouchWin) {
        document.body.style.msTouchAction = this.bodyTouchAction;
        this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
    }

    if(support.hasKeyDown) document.removeEventListener('keydown', this._onKeyDown);
};

VirtualScroll.prototype.on = function(cb, ctx) {
  this._emitter.on(EVT_ID, cb, ctx);

  var events = this._emitter.e;
  if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
};

VirtualScroll.prototype.off = function(cb, ctx) {
  this._emitter.off(EVT_ID, cb, ctx);

  var events = this._emitter.e;
  if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
};

VirtualScroll.prototype.reset = function() {
    var evt = this._event;
    evt.x = 0;
    evt.y = 0;
};

VirtualScroll.prototype.destroy = function() {
    this._emitter.off();
    this._unbind();
};

},{"./clone":14,"./support":16,"bindall-standalone":10,"lethargy":11,"object-assign":12,"tiny-emitter":13}],16:[function(require,module,exports){
'use strict';

module.exports = (function getSupport() {
    return {
        hasWheelEvent: 'onwheel' in document,
        hasMouseWheelEvent: 'onmousewheel' in document,
        hasTouch: 'ontouchstart' in document,
        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: 'onkeydown' in document,
        isFirefox: navigator.userAgent.indexOf('Firefox') > -1
    };
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9hcHAuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvU2Nyb2xsLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL1Ntb290aFNjcm9sbC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL1Njcm9sbC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL1Njcm9sbE1hbmFnZXIuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvdmVuZG9ycy9TbW9vdGhTY3JvbGwuanMiLCJhc3NldHMvc2NyaXB0cy91dGlscy9kZWJvdW5jZS5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL2Vudmlyb25tZW50LmpzIiwiYXNzZXRzL3NjcmlwdHMvdXRpbHMvaXMuanMiLCJub2RlX21vZHVsZXMvYmluZGFsbC1zdGFuZGFsb25lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xldGhhcmd5L2xldGhhcmd5LmpzIiwibm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvdGlueS1lbWl0dGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtc2Nyb2xsL3NyYy9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLXNjcm9sbC9zcmMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvc3JjL3N1cHBvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0lBOzs7O0FBSkE7QUFDQTtBQUNBOztBQUNBO0FBR0EsQ0FBQyxZQUFXO0FBRVI7QUFDQSxNQUFNLFlBQVksR0FBRyxJQUFJLHlCQUFKLENBQWtCO0FBQ25DLElBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxZQUFELENBRHVCO0FBRW5DLElBQUEsUUFBUSxFQUFFLGFBRnlCO0FBR25DLElBQUEsUUFBUSxFQUFFLGFBSHlC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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQXBwXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuaW1wb3J0IFNjcm9sbE1hbmFnZXIgZnJvbSAnLi9zY3JvbGwvdmVuZG9ycy9TY3JvbGxNYW5hZ2VyJztcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gSW5pdCBMb2NvbW90aXZlIFNjcm9sbFxuICAgIGNvbnN0IHNtb290aFNjcm9sbCA9IG5ldyBTY3JvbGxNYW5hZ2VyKHtcbiAgICAgICAgY29udGFpbmVyOiAkKCcjanMtc2Nyb2xsJyksXG4gICAgICAgIHNlY3Rpb25zOiAnLmpzLXNlY3Rpb24nLFxuICAgICAgICBzZWxlY3RvcjogJy5qcy1hbmltYXRlJyxcbiAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICBzbW9vdGhNb2JpbGU6IHRydWUsXG4gICAgICAgIG1vYmlsZUNvbnRhaW5lcjogJChkb2N1bWVudCksXG4gICAgICAgIGdldERpcmVjdGlvbjogdHJ1ZSxcbiAgICAgICAgZ2V0U3BlZWQ6IHRydWUsXG4gICAgICAgIGluZXJ0aWE6IDEsXG4gICAgICAgIHNjcm9sbEJhckNsYXNzTmFtZTogJ28tc2Nyb2xsYmFyJyxcbiAgICAgICAgaXNTY3JvbGxpbmdDbGFzc05hbWU6ICdpcy1zY3JvbGxpbmcnLFxuICAgICAgICBvblNjcm9sbDogKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUuc2Nyb2xsLnkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn0pKCk7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRXh0ZW5kZWQgTG9jb21vdGl2ZSBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgU2Nyb2xsLCB7IEVWRU5UX0tFWSBhcyBWRU5ET1JfRVZFTlRfS0VZLCBFVkVOVCBhcyBWRU5ET1JfRVZFTlRTLCBERUZBVUxUUyBhcyBWRU5ET1JfREVGQVVMVFMgfSBmcm9tICcuL3ZlbmRvcnMvU2Nyb2xsJ1xuXG4vKipcbiAqIFVOQ09NTUVOVCBPTkxZIFRIRSBMSU5FUyBZT1UgTkVFRFxuICovXG4vLyBpbXBvcnQgeyAkd2luZG93LCAkZG9jdW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9lbnZpcm9ubWVudCc7XG4vLyBpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UnO1xuLy8gaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRfS0VZID0gVkVORE9SX0VWRU5UX0tFWTtcblxuZXhwb3J0IGNvbnN0IEVWRU5UID0gT2JqZWN0LmFzc2lnbihWRU5ET1JfRVZFTlRTLCB7XG4gICAgLy8gVEVTVDogYHRlc3QuJHtFVkVOVF9LRVl9YFxufSk7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IE9iamVjdC5hc3NpZ24oVkVORE9SX0RFRkFVTFRTLCB7IH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFNjcm9sbCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKVxuICAgIH1cbn1cbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFeHRlbmRlZCBMb2NvbW90aXZlIFNtb290aCBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJy4vdmVuZG9ycy9TbW9vdGhTY3JvbGwnXG5cbi8qKlxuICogVU5DT01NRU5UIE9OTFkgVEhFIExJTkVTIFlPVSBORUVEXG4gKi9cbi8vIGltcG9ydCB7ICR3aW5kb3csICRkb2N1bWVudCwgJGh0bWwgfSBmcm9tICcuLi91dGlscy9lbnZpcm9ubWVudCc7XG4vLyBpbXBvcnQgU2Nyb2xsLCB7IERFRkFVTFRTLCBFVkVOVCB9IGZyb20gJy4vU2Nyb2xsJztcblxuLy8gaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uL3V0aWxzL2RlYm91bmNlJztcbi8vIGltcG9ydCBTY3JvbGxiYXIgZnJvbSAnc21vb3RoLXNjcm9sbGJhcic7XG4vLyBpbXBvcnQgeyBpc051bWVyaWMgfSBmcm9tICcuLi91dGlscy9pcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgU21vb3RoU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvY29tb3RpdmUgU2Nyb2xsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuaW1wb3J0IHsgJHdpbmRvdywgJGRvY3VtZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRfS0VZID0gYExvY29tb3RpdmVTY3JvbGxgO1xuXG5leHBvcnQgY29uc3QgRVZFTlQgPSB7XG4gICAgQ0xJQ0s6IGBjbGljay4ke0VWRU5UX0tFWX1gLFxuICAgIElTUkVBRFk6IGBpc1JlYWR5LiR7RVZFTlRfS0VZfWAsXG4gICAgUkVCVUlMRDogYHJlYnVpbGQuJHtFVkVOVF9LRVl9YCxcbiAgICBSRU5ERVI6IGByZW5kZXIuJHtFVkVOVF9LRVl9YCxcbiAgICBSRVNJWkU6IGByZXNpemUuJHtFVkVOVF9LRVl9YCxcbiAgICBTQ1JPTEw6IGBzY3JvbGwuJHtFVkVOVF9LRVl9YCxcbiAgICBTQ1JPTExUTzogYHNjcm9sbFRvLiR7RVZFTlRfS0VZfWAsXG4gICAgVVBEQVRFOiBgdXBkYXRlLiR7RVZFTlRfS0VZfWBcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IHtcbiAgICBjb250YWluZXI6ICRkb2N1bWVudCxcbiAgICBzZWN0aW9uczogJy5qcy1zZWN0aW9uJyxcbiAgICBtb2JpbGVDb250YWluZXI6ICRkb2N1bWVudCxcbiAgICBvblNjcm9sbDogZnVuY3Rpb24oKXt9LFxuICAgIHNlbGVjdG9yOiAnLmpzLWFuaW1hdGUnLFxuICAgIHNtb290aDogZmFsc2UsXG4gICAgc21vb3RoTW9iaWxlOiBmYWxzZSxcbiAgICByZXZlcnNlZDogZmFsc2UsXG4gICAgZ2V0RGlyZWN0aW9uOiBmYWxzZSxcbiAgICBnZXRTcGVlZDogZmFsc2UsXG4gICAgc2Nyb2xsQmFyQ2xhc3NOYW1lOiAnby1zY3JvbGxiYXInLFxuICAgIGlzU2Nyb2xsaW5nQ2xhc3NOYW1lOiAnaXMtc2Nyb2xsaW5nJyxcbn07XG5cbi8qKlxuICogTWFuYWdlIGFuaW1hdGlvbiBvZiBlbGVtZW50cyBvbiB0aGUgcGFnZSBhY2NvcmRpbmcgdG8gc2Nyb2xsIHBvc2l0aW9uLlxuICpcbiAqIEB0b2RvICBNYW5hZ2Ugc29tZSBvcHRpb25zIChub3JtYWxseSBmcm9tIGRhdGEgYXR0cmlidXRlcykgd2l0aCBjb25zdHJ1Y3RvciBvcHRpb25zIChleC46IHNldCByZXBlYXQgZm9yIGFsbClcbiAqIEB0b2RvICBNZXRob2QgdG8gZ2V0IHRoZSBkaXN0YW5jZSAoYXMgcGVyY2VudGFnZSkgb2YgYW4gZWxlbWVudCBpbiB0aGUgdmlld3BvcnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAgICAgICB0aGlzLiRjb250YWluZXIgPSAob3B0aW9ucy5jb250YWluZXIpID8gb3B0aW9ucy5jb250YWluZXIgOiBERUZBVUxUUy5jb250YWluZXI7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSAob3B0aW9ucy5zZWxlY3RvcikgPyBvcHRpb25zLnNlbGVjdG9yIDogREVGQVVMVFMuc2VsZWN0b3I7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSB7XG4gICAgICAgICAgICBvblNjcm9sbDogdHlwZW9mIG9wdGlvbnMub25TY3JvbGwgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLm9uU2Nyb2xsIDogREVGQVVMVFMub25TY3JvbGxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlID0ge1xuICAgICAgICAgICAgc2Nyb2xsOiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG5cbiAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzID0gW107XG5cbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBzY3JvbGxpbmcgYW5pbWF0aW9uc1xuICAgICAqL1xuICAgIGluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgLy8gT24gc2Nyb2xsXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5TQ1JPTEwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlYnVpbGQgZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlJFQlVJTEQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHRhcmdldE9mZnNldDogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlVQREFURSwgKGV2ZW50LCBvcHRpb25zKSA9PiB0aGlzLnVwZGF0ZShvcHRpb25zKSk7XG5cbiAgICAgICAgLy8gUmVuZGVyIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5SRU5ERVIsICgpID0+IHRoaXMucmVuZGVyKCkpO1xuXG4gICAgICAgIC8vIFNjcm9sbHRvIGJ1dHRvbiBldmVudFxuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuQ0xJQ0ssICcuanMtc2Nyb2xsdG8nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAkdGFyZ2V0LmRhdGEoJ29mZnNldCcpO1xuXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICBzb3VyY2VFbGVtOiAkdGFyZ2V0LFxuICAgICAgICAgICAgICAgIG9mZnNldEVsZW06IG9mZnNldFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuU0NST0xMVE8sIChldmVudCkgPT4gdGhpcy5zY3JvbGxUbyhldmVudC5vcHRpb25zKSk7XG5cbiAgICAgICAgLy8gU2V0dXAgZG9uZVxuICAgICAgICAkZG9jdW1lbnQudHJpZ2dlckhhbmRsZXIoe1xuICAgICAgICAgICAgdHlwZTogRVZFTlQuSVNSRUFEWVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXNpemUgZXZlbnRcbiAgICAgICAgJHdpbmRvdy5vbihFVkVOVC5SRVNJWkUsIGRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgfSwgMjApKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgYWxsIGFuaW1hdGFibGUgZWxlbWVudHMuXG4gICAgICogQ2FsbGVkIG9uIHBhZ2UgbG9hZCBhbmQgYW55IHN1YnNlcXVlbnQgdXBkYXRlcy5cbiAgICAgKi9cbiAgICBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzID0gW107XG5cbiAgICAgICAgY29uc3QgJGVsZW1lbnRzID0gJCh0aGlzLnNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgbGVuID0gJGVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpICsrKSB7XG4gICAgICAgICAgICBsZXQgJGVsZW1lbnQgPSAkZWxlbWVudHMuZXEoaSk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhcmdldCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFBvc2l0aW9uID0gJGVsZW1lbnQuYXR0cignZGF0YS1wb3NpdGlvbicpO1xuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAoZWxlbWVudFRhcmdldCAmJiAkKGVsZW1lbnRUYXJnZXQpLmxlbmd0aCkgPyAkKGVsZW1lbnRUYXJnZXQpIDogJGVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgZWxlbWVudE9mZnNldCA9ICR0YXJnZXQub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRMaW1pdCA9IGVsZW1lbnRPZmZzZXQgKyAkdGFyZ2V0Lm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFN0aWNreSA9ICh0eXBlb2YgJGVsZW1lbnQuYXR0cignZGF0YS1zdGlja3knKSA9PT0gJ3N0cmluZycpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRTdGlja3lUYXJnZXQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLXN0aWNreS10YXJnZXQnKTtcblxuICAgICAgICAgICAgbGV0IGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9IG51bGw7XG4gICAgICAgICAgICBpZih0eXBlb2YgJGVsZW1lbnQuYXR0cignZGF0YS12aWV3cG9ydC1vZmZzZXQnKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgIGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtdmlld3BvcnQtb2Zmc2V0Jykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vTWFuYWdlIGNhbGxiYWNrXG4gICAgICAgICAgICBsZXQgZWxlbWVudENhbGxiYWNrU3RyaW5nID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLWNhbGxiYWNrJykgPT09ICdzdHJpbmcnKSA/ICRlbGVtZW50LmF0dHIoJ2RhdGEtY2FsbGJhY2snKSA6IG51bGw7XG4gICAgICAgICAgICBsZXQgZWxlbWVudENhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICAgICAgaWYoZWxlbWVudENhbGxiYWNrU3RyaW5nICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IGVsZW1lbnRDYWxsYmFja1N0cmluZy5zdWJzdHIoMCwgZWxlbWVudENhbGxiYWNrU3RyaW5nLmluZGV4T2YoJygnKSk7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnNTdHJpbmcgPSBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuc3Vic3RyKGVsZW1lbnRDYWxsYmFja1N0cmluZy5pbmRleE9mKCcoJyksZWxlbWVudENhbGxiYWNrU3RyaW5nLmxlbmd0aCAtIGV2ZW50Lmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKCcoJywnJyk7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1N0cmluZyA9IG9wdGlvbnNTdHJpbmcucmVwbGFjZSgnKScsJycpO1xuXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBvcHRpb25zU3RyaW5nLnNwbGl0KCd8Jyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge307XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9wdGlvbnMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uc1tqXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25bMF0gPSBvcHRpb25bMF0ucmVwbGFjZSgnICcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgYSBib29sZWFuXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvblsxXSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihvcHRpb25bMV0gPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBudW1lcmljXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoL15cXGQrJC8udGVzdChvcHRpb25bMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBwYXJzZUludChvcHRpb25bMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgYSBTdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBvcHRpb25bMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2JqW29wdGlvblswXV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbWVudENhbGxiYWNrID0ge2V2ZW50OmV2ZW50LCBvcHRpb25zOm9ian07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGVsZW1lbnRzIGxvc2VzIGl0cyBhbmltYXRpb24gYWZ0ZXIgc2Nyb2xsaW5nIHBhc3QgaXRcbiAgICAgICAgICAgIGxldCBlbGVtZW50UmVwZWF0ID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLXJlcGVhdCcpID09PSAnc3RyaW5nJyk7XG5cbiAgICAgICAgICAgIGxldCBlbGVtZW50SW5WaWV3Q2xhc3MgPSAkZWxlbWVudC5hdHRyKCdkYXRhLWludmlldy1jbGFzcycpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50SW5WaWV3Q2xhc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudEluVmlld0NsYXNzID0gJ2lzLXNob3cnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFN0aWNreSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudFN0aWNreVRhcmdldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gdGhpcy4kY29udGFpbmVyLmhlaWdodCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaW1pdCA9ICQoZWxlbWVudFN0aWNreVRhcmdldCkub2Zmc2V0KCkudG9wIC0gJGVsZW1lbnQuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgb2Zmc2V0XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MoZWxlbWVudEluVmlld0NsYXNzKTtcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcygnaXMtdW5zdHVjaycpO1xuXG4gICAgICAgICAgICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEb24ndCBhZGQgZWxlbWVudCBpZiBpdCBhbHJlYWR5IGhhcyBpdHMgaW52aWV3IGNsYXNzIGFuZCBkb2Vzbid0IHJlcGVhdFxuICAgICAgICAgICAgaWYgKGVsZW1lbnRSZXBlYXQgfHwgISRlbGVtZW50Lmhhc0NsYXNzKGVsZW1lbnRJblZpZXdDbGFzcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHNbaV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICRlbGVtZW50OiAkZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBNYXRoLnJvdW5kKGVsZW1lbnRPZmZzZXQpLFxuICAgICAgICAgICAgICAgICAgICByZXBlYXQ6IGVsZW1lbnRSZXBlYXQsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBlbGVtZW50UG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBlbGVtZW50TGltaXQsXG4gICAgICAgICAgICAgICAgICAgIGluVmlld0NsYXNzOiBlbGVtZW50SW5WaWV3Q2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIHN0aWNreTogZWxlbWVudFN0aWNreSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGVsZW1lbnRDYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnRPZmZzZXQ6IGVsZW1lbnRWaWV3cG9ydE9mZnNldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb29wIHRocm91Z2ggYWxsIGFuaW1hdGFibGUgZWxlbWVudHMgYW5kIGFwcGx5IGFuaW1hdGlvbiBtZXRob2QocykuXG4gICAgICovXG4gICAgYW5pbWF0ZUVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLmFuaW1hdGVkRWxlbWVudHMubGVuZ3RoO1xuICAgICAgICBjb25zdCByZW1vdmVJbmRleGVzID0gW107XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmFuaW1hdGVkRWxlbWVudHNbaV07XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBlbGVtZW50J3MgdmlzaWJpbGl0eSBtdXN0IG5vdCBiZSBtYW5pcHVsYXRlZCBhbnkgZnVydGhlciwgcmVtb3ZlIGl0IGZyb20gdGhlIGxpc3RcbiAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZUVsZW1lbnQoZWxlbWVudCwgaSkpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVJbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYW5pbWF0ZWQgZWxlbWVudHMgYWZ0ZXIgbG9vcGluZyB0aHJvdWdoIGVsZW1lbnRzXG4gICAgICAgIGkgPSByZW1vdmVJbmRleGVzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzLnNwbGljZShyZW1vdmVJbmRleGVzW2ldLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY2xhc3MgYW5pbWF0aW9ucywgYW5kIHVwZGF0ZSB0aGUgZ2xvYmFsIHNjcm9sbCBwb3NpdGlvbm5pbmcuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ2Rvd24nKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9IGVsc2UgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgIT09IHdpbmRvdy5wYWdlWU9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwueCAhPT0gd2luZG93LnBhZ2VYT2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC54ID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWxsYmFja3Mub25TY3JvbGwodGhpcy5zY3JvbGwpXG5cbiAgICAgICAgdGhpcy5hbmltYXRlRWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgY2xhc3NlcyBvbiBhbiBlbGVtZW50IGlmIGl0J3MgdmlzaWJsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gICAgICBlbGVtZW50IEN1cnJlbnQgZWxlbWVudCB0byB0ZXN0XG4gICAgICogQHBhcmFtICB7aW50fSAgICAgICAgIGluZGV4ICAgSW5kZXggb2YgdGhlIGVsZW1lbnQgd2l0aGluIGl0J3MgY29udGFpbmVyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gICAgICAgICAgICAgV2V0aGVyIHRoZSBpdGVtIG11c3QgYmUgcmVtb3ZlZCBmcm9tIGl0cyBjb250YWluZXJcbiAgICAgKi9cbiAgICB0b2dnbGVFbGVtZW50KGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgIGxldCByZW1vdmVGcm9tQ29udGFpbmVyID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgYm90dG9tIGVkZ2Ugb2YgdGhlIHNjcm9sbCBjb250YWluZXJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxCb3R0b20gPSBzY3JvbGxUb3AgKyB0aGlzLndpbmRvd0hlaWdodDtcblxuICAgICAgICAgICAgLy8gRGVmaW5lIGlmIHRoZSBlbGVtZW50IGlzIGluVmlld1xuICAgICAgICAgICAgbGV0IGluVmlldyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5wb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsVG9wID49IGVsZW1lbnQub2Zmc2V0ICYmIHNjcm9sbFRvcCA8PSBlbGVtZW50LmxpbWl0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wb3NpdGlvbiA9PT0gJ2JlbG93Jykge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxUb3AgPiBlbGVtZW50LmxpbWl0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsVG9wID49IGVsZW1lbnQub2Zmc2V0ICYmIHNjcm9sbFRvcCA8PSBlbGVtZW50LmxpbWl0KTtcbiAgICAgICAgICAgIH1lbHNlIGlmKGVsZW1lbnQudmlld3BvcnRPZmZzZXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC52aWV3cG9ydE9mZnNldC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxWaWV3cG9ydE9mZnNldFRvcCA9IHNjcm9sbFRvcCArICh0aGlzLndpbmRvd0hlaWdodCAqIGVsZW1lbnQudmlld3BvcnRPZmZzZXRbMV0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsVmlld3BvcnRPZmZzZXRCb3R0b20gPSBzY3JvbGxCb3R0b20gLSAodGhpcy53aW5kb3dIZWlnaHQgKiBlbGVtZW50LnZpZXdwb3J0T2Zmc2V0WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgaW5WaWV3ID0gKHNjcm9sbFZpZXdwb3J0T2Zmc2V0Qm90dG9tID4gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVmlld3BvcnRPZmZzZXRUb3AgPCBlbGVtZW50LmxpbWl0KTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxWaWV3cG9ydE9mZnNldCA9IHNjcm9sbEJvdHRvbSAtICh0aGlzLndpbmRvd0hlaWdodCAqIGVsZW1lbnQudmlld3BvcnRPZmZzZXRbMF0pO1xuICAgICAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsVmlld3BvcnRPZmZzZXQgPiBlbGVtZW50Lm9mZnNldCAmJiBzY3JvbGxWaWV3cG9ydE9mZnNldCA8IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsQm90dG9tID49IGVsZW1lbnQub2Zmc2V0ICYmIHNjcm9sbFRvcCA8PSBlbGVtZW50LmxpbWl0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA+IGVsZW1lbnQubGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC5hZGRDbGFzcygnaXMtdW5zdHVjaycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lzLXVuc3R1Y2snKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDwgZWxlbWVudC5vZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC5yZW1vdmVDbGFzcyhlbGVtZW50LmluVmlld0NsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBjbGFzcyBpZiBpblZpZXcsIHJlbW92ZSBpZiBub3RcbiAgICAgICAgICAgIGlmIChpblZpZXcpIHtcbiAgICAgICAgICAgICAgICBpZighZWxlbWVudC4kZWxlbWVudC5oYXNDbGFzcyhlbGVtZW50LmluVmlld0NsYXNzKSl7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuJGVsZW1lbnQuYWRkQ2xhc3MoZWxlbWVudC5pblZpZXdDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckNhbGxiYWNrKGVsZW1lbnQsJ2VudGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50LnJlcGVhdCAmJiAhZWxlbWVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRnJvbUNvbnRhaW5lciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSAtIGVsZW1lbnQub2Zmc2V0O1xuXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgwLCAke3l9cHgsIDApYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKDAsICR7eX1weCwgMClgLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgwLCAke3l9cHgsIDApYFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LiRlbGVtZW50Lmhhc0NsYXNzKGVsZW1lbnQuaW5WaWV3Q2xhc3MpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoZWxlbWVudC5pblZpZXdDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJDYWxsYmFjayhlbGVtZW50LCdsZWF2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbW92ZUZyb21Db250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2hlY2sgaWYgdGhlIGVsZW1lbnQgaGF2ZSBhIGNhbGxiYWNrLCBhbmQgdHJpZ2dlciB0aGUgZXZlbnQgc2V0IGluIHRoZSBkYXRhLWNhbGxiYWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9ICAgICAgZWxlbWVudCBDdXJyZW50IGVsZW1lbnQgdG8gdGVzdFxuICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAqL1xuICAgIHRyaWdnZXJDYWxsYmFjayhlbGVtZW50LHdheSl7XG5cbiAgICAgICAgaWYoZWxlbWVudC5jYWxsYmFjayAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC50cmlnZ2VyKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBlbGVtZW50LmNhbGxiYWNrLmV2ZW50LFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGVsZW1lbnQuY2FsbGJhY2sub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB3YXk6IHdheVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2FkZCB0aGlzIHdoZXJlIHlvdSB3YW50IGR1ZGUgKGluIHlvdXIgbW9kdWxlIGJ0dylcbiAgICAgICAgICAgIC8vICRkb2N1bWVudC5vbihldmVudC5OYW1lc3BhY2UsKGUpPT57XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZS5vcHRpb25zLCBlLndheSk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgZGVzaXJlZCB0YXJnZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNjcm9sbFRvKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgJHRhcmdldEVsZW0gPSBvcHRpb25zLnRhcmdldEVsZW07XG4gICAgICAgIGNvbnN0ICRzb3VyY2VFbGVtID0gb3B0aW9ucy5zb3VyY2VFbGVtO1xuICAgICAgICBjb25zdCBvZmZzZXRFbGVtID0gb3B0aW9ucy5vZmZzZXRFbGVtO1xuICAgICAgICBsZXQgdGFyZ2V0T2Zmc2V0ID0gaXNOdW1lcmljKG9wdGlvbnMudGFyZ2V0T2Zmc2V0KSA/IHBhcnNlSW50KG9wdGlvbnMudGFyZ2V0T2Zmc2V0KSA6IDA7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gaXNOdW1lcmljKG9wdGlvbnMuc3BlZWQpID8gcGFyc2VJbnQob3B0aW9ucy5zcGVlZCkgOiA4MDA7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gaXNOdW1lcmljKG9wdGlvbnMuZGVsYXkpID8gcGFyc2VJbnQob3B0aW9ucy5kZWxheSkgOiAwO1xuICAgICAgICBjb25zdCB0b1RvcCA9IG9wdGlvbnMudG9Ub3A7XG4gICAgICAgIGNvbnN0IHRvQm90dG9tID0gb3B0aW9ucy50b0JvdHRvbTtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkdGFyZ2V0RWxlbSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mICRzb3VyY2VFbGVtID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGFyZ2V0T2Zmc2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgbXVzdCBzcGVjaWZ5IGF0IGxlYXN0IG9uZSBwYXJhbWV0ZXIuJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgJHRhcmdldEVsZW0gIT09ICd1bmRlZmluZWQnICYmICR0YXJnZXRFbGVtIGluc3RhbmNlb2YgalF1ZXJ5ICYmICR0YXJnZXRFbGVtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9ICR0YXJnZXRFbGVtLm9mZnNldCgpLnRvcCArIHRhcmdldE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgJHNvdXJjZUVsZW0gIT09ICd1bmRlZmluZWQnICYmICRzb3VyY2VFbGVtIGluc3RhbmNlb2YgalF1ZXJ5ICYmICRzb3VyY2VFbGVtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXREYXRhID0gJyc7XG5cbiAgICAgICAgICAgIGlmICgkc291cmNlRWxlbS5hdHRyKCdkYXRhLXRhcmdldCcpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0YSA9ICRzb3VyY2VFbGVtLmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldERhdGEgPSAkc291cmNlRWxlbS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9ICQodGFyZ2V0RGF0YSkub2Zmc2V0KCkudG9wICsgdGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXRFbGVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb2Zmc2V0ID0gJChvZmZzZXRFbGVtKS5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0T2Zmc2V0IC0gb2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvVG9wID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRvQm90dG9tID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAkZG9jdW1lbnQuaGVpZ2h0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldE9mZnNldFxuICAgICAgICAgICAgfSwgc3BlZWQpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGVsZW1lbnRzIGFuZCByZWNhbGN1bGF0ZSBhbGwgdGhlIHBvc2l0aW9ucyBvbiB0aGUgcGFnZVxuICAgICAqL1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmFuaW1hdGVFbGVtZW50cygpO1xuXG4gICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICR3aW5kb3cub2ZmKGAuJHtFVkVOVF9LRVl9YCk7XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vZmYoYC4ke0VWRU5UX0tFWX1gKTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdElkKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50cyA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9jb21vdGl2ZSBTY3JvbGwgTWFuYWdlclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCB7ICRkb2N1bWVudCwgJHdpbmRvdywgJGh0bWwsICRib2R5IH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IFNjcm9sbCwgeyBERUZBVUxUUywgRVZFTlQgfSBmcm9tICcuLi9TY3JvbGwnO1xuaW1wb3J0IFNtb290aFNjcm9sbCBmcm9tICcuLi9TbW9vdGhTY3JvbGwnO1xuXG4vKipcbiAqIEJhc2ljIG1vZHVsZSB0aGF0IGRldGVjdHMgd2hpY2ggc2Nyb2xsaW5nIG1vZHVsZSB3ZSdsbCBiZSB1c2luZ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnNtb290aCA9IG9wdGlvbnMuc21vb3RoIHx8IERFRkFVTFRTLnNtb290aDtcbiAgICAgICAgdGhpcy5zbW9vdGhNb2JpbGUgPSBvcHRpb25zLnNtb290aE1vYmlsZSB8fCBERUZBVUxUUy5zbW9vdGhNb2JpbGU7XG4gICAgICAgIHRoaXMubW9iaWxlQ29udGFpbmVyID0gb3B0aW9ucy5tb2JpbGVDb250YWluZXIgfHwgREVGQVVMVFMubW9iaWxlQ29udGFpbmVyO1xuICAgICAgICB0aGlzLmlzTW9iaWxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgJGh0bWxbMF0uc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgJGJvZHlbMF0uc2Nyb2xsVG9wID0gMDtcblxuICAgICAgICBpZiAoIXRoaXMuc21vb3RoTW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLmlzTW9iaWxlID0gKC9BbmRyb2lkfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlID0gKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNtb290aCA9PT0gdHJ1ZSAmJiAhdGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU21vb3RoU2Nyb2xsKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vYmlsZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29udGFpbmVyID0gdGhpcy5tb2JpbGVDb250YWluZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTY3JvbGwodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlLmluaXQoKTtcblxuICAgICAgICBjb25zdCAkc2Nyb2xsVG9PbkxvYWRFbCA9ICQoJy5qcy1zY3JvbGx0by1vbi1sb2FkJykuZmlyc3QoKTtcblxuICAgICAgICBpZiAoJHNjcm9sbFRvT25Mb2FkRWwubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAkZG9jdW1lbnQudHJpZ2dlckhhbmRsZXIoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdFdmVudC5TQ1JPTExUTycsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtOiAkc2Nyb2xsVG9PbkxvYWRFbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvY29tb3RpdmUgU21vb3RoIFNjcm9sbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCB7ICR3aW5kb3csICRkb2N1bWVudCwgJGh0bWwsIGh0bWwgfSBmcm9tICcuLi8uLi91dGlscy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgU2Nyb2xsLCB7IERFRkFVTFRTLCBFVkVOVCB9IGZyb20gJy4uL1Njcm9sbCc7XG5cbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgVmlydHVhbFNjcm9sbCBmcm9tICd2aXJ0dWFsLXNjcm9sbCc7XG5pbXBvcnQgeyBpc051bWVyaWMgfSBmcm9tICcuLi8uLi91dGlscy9pcyc7XG5cbi8qKlxuICogU21vb3RoIHNjcm9sbGluZyB1c2luZyBgc21vb3RoLXNjcm9sbGJhcmAuXG4gKiBCYXNlZCBvbiBgU2Nyb2xsYCBjbGFzcywgd2hpY2ggYWxsb3dzIGFuaW1hdGlvbnMgb2YgZWxlbWVudHMgb24gdGhlIHBhZ2VcbiAqIGFjY29yZGluZyB0byBzY3JvbGwgcG9zaXRpb24uXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFNjcm9sbCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLnNlY3Rpb25zU2VsZWN0b3IgPSAob3B0aW9ucy5zZWN0aW9ucykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMuc2VjdGlvbnMpIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChERUZBVUxUUy5zZWN0aW9ucyk7XG4gICAgICAgIHRoaXMuaXNSZXZlcnNlZCA9IG9wdGlvbnMucmV2ZXJzZWQgfHwgREVGQVVMVFMucmV2ZXJzZWQ7XG4gICAgICAgIHRoaXMuZ2V0RGlyZWN0aW9uID0gb3B0aW9ucy5nZXREaXJlY3Rpb24gfHwgREVGQVVMVFMuZ2V0RGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmdldFNwZWVkID0gb3B0aW9ucy5nZXRTcGVlZCB8fCBERUZBVUxUUy5nZXRTcGVlZDtcbiAgICAgICAgdGhpcy5pbmVydGlhID0gb3B0aW9ucy5pbmVydGlhIHx8IERFRkFVTFRTLmluZXJ0aWE7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmFyQ2xhc3NOYW1lID0gb3B0aW9ucy5zY3JvbGxCYXJDbGFzc05hbWUgfHwgREVGQVVMVFMuc2Nyb2xsQmFyQ2xhc3NOYW1lO1xuICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nQ2xhc3NOYW1lID0gb3B0aW9ucy5pc1Njcm9sbGluZ0NsYXNzTmFtZSB8fCBERUZBVUxUUy5pc1Njcm9sbGluZ0NsYXNzTmFtZTtcblxuICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHNjcm9sbGluZyBhbmltYXRpb25zXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gQWRkIGNsYXNzIHRvIHRoZSBkb2N1bWVudCB0byBrbm93IGlmIFNtb290aFNjcm9sbCBpcyBpbml0aWFsaXplZCAodG8gbWFuYWdlIG92ZXJmbG93IG9uIGNvbnRhaW5lcnMpXG4gICAgICAgICRodG1sLmFkZENsYXNzKCdoYXMtc21vb3RoLXNjcm9sbCcpO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmlydHVhbFNjcm9sbCh7XG4gICAgICAgICAgICBtb3VzZU11bHRpcGxpZXI6IChuYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZignV2luJykgPiAtMSkgPyAxIDogMC40LFxuICAgICAgICAgICAgdG91Y2hNdWx0aXBsaWVyOiA0LFxuICAgICAgICAgICAgZmlyZWZveE11bHRpcGxpZXI6IDMwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5lcnRpYSA9IHRoaXMuaW5lcnRpYSAqIDAuMTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbCA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuZ2V0U3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnNwZWVkID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEB0b2RvIDogdG8gb3B0aW1pemVcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5vbigoZSkgPT4ge1xuXG4gICAgICAgICAgICBpZighdGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YS55IC09IGUuZGVsdGFZO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLmlzU2Nyb2xsaW5nQ2xhc3NOYW1lKTtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA8IDApIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IDA7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5kZWx0YS55ID4gdGhpcy5pbnN0YW5jZS5saW1pdCkgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0gdGhpcy5pbnN0YW5jZS5saW1pdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTY3JvbGxMaW1pdCgpO1xuICAgICAgICB0aGlzLmluaXRTY3JvbGxCYXIoKTtcblxuICAgICAgICB0aGlzLmFkZFNlY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcblxuICAgICAgICB0aGlzLmV2ZW50cygpO1xuXG4gICAgICAgIHRoaXMucHJlbG9hZEltYWdlcygpO1xuXG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICogTGlzdGVuL3RyaWdnZXIgZXZlbnRzXG4gICAgKiovXG4gICAgZXZlbnRzKCkge1xuICAgICAgICAvLyBSZWJ1aWxkIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5SRUJVSUxELCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlVQREFURSwgKGV2ZW50LCBvcHRpb25zKSA9PiB0aGlzLnVwZGF0ZShvcHRpb25zKSk7XG5cbiAgICAgICAgLy8gU2Nyb2xsdG8gYnV0dG9uIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5DTElDSywgJy5qcy1zY3JvbGx0bycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9ICR0YXJnZXQuZGF0YSgnb2Zmc2V0Jyk7XG5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHNvdXJjZUVsZW06ICR0YXJnZXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0RWxlbTogb2Zmc2V0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlNDUk9MTFRPLCAoZXZlbnQpID0+IHRoaXMuc2Nyb2xsVG8oZXZlbnQub3B0aW9ucykpO1xuXG4gICAgICAgIC8vIFNldHVwIGRvbmVcbiAgICAgICAgJGRvY3VtZW50LnRyaWdnZXJIYW5kbGVyKHtcbiAgICAgICAgICAgIHR5cGU6IEVWRU5ULklTUkVBRFlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVzaXplIGV2ZW50XG4gICAgICAgICR3aW5kb3cub24oRVZFTlQuUkVTSVpFLCBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9LDYwMCkpO1xuICAgIH1cblxuICAgIGluaXRTY3JvbGxCYXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV3JhcHBlci5jbGFzc0xpc3QuYWRkKGAke3RoaXMuc2Nyb2xsQmFyQ2xhc3NOYW1lfV93cmFwcGVyYCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5zY3JvbGxCYXJDbGFzc05hbWV9YCk7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxiYXJXcmFwcGVyLmFwcGVuZCh0aGlzLnNjcm9sbGJhcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuc2Nyb2xsYmFyV3JhcHBlcik7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLnN0eWxlLmhlaWdodCA9IGAkeyh3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gdGhpcy5pbnN0YW5jZS5saW1pdH1weGA7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmFyTGltaXQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLnNjcm9sbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywoZSkgPT4gdGhpcy5nZXRTY3JvbGxCYXIoZSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsKGUpID0+IHRoaXMucmVsZWFzZVNjcm9sbEJhcihlKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLChlKSA9PiB0aGlzLm1vdmVTY3JvbGxCYXIoZSkpO1xuXG4gICAgfVxuXG4gICAgcmVpbml0U2Nyb2xsQmFyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5zdHlsZS5oZWlnaHQgPSBgJHsod2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmlubmVySGVpZ2h0KSAvIHRoaXMuaW5zdGFuY2UubGltaXR9cHhgO1xuICAgICAgICB0aGlzLnNjcm9sbEJhckxpbWl0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5zY3JvbGxiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgfVxuXG4gICAgZGVzdHJveVNjcm9sbEJhcigpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywoZSkgPT4gdGhpcy5nZXRTY3JvbGxCYXIoZSkpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsKGUpID0+IHRoaXMucmVsZWFzZVNjcm9sbEJhcihlKSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLChlKSA9PiB0aGlzLm1vdmVTY3JvbGxCYXIoZSkpO1xuICAgIH1cblxuICAgIGdldFNjcm9sbEJhcihlKSB7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyID0gdHJ1ZTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuaXNTY3JvbGxpbmdDbGFzc05hbWUpO1xuXG4gICAgfVxuXG4gICAgcmVsZWFzZVNjcm9sbEJhcihlKSB7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIgPSBmYWxzZTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuaXNTY3JvbGxpbmdDbGFzc05hbWUpO1xuICAgIH1cblxuICAgIG1vdmVTY3JvbGxCYXIoZSkge1xuICAgICAgICBpZih0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIpIHtcblxuICAgICAgICAgICAgbGV0IHkgPSAoZS5wYWdlWSAqIDEwMCAvICh3aW5kb3cuaW5uZXJIZWlnaHQpKSAqIHRoaXMuaW5zdGFuY2UubGltaXQgLyAxMDA7XG5cbiAgICAgICAgICAgIGlmKHkgPiAwICYmIHkgPCB0aGlzLmluc3RhbmNlLmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IGV4aXN0aW5nIHNlY3Rpb25zIGFuZCBmaW5kIGFsbCBzZWN0aW9ucy5cbiAgICAgKiBDYWxsZWQgb24gcGFnZSBsb2FkIGFuZCBhbnkgc3Vic2VxdWVudCB1cGRhdGVzLlxuICAgICAqL1xuXG4gICAgYWRkU2VjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuc2VjdGlvbnMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCB0aGlzLnNlY3Rpb25zU2VsZWN0b3IubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICBsZXQgc2VjdGlvbkVsZW1lbnQgPSB0aGlzLnNlY3Rpb25zU2VsZWN0b3JbaV07XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gc2VjdGlvbkVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gKHdpbmRvdy5pbm5lckhlaWdodCAqIDEuNSkgLSB0aGlzLmdldFRyYW5zbGF0ZShzZWN0aW9uRWxlbWVudCkueTtcbiAgICAgICAgICAgIGxldCBsaW1pdCA9IG9mZnNldCArIHNlY3Rpb25FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAyKTtcblxuICAgICAgICAgICAgbGV0IGluVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc2VjdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluc3RhbmNlLnNjcm9sbC55ID4gb2Zmc2V0ICYmIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPCBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBpblZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBzZWN0aW9uRWxlbWVudCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICAgICAgICBsaW1pdDogbGltaXQsXG4gICAgICAgICAgICAgICAgaW5WaWV3OiBpblZpZXdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZWN0aW9ucy5wdXNoKHNlY3Rpb24pO1xuXG4gICAgICAgICAgICBpZihpID09PSAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRlYnVnID0ge1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IHNlY3Rpb25FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAxLjUpLFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxWYWx1ZTogcGFyc2VJbnQodGhpcy5pbnN0YW5jZS5zY3JvbGwueSksXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBsaW1pdCxcbiAgICAgICAgICAgICAgICAgICAgZmluYWw6IG9mZnNldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgZXhpc3RpbmcgZWxlbWVudHMgYW5kIGZpbmQgYWxsIGFuaW1hdGFibGUgZWxlbWVudHMuXG4gICAgICogQ2FsbGVkIG9uIHBhZ2UgbG9hZCBhbmQgYW55IHN1YnNlcXVlbnQgdXBkYXRlcy5cbiAgICAgKi9cbiAgICBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cyA9IFtdO1xuXG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDAgOyB5IDwgdGhpcy5zZWN0aW9ucy5sZW5ndGg7IHkgKyspIHtcblxuICAgICAgICAgICAgY29uc3QgJGVsZW1lbnRzID0gJCh0aGlzLnNlbGVjdG9yLCB0aGlzLnNlY3Rpb25zW3ldLmVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gJGVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkgKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgJGVsZW1lbnQgPSAkZWxlbWVudHMuZXEoaSk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRTcGVlZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtc3BlZWQnKSA/ICRlbGVtZW50LmF0dHIoJ2RhdGEtc3BlZWQnKSAvIDEwIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRQb3NpdGlvbiA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtcG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFRhcmdldCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRIb3Jpem9udGFsID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLWhvcml6b250YWwnKSA9PT0gJ3N0cmluZycpO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50U3RpY2t5ID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLXN0aWNreScpID09PSAnc3RyaW5nJyk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRTdGlja3lUYXJnZXQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLXN0aWNreS10YXJnZXQnKTtcbiAgICAgICAgICAgICAgICBsZXQgJHRhcmdldCA9IChlbGVtZW50VGFyZ2V0ICYmICQoZWxlbWVudFRhcmdldCkubGVuZ3RoKSA/ICQoZWxlbWVudFRhcmdldCkgOiAkZWxlbWVudDtcblxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IHRyYW5zZm9ybSB0byBnZXQgdGhlIHJlYWwgb2Zmc2V0XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRPZmZzZXQgPSBwYXJzZUludCgkdGFyZ2V0Lm9mZnNldCgpLnRvcCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpO1xuXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc2VjdGlvbnNbeV0uaW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPZmZzZXQgPSBwYXJzZUludCgkdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIHRoaXMuZ2V0VHJhbnNsYXRlKHRoaXMuc2VjdGlvbnNbeV0uZWxlbWVudCkueSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRMaW1pdCA9IGVsZW1lbnRPZmZzZXQgKyAkdGFyZ2V0Lm91dGVySGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFZpZXdwb3J0T2Zmc2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgJGVsZW1lbnQuYXR0cignZGF0YS12aWV3cG9ydC1vZmZzZXQnKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICBlbGVtZW50Vmlld3BvcnRPZmZzZXQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLXZpZXdwb3J0LW9mZnNldCcpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9NYW5hZ2UgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudENhbGxiYWNrU3RyaW5nID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLWNhbGxiYWNrJykgPT09ICdzdHJpbmcnKSA/ICRlbGVtZW50LmF0dHIoJ2RhdGEtY2FsbGJhY2snKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRDYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZihlbGVtZW50Q2FsbGJhY2tTdHJpbmcgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBldmVudCA9IGVsZW1lbnRDYWxsYmFja1N0cmluZy5zdWJzdHIoMCwgZWxlbWVudENhbGxiYWNrU3RyaW5nLmluZGV4T2YoJygnKSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb25zU3RyaW5nID0gZWxlbWVudENhbGxiYWNrU3RyaW5nLnN1YnN0cihlbGVtZW50Q2FsbGJhY2tTdHJpbmcuaW5kZXhPZignKCcpLGVsZW1lbnRDYWxsYmFja1N0cmluZy5sZW5ndGggLSBldmVudC5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcgPSBvcHRpb25zU3RyaW5nLnJlcGxhY2UoJygnLCcnKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1N0cmluZyA9IG9wdGlvbnNTdHJpbmcucmVwbGFjZSgnKScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gb3B0aW9uc1N0cmluZy5zcGxpdCgnfCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9wdGlvbnMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbnNbal0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblswXSA9IG9wdGlvblswXS5yZXBsYWNlKCcgJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhbHVlIGlzIGEgYm9vbGVhblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uWzFdID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9wdGlvblsxXSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhbHVlIGlzIG51bWVyaWNcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoL15cXGQrJC8udGVzdChvcHRpb25bMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gcGFyc2VJbnQob3B0aW9uWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgYSBTdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IG9wdGlvblsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtvcHRpb25bMF1dID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudENhbGxiYWNrID0ge2V2ZW50OmV2ZW50LCBvcHRpb25zOm9ian07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgZWxlbWVudHMgc3RheXMgdmlzaWJsZSBhZnRlciBzY3JvbGxpbmcgcGFzdCBpdFxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50UmVwZWF0ID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLXJlcGVhdCcpID09PSAnc3RyaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudEluVmlld0NsYXNzID0gJGVsZW1lbnQuYXR0cignZGF0YS1pbnZpZXctY2xhc3MnKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnRJblZpZXdDbGFzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEluVmlld0NsYXNzID0gJ2lzLXNob3cnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZWxlbWVudFRhcmdldCAmJiAkZWxlbWVudC5hdHRyKCdkYXRhLXRyYW5zZm9ybScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPZmZzZXQgLT0gcGFyc2VJbnQoSlNPTi5wYXJzZSgkZWxlbWVudC5hdHRyKCdkYXRhLXRyYW5zZm9ybScpKS55KTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gZWxlbWVudE9mZnNldCArICR0YXJnZXQub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFN0aWNreSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnRTdGlja3lUYXJnZXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGltaXQgPSBJbmZpbml0eTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaW1pdCA9ICQoZWxlbWVudFN0aWNreVRhcmdldCkub2Zmc2V0KCkudG9wIC0gJGVsZW1lbnQuaGVpZ2h0KCkgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6ICRlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBpblZpZXdDbGFzczogZWxlbWVudEluVmlld0NsYXNzLFxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogZWxlbWVudExpbWl0LFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IE1hdGgucm91bmQoZWxlbWVudE9mZnNldCksXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdDogZWxlbWVudFJlcGVhdCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGVsZW1lbnRDYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnRPZmZzZXQ6IGVsZW1lbnRWaWV3cG9ydE9mZnNldFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBGb3IgcGFyYWxsYXggYW5pbWF0ZWQgZWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFNwZWVkICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFBvc2l0aW9uID0gJGVsZW1lbnQuYXR0cignZGF0YS1wb3NpdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudEhvcml6b250YWwgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtaG9yaXpvbnRhbCcpID09PSAnc3RyaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50TWlkZGxlID0gKChlbGVtZW50TGltaXQgLSBlbGVtZW50T2Zmc2V0KSAvIDIpICsgZWxlbWVudE9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnREZWxheSA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtZGVsYXknKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50Lmhvcml6b250YWwgPSBlbGVtZW50SG9yaXpvbnRhbDtcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5taWRkbGUgPSBlbGVtZW50TWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50Lm9mZnNldCA9IGVsZW1lbnRPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQucG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc3BlZWQgPSBlbGVtZW50U3BlZWRcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5kZWxheSA9IGVsZW1lbnREZWxheTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc3RpY2t5ID0gZWxlbWVudFN0aWNreTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFN0aWNreSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9sYXVuY2ggdGhlIHRvZ2dsZSBmdW5jdGlvbiB0byBzZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBzdGlja3kgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVFbGVtZW50KG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjbGFzcy90cmFuc2Zvcm0gYW5pbWF0aW9ucywgYW5kIHVwZGF0ZSB0aGUgZ2xvYmFsIHNjcm9sbCBwb3NpdGlvbm5pbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBpc0ZpcnN0Q2FsbCBEZXRlcm1pbmVzIGlmIHRoaXMgaXMgdGhlIGZpcnN0IG9jY3VyZW5jZSBvZiBtZXRob2QgYmVpbmcgY2FsbGVkXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgc3RhdHVzICAgICAgT3B0aW9uYWwgc3RhdHVzIG9iamVjdCByZWNlaXZlZCB3aGVuIG1ldGhvZCBpc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxlZCBieSBzbW9vdGgtc2Nyb2xsYmFyIGluc3RhbmNlIGxpc3RlbmVyLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyKGlzRmlyc3RDYWxsLCBlKSB7XG4gICAgICAgIHRoaXMucmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT50aGlzLnJlbmRlcigpKTtcblxuICAgICAgICBpZih0aGlzLmlzU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gdGhpcy5sZXJwKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnksdGhpcy5pbnN0YW5jZS5kZWx0YS55LCB0aGlzLmluZXJ0aWEpO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gdGhpcy5sZXJwKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnksdGhpcy5pbnN0YW5jZS5kZWx0YS55LCAwLjIpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gdGhpcy5sZXJwKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnksdGhpcy5pbnN0YW5jZS5kZWx0YS55LCB0aGlzLmluZXJ0aWEgKiAwLjUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc2VjdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPiB0aGlzLnNlY3Rpb25zW2ldLm9mZnNldCAmJiB0aGlzLmluc3RhbmNlLnNjcm9sbC55IDwgdGhpcy5zZWN0aW9uc1tpXS5saW1pdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGBtYXRyaXgoMSwwLDAsMSwwLCR7LXRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnl9KWBcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbnNbaV0uZWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zW2ldLmVsZW1lbnQuc3R5bGUuTW96VHJhbnNmb3JtID0gdHJhbnNmb3JtXG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXS5lbGVtZW50LnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtXG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXS5lbGVtZW50LnN0eWxlLk9UcmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zW2ldLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbnNbaV0uZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zW2ldLmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5nZXREaXJlY3Rpb24pe1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA+IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55IDwgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uID0gJ3VwJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmdldFNwZWVkKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgIT09IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5zcGVlZCA9ICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgLSB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSAvIChEYXRlLm5vdygpIC0gdGhpcy50aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IHRoaXMuaW5zdGFuY2UuZGVsdGEueTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5zcGVlZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihNYXRoLmFicyh0aGlzLmluc3RhbmNlLnNjcm9sbC55IC0gdGhpcy5pbnN0YW5jZS5kZWx0YS55KSA8IDEgKSB7XG4gICAgICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5pc1Njcm9sbGluZ0NsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKGlzRmlyc3RDYWxsKTtcbiAgICAgICAgdGhpcy5hbmltYXRlRWxlbWVudHMoKTtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5vblNjcm9sbCh0aGlzLmluc3RhbmNlKVxuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cbiAgICAgICAgLy8gc2Nyb2xsYmFyIHRyYW5zbGF0aW9uXG4gICAgICAgIGxldCBzY3JvbGxCYXJUcmFuc2xhdGlvbiA9ICh0aGlzLmluc3RhbmNlLnNjcm9sbC55IC8gdGhpcy5pbnN0YW5jZS5saW1pdCkgKiB0aGlzLnNjcm9sbEJhckxpbWl0XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCR7c2Nyb2xsQmFyVHJhbnNsYXRpb259cHgsMClgXG4gICAgfVxuXG4gICAgbGVycCAoc3RhcnQsIGVuZCwgYW10KXtcbiAgICAgICAgcmV0dXJuICgxLWFtdCkqc3RhcnQrYW10KmVuZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIGRlc2lyZWQgdGFyZ2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzY3JvbGxUbyhvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0ICR0YXJnZXRFbGVtID0gb3B0aW9ucy50YXJnZXRFbGVtO1xuICAgICAgICBjb25zdCAkc291cmNlRWxlbSA9IG9wdGlvbnMuc291cmNlRWxlbTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0RWxlbSA9IG9wdGlvbnMub2Zmc2V0RWxlbTtcbiAgICAgICAgbGV0IHRhcmdldE9mZnNldCA9IGlzTnVtZXJpYyhvcHRpb25zLnRhcmdldE9mZnNldCkgPyBwYXJzZUludChvcHRpb25zLnRhcmdldE9mZnNldCkgOiAwO1xuICAgICAgICBjb25zdCBkZWxheSA9IGlzTnVtZXJpYyhvcHRpb25zLmRlbGF5KSA/IHBhcnNlSW50KG9wdGlvbnMuZGVsYXkpIDogMDtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBpc051bWVyaWMob3B0aW9ucy5zcGVlZCkgPyBwYXJzZUludChvcHRpb25zLnNwZWVkKSA6IDkwMDtcbiAgICAgICAgY29uc3QgdG9Ub3AgPSBvcHRpb25zLnRvVG9wO1xuICAgICAgICBjb25zdCB0b0JvdHRvbSA9IG9wdGlvbnMudG9Cb3R0b207XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgICAgIGlmICh0eXBlb2YgJHRhcmdldEVsZW0gPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiAkc291cmNlRWxlbSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRhcmdldE9mZnNldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignWW91IG11c3Qgc3BlY2lmeSBhdCBsZWFzdCBvbmUgcGFyYW1ldGVyLicpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mICR0YXJnZXRFbGVtICE9PSAndW5kZWZpbmVkJyAmJiAkdGFyZ2V0RWxlbSBpbnN0YW5jZW9mIGpRdWVyeSAmJiAkdGFyZ2V0RWxlbS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAkdGFyZ2V0RWxlbS5vZmZzZXQoKS50b3AgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICsgdGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkc291cmNlRWxlbSAhPT0gJ3VuZGVmaW5lZCcgJiYgJHNvdXJjZUVsZW0gaW5zdGFuY2VvZiBqUXVlcnkgJiYgJHNvdXJjZUVsZW0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHRhcmdldERhdGEgPSAnJztcblxuICAgICAgICAgICAgaWYgKCRzb3VyY2VFbGVtLmF0dHIoJ2RhdGEtdGFyZ2V0JykpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXREYXRhID0gJHNvdXJjZUVsZW0uYXR0cignZGF0YS10YXJnZXQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0YSA9ICRzb3VyY2VFbGVtLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gJCh0YXJnZXREYXRhKS5vZmZzZXQoKS50b3AgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICsgdGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXRFbGVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb2Zmc2V0ID0gJChvZmZzZXRFbGVtKS5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0T2Zmc2V0IC0gb2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvVG9wID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRvQm90dG9tID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0aGlzLmluc3RhbmNlLmxpbWl0O1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSB0YXJnZXRPZmZzZXQ7XG4gICAgICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5pc1Njcm9sbGluZ0NsYXNzTmFtZSk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHNjcm9sbCBiYXIgbGltaXRcbiAgICAgKi9cbiAgICBzZXRTY3JvbGxMaW1pdCgpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5saW1pdCA9IHRoaXMuJGNvbnRhaW5lclswXS5vZmZzZXRIZWlnaHQgLSB0aGlzLndpbmRvd0hlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBDU1MgdHJhbnNmb3JtIHByb3BlcnRpZXMgb24gYW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gICRlbGVtZW50IFRhcmdldHRlZCBqUXVlcnkgZWxlbWVudFxuICAgICAqIEBwYXJhbSAge2ludH0gICAgIHggICAgICAgIFRyYW5zbGF0ZSB2YWx1ZVxuICAgICAqIEBwYXJhbSAge2ludH0gICAgIHkgICAgICAgIFRyYW5zbGF0ZSB2YWx1ZVxuICAgICAqIEBwYXJhbSAge2ludH0gICAgIHogICAgICAgIFRyYW5zbGF0ZSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdHJhbnNmb3JtRWxlbWVudCgkZWxlbWVudCwgeCwgeSwgeiwgZGVsYXkpIHtcbiAgICAgICAgLy8gRGVmYXVsdHNcbiAgICAgICAgeCA9IHBhcnNlSW50KHgqMTAwMDApLzEwMDAwIHx8IDA7XG4gICAgICAgIHkgPSBwYXJzZUludCh5KjEwMDAwKS8xMDAwMCB8fCAwO1xuICAgICAgICB6ID0gcGFyc2VJbnQoeioxMDAwMCkvMTAwMDAgfHwgMDtcblxuICAgICAgICBpZighZGVsYXkpIHtcbiAgICAgICAgICAgIC8vIFRyYW5zbGF0ZSBhbmQgc3RvcmUgdGhlIHBvc2l0aW9ubmluZyBhcyBgZGF0YWBcbiAgICAgICAgICAgICRlbGVtZW50LmNzcyh7XG4gICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAke3p9cHgpYCxcbiAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgJHt6fXB4KWAsXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgJHt6fXB4KWBcbiAgICAgICAgICAgIH0pLmF0dHIoJ2RhdGEtdHJhbnNmb3JtJyxge1wieFwiOiAke3h9LFwieVwiOiAke3l9LFwielwiOiAke3p9fWApXG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gdGhpcy5nZXRUcmFuc2xhdGUoJGVsZW1lbnRbMF0pO1xuICAgICAgICAgICAgbGV0IGxlcnBZID0gdGhpcy5sZXJwKHN0YXJ0LnksIHksIGRlbGF5KTtcbiAgICAgICAgICAgIGxldCBsZXJwWCA9IHRoaXMubGVycChzdGFydC54LCB4LCBkZWxheSk7XG5cbiAgICAgICAgICAgICRlbGVtZW50LmNzcyh7XG4gICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKCR7cGFyc2VJbnQobGVycFgqMTAwMDApLzEwMDAwfXB4LCAke3BhcnNlSW50KGxlcnBZICogMTAwMDApIC8gMTAwMDB9cHgsICR7en1weClgLFxuICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKCR7cGFyc2VJbnQobGVycFgqMTAwMDApLzEwMDAwfXB4LCAke3BhcnNlSW50KGxlcnBZICogMTAwMDApIC8gMTAwMDB9cHgsICR7en1weClgLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiBgdHJhbnNsYXRlM2QoJHtwYXJzZUludChsZXJwWCoxMDAwMCkvMTAwMDB9cHgsICR7cGFyc2VJbnQobGVycFkgKiAxMDAwMCkgLyAxMDAwMH1weCwgJHt6fXB4KWBcbiAgICAgICAgICAgIH0pLmF0dHIoJ2RhdGEtdHJhbnNmb3JtJyxge1wieFwiOiAke3BhcnNlSW50KGxlcnBYKjEwMDAwKS8xMDAwMH0sXCJ5XCI6ICR7cGFyc2VJbnQobGVycFkgKiAxMDAwMCkgLyAxMDAwMH0sXCJ6XCI6ICR7en19YClcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2V0VHJhbnNsYXRlKGVsKXtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0ge31cbiAgICAgICAgaWYoIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtIHx8IHN0eWxlLndlYmtpdFRyYW5zZm9ybSB8fCBzdHlsZS5tb3pUcmFuc2Zvcm07XG5cbiAgICAgICAgbGV0IG1hdCA9IHRyYW5zZm9ybS5tYXRjaCgvXm1hdHJpeDNkXFwoKC4rKVxcKSQvKTtcbiAgICAgICAgaWYobWF0KSByZXR1cm4gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbMTNdKTtcbiAgICAgICAgbWF0ID0gdHJhbnNmb3JtLm1hdGNoKC9ebWF0cml4XFwoKC4rKVxcKSQvKTtcbiAgICAgICAgdHJhbnNsYXRlLnggPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVs0XSkgOiAwO1xuICAgICAgICB0cmFuc2xhdGUueSA9IG1hdCA/IHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzVdKSA6IDA7XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb29wIHRocm91Z2ggYWxsIHBhcmFsbGF4LWFibGUgZWxlbWVudHMgYW5kIGFwcGx5IHRyYW5zZm9ybSBtZXRob2QocykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBpc0ZpcnN0Q2FsbCBEZXRlcm1pbmVzIGlmIHRoaXMgaXMgdGhlIGZpcnN0IG9jY3VyZW5jZSBvZiBtZXRob2QgYmVpbmcgY2FsbGVkXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB0cmFuc2Zvcm1FbGVtZW50cyhpc0ZpcnN0Q2FsbCkge1xuICAgICAgICBpZiAodGhpcy5wYXJhbGxheEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0aGlzLndpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbE1pZGRsZSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0aGlzLndpbmRvd01pZGRsZTtcblxuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gdGhpcy5wYXJhbGxheEVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ZXMgPSBbXTtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJFbCA9IHRoaXMucGFyYWxsYXhFbGVtZW50c1tpXTtcblxuICAgICAgICAgICAgICAgIGxldCB0cmFuc2Zvcm1EaXN0YW5jZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIGlmIHRoZSBlbGVtZW50IGlzIGluIHZpZXdcbiAgICAgICAgICAgICAgICBsZXQgaW5WaWV3ID0gKChzY3JvbGxCb3R0b20gKyB0aGlzLndpbmRvd0hlaWdodCkgPj0gY3VyRWwub2Zmc2V0ICYmIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPD0gY3VyRWwubGltaXQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVFbGVtZW50KGN1ckVsLCBpKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0ZpcnN0Q2FsbCAmJiAhaW5WaWV3ICYmIGN1ckVsLnNwZWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpZmZlcmVudCBjYWxjdWxhdGlvbnMgaWYgaXQgaXMgdGhlIGZpcnN0IGNhbGwgYW5kIHRoZSBpdGVtIGlzIG5vdCBpbiB0aGUgdmlld1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRWwucG9zaXRpb24gIT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IChjdXJFbC5vZmZzZXQgLSB0aGlzLndpbmRvd01pZGRsZSAtIGN1ckVsLm1pZGRsZSkgKiAtY3VyRWwuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBlbGVtZW50IGlzIGluIHZpZXdcbiAgICAgICAgICAgICAgICBpZiAoaW5WaWV3ICYmIGN1ckVsLnNwZWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY3VyRWwucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICogLWN1ckVsLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAodGhpcy5pbnN0YW5jZS5saW1pdCAtIHNjcm9sbEJvdHRvbSArIHRoaXMud2luZG93SGVpZ2h0KSAqIGN1ckVsLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAoc2Nyb2xsTWlkZGxlIC0gY3VyRWwubWlkZGxlKSAqIC1jdXJFbC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVHJhbnNmb3JtIGhvcml6b250YWwgT1IgdmVydGljYWwuIERlZmF1bHRzIHRvIHZlcnRpY2FsXG4gICAgICAgICAgICAgICAgaWYgKGlzTnVtZXJpYyh0cmFuc2Zvcm1EaXN0YW5jZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgKGN1ckVsLmhvcml6b250YWwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudChjdXJFbC4kZWxlbWVudCwgdHJhbnNmb3JtRGlzdGFuY2UsMCwwLCBjdXJFbC5kZWxheSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50KGN1ckVsLiRlbGVtZW50LCAwLCB0cmFuc2Zvcm1EaXN0YW5jZSwwLCBjdXJFbC5kZWxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGVsZW1lbnRzIGFuZCByZWNhbGN1bGF0ZSBhbGwgdGhlIHBvc2l0aW9ucyBvbiB0aGUgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICB1cGRhdGUob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7XG4gICAgICAgIHRoaXMud2luZG93TWlkZGxlID0gdGhpcy53aW5kb3dIZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLnNldFNjcm9sbExpbWl0KCk7XG5cbiAgICAgICAgdGhpcy5hZGRTZWN0aW9ucygpO1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudHModHJ1ZSk7XG4gICAgICAgIHRoaXMucmVpbml0U2Nyb2xsQmFyKCk7XG5cbiAgICB9XG5cbiAgICBwcmVsb2FkSW1hZ2VzKCkge1xuICAgICAgICBjb25zdCBpbWFnZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpKVxuXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGltYWdlcy5zcGxpY2UoaW1hZ2VzLmluZGV4T2YoaW1hZ2UpLCAxKVxuICAgICAgICAgICAgICAgIGltYWdlcy5sZW5ndGggPT09IDAgJiYgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGltZy5zcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICAgICAgJGh0bWwucmVtb3ZlQ2xhc3MoJ2hhcy1zbW9vdGgtc2Nyb2xsJyk7XG4gICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJXcmFwcGVyLnJlbW92ZSgpO1xuXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmKTtcblxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbn1cbiIsImNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xuXG5jb25zdCAkZG9jdW1lbnQgICAgPSAkKGRvY3VtZW50KTtcbmNvbnN0ICR3aW5kb3cgICAgICA9ICQod2luZG93KTtcbmNvbnN0ICRodG1sICAgICAgICA9ICQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5yZW1vdmVDbGFzcygnaGFzLW5vLWpzJykuYWRkQ2xhc3MoJ2hhcy1qcycpO1xuY29uc3QgJGJvZHkgICAgICAgID0gJChkb2N1bWVudC5ib2R5KTtcbmNvbnN0IGh0bWwgICAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF07XG5jb25zdCBib2R5ICAgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuXG5jb25zdCBpc0RlYnVnICAgICAgPSAhISRodG1sLmRhdGEoJ2RlYnVnJyk7XG5cbmV4cG9ydCB7IERBVEFfQVBJX0tFWSwgJGRvY3VtZW50LCAkd2luZG93LCAkaHRtbCwgJGJvZHksIGh0bWwsIGlzRGVidWcgfTtcbiIsInZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgYXJyYXlMaWtlUGF0dGVybiA9IC9eXFxbb2JqZWN0ICg/OkFycmF5fEZpbGVMaXN0KVxcXSQvO1xuXG4vLyB0aGFua3MsIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2luc3RhbmNlb2YtY29uc2lkZXJlZC1oYXJtZnVsLW9yLWhvdy10by13cml0ZS1hLXJvYnVzdC1pc2FycmF5L1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkgKCB0aGluZyApIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCggdGhpbmcgKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlMaWtlICggb2JqICkge1xuICAgIHJldHVybiBhcnJheUxpa2VQYXR0ZXJuLnRlc3QoIHRvU3RyaW5nLmNhbGwoIG9iaiApICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VxdWFsICggYSwgYiApIHtcbiAgICBpZiAoIGEgPT09IG51bGwgJiYgYiA9PT0gbnVsbCApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCB0eXBlb2YgYSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIGIgPT09ICdvYmplY3QnICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEgPT09IGI7XG59XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTgwODIvdmFsaWRhdGUtbnVtYmVycy1pbi1qYXZhc2NyaXB0LWlzbnVtZXJpY1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtZXJpYyAoIHRoaW5nICkge1xuICAgIHJldHVybiAhaXNOYU4oIHBhcnNlRmxvYXQoIHRoaW5nICkgKSAmJiBpc0Zpbml0ZSggdGhpbmcgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0ICggdGhpbmcgKSB7XG4gICAgcmV0dXJuICggdGhpbmcgJiYgdG9TdHJpbmcuY2FsbCggdGhpbmcgKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oIHRoaW5nICkge1xuICAgIHZhciBnZXRUeXBlID0ge307XG4gICAgcmV0dXJuIHRoaW5nICYmIGdldFR5cGUudG9TdHJpbmcuY2FsbCh0aGluZykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmKCFvYmplY3QpIHJldHVybiBjb25zb2xlLndhcm4oJ2JpbmRBbGwgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50LicpO1xuXG4gICAgdmFyIGZ1bmN0aW9ucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICBpZiAoZnVuY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgIGZvciAodmFyIG1ldGhvZCBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBtZXRob2QpKSB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIG9iamVjdFttZXRob2RdID09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbChvYmplY3RbbWV0aG9kXSkgPT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9ucy5wdXNoKG1ldGhvZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGZ1bmN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uc1tpXTtcbiAgICAgICAgb2JqZWN0W2ZdID0gYmluZChvYmplY3RbZl0sIG9iamVjdCk7XG4gICAgfVxufTtcblxuLypcbiAgICBGYXN0ZXIgYmluZCB3aXRob3V0IHNwZWNpZmljLWNhc2UgY2hlY2tpbmcuIChzZWUgaHR0cHM6Ly9jb2RlcndhbGwuY29tL3Avb2kzajN3KS5cbiAgICBiaW5kQWxsIGlzIG9ubHkgbmVlZGVkIGZvciBldmVudHMgYmluZGluZyBzbyBubyBuZWVkIHRvIG1ha2Ugc2xvdyBmaXhlcyBmb3IgY29uc3RydWN0b3JcbiAgICBvciBwYXJ0aWFsIGFwcGxpY2F0aW9uLlxuKi9cbmZ1bmN0aW9uIGJpbmQoZnVuYywgY29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgfTtcbn0iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuOS4yXG4oZnVuY3Rpb24oKSB7XG4gIHZhciByb290O1xuXG4gIHJvb3QgPSB0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBleHBvcnRzICE9PSBudWxsID8gZXhwb3J0cyA6IHRoaXM7XG5cbiAgcm9vdC5MZXRoYXJneSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBMZXRoYXJneShzdGFiaWxpdHksIHNlbnNpdGl2aXR5LCB0b2xlcmFuY2UsIGRlbGF5KSB7XG4gICAgICB0aGlzLnN0YWJpbGl0eSA9IHN0YWJpbGl0eSAhPSBudWxsID8gTWF0aC5hYnMoc3RhYmlsaXR5KSA6IDg7XG4gICAgICB0aGlzLnNlbnNpdGl2aXR5ID0gc2Vuc2l0aXZpdHkgIT0gbnVsbCA/IDEgKyBNYXRoLmFicyhzZW5zaXRpdml0eSkgOiAxMDA7XG4gICAgICB0aGlzLnRvbGVyYW5jZSA9IHRvbGVyYW5jZSAhPSBudWxsID8gMSArIE1hdGguYWJzKHRvbGVyYW5jZSkgOiAxLjE7XG4gICAgICB0aGlzLmRlbGF5ID0gZGVsYXkgIT0gbnVsbCA/IGRlbGF5IDogMTUwO1xuICAgICAgdGhpcy5sYXN0VXBEZWx0YXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMubGFzdERvd25EZWx0YXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDEsIHJlZiA9IHRoaXMuc3RhYmlsaXR5ICogMjsgMSA8PSByZWYgPyBpIDw9IHJlZiA6IGkgPj0gcmVmOyAxIDw9IHJlZiA/IGkrKyA6IGktLSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGxhc3REZWx0YTtcbiAgICAgIGUgPSBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcbiAgICAgIGlmIChlLndoZWVsRGVsdGEgIT0gbnVsbCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLndoZWVsRGVsdGE7XG4gICAgICB9IGVsc2UgaWYgKGUuZGVsdGFZICE9IG51bGwpIHtcbiAgICAgICAgbGFzdERlbHRhID0gZS5kZWx0YVkgKiAtNDA7XG4gICAgICB9IGVsc2UgaWYgKChlLmRldGFpbCAhPSBudWxsKSB8fCBlLmRldGFpbCA9PT0gMCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLmRldGFpbCAqIC00MDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wLnB1c2goRGF0ZS5ub3coKSk7XG4gICAgICB0aGlzLmRlbHRhc1RpbWVzdGFtcC5zaGlmdCgpO1xuICAgICAgaWYgKGxhc3REZWx0YSA+IDApIHtcbiAgICAgICAgdGhpcy5sYXN0VXBEZWx0YXMucHVzaChsYXN0RGVsdGEpO1xuICAgICAgICB0aGlzLmxhc3RVcERlbHRhcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0luZXJ0aWEoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhc3REb3duRGVsdGFzLnB1c2gobGFzdERlbHRhKTtcbiAgICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0luZXJ0aWEoLTEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuaXNJbmVydGlhID0gZnVuY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgbGFzdERlbHRhcywgbGFzdERlbHRhc05ldywgbGFzdERlbHRhc09sZCwgbmV3QXZlcmFnZSwgbmV3U3VtLCBvbGRBdmVyYWdlLCBvbGRTdW07XG4gICAgICBsYXN0RGVsdGFzID0gZGlyZWN0aW9uID09PSAtMSA/IHRoaXMubGFzdERvd25EZWx0YXMgOiB0aGlzLmxhc3RVcERlbHRhcztcbiAgICAgIGlmIChsYXN0RGVsdGFzWzBdID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kZWx0YXNUaW1lc3RhbXBbKHRoaXMuc3RhYmlsaXR5ICogMikgLSAyXSArIHRoaXMuZGVsYXkgPiBEYXRlLm5vdygpICYmIGxhc3REZWx0YXNbMF0gPT09IGxhc3REZWx0YXNbKHRoaXMuc3RhYmlsaXR5ICogMikgLSAxXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsYXN0RGVsdGFzT2xkID0gbGFzdERlbHRhcy5zbGljZSgwLCB0aGlzLnN0YWJpbGl0eSk7XG4gICAgICBsYXN0RGVsdGFzTmV3ID0gbGFzdERlbHRhcy5zbGljZSh0aGlzLnN0YWJpbGl0eSwgdGhpcy5zdGFiaWxpdHkgKiAyKTtcbiAgICAgIG9sZFN1bSA9IGxhc3REZWx0YXNPbGQucmVkdWNlKGZ1bmN0aW9uKHQsIHMpIHtcbiAgICAgICAgcmV0dXJuIHQgKyBzO1xuICAgICAgfSk7XG4gICAgICBuZXdTdW0gPSBsYXN0RGVsdGFzTmV3LnJlZHVjZShmdW5jdGlvbih0LCBzKSB7XG4gICAgICAgIHJldHVybiB0ICsgcztcbiAgICAgIH0pO1xuICAgICAgb2xkQXZlcmFnZSA9IG9sZFN1bSAvIGxhc3REZWx0YXNPbGQubGVuZ3RoO1xuICAgICAgbmV3QXZlcmFnZSA9IG5ld1N1bSAvIGxhc3REZWx0YXNOZXcubGVuZ3RoO1xuICAgICAgaWYgKE1hdGguYWJzKG9sZEF2ZXJhZ2UpIDwgTWF0aC5hYnMobmV3QXZlcmFnZSAqIHRoaXMudG9sZXJhbmNlKSAmJiAodGhpcy5zZW5zaXRpdml0eSA8IE1hdGguYWJzKG5ld0F2ZXJhZ2UpKSkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuc2hvd0xhc3RVcERlbHRhcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFzdFVwRGVsdGFzO1xuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuc2hvd0xhc3REb3duRGVsdGFzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0RG93bkRlbHRhcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIExldGhhcmd5O1xuXG4gIH0pKCk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiZnVuY3Rpb24gRSAoKSB7XG4gIC8vIEtlZXAgdGhpcyBlbXB0eSBzbyBpdCdzIGVhc2llciB0byBpbmhlcml0IGZyb21cbiAgLy8gKHZpYSBodHRwczovL2dpdGh1Yi5jb20vbGlwc21hY2sgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2lzc3Vlcy8zKVxufVxuXG5FLnByb3RvdHlwZSA9IHtcbiAgb246IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcblxuICAgIChlW25hbWVdIHx8IChlW25hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgIGN0eDogY3R4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvbmNlOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiBsaXN0ZW5lciAoKSB7XG4gICAgICBzZWxmLm9mZihuYW1lLCBsaXN0ZW5lcik7XG4gICAgICBjYWxsYmFjay5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVyLl8gPSBjYWxsYmFja1xuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIGxpc3RlbmVyLCBjdHgpO1xuICB9LFxuXG4gIGVtaXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGRhdGEgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGV2dEFyciA9ICgodGhpcy5lIHx8ICh0aGlzLmUgPSB7fSkpW25hbWVdIHx8IFtdKS5zbGljZSgpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuID0gZXZ0QXJyLmxlbmd0aDtcblxuICAgIGZvciAoaTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBldnRBcnJbaV0uZm4uYXBwbHkoZXZ0QXJyW2ldLmN0eCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb2ZmOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuICAgIHZhciBldnRzID0gZVtuYW1lXTtcbiAgICB2YXIgbGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKGV2dHMgJiYgY2FsbGJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChldnRzW2ldLmZuICE9PSBjYWxsYmFjayAmJiBldnRzW2ldLmZuLl8gIT09IGNhbGxiYWNrKVxuICAgICAgICAgIGxpdmVFdmVudHMucHVzaChldnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgZnJvbSBxdWV1ZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAgLy8gU3VnZ2VzdGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9sYXpkXG4gICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2NvbW1pdC9jNmViZmFhOWJjOTczYjMzZDExMGE4NGEzMDc3NDJiN2NmOTRjOTUzI2NvbW1pdGNvbW1lbnQtNTAyNDkxMFxuXG4gICAgKGxpdmVFdmVudHMubGVuZ3RoKVxuICAgICAgPyBlW25hbWVdID0gbGl2ZUV2ZW50c1xuICAgICAgOiBkZWxldGUgZVtuYW1lXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEU7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc291cmNlKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc291cmNlKSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgndGlueS1lbWl0dGVyJyk7XG52YXIgTGV0aGFyZ3kgPSByZXF1aXJlKCdsZXRoYXJneScpLkxldGhhcmd5O1xudmFyIHN1cHBvcnQgPSByZXF1aXJlKCcuL3N1cHBvcnQnKTtcbnZhciBjbG9uZSA9IHJlcXVpcmUoJy4vY2xvbmUnKTtcbnZhciBiaW5kQWxsID0gcmVxdWlyZSgnYmluZGFsbC1zdGFuZGFsb25lJyk7XG52YXIgRVZUX0lEID0gJ3ZpcnR1YWxzY3JvbGwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxTY3JvbGw7XG5cbnZhciBrZXlDb2RlcyA9IHtcbiAgICBMRUZUOiAzNyxcbiAgICBVUDogMzgsXG4gICAgUklHSFQ6IDM5LFxuICAgIERPV046IDQwLFxuICAgIFNQQUNFOiAzMlxufTtcblxuZnVuY3Rpb24gVmlydHVhbFNjcm9sbChvcHRpb25zKSB7XG4gICAgYmluZEFsbCh0aGlzLCAnX29uV2hlZWwnLCAnX29uTW91c2VXaGVlbCcsICdfb25Ub3VjaFN0YXJ0JywgJ19vblRvdWNoTW92ZScsICdfb25LZXlEb3duJyk7XG5cbiAgICB0aGlzLmVsID0gd2luZG93O1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZWwpIHtcbiAgICAgICAgdGhpcy5lbCA9IG9wdGlvbnMuZWw7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmVsO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSBvYmplY3RBc3NpZ24oe1xuICAgICAgICBtb3VzZU11bHRpcGxpZXI6IDEsXG4gICAgICAgIHRvdWNoTXVsdGlwbGllcjogMixcbiAgICAgICAgZmlyZWZveE11bHRpcGxpZXI6IDE1LFxuICAgICAgICBrZXlTdGVwOiAxMjAsXG4gICAgICAgIHByZXZlbnRUb3VjaDogZmFsc2UsXG4gICAgICAgIHVucHJldmVudFRvdWNoQ2xhc3M6ICd2cy10b3VjaG1vdmUtYWxsb3dlZCcsXG4gICAgICAgIGxpbWl0SW5lcnRpYTogZmFsc2VcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbmVydGlhKSB0aGlzLl9sZXRoYXJneSA9IG5ldyBMZXRoYXJneSgpO1xuXG4gICAgdGhpcy5fZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG4gICAgdGhpcy5fZXZlbnQgPSB7XG4gICAgICAgIHk6IDAsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgZGVsdGFZOiAwXG4gICAgfTtcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLmJvZHlUb3VjaEFjdGlvbiA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnBhc3NpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyT3B0aW9ucyA9IHtwYXNzaXZlOiB0aGlzLm9wdGlvbnMucGFzc2l2ZX07XG4gICAgfVxufVxuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fbm90aWZ5ID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQueCArPSBldnQuZGVsdGFYO1xuICAgIGV2dC55ICs9IGV2dC5kZWx0YVk7XG5cbiAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFVlRfSUQsIHtcbiAgICAgICAgeDogZXZ0LngsXG4gICAgICAgIHk6IGV2dC55LFxuICAgICAgICBkZWx0YVg6IGV2dC5kZWx0YVgsXG4gICAgICAgIGRlbHRhWTogZXZ0LmRlbHRhWSxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZVxuICAgfSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25XaGVlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAodGhpcy5fbGV0aGFyZ3kgJiYgdGhpcy5fbGV0aGFyZ3kuY2hlY2soZSkgPT09IGZhbHNlKSByZXR1cm47XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgLy8gSW4gQ2hyb21lIGFuZCBpbiBGaXJlZm94IChhdCBsZWFzdCB0aGUgbmV3IG9uZSlcbiAgICBldnQuZGVsdGFYID0gZS53aGVlbERlbHRhWCB8fCBlLmRlbHRhWCAqIC0xO1xuICAgIGV2dC5kZWx0YVkgPSBlLndoZWVsRGVsdGFZIHx8IGUuZGVsdGFZICogLTE7XG5cbiAgICAvLyBmb3Igb3VyIHB1cnBvc2UgZGVsdGFtb2RlID0gMSBtZWFucyB1c2VyIGlzIG9uIGEgd2hlZWwgbW91c2UsIG5vdCB0b3VjaCBwYWRcbiAgICAvLyByZWFsIG1lYW5pbmc6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaGVlbEV2ZW50I0RlbHRhX21vZGVzXG4gICAgaWYoc3VwcG9ydC5pc0ZpcmVmb3ggJiYgZS5kZWx0YU1vZGUgPT0gMSkge1xuICAgICAgICBldnQuZGVsdGFYICo9IG9wdGlvbnMuZmlyZWZveE11bHRpcGxpZXI7XG4gICAgICAgIGV2dC5kZWx0YVkgKj0gb3B0aW9ucy5maXJlZm94TXVsdGlwbGllcjtcbiAgICB9XG5cbiAgICBldnQuZGVsdGFYICo9IG9wdGlvbnMubW91c2VNdWx0aXBsaWVyO1xuICAgIGV2dC5kZWx0YVkgKj0gb3B0aW9ucy5tb3VzZU11bHRpcGxpZXI7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Nb3VzZVdoZWVsID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbmVydGlhICYmIHRoaXMuX2xldGhhcmd5LmNoZWNrKGUpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgLy8gSW4gU2FmYXJpLCBJRSBhbmQgaW4gQ2hyb21lIGlmICd3aGVlbCcgaXNuJ3QgZGVmaW5lZFxuICAgIGV2dC5kZWx0YVggPSAoZS53aGVlbERlbHRhWCkgPyBlLndoZWVsRGVsdGFYIDogMDtcbiAgICBldnQuZGVsdGFZID0gKGUud2hlZWxEZWx0YVkpID8gZS53aGVlbERlbHRhWSA6IGUud2hlZWxEZWx0YTtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vblRvdWNoU3RhcnQgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHQgPSAoZS50YXJnZXRUb3VjaGVzKSA/IGUudGFyZ2V0VG91Y2hlc1swXSA6IGU7XG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IHQucGFnZVg7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IHQucGFnZVk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Ub3VjaE1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYob3B0aW9ucy5wcmV2ZW50VG91Y2hcbiAgICAgICAgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhvcHRpb25zLnVucHJldmVudFRvdWNoQ2xhc3MpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICB2YXIgdCA9IChlLnRhcmdldFRvdWNoZXMpID8gZS50YXJnZXRUb3VjaGVzWzBdIDogZTtcblxuICAgIGV2dC5kZWx0YVggPSAodC5wYWdlWCAtIHRoaXMudG91Y2hTdGFydFgpICogb3B0aW9ucy50b3VjaE11bHRpcGxpZXI7XG4gICAgZXZ0LmRlbHRhWSA9ICh0LnBhZ2VZIC0gdGhpcy50b3VjaFN0YXJ0WSkgKiBvcHRpb25zLnRvdWNoTXVsdGlwbGllcjtcblxuICAgIHRoaXMudG91Y2hTdGFydFggPSB0LnBhZ2VYO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSB0LnBhZ2VZO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uS2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LmRlbHRhWCA9IGV2dC5kZWx0YVkgPSAwO1xuICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA0MFxuXG4gICAgc3dpdGNoKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIGtleUNvZGVzLkxFRlQ6XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuVVA6XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gdGhpcy5vcHRpb25zLmtleVN0ZXA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGtleUNvZGVzLlJJR0hUOlxuICAgICAgICBjYXNlIGtleUNvZGVzLkRPV046XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gLSB0aGlzLm9wdGlvbnMua2V5U3RlcDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGtleUNvZGVzLlNQQUNFICYmIGUuc2hpZnRLZXk6XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gd2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuU1BBQ0U6XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gLSB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fYmluZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHN1cHBvcnQuaGFzV2hlZWxFdmVudCkgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuX29uV2hlZWwsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICBpZihzdXBwb3J0Lmhhc01vdXNlV2hlZWxFdmVudCkgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5fb25Nb3VzZVdoZWVsLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG5cbiAgICBpZihzdXBwb3J0Lmhhc1RvdWNoKSB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uVG91Y2hTdGFydCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNQb2ludGVyICYmIHN1cHBvcnQuaGFzVG91Y2hXaW4pIHtcbiAgICAgICAgdGhpcy5ib2R5VG91Y2hBY3Rpb24gPSBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb247XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbiA9ICdub25lJztcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJNb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRydWUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzS2V5RG93bikgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bik7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fdW5iaW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc3VwcG9ydC5oYXNXaGVlbEV2ZW50KSB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5fb25XaGVlbCk7XG4gICAgaWYoc3VwcG9ydC5oYXNNb3VzZVdoZWVsRXZlbnQpIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuX29uTW91c2VXaGVlbCk7XG5cbiAgICBpZihzdXBwb3J0Lmhhc1RvdWNoKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uVG91Y2hTdGFydCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzUG9pbnRlciAmJiBzdXBwb3J0Lmhhc1RvdWNoV2luKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbiA9IHRoaXMuYm9keVRvdWNoQWN0aW9uO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlckRvd24nLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRydWUpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlck1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNLZXlEb3duKSBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oY2IsIGN0eCkge1xuICB0aGlzLl9lbWl0dGVyLm9uKEVWVF9JRCwgY2IsIGN0eCk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2VtaXR0ZXIuZTtcbiAgaWYgKGV2ZW50cyAmJiBldmVudHNbRVZUX0lEXSAmJiBldmVudHNbRVZUX0lEXS5sZW5ndGggPT09IDEpIHRoaXMuX2JpbmQoKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGNiLCBjdHgpIHtcbiAgdGhpcy5fZW1pdHRlci5vZmYoRVZUX0lELCBjYiwgY3R4KTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZW1pdHRlci5lO1xuICBpZiAoIWV2ZW50c1tFVlRfSURdIHx8IGV2ZW50c1tFVlRfSURdLmxlbmd0aCA8PSAwKSB0aGlzLl91bmJpbmQoKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuICAgIGV2dC54ID0gMDtcbiAgICBldnQueSA9IDA7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vZmYoKTtcbiAgICB0aGlzLl91bmJpbmQoKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uIGdldFN1cHBvcnQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGFzV2hlZWxFdmVudDogJ29ud2hlZWwnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNNb3VzZVdoZWVsRXZlbnQ6ICdvbm1vdXNld2hlZWwnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNUb3VjaDogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc1RvdWNoV2luOiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyAmJiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDEsXG4gICAgICAgIGhhc1BvaW50ZXI6ICEhd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkLFxuICAgICAgICBoYXNLZXlEb3duOiAnb25rZXlkb3duJyBpbiBkb2N1bWVudCxcbiAgICAgICAgaXNGaXJlZm94OiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA+IC0xXG4gICAgfTtcbn0pKCk7XG4iXX0=
