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
    selector: '.js-animate',
    smooth: true,
    smoothMobile: true,
    mobileContainer: $(document),
    getDirection: true,
    getSpeed: true,
    inertia: 1,
    onScroll: function onScroll(e) {
      console.log(e.scroll.speed);
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
  mobileContainer: _environment.$document,
  onScroll: function onScroll() {},
  selector: '.js-animate',
  smooth: false,
  smoothMobile: false,
  reversed: false,
  getDirection: false,
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
    _this.isReversed = options.reversed || _Scroll2.DEFAULTS.reversed;
    _this.getDirection = options.getDirection || _Scroll2.DEFAULTS.getDirection;
    _this.getSpeed = options.getSpeed || _Scroll2.DEFAULTS.getSpeed;
    _this.inertia = options.inertia || _Scroll2.DEFAULTS.inertia;
    _this.parallaxElements = [];
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
        _this2.instance.delta.y -= e.deltaY;
        _this2.isScrolling = true;
        if (_this2.instance.delta.y < 0) _this2.instance.delta.y = 0;
        if (_this2.instance.delta.y > _this2.instance.limit) _this2.instance.delta.y = _this2.instance.limit;
      });
      this.setScrollLimit();
      this.addElements(); // Rebuild event

      this.$container.on(_Scroll2.EVENT.REBUILD, function () {
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
      this.timestamp = Date.now();
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

      if (this.isScrolling) {
        this.instance.scroll.y = this.lerp(this.instance.scroll.y, this.instance.delta.y, this.inertia);
      } else {
        this.instance.scroll.y = this.lerp(this.instance.scroll.y, this.instance.delta.y, this.inertia * 0.5);
      } // need to move the container


      this.$container.css({
        '-webkit-transform': "translate3d(0, ".concat(-this.instance.scroll.y, "px, 0)"),
        '-ms-transform': "translate3d(0, ".concat(-this.instance.scroll.y, "px, 0)"),
        'transform': "translate3d(0, ".concat(-this.instance.scroll.y, "px, 0)")
      });

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

      this.transformElements(isFirstCall);
      this.animateElements();
      this.callbacks.onScroll(this.instance);
      this.timestamp = Date.now();
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
        targetOffset = this.instance.limit;
      }

      setTimeout(function () {
        _this4.isScrolling = false;
        _this4.instance.delta.y = targetOffset;
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
      x = x || 0;
      y = y || 0;
      z = z || 0;

      if (!delay) {
        // Translate and store the positionning as `data`
        $element.css({
          '-webkit-transform': "translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)"),
          '-ms-transform': "translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)"),
          'transform': "translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)")
        }).data('transform', {
          x: x,
          y: y,
          z: z
        });
      } else {
        var start = this.getTranslate($element[0]);
        var lerpY = this.lerp(start.y, y, delay);
        var lerpX = this.lerp(start.x, x, delay);
        $element.css({
          '-webkit-transform': "translate3d(".concat(lerpX, "px, ").concat(lerpY, "px, ").concat(z, "px)"),
          '-ms-transform': "translate3d(".concat(lerpX, "px, ").concat(lerpY, "px, ").concat(z, "px)"),
          'transform': "translate3d(".concat(lerpX, "px, ").concat(lerpY, "px, ").concat(z, "px)")
        }).data('transform', {
          x: lerpX,
          y: lerpY,
          z: z
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9hcHAuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvU2Nyb2xsLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL1Ntb290aFNjcm9sbC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL1Njcm9sbC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL1Njcm9sbE1hbmFnZXIuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvdmVuZG9ycy9TbW9vdGhTY3JvbGwuanMiLCJhc3NldHMvc2NyaXB0cy91dGlscy9kZWJvdW5jZS5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL2Vudmlyb25tZW50LmpzIiwiYXNzZXRzL3NjcmlwdHMvdXRpbHMvaXMuanMiLCJub2RlX21vZHVsZXMvYmluZGFsbC1zdGFuZGFsb25lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xldGhhcmd5L2xldGhhcmd5LmpzIiwibm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvdGlueS1lbWl0dGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtc2Nyb2xsL3NyYy9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLXNjcm9sbC9zcmMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvc3JjL3N1cHBvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0lBOzs7O0FBSkE7QUFDQTtBQUNBOztBQUNBO0FBR0EsQ0FBQyxZQUFXO0FBRVI7QUFDQSxNQUFNLFlBQVksR0FBRyxJQUFJLHlCQUFKLENBQWtCO0FBQ25DLElBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxZQUFELENBRHVCO0FBRW5DLElBQUEsUUFBUSxFQUFFLGFBRnlCO0FBR25DLElBQUEsTUFBTSxFQUFFLElBSDJC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QUFJLE9BQU8sQ0FBQyxRQUFSLENBQWlCLElBQWpCLENBQXNCLEtBQXRCLE1BQWlDLG1CQUFqRDtBQUNIOzs7QUNwQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFwcFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCBTY3JvbGxNYW5hZ2VyIGZyb20gJy4vc2Nyb2xsL3ZlbmRvcnMvU2Nyb2xsTWFuYWdlcic7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8vIEluaXQgTG9jb21vdGl2ZSBTY3JvbGxcbiAgICBjb25zdCBzbW9vdGhTY3JvbGwgPSBuZXcgU2Nyb2xsTWFuYWdlcih7XG4gICAgICAgIGNvbnRhaW5lcjogJCgnI2pzLXNjcm9sbCcpLFxuICAgICAgICBzZWxlY3RvcjogJy5qcy1hbmltYXRlJyxcbiAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICBzbW9vdGhNb2JpbGU6IHRydWUsXG4gICAgICAgIG1vYmlsZUNvbnRhaW5lcjogJChkb2N1bWVudCksXG4gICAgICAgIGdldERpcmVjdGlvbjogdHJ1ZSxcbiAgICAgICAgZ2V0U3BlZWQ6IHRydWUsXG4gICAgICAgIGluZXJ0aWE6IDEsXG4gICAgICAgIG9uU2Nyb2xsOiAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS5zY3JvbGwuc3BlZWQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn0pKCk7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRXh0ZW5kZWQgTG9jb21vdGl2ZSBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgU2Nyb2xsLCB7IEVWRU5UX0tFWSBhcyBWRU5ET1JfRVZFTlRfS0VZLCBFVkVOVCBhcyBWRU5ET1JfRVZFTlRTLCBERUZBVUxUUyBhcyBWRU5ET1JfREVGQVVMVFMgfSBmcm9tICcuL3ZlbmRvcnMvU2Nyb2xsJ1xuXG4vKipcbiAqIFVOQ09NTUVOVCBPTkxZIFRIRSBMSU5FUyBZT1UgTkVFRFxuICovXG4vLyBpbXBvcnQgeyAkd2luZG93LCAkZG9jdW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9lbnZpcm9ubWVudCc7XG4vLyBpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UnO1xuLy8gaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRfS0VZID0gVkVORE9SX0VWRU5UX0tFWTtcblxuZXhwb3J0IGNvbnN0IEVWRU5UID0gT2JqZWN0LmFzc2lnbihWRU5ET1JfRVZFTlRTLCB7XG4gICAgLy8gVEVTVDogYHRlc3QuJHtFVkVOVF9LRVl9YFxufSk7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IE9iamVjdC5hc3NpZ24oVkVORE9SX0RFRkFVTFRTLCB7IH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFNjcm9sbCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKVxuICAgIH1cbn1cbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFeHRlbmRlZCBMb2NvbW90aXZlIFNtb290aCBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJy4vdmVuZG9ycy9TbW9vdGhTY3JvbGwnXG5cbi8qKlxuICogVU5DT01NRU5UIE9OTFkgVEhFIExJTkVTIFlPVSBORUVEXG4gKi9cbi8vIGltcG9ydCB7ICR3aW5kb3csICRkb2N1bWVudCwgJGh0bWwgfSBmcm9tICcuLi91dGlscy9lbnZpcm9ubWVudCc7XG4vLyBpbXBvcnQgU2Nyb2xsLCB7IERFRkFVTFRTLCBFVkVOVCB9IGZyb20gJy4vU2Nyb2xsJztcblxuLy8gaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uL3V0aWxzL2RlYm91bmNlJztcbi8vIGltcG9ydCBTY3JvbGxiYXIgZnJvbSAnc21vb3RoLXNjcm9sbGJhcic7XG4vLyBpbXBvcnQgeyBpc051bWVyaWMgfSBmcm9tICcuLi91dGlscy9pcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgU21vb3RoU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvY29tb3RpdmUgU2Nyb2xsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuaW1wb3J0IHsgJHdpbmRvdywgJGRvY3VtZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRfS0VZID0gYExvY29tb3RpdmVTY3JvbGxgO1xuXG5leHBvcnQgY29uc3QgRVZFTlQgPSB7XG4gICAgQ0xJQ0s6IGBjbGljay4ke0VWRU5UX0tFWX1gLFxuICAgIElTUkVBRFk6IGBpc1JlYWR5LiR7RVZFTlRfS0VZfWAsXG4gICAgUkVCVUlMRDogYHJlYnVpbGQuJHtFVkVOVF9LRVl9YCxcbiAgICBSRU5ERVI6IGByZW5kZXIuJHtFVkVOVF9LRVl9YCxcbiAgICBSRVNJWkU6IGByZXNpemUuJHtFVkVOVF9LRVl9YCxcbiAgICBTQ1JPTEw6IGBzY3JvbGwuJHtFVkVOVF9LRVl9YCxcbiAgICBTQ1JPTExUTzogYHNjcm9sbFRvLiR7RVZFTlRfS0VZfWAsXG4gICAgVVBEQVRFOiBgdXBkYXRlLiR7RVZFTlRfS0VZfWBcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IHtcbiAgICBjb250YWluZXI6ICRkb2N1bWVudCxcbiAgICBtb2JpbGVDb250YWluZXI6ICRkb2N1bWVudCxcbiAgICBvblNjcm9sbDogZnVuY3Rpb24oKXt9LFxuICAgIHNlbGVjdG9yOiAnLmpzLWFuaW1hdGUnLFxuICAgIHNtb290aDogZmFsc2UsXG4gICAgc21vb3RoTW9iaWxlOiBmYWxzZSxcbiAgICByZXZlcnNlZDogZmFsc2UsXG4gICAgZ2V0RGlyZWN0aW9uOiBmYWxzZSxcbiAgICBnZXRTcGVlZDogZmFsc2Vcbn07XG5cbi8qKlxuICogTWFuYWdlIGFuaW1hdGlvbiBvZiBlbGVtZW50cyBvbiB0aGUgcGFnZSBhY2NvcmRpbmcgdG8gc2Nyb2xsIHBvc2l0aW9uLlxuICpcbiAqIEB0b2RvICBNYW5hZ2Ugc29tZSBvcHRpb25zIChub3JtYWxseSBmcm9tIGRhdGEgYXR0cmlidXRlcykgd2l0aCBjb25zdHJ1Y3RvciBvcHRpb25zIChleC46IHNldCByZXBlYXQgZm9yIGFsbClcbiAqIEB0b2RvICBNZXRob2QgdG8gZ2V0IHRoZSBkaXN0YW5jZSAoYXMgcGVyY2VudGFnZSkgb2YgYW4gZWxlbWVudCBpbiB0aGUgdmlld3BvcnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAgICAgICB0aGlzLiRjb250YWluZXIgPSAob3B0aW9ucy5jb250YWluZXIpID8gb3B0aW9ucy5jb250YWluZXIgOiBERUZBVUxUUy5jb250YWluZXI7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSAob3B0aW9ucy5zZWxlY3RvcikgPyBvcHRpb25zLnNlbGVjdG9yIDogREVGQVVMVFMuc2VsZWN0b3I7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSB7XG4gICAgICAgICAgICBvblNjcm9sbDogdHlwZW9mIG9wdGlvbnMub25TY3JvbGwgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLm9uU2Nyb2xsIDogREVGQVVMVFMub25TY3JvbGxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlID0ge1xuICAgICAgICAgICAgc2Nyb2xsOiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG5cbiAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzID0gW107XG5cbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBzY3JvbGxpbmcgYW5pbWF0aW9uc1xuICAgICAqL1xuICAgIGluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgLy8gT24gc2Nyb2xsXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5TQ1JPTEwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlYnVpbGQgZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlJFQlVJTEQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHRhcmdldE9mZnNldDogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlVQREFURSwgKGV2ZW50LCBvcHRpb25zKSA9PiB0aGlzLnVwZGF0ZShvcHRpb25zKSk7XG5cbiAgICAgICAgLy8gUmVuZGVyIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5SRU5ERVIsICgpID0+IHRoaXMucmVuZGVyKCkpO1xuXG4gICAgICAgIC8vIFNjcm9sbHRvIGJ1dHRvbiBldmVudFxuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuQ0xJQ0ssICcuanMtc2Nyb2xsdG8nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAkdGFyZ2V0LmRhdGEoJ29mZnNldCcpO1xuXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICBzb3VyY2VFbGVtOiAkdGFyZ2V0LFxuICAgICAgICAgICAgICAgIG9mZnNldEVsZW06IG9mZnNldFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuU0NST0xMVE8sIChldmVudCkgPT4gdGhpcy5zY3JvbGxUbyhldmVudC5vcHRpb25zKSk7XG5cbiAgICAgICAgLy8gU2V0dXAgZG9uZVxuICAgICAgICAkZG9jdW1lbnQudHJpZ2dlckhhbmRsZXIoe1xuICAgICAgICAgICAgdHlwZTogRVZFTlQuSVNSRUFEWVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXNpemUgZXZlbnRcbiAgICAgICAgJHdpbmRvdy5vbihFVkVOVC5SRVNJWkUsIGRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgfSwgMjApKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgYWxsIGFuaW1hdGFibGUgZWxlbWVudHMuXG4gICAgICogQ2FsbGVkIG9uIHBhZ2UgbG9hZCBhbmQgYW55IHN1YnNlcXVlbnQgdXBkYXRlcy5cbiAgICAgKi9cbiAgICBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzID0gW107XG5cbiAgICAgICAgY29uc3QgJGVsZW1lbnRzID0gJCh0aGlzLnNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgbGVuID0gJGVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpICsrKSB7XG4gICAgICAgICAgICBsZXQgJGVsZW1lbnQgPSAkZWxlbWVudHMuZXEoaSk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhcmdldCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFBvc2l0aW9uID0gJGVsZW1lbnQuYXR0cignZGF0YS1wb3NpdGlvbicpO1xuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAoZWxlbWVudFRhcmdldCAmJiAkKGVsZW1lbnRUYXJnZXQpLmxlbmd0aCkgPyAkKGVsZW1lbnRUYXJnZXQpIDogJGVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgZWxlbWVudE9mZnNldCA9ICR0YXJnZXQub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRMaW1pdCA9IGVsZW1lbnRPZmZzZXQgKyAkdGFyZ2V0Lm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFN0aWNreSA9ICh0eXBlb2YgJGVsZW1lbnQuYXR0cignZGF0YS1zdGlja3knKSA9PT0gJ3N0cmluZycpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRTdGlja3lUYXJnZXQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLXN0aWNreS10YXJnZXQnKTtcblxuICAgICAgICAgICAgbGV0IGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9IG51bGw7XG4gICAgICAgICAgICBpZih0eXBlb2YgJGVsZW1lbnQuYXR0cignZGF0YS12aWV3cG9ydC1vZmZzZXQnKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgIGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtdmlld3BvcnQtb2Zmc2V0Jykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vTWFuYWdlIGNhbGxiYWNrXG4gICAgICAgICAgICBsZXQgZWxlbWVudENhbGxiYWNrU3RyaW5nID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLWNhbGxiYWNrJykgPT09ICdzdHJpbmcnKSA/ICRlbGVtZW50LmF0dHIoJ2RhdGEtY2FsbGJhY2snKSA6IG51bGw7XG4gICAgICAgICAgICBsZXQgZWxlbWVudENhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICAgICAgaWYoZWxlbWVudENhbGxiYWNrU3RyaW5nICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IGVsZW1lbnRDYWxsYmFja1N0cmluZy5zdWJzdHIoMCwgZWxlbWVudENhbGxiYWNrU3RyaW5nLmluZGV4T2YoJygnKSk7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnNTdHJpbmcgPSBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuc3Vic3RyKGVsZW1lbnRDYWxsYmFja1N0cmluZy5pbmRleE9mKCcoJyksZWxlbWVudENhbGxiYWNrU3RyaW5nLmxlbmd0aCAtIGV2ZW50Lmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKCcoJywnJyk7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1N0cmluZyA9IG9wdGlvbnNTdHJpbmcucmVwbGFjZSgnKScsJycpO1xuXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBvcHRpb25zU3RyaW5nLnNwbGl0KCd8Jyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge307XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9wdGlvbnMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uc1tqXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25bMF0gPSBvcHRpb25bMF0ucmVwbGFjZSgnICcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgYSBib29sZWFuXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvblsxXSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihvcHRpb25bMV0gPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBudW1lcmljXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoL15cXGQrJC8udGVzdChvcHRpb25bMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBwYXJzZUludChvcHRpb25bMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgYSBTdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBvcHRpb25bMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2JqW29wdGlvblswXV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbWVudENhbGxiYWNrID0ge2V2ZW50OmV2ZW50LCBvcHRpb25zOm9ian07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGVsZW1lbnRzIGxvc2VzIGl0cyBhbmltYXRpb24gYWZ0ZXIgc2Nyb2xsaW5nIHBhc3QgaXRcbiAgICAgICAgICAgIGxldCBlbGVtZW50UmVwZWF0ID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLXJlcGVhdCcpID09PSAnc3RyaW5nJyk7XG5cbiAgICAgICAgICAgIGxldCBlbGVtZW50SW5WaWV3Q2xhc3MgPSAkZWxlbWVudC5hdHRyKCdkYXRhLWludmlldy1jbGFzcycpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50SW5WaWV3Q2xhc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudEluVmlld0NsYXNzID0gJ2lzLXNob3cnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFN0aWNreSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudFN0aWNreVRhcmdldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gdGhpcy4kY29udGFpbmVyLmhlaWdodCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaW1pdCA9ICQoZWxlbWVudFN0aWNreVRhcmdldCkub2Zmc2V0KCkudG9wIC0gJGVsZW1lbnQuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgb2Zmc2V0XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MoZWxlbWVudEluVmlld0NsYXNzKTtcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcygnaXMtdW5zdHVjaycpO1xuXG4gICAgICAgICAgICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEb24ndCBhZGQgZWxlbWVudCBpZiBpdCBhbHJlYWR5IGhhcyBpdHMgaW52aWV3IGNsYXNzIGFuZCBkb2Vzbid0IHJlcGVhdFxuICAgICAgICAgICAgaWYgKGVsZW1lbnRSZXBlYXQgfHwgISRlbGVtZW50Lmhhc0NsYXNzKGVsZW1lbnRJblZpZXdDbGFzcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHNbaV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICRlbGVtZW50OiAkZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBNYXRoLnJvdW5kKGVsZW1lbnRPZmZzZXQpLFxuICAgICAgICAgICAgICAgICAgICByZXBlYXQ6IGVsZW1lbnRSZXBlYXQsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBlbGVtZW50UG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBlbGVtZW50TGltaXQsXG4gICAgICAgICAgICAgICAgICAgIGluVmlld0NsYXNzOiBlbGVtZW50SW5WaWV3Q2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIHN0aWNreTogZWxlbWVudFN0aWNreSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGVsZW1lbnRDYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnRPZmZzZXQ6IGVsZW1lbnRWaWV3cG9ydE9mZnNldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb29wIHRocm91Z2ggYWxsIGFuaW1hdGFibGUgZWxlbWVudHMgYW5kIGFwcGx5IGFuaW1hdGlvbiBtZXRob2QocykuXG4gICAgICovXG4gICAgYW5pbWF0ZUVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLmFuaW1hdGVkRWxlbWVudHMubGVuZ3RoO1xuICAgICAgICBjb25zdCByZW1vdmVJbmRleGVzID0gW107XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmFuaW1hdGVkRWxlbWVudHNbaV07XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBlbGVtZW50J3MgdmlzaWJpbGl0eSBtdXN0IG5vdCBiZSBtYW5pcHVsYXRlZCBhbnkgZnVydGhlciwgcmVtb3ZlIGl0IGZyb20gdGhlIGxpc3RcbiAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZUVsZW1lbnQoZWxlbWVudCwgaSkpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVJbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYW5pbWF0ZWQgZWxlbWVudHMgYWZ0ZXIgbG9vcGluZyB0aHJvdWdoIGVsZW1lbnRzXG4gICAgICAgIGkgPSByZW1vdmVJbmRleGVzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzLnNwbGljZShyZW1vdmVJbmRleGVzW2ldLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY2xhc3MgYW5pbWF0aW9ucywgYW5kIHVwZGF0ZSB0aGUgZ2xvYmFsIHNjcm9sbCBwb3NpdGlvbm5pbmcuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ2Rvd24nKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9IGVsc2UgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgIT09IHdpbmRvdy5wYWdlWU9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwueCAhPT0gd2luZG93LnBhZ2VYT2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC54ID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWxsYmFja3Mub25TY3JvbGwodGhpcy5zY3JvbGwpXG5cbiAgICAgICAgdGhpcy5hbmltYXRlRWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgY2xhc3NlcyBvbiBhbiBlbGVtZW50IGlmIGl0J3MgdmlzaWJsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gICAgICBlbGVtZW50IEN1cnJlbnQgZWxlbWVudCB0byB0ZXN0XG4gICAgICogQHBhcmFtICB7aW50fSAgICAgICAgIGluZGV4ICAgSW5kZXggb2YgdGhlIGVsZW1lbnQgd2l0aGluIGl0J3MgY29udGFpbmVyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gICAgICAgICAgICAgV2V0aGVyIHRoZSBpdGVtIG11c3QgYmUgcmVtb3ZlZCBmcm9tIGl0cyBjb250YWluZXJcbiAgICAgKi9cbiAgICB0b2dnbGVFbGVtZW50KGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgIGxldCByZW1vdmVGcm9tQ29udGFpbmVyID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgYm90dG9tIGVkZ2Ugb2YgdGhlIHNjcm9sbCBjb250YWluZXJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxCb3R0b20gPSBzY3JvbGxUb3AgKyB0aGlzLndpbmRvd0hlaWdodDtcblxuICAgICAgICAgICAgLy8gRGVmaW5lIGlmIHRoZSBlbGVtZW50IGlzIGluVmlld1xuICAgICAgICAgICAgbGV0IGluVmlldyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5wb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsVG9wID49IGVsZW1lbnQub2Zmc2V0ICYmIHNjcm9sbFRvcCA8PSBlbGVtZW50LmxpbWl0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wb3NpdGlvbiA9PT0gJ2JlbG93Jykge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxUb3AgPiBlbGVtZW50LmxpbWl0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsVG9wID49IGVsZW1lbnQub2Zmc2V0ICYmIHNjcm9sbFRvcCA8PSBlbGVtZW50LmxpbWl0KTtcbiAgICAgICAgICAgIH1lbHNlIGlmKGVsZW1lbnQudmlld3BvcnRPZmZzZXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC52aWV3cG9ydE9mZnNldC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxWaWV3cG9ydE9mZnNldFRvcCA9IHNjcm9sbFRvcCArICh0aGlzLndpbmRvd0hlaWdodCAqIGVsZW1lbnQudmlld3BvcnRPZmZzZXRbMV0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsVmlld3BvcnRPZmZzZXRCb3R0b20gPSBzY3JvbGxCb3R0b20gLSAodGhpcy53aW5kb3dIZWlnaHQgKiBlbGVtZW50LnZpZXdwb3J0T2Zmc2V0WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgaW5WaWV3ID0gKHNjcm9sbFZpZXdwb3J0T2Zmc2V0Qm90dG9tID4gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVmlld3BvcnRPZmZzZXRUb3AgPCBlbGVtZW50LmxpbWl0KTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxWaWV3cG9ydE9mZnNldCA9IHNjcm9sbEJvdHRvbSAtICh0aGlzLndpbmRvd0hlaWdodCAqIGVsZW1lbnQudmlld3BvcnRPZmZzZXRbMF0pO1xuICAgICAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsVmlld3BvcnRPZmZzZXQgPiBlbGVtZW50Lm9mZnNldCAmJiBzY3JvbGxWaWV3cG9ydE9mZnNldCA8IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsQm90dG9tID49IGVsZW1lbnQub2Zmc2V0ICYmIHNjcm9sbFRvcCA8PSBlbGVtZW50LmxpbWl0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA+IGVsZW1lbnQubGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC5hZGRDbGFzcygnaXMtdW5zdHVjaycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lzLXVuc3R1Y2snKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDwgZWxlbWVudC5vZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC5yZW1vdmVDbGFzcyhlbGVtZW50LmluVmlld0NsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBjbGFzcyBpZiBpblZpZXcsIHJlbW92ZSBpZiBub3RcbiAgICAgICAgICAgIGlmIChpblZpZXcpIHtcbiAgICAgICAgICAgICAgICBpZighZWxlbWVudC4kZWxlbWVudC5oYXNDbGFzcyhlbGVtZW50LmluVmlld0NsYXNzKSl7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuJGVsZW1lbnQuYWRkQ2xhc3MoZWxlbWVudC5pblZpZXdDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckNhbGxiYWNrKGVsZW1lbnQsJ2VudGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50LnJlcGVhdCAmJiAhZWxlbWVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRnJvbUNvbnRhaW5lciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSAtIGVsZW1lbnQub2Zmc2V0O1xuXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgwLCAke3l9cHgsIDApYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKDAsICR7eX1weCwgMClgLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgwLCAke3l9cHgsIDApYFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LiRlbGVtZW50Lmhhc0NsYXNzKGVsZW1lbnQuaW5WaWV3Q2xhc3MpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoZWxlbWVudC5pblZpZXdDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJDYWxsYmFjayhlbGVtZW50LCdsZWF2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbW92ZUZyb21Db250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2hlY2sgaWYgdGhlIGVsZW1lbnQgaGF2ZSBhIGNhbGxiYWNrLCBhbmQgdHJpZ2dlciB0aGUgZXZlbnQgc2V0IGluIHRoZSBkYXRhLWNhbGxiYWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9ICAgICAgZWxlbWVudCBDdXJyZW50IGVsZW1lbnQgdG8gdGVzdFxuICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAqL1xuICAgIHRyaWdnZXJDYWxsYmFjayhlbGVtZW50LHdheSl7XG5cbiAgICAgICAgaWYoZWxlbWVudC5jYWxsYmFjayAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC50cmlnZ2VyKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBlbGVtZW50LmNhbGxiYWNrLmV2ZW50LFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGVsZW1lbnQuY2FsbGJhY2sub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB3YXk6IHdheVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2FkZCB0aGlzIHdoZXJlIHlvdSB3YW50IGR1ZGUgKGluIHlvdXIgbW9kdWxlIGJ0dylcbiAgICAgICAgICAgIC8vICRkb2N1bWVudC5vbihldmVudC5OYW1lc3BhY2UsKGUpPT57XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZS5vcHRpb25zLCBlLndheSk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgZGVzaXJlZCB0YXJnZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNjcm9sbFRvKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgJHRhcmdldEVsZW0gPSBvcHRpb25zLnRhcmdldEVsZW07XG4gICAgICAgIGNvbnN0ICRzb3VyY2VFbGVtID0gb3B0aW9ucy5zb3VyY2VFbGVtO1xuICAgICAgICBjb25zdCBvZmZzZXRFbGVtID0gb3B0aW9ucy5vZmZzZXRFbGVtO1xuICAgICAgICBsZXQgdGFyZ2V0T2Zmc2V0ID0gaXNOdW1lcmljKG9wdGlvbnMudGFyZ2V0T2Zmc2V0KSA/IHBhcnNlSW50KG9wdGlvbnMudGFyZ2V0T2Zmc2V0KSA6IDA7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gaXNOdW1lcmljKG9wdGlvbnMuc3BlZWQpID8gcGFyc2VJbnQob3B0aW9ucy5zcGVlZCkgOiA4MDA7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gaXNOdW1lcmljKG9wdGlvbnMuZGVsYXkpID8gcGFyc2VJbnQob3B0aW9ucy5kZWxheSkgOiAwO1xuICAgICAgICBjb25zdCB0b1RvcCA9IG9wdGlvbnMudG9Ub3A7XG4gICAgICAgIGNvbnN0IHRvQm90dG9tID0gb3B0aW9ucy50b0JvdHRvbTtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkdGFyZ2V0RWxlbSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mICRzb3VyY2VFbGVtID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGFyZ2V0T2Zmc2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgbXVzdCBzcGVjaWZ5IGF0IGxlYXN0IG9uZSBwYXJhbWV0ZXIuJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgJHRhcmdldEVsZW0gIT09ICd1bmRlZmluZWQnICYmICR0YXJnZXRFbGVtIGluc3RhbmNlb2YgalF1ZXJ5ICYmICR0YXJnZXRFbGVtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9ICR0YXJnZXRFbGVtLm9mZnNldCgpLnRvcCArIHRhcmdldE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgJHNvdXJjZUVsZW0gIT09ICd1bmRlZmluZWQnICYmICRzb3VyY2VFbGVtIGluc3RhbmNlb2YgalF1ZXJ5ICYmICRzb3VyY2VFbGVtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXREYXRhID0gJyc7XG5cbiAgICAgICAgICAgIGlmICgkc291cmNlRWxlbS5hdHRyKCdkYXRhLXRhcmdldCcpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0YSA9ICRzb3VyY2VFbGVtLmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldERhdGEgPSAkc291cmNlRWxlbS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9ICQodGFyZ2V0RGF0YSkub2Zmc2V0KCkudG9wICsgdGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXRFbGVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb2Zmc2V0ID0gJChvZmZzZXRFbGVtKS5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0T2Zmc2V0IC0gb2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvVG9wID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRvQm90dG9tID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAkZG9jdW1lbnQuaGVpZ2h0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldE9mZnNldFxuICAgICAgICAgICAgfSwgc3BlZWQpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGVsZW1lbnRzIGFuZCByZWNhbGN1bGF0ZSBhbGwgdGhlIHBvc2l0aW9ucyBvbiB0aGUgcGFnZVxuICAgICAqL1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmFuaW1hdGVFbGVtZW50cygpO1xuXG4gICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICR3aW5kb3cub2ZmKGAuJHtFVkVOVF9LRVl9YCk7XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vZmYoYC4ke0VWRU5UX0tFWX1gKTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdElkKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50cyA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9jb21vdGl2ZSBTY3JvbGwgTWFuYWdlclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCB7ICRkb2N1bWVudCwgJHdpbmRvdywgJGh0bWwsICRib2R5IH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IFNjcm9sbCwgeyBERUZBVUxUUywgRVZFTlQgfSBmcm9tICcuLi9TY3JvbGwnO1xuaW1wb3J0IFNtb290aFNjcm9sbCBmcm9tICcuLi9TbW9vdGhTY3JvbGwnO1xuXG4vKipcbiAqIEJhc2ljIG1vZHVsZSB0aGF0IGRldGVjdHMgd2hpY2ggc2Nyb2xsaW5nIG1vZHVsZSB3ZSdsbCBiZSB1c2luZ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnNtb290aCA9IG9wdGlvbnMuc21vb3RoIHx8IERFRkFVTFRTLnNtb290aDtcbiAgICAgICAgdGhpcy5zbW9vdGhNb2JpbGUgPSBvcHRpb25zLnNtb290aE1vYmlsZSB8fCBERUZBVUxUUy5zbW9vdGhNb2JpbGU7XG4gICAgICAgIHRoaXMubW9iaWxlQ29udGFpbmVyID0gb3B0aW9ucy5tb2JpbGVDb250YWluZXIgfHwgREVGQVVMVFMubW9iaWxlQ29udGFpbmVyO1xuICAgICAgICB0aGlzLmlzTW9iaWxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgJGh0bWxbMF0uc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgJGJvZHlbMF0uc2Nyb2xsVG9wID0gMDtcblxuICAgICAgICBpZiAoIXRoaXMuc21vb3RoTW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLmlzTW9iaWxlID0gKC9BbmRyb2lkfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlID0gKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNtb290aCA9PT0gdHJ1ZSAmJiAhdGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU21vb3RoU2Nyb2xsKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vYmlsZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29udGFpbmVyID0gdGhpcy5tb2JpbGVDb250YWluZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTY3JvbGwodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlLmluaXQoKTtcblxuICAgICAgICBjb25zdCAkc2Nyb2xsVG9PbkxvYWRFbCA9ICQoJy5qcy1zY3JvbGx0by1vbi1sb2FkJykuZmlyc3QoKTtcblxuICAgICAgICBpZiAoJHNjcm9sbFRvT25Mb2FkRWwubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAkZG9jdW1lbnQudHJpZ2dlckhhbmRsZXIoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdFdmVudC5TQ1JPTExUTycsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtOiAkc2Nyb2xsVG9PbkxvYWRFbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvY29tb3RpdmUgU21vb3RoIFNjcm9sbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCB7ICR3aW5kb3csICRkb2N1bWVudCwgJGh0bWwgfSBmcm9tICcuLi8uLi91dGlscy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgU2Nyb2xsLCB7IERFRkFVTFRTLCBFVkVOVCB9IGZyb20gJy4uL1Njcm9sbCc7XG5cbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgVmlydHVhbFNjcm9sbCBmcm9tICd2aXJ0dWFsLXNjcm9sbCc7XG5pbXBvcnQgeyBpc051bWVyaWMgfSBmcm9tICcuLi8uLi91dGlscy9pcyc7XG5cbi8qKlxuICogU21vb3RoIHNjcm9sbGluZyB1c2luZyBgc21vb3RoLXNjcm9sbGJhcmAuXG4gKiBCYXNlZCBvbiBgU2Nyb2xsYCBjbGFzcywgd2hpY2ggYWxsb3dzIGFuaW1hdGlvbnMgb2YgZWxlbWVudHMgb24gdGhlIHBhZ2VcbiAqIGFjY29yZGluZyB0byBzY3JvbGwgcG9zaXRpb24uXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFNjcm9sbCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmlzUmV2ZXJzZWQgPSBvcHRpb25zLnJldmVyc2VkIHx8IERFRkFVTFRTLnJldmVyc2VkO1xuICAgICAgICB0aGlzLmdldERpcmVjdGlvbiA9IG9wdGlvbnMuZ2V0RGlyZWN0aW9uIHx8IERFRkFVTFRTLmdldERpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5nZXRTcGVlZCA9IG9wdGlvbnMuZ2V0U3BlZWQgfHwgREVGQVVMVFMuZ2V0U3BlZWQ7XG4gICAgICAgIHRoaXMuaW5lcnRpYSA9IG9wdGlvbnMuaW5lcnRpYSB8fCBERUZBVUxUUy5pbmVydGlhO1xuXG4gICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cyA9IFtdO1xuXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHNjcm9sbGluZyBhbmltYXRpb25zXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gQWRkIGNsYXNzIHRvIHRoZSBkb2N1bWVudCB0byBrbm93IGlmIFNtb290aFNjcm9sbCBpcyBpbml0aWFsaXplZCAodG8gbWFuYWdlIG92ZXJmbG93IG9uIGNvbnRhaW5lcnMpXG4gICAgICAgICRodG1sLmFkZENsYXNzKCdoYXMtc21vb3RoLXNjcm9sbCcpO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmlydHVhbFNjcm9sbCh7XG4gICAgICAgICAgICBtb3VzZU11bHRpcGxpZXI6IChuYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZignV2luJykgPiAtMSkgPyAxIDogMC40LFxuICAgICAgICAgICAgdG91Y2hNdWx0aXBsaWVyOiA0LFxuICAgICAgICAgICAgZmlyZWZveE11bHRpcGxpZXI6IDMwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5lcnRpYSA9IHRoaXMuaW5lcnRpYSAqIDAuMTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbCA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuZ2V0U3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnNwZWVkID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEB0b2RvIDogdG8gb3B0aW1pemVcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5vbigoZSkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgLT0gZS5kZWx0YVk7XG4gICAgICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5kZWx0YS55IDwgMCkgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0gMDtcbiAgICAgICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA+IHRoaXMuaW5zdGFuY2UubGltaXQpIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IHRoaXMuaW5zdGFuY2UubGltaXQ7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTY3JvbGxMaW1pdCgpO1xuXG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcblxuICAgICAgICAvLyBSZWJ1aWxkIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5SRUJVSUxELCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlVQREFURSwgKGV2ZW50LCBvcHRpb25zKSA9PiB0aGlzLnVwZGF0ZShvcHRpb25zKSk7XG5cbiAgICAgICAgLy8gU2Nyb2xsdG8gYnV0dG9uIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5DTElDSywgJy5qcy1zY3JvbGx0bycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9ICR0YXJnZXQuZGF0YSgnb2Zmc2V0Jyk7XG5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHNvdXJjZUVsZW06ICR0YXJnZXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0RWxlbTogb2Zmc2V0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRvZG8gc2Nyb2xsdG9cbiAgICAgICAgLy8gdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlNDUk9MTFRPLCAoZXZlbnQpID0+IHRoaXMuc2Nyb2xsVG8oZXZlbnQub3B0aW9ucykpO1xuXG4gICAgICAgIC8vIFNldHVwIGRvbmVcbiAgICAgICAgJGRvY3VtZW50LnRyaWdnZXJIYW5kbGVyKHtcbiAgICAgICAgICAgIHR5cGU6IEVWRU5ULklTUkVBRFlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVzaXplIGV2ZW50XG4gICAgICAgICR3aW5kb3cub24oRVZFTlQuUkVTSVpFLCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcmVsb2FkSW1hZ2VzKCk7XG5cbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgZXhpc3RpbmcgZWxlbWVudHMgYW5kIGZpbmQgYWxsIGFuaW1hdGFibGUgZWxlbWVudHMuXG4gICAgICogQ2FsbGVkIG9uIHBhZ2UgbG9hZCBhbmQgYW55IHN1YnNlcXVlbnQgdXBkYXRlcy5cbiAgICAgKi9cbiAgICBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cyA9IFtdO1xuXG4gICAgICAgIGNvbnN0ICRlbGVtZW50cyA9ICQodGhpcy5zZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGxlbiA9ICRlbGVtZW50cy5sZW5ndGg7XG4gICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSArKykge1xuICAgICAgICAgICAgbGV0ICRlbGVtZW50ID0gJGVsZW1lbnRzLmVxKGkpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRTcGVlZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtc3BlZWQnKSA/ICRlbGVtZW50LmF0dHIoJ2RhdGEtc3BlZWQnKSAvIDEwIDogZmFsc2U7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFBvc2l0aW9uID0gJGVsZW1lbnQuYXR0cignZGF0YS1wb3NpdGlvbicpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYXJnZXQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLXRhcmdldCcpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRIb3Jpem9udGFsID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLWhvcml6b250YWwnKSA9PT0gJ3N0cmluZycpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRTdGlja3kgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtc3RpY2t5JykgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50U3RpY2t5VGFyZ2V0ID0gJGVsZW1lbnQuYXR0cignZGF0YS1zdGlja3ktdGFyZ2V0Jyk7XG4gICAgICAgICAgICBsZXQgJHRhcmdldCA9IChlbGVtZW50VGFyZ2V0ICYmICQoZWxlbWVudFRhcmdldCkubGVuZ3RoKSA/ICQoZWxlbWVudFRhcmdldCkgOiAkZWxlbWVudDtcbiAgICAgICAgICAgIGxldCBlbGVtZW50T2Zmc2V0ID0gJHRhcmdldC5vZmZzZXQoKS50b3AgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55O1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRMaW1pdCA9IGVsZW1lbnRPZmZzZXQgKyAkdGFyZ2V0Lm91dGVySGVpZ2h0KCk7XG5cblxuICAgICAgICAgICAgbGV0IGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9IG51bGw7XG4gICAgICAgICAgICBpZih0eXBlb2YgJGVsZW1lbnQuYXR0cignZGF0YS12aWV3cG9ydC1vZmZzZXQnKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgIGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtdmlld3BvcnQtb2Zmc2V0Jykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9NYW5hZ2UgY2FsbGJhY2tcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q2FsbGJhY2tTdHJpbmcgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtY2FsbGJhY2snKSA9PT0gJ3N0cmluZycpID8gJGVsZW1lbnQuYXR0cignZGF0YS1jYWxsYmFjaycpIDogbnVsbDtcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgICAgICBpZihlbGVtZW50Q2FsbGJhY2tTdHJpbmcgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gZWxlbWVudENhbGxiYWNrU3RyaW5nLnN1YnN0cigwLCBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuaW5kZXhPZignKCcpKTtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uc1N0cmluZyA9IGVsZW1lbnRDYWxsYmFja1N0cmluZy5zdWJzdHIoZWxlbWVudENhbGxiYWNrU3RyaW5nLmluZGV4T2YoJygnKSxlbGVtZW50Q2FsbGJhY2tTdHJpbmcubGVuZ3RoIC0gZXZlbnQubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcgPSBvcHRpb25zU3RyaW5nLnJlcGxhY2UoJygnLCcnKTtcbiAgICAgICAgICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKCcpJywnJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IG9wdGlvbnNTdHJpbmcuc3BsaXQoJ3wnKTtcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb3B0aW9ucy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25zW2pdLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblswXSA9IG9wdGlvblswXS5yZXBsYWNlKCcgJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBhIGJvb2xlYW5cbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uWzFdID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9wdGlvblsxXSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhbHVlIGlzIG51bWVyaWNcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZigvXlxcZCskLy50ZXN0KG9wdGlvblsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHBhcnNlSW50KG9wdGlvblsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBhIFN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IG9wdGlvblsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvYmpbb3B0aW9uWzBdXSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50Q2FsbGJhY2sgPSB7ZXZlbnQ6ZXZlbnQsIG9wdGlvbnM6b2JqfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgZWxlbWVudHMgc3RheXMgdmlzaWJsZSBhZnRlciBzY3JvbGxpbmcgcGFzdCBpdFxuICAgICAgICAgICAgbGV0IGVsZW1lbnRSZXBlYXQgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtcmVwZWF0JykgPT09ICdzdHJpbmcnKTtcblxuICAgICAgICAgICAgbGV0IGVsZW1lbnRJblZpZXdDbGFzcyA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtaW52aWV3LWNsYXNzJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnRJblZpZXdDbGFzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50SW5WaWV3Q2xhc3MgPSAnaXMtc2hvdyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZWxlbWVudFRhcmdldCAmJiAkZWxlbWVudC5hdHRyKCdkYXRhLXRyYW5zZm9ybScpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudE9mZnNldCAtPSBwYXJzZUZsb2F0KCRlbGVtZW50LmF0dHIoJ2RhdGEtdHJhbnNmb3JtJykueSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gZWxlbWVudE9mZnNldCArICR0YXJnZXQub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRTdGlja3kpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnRTdGlja3lUYXJnZXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaW1pdCA9IEluZmluaXR5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaW1pdCA9ICQoZWxlbWVudFN0aWNreVRhcmdldCkub2Zmc2V0KCkudG9wIC0gJGVsZW1lbnQuaGVpZ2h0KCkgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IHtcbiAgICAgICAgICAgICAgICAkZWxlbWVudDogJGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgaW5WaWV3Q2xhc3M6IGVsZW1lbnRJblZpZXdDbGFzcyxcbiAgICAgICAgICAgICAgICBsaW1pdDogZWxlbWVudExpbWl0LFxuICAgICAgICAgICAgICAgIG9mZnNldDogTWF0aC5yb3VuZChlbGVtZW50T2Zmc2V0KSxcbiAgICAgICAgICAgICAgICByZXBlYXQ6IGVsZW1lbnRSZXBlYXQsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGVsZW1lbnRDYWxsYmFjayxcbiAgICAgICAgICAgICAgICB2aWV3cG9ydE9mZnNldDogZWxlbWVudFZpZXdwb3J0T2Zmc2V0XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBGb3IgcGFyYWxsYXggYW5pbWF0ZWQgZWxlbWVudHNcbiAgICAgICAgICAgIGlmIChlbGVtZW50U3BlZWQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRQb3NpdGlvbiA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtcG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudEhvcml6b250YWwgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtaG9yaXpvbnRhbCcpID09PSAnc3RyaW5nJyk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRNaWRkbGUgPSAoKGVsZW1lbnRMaW1pdCAtIGVsZW1lbnRPZmZzZXQpIC8gMikgKyBlbGVtZW50T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50RGVsYXkgPSAkZWxlbWVudC5hdHRyKCdkYXRhLWRlbGF5Jyk7XG5cbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50Lmhvcml6b250YWwgPSBlbGVtZW50SG9yaXpvbnRhbDtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50Lm1pZGRsZSA9IGVsZW1lbnRNaWRkbGU7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5vZmZzZXQgPSBlbGVtZW50T2Zmc2V0O1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQucG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb247XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5zcGVlZCA9IGVsZW1lbnRTcGVlZFxuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuZGVsYXkgPSBlbGVtZW50RGVsYXk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnN0aWNreSA9IGVsZW1lbnRTdGlja3k7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50U3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbGF1bmNoIHRoZSB0b2dnbGUgZnVuY3Rpb24gdG8gc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgc3RpY2t5IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVFbGVtZW50KG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNsYXNzL3RyYW5zZm9ybSBhbmltYXRpb25zLCBhbmQgdXBkYXRlIHRoZSBnbG9iYWwgc2Nyb2xsIHBvc2l0aW9ubmluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IGlzRmlyc3RDYWxsIERldGVybWluZXMgaWYgdGhpcyBpcyB0aGUgZmlyc3Qgb2NjdXJlbmNlIG9mIG1ldGhvZCBiZWluZyBjYWxsZWRcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9ICBzdGF0dXMgICAgICBPcHRpb25hbCBzdGF0dXMgb2JqZWN0IHJlY2VpdmVkIHdoZW4gbWV0aG9kIGlzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGVkIGJ5IHNtb290aC1zY3JvbGxiYXIgaW5zdGFuY2UgbGlzdGVuZXIuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICByZW5kZXIoaXNGaXJzdENhbGwsIGUpIHtcbiAgICAgICAgdGhpcy5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PnRoaXMucmVuZGVyKCkpO1xuXG4gICAgICAgIGlmKHRoaXMuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB0aGlzLmxlcnAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSx0aGlzLmluc3RhbmNlLmRlbHRhLnksIHRoaXMuaW5lcnRpYSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gdGhpcy5sZXJwKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnksdGhpcy5pbnN0YW5jZS5kZWx0YS55LCB0aGlzLmluZXJ0aWEgKiAwLjUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBuZWVkIHRvIG1vdmUgdGhlIGNvbnRhaW5lclxuICAgICAgICB0aGlzLiRjb250YWluZXIuY3NzKHtcbiAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgwLCAkey10aGlzLmluc3RhbmNlLnNjcm9sbC55fXB4LCAwKWAsXG4gICAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgwLCAkey10aGlzLmluc3RhbmNlLnNjcm9sbC55fXB4LCAwKWAsXG4gICAgICAgICAgICAndHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKDAsICR7LXRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnl9cHgsIDApYFxuICAgICAgICB9KTtcblxuICAgICAgICBpZih0aGlzLmdldERpcmVjdGlvbil7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55ID4gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gIT09ICdkb3duJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgPCB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ3VwJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuZ2V0U3BlZWQpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSAhPT0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnNwZWVkID0gKHRoaXMuaW5zdGFuY2UuZGVsdGEueSAtIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIC8gKERhdGUubm93KCkgLSB0aGlzLnRpbWVzdGFtcCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0gdGhpcy5pbnN0YW5jZS5kZWx0YS55O1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnNwZWVkID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cyhpc0ZpcnN0Q2FsbCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZUVsZW1lbnRzKCk7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFja3Mub25TY3JvbGwodGhpcy5pbnN0YW5jZSlcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIGxlcnAgKHN0YXJ0LCBlbmQsIGFtdCl7XG4gICAgICAgIHJldHVybiAoMS1hbXQpKnN0YXJ0K2FtdCplbmRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gYSBkZXNpcmVkIHRhcmdldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2Nyb2xsVG8ob3B0aW9ucykge1xuICAgICAgICBjb25zdCAkdGFyZ2V0RWxlbSA9IG9wdGlvbnMudGFyZ2V0RWxlbTtcbiAgICAgICAgY29uc3QgJHNvdXJjZUVsZW0gPSBvcHRpb25zLnNvdXJjZUVsZW07XG4gICAgICAgIGNvbnN0IG9mZnNldEVsZW0gPSBvcHRpb25zLm9mZnNldEVsZW07XG4gICAgICAgIGxldCB0YXJnZXRPZmZzZXQgPSBpc051bWVyaWMob3B0aW9ucy50YXJnZXRPZmZzZXQpID8gcGFyc2VJbnQob3B0aW9ucy50YXJnZXRPZmZzZXQpIDogMDtcbiAgICAgICAgY29uc3QgZGVsYXkgPSBpc051bWVyaWMob3B0aW9ucy5kZWxheSkgPyBwYXJzZUludChvcHRpb25zLmRlbGF5KSA6IDA7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gaXNOdW1lcmljKG9wdGlvbnMuc3BlZWQpID8gcGFyc2VJbnQob3B0aW9ucy5zcGVlZCkgOiA5MDA7XG4gICAgICAgIGNvbnN0IHRvVG9wID0gb3B0aW9ucy50b1RvcDtcbiAgICAgICAgY29uc3QgdG9Cb3R0b20gPSBvcHRpb25zLnRvQm90dG9tO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgICAgICBpZiAodHlwZW9mICR0YXJnZXRFbGVtID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgJHNvdXJjZUVsZW0gPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0YXJnZXRPZmZzZXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBtdXN0IHNwZWNpZnkgYXQgbGVhc3Qgb25lIHBhcmFtZXRlci4nKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkdGFyZ2V0RWxlbSAhPT0gJ3VuZGVmaW5lZCcgJiYgJHRhcmdldEVsZW0gaW5zdGFuY2VvZiBqUXVlcnkgJiYgJHRhcmdldEVsZW0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gJHRhcmdldEVsZW0ub2Zmc2V0KCkudG9wICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSArIHRhcmdldE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgJHNvdXJjZUVsZW0gIT09ICd1bmRlZmluZWQnICYmICRzb3VyY2VFbGVtIGluc3RhbmNlb2YgalF1ZXJ5ICYmICRzb3VyY2VFbGVtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXREYXRhID0gJyc7XG5cbiAgICAgICAgICAgIGlmICgkc291cmNlRWxlbS5hdHRyKCdkYXRhLXRhcmdldCcpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0YSA9ICRzb3VyY2VFbGVtLmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldERhdGEgPSAkc291cmNlRWxlbS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9ICQodGFyZ2V0RGF0YSkub2Zmc2V0KCkudG9wICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSArIHRhcmdldE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0RWxlbSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9mZnNldCA9ICQob2Zmc2V0RWxlbSkub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9IHRhcmdldE9mZnNldCAtIG9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b1RvcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh0b0JvdHRvbSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gdGhpcy5pbnN0YW5jZS5saW1pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0gdGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBzY3JvbGwgYmFyIGxpbWl0XG4gICAgICovXG4gICAgc2V0U2Nyb2xsTGltaXQoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UubGltaXQgPSB0aGlzLiRjb250YWluZXJbMF0ub2Zmc2V0SGVpZ2h0IC0gdGhpcy53aW5kb3dIZWlnaHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgQ1NTIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIG9uIGFuIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9ICAkZWxlbWVudCBUYXJnZXR0ZWQgalF1ZXJ5IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICB4ICAgICAgICBUcmFuc2xhdGUgdmFsdWVcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICB5ICAgICAgICBUcmFuc2xhdGUgdmFsdWVcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICB6ICAgICAgICBUcmFuc2xhdGUgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHRyYW5zZm9ybUVsZW1lbnQoJGVsZW1lbnQsIHgsIHksIHosIGRlbGF5KSB7XG4gICAgICAgIC8vIERlZmF1bHRzXG4gICAgICAgIHggPSB4IHx8IDA7XG4gICAgICAgIHkgPSB5IHx8IDA7XG4gICAgICAgIHogPSB6IHx8IDA7XG5cbiAgICAgICAgaWYoIWRlbGF5KSB7XG4gICAgICAgICAgICAvLyBUcmFuc2xhdGUgYW5kIHN0b3JlIHRoZSBwb3NpdGlvbm5pbmcgYXMgYGRhdGFgXG4gICAgICAgICAgICAkZWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgJHt6fXB4KWAsXG4gICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weClgLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weClgXG4gICAgICAgICAgICB9KS5kYXRhKCd0cmFuc2Zvcm0nLHtcbiAgICAgICAgICAgICAgICB4IDogeCxcbiAgICAgICAgICAgICAgICB5IDogeSxcbiAgICAgICAgICAgICAgICB6IDogelxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGxldCBzdGFydCA9IHRoaXMuZ2V0VHJhbnNsYXRlKCRlbGVtZW50WzBdKTtcbiAgICAgICAgICAgIGxldCBsZXJwWSA9IHRoaXMubGVycChzdGFydC55LCB5LCBkZWxheSk7XG4gICAgICAgICAgICBsZXQgbGVycFggPSB0aGlzLmxlcnAoc3RhcnQueCwgeCwgZGVsYXkpO1xuXG4gICAgICAgICAgICAkZWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgke2xlcnBYfXB4LCAke2xlcnBZfXB4LCAke3p9cHgpYCxcbiAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgke2xlcnBYfXB4LCAke2xlcnBZfXB4LCAke3p9cHgpYCxcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKCR7bGVycFh9cHgsICR7bGVycFl9cHgsICR7en1weClgXG4gICAgICAgICAgICB9KS5kYXRhKCd0cmFuc2Zvcm0nLHtcbiAgICAgICAgICAgICAgICB4IDogbGVycFgsXG4gICAgICAgICAgICAgICAgeSA6IGxlcnBZLFxuICAgICAgICAgICAgICAgIHogOiB6XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2V0VHJhbnNsYXRlKGVsKXtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0ge31cbiAgICAgICAgaWYoIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtIHx8IHN0eWxlLndlYmtpdFRyYW5zZm9ybSB8fCBzdHlsZS5tb3pUcmFuc2Zvcm07XG5cbiAgICAgICAgbGV0IG1hdCA9IHRyYW5zZm9ybS5tYXRjaCgvXm1hdHJpeDNkXFwoKC4rKVxcKSQvKTtcbiAgICAgICAgaWYobWF0KSByZXR1cm4gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbMTNdKTtcbiAgICAgICAgbWF0ID0gdHJhbnNmb3JtLm1hdGNoKC9ebWF0cml4XFwoKC4rKVxcKSQvKTtcbiAgICAgICAgdHJhbnNsYXRlLnggPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVs0XSkgOiAwO1xuICAgICAgICB0cmFuc2xhdGUueSA9IG1hdCA/IHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzVdKSA6IDA7XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb29wIHRocm91Z2ggYWxsIHBhcmFsbGF4LWFibGUgZWxlbWVudHMgYW5kIGFwcGx5IHRyYW5zZm9ybSBtZXRob2QocykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBpc0ZpcnN0Q2FsbCBEZXRlcm1pbmVzIGlmIHRoaXMgaXMgdGhlIGZpcnN0IG9jY3VyZW5jZSBvZiBtZXRob2QgYmVpbmcgY2FsbGVkXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB0cmFuc2Zvcm1FbGVtZW50cyhpc0ZpcnN0Q2FsbCkge1xuICAgICAgICBpZiAodGhpcy5wYXJhbGxheEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0aGlzLndpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbE1pZGRsZSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0aGlzLndpbmRvd01pZGRsZTtcblxuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gdGhpcy5wYXJhbGxheEVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ZXMgPSBbXTtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJFbCA9IHRoaXMucGFyYWxsYXhFbGVtZW50c1tpXTtcblxuICAgICAgICAgICAgICAgIGxldCB0cmFuc2Zvcm1EaXN0YW5jZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIGlmIHRoZSBlbGVtZW50IGlzIGluIHZpZXdcbiAgICAgICAgICAgICAgICBsZXQgaW5WaWV3ID0gKChzY3JvbGxCb3R0b20gKyB0aGlzLndpbmRvd0hlaWdodCkgPj0gY3VyRWwub2Zmc2V0ICYmIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPD0gY3VyRWwubGltaXQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVFbGVtZW50KGN1ckVsLCBpKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0ZpcnN0Q2FsbCAmJiAhaW5WaWV3ICYmIGN1ckVsLnNwZWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpZmZlcmVudCBjYWxjdWxhdGlvbnMgaWYgaXQgaXMgdGhlIGZpcnN0IGNhbGwgYW5kIHRoZSBpdGVtIGlzIG5vdCBpbiB0aGUgdmlld1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRWwucG9zaXRpb24gIT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IChjdXJFbC5vZmZzZXQgLSB0aGlzLndpbmRvd01pZGRsZSAtIGN1ckVsLm1pZGRsZSkgKiAtY3VyRWwuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBlbGVtZW50IGlzIGluIHZpZXdcbiAgICAgICAgICAgICAgICBpZiAoaW5WaWV3ICYmIGN1ckVsLnNwZWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY3VyRWwucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICogLWN1ckVsLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAodGhpcy5pbnN0YW5jZS5saW1pdCAtIHNjcm9sbEJvdHRvbSArIHRoaXMud2luZG93SGVpZ2h0KSAqIGN1ckVsLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAoc2Nyb2xsTWlkZGxlIC0gY3VyRWwubWlkZGxlKSAqIC1jdXJFbC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVHJhbnNmb3JtIGhvcml6b250YWwgT1IgdmVydGljYWwuIERlZmF1bHRzIHRvIHZlcnRpY2FsXG4gICAgICAgICAgICAgICAgaWYgKGlzTnVtZXJpYyh0cmFuc2Zvcm1EaXN0YW5jZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgKGN1ckVsLmhvcml6b250YWwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudChjdXJFbC4kZWxlbWVudCwgdHJhbnNmb3JtRGlzdGFuY2UsMCwwLCBjdXJFbC5kZWxheSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50KGN1ckVsLiRlbGVtZW50LCAwLCB0cmFuc2Zvcm1EaXN0YW5jZSwwLCBjdXJFbC5kZWxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGVsZW1lbnRzIGFuZCByZWNhbGN1bGF0ZSBhbGwgdGhlIHBvc2l0aW9ucyBvbiB0aGUgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICB1cGRhdGUob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICAvLyBAdG9kb1xuICAgICAgICAvLyB0aGlzLnNjcm9sbGJhci51cGRhdGUoKTtcbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xuICAgICAgICB0aGlzLndpbmRvd01pZGRsZSA9IHRoaXMud2luZG93SGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxMaW1pdCgpO1xuXG4gICAgICAgIC8vIEB0b2RvXG4gICAgICAgIC8vIHRoaXMuc2V0V2hlZWxEaXJlY3Rpb24odGhpcy5pc1JldmVyc2VkKTtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKHRydWUpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHNtb290aC1zY3JvbGxiYXIgc2Nyb2xsaW5nIGRpcmVjdGlvbiBmb3Igd2hlZWwgZXZlbnRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzUmV2ZXJzZWRcbiAgICAgKi9cbiAgICBzZXRXaGVlbERpcmVjdGlvbihpc1JldmVyc2VkKXtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIucmV2ZXJzZVdoZWVsKGlzUmV2ZXJzZWQpO1xuICAgIH1cblxuICAgIHByZWxvYWRJbWFnZXMoKSB7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJykpXG5cbiAgICAgICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaW1hZ2VzLnNwbGljZShpbWFnZXMuaW5kZXhPZihpbWFnZSksIDEpXG4gICAgICAgICAgICAgICAgaW1hZ2VzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnVwZGF0ZSgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW1nLnNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZSgnc3JjJylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95XG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgICAgICAkaHRtbC5yZW1vdmVDbGFzcygnaGFzLXNtb290aC1zY3JvbGwnKTtcbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmKTtcblxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbn1cbiIsImNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xuXG5jb25zdCAkZG9jdW1lbnQgICAgPSAkKGRvY3VtZW50KTtcbmNvbnN0ICR3aW5kb3cgICAgICA9ICQod2luZG93KTtcbmNvbnN0ICRodG1sICAgICAgICA9ICQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5yZW1vdmVDbGFzcygnaGFzLW5vLWpzJykuYWRkQ2xhc3MoJ2hhcy1qcycpO1xuY29uc3QgJGJvZHkgICAgICAgID0gJChkb2N1bWVudC5ib2R5KTtcblxuY29uc3QgaXNEZWJ1ZyAgICAgID0gISEkaHRtbC5kYXRhKCdkZWJ1ZycpO1xuXG5leHBvcnQgeyBEQVRBX0FQSV9LRVksICRkb2N1bWVudCwgJHdpbmRvdywgJGh0bWwsICRib2R5LCBpc0RlYnVnIH07XG4iLCJ2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGFycmF5TGlrZVBhdHRlcm4gPSAvXlxcW29iamVjdCAoPzpBcnJheXxGaWxlTGlzdClcXF0kLztcblxuLy8gdGhhbmtzLCBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9pbnN0YW5jZW9mLWNvbnNpZGVyZWQtaGFybWZ1bC1vci1ob3ctdG8td3JpdGUtYS1yb2J1c3QtaXNhcnJheS9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5ICggdGhpbmcgKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoIHRoaW5nICkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5TGlrZSAoIG9iaiApIHtcbiAgICByZXR1cm4gYXJyYXlMaWtlUGF0dGVybi50ZXN0KCB0b1N0cmluZy5jYWxsKCBvYmogKSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFcXVhbCAoIGEsIGIgKSB7XG4gICAgaWYgKCBhID09PSBudWxsICYmIGIgPT09IG51bGwgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICggdHlwZW9mIGEgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBiID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBhID09PSBiO1xufVxuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE4MDgyL3ZhbGlkYXRlLW51bWJlcnMtaW4tamF2YXNjcmlwdC1pc251bWVyaWNcbmV4cG9ydCBmdW5jdGlvbiBpc051bWVyaWMgKCB0aGluZyApIHtcbiAgICByZXR1cm4gIWlzTmFOKCBwYXJzZUZsb2F0KCB0aGluZyApICkgJiYgaXNGaW5pdGUoIHRoaW5nICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAoIHRoaW5nICkge1xuICAgIHJldHVybiAoIHRoaW5nICYmIHRvU3RyaW5nLmNhbGwoIHRoaW5nICkgPT09ICdbb2JqZWN0IE9iamVjdF0nICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKCB0aGluZyApIHtcbiAgICB2YXIgZ2V0VHlwZSA9IHt9O1xuICAgIHJldHVybiB0aGluZyAmJiBnZXRUeXBlLnRvU3RyaW5nLmNhbGwodGhpbmcpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZighb2JqZWN0KSByZXR1cm4gY29uc29sZS53YXJuKCdiaW5kQWxsIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBhcmd1bWVudC4nKTtcblxuICAgIHZhciBmdW5jdGlvbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgaWYgKGZ1bmN0aW9ucy5sZW5ndGggPT09IDApIHtcblxuICAgICAgICBmb3IgKHZhciBtZXRob2QgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBpZihoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgbWV0aG9kKSkge1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBvYmplY3RbbWV0aG9kXSA9PSAnZnVuY3Rpb24nICYmIHRvU3RyaW5nLmNhbGwob2JqZWN0W21ldGhvZF0pID09IFwiW29iamVjdCBGdW5jdGlvbl1cIikge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbnMucHVzaChtZXRob2QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmdW5jdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGYgPSBmdW5jdGlvbnNbaV07XG4gICAgICAgIG9iamVjdFtmXSA9IGJpbmQob2JqZWN0W2ZdLCBvYmplY3QpO1xuICAgIH1cbn07XG5cbi8qXG4gICAgRmFzdGVyIGJpbmQgd2l0aG91dCBzcGVjaWZpYy1jYXNlIGNoZWNraW5nLiAoc2VlIGh0dHBzOi8vY29kZXJ3YWxsLmNvbS9wL29pM2ozdykuXG4gICAgYmluZEFsbCBpcyBvbmx5IG5lZWRlZCBmb3IgZXZlbnRzIGJpbmRpbmcgc28gbm8gbmVlZCB0byBtYWtlIHNsb3cgZml4ZXMgZm9yIGNvbnN0cnVjdG9yXG4gICAgb3IgcGFydGlhbCBhcHBsaWNhdGlvbi5cbiovXG5mdW5jdGlvbiBiaW5kKGZ1bmMsIGNvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gIH07XG59IiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjkuMlxuKGZ1bmN0aW9uKCkge1xuICB2YXIgcm9vdDtcblxuICByb290ID0gdHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIgJiYgZXhwb3J0cyAhPT0gbnVsbCA/IGV4cG9ydHMgOiB0aGlzO1xuXG4gIHJvb3QuTGV0aGFyZ3kgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gTGV0aGFyZ3koc3RhYmlsaXR5LCBzZW5zaXRpdml0eSwgdG9sZXJhbmNlLCBkZWxheSkge1xuICAgICAgdGhpcy5zdGFiaWxpdHkgPSBzdGFiaWxpdHkgIT0gbnVsbCA/IE1hdGguYWJzKHN0YWJpbGl0eSkgOiA4O1xuICAgICAgdGhpcy5zZW5zaXRpdml0eSA9IHNlbnNpdGl2aXR5ICE9IG51bGwgPyAxICsgTWF0aC5hYnMoc2Vuc2l0aXZpdHkpIDogMTAwO1xuICAgICAgdGhpcy50b2xlcmFuY2UgPSB0b2xlcmFuY2UgIT0gbnVsbCA/IDEgKyBNYXRoLmFicyh0b2xlcmFuY2UpIDogMS4xO1xuICAgICAgdGhpcy5kZWxheSA9IGRlbGF5ICE9IG51bGwgPyBkZWxheSA6IDE1MDtcbiAgICAgIHRoaXMubGFzdFVwRGVsdGFzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDEsIHJlZiA9IHRoaXMuc3RhYmlsaXR5ICogMjsgMSA8PSByZWYgPyBpIDw9IHJlZiA6IGkgPj0gcmVmOyAxIDw9IHJlZiA/IGkrKyA6IGktLSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLmxhc3REb3duRGVsdGFzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDEsIHJlZiA9IHRoaXMuc3RhYmlsaXR5ICogMjsgMSA8PSByZWYgPyBpIDw9IHJlZiA6IGkgPj0gcmVmOyAxIDw9IHJlZiA/IGkrKyA6IGktLSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLmRlbHRhc1RpbWVzdGFtcCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBsYXN0RGVsdGE7XG4gICAgICBlID0gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XG4gICAgICBpZiAoZS53aGVlbERlbHRhICE9IG51bGwpIHtcbiAgICAgICAgbGFzdERlbHRhID0gZS53aGVlbERlbHRhO1xuICAgICAgfSBlbHNlIGlmIChlLmRlbHRhWSAhPSBudWxsKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUuZGVsdGFZICogLTQwO1xuICAgICAgfSBlbHNlIGlmICgoZS5kZXRhaWwgIT0gbnVsbCkgfHwgZS5kZXRhaWwgPT09IDApIHtcbiAgICAgICAgbGFzdERlbHRhID0gZS5kZXRhaWwgKiAtNDA7XG4gICAgICB9XG4gICAgICB0aGlzLmRlbHRhc1RpbWVzdGFtcC5wdXNoKERhdGUubm93KCkpO1xuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAuc2hpZnQoKTtcbiAgICAgIGlmIChsYXN0RGVsdGEgPiAwKSB7XG4gICAgICAgIHRoaXMubGFzdFVwRGVsdGFzLnB1c2gobGFzdERlbHRhKTtcbiAgICAgICAgdGhpcy5sYXN0VXBEZWx0YXMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmVydGlhKDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcy5wdXNoKGxhc3REZWx0YSk7XG4gICAgICAgIHRoaXMubGFzdERvd25EZWx0YXMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmVydGlhKC0xKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLmlzSW5lcnRpYSA9IGZ1bmN0aW9uKGRpcmVjdGlvbikge1xuICAgICAgdmFyIGxhc3REZWx0YXMsIGxhc3REZWx0YXNOZXcsIGxhc3REZWx0YXNPbGQsIG5ld0F2ZXJhZ2UsIG5ld1N1bSwgb2xkQXZlcmFnZSwgb2xkU3VtO1xuICAgICAgbGFzdERlbHRhcyA9IGRpcmVjdGlvbiA9PT0gLTEgPyB0aGlzLmxhc3REb3duRGVsdGFzIDogdGhpcy5sYXN0VXBEZWx0YXM7XG4gICAgICBpZiAobGFzdERlbHRhc1swXSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZGVsdGFzVGltZXN0YW1wWyh0aGlzLnN0YWJpbGl0eSAqIDIpIC0gMl0gKyB0aGlzLmRlbGF5ID4gRGF0ZS5ub3coKSAmJiBsYXN0RGVsdGFzWzBdID09PSBsYXN0RGVsdGFzWyh0aGlzLnN0YWJpbGl0eSAqIDIpIC0gMV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgbGFzdERlbHRhc09sZCA9IGxhc3REZWx0YXMuc2xpY2UoMCwgdGhpcy5zdGFiaWxpdHkpO1xuICAgICAgbGFzdERlbHRhc05ldyA9IGxhc3REZWx0YXMuc2xpY2UodGhpcy5zdGFiaWxpdHksIHRoaXMuc3RhYmlsaXR5ICogMik7XG4gICAgICBvbGRTdW0gPSBsYXN0RGVsdGFzT2xkLnJlZHVjZShmdW5jdGlvbih0LCBzKSB7XG4gICAgICAgIHJldHVybiB0ICsgcztcbiAgICAgIH0pO1xuICAgICAgbmV3U3VtID0gbGFzdERlbHRhc05ldy5yZWR1Y2UoZnVuY3Rpb24odCwgcykge1xuICAgICAgICByZXR1cm4gdCArIHM7XG4gICAgICB9KTtcbiAgICAgIG9sZEF2ZXJhZ2UgPSBvbGRTdW0gLyBsYXN0RGVsdGFzT2xkLmxlbmd0aDtcbiAgICAgIG5ld0F2ZXJhZ2UgPSBuZXdTdW0gLyBsYXN0RGVsdGFzTmV3Lmxlbmd0aDtcbiAgICAgIGlmIChNYXRoLmFicyhvbGRBdmVyYWdlKSA8IE1hdGguYWJzKG5ld0F2ZXJhZ2UgKiB0aGlzLnRvbGVyYW5jZSkgJiYgKHRoaXMuc2Vuc2l0aXZpdHkgPCBNYXRoLmFicyhuZXdBdmVyYWdlKSkpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLnNob3dMYXN0VXBEZWx0YXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhc3RVcERlbHRhcztcbiAgICB9O1xuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLnNob3dMYXN0RG93bkRlbHRhcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFzdERvd25EZWx0YXM7XG4gICAgfTtcblxuICAgIHJldHVybiBMZXRoYXJneTtcblxuICB9KSgpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsImZ1bmN0aW9uIEUgKCkge1xuICAvLyBLZWVwIHRoaXMgZW1wdHkgc28gaXQncyBlYXNpZXIgdG8gaW5oZXJpdCBmcm9tXG4gIC8vICh2aWEgaHR0cHM6Ly9naXRodWIuY29tL2xpcHNtYWNrIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9pc3N1ZXMvMylcbn1cblxuRS5wcm90b3R5cGUgPSB7XG4gIG9uOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG5cbiAgICAoZVtuYW1lXSB8fCAoZVtuYW1lXSA9IFtdKSkucHVzaCh7XG4gICAgICBmbjogY2FsbGJhY2ssXG4gICAgICBjdHg6IGN0eFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb25jZTogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgZnVuY3Rpb24gbGlzdGVuZXIgKCkge1xuICAgICAgc2VsZi5vZmYobmFtZSwgbGlzdGVuZXIpO1xuICAgICAgY2FsbGJhY2suYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBsaXN0ZW5lci5fID0gY2FsbGJhY2tcbiAgICByZXR1cm4gdGhpcy5vbihuYW1lLCBsaXN0ZW5lciwgY3R4KTtcbiAgfSxcblxuICBlbWl0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBkYXRhID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBldnRBcnIgPSAoKHRoaXMuZSB8fCAodGhpcy5lID0ge30pKVtuYW1lXSB8fCBbXSkuc2xpY2UoKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbiA9IGV2dEFyci5sZW5ndGg7XG5cbiAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xuICAgICAgZXZ0QXJyW2ldLmZuLmFwcGx5KGV2dEFycltpXS5jdHgsIGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcbiAgICB2YXIgZXZ0cyA9IGVbbmFtZV07XG4gICAgdmFyIGxpdmVFdmVudHMgPSBbXTtcblxuICAgIGlmIChldnRzICYmIGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXZ0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZXZ0c1tpXS5mbiAhPT0gY2FsbGJhY2sgJiYgZXZ0c1tpXS5mbi5fICE9PSBjYWxsYmFjaylcbiAgICAgICAgICBsaXZlRXZlbnRzLnB1c2goZXZ0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGZyb20gcXVldWUgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgIC8vIFN1Z2dlc3RlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbGF6ZFxuICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9jb21taXQvYzZlYmZhYTliYzk3M2IzM2QxMTBhODRhMzA3NzQyYjdjZjk0Yzk1MyNjb21taXRjb21tZW50LTUwMjQ5MTBcblxuICAgIChsaXZlRXZlbnRzLmxlbmd0aClcbiAgICAgID8gZVtuYW1lXSA9IGxpdmVFdmVudHNcbiAgICAgIDogZGVsZXRlIGVbbmFtZV07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNvdXJjZSkpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ3RpbnktZW1pdHRlcicpO1xudmFyIExldGhhcmd5ID0gcmVxdWlyZSgnbGV0aGFyZ3knKS5MZXRoYXJneTtcbnZhciBzdXBwb3J0ID0gcmVxdWlyZSgnLi9zdXBwb3J0Jyk7XG52YXIgY2xvbmUgPSByZXF1aXJlKCcuL2Nsb25lJyk7XG52YXIgYmluZEFsbCA9IHJlcXVpcmUoJ2JpbmRhbGwtc3RhbmRhbG9uZScpO1xudmFyIEVWVF9JRCA9ICd2aXJ0dWFsc2Nyb2xsJztcblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsU2Nyb2xsO1xuXG52YXIga2V5Q29kZXMgPSB7XG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbiAgICBTUEFDRTogMzJcbn07XG5cbmZ1bmN0aW9uIFZpcnR1YWxTY3JvbGwob3B0aW9ucykge1xuICAgIGJpbmRBbGwodGhpcywgJ19vbldoZWVsJywgJ19vbk1vdXNlV2hlZWwnLCAnX29uVG91Y2hTdGFydCcsICdfb25Ub3VjaE1vdmUnLCAnX29uS2V5RG93bicpO1xuXG4gICAgdGhpcy5lbCA9IHdpbmRvdztcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmVsKSB7XG4gICAgICAgIHRoaXMuZWwgPSBvcHRpb25zLmVsO1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5lbDtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gb2JqZWN0QXNzaWduKHtcbiAgICAgICAgbW91c2VNdWx0aXBsaWVyOiAxLFxuICAgICAgICB0b3VjaE11bHRpcGxpZXI6IDIsXG4gICAgICAgIGZpcmVmb3hNdWx0aXBsaWVyOiAxNSxcbiAgICAgICAga2V5U3RlcDogMTIwLFxuICAgICAgICBwcmV2ZW50VG91Y2g6IGZhbHNlLFxuICAgICAgICB1bnByZXZlbnRUb3VjaENsYXNzOiAndnMtdG91Y2htb3ZlLWFsbG93ZWQnLFxuICAgICAgICBsaW1pdEluZXJ0aWE6IGZhbHNlXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW5lcnRpYSkgdGhpcy5fbGV0aGFyZ3kgPSBuZXcgTGV0aGFyZ3koKTtcblxuICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuICAgIHRoaXMuX2V2ZW50ID0ge1xuICAgICAgICB5OiAwLFxuICAgICAgICB4OiAwLFxuICAgICAgICBkZWx0YVg6IDAsXG4gICAgICAgIGRlbHRhWTogMFxuICAgIH07XG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy5ib2R5VG91Y2hBY3Rpb24gPSBudWxsO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wYXNzaXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lck9wdGlvbnMgPSB7cGFzc2l2ZTogdGhpcy5vcHRpb25zLnBhc3NpdmV9O1xuICAgIH1cbn1cblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX25vdGlmeSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LnggKz0gZXZ0LmRlbHRhWDtcbiAgICBldnQueSArPSBldnQuZGVsdGFZO1xuXG4gICB0aGlzLl9lbWl0dGVyLmVtaXQoRVZUX0lELCB7XG4gICAgICAgIHg6IGV2dC54LFxuICAgICAgICB5OiBldnQueSxcbiAgICAgICAgZGVsdGFYOiBldnQuZGVsdGFYLFxuICAgICAgICBkZWx0YVk6IGV2dC5kZWx0YVksXG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGVcbiAgIH0pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uV2hlZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKHRoaXMuX2xldGhhcmd5ICYmIHRoaXMuX2xldGhhcmd5LmNoZWNrKGUpID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgIC8vIEluIENocm9tZSBhbmQgaW4gRmlyZWZveCAoYXQgbGVhc3QgdGhlIG5ldyBvbmUpXG4gICAgZXZ0LmRlbHRhWCA9IGUud2hlZWxEZWx0YVggfHwgZS5kZWx0YVggKiAtMTtcbiAgICBldnQuZGVsdGFZID0gZS53aGVlbERlbHRhWSB8fCBlLmRlbHRhWSAqIC0xO1xuXG4gICAgLy8gZm9yIG91ciBwdXJwb3NlIGRlbHRhbW9kZSA9IDEgbWVhbnMgdXNlciBpcyBvbiBhIHdoZWVsIG1vdXNlLCBub3QgdG91Y2ggcGFkXG4gICAgLy8gcmVhbCBtZWFuaW5nOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2hlZWxFdmVudCNEZWx0YV9tb2Rlc1xuICAgIGlmKHN1cHBvcnQuaXNGaXJlZm94ICYmIGUuZGVsdGFNb2RlID09IDEpIHtcbiAgICAgICAgZXZ0LmRlbHRhWCAqPSBvcHRpb25zLmZpcmVmb3hNdWx0aXBsaWVyO1xuICAgICAgICBldnQuZGVsdGFZICo9IG9wdGlvbnMuZmlyZWZveE11bHRpcGxpZXI7XG4gICAgfVxuXG4gICAgZXZ0LmRlbHRhWCAqPSBvcHRpb25zLm1vdXNlTXVsdGlwbGllcjtcbiAgICBldnQuZGVsdGFZICo9IG9wdGlvbnMubW91c2VNdWx0aXBsaWVyO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uTW91c2VXaGVlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW5lcnRpYSAmJiB0aGlzLl9sZXRoYXJneS5jaGVjayhlKSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgIC8vIEluIFNhZmFyaSwgSUUgYW5kIGluIENocm9tZSBpZiAnd2hlZWwnIGlzbid0IGRlZmluZWRcbiAgICBldnQuZGVsdGFYID0gKGUud2hlZWxEZWx0YVgpID8gZS53aGVlbERlbHRhWCA6IDA7XG4gICAgZXZ0LmRlbHRhWSA9IChlLndoZWVsRGVsdGFZKSA/IGUud2hlZWxEZWx0YVkgOiBlLndoZWVsRGVsdGE7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciB0ID0gKGUudGFyZ2V0VG91Y2hlcykgPyBlLnRhcmdldFRvdWNoZXNbMF0gOiBlO1xuICAgIHRoaXMudG91Y2hTdGFydFggPSB0LnBhZ2VYO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSB0LnBhZ2VZO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uVG91Y2hNb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmKG9wdGlvbnMucHJldmVudFRvdWNoXG4gICAgICAgICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMob3B0aW9ucy51bnByZXZlbnRUb3VjaENsYXNzKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgdmFyIHQgPSAoZS50YXJnZXRUb3VjaGVzKSA/IGUudGFyZ2V0VG91Y2hlc1swXSA6IGU7XG5cbiAgICBldnQuZGVsdGFYID0gKHQucGFnZVggLSB0aGlzLnRvdWNoU3RhcnRYKSAqIG9wdGlvbnMudG91Y2hNdWx0aXBsaWVyO1xuICAgIGV2dC5kZWx0YVkgPSAodC5wYWdlWSAtIHRoaXMudG91Y2hTdGFydFkpICogb3B0aW9ucy50b3VjaE11bHRpcGxpZXI7XG5cbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gdC5wYWdlWDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gdC5wYWdlWTtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbktleURvd24gPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuICAgIGV2dC5kZWx0YVggPSBldnQuZGVsdGFZID0gMDtcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gNDBcblxuICAgIHN3aXRjaChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5MRUZUOlxuICAgICAgICBjYXNlIGtleUNvZGVzLlVQOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IHRoaXMub3B0aW9ucy5rZXlTdGVwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5SSUdIVDpcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5ET1dOOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IC0gdGhpcy5vcHRpb25zLmtleVN0ZXA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5TUEFDRSAmJiBlLnNoaWZ0S2V5OlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IHdpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGtleUNvZGVzLlNQQUNFOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IC0gd2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX2JpbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzdXBwb3J0Lmhhc1doZWVsRXZlbnQpIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9vbldoZWVsLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgaWYoc3VwcG9ydC5oYXNNb3VzZVdoZWVsRXZlbnQpIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuX29uTW91c2VXaGVlbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuXG4gICAgaWYoc3VwcG9ydC5oYXNUb3VjaCkge1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzUG9pbnRlciAmJiBzdXBwb3J0Lmhhc1RvdWNoV2luKSB7XG4gICAgICAgIHRoaXMuYm9keVRvdWNoQWN0aW9uID0gZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb24gPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyRG93bicsIHRoaXMuX29uVG91Y2hTdGFydCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyTW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc0tleURvd24pIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX3VuYmluZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHN1cHBvcnQuaGFzV2hlZWxFdmVudCkgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuX29uV2hlZWwpO1xuICAgIGlmKHN1cHBvcnQuaGFzTW91c2VXaGVlbEV2ZW50KSB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLl9vbk1vdXNlV2hlZWwpO1xuXG4gICAgaWYoc3VwcG9ydC5oYXNUb3VjaCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc1BvaW50ZXIgJiYgc3VwcG9ydC5oYXNUb3VjaFdpbikge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb24gPSB0aGlzLmJvZHlUb3VjaEFjdGlvbjtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJNb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRydWUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzS2V5RG93bikgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bik7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGNiLCBjdHgpIHtcbiAgdGhpcy5fZW1pdHRlci5vbihFVlRfSUQsIGNiLCBjdHgpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9lbWl0dGVyLmU7XG4gIGlmIChldmVudHMgJiYgZXZlbnRzW0VWVF9JRF0gJiYgZXZlbnRzW0VWVF9JRF0ubGVuZ3RoID09PSAxKSB0aGlzLl9iaW5kKCk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihjYiwgY3R4KSB7XG4gIHRoaXMuX2VtaXR0ZXIub2ZmKEVWVF9JRCwgY2IsIGN0eCk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2VtaXR0ZXIuZTtcbiAgaWYgKCFldmVudHNbRVZUX0lEXSB8fCBldmVudHNbRVZUX0lEXS5sZW5ndGggPD0gMCkgdGhpcy5fdW5iaW5kKCk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQueCA9IDA7XG4gICAgZXZ0LnkgPSAwO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2VtaXR0ZXIub2ZmKCk7XG4gICAgdGhpcy5fdW5iaW5kKCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiBnZXRTdXBwb3J0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGhhc1doZWVsRXZlbnQ6ICdvbndoZWVsJyBpbiBkb2N1bWVudCxcbiAgICAgICAgaGFzTW91c2VXaGVlbEV2ZW50OiAnb25tb3VzZXdoZWVsJyBpbiBkb2N1bWVudCxcbiAgICAgICAgaGFzVG91Y2g6ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNUb3VjaFdpbjogbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgJiYgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAxLFxuICAgICAgICBoYXNQb2ludGVyOiAhIXdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCxcbiAgICAgICAgaGFzS2V5RG93bjogJ29ua2V5ZG93bicgaW4gZG9jdW1lbnQsXG4gICAgICAgIGlzRmlyZWZveDogbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPiAtMVxuICAgIH07XG59KSgpO1xuIl19
