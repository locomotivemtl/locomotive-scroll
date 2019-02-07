(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _ScrollManager = _interopRequireDefault(require("./scroll/vendors/ScrollManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==========================================================================
// App
// ==========================================================================

/* jshint esnext: true */
(function () {
  // Init Locomotive Scroll
  var smoothScroll = new _ScrollManager.default({
    container: $('#js-scroll'),
    selector: '.js-animate',
    smooth: true,
    smoothMobile: true,
    mobileContainer: $(document),
    getWay: false,
    getSpeed: false,
    inertia: 0.75
  });
})();

},{"./scroll/vendors/ScrollManager":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DEFAULTS = exports.EVENT = exports.EVENT_KEY = void 0;

var _Scroll2 = _interopRequireWildcard(require("./vendors/Scroll"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
}(_Scroll2.default);

exports.default = _default;

},{"./vendors/Scroll":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SmoothScroll2 = _interopRequireDefault(require("./vendors/SmoothScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
}(_SmoothScroll2.default);

exports.default = _default;

},{"./vendors/SmoothScroll":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DEFAULTS = exports.EVENT = exports.EVENT_KEY = void 0;

var _environment = require("../../utils/environment");

var _debounce = _interopRequireDefault(require("../../utils/debounce"));

var _is = require("../../utils/is");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  mobileContainer: _environment.$document,
  onScroll: function onScroll() {},
  selector: '.js-animate',
  smooth: false,
  smoothMobile: false,
  reversed: false,
  getWay: false,
  getSpeed: false
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
    this.scroll = {
      x: 0,
      y: 0,
      direction: ''
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


      _environment.$window.on(EVENT.RESIZE, (0, _debounce.default)(function () {
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
      // if (window.pageYOffset > this.scroll.y) {
      //     if (this.scroll.direction !== 'down') {
      //         this.scroll.direction = 'down';
      //     }
      // } else if (window.pageYOffset < this.scroll.y) {
      //     if (this.scroll.direction !== 'up') {
      //         this.scroll.direction = 'up';
      //     }
      // }
      if (this.scroll.y !== window.pageYOffset) {
        this.scroll.y = window.pageYOffset;
      }

      if (this.scroll.x !== window.pageXOffset) {
        this.scroll.x = window.pageXOffset;
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
        var scrollTop = this.scroll.y;
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
            var y = this.scroll.y - element.offset;
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

exports.default = _default;

},{"../../utils/debounce":7,"../../utils/environment":8,"../../utils/is":9}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _environment = require("../../utils/environment");

var _Scroll = _interopRequireWildcard(require("../Scroll"));

var _SmoothScroll = _interopRequireDefault(require("../SmoothScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
          return new _SmoothScroll.default(_this.options);
        } else {
          if (_this.mobileContainer) {
            _this.options.container = _this.mobileContainer;
          }

          return new _Scroll.default(_this.options);
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

exports.default = _default;

},{"../../utils/environment":8,"../Scroll":2,"../SmoothScroll":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _environment = require("../../utils/environment");

var _Scroll2 = _interopRequireWildcard(require("../Scroll"));

var _debounce = _interopRequireDefault(require("../../utils/debounce"));

var _virtualScroll = _interopRequireDefault(require("virtual-scroll"));

var _is = require("../../utils/is");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
    _this.isReversed = options.reversed || _Scroll2.DEFAULTS.reversed;
    _this.getWay = options.getWay || _Scroll2.DEFAULTS.getWay;
    _this.getSpeed = options.getSpeed || _Scroll2.DEFAULTS.getSpeed;
    _this.inertia = options.inertia || _Scroll2.DEFAULTS.inertia;
    _this.parallaxElements = [];

    if (_this.getSpeed) {
      _this.scroll.speed = 0;
    }

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

      this.instance = new _virtualScroll.default({
        mouseMultiplier: 0.5,
        touchMultiplier: 1.5,
        firefoxMultiplier: 30
      });
      this.inertia = this.inertia * 0.1;
      this.instance.scroll = {
        x: 0,
        y: 0
      };
      this.instance.delta = {
        x: 0,
        y: 0 // @todo : to optimize

      };
      this.instance.on(function (e) {
        _this2.instance.delta.y -= e.deltaY;
        if (_this2.instance.delta.y < 0) _this2.instance.delta.y = 0;
        if (_this2.instance.delta.y > _this2.scrollLimit) _this2.instance.delta.y = _this2.scrollLimit;
      });
      this.setScrollLimit(); // @todo
      // this.setWheelDirection(this.isReversed);

      this.addElements(); // Rebuild event

      this.$container.on(_Scroll2.EVENT.REBUILD, function () {
        // @todo
        // this.scrollbar.scrollTo(0, 0, 1);
        _this2.update();
      }); // Update event

      this.$container.on(_Scroll2.EVENT.UPDATE, function (event, options) {
        return _this2.update(options);
      }); // Scrollto button event

      this.$container.on(_Scroll2.EVENT.CLICK, '.js-scrollto', function (event) {
        event.preventDefault();
        var $target = $(event.currentTarget);
        var offset = $target.data('offset');

        _this2.scrollTo({
          sourceElem: $target,
          offsetElem: offset
        });
      }); // @todo scrollto
      // this.$container.on(EVENT.SCROLLTO, (event) => this.scrollTo(event.options));
      // Setup done

      _environment.$document.triggerHandler({
        type: _Scroll2.EVENT.ISREADY
      }); // Resize event


      _environment.$window.on(_Scroll2.EVENT.RESIZE, function () {
        _this2.update();
      });

      this.preloadImages();
      this.render();
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
      var $elements = $(this.selector);
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
        var $target = elementTarget && $(elementTarget).length ? $(elementTarget) : $element;
        var elementOffset = $target.offset().top + this.instance.scroll.y;
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
          elementOffset -= parseFloat($element.attr('data-transform').y);
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

          var _elementHorizontal = $element.attr('data-horizontal');

          var elementMiddle = (elementLimit - elementOffset) / 2 + elementOffset;
          newElement.horizontal = _elementHorizontal;
          newElement.middle = elementMiddle;
          newElement.offset = elementOffset;
          newElement.position = _elementPosition;
          newElement.speed = elementSpeed;
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

      ;
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
      var _this3 = this;

      this.raf = requestAnimationFrame(function () {
        return _this3.render();
      });
      var value = this.lerp(this.instance.scroll.y, this.instance.delta.y, this.inertia);
      this.instance.scroll.y = value;
      var scrollbarTop = this.instance.scroll.y; // need to move the container

      this.$container.css({
        '-webkit-transform': "translate3d(0, ".concat(-this.instance.scroll.y, "px, 0)"),
        '-ms-transform': "translate3d(0, ".concat(-this.instance.scroll.y, "px, 0)"),
        'transform': "translate3d(0, ".concat(-this.instance.scroll.y, "px, 0)")
      });

      if (this.getWay) {
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

      if (this.getSpeed) {
        if (this.scroll.y !== this.instance.scroll.y) {
          this.scroll.speed = this.scrollbar.movement.y;
          this.scroll.y = this.instance.scroll.y;
        } else {
          this.scroll.speed = 0;
        }
      }

      if (this.scroll.y !== this.instance.scroll.y) {
        this.scroll.y = this.instance.scroll.y;
      }

      this.transformElements(isFirstCall);
      this.animateElements();
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
      var _this4 = this;

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
        targetOffset = this.scrollbar.limit.y;
      }

      setTimeout(function () {
        _this4.instance.scrollTo(0, targetOffset, speed);
      }, delay);
    }
    /**
     * Set the scroll bar limit
     */

  }, {
    key: "setScrollLimit",
    value: function setScrollLimit() {
      this.scrollLimit = this.$container[0].clientHeight - this.windowHeight;
      console.log(this.scrollLimit);
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
    value: function transformElement($element, x, y, z) {
      // Defaults
      x = x || 0;
      y = y || 0;
      z = z || 0; // Translate and store the positionning as `data`

      $element.css({
        '-webkit-transform': "translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)"),
        '-ms-transform': "translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)"),
        'transform': "translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)")
      }).data('transform', {
        x: x,
        y: y,
        z: z
      });
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
        var scrollbarBottom = this.instance.scroll.y + this.windowHeight;
        var scrollbarMiddle = this.instance.scroll.y + this.windowMiddle;
        var i = 0;
        var len = this.parallaxElements.length;
        var removeIndexes = [];

        for (; i < len; i++) {
          var curEl = this.parallaxElements[i];
          var scrollBottom = scrollbarBottom;
          var transformDistance = false; // Define if the element is in view

          var inView = scrollBottom >= curEl.offset && this.instance.scroll.y <= curEl.limit;
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
                transformDistance = (this.scrollLimit - scrollBottom) * curEl.speed;
                break;

              default:
                transformDistance = (scrollbarMiddle - curEl.middle) * -curEl.speed;
                break;
            }
          } // Transform horizontal OR vertical. Defaults to vertical


          if ((0, _is.isNumeric)(transformDistance)) {
            curEl.horizontal ? this.transformElement(curEl.$element, transformDistance) : this.transformElement(curEl.$element, 0, transformDistance);
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
      options = options || {}; // @todo
      // this.scrollbar.update();

      this.windowHeight = _environment.$window.height();
      this.windowMiddle = this.windowHeight / 2;
      this.setScrollLimit(); // @todo
      // this.setWheelDirection(this.isReversed);

      this.addElements();
      this.transformElements(true);
    }
    /**
     * Set smooth-scrollbar scrolling direction for wheel event
     * @param {Boolean} isReversed
     */

  }, {
    key: "setWheelDirection",
    value: function setWheelDirection(isReversed) {
      this.scrollbar.reverseWheel(isReversed);
    }
  }, {
    key: "preloadImages",
    value: function preloadImages() {
      var _this5 = this;

      var images = Array.from(document.querySelectorAll('img'));
      images.forEach(function (image) {
        var img = document.createElement('img');
        img.addEventListener('load', function () {
          images.splice(images.indexOf(image), 1);
          images.length === 0 && _this5.update();
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
      cancelAnimationFrame(this.raf);
    }
  }]);

  return _default;
}(_Scroll2.default);

exports.default = _default;

},{"../../utils/debounce":7,"../../utils/environment":8,"../../utils/is":9,"../Scroll":2,"virtual-scroll":15}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

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
exports.isDebug = exports.$body = exports.$html = exports.$window = exports.$document = exports.DATA_API_KEY = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9hcHAuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvU2Nyb2xsLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL1Ntb290aFNjcm9sbC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL1Njcm9sbC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL1Njcm9sbE1hbmFnZXIuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvdmVuZG9ycy9TbW9vdGhTY3JvbGwuanMiLCJhc3NldHMvc2NyaXB0cy91dGlscy9kZWJvdW5jZS5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL2Vudmlyb25tZW50LmpzIiwiYXNzZXRzL3NjcmlwdHMvdXRpbHMvaXMuanMiLCJub2RlX21vZHVsZXMvYmluZGFsbC1zdGFuZGFsb25lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xldGhhcmd5L2xldGhhcmd5LmpzIiwibm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvdGlueS1lbWl0dGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtc2Nyb2xsL3NyYy9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLXNjcm9sbC9zcmMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvc3JjL3N1cHBvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0lBOzs7O0FBSkE7QUFDQTtBQUNBOztBQUNBO0FBR0EsQ0FBQyxZQUFXO0FBRVI7QUFDQSxNQUFNLFlBQVksR0FBRyxJQUFJLHNCQUFKLENBQWtCO0FBQ25DLElBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxZQUFELENBRHVCO0FBRW5DLElBQUEsUUFBUSxFQUFFLGFBRnlCO0FBR25DLElBQUEsTUFBTSxFQUFFLElBSDJC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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQXBwXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuaW1wb3J0IFNjcm9sbE1hbmFnZXIgZnJvbSAnLi9zY3JvbGwvdmVuZG9ycy9TY3JvbGxNYW5hZ2VyJztcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gSW5pdCBMb2NvbW90aXZlIFNjcm9sbFxuICAgIGNvbnN0IHNtb290aFNjcm9sbCA9IG5ldyBTY3JvbGxNYW5hZ2VyKHtcbiAgICAgICAgY29udGFpbmVyOiAkKCcjanMtc2Nyb2xsJyksXG4gICAgICAgIHNlbGVjdG9yOiAnLmpzLWFuaW1hdGUnLFxuICAgICAgICBzbW9vdGg6IHRydWUsXG4gICAgICAgIHNtb290aE1vYmlsZTogdHJ1ZSxcbiAgICAgICAgbW9iaWxlQ29udGFpbmVyOiAkKGRvY3VtZW50KSxcbiAgICAgICAgZ2V0V2F5OiBmYWxzZSxcbiAgICAgICAgZ2V0U3BlZWQ6IGZhbHNlLFxuICAgICAgICBpbmVydGlhOiAwLjc1XG4gICAgfSk7XG5cbn0pKCk7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRXh0ZW5kZWQgTG9jb21vdGl2ZSBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgU2Nyb2xsLCB7IEVWRU5UX0tFWSBhcyBWRU5ET1JfRVZFTlRfS0VZLCBFVkVOVCBhcyBWRU5ET1JfRVZFTlRTLCBERUZBVUxUUyBhcyBWRU5ET1JfREVGQVVMVFMgfSBmcm9tICcuL3ZlbmRvcnMvU2Nyb2xsJ1xuXG4vKipcbiAqIFVOQ09NTUVOVCBPTkxZIFRIRSBMSU5FUyBZT1UgTkVFRFxuICovXG4vLyBpbXBvcnQgeyAkd2luZG93LCAkZG9jdW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9lbnZpcm9ubWVudCc7XG4vLyBpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UnO1xuLy8gaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRfS0VZID0gVkVORE9SX0VWRU5UX0tFWTtcblxuZXhwb3J0IGNvbnN0IEVWRU5UID0gT2JqZWN0LmFzc2lnbihWRU5ET1JfRVZFTlRTLCB7XG4gICAgLy8gVEVTVDogYHRlc3QuJHtFVkVOVF9LRVl9YFxufSk7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IE9iamVjdC5hc3NpZ24oVkVORE9SX0RFRkFVTFRTLCB7IH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFNjcm9sbCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKVxuICAgIH1cbn1cbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFeHRlbmRlZCBMb2NvbW90aXZlIFNtb290aCBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJy4vdmVuZG9ycy9TbW9vdGhTY3JvbGwnXG5cbi8qKlxuICogVU5DT01NRU5UIE9OTFkgVEhFIExJTkVTIFlPVSBORUVEXG4gKi9cbi8vIGltcG9ydCB7ICR3aW5kb3csICRkb2N1bWVudCwgJGh0bWwgfSBmcm9tICcuLi91dGlscy9lbnZpcm9ubWVudCc7XG4vLyBpbXBvcnQgU2Nyb2xsLCB7IERFRkFVTFRTLCBFVkVOVCB9IGZyb20gJy4vU2Nyb2xsJztcblxuLy8gaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uL3V0aWxzL2RlYm91bmNlJztcbi8vIGltcG9ydCBTY3JvbGxiYXIgZnJvbSAnc21vb3RoLXNjcm9sbGJhcic7XG4vLyBpbXBvcnQgeyBpc051bWVyaWMgfSBmcm9tICcuLi91dGlscy9pcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgU21vb3RoU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvY29tb3RpdmUgU2Nyb2xsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuaW1wb3J0IHsgJHdpbmRvdywgJGRvY3VtZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRfS0VZID0gYExvY29tb3RpdmVTY3JvbGxgO1xuXG5leHBvcnQgY29uc3QgRVZFTlQgPSB7XG4gICAgQ0xJQ0s6IGBjbGljay4ke0VWRU5UX0tFWX1gLFxuICAgIElTUkVBRFk6IGBpc1JlYWR5LiR7RVZFTlRfS0VZfWAsXG4gICAgUkVCVUlMRDogYHJlYnVpbGQuJHtFVkVOVF9LRVl9YCxcbiAgICBSRU5ERVI6IGByZW5kZXIuJHtFVkVOVF9LRVl9YCxcbiAgICBSRVNJWkU6IGByZXNpemUuJHtFVkVOVF9LRVl9YCxcbiAgICBTQ1JPTEw6IGBzY3JvbGwuJHtFVkVOVF9LRVl9YCxcbiAgICBTQ1JPTExUTzogYHNjcm9sbFRvLiR7RVZFTlRfS0VZfWAsXG4gICAgVVBEQVRFOiBgdXBkYXRlLiR7RVZFTlRfS0VZfWBcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IHtcbiAgICBjb250YWluZXI6ICRkb2N1bWVudCxcbiAgICBtb2JpbGVDb250YWluZXI6ICRkb2N1bWVudCxcbiAgICBvblNjcm9sbDogZnVuY3Rpb24oKXt9LFxuICAgIHNlbGVjdG9yOiAnLmpzLWFuaW1hdGUnLFxuICAgIHNtb290aDogZmFsc2UsXG4gICAgc21vb3RoTW9iaWxlOiBmYWxzZSxcbiAgICByZXZlcnNlZDogZmFsc2UsXG4gICAgZ2V0V2F5OiBmYWxzZSxcbiAgICBnZXRTcGVlZDogZmFsc2Vcbn07XG5cbi8qKlxuICogTWFuYWdlIGFuaW1hdGlvbiBvZiBlbGVtZW50cyBvbiB0aGUgcGFnZSBhY2NvcmRpbmcgdG8gc2Nyb2xsIHBvc2l0aW9uLlxuICpcbiAqIEB0b2RvICBNYW5hZ2Ugc29tZSBvcHRpb25zIChub3JtYWxseSBmcm9tIGRhdGEgYXR0cmlidXRlcykgd2l0aCBjb25zdHJ1Y3RvciBvcHRpb25zIChleC46IHNldCByZXBlYXQgZm9yIGFsbClcbiAqIEB0b2RvICBNZXRob2QgdG8gZ2V0IHRoZSBkaXN0YW5jZSAoYXMgcGVyY2VudGFnZSkgb2YgYW4gZWxlbWVudCBpbiB0aGUgdmlld3BvcnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAgICAgICB0aGlzLiRjb250YWluZXIgPSAob3B0aW9ucy5jb250YWluZXIpID8gb3B0aW9ucy5jb250YWluZXIgOiBERUZBVUxUUy5jb250YWluZXI7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSAob3B0aW9ucy5zZWxlY3RvcikgPyBvcHRpb25zLnNlbGVjdG9yIDogREVGQVVMVFMuc2VsZWN0b3I7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSB7XG4gICAgICAgICAgICBvblNjcm9sbDogdHlwZW9mIG9wdGlvbnMub25TY3JvbGwgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLm9uU2Nyb2xsIDogREVGQVVMVFMub25TY3JvbGxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xuICAgICAgICB0aGlzLndpbmRvd01pZGRsZSA9IHRoaXMud2luZG93SGVpZ2h0IC8gMjtcblxuICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMgPSBbXTtcblxuICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHNjcm9sbGluZyBhbmltYXRpb25zXG4gICAgICovXG4gICAgaW5pdCgpIHtcblxuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICAvLyBPbiBzY3JvbGxcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlNDUk9MTCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVidWlsZCBldmVudFxuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuUkVCVUlMRCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0OiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBldmVudFxuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuVVBEQVRFLCAoZXZlbnQsIG9wdGlvbnMpID0+IHRoaXMudXBkYXRlKG9wdGlvbnMpKTtcblxuICAgICAgICAvLyBSZW5kZXIgZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlJFTkRFUiwgKCkgPT4gdGhpcy5yZW5kZXIoKSk7XG5cbiAgICAgICAgLy8gU2Nyb2xsdG8gYnV0dG9uIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5DTElDSywgJy5qcy1zY3JvbGx0bycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9ICR0YXJnZXQuZGF0YSgnb2Zmc2V0Jyk7XG5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHNvdXJjZUVsZW06ICR0YXJnZXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0RWxlbTogb2Zmc2V0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5TQ1JPTExUTywgKGV2ZW50KSA9PiB0aGlzLnNjcm9sbFRvKGV2ZW50Lm9wdGlvbnMpKTtcblxuICAgICAgICAvLyBTZXR1cCBkb25lXG4gICAgICAgICRkb2N1bWVudC50cmlnZ2VySGFuZGxlcih7XG4gICAgICAgICAgICB0eXBlOiBFVkVOVC5JU1JFQURZXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlc2l6ZSBldmVudFxuICAgICAgICAkd2luZG93Lm9uKEVWRU5ULlJFU0laRSwgZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICB9LCAyMCkpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBhbGwgYW5pbWF0YWJsZSBlbGVtZW50cy5cbiAgICAgKiBDYWxsZWQgb24gcGFnZSBsb2FkIGFuZCBhbnkgc3Vic2VxdWVudCB1cGRhdGVzLlxuICAgICAqL1xuICAgIGFkZEVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMgPSBbXTtcblxuICAgICAgICBjb25zdCAkZWxlbWVudHMgPSAkKHRoaXMuc2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBsZW4gPSAkZWxlbWVudHMubGVuZ3RoO1xuICAgICAgICBsZXQgaSA9IDA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkgKyspIHtcbiAgICAgICAgICAgIGxldCAkZWxlbWVudCA9ICRlbGVtZW50cy5lcShpKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VGFyZ2V0ID0gJGVsZW1lbnQuYXR0cignZGF0YS10YXJnZXQnKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50UG9zaXRpb24gPSAkZWxlbWVudC5hdHRyKCdkYXRhLXBvc2l0aW9uJyk7XG4gICAgICAgICAgICBsZXQgJHRhcmdldCA9IChlbGVtZW50VGFyZ2V0ICYmICQoZWxlbWVudFRhcmdldCkubGVuZ3RoKSA/ICQoZWxlbWVudFRhcmdldCkgOiAkZWxlbWVudDtcbiAgICAgICAgICAgIGxldCBlbGVtZW50T2Zmc2V0ID0gJHRhcmdldC5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICBsZXQgZWxlbWVudExpbWl0ID0gZWxlbWVudE9mZnNldCArICR0YXJnZXQub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50U3RpY2t5ID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLXN0aWNreScpID09PSAnc3RyaW5nJyk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFN0aWNreVRhcmdldCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtc3RpY2t5LXRhcmdldCcpO1xuXG4gICAgICAgICAgICBsZXQgZWxlbWVudFZpZXdwb3J0T2Zmc2V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLXZpZXdwb3J0LW9mZnNldCcpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgZWxlbWVudFZpZXdwb3J0T2Zmc2V0ID0gJGVsZW1lbnQuYXR0cignZGF0YS12aWV3cG9ydC1vZmZzZXQnKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9NYW5hZ2UgY2FsbGJhY2tcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q2FsbGJhY2tTdHJpbmcgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtY2FsbGJhY2snKSA9PT0gJ3N0cmluZycpID8gJGVsZW1lbnQuYXR0cignZGF0YS1jYWxsYmFjaycpIDogbnVsbDtcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgICAgICBpZihlbGVtZW50Q2FsbGJhY2tTdHJpbmcgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gZWxlbWVudENhbGxiYWNrU3RyaW5nLnN1YnN0cigwLCBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuaW5kZXhPZignKCcpKTtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uc1N0cmluZyA9IGVsZW1lbnRDYWxsYmFja1N0cmluZy5zdWJzdHIoZWxlbWVudENhbGxiYWNrU3RyaW5nLmluZGV4T2YoJygnKSxlbGVtZW50Q2FsbGJhY2tTdHJpbmcubGVuZ3RoIC0gZXZlbnQubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcgPSBvcHRpb25zU3RyaW5nLnJlcGxhY2UoJygnLCcnKTtcbiAgICAgICAgICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKCcpJywnJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IG9wdGlvbnNTdHJpbmcuc3BsaXQoJ3wnKTtcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb3B0aW9ucy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25zW2pdLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblswXSA9IG9wdGlvblswXS5yZXBsYWNlKCcgJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBhIGJvb2xlYW5cbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uWzFdID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9wdGlvblsxXSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhbHVlIGlzIG51bWVyaWNcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZigvXlxcZCskLy50ZXN0KG9wdGlvblsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHBhcnNlSW50KG9wdGlvblsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBhIFN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IG9wdGlvblsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvYmpbb3B0aW9uWzBdXSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50Q2FsbGJhY2sgPSB7ZXZlbnQ6ZXZlbnQsIG9wdGlvbnM6b2JqfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgZWxlbWVudHMgbG9zZXMgaXRzIGFuaW1hdGlvbiBhZnRlciBzY3JvbGxpbmcgcGFzdCBpdFxuICAgICAgICAgICAgbGV0IGVsZW1lbnRSZXBlYXQgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtcmVwZWF0JykgPT09ICdzdHJpbmcnKTtcblxuICAgICAgICAgICAgbGV0IGVsZW1lbnRJblZpZXdDbGFzcyA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtaW52aWV3LWNsYXNzJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnRJblZpZXdDbGFzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50SW5WaWV3Q2xhc3MgPSAnaXMtc2hvdyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50U3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50U3RpY2t5VGFyZ2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGltaXQgPSB0aGlzLiRjb250YWluZXIuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gJChlbGVtZW50U3RpY2t5VGFyZ2V0KS5vZmZzZXQoKS50b3AgLSAkZWxlbWVudC5oZWlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZXNldCBvZmZzZXRcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcyhlbGVtZW50SW5WaWV3Q2xhc3MpO1xuICAgICAgICAgICAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKCdpcy11bnN0dWNrJyk7XG5cbiAgICAgICAgICAgICAgICAkZWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxuICAgICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERvbid0IGFkZCBlbGVtZW50IGlmIGl0IGFscmVhZHkgaGFzIGl0cyBpbnZpZXcgY2xhc3MgYW5kIGRvZXNuJ3QgcmVwZWF0XG4gICAgICAgICAgICBpZiAoZWxlbWVudFJlcGVhdCB8fCAhJGVsZW1lbnQuaGFzQ2xhc3MoZWxlbWVudEluVmlld0NsYXNzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50c1tpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6ICRlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IE1hdGgucm91bmQoZWxlbWVudE9mZnNldCksXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdDogZWxlbWVudFJlcGVhdCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGVsZW1lbnRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IGVsZW1lbnRMaW1pdCxcbiAgICAgICAgICAgICAgICAgICAgaW5WaWV3Q2xhc3M6IGVsZW1lbnRJblZpZXdDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgc3RpY2t5OiBlbGVtZW50U3RpY2t5LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZWxlbWVudENhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydE9mZnNldDogZWxlbWVudFZpZXdwb3J0T2Zmc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvb3AgdGhyb3VnaCBhbGwgYW5pbWF0YWJsZSBlbGVtZW50cyBhbmQgYXBwbHkgYW5pbWF0aW9uIG1ldGhvZChzKS5cbiAgICAgKi9cbiAgICBhbmltYXRlRWxlbWVudHMoKSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IHRoaXMuYW5pbWF0ZWRFbGVtZW50cy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ZXMgPSBbXTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuYW5pbWF0ZWRFbGVtZW50c1tpXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQncyB2aXNpYmlsaXR5IG11c3Qgbm90IGJlIG1hbmlwdWxhdGVkIGFueSBmdXJ0aGVyLCByZW1vdmUgaXQgZnJvbSB0aGUgbGlzdFxuICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlRWxlbWVudChlbGVtZW50LCBpKSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUluZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbmltYXRlZCBlbGVtZW50cyBhZnRlciBsb29waW5nIHRocm91Z2ggZWxlbWVudHNcbiAgICAgICAgaSA9IHJlbW92ZUluZGV4ZXMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMuc3BsaWNlKHJlbW92ZUluZGV4ZXNbaV0sIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjbGFzcyBhbmltYXRpb25zLCBhbmQgdXBkYXRlIHRoZSBnbG9iYWwgc2Nyb2xsIHBvc2l0aW9ubmluZy5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiB0aGlzLnNjcm9sbC55KSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5zY3JvbGwuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gZWxzZSBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgdGhpcy5zY3JvbGwueSkge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ3VwJykge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICd1cCc7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAodGhpcy5zY3JvbGwueSAhPT0gd2luZG93LnBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbC55ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbC54ICE9PSB3aW5kb3cucGFnZVhPZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnggPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5vblNjcm9sbCh0aGlzLnNjcm9sbClcblxuICAgICAgICB0aGlzLmFuaW1hdGVFbGVtZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBjbGFzc2VzIG9uIGFuIGVsZW1lbnQgaWYgaXQncyB2aXNpYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgICAgIGVsZW1lbnQgQ3VycmVudCBlbGVtZW50IHRvIHRlc3RcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICAgICAgaW5kZXggICBJbmRleCBvZiB0aGUgZWxlbWVudCB3aXRoaW4gaXQncyBjb250YWluZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAgICAgICBXZXRoZXIgdGhlIGl0ZW0gbXVzdCBiZSByZW1vdmVkIGZyb20gaXRzIGNvbnRhaW5lclxuICAgICAqL1xuICAgIHRvZ2dsZUVsZW1lbnQoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IHJlbW92ZUZyb21Db250YWluZXIgPSBmYWxzZTtcblxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBib3R0b20gZWRnZSBvZiB0aGUgc2Nyb2xsIGNvbnRhaW5lclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGwueTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHNjcm9sbFRvcCArIHRoaXMud2luZG93SGVpZ2h0O1xuXG4gICAgICAgICAgICAvLyBEZWZpbmUgaWYgdGhlIGVsZW1lbnQgaXMgaW5WaWV3XG4gICAgICAgICAgICBsZXQgaW5WaWV3ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxUb3AgPj0gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVG9wIDw9IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnBvc2l0aW9uID09PSAnYmVsb3cnKSB7XG4gICAgICAgICAgICAgICAgaW5WaWV3ID0gKHNjcm9sbFRvcCA+IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnN0aWNreSkge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxUb3AgPj0gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVG9wIDw9IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfWVsc2UgaWYoZWxlbWVudC52aWV3cG9ydE9mZnNldCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LnZpZXdwb3J0T2Zmc2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbFZpZXdwb3J0T2Zmc2V0VG9wID0gc2Nyb2xsVG9wICsgKHRoaXMud2luZG93SGVpZ2h0ICogZWxlbWVudC52aWV3cG9ydE9mZnNldFsxXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxWaWV3cG9ydE9mZnNldEJvdHRvbSA9IHNjcm9sbEJvdHRvbSAtICh0aGlzLndpbmRvd0hlaWdodCAqIGVsZW1lbnQudmlld3BvcnRPZmZzZXRbMF0pO1xuICAgICAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsVmlld3BvcnRPZmZzZXRCb3R0b20gPiBlbGVtZW50Lm9mZnNldCAmJiBzY3JvbGxWaWV3cG9ydE9mZnNldFRvcCA8IGVsZW1lbnQubGltaXQpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbFZpZXdwb3J0T2Zmc2V0ID0gc2Nyb2xsQm90dG9tIC0gKHRoaXMud2luZG93SGVpZ2h0ICogZWxlbWVudC52aWV3cG9ydE9mZnNldFswXSk7XG4gICAgICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxWaWV3cG9ydE9mZnNldCA+IGVsZW1lbnQub2Zmc2V0ICYmIHNjcm9sbFZpZXdwb3J0T2Zmc2V0IDwgZWxlbWVudC5saW1pdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxCb3R0b20gPj0gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVG9wIDw9IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wID4gZWxlbWVudC5saW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LiRlbGVtZW50LmFkZENsYXNzKCdpcy11bnN0dWNrJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC5yZW1vdmVDbGFzcygnaXMtdW5zdHVjaycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPCBlbGVtZW50Lm9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LiRlbGVtZW50LnJlbW92ZUNsYXNzKGVsZW1lbnQuaW5WaWV3Q2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIGNsYXNzIGlmIGluVmlldywgcmVtb3ZlIGlmIG5vdFxuICAgICAgICAgICAgaWYgKGluVmlldykge1xuICAgICAgICAgICAgICAgIGlmKCFlbGVtZW50LiRlbGVtZW50Lmhhc0NsYXNzKGVsZW1lbnQuaW5WaWV3Q2xhc3MpKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC5hZGRDbGFzcyhlbGVtZW50LmluVmlld0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyQ2FsbGJhY2soZWxlbWVudCwnZW50ZXInKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQucmVwZWF0ICYmICFlbGVtZW50LnN0aWNreSkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVGcm9tQ29udGFpbmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSB0aGlzLnNjcm9sbC55IC0gZWxlbWVudC5vZmZzZXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKDAsICR7eX1weCwgMClgLFxuICAgICAgICAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBgdHJhbnNsYXRlM2QoMCwgJHt5fXB4LCAwKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKDAsICR7eX1weCwgMClgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuJGVsZW1lbnQuaGFzQ2xhc3MoZWxlbWVudC5pblZpZXdDbGFzcykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC5yZW1vdmVDbGFzcyhlbGVtZW50LmluVmlld0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckNhbGxiYWNrKGVsZW1lbnQsJ2xlYXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVtb3ZlRnJvbUNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjaGVjayBpZiB0aGUgZWxlbWVudCBoYXZlIGEgY2FsbGJhY2ssIGFuZCB0cmlnZ2VyIHRoZSBldmVudCBzZXQgaW4gdGhlIGRhdGEtY2FsbGJhY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gICAgICBlbGVtZW50IEN1cnJlbnQgZWxlbWVudCB0byB0ZXN0XG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgdHJpZ2dlckNhbGxiYWNrKGVsZW1lbnQsd2F5KXtcblxuICAgICAgICBpZihlbGVtZW50LmNhbGxiYWNrICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBlbGVtZW50LiRlbGVtZW50LnRyaWdnZXIoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGVsZW1lbnQuY2FsbGJhY2suZXZlbnQsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZWxlbWVudC5jYWxsYmFjay5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHdheTogd2F5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vYWRkIHRoaXMgd2hlcmUgeW91IHdhbnQgZHVkZSAoaW4geW91ciBtb2R1bGUgYnR3KVxuICAgICAgICAgICAgLy8gJGRvY3VtZW50Lm9uKGV2ZW50Lk5hbWVzcGFjZSwoZSk9PntcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlLm9wdGlvbnMsIGUud2F5KTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gYSBkZXNpcmVkIHRhcmdldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2Nyb2xsVG8ob3B0aW9ucykge1xuICAgICAgICBjb25zdCAkdGFyZ2V0RWxlbSA9IG9wdGlvbnMudGFyZ2V0RWxlbTtcbiAgICAgICAgY29uc3QgJHNvdXJjZUVsZW0gPSBvcHRpb25zLnNvdXJjZUVsZW07XG4gICAgICAgIGNvbnN0IG9mZnNldEVsZW0gPSBvcHRpb25zLm9mZnNldEVsZW07XG4gICAgICAgIGxldCB0YXJnZXRPZmZzZXQgPSBpc051bWVyaWMob3B0aW9ucy50YXJnZXRPZmZzZXQpID8gcGFyc2VJbnQob3B0aW9ucy50YXJnZXRPZmZzZXQpIDogMDtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBpc051bWVyaWMob3B0aW9ucy5zcGVlZCkgPyBwYXJzZUludChvcHRpb25zLnNwZWVkKSA6IDgwMDtcbiAgICAgICAgY29uc3QgZGVsYXkgPSBpc051bWVyaWMob3B0aW9ucy5kZWxheSkgPyBwYXJzZUludChvcHRpb25zLmRlbGF5KSA6IDA7XG4gICAgICAgIGNvbnN0IHRvVG9wID0gb3B0aW9ucy50b1RvcDtcbiAgICAgICAgY29uc3QgdG9Cb3R0b20gPSBvcHRpb25zLnRvQm90dG9tO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgICAgICBpZiAodHlwZW9mICR0YXJnZXRFbGVtID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgJHNvdXJjZUVsZW0gPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0YXJnZXRPZmZzZXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBtdXN0IHNwZWNpZnkgYXQgbGVhc3Qgb25lIHBhcmFtZXRlci4nKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkdGFyZ2V0RWxlbSAhPT0gJ3VuZGVmaW5lZCcgJiYgJHRhcmdldEVsZW0gaW5zdGFuY2VvZiBqUXVlcnkgJiYgJHRhcmdldEVsZW0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gJHRhcmdldEVsZW0ub2Zmc2V0KCkudG9wICsgdGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkc291cmNlRWxlbSAhPT0gJ3VuZGVmaW5lZCcgJiYgJHNvdXJjZUVsZW0gaW5zdGFuY2VvZiBqUXVlcnkgJiYgJHNvdXJjZUVsZW0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHRhcmdldERhdGEgPSAnJztcblxuICAgICAgICAgICAgaWYgKCRzb3VyY2VFbGVtLmF0dHIoJ2RhdGEtdGFyZ2V0JykpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXREYXRhID0gJHNvdXJjZUVsZW0uYXR0cignZGF0YS10YXJnZXQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0YSA9ICRzb3VyY2VFbGVtLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gJCh0YXJnZXREYXRhKS5vZmZzZXQoKS50b3AgKyB0YXJnZXRPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIG9mZnNldEVsZW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAkKG9mZnNldEVsZW0pLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0YXJnZXRPZmZzZXQgLSBvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9Ub3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAodG9Cb3R0b20gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9ICRkb2N1bWVudC5oZWlnaHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0T2Zmc2V0XG4gICAgICAgICAgICB9LCBzcGVlZCk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgZWxlbWVudHMgYW5kIHJlY2FsY3VsYXRlIGFsbCB0aGUgcG9zaXRpb25zIG9uIHRoZSBwYWdlXG4gICAgICovXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZUVsZW1lbnRzKCk7XG5cbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xuICAgICAgICB0aGlzLndpbmRvd01pZGRsZSA9IHRoaXMud2luZG93SGVpZ2h0IC8gMjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95XG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgJHdpbmRvdy5vZmYoYC4ke0VWRU5UX0tFWX1gKTtcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9mZihgLiR7RVZFTlRfS0VZfWApO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0SWQpO1xuICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2NvbW90aXZlIFNjcm9sbCBNYW5hZ2VyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuaW1wb3J0IHsgJGRvY3VtZW50LCAkd2luZG93LCAkaHRtbCwgJGJvZHkgfSBmcm9tICcuLi8uLi91dGlscy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgU2Nyb2xsLCB7IERFRkFVTFRTLCBFVkVOVCB9IGZyb20gJy4uL1Njcm9sbCc7XG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJy4uL1Ntb290aFNjcm9sbCc7XG5cbi8qKlxuICogQmFzaWMgbW9kdWxlIHRoYXQgZGV0ZWN0cyB3aGljaCBzY3JvbGxpbmcgbW9kdWxlIHdlJ2xsIGJlIHVzaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuc21vb3RoID0gb3B0aW9ucy5zbW9vdGggfHwgREVGQVVMVFMuc21vb3RoO1xuICAgICAgICB0aGlzLnNtb290aE1vYmlsZSA9IG9wdGlvbnMuc21vb3RoTW9iaWxlIHx8IERFRkFVTFRTLnNtb290aE1vYmlsZTtcbiAgICAgICAgdGhpcy5tb2JpbGVDb250YWluZXIgPSBvcHRpb25zLm1vYmlsZUNvbnRhaW5lciB8fCBERUZBVUxUUy5tb2JpbGVDb250YWluZXI7XG4gICAgICAgIHRoaXMuaXNNb2JpbGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICAkaHRtbFswXS5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAkYm9keVswXS5zY3JvbGxUb3AgPSAwO1xuXG4gICAgICAgIGlmICghdGhpcy5zbW9vdGhNb2JpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGUgPSAoL0FuZHJvaWR8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSAoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc21vb3RoID09PSB0cnVlICYmICF0aGlzLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTbW9vdGhTY3JvbGwodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9iaWxlQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb250YWluZXIgPSB0aGlzLm1vYmlsZUNvbnRhaW5lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNjcm9sbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgICAgIGNvbnN0ICRzY3JvbGxUb09uTG9hZEVsID0gJCgnLmpzLXNjcm9sbHRvLW9uLWxvYWQnKS5maXJzdCgpO1xuXG4gICAgICAgIGlmICgkc2Nyb2xsVG9PbkxvYWRFbC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICRkb2N1bWVudC50cmlnZ2VySGFuZGxlcih7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0V2ZW50LlNDUk9MTFRPJyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEVsZW06ICRzY3JvbGxUb09uTG9hZEVsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9jb21vdGl2ZSBTbW9vdGggU2Nyb2xsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuaW1wb3J0IHsgJHdpbmRvdywgJGRvY3VtZW50LCAkaHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL2Vudmlyb25tZW50JztcbmltcG9ydCBTY3JvbGwsIHsgREVGQVVMVFMsIEVWRU5UIH0gZnJvbSAnLi4vU2Nyb2xsJztcblxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlJztcbmltcG9ydCBWaXJ0dWFsU2Nyb2xsIGZyb20gJ3ZpcnR1YWwtc2Nyb2xsJztcbmltcG9ydCB7IGlzTnVtZXJpYyB9IGZyb20gJy4uLy4uL3V0aWxzL2lzJztcblxuLyoqXG4gKiBTbW9vdGggc2Nyb2xsaW5nIHVzaW5nIGBzbW9vdGgtc2Nyb2xsYmFyYC5cbiAqIEJhc2VkIG9uIGBTY3JvbGxgIGNsYXNzLCB3aGljaCBhbGxvd3MgYW5pbWF0aW9ucyBvZiBlbGVtZW50cyBvbiB0aGUgcGFnZVxuICogYWNjb3JkaW5nIHRvIHNjcm9sbCBwb3NpdGlvbi5cbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuaXNSZXZlcnNlZCA9IG9wdGlvbnMucmV2ZXJzZWQgfHwgREVGQVVMVFMucmV2ZXJzZWQ7XG4gICAgICAgIHRoaXMuZ2V0V2F5ID0gb3B0aW9ucy5nZXRXYXkgfHwgREVGQVVMVFMuZ2V0V2F5O1xuICAgICAgICB0aGlzLmdldFNwZWVkID0gb3B0aW9ucy5nZXRTcGVlZCB8fCBERUZBVUxUUy5nZXRTcGVlZDtcbiAgICAgICAgdGhpcy5pbmVydGlhID0gb3B0aW9ucy5pbmVydGlhIHx8IERFRkFVTFRTLmluZXJ0aWE7XG5cbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW107XG5cbiAgICAgICAgaWYodGhpcy5nZXRTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwuc3BlZWQgPSAwO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHNjcm9sbGluZyBhbmltYXRpb25zXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gQWRkIGNsYXNzIHRvIHRoZSBkb2N1bWVudCB0byBrbm93IGlmIFNtb290aFNjcm9sbCBpcyBpbml0aWFsaXplZCAodG8gbWFuYWdlIG92ZXJmbG93IG9uIGNvbnRhaW5lcnMpXG4gICAgICAgICRodG1sLmFkZENsYXNzKCdoYXMtc21vb3RoLXNjcm9sbCcpO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmlydHVhbFNjcm9sbCh7XG4gICAgICAgICAgICBtb3VzZU11bHRpcGxpZXI6IDAuNSxcbiAgICAgICAgICAgIHRvdWNoTXVsdGlwbGllcjogMS41LFxuICAgICAgICAgICAgZmlyZWZveE11bHRpcGxpZXI6IDMwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5lcnRpYSA9IHRoaXMuaW5lcnRpYSAqIDAuMTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbCA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEB0b2RvIDogdG8gb3B0aW1pemVcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5vbigoZSkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgLT0gZS5kZWx0YVk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA8IDApIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IDA7XG4gICAgICAgICAgICBpZih0aGlzLmluc3RhbmNlLmRlbHRhLnkgPiB0aGlzLnNjcm9sbExpbWl0KSB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSB0aGlzLnNjcm9sbExpbWl0O1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTGltaXQoKTtcblxuICAgICAgICAvLyBAdG9kb1xuICAgICAgICAvLyB0aGlzLnNldFdoZWVsRGlyZWN0aW9uKHRoaXMuaXNSZXZlcnNlZCk7XG5cbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuXG4gICAgICAgIC8vIFJlYnVpbGQgZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlJFQlVJTEQsICgpID0+IHtcbiAgICAgICAgICAgIC8vIEB0b2RvXG4gICAgICAgICAgICAvLyB0aGlzLnNjcm9sbGJhci5zY3JvbGxUbygwLCAwLCAxKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBldmVudFxuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuVVBEQVRFLCAoZXZlbnQsIG9wdGlvbnMpID0+IHRoaXMudXBkYXRlKG9wdGlvbnMpKTtcblxuICAgICAgICAvLyBTY3JvbGx0byBidXR0b24gZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULkNMSUNLLCAnLmpzLXNjcm9sbHRvJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gJHRhcmdldC5kYXRhKCdvZmZzZXQnKTtcblxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgc291cmNlRWxlbTogJHRhcmdldCxcbiAgICAgICAgICAgICAgICBvZmZzZXRFbGVtOiBvZmZzZXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBAdG9kbyBzY3JvbGx0b1xuICAgICAgICAvLyB0aGlzLiRjb250YWluZXIub24oRVZFTlQuU0NST0xMVE8sIChldmVudCkgPT4gdGhpcy5zY3JvbGxUbyhldmVudC5vcHRpb25zKSk7XG5cbiAgICAgICAgLy8gU2V0dXAgZG9uZVxuICAgICAgICAkZG9jdW1lbnQudHJpZ2dlckhhbmRsZXIoe1xuICAgICAgICAgICAgdHlwZTogRVZFTlQuSVNSRUFEWVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXNpemUgZXZlbnRcbiAgICAgICAgJHdpbmRvdy5vbihFVkVOVC5SRVNJWkUsKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByZWxvYWRJbWFnZXMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBleGlzdGluZyBlbGVtZW50cyBhbmQgZmluZCBhbGwgYW5pbWF0YWJsZSBlbGVtZW50cy5cbiAgICAgKiBDYWxsZWQgb24gcGFnZSBsb2FkIGFuZCBhbnkgc3Vic2VxdWVudCB1cGRhdGVzLlxuICAgICAqL1xuICAgIGFkZEVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW107XG5cbiAgICAgICAgY29uc3QgJGVsZW1lbnRzID0gJCh0aGlzLnNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgbGVuID0gJGVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpICsrKSB7XG4gICAgICAgICAgICBsZXQgJGVsZW1lbnQgPSAkZWxlbWVudHMuZXEoaSk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFNwZWVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1zcGVlZCcpID8gJGVsZW1lbnQuYXR0cignZGF0YS1zcGVlZCcpIC8gMTAgOiBmYWxzZTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50UG9zaXRpb24gPSAkZWxlbWVudC5hdHRyKCdkYXRhLXBvc2l0aW9uJyk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhcmdldCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudEhvcml6b250YWwgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtaG9yaXpvbnRhbCcpID09PSAnc3RyaW5nJyk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFN0aWNreSA9ICh0eXBlb2YgJGVsZW1lbnQuYXR0cignZGF0YS1zdGlja3knKSA9PT0gJ3N0cmluZycpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRTdGlja3lUYXJnZXQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLXN0aWNreS10YXJnZXQnKTtcbiAgICAgICAgICAgIGxldCAkdGFyZ2V0ID0gKGVsZW1lbnRUYXJnZXQgJiYgJChlbGVtZW50VGFyZ2V0KS5sZW5ndGgpID8gJChlbGVtZW50VGFyZ2V0KSA6ICRlbGVtZW50O1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRPZmZzZXQgPSAkdGFyZ2V0Lm9mZnNldCgpLnRvcCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudExpbWl0ID0gZWxlbWVudE9mZnNldCArICR0YXJnZXQub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgICAgICAgbGV0IGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9IG51bGw7XG4gICAgICAgICAgICBpZih0eXBlb2YgJGVsZW1lbnQuYXR0cignZGF0YS12aWV3cG9ydC1vZmZzZXQnKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgIGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtdmlld3BvcnQtb2Zmc2V0Jykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9NYW5hZ2UgY2FsbGJhY2tcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q2FsbGJhY2tTdHJpbmcgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtY2FsbGJhY2snKSA9PT0gJ3N0cmluZycpID8gJGVsZW1lbnQuYXR0cignZGF0YS1jYWxsYmFjaycpIDogbnVsbDtcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgICAgICBpZihlbGVtZW50Q2FsbGJhY2tTdHJpbmcgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gZWxlbWVudENhbGxiYWNrU3RyaW5nLnN1YnN0cigwLCBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuaW5kZXhPZignKCcpKTtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uc1N0cmluZyA9IGVsZW1lbnRDYWxsYmFja1N0cmluZy5zdWJzdHIoZWxlbWVudENhbGxiYWNrU3RyaW5nLmluZGV4T2YoJygnKSxlbGVtZW50Q2FsbGJhY2tTdHJpbmcubGVuZ3RoIC0gZXZlbnQubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcgPSBvcHRpb25zU3RyaW5nLnJlcGxhY2UoJygnLCcnKTtcbiAgICAgICAgICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKCcpJywnJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IG9wdGlvbnNTdHJpbmcuc3BsaXQoJ3wnKTtcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb3B0aW9ucy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25zW2pdLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblswXSA9IG9wdGlvblswXS5yZXBsYWNlKCcgJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBhIGJvb2xlYW5cbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uWzFdID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9wdGlvblsxXSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhbHVlIGlzIG51bWVyaWNcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZigvXlxcZCskLy50ZXN0KG9wdGlvblsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHBhcnNlSW50KG9wdGlvblsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBhIFN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IG9wdGlvblsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvYmpbb3B0aW9uWzBdXSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50Q2FsbGJhY2sgPSB7ZXZlbnQ6ZXZlbnQsIG9wdGlvbnM6b2JqfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgZWxlbWVudHMgc3RheXMgdmlzaWJsZSBhZnRlciBzY3JvbGxpbmcgcGFzdCBpdFxuICAgICAgICAgICAgbGV0IGVsZW1lbnRSZXBlYXQgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtcmVwZWF0JykgPT09ICdzdHJpbmcnKTtcblxuICAgICAgICAgICAgbGV0IGVsZW1lbnRJblZpZXdDbGFzcyA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtaW52aWV3LWNsYXNzJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnRJblZpZXdDbGFzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50SW5WaWV3Q2xhc3MgPSAnaXMtc2hvdyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZWxlbWVudFRhcmdldCAmJiAkZWxlbWVudC5hdHRyKCdkYXRhLXRyYW5zZm9ybScpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudE9mZnNldCAtPSBwYXJzZUZsb2F0KCRlbGVtZW50LmF0dHIoJ2RhdGEtdHJhbnNmb3JtJykueSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50U3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50U3RpY2t5VGFyZ2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGltaXQgPSBJbmZpbml0eTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGltaXQgPSAkKGVsZW1lbnRTdGlja3lUYXJnZXQpLm9mZnNldCgpLnRvcCAtICRlbGVtZW50LmhlaWdodCgpICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSB7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQ6ICRlbGVtZW50LFxuICAgICAgICAgICAgICAgIGluVmlld0NsYXNzOiBlbGVtZW50SW5WaWV3Q2xhc3MsXG4gICAgICAgICAgICAgICAgbGltaXQ6IGVsZW1lbnRMaW1pdCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IE1hdGgucm91bmQoZWxlbWVudE9mZnNldCksXG4gICAgICAgICAgICAgICAgcmVwZWF0OiBlbGVtZW50UmVwZWF0LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBlbGVtZW50Q2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgdmlld3BvcnRPZmZzZXQ6IGVsZW1lbnRWaWV3cG9ydE9mZnNldFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gRm9yIHBhcmFsbGF4IGFuaW1hdGVkIGVsZW1lbnRzXG4gICAgICAgICAgICBpZiAoZWxlbWVudFNwZWVkICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50UG9zaXRpb24gPSAkZWxlbWVudC5hdHRyKCdkYXRhLXBvc2l0aW9uJyk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRIb3Jpem9udGFsID0gJGVsZW1lbnQuYXR0cignZGF0YS1ob3Jpem9udGFsJyk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRNaWRkbGUgPSAoKGVsZW1lbnRMaW1pdCAtIGVsZW1lbnRPZmZzZXQpIC8gMikgKyBlbGVtZW50T2Zmc2V0O1xuXG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5ob3Jpem9udGFsID0gZWxlbWVudEhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5taWRkbGUgPSBlbGVtZW50TWlkZGxlO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQub2Zmc2V0ID0gZWxlbWVudE9mZnNldDtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnBvc2l0aW9uID0gZWxlbWVudFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc3BlZWQgPSBlbGVtZW50U3BlZWRcblxuICAgICAgICAgICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cy5wdXNoKG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnN0aWNreSA9IGVsZW1lbnRTdGlja3k7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50U3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbGF1bmNoIHRoZSB0b2dnbGUgZnVuY3Rpb24gdG8gc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgc3RpY2t5IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVFbGVtZW50KG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNsYXNzL3RyYW5zZm9ybSBhbmltYXRpb25zLCBhbmQgdXBkYXRlIHRoZSBnbG9iYWwgc2Nyb2xsIHBvc2l0aW9ubmluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IGlzRmlyc3RDYWxsIERldGVybWluZXMgaWYgdGhpcyBpcyB0aGUgZmlyc3Qgb2NjdXJlbmNlIG9mIG1ldGhvZCBiZWluZyBjYWxsZWRcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9ICBzdGF0dXMgICAgICBPcHRpb25hbCBzdGF0dXMgb2JqZWN0IHJlY2VpdmVkIHdoZW4gbWV0aG9kIGlzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGVkIGJ5IHNtb290aC1zY3JvbGxiYXIgaW5zdGFuY2UgbGlzdGVuZXIuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICByZW5kZXIoaXNGaXJzdENhbGwsIGUpIHtcbiAgICAgICAgdGhpcy5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PnRoaXMucmVuZGVyKCkpO1xuXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMubGVycCh0aGlzLmluc3RhbmNlLnNjcm9sbC55LHRoaXMuaW5zdGFuY2UuZGVsdGEueSwgdGhpcy5pbmVydGlhKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gdmFsdWU7XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVG9wID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcblxuICAgICAgICAvLyBuZWVkIHRvIG1vdmUgdGhlIGNvbnRhaW5lclxuICAgICAgICB0aGlzLiRjb250YWluZXIuY3NzKHtcbiAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgwLCAkey10aGlzLmluc3RhbmNlLnNjcm9sbC55fXB4LCAwKWAsXG4gICAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgwLCAkey10aGlzLmluc3RhbmNlLnNjcm9sbC55fXB4LCAwKWAsXG4gICAgICAgICAgICAndHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKDAsICR7LXRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnl9cHgsIDApYFxuICAgICAgICB9KTtcblxuICAgICAgICBpZih0aGlzLmdldFdheSl7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+IHRoaXMuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGwuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8IHRoaXMuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGwuZGlyZWN0aW9uICE9PSAndXAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICd1cCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5nZXRTcGVlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLnkgIT09IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC5zcGVlZCA9IHRoaXMuc2Nyb2xsYmFyLm1vdmVtZW50Lnk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwueSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwuc3BlZWQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLnkgIT09IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnkgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cyhpc0ZpcnN0Q2FsbCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZUVsZW1lbnRzKCk7XG4gICAgfVxuXG4gICAgbGVycCAoc3RhcnQsIGVuZCwgYW10KXtcbiAgICAgICAgcmV0dXJuICgxLWFtdCkqc3RhcnQrYW10KmVuZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIGRlc2lyZWQgdGFyZ2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzY3JvbGxUbyhvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0ICR0YXJnZXRFbGVtID0gb3B0aW9ucy50YXJnZXRFbGVtO1xuICAgICAgICBjb25zdCAkc291cmNlRWxlbSA9IG9wdGlvbnMuc291cmNlRWxlbTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0RWxlbSA9IG9wdGlvbnMub2Zmc2V0RWxlbTtcbiAgICAgICAgbGV0IHRhcmdldE9mZnNldCA9IGlzTnVtZXJpYyhvcHRpb25zLnRhcmdldE9mZnNldCkgPyBwYXJzZUludChvcHRpb25zLnRhcmdldE9mZnNldCkgOiAwO1xuICAgICAgICBjb25zdCBkZWxheSA9IGlzTnVtZXJpYyhvcHRpb25zLmRlbGF5KSA/IHBhcnNlSW50KG9wdGlvbnMuZGVsYXkpIDogMDtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBpc051bWVyaWMob3B0aW9ucy5zcGVlZCkgPyBwYXJzZUludChvcHRpb25zLnNwZWVkKSA6IDkwMDtcbiAgICAgICAgY29uc3QgdG9Ub3AgPSBvcHRpb25zLnRvVG9wO1xuICAgICAgICBjb25zdCB0b0JvdHRvbSA9IG9wdGlvbnMudG9Cb3R0b207XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgICAgIGlmICh0eXBlb2YgJHRhcmdldEVsZW0gPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiAkc291cmNlRWxlbSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRhcmdldE9mZnNldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignWW91IG11c3Qgc3BlY2lmeSBhdCBsZWFzdCBvbmUgcGFyYW1ldGVyLicpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mICR0YXJnZXRFbGVtICE9PSAndW5kZWZpbmVkJyAmJiAkdGFyZ2V0RWxlbSBpbnN0YW5jZW9mIGpRdWVyeSAmJiAkdGFyZ2V0RWxlbS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAkdGFyZ2V0RWxlbS5vZmZzZXQoKS50b3AgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICsgdGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkc291cmNlRWxlbSAhPT0gJ3VuZGVmaW5lZCcgJiYgJHNvdXJjZUVsZW0gaW5zdGFuY2VvZiBqUXVlcnkgJiYgJHNvdXJjZUVsZW0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHRhcmdldERhdGEgPSAnJztcblxuICAgICAgICAgICAgaWYgKCRzb3VyY2VFbGVtLmF0dHIoJ2RhdGEtdGFyZ2V0JykpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXREYXRhID0gJHNvdXJjZUVsZW0uYXR0cignZGF0YS10YXJnZXQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0YSA9ICRzb3VyY2VFbGVtLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gJCh0YXJnZXREYXRhKS5vZmZzZXQoKS50b3AgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICsgdGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXRFbGVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb2Zmc2V0ID0gJChvZmZzZXRFbGVtKS5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0T2Zmc2V0IC0gb2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvVG9wID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRvQm90dG9tID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0aGlzLnNjcm9sbGJhci5saW1pdC55O1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbFRvKDAsIHRhcmdldE9mZnNldCwgc3BlZWQpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBzY3JvbGwgYmFyIGxpbWl0XG4gICAgICovXG4gICAgc2V0U2Nyb2xsTGltaXQoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsTGltaXQgPSB0aGlzLiRjb250YWluZXJbMF0uY2xpZW50SGVpZ2h0IC0gdGhpcy53aW5kb3dIZWlnaHQ7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zY3JvbGxMaW1pdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgQ1NTIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIG9uIGFuIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9ICAkZWxlbWVudCBUYXJnZXR0ZWQgalF1ZXJ5IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICB4ICAgICAgICBUcmFuc2xhdGUgdmFsdWVcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICB5ICAgICAgICBUcmFuc2xhdGUgdmFsdWVcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICB6ICAgICAgICBUcmFuc2xhdGUgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHRyYW5zZm9ybUVsZW1lbnQoJGVsZW1lbnQsIHgsIHksIHopIHtcbiAgICAgICAgLy8gRGVmYXVsdHNcbiAgICAgICAgeCA9IHggfHwgMDtcbiAgICAgICAgeSA9IHkgfHwgMDtcbiAgICAgICAgeiA9IHogfHwgMDtcblxuICAgICAgICAvLyBUcmFuc2xhdGUgYW5kIHN0b3JlIHRoZSBwb3NpdGlvbm5pbmcgYXMgYGRhdGFgXG4gICAgICAgICRlbGVtZW50LmNzcyh7XG4gICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weClgLFxuICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weClgLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgJHt6fXB4KWBcbiAgICAgICAgfSkuZGF0YSgndHJhbnNmb3JtJyx7XG4gICAgICAgICAgICB4IDogeCxcbiAgICAgICAgICAgIHkgOiB5LFxuICAgICAgICAgICAgeiA6IHpcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb29wIHRocm91Z2ggYWxsIHBhcmFsbGF4LWFibGUgZWxlbWVudHMgYW5kIGFwcGx5IHRyYW5zZm9ybSBtZXRob2QocykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBpc0ZpcnN0Q2FsbCBEZXRlcm1pbmVzIGlmIHRoaXMgaXMgdGhlIGZpcnN0IG9jY3VyZW5jZSBvZiBtZXRob2QgYmVpbmcgY2FsbGVkXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB0cmFuc2Zvcm1FbGVtZW50cyhpc0ZpcnN0Q2FsbCkge1xuICAgICAgICBpZiAodGhpcy5wYXJhbGxheEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhckJvdHRvbSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0aGlzLndpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhck1pZGRsZSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0aGlzLndpbmRvd01pZGRsZTtcblxuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gdGhpcy5wYXJhbGxheEVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ZXMgPSBbXTtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJFbCA9IHRoaXMucGFyYWxsYXhFbGVtZW50c1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsQm90dG9tID0gc2Nyb2xsYmFyQm90dG9tO1xuXG4gICAgICAgICAgICAgICAgbGV0IHRyYW5zZm9ybURpc3RhbmNlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyBEZWZpbmUgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdmlld1xuICAgICAgICAgICAgICAgIGxldCBpblZpZXcgPSAoc2Nyb2xsQm90dG9tID49IGN1ckVsLm9mZnNldCAmJiB0aGlzLmluc3RhbmNlLnNjcm9sbC55IDw9IGN1ckVsLmxpbWl0KTtcblxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRWxlbWVudChjdXJFbCwgaSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGaXJzdENhbGwgJiYgIWluVmlldyAmJiBjdXJFbC5zcGVlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBEaWZmZXJlbnQgY2FsY3VsYXRpb25zIGlmIGl0IGlzIHRoZSBmaXJzdCBjYWxsIGFuZCB0aGUgaXRlbSBpcyBub3QgaW4gdGhlIHZpZXdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckVsLnBvc2l0aW9uICE9PSAndG9wJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAoY3VyRWwub2Zmc2V0IC0gdGhpcy53aW5kb3dNaWRkbGUgLSBjdXJFbC5taWRkbGUpICogLWN1ckVsLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgZWxlbWVudCBpcyBpbiB2aWV3XG4gICAgICAgICAgICAgICAgaWYgKGluVmlldyAmJiBjdXJFbC5zcGVlZCkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGN1ckVsLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSAqIC1jdXJFbC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKHRoaXMuc2Nyb2xsTGltaXQgLSBzY3JvbGxCb3R0b20pICogY3VyRWwuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IChzY3JvbGxiYXJNaWRkbGUgLSBjdXJFbC5taWRkbGUpICogLWN1ckVsLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUcmFuc2Zvcm0gaG9yaXpvbnRhbCBPUiB2ZXJ0aWNhbC4gRGVmYXVsdHMgdG8gdmVydGljYWxcbiAgICAgICAgICAgICAgICBpZiAoaXNOdW1lcmljKHRyYW5zZm9ybURpc3RhbmNlKSkge1xuICAgICAgICAgICAgICAgICAgICAoY3VyRWwuaG9yaXpvbnRhbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50KGN1ckVsLiRlbGVtZW50LCB0cmFuc2Zvcm1EaXN0YW5jZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50KGN1ckVsLiRlbGVtZW50LCAwLCB0cmFuc2Zvcm1EaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGVsZW1lbnRzIGFuZCByZWNhbGN1bGF0ZSBhbGwgdGhlIHBvc2l0aW9ucyBvbiB0aGUgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICB1cGRhdGUob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICAvLyBAdG9kb1xuICAgICAgICAvLyB0aGlzLnNjcm9sbGJhci51cGRhdGUoKTtcbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xuICAgICAgICB0aGlzLndpbmRvd01pZGRsZSA9IHRoaXMud2luZG93SGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxMaW1pdCgpO1xuXG4gICAgICAgIC8vIEB0b2RvXG4gICAgICAgIC8vIHRoaXMuc2V0V2hlZWxEaXJlY3Rpb24odGhpcy5pc1JldmVyc2VkKTtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKHRydWUpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHNtb290aC1zY3JvbGxiYXIgc2Nyb2xsaW5nIGRpcmVjdGlvbiBmb3Igd2hlZWwgZXZlbnRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzUmV2ZXJzZWRcbiAgICAgKi9cbiAgICBzZXRXaGVlbERpcmVjdGlvbihpc1JldmVyc2VkKXtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIucmV2ZXJzZVdoZWVsKGlzUmV2ZXJzZWQpO1xuICAgIH1cblxuICAgIHByZWxvYWRJbWFnZXMoKSB7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJykpXG5cbiAgICAgICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaW1hZ2VzLnNwbGljZShpbWFnZXMuaW5kZXhPZihpbWFnZSksIDEpXG4gICAgICAgICAgICAgICAgaW1hZ2VzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnVwZGF0ZSgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW1nLnNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZSgnc3JjJylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95XG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgICAgICAkaHRtbC5yZW1vdmVDbGFzcygnaGFzLXNtb290aC1zY3JvbGwnKTtcbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmKTtcblxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbn1cbiIsImNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xuXG5jb25zdCAkZG9jdW1lbnQgICAgPSAkKGRvY3VtZW50KTtcbmNvbnN0ICR3aW5kb3cgICAgICA9ICQod2luZG93KTtcbmNvbnN0ICRodG1sICAgICAgICA9ICQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5yZW1vdmVDbGFzcygnaGFzLW5vLWpzJykuYWRkQ2xhc3MoJ2hhcy1qcycpO1xuY29uc3QgJGJvZHkgICAgICAgID0gJChkb2N1bWVudC5ib2R5KTtcblxuY29uc3QgaXNEZWJ1ZyAgICAgID0gISEkaHRtbC5kYXRhKCdkZWJ1ZycpO1xuXG5leHBvcnQgeyBEQVRBX0FQSV9LRVksICRkb2N1bWVudCwgJHdpbmRvdywgJGh0bWwsICRib2R5LCBpc0RlYnVnIH07XG4iLCJ2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGFycmF5TGlrZVBhdHRlcm4gPSAvXlxcW29iamVjdCAoPzpBcnJheXxGaWxlTGlzdClcXF0kLztcblxuLy8gdGhhbmtzLCBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9pbnN0YW5jZW9mLWNvbnNpZGVyZWQtaGFybWZ1bC1vci1ob3ctdG8td3JpdGUtYS1yb2J1c3QtaXNhcnJheS9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5ICggdGhpbmcgKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoIHRoaW5nICkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5TGlrZSAoIG9iaiApIHtcbiAgICByZXR1cm4gYXJyYXlMaWtlUGF0dGVybi50ZXN0KCB0b1N0cmluZy5jYWxsKCBvYmogKSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFcXVhbCAoIGEsIGIgKSB7XG4gICAgaWYgKCBhID09PSBudWxsICYmIGIgPT09IG51bGwgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICggdHlwZW9mIGEgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBiID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBhID09PSBiO1xufVxuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE4MDgyL3ZhbGlkYXRlLW51bWJlcnMtaW4tamF2YXNjcmlwdC1pc251bWVyaWNcbmV4cG9ydCBmdW5jdGlvbiBpc051bWVyaWMgKCB0aGluZyApIHtcbiAgICByZXR1cm4gIWlzTmFOKCBwYXJzZUZsb2F0KCB0aGluZyApICkgJiYgaXNGaW5pdGUoIHRoaW5nICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAoIHRoaW5nICkge1xuICAgIHJldHVybiAoIHRoaW5nICYmIHRvU3RyaW5nLmNhbGwoIHRoaW5nICkgPT09ICdbb2JqZWN0IE9iamVjdF0nICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKCB0aGluZyApIHtcbiAgICB2YXIgZ2V0VHlwZSA9IHt9O1xuICAgIHJldHVybiB0aGluZyAmJiBnZXRUeXBlLnRvU3RyaW5nLmNhbGwodGhpbmcpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZighb2JqZWN0KSByZXR1cm4gY29uc29sZS53YXJuKCdiaW5kQWxsIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBhcmd1bWVudC4nKTtcblxuICAgIHZhciBmdW5jdGlvbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgaWYgKGZ1bmN0aW9ucy5sZW5ndGggPT09IDApIHtcblxuICAgICAgICBmb3IgKHZhciBtZXRob2QgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBpZihoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgbWV0aG9kKSkge1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBvYmplY3RbbWV0aG9kXSA9PSAnZnVuY3Rpb24nICYmIHRvU3RyaW5nLmNhbGwob2JqZWN0W21ldGhvZF0pID09IFwiW29iamVjdCBGdW5jdGlvbl1cIikge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbnMucHVzaChtZXRob2QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmdW5jdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGYgPSBmdW5jdGlvbnNbaV07XG4gICAgICAgIG9iamVjdFtmXSA9IGJpbmQob2JqZWN0W2ZdLCBvYmplY3QpO1xuICAgIH1cbn07XG5cbi8qXG4gICAgRmFzdGVyIGJpbmQgd2l0aG91dCBzcGVjaWZpYy1jYXNlIGNoZWNraW5nLiAoc2VlIGh0dHBzOi8vY29kZXJ3YWxsLmNvbS9wL29pM2ozdykuXG4gICAgYmluZEFsbCBpcyBvbmx5IG5lZWRlZCBmb3IgZXZlbnRzIGJpbmRpbmcgc28gbm8gbmVlZCB0byBtYWtlIHNsb3cgZml4ZXMgZm9yIGNvbnN0cnVjdG9yXG4gICAgb3IgcGFydGlhbCBhcHBsaWNhdGlvbi5cbiovXG5mdW5jdGlvbiBiaW5kKGZ1bmMsIGNvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gIH07XG59IiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjkuMlxuKGZ1bmN0aW9uKCkge1xuICB2YXIgcm9vdDtcblxuICByb290ID0gdHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIgJiYgZXhwb3J0cyAhPT0gbnVsbCA/IGV4cG9ydHMgOiB0aGlzO1xuXG4gIHJvb3QuTGV0aGFyZ3kgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gTGV0aGFyZ3koc3RhYmlsaXR5LCBzZW5zaXRpdml0eSwgdG9sZXJhbmNlLCBkZWxheSkge1xuICAgICAgdGhpcy5zdGFiaWxpdHkgPSBzdGFiaWxpdHkgIT0gbnVsbCA/IE1hdGguYWJzKHN0YWJpbGl0eSkgOiA4O1xuICAgICAgdGhpcy5zZW5zaXRpdml0eSA9IHNlbnNpdGl2aXR5ICE9IG51bGwgPyAxICsgTWF0aC5hYnMoc2Vuc2l0aXZpdHkpIDogMTAwO1xuICAgICAgdGhpcy50b2xlcmFuY2UgPSB0b2xlcmFuY2UgIT0gbnVsbCA/IDEgKyBNYXRoLmFicyh0b2xlcmFuY2UpIDogMS4xO1xuICAgICAgdGhpcy5kZWxheSA9IGRlbGF5ICE9IG51bGwgPyBkZWxheSA6IDE1MDtcbiAgICAgIHRoaXMubGFzdFVwRGVsdGFzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDEsIHJlZiA9IHRoaXMuc3RhYmlsaXR5ICogMjsgMSA8PSByZWYgPyBpIDw9IHJlZiA6IGkgPj0gcmVmOyAxIDw9IHJlZiA/IGkrKyA6IGktLSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLmxhc3REb3duRGVsdGFzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDEsIHJlZiA9IHRoaXMuc3RhYmlsaXR5ICogMjsgMSA8PSByZWYgPyBpIDw9IHJlZiA6IGkgPj0gcmVmOyAxIDw9IHJlZiA/IGkrKyA6IGktLSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLmRlbHRhc1RpbWVzdGFtcCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBsYXN0RGVsdGE7XG4gICAgICBlID0gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XG4gICAgICBpZiAoZS53aGVlbERlbHRhICE9IG51bGwpIHtcbiAgICAgICAgbGFzdERlbHRhID0gZS53aGVlbERlbHRhO1xuICAgICAgfSBlbHNlIGlmIChlLmRlbHRhWSAhPSBudWxsKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUuZGVsdGFZICogLTQwO1xuICAgICAgfSBlbHNlIGlmICgoZS5kZXRhaWwgIT0gbnVsbCkgfHwgZS5kZXRhaWwgPT09IDApIHtcbiAgICAgICAgbGFzdERlbHRhID0gZS5kZXRhaWwgKiAtNDA7XG4gICAgICB9XG4gICAgICB0aGlzLmRlbHRhc1RpbWVzdGFtcC5wdXNoKERhdGUubm93KCkpO1xuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAuc2hpZnQoKTtcbiAgICAgIGlmIChsYXN0RGVsdGEgPiAwKSB7XG4gICAgICAgIHRoaXMubGFzdFVwRGVsdGFzLnB1c2gobGFzdERlbHRhKTtcbiAgICAgICAgdGhpcy5sYXN0VXBEZWx0YXMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmVydGlhKDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcy5wdXNoKGxhc3REZWx0YSk7XG4gICAgICAgIHRoaXMubGFzdERvd25EZWx0YXMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmVydGlhKC0xKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLmlzSW5lcnRpYSA9IGZ1bmN0aW9uKGRpcmVjdGlvbikge1xuICAgICAgdmFyIGxhc3REZWx0YXMsIGxhc3REZWx0YXNOZXcsIGxhc3REZWx0YXNPbGQsIG5ld0F2ZXJhZ2UsIG5ld1N1bSwgb2xkQXZlcmFnZSwgb2xkU3VtO1xuICAgICAgbGFzdERlbHRhcyA9IGRpcmVjdGlvbiA9PT0gLTEgPyB0aGlzLmxhc3REb3duRGVsdGFzIDogdGhpcy5sYXN0VXBEZWx0YXM7XG4gICAgICBpZiAobGFzdERlbHRhc1swXSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZGVsdGFzVGltZXN0YW1wWyh0aGlzLnN0YWJpbGl0eSAqIDIpIC0gMl0gKyB0aGlzLmRlbGF5ID4gRGF0ZS5ub3coKSAmJiBsYXN0RGVsdGFzWzBdID09PSBsYXN0RGVsdGFzWyh0aGlzLnN0YWJpbGl0eSAqIDIpIC0gMV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgbGFzdERlbHRhc09sZCA9IGxhc3REZWx0YXMuc2xpY2UoMCwgdGhpcy5zdGFiaWxpdHkpO1xuICAgICAgbGFzdERlbHRhc05ldyA9IGxhc3REZWx0YXMuc2xpY2UodGhpcy5zdGFiaWxpdHksIHRoaXMuc3RhYmlsaXR5ICogMik7XG4gICAgICBvbGRTdW0gPSBsYXN0RGVsdGFzT2xkLnJlZHVjZShmdW5jdGlvbih0LCBzKSB7XG4gICAgICAgIHJldHVybiB0ICsgcztcbiAgICAgIH0pO1xuICAgICAgbmV3U3VtID0gbGFzdERlbHRhc05ldy5yZWR1Y2UoZnVuY3Rpb24odCwgcykge1xuICAgICAgICByZXR1cm4gdCArIHM7XG4gICAgICB9KTtcbiAgICAgIG9sZEF2ZXJhZ2UgPSBvbGRTdW0gLyBsYXN0RGVsdGFzT2xkLmxlbmd0aDtcbiAgICAgIG5ld0F2ZXJhZ2UgPSBuZXdTdW0gLyBsYXN0RGVsdGFzTmV3Lmxlbmd0aDtcbiAgICAgIGlmIChNYXRoLmFicyhvbGRBdmVyYWdlKSA8IE1hdGguYWJzKG5ld0F2ZXJhZ2UgKiB0aGlzLnRvbGVyYW5jZSkgJiYgKHRoaXMuc2Vuc2l0aXZpdHkgPCBNYXRoLmFicyhuZXdBdmVyYWdlKSkpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLnNob3dMYXN0VXBEZWx0YXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhc3RVcERlbHRhcztcbiAgICB9O1xuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLnNob3dMYXN0RG93bkRlbHRhcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFzdERvd25EZWx0YXM7XG4gICAgfTtcblxuICAgIHJldHVybiBMZXRoYXJneTtcblxuICB9KSgpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsImZ1bmN0aW9uIEUgKCkge1xuICAvLyBLZWVwIHRoaXMgZW1wdHkgc28gaXQncyBlYXNpZXIgdG8gaW5oZXJpdCBmcm9tXG4gIC8vICh2aWEgaHR0cHM6Ly9naXRodWIuY29tL2xpcHNtYWNrIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9pc3N1ZXMvMylcbn1cblxuRS5wcm90b3R5cGUgPSB7XG4gIG9uOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG5cbiAgICAoZVtuYW1lXSB8fCAoZVtuYW1lXSA9IFtdKSkucHVzaCh7XG4gICAgICBmbjogY2FsbGJhY2ssXG4gICAgICBjdHg6IGN0eFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb25jZTogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgZnVuY3Rpb24gbGlzdGVuZXIgKCkge1xuICAgICAgc2VsZi5vZmYobmFtZSwgbGlzdGVuZXIpO1xuICAgICAgY2FsbGJhY2suYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBsaXN0ZW5lci5fID0gY2FsbGJhY2tcbiAgICByZXR1cm4gdGhpcy5vbihuYW1lLCBsaXN0ZW5lciwgY3R4KTtcbiAgfSxcblxuICBlbWl0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBkYXRhID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBldnRBcnIgPSAoKHRoaXMuZSB8fCAodGhpcy5lID0ge30pKVtuYW1lXSB8fCBbXSkuc2xpY2UoKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbiA9IGV2dEFyci5sZW5ndGg7XG5cbiAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xuICAgICAgZXZ0QXJyW2ldLmZuLmFwcGx5KGV2dEFycltpXS5jdHgsIGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcbiAgICB2YXIgZXZ0cyA9IGVbbmFtZV07XG4gICAgdmFyIGxpdmVFdmVudHMgPSBbXTtcblxuICAgIGlmIChldnRzICYmIGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXZ0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZXZ0c1tpXS5mbiAhPT0gY2FsbGJhY2sgJiYgZXZ0c1tpXS5mbi5fICE9PSBjYWxsYmFjaylcbiAgICAgICAgICBsaXZlRXZlbnRzLnB1c2goZXZ0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGZyb20gcXVldWUgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgIC8vIFN1Z2dlc3RlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbGF6ZFxuICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9jb21taXQvYzZlYmZhYTliYzk3M2IzM2QxMTBhODRhMzA3NzQyYjdjZjk0Yzk1MyNjb21taXRjb21tZW50LTUwMjQ5MTBcblxuICAgIChsaXZlRXZlbnRzLmxlbmd0aClcbiAgICAgID8gZVtuYW1lXSA9IGxpdmVFdmVudHNcbiAgICAgIDogZGVsZXRlIGVbbmFtZV07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNvdXJjZSkpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ3RpbnktZW1pdHRlcicpO1xudmFyIExldGhhcmd5ID0gcmVxdWlyZSgnbGV0aGFyZ3knKS5MZXRoYXJneTtcbnZhciBzdXBwb3J0ID0gcmVxdWlyZSgnLi9zdXBwb3J0Jyk7XG52YXIgY2xvbmUgPSByZXF1aXJlKCcuL2Nsb25lJyk7XG52YXIgYmluZEFsbCA9IHJlcXVpcmUoJ2JpbmRhbGwtc3RhbmRhbG9uZScpO1xudmFyIEVWVF9JRCA9ICd2aXJ0dWFsc2Nyb2xsJztcblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsU2Nyb2xsO1xuXG52YXIga2V5Q29kZXMgPSB7XG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbiAgICBTUEFDRTogMzJcbn07XG5cbmZ1bmN0aW9uIFZpcnR1YWxTY3JvbGwob3B0aW9ucykge1xuICAgIGJpbmRBbGwodGhpcywgJ19vbldoZWVsJywgJ19vbk1vdXNlV2hlZWwnLCAnX29uVG91Y2hTdGFydCcsICdfb25Ub3VjaE1vdmUnLCAnX29uS2V5RG93bicpO1xuXG4gICAgdGhpcy5lbCA9IHdpbmRvdztcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmVsKSB7XG4gICAgICAgIHRoaXMuZWwgPSBvcHRpb25zLmVsO1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5lbDtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gb2JqZWN0QXNzaWduKHtcbiAgICAgICAgbW91c2VNdWx0aXBsaWVyOiAxLFxuICAgICAgICB0b3VjaE11bHRpcGxpZXI6IDIsXG4gICAgICAgIGZpcmVmb3hNdWx0aXBsaWVyOiAxNSxcbiAgICAgICAga2V5U3RlcDogMTIwLFxuICAgICAgICBwcmV2ZW50VG91Y2g6IGZhbHNlLFxuICAgICAgICB1bnByZXZlbnRUb3VjaENsYXNzOiAndnMtdG91Y2htb3ZlLWFsbG93ZWQnLFxuICAgICAgICBsaW1pdEluZXJ0aWE6IGZhbHNlXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW5lcnRpYSkgdGhpcy5fbGV0aGFyZ3kgPSBuZXcgTGV0aGFyZ3koKTtcblxuICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuICAgIHRoaXMuX2V2ZW50ID0ge1xuICAgICAgICB5OiAwLFxuICAgICAgICB4OiAwLFxuICAgICAgICBkZWx0YVg6IDAsXG4gICAgICAgIGRlbHRhWTogMFxuICAgIH07XG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy5ib2R5VG91Y2hBY3Rpb24gPSBudWxsO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wYXNzaXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lck9wdGlvbnMgPSB7cGFzc2l2ZTogdGhpcy5vcHRpb25zLnBhc3NpdmV9O1xuICAgIH1cbn1cblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX25vdGlmeSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LnggKz0gZXZ0LmRlbHRhWDtcbiAgICBldnQueSArPSBldnQuZGVsdGFZO1xuXG4gICB0aGlzLl9lbWl0dGVyLmVtaXQoRVZUX0lELCB7XG4gICAgICAgIHg6IGV2dC54LFxuICAgICAgICB5OiBldnQueSxcbiAgICAgICAgZGVsdGFYOiBldnQuZGVsdGFYLFxuICAgICAgICBkZWx0YVk6IGV2dC5kZWx0YVksXG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGVcbiAgIH0pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uV2hlZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKHRoaXMuX2xldGhhcmd5ICYmIHRoaXMuX2xldGhhcmd5LmNoZWNrKGUpID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgIC8vIEluIENocm9tZSBhbmQgaW4gRmlyZWZveCAoYXQgbGVhc3QgdGhlIG5ldyBvbmUpXG4gICAgZXZ0LmRlbHRhWCA9IGUud2hlZWxEZWx0YVggfHwgZS5kZWx0YVggKiAtMTtcbiAgICBldnQuZGVsdGFZID0gZS53aGVlbERlbHRhWSB8fCBlLmRlbHRhWSAqIC0xO1xuXG4gICAgLy8gZm9yIG91ciBwdXJwb3NlIGRlbHRhbW9kZSA9IDEgbWVhbnMgdXNlciBpcyBvbiBhIHdoZWVsIG1vdXNlLCBub3QgdG91Y2ggcGFkXG4gICAgLy8gcmVhbCBtZWFuaW5nOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2hlZWxFdmVudCNEZWx0YV9tb2Rlc1xuICAgIGlmKHN1cHBvcnQuaXNGaXJlZm94ICYmIGUuZGVsdGFNb2RlID09IDEpIHtcbiAgICAgICAgZXZ0LmRlbHRhWCAqPSBvcHRpb25zLmZpcmVmb3hNdWx0aXBsaWVyO1xuICAgICAgICBldnQuZGVsdGFZICo9IG9wdGlvbnMuZmlyZWZveE11bHRpcGxpZXI7XG4gICAgfVxuXG4gICAgZXZ0LmRlbHRhWCAqPSBvcHRpb25zLm1vdXNlTXVsdGlwbGllcjtcbiAgICBldnQuZGVsdGFZICo9IG9wdGlvbnMubW91c2VNdWx0aXBsaWVyO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uTW91c2VXaGVlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW5lcnRpYSAmJiB0aGlzLl9sZXRoYXJneS5jaGVjayhlKSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgIC8vIEluIFNhZmFyaSwgSUUgYW5kIGluIENocm9tZSBpZiAnd2hlZWwnIGlzbid0IGRlZmluZWRcbiAgICBldnQuZGVsdGFYID0gKGUud2hlZWxEZWx0YVgpID8gZS53aGVlbERlbHRhWCA6IDA7XG4gICAgZXZ0LmRlbHRhWSA9IChlLndoZWVsRGVsdGFZKSA/IGUud2hlZWxEZWx0YVkgOiBlLndoZWVsRGVsdGE7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciB0ID0gKGUudGFyZ2V0VG91Y2hlcykgPyBlLnRhcmdldFRvdWNoZXNbMF0gOiBlO1xuICAgIHRoaXMudG91Y2hTdGFydFggPSB0LnBhZ2VYO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSB0LnBhZ2VZO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uVG91Y2hNb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmKG9wdGlvbnMucHJldmVudFRvdWNoXG4gICAgICAgICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMob3B0aW9ucy51bnByZXZlbnRUb3VjaENsYXNzKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgdmFyIHQgPSAoZS50YXJnZXRUb3VjaGVzKSA/IGUudGFyZ2V0VG91Y2hlc1swXSA6IGU7XG5cbiAgICBldnQuZGVsdGFYID0gKHQucGFnZVggLSB0aGlzLnRvdWNoU3RhcnRYKSAqIG9wdGlvbnMudG91Y2hNdWx0aXBsaWVyO1xuICAgIGV2dC5kZWx0YVkgPSAodC5wYWdlWSAtIHRoaXMudG91Y2hTdGFydFkpICogb3B0aW9ucy50b3VjaE11bHRpcGxpZXI7XG5cbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gdC5wYWdlWDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gdC5wYWdlWTtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbktleURvd24gPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuICAgIGV2dC5kZWx0YVggPSBldnQuZGVsdGFZID0gMDtcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gNDBcblxuICAgIHN3aXRjaChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5MRUZUOlxuICAgICAgICBjYXNlIGtleUNvZGVzLlVQOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IHRoaXMub3B0aW9ucy5rZXlTdGVwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5SSUdIVDpcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5ET1dOOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IC0gdGhpcy5vcHRpb25zLmtleVN0ZXA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5TUEFDRSAmJiBlLnNoaWZ0S2V5OlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IHdpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGtleUNvZGVzLlNQQUNFOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IC0gd2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX2JpbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzdXBwb3J0Lmhhc1doZWVsRXZlbnQpIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9vbldoZWVsLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgaWYoc3VwcG9ydC5oYXNNb3VzZVdoZWVsRXZlbnQpIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuX29uTW91c2VXaGVlbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuXG4gICAgaWYoc3VwcG9ydC5oYXNUb3VjaCkge1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzUG9pbnRlciAmJiBzdXBwb3J0Lmhhc1RvdWNoV2luKSB7XG4gICAgICAgIHRoaXMuYm9keVRvdWNoQWN0aW9uID0gZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb24gPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyRG93bicsIHRoaXMuX29uVG91Y2hTdGFydCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyTW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc0tleURvd24pIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX3VuYmluZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHN1cHBvcnQuaGFzV2hlZWxFdmVudCkgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuX29uV2hlZWwpO1xuICAgIGlmKHN1cHBvcnQuaGFzTW91c2VXaGVlbEV2ZW50KSB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLl9vbk1vdXNlV2hlZWwpO1xuXG4gICAgaWYoc3VwcG9ydC5oYXNUb3VjaCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc1BvaW50ZXIgJiYgc3VwcG9ydC5oYXNUb3VjaFdpbikge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb24gPSB0aGlzLmJvZHlUb3VjaEFjdGlvbjtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJNb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRydWUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzS2V5RG93bikgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bik7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGNiLCBjdHgpIHtcbiAgdGhpcy5fZW1pdHRlci5vbihFVlRfSUQsIGNiLCBjdHgpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9lbWl0dGVyLmU7XG4gIGlmIChldmVudHMgJiYgZXZlbnRzW0VWVF9JRF0gJiYgZXZlbnRzW0VWVF9JRF0ubGVuZ3RoID09PSAxKSB0aGlzLl9iaW5kKCk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihjYiwgY3R4KSB7XG4gIHRoaXMuX2VtaXR0ZXIub2ZmKEVWVF9JRCwgY2IsIGN0eCk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2VtaXR0ZXIuZTtcbiAgaWYgKCFldmVudHNbRVZUX0lEXSB8fCBldmVudHNbRVZUX0lEXS5sZW5ndGggPD0gMCkgdGhpcy5fdW5iaW5kKCk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQueCA9IDA7XG4gICAgZXZ0LnkgPSAwO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2VtaXR0ZXIub2ZmKCk7XG4gICAgdGhpcy5fdW5iaW5kKCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiBnZXRTdXBwb3J0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGhhc1doZWVsRXZlbnQ6ICdvbndoZWVsJyBpbiBkb2N1bWVudCxcbiAgICAgICAgaGFzTW91c2VXaGVlbEV2ZW50OiAnb25tb3VzZXdoZWVsJyBpbiBkb2N1bWVudCxcbiAgICAgICAgaGFzVG91Y2g6ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNUb3VjaFdpbjogbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgJiYgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAxLFxuICAgICAgICBoYXNQb2ludGVyOiAhIXdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCxcbiAgICAgICAgaGFzS2V5RG93bjogJ29ua2V5ZG93bicgaW4gZG9jdW1lbnQsXG4gICAgICAgIGlzRmlyZWZveDogbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPiAtMVxuICAgIH07XG59KSgpO1xuIl19
