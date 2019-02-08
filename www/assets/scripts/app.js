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
    inertia: 1
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
        touchMultiplier: 4,
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
        _this2.isScrolling = true;
        if (_this2.instance.delta.y < 0) _this2.instance.delta.y = 0;
        if (_this2.instance.delta.y > _this2.instance.limit) _this2.instance.delta.y = _this2.instance.limit;
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
      this.scrollTo({
        toBottom: true
      });
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
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9hcHAuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvU2Nyb2xsLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL1Ntb290aFNjcm9sbC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL1Njcm9sbC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL1Njcm9sbE1hbmFnZXIuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvdmVuZG9ycy9TbW9vdGhTY3JvbGwuanMiLCJhc3NldHMvc2NyaXB0cy91dGlscy9kZWJvdW5jZS5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL2Vudmlyb25tZW50LmpzIiwiYXNzZXRzL3NjcmlwdHMvdXRpbHMvaXMuanMiLCJub2RlX21vZHVsZXMvYmluZGFsbC1zdGFuZGFsb25lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xldGhhcmd5L2xldGhhcmd5LmpzIiwibm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvdGlueS1lbWl0dGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtc2Nyb2xsL3NyYy9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLXNjcm9sbC9zcmMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvc3JjL3N1cHBvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0lBOzs7O0FBSkE7QUFDQTtBQUNBOztBQUNBO0FBR0EsQ0FBQyxZQUFXO0FBRVI7QUFDQSxNQUFNLFlBQVksR0FBRyxJQUFJLHNCQUFKLENBQWtCO0FBQ25DLElBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxZQUFELENBRHVCO0FBRW5DLElBQUEsUUFBUSxFQUFFLGFBRnlCO0FBR25DLElBQUEsTUFBTSxFQUFFLElBSDJC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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQXBwXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuaW1wb3J0IFNjcm9sbE1hbmFnZXIgZnJvbSAnLi9zY3JvbGwvdmVuZG9ycy9TY3JvbGxNYW5hZ2VyJztcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gSW5pdCBMb2NvbW90aXZlIFNjcm9sbFxuICAgIGNvbnN0IHNtb290aFNjcm9sbCA9IG5ldyBTY3JvbGxNYW5hZ2VyKHtcbiAgICAgICAgY29udGFpbmVyOiAkKCcjanMtc2Nyb2xsJyksXG4gICAgICAgIHNlbGVjdG9yOiAnLmpzLWFuaW1hdGUnLFxuICAgICAgICBzbW9vdGg6IHRydWUsXG4gICAgICAgIHNtb290aE1vYmlsZTogdHJ1ZSxcbiAgICAgICAgbW9iaWxlQ29udGFpbmVyOiAkKGRvY3VtZW50KSxcbiAgICAgICAgZ2V0V2F5OiBmYWxzZSxcbiAgICAgICAgZ2V0U3BlZWQ6IGZhbHNlLFxuICAgICAgICBpbmVydGlhOiAxXG4gICAgfSk7XG5cbn0pKCk7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRXh0ZW5kZWQgTG9jb21vdGl2ZSBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgU2Nyb2xsLCB7IEVWRU5UX0tFWSBhcyBWRU5ET1JfRVZFTlRfS0VZLCBFVkVOVCBhcyBWRU5ET1JfRVZFTlRTLCBERUZBVUxUUyBhcyBWRU5ET1JfREVGQVVMVFMgfSBmcm9tICcuL3ZlbmRvcnMvU2Nyb2xsJ1xuXG4vKipcbiAqIFVOQ09NTUVOVCBPTkxZIFRIRSBMSU5FUyBZT1UgTkVFRFxuICovXG4vLyBpbXBvcnQgeyAkd2luZG93LCAkZG9jdW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9lbnZpcm9ubWVudCc7XG4vLyBpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UnO1xuLy8gaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRfS0VZID0gVkVORE9SX0VWRU5UX0tFWTtcblxuZXhwb3J0IGNvbnN0IEVWRU5UID0gT2JqZWN0LmFzc2lnbihWRU5ET1JfRVZFTlRTLCB7XG4gICAgLy8gVEVTVDogYHRlc3QuJHtFVkVOVF9LRVl9YFxufSk7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IE9iamVjdC5hc3NpZ24oVkVORE9SX0RFRkFVTFRTLCB7IH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFNjcm9sbCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKVxuICAgIH1cbn1cbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFeHRlbmRlZCBMb2NvbW90aXZlIFNtb290aCBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJy4vdmVuZG9ycy9TbW9vdGhTY3JvbGwnXG5cbi8qKlxuICogVU5DT01NRU5UIE9OTFkgVEhFIExJTkVTIFlPVSBORUVEXG4gKi9cbi8vIGltcG9ydCB7ICR3aW5kb3csICRkb2N1bWVudCwgJGh0bWwgfSBmcm9tICcuLi91dGlscy9lbnZpcm9ubWVudCc7XG4vLyBpbXBvcnQgU2Nyb2xsLCB7IERFRkFVTFRTLCBFVkVOVCB9IGZyb20gJy4vU2Nyb2xsJztcblxuLy8gaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uL3V0aWxzL2RlYm91bmNlJztcbi8vIGltcG9ydCBTY3JvbGxiYXIgZnJvbSAnc21vb3RoLXNjcm9sbGJhcic7XG4vLyBpbXBvcnQgeyBpc051bWVyaWMgfSBmcm9tICcuLi91dGlscy9pcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgU21vb3RoU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvY29tb3RpdmUgU2Nyb2xsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuaW1wb3J0IHsgJHdpbmRvdywgJGRvY3VtZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRfS0VZID0gYExvY29tb3RpdmVTY3JvbGxgO1xuXG5leHBvcnQgY29uc3QgRVZFTlQgPSB7XG4gICAgQ0xJQ0s6IGBjbGljay4ke0VWRU5UX0tFWX1gLFxuICAgIElTUkVBRFk6IGBpc1JlYWR5LiR7RVZFTlRfS0VZfWAsXG4gICAgUkVCVUlMRDogYHJlYnVpbGQuJHtFVkVOVF9LRVl9YCxcbiAgICBSRU5ERVI6IGByZW5kZXIuJHtFVkVOVF9LRVl9YCxcbiAgICBSRVNJWkU6IGByZXNpemUuJHtFVkVOVF9LRVl9YCxcbiAgICBTQ1JPTEw6IGBzY3JvbGwuJHtFVkVOVF9LRVl9YCxcbiAgICBTQ1JPTExUTzogYHNjcm9sbFRvLiR7RVZFTlRfS0VZfWAsXG4gICAgVVBEQVRFOiBgdXBkYXRlLiR7RVZFTlRfS0VZfWBcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IHtcbiAgICBjb250YWluZXI6ICRkb2N1bWVudCxcbiAgICBtb2JpbGVDb250YWluZXI6ICRkb2N1bWVudCxcbiAgICBvblNjcm9sbDogZnVuY3Rpb24oKXt9LFxuICAgIHNlbGVjdG9yOiAnLmpzLWFuaW1hdGUnLFxuICAgIHNtb290aDogZmFsc2UsXG4gICAgc21vb3RoTW9iaWxlOiBmYWxzZSxcbiAgICByZXZlcnNlZDogZmFsc2UsXG4gICAgZ2V0V2F5OiBmYWxzZSxcbiAgICBnZXRTcGVlZDogZmFsc2Vcbn07XG5cbi8qKlxuICogTWFuYWdlIGFuaW1hdGlvbiBvZiBlbGVtZW50cyBvbiB0aGUgcGFnZSBhY2NvcmRpbmcgdG8gc2Nyb2xsIHBvc2l0aW9uLlxuICpcbiAqIEB0b2RvICBNYW5hZ2Ugc29tZSBvcHRpb25zIChub3JtYWxseSBmcm9tIGRhdGEgYXR0cmlidXRlcykgd2l0aCBjb25zdHJ1Y3RvciBvcHRpb25zIChleC46IHNldCByZXBlYXQgZm9yIGFsbClcbiAqIEB0b2RvICBNZXRob2QgdG8gZ2V0IHRoZSBkaXN0YW5jZSAoYXMgcGVyY2VudGFnZSkgb2YgYW4gZWxlbWVudCBpbiB0aGUgdmlld3BvcnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAgICAgICB0aGlzLiRjb250YWluZXIgPSAob3B0aW9ucy5jb250YWluZXIpID8gb3B0aW9ucy5jb250YWluZXIgOiBERUZBVUxUUy5jb250YWluZXI7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSAob3B0aW9ucy5zZWxlY3RvcikgPyBvcHRpb25zLnNlbGVjdG9yIDogREVGQVVMVFMuc2VsZWN0b3I7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSB7XG4gICAgICAgICAgICBvblNjcm9sbDogdHlwZW9mIG9wdGlvbnMub25TY3JvbGwgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLm9uU2Nyb2xsIDogREVGQVVMVFMub25TY3JvbGxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xuICAgICAgICB0aGlzLndpbmRvd01pZGRsZSA9IHRoaXMud2luZG93SGVpZ2h0IC8gMjtcblxuICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMgPSBbXTtcblxuICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHNjcm9sbGluZyBhbmltYXRpb25zXG4gICAgICovXG4gICAgaW5pdCgpIHtcblxuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICAvLyBPbiBzY3JvbGxcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlNDUk9MTCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVidWlsZCBldmVudFxuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuUkVCVUlMRCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0OiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBldmVudFxuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuVVBEQVRFLCAoZXZlbnQsIG9wdGlvbnMpID0+IHRoaXMudXBkYXRlKG9wdGlvbnMpKTtcblxuICAgICAgICAvLyBSZW5kZXIgZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlJFTkRFUiwgKCkgPT4gdGhpcy5yZW5kZXIoKSk7XG5cbiAgICAgICAgLy8gU2Nyb2xsdG8gYnV0dG9uIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5DTElDSywgJy5qcy1zY3JvbGx0bycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9ICR0YXJnZXQuZGF0YSgnb2Zmc2V0Jyk7XG5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHNvdXJjZUVsZW06ICR0YXJnZXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0RWxlbTogb2Zmc2V0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5TQ1JPTExUTywgKGV2ZW50KSA9PiB0aGlzLnNjcm9sbFRvKGV2ZW50Lm9wdGlvbnMpKTtcblxuICAgICAgICAvLyBTZXR1cCBkb25lXG4gICAgICAgICRkb2N1bWVudC50cmlnZ2VySGFuZGxlcih7XG4gICAgICAgICAgICB0eXBlOiBFVkVOVC5JU1JFQURZXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlc2l6ZSBldmVudFxuICAgICAgICAkd2luZG93Lm9uKEVWRU5ULlJFU0laRSwgZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICB9LCAyMCkpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBhbGwgYW5pbWF0YWJsZSBlbGVtZW50cy5cbiAgICAgKiBDYWxsZWQgb24gcGFnZSBsb2FkIGFuZCBhbnkgc3Vic2VxdWVudCB1cGRhdGVzLlxuICAgICAqL1xuICAgIGFkZEVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMgPSBbXTtcblxuICAgICAgICBjb25zdCAkZWxlbWVudHMgPSAkKHRoaXMuc2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBsZW4gPSAkZWxlbWVudHMubGVuZ3RoO1xuICAgICAgICBsZXQgaSA9IDA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkgKyspIHtcbiAgICAgICAgICAgIGxldCAkZWxlbWVudCA9ICRlbGVtZW50cy5lcShpKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VGFyZ2V0ID0gJGVsZW1lbnQuYXR0cignZGF0YS10YXJnZXQnKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50UG9zaXRpb24gPSAkZWxlbWVudC5hdHRyKCdkYXRhLXBvc2l0aW9uJyk7XG4gICAgICAgICAgICBsZXQgJHRhcmdldCA9IChlbGVtZW50VGFyZ2V0ICYmICQoZWxlbWVudFRhcmdldCkubGVuZ3RoKSA/ICQoZWxlbWVudFRhcmdldCkgOiAkZWxlbWVudDtcbiAgICAgICAgICAgIGxldCBlbGVtZW50T2Zmc2V0ID0gJHRhcmdldC5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICBsZXQgZWxlbWVudExpbWl0ID0gZWxlbWVudE9mZnNldCArICR0YXJnZXQub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50U3RpY2t5ID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLXN0aWNreScpID09PSAnc3RyaW5nJyk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFN0aWNreVRhcmdldCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtc3RpY2t5LXRhcmdldCcpO1xuXG4gICAgICAgICAgICBsZXQgZWxlbWVudFZpZXdwb3J0T2Zmc2V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLXZpZXdwb3J0LW9mZnNldCcpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgZWxlbWVudFZpZXdwb3J0T2Zmc2V0ID0gJGVsZW1lbnQuYXR0cignZGF0YS12aWV3cG9ydC1vZmZzZXQnKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9NYW5hZ2UgY2FsbGJhY2tcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q2FsbGJhY2tTdHJpbmcgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtY2FsbGJhY2snKSA9PT0gJ3N0cmluZycpID8gJGVsZW1lbnQuYXR0cignZGF0YS1jYWxsYmFjaycpIDogbnVsbDtcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgICAgICBpZihlbGVtZW50Q2FsbGJhY2tTdHJpbmcgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gZWxlbWVudENhbGxiYWNrU3RyaW5nLnN1YnN0cigwLCBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuaW5kZXhPZignKCcpKTtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uc1N0cmluZyA9IGVsZW1lbnRDYWxsYmFja1N0cmluZy5zdWJzdHIoZWxlbWVudENhbGxiYWNrU3RyaW5nLmluZGV4T2YoJygnKSxlbGVtZW50Q2FsbGJhY2tTdHJpbmcubGVuZ3RoIC0gZXZlbnQubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcgPSBvcHRpb25zU3RyaW5nLnJlcGxhY2UoJygnLCcnKTtcbiAgICAgICAgICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKCcpJywnJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IG9wdGlvbnNTdHJpbmcuc3BsaXQoJ3wnKTtcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb3B0aW9ucy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25zW2pdLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblswXSA9IG9wdGlvblswXS5yZXBsYWNlKCcgJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBhIGJvb2xlYW5cbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uWzFdID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9wdGlvblsxXSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhbHVlIGlzIG51bWVyaWNcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZigvXlxcZCskLy50ZXN0KG9wdGlvblsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHBhcnNlSW50KG9wdGlvblsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBhIFN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IG9wdGlvblsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvYmpbb3B0aW9uWzBdXSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50Q2FsbGJhY2sgPSB7ZXZlbnQ6ZXZlbnQsIG9wdGlvbnM6b2JqfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgZWxlbWVudHMgbG9zZXMgaXRzIGFuaW1hdGlvbiBhZnRlciBzY3JvbGxpbmcgcGFzdCBpdFxuICAgICAgICAgICAgbGV0IGVsZW1lbnRSZXBlYXQgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtcmVwZWF0JykgPT09ICdzdHJpbmcnKTtcblxuICAgICAgICAgICAgbGV0IGVsZW1lbnRJblZpZXdDbGFzcyA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtaW52aWV3LWNsYXNzJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnRJblZpZXdDbGFzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50SW5WaWV3Q2xhc3MgPSAnaXMtc2hvdyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50U3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50U3RpY2t5VGFyZ2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGltaXQgPSB0aGlzLiRjb250YWluZXIuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gJChlbGVtZW50U3RpY2t5VGFyZ2V0KS5vZmZzZXQoKS50b3AgLSAkZWxlbWVudC5oZWlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZXNldCBvZmZzZXRcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcyhlbGVtZW50SW5WaWV3Q2xhc3MpO1xuICAgICAgICAgICAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKCdpcy11bnN0dWNrJyk7XG5cbiAgICAgICAgICAgICAgICAkZWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxuICAgICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERvbid0IGFkZCBlbGVtZW50IGlmIGl0IGFscmVhZHkgaGFzIGl0cyBpbnZpZXcgY2xhc3MgYW5kIGRvZXNuJ3QgcmVwZWF0XG4gICAgICAgICAgICBpZiAoZWxlbWVudFJlcGVhdCB8fCAhJGVsZW1lbnQuaGFzQ2xhc3MoZWxlbWVudEluVmlld0NsYXNzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50c1tpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6ICRlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IE1hdGgucm91bmQoZWxlbWVudE9mZnNldCksXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdDogZWxlbWVudFJlcGVhdCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGVsZW1lbnRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IGVsZW1lbnRMaW1pdCxcbiAgICAgICAgICAgICAgICAgICAgaW5WaWV3Q2xhc3M6IGVsZW1lbnRJblZpZXdDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgc3RpY2t5OiBlbGVtZW50U3RpY2t5LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZWxlbWVudENhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydE9mZnNldDogZWxlbWVudFZpZXdwb3J0T2Zmc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvb3AgdGhyb3VnaCBhbGwgYW5pbWF0YWJsZSBlbGVtZW50cyBhbmQgYXBwbHkgYW5pbWF0aW9uIG1ldGhvZChzKS5cbiAgICAgKi9cbiAgICBhbmltYXRlRWxlbWVudHMoKSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IHRoaXMuYW5pbWF0ZWRFbGVtZW50cy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ZXMgPSBbXTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuYW5pbWF0ZWRFbGVtZW50c1tpXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQncyB2aXNpYmlsaXR5IG11c3Qgbm90IGJlIG1hbmlwdWxhdGVkIGFueSBmdXJ0aGVyLCByZW1vdmUgaXQgZnJvbSB0aGUgbGlzdFxuICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlRWxlbWVudChlbGVtZW50LCBpKSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUluZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbmltYXRlZCBlbGVtZW50cyBhZnRlciBsb29waW5nIHRocm91Z2ggZWxlbWVudHNcbiAgICAgICAgaSA9IHJlbW92ZUluZGV4ZXMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMuc3BsaWNlKHJlbW92ZUluZGV4ZXNbaV0sIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjbGFzcyBhbmltYXRpb25zLCBhbmQgdXBkYXRlIHRoZSBnbG9iYWwgc2Nyb2xsIHBvc2l0aW9ubmluZy5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiB0aGlzLnNjcm9sbC55KSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5zY3JvbGwuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gZWxzZSBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgdGhpcy5zY3JvbGwueSkge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ3VwJykge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICd1cCc7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAodGhpcy5zY3JvbGwueSAhPT0gd2luZG93LnBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbC55ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbC54ICE9PSB3aW5kb3cucGFnZVhPZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnggPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5vblNjcm9sbCh0aGlzLnNjcm9sbClcblxuICAgICAgICB0aGlzLmFuaW1hdGVFbGVtZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBjbGFzc2VzIG9uIGFuIGVsZW1lbnQgaWYgaXQncyB2aXNpYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgICAgIGVsZW1lbnQgQ3VycmVudCBlbGVtZW50IHRvIHRlc3RcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICAgICAgaW5kZXggICBJbmRleCBvZiB0aGUgZWxlbWVudCB3aXRoaW4gaXQncyBjb250YWluZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAgICAgICBXZXRoZXIgdGhlIGl0ZW0gbXVzdCBiZSByZW1vdmVkIGZyb20gaXRzIGNvbnRhaW5lclxuICAgICAqL1xuICAgIHRvZ2dsZUVsZW1lbnQoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IHJlbW92ZUZyb21Db250YWluZXIgPSBmYWxzZTtcblxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBib3R0b20gZWRnZSBvZiB0aGUgc2Nyb2xsIGNvbnRhaW5lclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGwueTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHNjcm9sbFRvcCArIHRoaXMud2luZG93SGVpZ2h0O1xuXG4gICAgICAgICAgICAvLyBEZWZpbmUgaWYgdGhlIGVsZW1lbnQgaXMgaW5WaWV3XG4gICAgICAgICAgICBsZXQgaW5WaWV3ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxUb3AgPj0gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVG9wIDw9IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnBvc2l0aW9uID09PSAnYmVsb3cnKSB7XG4gICAgICAgICAgICAgICAgaW5WaWV3ID0gKHNjcm9sbFRvcCA+IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnN0aWNreSkge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxUb3AgPj0gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVG9wIDw9IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfWVsc2UgaWYoZWxlbWVudC52aWV3cG9ydE9mZnNldCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LnZpZXdwb3J0T2Zmc2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbFZpZXdwb3J0T2Zmc2V0VG9wID0gc2Nyb2xsVG9wICsgKHRoaXMud2luZG93SGVpZ2h0ICogZWxlbWVudC52aWV3cG9ydE9mZnNldFsxXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxWaWV3cG9ydE9mZnNldEJvdHRvbSA9IHNjcm9sbEJvdHRvbSAtICh0aGlzLndpbmRvd0hlaWdodCAqIGVsZW1lbnQudmlld3BvcnRPZmZzZXRbMF0pO1xuICAgICAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsVmlld3BvcnRPZmZzZXRCb3R0b20gPiBlbGVtZW50Lm9mZnNldCAmJiBzY3JvbGxWaWV3cG9ydE9mZnNldFRvcCA8IGVsZW1lbnQubGltaXQpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbFZpZXdwb3J0T2Zmc2V0ID0gc2Nyb2xsQm90dG9tIC0gKHRoaXMud2luZG93SGVpZ2h0ICogZWxlbWVudC52aWV3cG9ydE9mZnNldFswXSk7XG4gICAgICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxWaWV3cG9ydE9mZnNldCA+IGVsZW1lbnQub2Zmc2V0ICYmIHNjcm9sbFZpZXdwb3J0T2Zmc2V0IDwgZWxlbWVudC5saW1pdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxCb3R0b20gPj0gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVG9wIDw9IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wID4gZWxlbWVudC5saW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LiRlbGVtZW50LmFkZENsYXNzKCdpcy11bnN0dWNrJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC5yZW1vdmVDbGFzcygnaXMtdW5zdHVjaycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPCBlbGVtZW50Lm9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LiRlbGVtZW50LnJlbW92ZUNsYXNzKGVsZW1lbnQuaW5WaWV3Q2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIGNsYXNzIGlmIGluVmlldywgcmVtb3ZlIGlmIG5vdFxuICAgICAgICAgICAgaWYgKGluVmlldykge1xuICAgICAgICAgICAgICAgIGlmKCFlbGVtZW50LiRlbGVtZW50Lmhhc0NsYXNzKGVsZW1lbnQuaW5WaWV3Q2xhc3MpKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC5hZGRDbGFzcyhlbGVtZW50LmluVmlld0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyQ2FsbGJhY2soZWxlbWVudCwnZW50ZXInKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQucmVwZWF0ICYmICFlbGVtZW50LnN0aWNreSkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVGcm9tQ29udGFpbmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSB0aGlzLnNjcm9sbC55IC0gZWxlbWVudC5vZmZzZXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKDAsICR7eX1weCwgMClgLFxuICAgICAgICAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBgdHJhbnNsYXRlM2QoMCwgJHt5fXB4LCAwKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKDAsICR7eX1weCwgMClgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuJGVsZW1lbnQuaGFzQ2xhc3MoZWxlbWVudC5pblZpZXdDbGFzcykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC5yZW1vdmVDbGFzcyhlbGVtZW50LmluVmlld0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckNhbGxiYWNrKGVsZW1lbnQsJ2xlYXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVtb3ZlRnJvbUNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjaGVjayBpZiB0aGUgZWxlbWVudCBoYXZlIGEgY2FsbGJhY2ssIGFuZCB0cmlnZ2VyIHRoZSBldmVudCBzZXQgaW4gdGhlIGRhdGEtY2FsbGJhY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gICAgICBlbGVtZW50IEN1cnJlbnQgZWxlbWVudCB0byB0ZXN0XG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgdHJpZ2dlckNhbGxiYWNrKGVsZW1lbnQsd2F5KXtcblxuICAgICAgICBpZihlbGVtZW50LmNhbGxiYWNrICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBlbGVtZW50LiRlbGVtZW50LnRyaWdnZXIoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGVsZW1lbnQuY2FsbGJhY2suZXZlbnQsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZWxlbWVudC5jYWxsYmFjay5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHdheTogd2F5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vYWRkIHRoaXMgd2hlcmUgeW91IHdhbnQgZHVkZSAoaW4geW91ciBtb2R1bGUgYnR3KVxuICAgICAgICAgICAgLy8gJGRvY3VtZW50Lm9uKGV2ZW50Lk5hbWVzcGFjZSwoZSk9PntcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlLm9wdGlvbnMsIGUud2F5KTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gYSBkZXNpcmVkIHRhcmdldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2Nyb2xsVG8ob3B0aW9ucykge1xuICAgICAgICBjb25zdCAkdGFyZ2V0RWxlbSA9IG9wdGlvbnMudGFyZ2V0RWxlbTtcbiAgICAgICAgY29uc3QgJHNvdXJjZUVsZW0gPSBvcHRpb25zLnNvdXJjZUVsZW07XG4gICAgICAgIGNvbnN0IG9mZnNldEVsZW0gPSBvcHRpb25zLm9mZnNldEVsZW07XG4gICAgICAgIGxldCB0YXJnZXRPZmZzZXQgPSBpc051bWVyaWMob3B0aW9ucy50YXJnZXRPZmZzZXQpID8gcGFyc2VJbnQob3B0aW9ucy50YXJnZXRPZmZzZXQpIDogMDtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBpc051bWVyaWMob3B0aW9ucy5zcGVlZCkgPyBwYXJzZUludChvcHRpb25zLnNwZWVkKSA6IDgwMDtcbiAgICAgICAgY29uc3QgZGVsYXkgPSBpc051bWVyaWMob3B0aW9ucy5kZWxheSkgPyBwYXJzZUludChvcHRpb25zLmRlbGF5KSA6IDA7XG4gICAgICAgIGNvbnN0IHRvVG9wID0gb3B0aW9ucy50b1RvcDtcbiAgICAgICAgY29uc3QgdG9Cb3R0b20gPSBvcHRpb25zLnRvQm90dG9tO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgICAgICBpZiAodHlwZW9mICR0YXJnZXRFbGVtID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgJHNvdXJjZUVsZW0gPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0YXJnZXRPZmZzZXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBtdXN0IHNwZWNpZnkgYXQgbGVhc3Qgb25lIHBhcmFtZXRlci4nKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkdGFyZ2V0RWxlbSAhPT0gJ3VuZGVmaW5lZCcgJiYgJHRhcmdldEVsZW0gaW5zdGFuY2VvZiBqUXVlcnkgJiYgJHRhcmdldEVsZW0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gJHRhcmdldEVsZW0ub2Zmc2V0KCkudG9wICsgdGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkc291cmNlRWxlbSAhPT0gJ3VuZGVmaW5lZCcgJiYgJHNvdXJjZUVsZW0gaW5zdGFuY2VvZiBqUXVlcnkgJiYgJHNvdXJjZUVsZW0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHRhcmdldERhdGEgPSAnJztcblxuICAgICAgICAgICAgaWYgKCRzb3VyY2VFbGVtLmF0dHIoJ2RhdGEtdGFyZ2V0JykpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXREYXRhID0gJHNvdXJjZUVsZW0uYXR0cignZGF0YS10YXJnZXQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0YSA9ICRzb3VyY2VFbGVtLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gJCh0YXJnZXREYXRhKS5vZmZzZXQoKS50b3AgKyB0YXJnZXRPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIG9mZnNldEVsZW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAkKG9mZnNldEVsZW0pLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0YXJnZXRPZmZzZXQgLSBvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9Ub3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAodG9Cb3R0b20gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9ICRkb2N1bWVudC5oZWlnaHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0T2Zmc2V0XG4gICAgICAgICAgICB9LCBzcGVlZCk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgZWxlbWVudHMgYW5kIHJlY2FsY3VsYXRlIGFsbCB0aGUgcG9zaXRpb25zIG9uIHRoZSBwYWdlXG4gICAgICovXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZUVsZW1lbnRzKCk7XG5cbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xuICAgICAgICB0aGlzLndpbmRvd01pZGRsZSA9IHRoaXMud2luZG93SGVpZ2h0IC8gMjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95XG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgJHdpbmRvdy5vZmYoYC4ke0VWRU5UX0tFWX1gKTtcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9mZihgLiR7RVZFTlRfS0VZfWApO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0SWQpO1xuICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2NvbW90aXZlIFNjcm9sbCBNYW5hZ2VyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuaW1wb3J0IHsgJGRvY3VtZW50LCAkd2luZG93LCAkaHRtbCwgJGJvZHkgfSBmcm9tICcuLi8uLi91dGlscy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgU2Nyb2xsLCB7IERFRkFVTFRTLCBFVkVOVCB9IGZyb20gJy4uL1Njcm9sbCc7XG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJy4uL1Ntb290aFNjcm9sbCc7XG5cbi8qKlxuICogQmFzaWMgbW9kdWxlIHRoYXQgZGV0ZWN0cyB3aGljaCBzY3JvbGxpbmcgbW9kdWxlIHdlJ2xsIGJlIHVzaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuc21vb3RoID0gb3B0aW9ucy5zbW9vdGggfHwgREVGQVVMVFMuc21vb3RoO1xuICAgICAgICB0aGlzLnNtb290aE1vYmlsZSA9IG9wdGlvbnMuc21vb3RoTW9iaWxlIHx8IERFRkFVTFRTLnNtb290aE1vYmlsZTtcbiAgICAgICAgdGhpcy5tb2JpbGVDb250YWluZXIgPSBvcHRpb25zLm1vYmlsZUNvbnRhaW5lciB8fCBERUZBVUxUUy5tb2JpbGVDb250YWluZXI7XG4gICAgICAgIHRoaXMuaXNNb2JpbGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICAkaHRtbFswXS5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAkYm9keVswXS5zY3JvbGxUb3AgPSAwO1xuXG4gICAgICAgIGlmICghdGhpcy5zbW9vdGhNb2JpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGUgPSAoL0FuZHJvaWR8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSAoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc21vb3RoID09PSB0cnVlICYmICF0aGlzLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTbW9vdGhTY3JvbGwodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9iaWxlQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb250YWluZXIgPSB0aGlzLm1vYmlsZUNvbnRhaW5lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNjcm9sbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgICAgIGNvbnN0ICRzY3JvbGxUb09uTG9hZEVsID0gJCgnLmpzLXNjcm9sbHRvLW9uLWxvYWQnKS5maXJzdCgpO1xuXG4gICAgICAgIGlmICgkc2Nyb2xsVG9PbkxvYWRFbC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICRkb2N1bWVudC50cmlnZ2VySGFuZGxlcih7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0V2ZW50LlNDUk9MTFRPJyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEVsZW06ICRzY3JvbGxUb09uTG9hZEVsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9jb21vdGl2ZSBTbW9vdGggU2Nyb2xsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuaW1wb3J0IHsgJHdpbmRvdywgJGRvY3VtZW50LCAkaHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL2Vudmlyb25tZW50JztcbmltcG9ydCBTY3JvbGwsIHsgREVGQVVMVFMsIEVWRU5UIH0gZnJvbSAnLi4vU2Nyb2xsJztcblxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlJztcbmltcG9ydCBWaXJ0dWFsU2Nyb2xsIGZyb20gJ3ZpcnR1YWwtc2Nyb2xsJztcbmltcG9ydCB7IGlzTnVtZXJpYyB9IGZyb20gJy4uLy4uL3V0aWxzL2lzJztcblxuLyoqXG4gKiBTbW9vdGggc2Nyb2xsaW5nIHVzaW5nIGBzbW9vdGgtc2Nyb2xsYmFyYC5cbiAqIEJhc2VkIG9uIGBTY3JvbGxgIGNsYXNzLCB3aGljaCBhbGxvd3MgYW5pbWF0aW9ucyBvZiBlbGVtZW50cyBvbiB0aGUgcGFnZVxuICogYWNjb3JkaW5nIHRvIHNjcm9sbCBwb3NpdGlvbi5cbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuaXNSZXZlcnNlZCA9IG9wdGlvbnMucmV2ZXJzZWQgfHwgREVGQVVMVFMucmV2ZXJzZWQ7XG4gICAgICAgIHRoaXMuZ2V0V2F5ID0gb3B0aW9ucy5nZXRXYXkgfHwgREVGQVVMVFMuZ2V0V2F5O1xuICAgICAgICB0aGlzLmdldFNwZWVkID0gb3B0aW9ucy5nZXRTcGVlZCB8fCBERUZBVUxUUy5nZXRTcGVlZDtcbiAgICAgICAgdGhpcy5pbmVydGlhID0gb3B0aW9ucy5pbmVydGlhIHx8IERFRkFVTFRTLmluZXJ0aWE7XG5cbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW107XG5cbiAgICAgICAgaWYodGhpcy5nZXRTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwuc3BlZWQgPSAwO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHNjcm9sbGluZyBhbmltYXRpb25zXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gQWRkIGNsYXNzIHRvIHRoZSBkb2N1bWVudCB0byBrbm93IGlmIFNtb290aFNjcm9sbCBpcyBpbml0aWFsaXplZCAodG8gbWFuYWdlIG92ZXJmbG93IG9uIGNvbnRhaW5lcnMpXG4gICAgICAgICRodG1sLmFkZENsYXNzKCdoYXMtc21vb3RoLXNjcm9sbCcpO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmlydHVhbFNjcm9sbCh7XG4gICAgICAgICAgICBtb3VzZU11bHRpcGxpZXI6IDAuNSxcbiAgICAgICAgICAgIHRvdWNoTXVsdGlwbGllcjogNCxcbiAgICAgICAgICAgIGZpcmVmb3hNdWx0aXBsaWVyOiAzMFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmluZXJ0aWEgPSB0aGlzLmluZXJ0aWEgKiAwLjE7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cblxuICAgICAgICAvLyBAdG9kbyA6IHRvIG9wdGltaXplXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uub24oKGUpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YS55IC09IGUuZGVsdGFZO1xuICAgICAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA8IDApIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IDA7XG4gICAgICAgICAgICBpZih0aGlzLmluc3RhbmNlLmRlbHRhLnkgPiB0aGlzLmluc3RhbmNlLmxpbWl0KSB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSB0aGlzLmluc3RhbmNlLmxpbWl0O1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTGltaXQoKTtcblxuICAgICAgICAvLyBAdG9kb1xuICAgICAgICAvLyB0aGlzLnNldFdoZWVsRGlyZWN0aW9uKHRoaXMuaXNSZXZlcnNlZCk7XG5cbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuXG4gICAgICAgIC8vIFJlYnVpbGQgZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlJFQlVJTEQsICgpID0+IHtcbiAgICAgICAgICAgIC8vIEB0b2RvXG4gICAgICAgICAgICAvLyB0aGlzLnNjcm9sbGJhci5zY3JvbGxUbygwLCAwLCAxKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBldmVudFxuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuVVBEQVRFLCAoZXZlbnQsIG9wdGlvbnMpID0+IHRoaXMudXBkYXRlKG9wdGlvbnMpKTtcblxuICAgICAgICAvLyBTY3JvbGx0byBidXR0b24gZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULkNMSUNLLCAnLmpzLXNjcm9sbHRvJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gJHRhcmdldC5kYXRhKCdvZmZzZXQnKTtcblxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgc291cmNlRWxlbTogJHRhcmdldCxcbiAgICAgICAgICAgICAgICBvZmZzZXRFbGVtOiBvZmZzZXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBAdG9kbyBzY3JvbGx0b1xuICAgICAgICAvLyB0aGlzLiRjb250YWluZXIub24oRVZFTlQuU0NST0xMVE8sIChldmVudCkgPT4gdGhpcy5zY3JvbGxUbyhldmVudC5vcHRpb25zKSk7XG5cbiAgICAgICAgLy8gU2V0dXAgZG9uZVxuICAgICAgICAkZG9jdW1lbnQudHJpZ2dlckhhbmRsZXIoe1xuICAgICAgICAgICAgdHlwZTogRVZFTlQuSVNSRUFEWVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXNpemUgZXZlbnRcbiAgICAgICAgJHdpbmRvdy5vbihFVkVOVC5SRVNJWkUsKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByZWxvYWRJbWFnZXMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICB0aGlzLnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvQm90dG9tOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgZXhpc3RpbmcgZWxlbWVudHMgYW5kIGZpbmQgYWxsIGFuaW1hdGFibGUgZWxlbWVudHMuXG4gICAgICogQ2FsbGVkIG9uIHBhZ2UgbG9hZCBhbmQgYW55IHN1YnNlcXVlbnQgdXBkYXRlcy5cbiAgICAgKi9cbiAgICBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cyA9IFtdO1xuXG4gICAgICAgIGNvbnN0ICRlbGVtZW50cyA9ICQodGhpcy5zZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGxlbiA9ICRlbGVtZW50cy5sZW5ndGg7XG4gICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSArKykge1xuICAgICAgICAgICAgbGV0ICRlbGVtZW50ID0gJGVsZW1lbnRzLmVxKGkpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRTcGVlZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtc3BlZWQnKSA/ICRlbGVtZW50LmF0dHIoJ2RhdGEtc3BlZWQnKSAvIDEwIDogZmFsc2U7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFBvc2l0aW9uID0gJGVsZW1lbnQuYXR0cignZGF0YS1wb3NpdGlvbicpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYXJnZXQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLXRhcmdldCcpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRIb3Jpem9udGFsID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLWhvcml6b250YWwnKSA9PT0gJ3N0cmluZycpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRTdGlja3kgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtc3RpY2t5JykgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50U3RpY2t5VGFyZ2V0ID0gJGVsZW1lbnQuYXR0cignZGF0YS1zdGlja3ktdGFyZ2V0Jyk7XG4gICAgICAgICAgICBsZXQgJHRhcmdldCA9IChlbGVtZW50VGFyZ2V0ICYmICQoZWxlbWVudFRhcmdldCkubGVuZ3RoKSA/ICQoZWxlbWVudFRhcmdldCkgOiAkZWxlbWVudDtcbiAgICAgICAgICAgIGxldCBlbGVtZW50T2Zmc2V0ID0gJHRhcmdldC5vZmZzZXQoKS50b3AgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55O1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRMaW1pdCA9IGVsZW1lbnRPZmZzZXQgKyAkdGFyZ2V0Lm91dGVySGVpZ2h0KCk7XG5cblxuICAgICAgICAgICAgbGV0IGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9IG51bGw7XG4gICAgICAgICAgICBpZih0eXBlb2YgJGVsZW1lbnQuYXR0cignZGF0YS12aWV3cG9ydC1vZmZzZXQnKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgIGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtdmlld3BvcnQtb2Zmc2V0Jykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9NYW5hZ2UgY2FsbGJhY2tcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q2FsbGJhY2tTdHJpbmcgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtY2FsbGJhY2snKSA9PT0gJ3N0cmluZycpID8gJGVsZW1lbnQuYXR0cignZGF0YS1jYWxsYmFjaycpIDogbnVsbDtcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgICAgICBpZihlbGVtZW50Q2FsbGJhY2tTdHJpbmcgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gZWxlbWVudENhbGxiYWNrU3RyaW5nLnN1YnN0cigwLCBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuaW5kZXhPZignKCcpKTtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uc1N0cmluZyA9IGVsZW1lbnRDYWxsYmFja1N0cmluZy5zdWJzdHIoZWxlbWVudENhbGxiYWNrU3RyaW5nLmluZGV4T2YoJygnKSxlbGVtZW50Q2FsbGJhY2tTdHJpbmcubGVuZ3RoIC0gZXZlbnQubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcgPSBvcHRpb25zU3RyaW5nLnJlcGxhY2UoJygnLCcnKTtcbiAgICAgICAgICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKCcpJywnJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IG9wdGlvbnNTdHJpbmcuc3BsaXQoJ3wnKTtcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb3B0aW9ucy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25zW2pdLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblswXSA9IG9wdGlvblswXS5yZXBsYWNlKCcgJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBhIGJvb2xlYW5cbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uWzFdID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9wdGlvblsxXSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhbHVlIGlzIG51bWVyaWNcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZigvXlxcZCskLy50ZXN0KG9wdGlvblsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHBhcnNlSW50KG9wdGlvblsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBhIFN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IG9wdGlvblsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvYmpbb3B0aW9uWzBdXSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50Q2FsbGJhY2sgPSB7ZXZlbnQ6ZXZlbnQsIG9wdGlvbnM6b2JqfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgZWxlbWVudHMgc3RheXMgdmlzaWJsZSBhZnRlciBzY3JvbGxpbmcgcGFzdCBpdFxuICAgICAgICAgICAgbGV0IGVsZW1lbnRSZXBlYXQgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtcmVwZWF0JykgPT09ICdzdHJpbmcnKTtcblxuICAgICAgICAgICAgbGV0IGVsZW1lbnRJblZpZXdDbGFzcyA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtaW52aWV3LWNsYXNzJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnRJblZpZXdDbGFzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50SW5WaWV3Q2xhc3MgPSAnaXMtc2hvdyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZWxlbWVudFRhcmdldCAmJiAkZWxlbWVudC5hdHRyKCdkYXRhLXRyYW5zZm9ybScpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudE9mZnNldCAtPSBwYXJzZUZsb2F0KCRlbGVtZW50LmF0dHIoJ2RhdGEtdHJhbnNmb3JtJykueSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gZWxlbWVudE9mZnNldCArICR0YXJnZXQub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRTdGlja3kpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnRTdGlja3lUYXJnZXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaW1pdCA9IEluZmluaXR5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaW1pdCA9ICQoZWxlbWVudFN0aWNreVRhcmdldCkub2Zmc2V0KCkudG9wIC0gJGVsZW1lbnQuaGVpZ2h0KCkgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IHtcbiAgICAgICAgICAgICAgICAkZWxlbWVudDogJGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgaW5WaWV3Q2xhc3M6IGVsZW1lbnRJblZpZXdDbGFzcyxcbiAgICAgICAgICAgICAgICBsaW1pdDogZWxlbWVudExpbWl0LFxuICAgICAgICAgICAgICAgIG9mZnNldDogTWF0aC5yb3VuZChlbGVtZW50T2Zmc2V0KSxcbiAgICAgICAgICAgICAgICByZXBlYXQ6IGVsZW1lbnRSZXBlYXQsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGVsZW1lbnRDYWxsYmFjayxcbiAgICAgICAgICAgICAgICB2aWV3cG9ydE9mZnNldDogZWxlbWVudFZpZXdwb3J0T2Zmc2V0XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBGb3IgcGFyYWxsYXggYW5pbWF0ZWQgZWxlbWVudHNcbiAgICAgICAgICAgIGlmIChlbGVtZW50U3BlZWQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRQb3NpdGlvbiA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtcG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudEhvcml6b250YWwgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtaG9yaXpvbnRhbCcpID09PSAnc3RyaW5nJyk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRNaWRkbGUgPSAoKGVsZW1lbnRMaW1pdCAtIGVsZW1lbnRPZmZzZXQpIC8gMikgKyBlbGVtZW50T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50RGVsYXkgPSAkZWxlbWVudC5hdHRyKCdkYXRhLWRlbGF5Jyk7XG5cbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50Lmhvcml6b250YWwgPSBlbGVtZW50SG9yaXpvbnRhbDtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50Lm1pZGRsZSA9IGVsZW1lbnRNaWRkbGU7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5vZmZzZXQgPSBlbGVtZW50T2Zmc2V0O1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQucG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb247XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5zcGVlZCA9IGVsZW1lbnRTcGVlZFxuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuZGVsYXkgPSBlbGVtZW50RGVsYXk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnN0aWNreSA9IGVsZW1lbnRTdGlja3k7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50U3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbGF1bmNoIHRoZSB0b2dnbGUgZnVuY3Rpb24gdG8gc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgc3RpY2t5IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVFbGVtZW50KG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNsYXNzL3RyYW5zZm9ybSBhbmltYXRpb25zLCBhbmQgdXBkYXRlIHRoZSBnbG9iYWwgc2Nyb2xsIHBvc2l0aW9ubmluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IGlzRmlyc3RDYWxsIERldGVybWluZXMgaWYgdGhpcyBpcyB0aGUgZmlyc3Qgb2NjdXJlbmNlIG9mIG1ldGhvZCBiZWluZyBjYWxsZWRcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9ICBzdGF0dXMgICAgICBPcHRpb25hbCBzdGF0dXMgb2JqZWN0IHJlY2VpdmVkIHdoZW4gbWV0aG9kIGlzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGVkIGJ5IHNtb290aC1zY3JvbGxiYXIgaW5zdGFuY2UgbGlzdGVuZXIuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICByZW5kZXIoaXNGaXJzdENhbGwsIGUpIHtcbiAgICAgICAgdGhpcy5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PnRoaXMucmVuZGVyKCkpO1xuXG4gICAgICAgIGlmKHRoaXMuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB0aGlzLmxlcnAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSx0aGlzLmluc3RhbmNlLmRlbHRhLnksIHRoaXMuaW5lcnRpYSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gdGhpcy5sZXJwKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnksdGhpcy5pbnN0YW5jZS5kZWx0YS55LCB0aGlzLmluZXJ0aWEgKiAwLjUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY3JvbGxiYXJUb3AgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55O1xuXG4gICAgICAgIC8vIG5lZWQgdG8gbW92ZSB0aGUgY29udGFpbmVyXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5jc3Moe1xuICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKDAsICR7LXRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnl9cHgsIDApYCxcbiAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKDAsICR7LXRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnl9cHgsIDApYCxcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nOiBgdHJhbnNsYXRlM2QoMCwgJHstdGhpcy5pbnN0YW5jZS5zY3JvbGwueX1weCwgMClgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKHRoaXMuZ2V0V2F5KXtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC55ID4gdGhpcy5zY3JvbGwueSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbC5kaXJlY3Rpb24gIT09ICdkb3duJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC55IDwgdGhpcy5zY3JvbGwueSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbC5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ3VwJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmdldFNwZWVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGwueSAhPT0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnNwZWVkID0gdGhpcy5zY3JvbGxiYXIubW92ZW1lbnQueTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC55ID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC5zcGVlZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zY3JvbGwueSAhPT0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwueSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKGlzRmlyc3RDYWxsKTtcbiAgICAgICAgdGhpcy5hbmltYXRlRWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICBsZXJwIChzdGFydCwgZW5kLCBhbXQpe1xuICAgICAgICByZXR1cm4gKDEtYW10KSpzdGFydCthbXQqZW5kXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgZGVzaXJlZCB0YXJnZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNjcm9sbFRvKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgJHRhcmdldEVsZW0gPSBvcHRpb25zLnRhcmdldEVsZW07XG4gICAgICAgIGNvbnN0ICRzb3VyY2VFbGVtID0gb3B0aW9ucy5zb3VyY2VFbGVtO1xuICAgICAgICBjb25zdCBvZmZzZXRFbGVtID0gb3B0aW9ucy5vZmZzZXRFbGVtO1xuICAgICAgICBsZXQgdGFyZ2V0T2Zmc2V0ID0gaXNOdW1lcmljKG9wdGlvbnMudGFyZ2V0T2Zmc2V0KSA/IHBhcnNlSW50KG9wdGlvbnMudGFyZ2V0T2Zmc2V0KSA6IDA7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gaXNOdW1lcmljKG9wdGlvbnMuZGVsYXkpID8gcGFyc2VJbnQob3B0aW9ucy5kZWxheSkgOiAwO1xuICAgICAgICBjb25zdCBzcGVlZCA9IGlzTnVtZXJpYyhvcHRpb25zLnNwZWVkKSA/IHBhcnNlSW50KG9wdGlvbnMuc3BlZWQpIDogOTAwO1xuICAgICAgICBjb25zdCB0b1RvcCA9IG9wdGlvbnMudG9Ub3A7XG4gICAgICAgIGNvbnN0IHRvQm90dG9tID0gb3B0aW9ucy50b0JvdHRvbTtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkdGFyZ2V0RWxlbSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mICRzb3VyY2VFbGVtID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGFyZ2V0T2Zmc2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgbXVzdCBzcGVjaWZ5IGF0IGxlYXN0IG9uZSBwYXJhbWV0ZXIuJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgJHRhcmdldEVsZW0gIT09ICd1bmRlZmluZWQnICYmICR0YXJnZXRFbGVtIGluc3RhbmNlb2YgalF1ZXJ5ICYmICR0YXJnZXRFbGVtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9ICR0YXJnZXRFbGVtLm9mZnNldCgpLnRvcCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0YXJnZXRPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mICRzb3VyY2VFbGVtICE9PSAndW5kZWZpbmVkJyAmJiAkc291cmNlRWxlbSBpbnN0YW5jZW9mIGpRdWVyeSAmJiAkc291cmNlRWxlbS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0RGF0YSA9ICcnO1xuXG4gICAgICAgICAgICBpZiAoJHNvdXJjZUVsZW0uYXR0cignZGF0YS10YXJnZXQnKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldERhdGEgPSAkc291cmNlRWxlbS5hdHRyKCdkYXRhLXRhcmdldCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXREYXRhID0gJHNvdXJjZUVsZW0uYXR0cignaHJlZicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAkKHRhcmdldERhdGEpLm9mZnNldCgpLnRvcCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0YXJnZXRPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIG9mZnNldEVsZW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAkKG9mZnNldEVsZW0pLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0YXJnZXRPZmZzZXQgLSBvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9Ub3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAodG9Cb3R0b20gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9IHRoaXMuaW5zdGFuY2UubGltaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IHRhcmdldE9mZnNldDtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc2Nyb2xsIGJhciBsaW1pdFxuICAgICAqL1xuICAgIHNldFNjcm9sbExpbWl0KCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmxpbWl0ID0gdGhpcy4kY29udGFpbmVyWzBdLm9mZnNldEhlaWdodCAtIHRoaXMud2luZG93SGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IENTUyB0cmFuc2Zvcm0gcHJvcGVydGllcyBvbiBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgJGVsZW1lbnQgVGFyZ2V0dGVkIGpRdWVyeSBlbGVtZW50XG4gICAgICogQHBhcmFtICB7aW50fSAgICAgeCAgICAgICAgVHJhbnNsYXRlIHZhbHVlXG4gICAgICogQHBhcmFtICB7aW50fSAgICAgeSAgICAgICAgVHJhbnNsYXRlIHZhbHVlXG4gICAgICogQHBhcmFtICB7aW50fSAgICAgeiAgICAgICAgVHJhbnNsYXRlIHZhbHVlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB0cmFuc2Zvcm1FbGVtZW50KCRlbGVtZW50LCB4LCB5LCB6LCBkZWxheSkge1xuICAgICAgICAvLyBEZWZhdWx0c1xuICAgICAgICB4ID0geCB8fCAwO1xuICAgICAgICB5ID0geSB8fCAwO1xuICAgICAgICB6ID0geiB8fCAwO1xuXG4gICAgICAgIGlmKCFkZWxheSkge1xuICAgICAgICAgICAgLy8gVHJhbnNsYXRlIGFuZCBzdG9yZSB0aGUgcG9zaXRpb25uaW5nIGFzIGBkYXRhYFxuICAgICAgICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weClgLFxuICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAke3p9cHgpYCxcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAke3p9cHgpYFxuICAgICAgICAgICAgfSkuZGF0YSgndHJhbnNmb3JtJyx7XG4gICAgICAgICAgICAgICAgeCA6IHgsXG4gICAgICAgICAgICAgICAgeSA6IHksXG4gICAgICAgICAgICAgICAgeiA6IHpcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLmdldFRyYW5zbGF0ZSgkZWxlbWVudFswXSk7XG4gICAgICAgICAgICBsZXQgbGVycFkgPSB0aGlzLmxlcnAoc3RhcnQueSwgeSwgZGVsYXkpO1xuICAgICAgICAgICAgbGV0IGxlcnBYID0gdGhpcy5sZXJwKHN0YXJ0LngsIHgsIGRlbGF5KTtcblxuICAgICAgICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBgdHJhbnNsYXRlM2QoJHtsZXJwWH1weCwgJHtsZXJwWX1weCwgJHt6fXB4KWAsXG4gICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBgdHJhbnNsYXRlM2QoJHtsZXJwWH1weCwgJHtsZXJwWX1weCwgJHt6fXB4KWAsXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgke2xlcnBYfXB4LCAke2xlcnBZfXB4LCAke3p9cHgpYFxuICAgICAgICAgICAgfSkuZGF0YSgndHJhbnNmb3JtJyx7XG4gICAgICAgICAgICAgICAgeCA6IGxlcnBYLFxuICAgICAgICAgICAgICAgIHkgOiBsZXJwWSxcbiAgICAgICAgICAgICAgICB6IDogelxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdldFRyYW5zbGF0ZShlbCl7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHt9XG4gICAgICAgIGlmKCF3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSB8fCBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gfHwgc3R5bGUubW96VHJhbnNmb3JtO1xuXG4gICAgICAgIGxldCBtYXQgPSB0cmFuc2Zvcm0ubWF0Y2goL15tYXRyaXgzZFxcKCguKylcXCkkLyk7XG4gICAgICAgIGlmKG1hdCkgcmV0dXJuIHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzEzXSk7XG4gICAgICAgIG1hdCA9IHRyYW5zZm9ybS5tYXRjaCgvXm1hdHJpeFxcKCguKylcXCkkLyk7XG4gICAgICAgIHRyYW5zbGF0ZS54ID0gbWF0ID8gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbNF0pIDogMDtcbiAgICAgICAgdHJhbnNsYXRlLnkgPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVs1XSkgOiAwO1xuXG4gICAgICAgIHJldHVybiB0cmFuc2xhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9vcCB0aHJvdWdoIGFsbCBwYXJhbGxheC1hYmxlIGVsZW1lbnRzIGFuZCBhcHBseSB0cmFuc2Zvcm0gbWV0aG9kKHMpLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gaXNGaXJzdENhbGwgRGV0ZXJtaW5lcyBpZiB0aGlzIGlzIHRoZSBmaXJzdCBvY2N1cmVuY2Ugb2YgbWV0aG9kIGJlaW5nIGNhbGxlZFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdHJhbnNmb3JtRWxlbWVudHMoaXNGaXJzdENhbGwpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyYWxsYXhFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxCb3R0b20gPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICsgdGhpcy53aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxNaWRkbGUgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICsgdGhpcy53aW5kb3dNaWRkbGU7XG5cbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IHRoaXMucGFyYWxsYXhFbGVtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVJbmRleGVzID0gW107XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VyRWwgPSB0aGlzLnBhcmFsbGF4RWxlbWVudHNbaV07XG5cbiAgICAgICAgICAgICAgICBsZXQgdHJhbnNmb3JtRGlzdGFuY2UgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIERlZmluZSBpZiB0aGUgZWxlbWVudCBpcyBpbiB2aWV3XG4gICAgICAgICAgICAgICAgbGV0IGluVmlldyA9ICgoc2Nyb2xsQm90dG9tICsgdGhpcy53aW5kb3dIZWlnaHQpID49IGN1ckVsLm9mZnNldCAmJiB0aGlzLmluc3RhbmNlLnNjcm9sbC55IDw9IGN1ckVsLmxpbWl0KTtcblxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRWxlbWVudChjdXJFbCwgaSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGaXJzdENhbGwgJiYgIWluVmlldyAmJiBjdXJFbC5zcGVlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBEaWZmZXJlbnQgY2FsY3VsYXRpb25zIGlmIGl0IGlzIHRoZSBmaXJzdCBjYWxsIGFuZCB0aGUgaXRlbSBpcyBub3QgaW4gdGhlIHZpZXdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckVsLnBvc2l0aW9uICE9PSAndG9wJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAoY3VyRWwub2Zmc2V0IC0gdGhpcy53aW5kb3dNaWRkbGUgLSBjdXJFbC5taWRkbGUpICogLWN1ckVsLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgZWxlbWVudCBpcyBpbiB2aWV3XG4gICAgICAgICAgICAgICAgaWYgKGluVmlldyAmJiBjdXJFbC5zcGVlZCkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGN1ckVsLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSAqIC1jdXJFbC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKHRoaXMuaW5zdGFuY2UubGltaXQgLSBzY3JvbGxCb3R0b20gKyB0aGlzLndpbmRvd0hlaWdodCkgKiBjdXJFbC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKHNjcm9sbE1pZGRsZSAtIGN1ckVsLm1pZGRsZSkgKiAtY3VyRWwuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRyYW5zZm9ybSBob3Jpem9udGFsIE9SIHZlcnRpY2FsLiBEZWZhdWx0cyB0byB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAgIGlmIChpc051bWVyaWModHJhbnNmb3JtRGlzdGFuY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIChjdXJFbC5ob3Jpem9udGFsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnQoY3VyRWwuJGVsZW1lbnQsIHRyYW5zZm9ybURpc3RhbmNlLDAsMCwgY3VyRWwuZGVsYXkpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudChjdXJFbC4kZWxlbWVudCwgMCwgdHJhbnNmb3JtRGlzdGFuY2UsMCwgY3VyRWwuZGVsYXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBlbGVtZW50cyBhbmQgcmVjYWxjdWxhdGUgYWxsIHRoZSBwb3NpdGlvbnMgb24gdGhlIHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgdXBkYXRlKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgLy8gQHRvZG9cbiAgICAgICAgLy8gdGhpcy5zY3JvbGxiYXIudXBkYXRlKCk7XG4gICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTGltaXQoKTtcblxuICAgICAgICAvLyBAdG9kb1xuICAgICAgICAvLyB0aGlzLnNldFdoZWVsRGlyZWN0aW9uKHRoaXMuaXNSZXZlcnNlZCk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cyh0cnVlKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBzbW9vdGgtc2Nyb2xsYmFyIHNjcm9sbGluZyBkaXJlY3Rpb24gZm9yIHdoZWVsIGV2ZW50XG4gICAgICogQHBhcmFtIHtCb29sZWFufSBpc1JldmVyc2VkXG4gICAgICovXG4gICAgc2V0V2hlZWxEaXJlY3Rpb24oaXNSZXZlcnNlZCl7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLnJldmVyc2VXaGVlbChpc1JldmVyc2VkKTtcbiAgICB9XG5cbiAgICBwcmVsb2FkSW1hZ2VzKCkge1xuICAgICAgICBjb25zdCBpbWFnZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpKVxuXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGltYWdlcy5zcGxpY2UoaW1hZ2VzLmluZGV4T2YoaW1hZ2UpLCAxKVxuICAgICAgICAgICAgICAgIGltYWdlcy5sZW5ndGggPT09IDAgJiYgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGltZy5zcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICAgICAgJGh0bWwucmVtb3ZlQ2xhc3MoJ2hhcy1zbW9vdGgtc2Nyb2xsJyk7XG4gICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcblxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZik7XG5cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICB2YXIgdGltZW91dDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG59XG4iLCJjb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcblxuY29uc3QgJGRvY3VtZW50ICAgID0gJChkb2N1bWVudCk7XG5jb25zdCAkd2luZG93ICAgICAgPSAkKHdpbmRvdyk7XG5jb25zdCAkaHRtbCAgICAgICAgPSAkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkucmVtb3ZlQ2xhc3MoJ2hhcy1uby1qcycpLmFkZENsYXNzKCdoYXMtanMnKTtcbmNvbnN0ICRib2R5ICAgICAgICA9ICQoZG9jdW1lbnQuYm9keSk7XG5cbmNvbnN0IGlzRGVidWcgICAgICA9ICEhJGh0bWwuZGF0YSgnZGVidWcnKTtcblxuZXhwb3J0IHsgREFUQV9BUElfS0VZLCAkZG9jdW1lbnQsICR3aW5kb3csICRodG1sLCAkYm9keSwgaXNEZWJ1ZyB9O1xuIiwidmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBhcnJheUxpa2VQYXR0ZXJuID0gL15cXFtvYmplY3QgKD86QXJyYXl8RmlsZUxpc3QpXFxdJC87XG5cbi8vIHRoYW5rcywgaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vaW5zdGFuY2VvZi1jb25zaWRlcmVkLWhhcm1mdWwtb3ItaG93LXRvLXdyaXRlLWEtcm9idXN0LWlzYXJyYXkvXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSAoIHRoaW5nICkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKCB0aGluZyApID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheUxpa2UgKCBvYmogKSB7XG4gICAgcmV0dXJuIGFycmF5TGlrZVBhdHRlcm4udGVzdCggdG9TdHJpbmcuY2FsbCggb2JqICkgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXF1YWwgKCBhLCBiICkge1xuICAgIGlmICggYSA9PT0gbnVsbCAmJiBiID09PSBudWxsICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIHR5cGVvZiBhID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgYiA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYSA9PT0gYjtcbn1cblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xODA4Mi92YWxpZGF0ZS1udW1iZXJzLWluLWphdmFzY3JpcHQtaXNudW1lcmljXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1lcmljICggdGhpbmcgKSB7XG4gICAgcmV0dXJuICFpc05hTiggcGFyc2VGbG9hdCggdGhpbmcgKSApICYmIGlzRmluaXRlKCB0aGluZyApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QgKCB0aGluZyApIHtcbiAgICByZXR1cm4gKCB0aGluZyAmJiB0b1N0cmluZy5jYWxsKCB0aGluZyApID09PSAnW29iamVjdCBPYmplY3RdJyApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbiggdGhpbmcgKSB7XG4gICAgdmFyIGdldFR5cGUgPSB7fTtcbiAgICByZXR1cm4gdGhpbmcgJiYgZ2V0VHlwZS50b1N0cmluZy5jYWxsKHRoaW5nKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYoIW9iamVjdCkgcmV0dXJuIGNvbnNvbGUud2FybignYmluZEFsbCByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQuJyk7XG5cbiAgICB2YXIgZnVuY3Rpb25zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIGlmIChmdW5jdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgZm9yICh2YXIgbWV0aG9kIGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIG1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2Ygb2JqZWN0W21ldGhvZF0gPT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKG9iamVjdFttZXRob2RdKSA9PSBcIltvYmplY3QgRnVuY3Rpb25dXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25zLnB1c2gobWV0aG9kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZnVuY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmID0gZnVuY3Rpb25zW2ldO1xuICAgICAgICBvYmplY3RbZl0gPSBiaW5kKG9iamVjdFtmXSwgb2JqZWN0KTtcbiAgICB9XG59O1xuXG4vKlxuICAgIEZhc3RlciBiaW5kIHdpdGhvdXQgc3BlY2lmaWMtY2FzZSBjaGVja2luZy4gKHNlZSBodHRwczovL2NvZGVyd2FsbC5jb20vcC9vaTNqM3cpLlxuICAgIGJpbmRBbGwgaXMgb25seSBuZWVkZWQgZm9yIGV2ZW50cyBiaW5kaW5nIHNvIG5vIG5lZWQgdG8gbWFrZSBzbG93IGZpeGVzIGZvciBjb25zdHJ1Y3RvclxuICAgIG9yIHBhcnRpYWwgYXBwbGljYXRpb24uXG4qL1xuZnVuY3Rpb24gYmluZChmdW5jLCBjb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICB9O1xufSIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS45LjJcbihmdW5jdGlvbigpIHtcbiAgdmFyIHJvb3Q7XG5cbiAgcm9vdCA9IHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiICYmIGV4cG9ydHMgIT09IG51bGwgPyBleHBvcnRzIDogdGhpcztcblxuICByb290LkxldGhhcmd5ID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIExldGhhcmd5KHN0YWJpbGl0eSwgc2Vuc2l0aXZpdHksIHRvbGVyYW5jZSwgZGVsYXkpIHtcbiAgICAgIHRoaXMuc3RhYmlsaXR5ID0gc3RhYmlsaXR5ICE9IG51bGwgPyBNYXRoLmFicyhzdGFiaWxpdHkpIDogODtcbiAgICAgIHRoaXMuc2Vuc2l0aXZpdHkgPSBzZW5zaXRpdml0eSAhPSBudWxsID8gMSArIE1hdGguYWJzKHNlbnNpdGl2aXR5KSA6IDEwMDtcbiAgICAgIHRoaXMudG9sZXJhbmNlID0gdG9sZXJhbmNlICE9IG51bGwgPyAxICsgTWF0aC5hYnModG9sZXJhbmNlKSA6IDEuMTtcbiAgICAgIHRoaXMuZGVsYXkgPSBkZWxheSAhPSBudWxsID8gZGVsYXkgOiAxNTA7XG4gICAgICB0aGlzLmxhc3RVcERlbHRhcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgbGFzdERlbHRhO1xuICAgICAgZSA9IGUub3JpZ2luYWxFdmVudCB8fCBlO1xuICAgICAgaWYgKGUud2hlZWxEZWx0YSAhPSBudWxsKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUud2hlZWxEZWx0YTtcbiAgICAgIH0gZWxzZSBpZiAoZS5kZWx0YVkgIT0gbnVsbCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLmRlbHRhWSAqIC00MDtcbiAgICAgIH0gZWxzZSBpZiAoKGUuZGV0YWlsICE9IG51bGwpIHx8IGUuZGV0YWlsID09PSAwKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUuZGV0YWlsICogLTQwO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAucHVzaChEYXRlLm5vdygpKTtcbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wLnNoaWZ0KCk7XG4gICAgICBpZiAobGFzdERlbHRhID4gMCkge1xuICAgICAgICB0aGlzLmxhc3RVcERlbHRhcy5wdXNoKGxhc3REZWx0YSk7XG4gICAgICAgIHRoaXMubGFzdFVwRGVsdGFzLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5lcnRpYSgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGFzdERvd25EZWx0YXMucHVzaChsYXN0RGVsdGEpO1xuICAgICAgICB0aGlzLmxhc3REb3duRGVsdGFzLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5lcnRpYSgtMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5pc0luZXJ0aWEgPSBmdW5jdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBsYXN0RGVsdGFzLCBsYXN0RGVsdGFzTmV3LCBsYXN0RGVsdGFzT2xkLCBuZXdBdmVyYWdlLCBuZXdTdW0sIG9sZEF2ZXJhZ2UsIG9sZFN1bTtcbiAgICAgIGxhc3REZWx0YXMgPSBkaXJlY3Rpb24gPT09IC0xID8gdGhpcy5sYXN0RG93bkRlbHRhcyA6IHRoaXMubGFzdFVwRGVsdGFzO1xuICAgICAgaWYgKGxhc3REZWx0YXNbMF0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRlbHRhc1RpbWVzdGFtcFsodGhpcy5zdGFiaWxpdHkgKiAyKSAtIDJdICsgdGhpcy5kZWxheSA+IERhdGUubm93KCkgJiYgbGFzdERlbHRhc1swXSA9PT0gbGFzdERlbHRhc1sodGhpcy5zdGFiaWxpdHkgKiAyKSAtIDFdKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxhc3REZWx0YXNPbGQgPSBsYXN0RGVsdGFzLnNsaWNlKDAsIHRoaXMuc3RhYmlsaXR5KTtcbiAgICAgIGxhc3REZWx0YXNOZXcgPSBsYXN0RGVsdGFzLnNsaWNlKHRoaXMuc3RhYmlsaXR5LCB0aGlzLnN0YWJpbGl0eSAqIDIpO1xuICAgICAgb2xkU3VtID0gbGFzdERlbHRhc09sZC5yZWR1Y2UoZnVuY3Rpb24odCwgcykge1xuICAgICAgICByZXR1cm4gdCArIHM7XG4gICAgICB9KTtcbiAgICAgIG5ld1N1bSA9IGxhc3REZWx0YXNOZXcucmVkdWNlKGZ1bmN0aW9uKHQsIHMpIHtcbiAgICAgICAgcmV0dXJuIHQgKyBzO1xuICAgICAgfSk7XG4gICAgICBvbGRBdmVyYWdlID0gb2xkU3VtIC8gbGFzdERlbHRhc09sZC5sZW5ndGg7XG4gICAgICBuZXdBdmVyYWdlID0gbmV3U3VtIC8gbGFzdERlbHRhc05ldy5sZW5ndGg7XG4gICAgICBpZiAoTWF0aC5hYnMob2xkQXZlcmFnZSkgPCBNYXRoLmFicyhuZXdBdmVyYWdlICogdGhpcy50b2xlcmFuY2UpICYmICh0aGlzLnNlbnNpdGl2aXR5IDwgTWF0aC5hYnMobmV3QXZlcmFnZSkpKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5zaG93TGFzdFVwRGVsdGFzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0VXBEZWx0YXM7XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5zaG93TGFzdERvd25EZWx0YXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhc3REb3duRGVsdGFzO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGV0aGFyZ3k7XG5cbiAgfSkoKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJmdW5jdGlvbiBFICgpIHtcbiAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59XG5cbkUucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzb3VyY2UpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCd0aW55LWVtaXR0ZXInKTtcbnZhciBMZXRoYXJneSA9IHJlcXVpcmUoJ2xldGhhcmd5JykuTGV0aGFyZ3k7XG52YXIgc3VwcG9ydCA9IHJlcXVpcmUoJy4vc3VwcG9ydCcpO1xudmFyIGNsb25lID0gcmVxdWlyZSgnLi9jbG9uZScpO1xudmFyIGJpbmRBbGwgPSByZXF1aXJlKCdiaW5kYWxsLXN0YW5kYWxvbmUnKTtcbnZhciBFVlRfSUQgPSAndmlydHVhbHNjcm9sbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbFNjcm9sbDtcblxudmFyIGtleUNvZGVzID0ge1xuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG4gICAgU1BBQ0U6IDMyXG59O1xuXG5mdW5jdGlvbiBWaXJ0dWFsU2Nyb2xsKG9wdGlvbnMpIHtcbiAgICBiaW5kQWxsKHRoaXMsICdfb25XaGVlbCcsICdfb25Nb3VzZVdoZWVsJywgJ19vblRvdWNoU3RhcnQnLCAnX29uVG91Y2hNb3ZlJywgJ19vbktleURvd24nKTtcblxuICAgIHRoaXMuZWwgPSB3aW5kb3c7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbCkge1xuICAgICAgICB0aGlzLmVsID0gb3B0aW9ucy5lbDtcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMuZWw7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG9iamVjdEFzc2lnbih7XG4gICAgICAgIG1vdXNlTXVsdGlwbGllcjogMSxcbiAgICAgICAgdG91Y2hNdWx0aXBsaWVyOiAyLFxuICAgICAgICBmaXJlZm94TXVsdGlwbGllcjogMTUsXG4gICAgICAgIGtleVN0ZXA6IDEyMCxcbiAgICAgICAgcHJldmVudFRvdWNoOiBmYWxzZSxcbiAgICAgICAgdW5wcmV2ZW50VG91Y2hDbGFzczogJ3ZzLXRvdWNobW92ZS1hbGxvd2VkJyxcbiAgICAgICAgbGltaXRJbmVydGlhOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEluZXJ0aWEpIHRoaXMuX2xldGhhcmd5ID0gbmV3IExldGhhcmd5KCk7XG5cbiAgICB0aGlzLl9lbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcbiAgICB0aGlzLl9ldmVudCA9IHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgeDogMCxcbiAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICBkZWx0YVk6IDBcbiAgICB9O1xuICAgIHRoaXMudG91Y2hTdGFydFggPSBudWxsO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSBudWxsO1xuICAgIHRoaXMuYm9keVRvdWNoQWN0aW9uID0gbnVsbDtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMucGFzc2l2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJPcHRpb25zID0ge3Bhc3NpdmU6IHRoaXMub3B0aW9ucy5wYXNzaXZlfTtcbiAgICB9XG59XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9ub3RpZnkgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuICAgIGV2dC54ICs9IGV2dC5kZWx0YVg7XG4gICAgZXZ0LnkgKz0gZXZ0LmRlbHRhWTtcblxuICAgdGhpcy5fZW1pdHRlci5lbWl0KEVWVF9JRCwge1xuICAgICAgICB4OiBldnQueCxcbiAgICAgICAgeTogZXZ0LnksXG4gICAgICAgIGRlbHRhWDogZXZ0LmRlbHRhWCxcbiAgICAgICAgZGVsdGFZOiBldnQuZGVsdGFZLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBlXG4gICB9KTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbldoZWVsID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICh0aGlzLl9sZXRoYXJneSAmJiB0aGlzLl9sZXRoYXJneS5jaGVjayhlKSA9PT0gZmFsc2UpIHJldHVybjtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICAvLyBJbiBDaHJvbWUgYW5kIGluIEZpcmVmb3ggKGF0IGxlYXN0IHRoZSBuZXcgb25lKVxuICAgIGV2dC5kZWx0YVggPSBlLndoZWVsRGVsdGFYIHx8IGUuZGVsdGFYICogLTE7XG4gICAgZXZ0LmRlbHRhWSA9IGUud2hlZWxEZWx0YVkgfHwgZS5kZWx0YVkgKiAtMTtcblxuICAgIC8vIGZvciBvdXIgcHVycG9zZSBkZWx0YW1vZGUgPSAxIG1lYW5zIHVzZXIgaXMgb24gYSB3aGVlbCBtb3VzZSwgbm90IHRvdWNoIHBhZFxuICAgIC8vIHJlYWwgbWVhbmluZzogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1doZWVsRXZlbnQjRGVsdGFfbW9kZXNcbiAgICBpZihzdXBwb3J0LmlzRmlyZWZveCAmJiBlLmRlbHRhTW9kZSA9PSAxKSB7XG4gICAgICAgIGV2dC5kZWx0YVggKj0gb3B0aW9ucy5maXJlZm94TXVsdGlwbGllcjtcbiAgICAgICAgZXZ0LmRlbHRhWSAqPSBvcHRpb25zLmZpcmVmb3hNdWx0aXBsaWVyO1xuICAgIH1cblxuICAgIGV2dC5kZWx0YVggKj0gb3B0aW9ucy5tb3VzZU11bHRpcGxpZXI7XG4gICAgZXZ0LmRlbHRhWSAqPSBvcHRpb25zLm1vdXNlTXVsdGlwbGllcjtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbk1vdXNlV2hlZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEluZXJ0aWEgJiYgdGhpcy5fbGV0aGFyZ3kuY2hlY2soZSkgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICAvLyBJbiBTYWZhcmksIElFIGFuZCBpbiBDaHJvbWUgaWYgJ3doZWVsJyBpc24ndCBkZWZpbmVkXG4gICAgZXZ0LmRlbHRhWCA9IChlLndoZWVsRGVsdGFYKSA/IGUud2hlZWxEZWx0YVggOiAwO1xuICAgIGV2dC5kZWx0YVkgPSAoZS53aGVlbERlbHRhWSkgPyBlLndoZWVsRGVsdGFZIDogZS53aGVlbERlbHRhO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uVG91Y2hTdGFydCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdCA9IChlLnRhcmdldFRvdWNoZXMpID8gZS50YXJnZXRUb3VjaGVzWzBdIDogZTtcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gdC5wYWdlWDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gdC5wYWdlWTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZihvcHRpb25zLnByZXZlbnRUb3VjaFxuICAgICAgICAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKG9wdGlvbnMudW5wcmV2ZW50VG91Y2hDbGFzcykpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgIHZhciB0ID0gKGUudGFyZ2V0VG91Y2hlcykgPyBlLnRhcmdldFRvdWNoZXNbMF0gOiBlO1xuXG4gICAgZXZ0LmRlbHRhWCA9ICh0LnBhZ2VYIC0gdGhpcy50b3VjaFN0YXJ0WCkgKiBvcHRpb25zLnRvdWNoTXVsdGlwbGllcjtcbiAgICBldnQuZGVsdGFZID0gKHQucGFnZVkgLSB0aGlzLnRvdWNoU3RhcnRZKSAqIG9wdGlvbnMudG91Y2hNdWx0aXBsaWVyO1xuXG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IHQucGFnZVg7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IHQucGFnZVk7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25LZXlEb3duID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQuZGVsdGFYID0gZXZ0LmRlbHRhWSA9IDA7XG4gICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDQwXG5cbiAgICBzd2l0Y2goZS5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuTEVGVDpcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5VUDpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSB0aGlzLm9wdGlvbnMua2V5U3RlcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Uga2V5Q29kZXMuUklHSFQ6XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuRE9XTjpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSAtIHRoaXMub3B0aW9ucy5rZXlTdGVwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuU1BBQ0UgJiYgZS5zaGlmdEtleTpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5TUEFDRTpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSAtIHdpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9iaW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc3VwcG9ydC5oYXNXaGVlbEV2ZW50KSB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5fb25XaGVlbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgIGlmKHN1cHBvcnQuaGFzTW91c2VXaGVlbEV2ZW50KSB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLl9vbk1vdXNlV2hlZWwsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcblxuICAgIGlmKHN1cHBvcnQuaGFzVG91Y2gpIHtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc1BvaW50ZXIgJiYgc3VwcG9ydC5oYXNUb3VjaFdpbikge1xuICAgICAgICB0aGlzLmJvZHlUb3VjaEFjdGlvbiA9IGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlckRvd24nLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRydWUpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlck1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNLZXlEb3duKSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl91bmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzdXBwb3J0Lmhhc1doZWVsRXZlbnQpIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9vbldoZWVsKTtcbiAgICBpZihzdXBwb3J0Lmhhc01vdXNlV2hlZWxFdmVudCkgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5fb25Nb3VzZVdoZWVsKTtcblxuICAgIGlmKHN1cHBvcnQuaGFzVG91Y2gpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNQb2ludGVyICYmIHN1cHBvcnQuaGFzVG91Y2hXaW4pIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uID0gdGhpcy5ib2R5VG91Y2hBY3Rpb247XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyRG93bicsIHRoaXMuX29uVG91Y2hTdGFydCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyTW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc0tleURvd24pIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihjYiwgY3R4KSB7XG4gIHRoaXMuX2VtaXR0ZXIub24oRVZUX0lELCBjYiwgY3R4KTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZW1pdHRlci5lO1xuICBpZiAoZXZlbnRzICYmIGV2ZW50c1tFVlRfSURdICYmIGV2ZW50c1tFVlRfSURdLmxlbmd0aCA9PT0gMSkgdGhpcy5fYmluZCgpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oY2IsIGN0eCkge1xuICB0aGlzLl9lbWl0dGVyLm9mZihFVlRfSUQsIGNiLCBjdHgpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9lbWl0dGVyLmU7XG4gIGlmICghZXZlbnRzW0VWVF9JRF0gfHwgZXZlbnRzW0VWVF9JRF0ubGVuZ3RoIDw9IDApIHRoaXMuX3VuYmluZCgpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LnggPSAwO1xuICAgIGV2dC55ID0gMDtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9mZigpO1xuICAgIHRoaXMuX3VuYmluZCgpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gZ2V0U3VwcG9ydCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoYXNXaGVlbEV2ZW50OiAnb253aGVlbCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc01vdXNlV2hlZWxFdmVudDogJ29ubW91c2V3aGVlbCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc1RvdWNoOiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudCxcbiAgICAgICAgaGFzVG91Y2hXaW46IG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzICYmIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMSxcbiAgICAgICAgaGFzUG9pbnRlcjogISF3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQsXG4gICAgICAgIGhhc0tleURvd246ICdvbmtleWRvd24nIGluIGRvY3VtZW50LFxuICAgICAgICBpc0ZpcmVmb3g6IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID4gLTFcbiAgICB9O1xufSkoKTtcbiJdfQ==
