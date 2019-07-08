(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _main = _interopRequireDefault(require("./scroll/vendors/main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function () {
  var scroll = new _main["default"]({
    el: document.querySelector('#js-scroll'),
    smooth: true,
    smoothMobile: false,
    mobileContainer: $(document),
    inertia: 1,
    scrollBarClassName: 'o-scrollbar',
    isScrollingClassName: 'is-scrolling',
    isDraggingClassName: 'is-dragging',
    onScroll: function onScroll(e) {// console.log(e.scroll.y);
    }
  });
})();

},{"./scroll/vendors/main":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Native2 = _interopRequireDefault(require("./vendors/Native"));

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
var _default =
/*#__PURE__*/
function (_Native) {
  _inherits(_default, _Native);

  function _default(options) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, options));
  }

  return _default;
}(_Native2["default"]);

exports["default"] = _default;

},{"./vendors/Native":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Smooth2 = _interopRequireDefault(require("./vendors/Smooth"));

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
// import virtualScroll from 'virtual-scroll';
// import Core from './Core';
// import { lerp } from '../utils/maths'
// import { getTranslate } from '../utils/transform'
// import { getParents, queryClosestParent } from '../utils/html';
// const html = document.documentElement;
var _default =
/*#__PURE__*/
function (_Smooth) {
  _inherits(_default, _Smooth);

  function _default(options) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, options));
  }

  return _default;
}(_Smooth2["default"]);

exports["default"] = _default;

},{"./vendors/Smooth":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _options = require("./options");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  function _default() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    Object.assign(this, _options.defaults, options);
    this.namespace = 'locomotive';
    this.html = document.documentElement;
    this.windowHeight = window.innerHeight;
    this.windowMiddle = this.windowHeight / 2;
    this.els = [];
    this.hasScrollTicking = false;
    this.checkScroll = this.checkScroll.bind(this);
    this.checkResize = this.checkResize.bind(this);
    this.instance = {
      scroll: {
        x: 0,
        y: 0,
        direction: null,
        speed: 0
      }
    };
    window.addEventListener('resize', this.checkResize, false);
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      this.initEvents();
    } // checkScroll() {}
    // checkResize() {}

  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this = this;

      this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
      this.setScrollTo = this.setScrollTo.bind(this);
      this.scrollToEls.forEach(function (el) {
        el.addEventListener('click', _this.setScrollTo, false);
      });
    }
  }, {
    key: "setScrollTo",
    value: function setScrollTo(event) {
      event.preventDefault();
      this.scrollTo(event.currentTarget.getAttribute("data-".concat(this.name, "-href")) || event.currentTarget.getAttribute('href'), event.currentTarget.getAttribute("data-".concat(this.name, "-offset")));
    } // addElements() {}

  }, {
    key: "detectElements",
    value: function detectElements() {
      var _this2 = this;

      var scrollTop = this.instance.scroll.y;
      var scrollBottom = scrollTop + this.windowHeight;
      this.els.forEach(function (el, i) {
        if (!el.inView) {
          if (scrollBottom >= el.top && scrollTop < el.bottom) {
            _this2.setInView(el, i);
          }
        }

        if (el.inView) {
          if (scrollBottom < el.top || scrollTop > el.bottom) {
            _this2.setOutOfView(el, i);
          }
        }
      });
      this.hasScrollTicking = false;
    }
  }, {
    key: "setInView",
    value: function setInView(current, i) {
      this.els[i].inView = true;
      current.el.classList.add(current["class"]);

      if (current.call) {
        this.callValue = current.call.split(',').map(function (item) {
          return item.trim();
        });
        if (this.callValue.length == 1) this.callValue = this.callValue[0];
        var callEvent = new Event(this.namespace + 'call');
        window.dispatchEvent(callEvent);
      }

      if (!current.repeat && current.speed === false && !current.sticky) {
        this.els.splice(i, 1);
      }
    }
  }, {
    key: "setOutOfView",
    value: function setOutOfView(current, i) {
      if (current.repeat || current.speed !== undefined) {
        this.els[i].inView = false;
        current.el.classList.remove(current["class"]);
      }
    }
  }, {
    key: "updateElements",
    value: function updateElements() {
      var _this3 = this;

      this.els.forEach(function (el, i) {
        var top = el.el.getBoundingClientRect().top + _this3.instance.scroll.y;

        var bottom = top + el.el.offsetHeight;
        _this3.els[i].top = top + el.offset;
        _this3.els[i].bottom = bottom;
      });
      this.hasScrollTicking = false;
    }
  }, {
    key: "on",
    value: function on(event, func) {
      var _this4 = this;

      window.addEventListener(this.namespace + event, function () {
        switch (event) {
          case 'call':
            return func(_this4.callValue);

          default:
            return func();
        }
      }, false);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;

      window.removeEventListener('resize', this.checkResize, false);
      this.scrollToEls.forEach(function (el) {
        el.removeEventListener('click', _this5.setScrollTo, false);
      });
    }
  }]);

  return _default;
}();

exports["default"] = _default;

},{"./options":8}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Core2 = _interopRequireDefault(require("./Core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var _default =
/*#__PURE__*/
function (_Core) {
  _inherits(_default, _Core);

  function _default() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, options));
    window.addEventListener('scroll', _this.checkScroll, false);
    return _this;
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      this.instance.scroll.y = window.scrollY;
      this.addElements();
      this.detectElements();

      _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var _this2 = this;

      if (this.els.length) {
        this.instance.scroll.y = window.scrollY;

        if (!this.hasScrollTicking) {
          requestAnimationFrame(function () {
            _this2.detectElements();
          });
          this.hasScrollTicking = true;
        }
      }
    }
  }, {
    key: "checkResize",
    value: function checkResize() {
      var _this3 = this;

      if (this.els.length) {
        this.windowHeight = window.innerHeight;

        if (!this.hasScrollTicking) {
          requestAnimationFrame(function () {
            _this3.updateElements();
          });
          this.hasScrollTicking = true;
        }
      }
    }
  }, {
    key: "addElements",
    value: function addElements() {
      var _this4 = this;

      var els = this.el.querySelectorAll('[data-' + this.name + ']');
      els.forEach(function (el, i) {
        var cl = el.dataset[_this4.name + 'Class'] || _this4["class"];

        var top = el.getBoundingClientRect().top + _this4.instance.scroll.y;

        var bottom = top + el.offsetHeight;
        var offset = parseInt(el.dataset[_this4.name + 'Offset']) || parseInt(_this4.offset);
        var repeat = el.dataset[_this4.name + 'Repeat'];
        var call = el.dataset[_this4.name + 'Call'];

        if (repeat == 'false') {
          repeat = false;
        } else if (repeat != undefined) {
          repeat = true;
        } else {
          repeat = _this4.repeat;
        }

        _this4.els[i] = {
          el: el,
          "class": cl,
          top: top + offset,
          bottom: bottom,
          offset: offset,
          repeat: repeat,
          inView: false,
          call: call
        };
      });
    }
    /**
     * Scroll to a desired target.
     *
     * @param  {object} options
     * @return {void}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(targetOption, offsetOption) {
      var target;
      var offset = offsetOption ? parseInt(offsetOption) : 0;

      if (typeof targetOption === 'string') {
        if (targetOption === 'top') {
          target = this.html;
        } else if (targetOption === 'bottom') {
          offset = document.offsetHeight;
          this.html.scrollIntoView({
            behavior: 'smooth',
            block: "end",
            inline: "nearest"
          });
          return;
        } else {
          target = document.querySelectorAll(targetOption)[0];
        }
      } else if (!targetOption.target) {
        target = targetOption;
      }

      if (target) {
        offset = target.getBoundingClientRect().top + offset;
      }

      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

      window.removeEventListener('scroll', this.checkScroll, false);
    }
  }]);

  return _default;
}(_Core2["default"]);

exports["default"] = _default;

},{"./Core":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _virtualScroll = _interopRequireDefault(require("virtual-scroll"));

var _Core2 = _interopRequireDefault(require("./Core"));

var _maths = require("../../utils/maths");

var _transform = require("../../utils/transform");

var _html = require("../../utils/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var html = document.documentElement;

var _default =
/*#__PURE__*/
function (_Core) {
  _inherits(_default, _Core);

  function _default() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, options));
    _this.inertia = _this.inertia * 0.1;
    _this.isScrolling = false;
    _this.isDraggingScrollbar = false;
    _this.isTicking = false;
    _this.hasScrollTicking = false;
    _this.parallaxElements = [];
    _this.inertiaRatio = 1;
    return _this;
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      html.classList.add(this.smoothClass);
      this.instance = _objectSpread({
        vs: new _virtualScroll["default"]({
          mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
          touchMultiplier: 4,
          firefoxMultiplier: 30
        }),
        delta: {
          x: 0,
          y: 0
        }
      }, this.instance);
      this.instance.vs.on(function (e) {
        if (!_this2.isTicking && !_this2.isDraggingScrollbar) {
          requestAnimationFrame(function () {
            if (!_this2.isScrolling) _this2.startScrolling();

            _this2.updateDelta(e);
          });
          _this2.isTicking = true;
        }

        _this2.isTicking = false;
      });
      this.setScrollLimit();
      this.initScrollBar();
      this.addSections();
      this.addElements();
      this.detectElements();
      this.transformElements(true);

      _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
    }
  }, {
    key: "setScrollLimit",
    value: function setScrollLimit() {
      this.instance.limit = this.el.offsetHeight - this.windowHeight;
    }
  }, {
    key: "startScrolling",
    value: function startScrolling() {
      this.isScrolling = true;
      this.checkScroll();
      html.classList.add(this.scrollingClass);
    }
  }, {
    key: "stopScrolling",
    value: function stopScrolling() {
      this.isScrolling = false;
      this.inertiaRatio = 1;
      this.instance.scroll.y = Math.round(this.instance.scroll.y);
      html.classList.remove(this.scrollingClass);
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var _this3 = this;

      if (this.isScrolling || this.isDraggingScrollbar) {
        if (!this.hasScrollTicking) {
          requestAnimationFrame(function () {
            return _this3.checkScroll();
          });
          this.hasScrollTicking = true;
        }

        var distance = Math.abs(this.instance.delta.y - this.instance.scroll.y);

        if (distance < 0.9 && this.instance.delta.y != 0 || distance < 0.5 && this.instance.delta.y == 0) {
          this.stopScrolling();
        }

        this.updateScroll();

        if (this.sections.length) {
          for (var i = this.sections.length - 1; i >= 0; i--) {
            if (this.sections[i].persistent || this.instance.scroll.y > this.sections[i].offset && this.instance.scroll.y < this.sections[i].limit) {
              this.transform(this.sections[i].el, 0, -this.instance.scroll.y);
              this.sections[i].el.style.visibility = 'visible';
              this.sections[i].inView = true;
            } else {
              this.sections[i].el.style.visibility = 'hidden';
              this.sections[i].inView = false;
              this.transform(this.sections[i].el, 0, 0);
            }
          }
        }

        if (this.getDirection) {
          this.getDirection();
        }

        if (this.getSpeed) {
          this.getSpeed();
          this.timestamp = Date.now();
        }

        this.detectElements();
        this.transformElements();
        var scrollBarTranslation = this.instance.scroll.y / this.instance.limit * this.scrollBarLimit;
        this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
        this.hasScrollTicking = false;
      }
    }
  }, {
    key: "checkResize",
    value: function checkResize() {
      this.windowHeight = window.innerHeight;
      this.windowMiddle = this.windowHeight / 2;
      this.setScrollLimit();
      this.addSections();
      this.addElements();
      this.detectElements();
      this.updateScroll();
      this.transformElements(true);
    }
  }, {
    key: "updateDelta",
    value: function updateDelta(e) {
      this.instance.delta.y -= e.deltaY;
      if (this.instance.delta.y < 0) this.instance.delta.y = 0;
      if (this.instance.delta.y > this.instance.limit) this.instance.delta.y = this.instance.limit;
    }
  }, {
    key: "updateScroll",
    value: function updateScroll() {
      if (this.isScrolling) {
        this.instance.scroll.y = (0, _maths.lerp)(this.instance.scroll.y, this.instance.delta.y, this.inertia * this.inertiaRatio);
      } else if (this.isDraggingScrollBar) {
        this.instance.scroll.y = (0, _maths.lerp)(this.instance.scroll.y, this.instance.delta.y, this.inertia * 2);
      } else {
        this.instance.scroll.y = this.instance.delta.y;
      }
    }
  }, {
    key: "getDirection",
    value: function getDirection() {
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
  }, {
    key: "getSpeed",
    value: function getSpeed() {
      if (this.instance.delta.y != this.instance.scroll.y) {
        this.instance.scroll.speed = (this.instance.delta.y - this.instance.scroll.y) / (Date.now() - this.timestamp);
      } else {
        this.instance.scroll.speed = 0;
      }
    }
  }, {
    key: "initScrollBar",
    value: function initScrollBar() {
      var _this4 = this;

      this.scrollbar = document.createElement('span');
      this.scrollbarThumb = document.createElement('span');
      this.scrollbar.classList.add("".concat(this.scrollbarClass));
      this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb"));
      this.scrollbar.append(this.scrollbarThumb);
      document.body.append(this.scrollbar);
      this.scrollbarThumb.style.height = "".concat(window.innerHeight * window.innerHeight / this.instance.limit, "px");
      this.scrollBarLimit = window.innerHeight - this.scrollbarThumb.getBoundingClientRect().height;
      this.scrollbarThumb.addEventListener('mousedown', function (e) {
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
      this.scrollbarThumb.style.height = "".concat(window.innerHeight * window.innerHeight / this.instance.limit, "px");
      this.scrollBarLimit = window.innerHeight - this.scrollbarThumb.getBoundingClientRect().height;
    }
  }, {
    key: "destroyScrollBar",
    value: function destroyScrollBar() {
      var _this5 = this;

      this.scrollbarThumb.removeEventListener('mousedown', function (e) {
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
      this.isDraggingScrollbar = true;
      this.checkScroll();
      html.classList.remove(this.scrollingClass);
      html.classList.add(this.draggingClass);
    }
  }, {
    key: "releaseScrollBar",
    value: function releaseScrollBar(e) {
      this.isDraggingScrollbar = false;
      html.classList.add(this.scrollingClass);
      html.classList.remove(this.draggingClass);
    }
  }, {
    key: "moveScrollBar",
    value: function moveScrollBar(e) {
      var _this6 = this;

      if (!this.isTicking && this.isDraggingScrollbar) {
        requestAnimationFrame(function () {
          var y = e.clientY * 100 / window.innerHeight * _this6.instance.limit / 100;

          if (y > 0 && y < _this6.instance.limit) {
            _this6.instance.delta.y = y;
          }
        });
        this.isTicking = true;
      }

      this.isTicking = false;
    }
  }, {
    key: "addElements",
    value: function addElements() {
      var _this7 = this;

      this.els = [];
      this.parallaxElements = [];
      this.sections.forEach(function (section, y) {
        var els = _this7.sections[y].el.querySelectorAll("[data-".concat(_this7.name, "]"));

        els.forEach(function (el, i) {
          var cl = el.dataset[_this7.name + 'Class'] || _this7["class"];
          var top;
          var repeat = el.dataset[_this7.name + 'Repeat'];
          var call = el.dataset[_this7.name + 'Call'];
          var position = el.dataset[_this7.name + 'Position'];
          var delay = el.dataset[_this7.name + 'Delay'];
          var direction = el.dataset[_this7.name + 'Direction'];
          var sticky = typeof el.dataset[_this7.name + 'Sticky'] === 'string';
          var speed = el.dataset[_this7.name + 'Speed'] ? parseFloat(el.dataset[_this7.name + 'Speed']) / 10 : false;
          var offset = typeof el.dataset[_this7.name + 'Offset'] === 'string' ? el.dataset[_this7.name + 'Offset'].split(',') : false;
          var target = el.dataset[_this7.name + 'Target'];
          var targetEl;

          if (target !== undefined) {
            targetEl = document.querySelector("".concat(target));
          } else {
            targetEl = el;
          }

          if (!_this7.sections[y].inView) {
            top = targetEl.getBoundingClientRect().top - (0, _transform.getTranslate)(_this7.sections[y].el).y - (0, _transform.getTranslate)(targetEl).y;
          } else {
            top = targetEl.getBoundingClientRect().top + _this7.instance.scroll.y - (0, _transform.getTranslate)(targetEl).y;
          }

          var bottom = top + targetEl.offsetHeight;
          var middle = (bottom - top) / 2 + top;

          if (sticky) {
            top += window.innerHeight;
            bottom = top + targetEl.offsetHeight - window.innerHeight - el.offsetHeight;
            middle = (bottom - top) / 2 + top;
          }

          if (repeat == 'false') {
            repeat = false;
          } else if (repeat != undefined) {
            repeat = true;
          } else {
            repeat = _this7.repeat;
          }

          var relativeOffset = [0, 0];

          if (offset) {
            for (var i = 0; i < offset.length; i++) {
              if (offset[i].includes('%')) {
                relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this7.windowHeight / 100);
              } else {
                relativeOffset[i] = parseInt(offset[i]);
              }
            }
          }

          var mappedEl = {
            el: el,
            "class": cl,
            top: top + relativeOffset[0],
            middle: middle,
            bottom: bottom - relativeOffset[1],
            offset: offset,
            repeat: repeat,
            inView: false,
            call: call,
            speed: speed,
            delay: delay,
            position: position,
            target: targetEl,
            direction: direction,
            sticky: sticky
          };

          _this7.els.push(mappedEl);

          if (speed !== false || sticky) {
            _this7.parallaxElements.push(mappedEl);
          }
        });
      });
    }
  }, {
    key: "addSections",
    value: function addSections() {
      var _this8 = this;

      this.sections = [];
      var sections = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
      sections.forEach(function (section, i) {
        var offset = section.getBoundingClientRect().top - window.innerHeight * 1.5 - (0, _transform.getTranslate)(section).y;
        var limit = offset + section.getBoundingClientRect().height + window.innerHeight * 2;
        var persistent = typeof section.dataset[_this8.name + 'Persistent'] === 'string';
        var inView = false;

        if (_this8.instance.scroll.y >= offset && _this8.instance.scroll.y <= limit) {
          inView = true;
        }

        var mappedSection = {
          el: section,
          offset: offset,
          limit: limit,
          inView: inView,
          persistent: persistent
        };
        _this8.sections[i] = mappedSection;
      });
    }
  }, {
    key: "transform",
    value: function transform(element, x, y, delay) {
      var transform;

      if (!delay) {
        transform = "matrix(1,0,0,1,".concat(x, ",").concat(y, ")");
      } else {
        var start = (0, _transform.getTranslate)(element);
        var lerpX = (0, _maths.lerp)(start.x, x, delay);
        var lerpY = (0, _maths.lerp)(start.y, y, delay);
        transform = "matrix(1,0,0,1,".concat(lerpX, ",").concat(lerpY, ")");
      }

      element.style.webkitTransform = transform;
      element.style.msTransform = transform;
      element.style.transform = transform;
    }
  }, {
    key: "transformElements",
    value: function transformElements(isForced) {
      var _this9 = this;

      var scrollBottom = this.instance.scroll.y + this.windowHeight;
      var scrollMiddle = this.instance.scroll.y + this.windowMiddle;
      this.parallaxElements.forEach(function (current, i) {
        var transformDistance = false;

        if (isForced && !current.inView) {
          transformDistance = 0;
        }

        if (current.inView) {
          switch (current.position) {
            case 'top':
              transformDistance = _this9.instance.scroll.y * -current.speed;
              break;

            case 'bottom':
              transformDistance = (_this9.instance.limit - scrollBottom + _this9.windowHeight) * current.speed;
              break;

            default:
              transformDistance = (scrollMiddle - current.middle) * -current.speed;
              break;
          }
        }

        if (current.sticky) {
          if (current.inView) {
            transformDistance = _this9.instance.scroll.y - current.top + window.innerHeight;
          } else {
            if (_this9.instance.scroll.y < current.top) {
              transformDistance = 0;
            }

            if (_this9.instance.scroll.y > current.bottom) {
              transformDistance = current.bottom - current.top + window.innerHeight;
            }
          }
        }

        if (transformDistance !== false) {
          if (current.direction === 'horizontal') {
            _this9.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
          } else {
            _this9.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
          }
        }
      });
    }
    /**
     * Scroll to a desired target.
     *
     * @param  {object} options
     *      Available options :
     *          {node} target - The DOM element we want to scroll to
     *          {node} sourceElem - An `<a>` element with an href targeting the anchor we want to scroll to
     *          {node} offsetElem - A DOM element from which we get the height to substract from the offset
     *              (ex: use offsetElem to pass a mobile header that is above content, to make sure the scrollTo will be aligned with it)
     *          {int} offset - An absolute vertical scroll value to reach, or an offset to apply on top of given `target` or `sourceElem`'s target
     *          {int} delay - Amount of milliseconds to wait before starting to scroll
     *          {boolean} toTop - Set to true to scroll all the way to the top
     *          {boolean} toBottom - Set to true to scroll all the way to the bottom
     * @return {void}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(targetOption, offsetOption) {
      var _this10 = this;

      var target;
      var offset = offsetOption ? parseInt(offsetOption) : 0;

      if (typeof targetOption === 'string') {
        if (targetOption === 'top') {
          offset = 0;
        } else if (targetOption === 'bottom') {
          offset = this.instance.limit;
        } else {
          target = document.querySelectorAll(targetOption)[0];
        }
      } else if (!targetOption.target) {
        target = targetOption;
      } // We have a target, get it's coordinates


      if (target) {
        // Get target offset from top
        var targetBCR = target.getBoundingClientRect();
        var offsetTop = targetBCR.top + this.instance.scroll.y; // Try and find the target's parent section

        var targetParents = (0, _html.getParents)(target);
        var parentSection = targetParents.find(function (candidate) {
          return _this10.sections.find(function (section) {
            return section.element == candidate;
          });
        });
        var parentSectionOffset = 0;

        if (parentSection) {
          parentSectionOffset = (0, _transform.getTranslate)(parentSection).y; // We got a parent section, store it's current offset to remove it later
        } // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)


        offset = offsetTop + offset - parentSectionOffset;
      }

      this.instance.delta.y = Math.min(offset, this.instance.limit); // Actual scrollTo (the lerp will do the animation itself)

      this.inertiaRatio = Math.min(4000 / Math.abs(this.instance.delta.y - this.instance.scroll.y), 0.8); // Update the scroll. If we were in idle state: we're not anymore

      this.isScrolling = true;
      this.checkScroll();
      html.classList.add(this.isScrollingClassName);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);
    }
  }]);

  return _default;
}(_Core2["default"]);

exports["default"] = _default;

},{"../../utils/html":9,"../../utils/maths":10,"../../utils/transform":11,"./Core":4,"virtual-scroll":17}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _options = require("./options");

var _Native = _interopRequireDefault(require("../Native"));

var _Smooth = _interopRequireDefault(require("../Smooth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  function _default() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    this.options = options;
    Object.assign(this, _options.defaults, options);
    this.init();
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      if (!this.smoothMobile) {
        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      }

      if (this.smooth === true && !this.isMobile) {
        this.scroll = new _Smooth["default"](this.options);
      } else {
        this.scroll = new _Native["default"](this.options);
      }

      this.scroll.init();

      if (window.location.hash) {
        this.scroll.scrollTo(window.location.hash);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.scroll.destroy();
    }
  }]);

  return _default;
}();

exports["default"] = _default;

},{"../Native":2,"../Smooth.js":3,"./options":8}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = void 0;
var defaults = {
  el: document,
  elMobile: document,
  name: 'scroll',
  offset: 0,
  repeat: false,
  smooth: false,
  smoothMobile: false,
  direction: 'vertical',
  inertia: 1,
  "class": 'is-inview',
  scrollbarClass: 'c-scrollbar',
  scrollingClass: 'is-scrolling',
  draggingClass: 'is-dragging',
  smoothClass: 'has-smoothscroll'
};
exports.defaults = defaults;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeHtml = escapeHtml;
exports.unescapeHtml = unescapeHtml;
exports.getNodeData = getNodeData;
exports.getParents = getParents;
exports.queryClosestParent = queryClosestParent;

/**
 * @see  https://github.com/ractivejs/ractive/blob/dev/src/utils/html.js
 */
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
/**
 * Prepare HTML content that contains mustache characters for use with Ractive
 * @param  {string} str
 * @return {string}
 */


function unescapeHtml(str) {
  return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}
/**
 * Get element data attributes
 * @param   {DOMElement}  node
 * @return  {Array}       data
 */


function getNodeData(node) {
  // All attributes
  var attributes = node.attributes; // Regex Pattern

  var pattern = /^data\-(.+)$/; // Output

  var data = {};

  for (var i in attributes) {
    if (!attributes[i]) {
      continue;
    } // Attributes name (ex: data-module)


    var name = attributes[i].name; // This happens.

    if (!name) {
      continue;
    }

    var match = name.match(pattern);

    if (!match) {
      continue;
    } // If this throws an error, you have some
    // serious problems in your HTML.


    data[match[1]] = node.getAttribute(name);
  }

  return data;
}
/**
 * Returns an array containing all the parent nodes of the given node
 * @param  {object} node
 * @return {array} parent nodes
 */


function getParents(elem) {
  // Set up a parent array
  var parents = []; // Push each parent element to the array

  for (; elem && elem !== document; elem = elem.parentNode) {
    parents.push(elem);
  } // Return our parent array


  return parents;
} // https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/


function queryClosestParent(elem, selector) {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  } // Get the closest matching element


  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }

  return null;
}

;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lerp = lerp;

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transform = transform;
exports.getTranslate = getTranslate;

function transform(el, transformValue) {
  el.style.webkitTransform = transformValue;
  el.style.msTransform = transformValue;
  el.style.transform = transformValue;
}

function getTranslate(el) {
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

},{}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
'use strict';

module.exports = function(source) {
    return JSON.parse(JSON.stringify(source));
};
},{}],17:[function(require,module,exports){
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
        limitInertia: false,
        useKeyboard: true
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

    if(support.hasKeyDown && this.options.useKeyboard) document.addEventListener('keydown', this._onKeyDown);
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

    if(support.hasKeyDown && this.options.useKeyboard) document.removeEventListener('keydown', this._onKeyDown);
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

},{"./clone":16,"./support":18,"bindall-standalone":12,"lethargy":13,"object-assign":14,"tiny-emitter":15}],18:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9hcHAuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvTmF0aXZlLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL1Ntb290aC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL0NvcmUuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvdmVuZG9ycy9OYXRpdmUuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvdmVuZG9ycy9TbW9vdGguanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvdmVuZG9ycy9tYWluLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL3ZlbmRvcnMvb3B0aW9ucy5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL2h0bWwuanMiLCJhc3NldHMvc2NyaXB0cy91dGlscy9tYXRocy5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL3RyYW5zZm9ybS5qcyIsIm5vZGVfbW9kdWxlcy9iaW5kYWxsLXN0YW5kYWxvbmUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbGV0aGFyZ3kvbGV0aGFyZ3kuanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90aW55LWVtaXR0ZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvc3JjL2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtc2Nyb2xsL3NyYy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLXNjcm9sbC9zcmMvc3VwcG9ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQSxDQUFDLFlBQVc7QUFFUixNQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFKLENBQXFCO0FBQ2hDLElBQUEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLFlBQXZCLENBRDRCO0FBRWhDLElBQUEsTUFBTSxFQUFFLElBRndCO0FBR2hDLElBQUEsWUFBWSxFQUFFLEtBSGtCO0FBSWhDLElBQUEsZUFBZSxFQUFFLENBQUMsQ0FBQyxRQUFELENBSmM7QUFLaEMsSUFBQSxPQUFPLEVBQUUsQ0FMdUI7QUFNaEMsSUFBQSxrQkFBa0IsRUFBRSxhQU5ZO0FBT2hDLElBQUEsb0JBQW9CLEVBQUUsY0FQVTtBQVFoQyxJQUFBLG1CQUFtQixFQUFFLGFBUlc7QUFTaEMsSUFBQSxRQUFRLEVBQUUsa0JBQUMsQ0FBRCxFQUFPLENBQ2I7QUFDSDtBQVgrQixHQUFyQixDQUFmO0FBY0gsQ0FoQkQ7Ozs7Ozs7Ozs7QUNDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBS0ksb0JBQVksT0FBWixFQUFxQjtBQUFBOztBQUFBLGlGQUNYLE9BRFc7QUFFcEI7OztFQUh3QixtQjs7Ozs7Ozs7Ozs7O0FDTDdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFHSSxvQkFBWSxPQUFaLEVBQXFCO0FBQUE7O0FBQUEsaUZBQ1gsT0FEVztBQUVwQjs7O0VBSHdCLG1COzs7Ozs7Ozs7Ozs7QUNqQjdCOzs7Ozs7Ozs7OztBQUdJLHNCQUEwQjtBQUFBLFFBQWQsT0FBYyx1RUFBSixFQUFJOztBQUFBOztBQUN0QixJQUFBLE1BQU0sQ0FBQyxNQUFQLENBQWMsSUFBZCxFQUFvQixpQkFBcEIsRUFBOEIsT0FBOUI7QUFFQSxTQUFLLFNBQUwsR0FBaUIsWUFBakI7QUFDQSxTQUFLLElBQUwsR0FBWSxRQUFRLENBQUMsZUFBckI7QUFDQSxTQUFLLFlBQUwsR0FBb0IsTUFBTSxDQUFDLFdBQTNCO0FBQ0EsU0FBSyxZQUFMLEdBQW9CLEtBQUssWUFBTCxHQUFvQixDQUF4QztBQUNBLFNBQUssR0FBTCxHQUFXLEVBQVg7QUFFQSxTQUFLLGdCQUFMLEdBQXdCLEtBQXhCO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUFuQjtBQUNBLFNBQUssV0FBTCxHQUFtQixLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFFQSxTQUFLLFFBQUwsR0FBZ0I7QUFDWixNQUFBLE1BQU0sRUFBRTtBQUNKLFFBQUEsQ0FBQyxFQUFFLENBREM7QUFFSixRQUFBLENBQUMsRUFBRSxDQUZDO0FBR0osUUFBQSxTQUFTLEVBQUUsSUFIUDtBQUlKLFFBQUEsS0FBSyxFQUFFO0FBSkg7QUFESSxLQUFoQjtBQVNBLElBQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUssV0FBdkMsRUFBb0QsS0FBcEQ7QUFDSDs7OzsyQkFFTTtBQUNILFdBQUssVUFBTDtBQUNILEssQ0FFRDtBQUVBOzs7O2lDQUVhO0FBQUE7O0FBQ1QsV0FBSyxXQUFMLEdBQW1CLEtBQUssRUFBTCxDQUFRLGdCQUFSLGlCQUFrQyxLQUFLLElBQXZDLFVBQW5CO0FBQ0EsV0FBSyxXQUFMLEdBQW1CLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUFuQjtBQUVBLFdBQUssV0FBTCxDQUFpQixPQUFqQixDQUF5QixVQUFDLEVBQUQsRUFBUTtBQUM3QixRQUFBLEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixLQUFJLENBQUMsV0FBbEMsRUFBK0MsS0FBL0M7QUFDSCxPQUZEO0FBR0g7OztnQ0FFVyxLLEVBQU87QUFDZixNQUFBLEtBQUssQ0FBQyxjQUFOO0FBRUEsV0FBSyxRQUFMLENBQ0ksS0FBSyxDQUFDLGFBQU4sQ0FBb0IsWUFBcEIsZ0JBQXlDLEtBQUssSUFBOUMsZUFBOEQsS0FBSyxDQUFDLGFBQU4sQ0FBb0IsWUFBcEIsQ0FBaUMsTUFBakMsQ0FEbEUsRUFFSSxLQUFLLENBQUMsYUFBTixDQUFvQixZQUFwQixnQkFBeUMsS0FBSyxJQUE5QyxhQUZKO0FBSUgsSyxDQUVEOzs7O3FDQUVpQjtBQUFBOztBQUNiLFVBQU0sU0FBUyxHQUFHLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBdkM7QUFDQSxVQUFNLFlBQVksR0FBRyxTQUFTLEdBQUcsS0FBSyxZQUF0QztBQUVBLFdBQUssR0FBTCxDQUFTLE9BQVQsQ0FBaUIsVUFBQyxFQUFELEVBQUssQ0FBTCxFQUFXO0FBQ3hCLFlBQUksQ0FBQyxFQUFFLENBQUMsTUFBUixFQUFnQjtBQUNaLGNBQUssWUFBWSxJQUFJLEVBQUUsQ0FBQyxHQUFwQixJQUE2QixTQUFTLEdBQUcsRUFBRSxDQUFDLE1BQWhELEVBQXlEO0FBQ3JELFlBQUEsTUFBSSxDQUFDLFNBQUwsQ0FBZSxFQUFmLEVBQW1CLENBQW5CO0FBQ0g7QUFDSjs7QUFDRCxZQUFHLEVBQUUsQ0FBQyxNQUFOLEVBQWM7QUFDVixjQUFLLFlBQVksR0FBRyxFQUFFLENBQUMsR0FBbkIsSUFBNEIsU0FBUyxHQUFHLEVBQUUsQ0FBQyxNQUEvQyxFQUF3RDtBQUNwRCxZQUFBLE1BQUksQ0FBQyxZQUFMLENBQWtCLEVBQWxCLEVBQXNCLENBQXRCO0FBQ0g7QUFDSjtBQUNKLE9BWEQ7QUFhQSxXQUFLLGdCQUFMLEdBQXdCLEtBQXhCO0FBQ0g7Ozs4QkFFUyxPLEVBQVMsQyxFQUFHO0FBQ2xCLFdBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFaLEdBQXFCLElBQXJCO0FBQ0EsTUFBQSxPQUFPLENBQUMsRUFBUixDQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsT0FBTyxTQUFoQzs7QUFFQSxVQUFJLE9BQU8sQ0FBQyxJQUFaLEVBQWtCO0FBQ2QsYUFBSyxTQUFMLEdBQWlCLE9BQU8sQ0FBQyxJQUFSLENBQWEsS0FBYixDQUFtQixHQUFuQixFQUF3QixHQUF4QixDQUE0QixVQUFBLElBQUk7QUFBQSxpQkFBSSxJQUFJLENBQUMsSUFBTCxFQUFKO0FBQUEsU0FBaEMsQ0FBakI7QUFDQSxZQUFJLEtBQUssU0FBTCxDQUFlLE1BQWYsSUFBeUIsQ0FBN0IsRUFBZ0MsS0FBSyxTQUFMLEdBQWlCLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBakI7QUFFaEMsWUFBTSxTQUFTLEdBQUcsSUFBSSxLQUFKLENBQVUsS0FBSyxTQUFMLEdBQWlCLE1BQTNCLENBQWxCO0FBQ0EsUUFBQSxNQUFNLENBQUMsYUFBUCxDQUFxQixTQUFyQjtBQUNIOztBQUVELFVBQUksQ0FBQyxPQUFPLENBQUMsTUFBVCxJQUFtQixPQUFPLENBQUMsS0FBUixLQUFrQixLQUFyQyxJQUE4QyxDQUFDLE9BQU8sQ0FBQyxNQUEzRCxFQUFtRTtBQUMvRCxhQUFLLEdBQUwsQ0FBUyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0g7QUFDSjs7O2lDQUVZLE8sRUFBUyxDLEVBQUc7QUFDckIsVUFBRyxPQUFPLENBQUMsTUFBUixJQUFrQixPQUFPLENBQUMsS0FBUixLQUFrQixTQUF2QyxFQUFrRDtBQUM5QyxhQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBWixHQUFxQixLQUFyQjtBQUNBLFFBQUEsT0FBTyxDQUFDLEVBQVIsQ0FBVyxTQUFYLENBQXFCLE1BQXJCLENBQTRCLE9BQU8sU0FBbkM7QUFDSDtBQUNKOzs7cUNBRWdCO0FBQUE7O0FBQ2IsV0FBSyxHQUFMLENBQVMsT0FBVCxDQUFpQixVQUFDLEVBQUQsRUFBSyxDQUFMLEVBQVc7QUFDeEIsWUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUgsQ0FBTSxxQkFBTixHQUE4QixHQUE5QixHQUFvQyxNQUFJLENBQUMsUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBckU7O0FBQ0EsWUFBTSxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFILENBQU0sWUFBM0I7QUFFQSxRQUFBLE1BQUksQ0FBQyxHQUFMLENBQVMsQ0FBVCxFQUFZLEdBQVosR0FBa0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUEzQjtBQUNBLFFBQUEsTUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBWixHQUFxQixNQUFyQjtBQUNILE9BTkQ7QUFRQSxXQUFLLGdCQUFMLEdBQXdCLEtBQXhCO0FBQ0g7Ozt1QkFHRSxLLEVBQU8sSSxFQUFNO0FBQUE7O0FBQ1osTUFBQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsS0FBSyxTQUFMLEdBQWlCLEtBQXpDLEVBQWdELFlBQU07QUFDbEQsZ0JBQVEsS0FBUjtBQUNJLGVBQUssTUFBTDtBQUNJLG1CQUFPLElBQUksQ0FBQyxNQUFJLENBQUMsU0FBTixDQUFYOztBQUNKO0FBQ0ksbUJBQU8sSUFBSSxFQUFYO0FBSlI7QUFNSCxPQVBELEVBT0csS0FQSDtBQVFIOzs7OEJBRVM7QUFBQTs7QUFDTixNQUFBLE1BQU0sQ0FBQyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLLFdBQTFDLEVBQXVELEtBQXZEO0FBRUEsV0FBSyxXQUFMLENBQWlCLE9BQWpCLENBQXlCLFVBQUMsRUFBRCxFQUFRO0FBQzdCLFFBQUEsRUFBRSxDQUFDLG1CQUFILENBQXVCLE9BQXZCLEVBQWdDLE1BQUksQ0FBQyxXQUFyQyxFQUFrRCxLQUFsRDtBQUNILE9BRkQ7QUFHSDs7Ozs7Ozs7Ozs7Ozs7OztBQ2xJTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdJLHNCQUEwQjtBQUFBOztBQUFBLFFBQWQsT0FBYyx1RUFBSixFQUFJOztBQUFBOztBQUN0QixrRkFBTSxPQUFOO0FBRUEsSUFBQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsTUFBSyxXQUF2QyxFQUFvRCxLQUFwRDtBQUhzQjtBQUl6Qjs7OzsyQkFFTTtBQUNILFdBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBckIsR0FBeUIsTUFBTSxDQUFDLE9BQWhDO0FBRUEsV0FBSyxXQUFMO0FBQ0EsV0FBSyxjQUFMOztBQUVBO0FBQ0g7OztrQ0FFYTtBQUFBOztBQUNWLFVBQUksS0FBSyxHQUFMLENBQVMsTUFBYixFQUFxQjtBQUNqQixhQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEdBQXlCLE1BQU0sQ0FBQyxPQUFoQzs7QUFFQSxZQUFHLENBQUMsS0FBSyxnQkFBVCxFQUEyQjtBQUN2QixVQUFBLHFCQUFxQixDQUFDLFlBQU07QUFDeEIsWUFBQSxNQUFJLENBQUMsY0FBTDtBQUNILFdBRm9CLENBQXJCO0FBR0EsZUFBSyxnQkFBTCxHQUF3QixJQUF4QjtBQUNIO0FBQ0o7QUFDSjs7O2tDQUVhO0FBQUE7O0FBQ1YsVUFBSSxLQUFLLEdBQUwsQ0FBUyxNQUFiLEVBQXFCO0FBQ2pCLGFBQUssWUFBTCxHQUFvQixNQUFNLENBQUMsV0FBM0I7O0FBRUEsWUFBRyxDQUFDLEtBQUssZ0JBQVQsRUFBMkI7QUFDdkIsVUFBQSxxQkFBcUIsQ0FBQyxZQUFNO0FBQ3hCLFlBQUEsTUFBSSxDQUFDLGNBQUw7QUFDSCxXQUZvQixDQUFyQjtBQUdBLGVBQUssZ0JBQUwsR0FBd0IsSUFBeEI7QUFDSDtBQUNKO0FBQ0o7OztrQ0FFYTtBQUFBOztBQUNWLFVBQU0sR0FBRyxHQUFHLEtBQUssRUFBTCxDQUFRLGdCQUFSLENBQXlCLFdBQVMsS0FBSyxJQUFkLEdBQW1CLEdBQTVDLENBQVo7QUFFQSxNQUFBLEdBQUcsQ0FBQyxPQUFKLENBQVksVUFBQyxFQUFELEVBQUssQ0FBTCxFQUFXO0FBQ25CLFlBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFILENBQVcsTUFBSSxDQUFDLElBQUwsR0FBWSxPQUF2QixLQUFtQyxNQUFJLFNBQWhEOztBQUNBLFlBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxxQkFBSCxHQUEyQixHQUEzQixHQUFpQyxNQUFJLENBQUMsUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBaEU7O0FBQ0EsWUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxZQUF0QjtBQUNBLFlBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBSCxDQUFXLE1BQUksQ0FBQyxJQUFMLEdBQVksUUFBdkIsQ0FBRCxDQUFSLElBQThDLFFBQVEsQ0FBQyxNQUFJLENBQUMsTUFBTixDQUFuRTtBQUNBLFlBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxPQUFILENBQVcsTUFBSSxDQUFDLElBQUwsR0FBWSxRQUF2QixDQUFiO0FBQ0EsWUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLE9BQUgsQ0FBVyxNQUFJLENBQUMsSUFBTCxHQUFZLE1BQXZCLENBQVg7O0FBRUEsWUFBRyxNQUFNLElBQUksT0FBYixFQUFzQjtBQUNsQixVQUFBLE1BQU0sR0FBRyxLQUFUO0FBQ0gsU0FGRCxNQUVPLElBQUksTUFBTSxJQUFJLFNBQWQsRUFBeUI7QUFDNUIsVUFBQSxNQUFNLEdBQUcsSUFBVDtBQUNILFNBRk0sTUFFQTtBQUNILFVBQUEsTUFBTSxHQUFHLE1BQUksQ0FBQyxNQUFkO0FBQ0g7O0FBRUQsUUFBQSxNQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsSUFBYztBQUNWLFVBQUEsRUFBRSxFQUFFLEVBRE07QUFFVixtQkFBTyxFQUZHO0FBR1YsVUFBQSxHQUFHLEVBQUUsR0FBRyxHQUFHLE1BSEQ7QUFJVixVQUFBLE1BQU0sRUFBRSxNQUpFO0FBS1YsVUFBQSxNQUFNLEVBQUUsTUFMRTtBQU1WLFVBQUEsTUFBTSxFQUFFLE1BTkU7QUFPVixVQUFBLE1BQU0sRUFBRSxLQVBFO0FBUVYsVUFBQSxJQUFJLEVBQUU7QUFSSSxTQUFkO0FBVUgsT0ExQkQ7QUE0Qkg7QUFFRDs7Ozs7Ozs7OzZCQU1TLFksRUFBYyxZLEVBQWM7QUFDakMsVUFBSSxNQUFKO0FBQ0EsVUFBSSxNQUFNLEdBQUcsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFELENBQVgsR0FBNEIsQ0FBckQ7O0FBRUEsVUFBRyxPQUFPLFlBQVAsS0FBd0IsUUFBM0IsRUFBcUM7QUFFakMsWUFBRyxZQUFZLEtBQUssS0FBcEIsRUFBMkI7QUFDdkIsVUFBQSxNQUFNLEdBQUcsS0FBSyxJQUFkO0FBQ0gsU0FGRCxNQUVPLElBQUcsWUFBWSxLQUFLLFFBQXBCLEVBQThCO0FBQ2pDLFVBQUEsTUFBTSxHQUFHLFFBQVEsQ0FBQyxZQUFsQjtBQUNBLGVBQUssSUFBTCxDQUFVLGNBQVYsQ0FBeUI7QUFBRSxZQUFBLFFBQVEsRUFBRSxRQUFaO0FBQXNCLFlBQUEsS0FBSyxFQUFFLEtBQTdCO0FBQW9DLFlBQUEsTUFBTSxFQUFFO0FBQTVDLFdBQXpCO0FBRUE7QUFFSCxTQU5NLE1BTUE7QUFDSCxVQUFBLE1BQU0sR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsWUFBMUIsRUFBd0MsQ0FBeEMsQ0FBVDtBQUNIO0FBRUosT0FkRCxNQWNPLElBQUcsQ0FBQyxZQUFZLENBQUMsTUFBakIsRUFBeUI7QUFDNUIsUUFBQSxNQUFNLEdBQUcsWUFBVDtBQUNIOztBQUVELFVBQUksTUFBSixFQUFZO0FBQ1IsUUFBQSxNQUFNLEdBQUcsTUFBTSxDQUFDLHFCQUFQLEdBQStCLEdBQS9CLEdBQXFDLE1BQTlDO0FBQ0g7O0FBRUQsTUFBQSxNQUFNLENBQUMsY0FBUCxDQUFzQjtBQUFFLFFBQUEsUUFBUSxFQUFFO0FBQVosT0FBdEI7QUFDSDs7OzhCQUdTO0FBQ047O0FBRUEsTUFBQSxNQUFNLENBQUMsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBSyxXQUExQyxFQUF1RCxLQUF2RDtBQUNIOzs7O0VBbkh3QixpQjs7Ozs7Ozs7Ozs7O0FDRjdCOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsZUFBdEI7Ozs7Ozs7QUFHSSxzQkFBMEI7QUFBQTs7QUFBQSxRQUFkLE9BQWMsdUVBQUosRUFBSTs7QUFBQTs7QUFDdEIsa0ZBQU0sT0FBTjtBQUVBLFVBQUssT0FBTCxHQUFlLE1BQUssT0FBTCxHQUFlLEdBQTlCO0FBQ0EsVUFBSyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsVUFBSyxtQkFBTCxHQUEyQixLQUEzQjtBQUNBLFVBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNBLFVBQUssZ0JBQUwsR0FBd0IsS0FBeEI7QUFDQSxVQUFLLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0EsVUFBSyxZQUFMLEdBQW9CLENBQXBCO0FBVHNCO0FBVXpCOzs7OzJCQUVNO0FBQUE7O0FBQ0gsTUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLEdBQWYsQ0FBbUIsS0FBSyxXQUF4QjtBQUVBLFdBQUssUUFBTDtBQUNJLFFBQUEsRUFBRSxFQUFFLElBQUkseUJBQUosQ0FBa0I7QUFDbEIsVUFBQSxlQUFlLEVBQUcsU0FBUyxDQUFDLFFBQVYsQ0FBbUIsT0FBbkIsQ0FBMkIsS0FBM0IsSUFBb0MsQ0FBQyxDQUF0QyxHQUEyQyxDQUEzQyxHQUErQyxHQUQ5QztBQUVsQixVQUFBLGVBQWUsRUFBRSxDQUZDO0FBR2xCLFVBQUEsaUJBQWlCLEVBQUU7QUFIRCxTQUFsQixDQURSO0FBTUksUUFBQSxLQUFLLEVBQUU7QUFDSCxVQUFBLENBQUMsRUFBRSxDQURBO0FBRUgsVUFBQSxDQUFDLEVBQUU7QUFGQTtBQU5YLFNBVU8sS0FBSyxRQVZaO0FBYUEsV0FBSyxRQUFMLENBQWMsRUFBZCxDQUFpQixFQUFqQixDQUFvQixVQUFDLENBQUQsRUFBTztBQUN2QixZQUFJLENBQUMsTUFBSSxDQUFDLFNBQU4sSUFBbUIsQ0FBQyxNQUFJLENBQUMsbUJBQTdCLEVBQWtEO0FBQzlDLFVBQUEscUJBQXFCLENBQUMsWUFBTTtBQUN4QixnQkFBSSxDQUFDLE1BQUksQ0FBQyxXQUFWLEVBQXVCLE1BQUksQ0FBQyxjQUFMOztBQUV2QixZQUFBLE1BQUksQ0FBQyxXQUFMLENBQWlCLENBQWpCO0FBQ0gsV0FKb0IsQ0FBckI7QUFLQSxVQUFBLE1BQUksQ0FBQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0g7O0FBQ0QsUUFBQSxNQUFJLENBQUMsU0FBTCxHQUFpQixLQUFqQjtBQUNILE9BVkQ7QUFZQSxXQUFLLGNBQUw7QUFDQSxXQUFLLGFBQUw7QUFDQSxXQUFLLFdBQUw7QUFDQSxXQUFLLFdBQUw7QUFDQSxXQUFLLGNBQUw7QUFDQSxXQUFLLGlCQUFMLENBQXVCLElBQXZCOztBQUVBO0FBQ0g7OztxQ0FFZ0I7QUFDYixXQUFLLFFBQUwsQ0FBYyxLQUFkLEdBQXNCLEtBQUssRUFBTCxDQUFRLFlBQVIsR0FBdUIsS0FBSyxZQUFsRDtBQUNIOzs7cUNBRWdCO0FBQ2IsV0FBSyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsV0FBSyxXQUFMO0FBQ0EsTUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLEdBQWYsQ0FBbUIsS0FBSyxjQUF4QjtBQUNIOzs7b0NBRWU7QUFDWixXQUFLLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxXQUFLLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEdBQXlCLElBQUksQ0FBQyxLQUFMLENBQVcsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixDQUFoQyxDQUF6QjtBQUNBLE1BQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxNQUFmLENBQXNCLEtBQUssY0FBM0I7QUFDSDs7O2tDQUVhO0FBQUE7O0FBQ1YsVUFBSSxLQUFLLFdBQUwsSUFBb0IsS0FBSyxtQkFBN0IsRUFBa0Q7QUFDOUMsWUFBSSxDQUFDLEtBQUssZ0JBQVYsRUFBNEI7QUFDeEIsVUFBQSxxQkFBcUIsQ0FBQztBQUFBLG1CQUFNLE1BQUksQ0FBQyxXQUFMLEVBQU47QUFBQSxXQUFELENBQXJCO0FBQ0EsZUFBSyxnQkFBTCxHQUF3QixJQUF4QjtBQUNIOztBQUVELFlBQU0sUUFBUSxHQUFJLElBQUksQ0FBQyxHQUFMLENBQVMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUFwQixHQUF3QixLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXRELENBQWxCOztBQUNBLFlBQUssUUFBUSxHQUFHLEdBQVgsSUFBa0IsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUFwQixJQUF5QixDQUE1QyxJQUFtRCxRQUFRLEdBQUcsR0FBWCxJQUFrQixLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLENBQXBCLElBQXlCLENBQWxHLEVBQXNHO0FBQ2xHLGVBQUssYUFBTDtBQUNIOztBQUVELGFBQUssWUFBTDs7QUFFQSxZQUFJLEtBQUssUUFBTCxDQUFjLE1BQWxCLEVBQTBCO0FBQ3RCLGVBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxRQUFMLENBQWMsTUFBZCxHQUF1QixDQUFwQyxFQUF1QyxDQUFDLElBQUksQ0FBNUMsRUFBK0MsQ0FBQyxFQUFoRCxFQUFvRDtBQUNoRCxnQkFBRyxLQUFLLFFBQUwsQ0FBYyxDQUFkLEVBQWlCLFVBQWpCLElBQWdDLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBckIsR0FBeUIsS0FBSyxRQUFMLENBQWMsQ0FBZCxFQUFpQixNQUExQyxJQUFvRCxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEdBQXlCLEtBQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsS0FBakksRUFBeUk7QUFDckksbUJBQUssU0FBTCxDQUFlLEtBQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsRUFBaEMsRUFBb0MsQ0FBcEMsRUFBdUMsQ0FBQyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQTdEO0FBQ0EsbUJBQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsRUFBakIsQ0FBb0IsS0FBcEIsQ0FBMEIsVUFBMUIsR0FBdUMsU0FBdkM7QUFDQSxtQkFBSyxRQUFMLENBQWMsQ0FBZCxFQUFpQixNQUFqQixHQUEwQixJQUExQjtBQUNILGFBSkQsTUFJTztBQUNILG1CQUFLLFFBQUwsQ0FBYyxDQUFkLEVBQWlCLEVBQWpCLENBQW9CLEtBQXBCLENBQTBCLFVBQTFCLEdBQXVDLFFBQXZDO0FBQ0EsbUJBQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsTUFBakIsR0FBMEIsS0FBMUI7QUFDQSxtQkFBSyxTQUFMLENBQWUsS0FBSyxRQUFMLENBQWMsQ0FBZCxFQUFpQixFQUFoQyxFQUFvQyxDQUFwQyxFQUF1QyxDQUF2QztBQUNIO0FBQ0o7QUFDSjs7QUFFRCxZQUFJLEtBQUssWUFBVCxFQUF1QjtBQUNuQixlQUFLLFlBQUw7QUFDSDs7QUFFRCxZQUFJLEtBQUssUUFBVCxFQUFtQjtBQUNmLGVBQUssUUFBTDtBQUNBLGVBQUssU0FBTCxHQUFpQixJQUFJLENBQUMsR0FBTCxFQUFqQjtBQUNIOztBQUVELGFBQUssY0FBTDtBQUNBLGFBQUssaUJBQUw7QUFFQSxZQUFNLG9CQUFvQixHQUFJLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBckIsR0FBeUIsS0FBSyxRQUFMLENBQWMsS0FBeEMsR0FBaUQsS0FBSyxjQUFuRjtBQUNBLGFBQUssU0FBTCxDQUFlLEtBQUssY0FBcEIsRUFBb0MsQ0FBcEMsRUFBdUMsb0JBQXZDO0FBRUEsYUFBSyxnQkFBTCxHQUF3QixLQUF4QjtBQUNIO0FBQ0o7OztrQ0FFYTtBQUNWLFdBQUssWUFBTCxHQUFvQixNQUFNLENBQUMsV0FBM0I7QUFDQSxXQUFLLFlBQUwsR0FBb0IsS0FBSyxZQUFMLEdBQW9CLENBQXhDO0FBRUEsV0FBSyxjQUFMO0FBQ0EsV0FBSyxXQUFMO0FBQ0EsV0FBSyxXQUFMO0FBQ0EsV0FBSyxjQUFMO0FBQ0EsV0FBSyxZQUFMO0FBQ0EsV0FBSyxpQkFBTCxDQUF1QixJQUF2QjtBQUNIOzs7Z0NBRVcsQyxFQUFHO0FBQ1gsV0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUFwQixJQUF5QixDQUFDLENBQUMsTUFBM0I7QUFDQSxVQUFJLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsQ0FBcEIsR0FBd0IsQ0FBNUIsRUFBK0IsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUFwQixHQUF3QixDQUF4QjtBQUMvQixVQUFJLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsQ0FBcEIsR0FBd0IsS0FBSyxRQUFMLENBQWMsS0FBMUMsRUFBaUQsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUFwQixHQUF3QixLQUFLLFFBQUwsQ0FBYyxLQUF0QztBQUNwRDs7O21DQUVjO0FBQ1gsVUFBSSxLQUFLLFdBQVQsRUFBc0I7QUFDbEIsYUFBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixDQUFyQixHQUF5QixpQkFBSyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQTFCLEVBQTZCLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsQ0FBakQsRUFBb0QsS0FBSyxPQUFMLEdBQWUsS0FBSyxZQUF4RSxDQUF6QjtBQUNILE9BRkQsTUFFTyxJQUFJLEtBQUssbUJBQVQsRUFBOEI7QUFDakMsYUFBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixDQUFyQixHQUF5QixpQkFBSyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQTFCLEVBQTZCLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsQ0FBakQsRUFBcUQsS0FBSyxPQUFMLEdBQWUsQ0FBcEUsQ0FBekI7QUFDSCxPQUZNLE1BRUE7QUFDSCxhQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEdBQXlCLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsQ0FBN0M7QUFDSDtBQUNKOzs7bUNBRWM7QUFDWCxVQUFJLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsQ0FBcEIsR0FBd0IsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixDQUFqRCxFQUFvRDtBQUNoRCxZQUFJLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsU0FBckIsS0FBbUMsTUFBdkMsRUFBK0M7QUFDM0MsZUFBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixTQUFyQixHQUFpQyxNQUFqQztBQUNIO0FBQ0osT0FKRCxNQUlPLElBQUksS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUFwQixHQUF3QixLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQWpELEVBQW9EO0FBQ3ZELFlBQUksS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixTQUFyQixLQUFtQyxJQUF2QyxFQUE2QztBQUN6QyxlQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLFNBQXJCLEdBQWlDLElBQWpDO0FBQ0g7QUFDSjtBQUNKOzs7K0JBRVU7QUFDUCxVQUFJLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsQ0FBcEIsSUFBeUIsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixDQUFsRCxFQUFxRDtBQUNqRCxhQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEdBQTZCLENBQUMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUFwQixHQUF3QixLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQTlDLEtBQW9ELElBQUksQ0FBQyxHQUFMLEtBQWEsS0FBSyxTQUF0RSxDQUE3QjtBQUNILE9BRkQsTUFFTztBQUNILGFBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckIsR0FBNkIsQ0FBN0I7QUFDSDtBQUNKOzs7b0NBRWU7QUFBQTs7QUFDWixXQUFLLFNBQUwsR0FBaUIsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBakI7QUFDQSxXQUFLLGNBQUwsR0FBc0IsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBdEI7QUFDQSxXQUFLLFNBQUwsQ0FBZSxTQUFmLENBQXlCLEdBQXpCLFdBQWdDLEtBQUssY0FBckM7QUFDQSxXQUFLLGNBQUwsQ0FBb0IsU0FBcEIsQ0FBOEIsR0FBOUIsV0FBcUMsS0FBSyxjQUExQztBQUVBLFdBQUssU0FBTCxDQUFlLE1BQWYsQ0FBc0IsS0FBSyxjQUEzQjtBQUNBLE1BQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxNQUFkLENBQXFCLEtBQUssU0FBMUI7QUFDQSxXQUFLLGNBQUwsQ0FBb0IsS0FBcEIsQ0FBMEIsTUFBMUIsYUFBdUMsTUFBTSxDQUFDLFdBQVAsR0FBcUIsTUFBTSxDQUFDLFdBQTdCLEdBQTRDLEtBQUssUUFBTCxDQUFjLEtBQWhHO0FBQ0EsV0FBSyxjQUFMLEdBQXNCLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLEtBQUssY0FBTCxDQUFvQixxQkFBcEIsR0FBNEMsTUFBdkY7QUFFQSxXQUFLLGNBQUwsQ0FBb0IsZ0JBQXBCLENBQXFDLFdBQXJDLEVBQWlELFVBQUMsQ0FBRDtBQUFBLGVBQU8sTUFBSSxDQUFDLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FBUDtBQUFBLE9BQWpEO0FBQ0EsTUFBQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBa0MsVUFBQyxDQUFEO0FBQUEsZUFBTyxNQUFJLENBQUMsZ0JBQUwsQ0FBc0IsQ0FBdEIsQ0FBUDtBQUFBLE9BQWxDO0FBQ0EsTUFBQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBb0MsVUFBQyxDQUFEO0FBQUEsZUFBTyxNQUFJLENBQUMsYUFBTCxDQUFtQixDQUFuQixDQUFQO0FBQUEsT0FBcEM7QUFDSDs7O3NDQUVpQjtBQUNkLFdBQUssY0FBTCxDQUFvQixLQUFwQixDQUEwQixNQUExQixhQUF1QyxNQUFNLENBQUMsV0FBUCxHQUFxQixNQUFNLENBQUMsV0FBN0IsR0FBNEMsS0FBSyxRQUFMLENBQWMsS0FBaEc7QUFDQSxXQUFLLGNBQUwsR0FBc0IsTUFBTSxDQUFDLFdBQVAsR0FBcUIsS0FBSyxjQUFMLENBQW9CLHFCQUFwQixHQUE0QyxNQUF2RjtBQUNIOzs7dUNBRWtCO0FBQUE7O0FBQ2YsV0FBSyxjQUFMLENBQW9CLG1CQUFwQixDQUF3QyxXQUF4QyxFQUFvRCxVQUFDLENBQUQ7QUFBQSxlQUFPLE1BQUksQ0FBQyxZQUFMLENBQWtCLENBQWxCLENBQVA7QUFBQSxPQUFwRDtBQUNBLE1BQUEsTUFBTSxDQUFDLG1CQUFQLENBQTJCLFNBQTNCLEVBQXFDLFVBQUMsQ0FBRDtBQUFBLGVBQU8sTUFBSSxDQUFDLGdCQUFMLENBQXNCLENBQXRCLENBQVA7QUFBQSxPQUFyQztBQUNBLE1BQUEsTUFBTSxDQUFDLG1CQUFQLENBQTJCLFdBQTNCLEVBQXVDLFVBQUMsQ0FBRDtBQUFBLGVBQU8sTUFBSSxDQUFDLGFBQUwsQ0FBbUIsQ0FBbkIsQ0FBUDtBQUFBLE9BQXZDO0FBQ0g7OztpQ0FFWSxDLEVBQUc7QUFDWixXQUFLLG1CQUFMLEdBQTJCLElBQTNCO0FBQ0EsV0FBSyxXQUFMO0FBQ0EsTUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLE1BQWYsQ0FBc0IsS0FBSyxjQUEzQjtBQUNBLE1BQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxHQUFmLENBQW1CLEtBQUssYUFBeEI7QUFDSDs7O3FDQUVnQixDLEVBQUc7QUFDaEIsV0FBSyxtQkFBTCxHQUEyQixLQUEzQjtBQUNBLE1BQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxHQUFmLENBQW1CLEtBQUssY0FBeEI7QUFDQSxNQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsTUFBZixDQUFzQixLQUFLLGFBQTNCO0FBQ0g7OztrQ0FFYSxDLEVBQUc7QUFBQTs7QUFDYixVQUFJLENBQUMsS0FBSyxTQUFOLElBQW1CLEtBQUssbUJBQTVCLEVBQWlEO0FBQzdDLFFBQUEscUJBQXFCLENBQUMsWUFBTTtBQUN4QixjQUFJLENBQUMsR0FBSSxDQUFDLENBQUMsT0FBRixHQUFZLEdBQVosR0FBbUIsTUFBTSxDQUFDLFdBQTNCLEdBQTJDLE1BQUksQ0FBQyxRQUFMLENBQWMsS0FBekQsR0FBaUUsR0FBekU7O0FBRUEsY0FBRyxDQUFDLEdBQUcsQ0FBSixJQUFTLENBQUMsR0FBRyxNQUFJLENBQUMsUUFBTCxDQUFjLEtBQTlCLEVBQXFDO0FBQ2pDLFlBQUEsTUFBSSxDQUFDLFFBQUwsQ0FBYyxLQUFkLENBQW9CLENBQXBCLEdBQXdCLENBQXhCO0FBQ0g7QUFDSixTQU5vQixDQUFyQjtBQU9BLGFBQUssU0FBTCxHQUFpQixJQUFqQjtBQUNIOztBQUNELFdBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNIOzs7a0NBRWE7QUFBQTs7QUFDVixXQUFLLEdBQUwsR0FBVyxFQUFYO0FBQ0EsV0FBSyxnQkFBTCxHQUF3QixFQUF4QjtBQUVBLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBQyxPQUFELEVBQVUsQ0FBVixFQUFnQjtBQUNsQyxZQUFNLEdBQUcsR0FBRyxNQUFJLENBQUMsUUFBTCxDQUFjLENBQWQsRUFBaUIsRUFBakIsQ0FBb0IsZ0JBQXBCLGlCQUE4QyxNQUFJLENBQUMsSUFBbkQsT0FBWjs7QUFFQSxRQUFBLEdBQUcsQ0FBQyxPQUFKLENBQVksVUFBQyxFQUFELEVBQUssQ0FBTCxFQUFXO0FBQ25CLGNBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFILENBQVcsTUFBSSxDQUFDLElBQUwsR0FBWSxPQUF2QixLQUFtQyxNQUFJLFNBQWhEO0FBQ0EsY0FBSSxHQUFKO0FBQ0EsY0FBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLE9BQUgsQ0FBVyxNQUFJLENBQUMsSUFBTCxHQUFZLFFBQXZCLENBQWI7QUFDQSxjQUFJLElBQUksR0FBRyxFQUFFLENBQUMsT0FBSCxDQUFXLE1BQUksQ0FBQyxJQUFMLEdBQVksTUFBdkIsQ0FBWDtBQUNBLGNBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxPQUFILENBQVcsTUFBSSxDQUFDLElBQUwsR0FBWSxVQUF2QixDQUFmO0FBQ0EsY0FBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQUgsQ0FBVyxNQUFJLENBQUMsSUFBTCxHQUFZLE9BQXZCLENBQVo7QUFDQSxjQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsT0FBSCxDQUFXLE1BQUksQ0FBQyxJQUFMLEdBQVksV0FBdkIsQ0FBaEI7QUFDQSxjQUFJLE1BQU0sR0FBRyxPQUFPLEVBQUUsQ0FBQyxPQUFILENBQVcsTUFBSSxDQUFDLElBQUwsR0FBWSxRQUF2QixDQUFQLEtBQTRDLFFBQXpEO0FBQ0EsY0FBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQUgsQ0FBVyxNQUFJLENBQUMsSUFBTCxHQUFZLE9BQXZCLElBQWtDLFVBQVUsQ0FBQyxFQUFFLENBQUMsT0FBSCxDQUFXLE1BQUksQ0FBQyxJQUFMLEdBQVksT0FBdkIsQ0FBRCxDQUFWLEdBQTRDLEVBQTlFLEdBQW1GLEtBQS9GO0FBQ0EsY0FBSSxNQUFNLEdBQUksT0FBTyxFQUFFLENBQUMsT0FBSCxDQUFXLE1BQUksQ0FBQyxJQUFMLEdBQVksUUFBdkIsQ0FBUCxLQUE0QyxRQUE3QyxHQUF5RCxFQUFFLENBQUMsT0FBSCxDQUFXLE1BQUksQ0FBQyxJQUFMLEdBQVksUUFBdkIsRUFBaUMsS0FBakMsQ0FBdUMsR0FBdkMsQ0FBekQsR0FBdUcsS0FBcEg7QUFFQSxjQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsT0FBSCxDQUFXLE1BQUksQ0FBQyxJQUFMLEdBQVksUUFBdkIsQ0FBYjtBQUNBLGNBQUksUUFBSjs7QUFFQSxjQUFHLE1BQU0sS0FBSyxTQUFkLEVBQXlCO0FBQ3JCLFlBQUEsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULFdBQTBCLE1BQTFCLEVBQVg7QUFDSCxXQUZELE1BRU87QUFDSCxZQUFBLFFBQVEsR0FBRyxFQUFYO0FBQ0g7O0FBRUQsY0FBRyxDQUFDLE1BQUksQ0FBQyxRQUFMLENBQWMsQ0FBZCxFQUFpQixNQUFyQixFQUE2QjtBQUN6QixZQUFBLEdBQUcsR0FBRyxRQUFRLENBQUMscUJBQVQsR0FBaUMsR0FBakMsR0FBdUMsNkJBQWEsTUFBSSxDQUFDLFFBQUwsQ0FBYyxDQUFkLEVBQWlCLEVBQTlCLEVBQWtDLENBQXpFLEdBQTZFLDZCQUFhLFFBQWIsRUFBdUIsQ0FBMUc7QUFDSCxXQUZELE1BRU87QUFDSCxZQUFBLEdBQUcsR0FBRyxRQUFRLENBQUMscUJBQVQsR0FBaUMsR0FBakMsR0FBdUMsTUFBSSxDQUFDLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQTVELEdBQWdFLDZCQUFhLFFBQWIsRUFBdUIsQ0FBN0Y7QUFDSDs7QUFFRCxjQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLFlBQTVCO0FBQ0EsY0FBSSxNQUFNLEdBQUksQ0FBQyxNQUFNLEdBQUcsR0FBVixJQUFpQixDQUFsQixHQUF1QixHQUFwQzs7QUFFQSxjQUFHLE1BQUgsRUFBVztBQUNQLFlBQUEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFkO0FBQ0EsWUFBQSxNQUFNLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxZQUFmLEdBQThCLE1BQU0sQ0FBQyxXQUFyQyxHQUFtRCxFQUFFLENBQUMsWUFBL0Q7QUFDQSxZQUFBLE1BQU0sR0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFWLElBQWlCLENBQWxCLEdBQXVCLEdBQWhDO0FBQ0g7O0FBRUQsY0FBRyxNQUFNLElBQUksT0FBYixFQUFzQjtBQUNsQixZQUFBLE1BQU0sR0FBRyxLQUFUO0FBQ0gsV0FGRCxNQUVPLElBQUksTUFBTSxJQUFJLFNBQWQsRUFBeUI7QUFDNUIsWUFBQSxNQUFNLEdBQUcsSUFBVDtBQUNILFdBRk0sTUFFQTtBQUNILFlBQUEsTUFBTSxHQUFHLE1BQUksQ0FBQyxNQUFkO0FBQ0g7O0FBRUQsY0FBSSxjQUFjLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFyQjs7QUFDQSxjQUFHLE1BQUgsRUFBVztBQUNQLGlCQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUEzQixFQUFtQyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLGtCQUFHLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxRQUFWLENBQW1CLEdBQW5CLENBQUgsRUFBNEI7QUFDeEIsZ0JBQUEsY0FBYyxDQUFDLENBQUQsQ0FBZCxHQUFvQixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLE9BQVYsQ0FBa0IsR0FBbEIsRUFBc0IsRUFBdEIsSUFBNEIsTUFBSSxDQUFDLFlBQWpDLEdBQWdELEdBQWpELENBQTVCO0FBQ0gsZUFGRCxNQUVPO0FBQ0gsZ0JBQUEsY0FBYyxDQUFDLENBQUQsQ0FBZCxHQUFvQixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUQsQ0FBUCxDQUE1QjtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxjQUFNLFFBQVEsR0FBRztBQUNiLFlBQUEsRUFBRSxFQUFGLEVBRGE7QUFFYixxQkFBTyxFQUZNO0FBR2IsWUFBQSxHQUFHLEVBQUUsR0FBRyxHQUFHLGNBQWMsQ0FBQyxDQUFELENBSFo7QUFJYixZQUFBLE1BQU0sRUFBTixNQUphO0FBS2IsWUFBQSxNQUFNLEVBQUUsTUFBTSxHQUFHLGNBQWMsQ0FBQyxDQUFELENBTGxCO0FBTWIsWUFBQSxNQUFNLEVBQU4sTUFOYTtBQU9iLFlBQUEsTUFBTSxFQUFOLE1BUGE7QUFRYixZQUFBLE1BQU0sRUFBRSxLQVJLO0FBU2IsWUFBQSxJQUFJLEVBQUosSUFUYTtBQVViLFlBQUEsS0FBSyxFQUFMLEtBVmE7QUFXYixZQUFBLEtBQUssRUFBTCxLQVhhO0FBWWIsWUFBQSxRQUFRLEVBQVIsUUFaYTtBQWFiLFlBQUEsTUFBTSxFQUFFLFFBYks7QUFjYixZQUFBLFNBQVMsRUFBVCxTQWRhO0FBZWIsWUFBQSxNQUFNLEVBQU47QUFmYSxXQUFqQjs7QUFrQkEsVUFBQSxNQUFJLENBQUMsR0FBTCxDQUFTLElBQVQsQ0FBYyxRQUFkOztBQUVBLGNBQUcsS0FBSyxLQUFLLEtBQVYsSUFBbUIsTUFBdEIsRUFBOEI7QUFDMUIsWUFBQSxNQUFJLENBQUMsZ0JBQUwsQ0FBc0IsSUFBdEIsQ0FBMkIsUUFBM0I7QUFDSDtBQUNKLFNBOUVEO0FBZ0ZILE9BbkZEO0FBb0ZIOzs7a0NBRWE7QUFBQTs7QUFDVixXQUFLLFFBQUwsR0FBZ0IsRUFBaEI7QUFFQSxVQUFNLFFBQVEsR0FBRyxLQUFLLEVBQUwsQ0FBUSxnQkFBUixpQkFBa0MsS0FBSyxJQUF2QyxlQUFqQjtBQUVBLE1BQUEsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsVUFBQyxPQUFELEVBQVUsQ0FBVixFQUFnQjtBQUM3QixZQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQVIsR0FBZ0MsR0FBaEMsR0FBdUMsTUFBTSxDQUFDLFdBQVAsR0FBcUIsR0FBNUQsR0FBbUUsNkJBQWEsT0FBYixFQUFzQixDQUF0RztBQUNBLFlBQUksS0FBSyxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQVIsR0FBZ0MsTUFBekMsR0FBbUQsTUFBTSxDQUFDLFdBQVAsR0FBcUIsQ0FBcEY7QUFDQSxZQUFJLFVBQVUsR0FBRyxPQUFPLE9BQU8sQ0FBQyxPQUFSLENBQWdCLE1BQUksQ0FBQyxJQUFMLEdBQVksWUFBNUIsQ0FBUCxLQUFxRCxRQUF0RTtBQUVBLFlBQUksTUFBTSxHQUFHLEtBQWI7O0FBQ0EsWUFBRyxNQUFJLENBQUMsUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBckIsSUFBMEIsTUFBMUIsSUFBb0MsTUFBSSxDQUFDLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXJCLElBQTBCLEtBQWpFLEVBQXdFO0FBQ3BFLFVBQUEsTUFBTSxHQUFHLElBQVQ7QUFDSDs7QUFFRCxZQUFNLGFBQWEsR0FBRztBQUNsQixVQUFBLEVBQUUsRUFBRSxPQURjO0FBRWxCLFVBQUEsTUFBTSxFQUFFLE1BRlU7QUFHbEIsVUFBQSxLQUFLLEVBQUUsS0FIVztBQUlsQixVQUFBLE1BQU0sRUFBRSxNQUpVO0FBS2xCLFVBQUEsVUFBVSxFQUFFO0FBTE0sU0FBdEI7QUFRQSxRQUFBLE1BQUksQ0FBQyxRQUFMLENBQWMsQ0FBZCxJQUFtQixhQUFuQjtBQUNILE9BbkJEO0FBb0JIOzs7OEJBRVMsTyxFQUFTLEMsRUFBRyxDLEVBQUcsSyxFQUFPO0FBQzVCLFVBQUksU0FBSjs7QUFFQSxVQUFHLENBQUMsS0FBSixFQUFXO0FBQ1AsUUFBQSxTQUFTLDRCQUFxQixDQUFyQixjQUEwQixDQUExQixNQUFUO0FBRUgsT0FIRCxNQUdPO0FBQ0gsWUFBSSxLQUFLLEdBQUcsNkJBQWEsT0FBYixDQUFaO0FBQ0EsWUFBSSxLQUFLLEdBQUcsaUJBQUssS0FBSyxDQUFDLENBQVgsRUFBYyxDQUFkLEVBQWlCLEtBQWpCLENBQVo7QUFDQSxZQUFJLEtBQUssR0FBRyxpQkFBSyxLQUFLLENBQUMsQ0FBWCxFQUFjLENBQWQsRUFBaUIsS0FBakIsQ0FBWjtBQUVBLFFBQUEsU0FBUyw0QkFBcUIsS0FBckIsY0FBOEIsS0FBOUIsTUFBVDtBQUNIOztBQUVELE1BQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxlQUFkLEdBQWdDLFNBQWhDO0FBQ0EsTUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLFdBQWQsR0FBNEIsU0FBNUI7QUFDQSxNQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsU0FBZCxHQUEwQixTQUExQjtBQUNIOzs7c0NBRWlCLFEsRUFBVTtBQUFBOztBQUN4QixVQUFNLFlBQVksR0FBRyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEdBQXlCLEtBQUssWUFBbkQ7QUFDQSxVQUFNLFlBQVksR0FBRyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEdBQXlCLEtBQUssWUFBbkQ7QUFFQSxXQUFLLGdCQUFMLENBQXNCLE9BQXRCLENBQThCLFVBQUMsT0FBRCxFQUFVLENBQVYsRUFBZ0I7QUFDMUMsWUFBSSxpQkFBaUIsR0FBRyxLQUF4Qjs7QUFFQSxZQUFJLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUF6QixFQUFrQztBQUM5QixVQUFBLGlCQUFpQixHQUFHLENBQXBCO0FBQ0g7O0FBRUQsWUFBRyxPQUFPLENBQUMsTUFBWCxFQUFtQjtBQUNmLGtCQUFRLE9BQU8sQ0FBQyxRQUFoQjtBQUNJLGlCQUFLLEtBQUw7QUFDSSxjQUFBLGlCQUFpQixHQUFHLE1BQUksQ0FBQyxRQUFMLENBQWMsTUFBZCxDQUFxQixDQUFyQixHQUF5QixDQUFDLE9BQU8sQ0FBQyxLQUF0RDtBQUNKOztBQUVBLGlCQUFLLFFBQUw7QUFDSSxjQUFBLGlCQUFpQixHQUFHLENBQUMsTUFBSSxDQUFDLFFBQUwsQ0FBYyxLQUFkLEdBQXNCLFlBQXRCLEdBQXFDLE1BQUksQ0FBQyxZQUEzQyxJQUEyRCxPQUFPLENBQUMsS0FBdkY7QUFDSjs7QUFFQTtBQUNJLGNBQUEsaUJBQWlCLEdBQUcsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQXhCLElBQWtDLENBQUMsT0FBTyxDQUFDLEtBQS9EO0FBQ0o7QUFYSjtBQWFIOztBQUVELFlBQUcsT0FBTyxDQUFDLE1BQVgsRUFBbUI7QUFDZixjQUFHLE9BQU8sQ0FBQyxNQUFYLEVBQW1CO0FBQ2YsWUFBQSxpQkFBaUIsR0FBRyxNQUFJLENBQUMsUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBckIsR0FBeUIsT0FBTyxDQUFDLEdBQWpDLEdBQXVDLE1BQU0sQ0FBQyxXQUFsRTtBQUNILFdBRkQsTUFFTztBQUNILGdCQUFHLE1BQUksQ0FBQyxRQUFMLENBQWMsTUFBZCxDQUFxQixDQUFyQixHQUF5QixPQUFPLENBQUMsR0FBcEMsRUFBeUM7QUFDckMsY0FBQSxpQkFBaUIsR0FBRyxDQUFwQjtBQUNIOztBQUNELGdCQUFHLE1BQUksQ0FBQyxRQUFMLENBQWMsTUFBZCxDQUFxQixDQUFyQixHQUF5QixPQUFPLENBQUMsTUFBcEMsRUFBNEM7QUFDeEMsY0FBQSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsTUFBUixHQUFpQixPQUFPLENBQUMsR0FBekIsR0FBK0IsTUFBTSxDQUFDLFdBQTFEO0FBQ0g7QUFDSjtBQUNKOztBQUVELFlBQUcsaUJBQWlCLEtBQUssS0FBekIsRUFBZ0M7QUFDNUIsY0FBRyxPQUFPLENBQUMsU0FBUixLQUFzQixZQUF6QixFQUF1QztBQUNuQyxZQUFBLE1BQUksQ0FBQyxTQUFMLENBQWUsT0FBTyxDQUFDLEVBQXZCLEVBQTJCLGlCQUEzQixFQUE4QyxDQUE5QyxFQUFrRCxRQUFRLEdBQUcsS0FBSCxHQUFXLE9BQU8sQ0FBQyxLQUE3RTtBQUNILFdBRkQsTUFFTztBQUNILFlBQUEsTUFBSSxDQUFDLFNBQUwsQ0FBZSxPQUFPLENBQUMsRUFBdkIsRUFBMkIsQ0FBM0IsRUFBOEIsaUJBQTlCLEVBQWtELFFBQVEsR0FBRyxLQUFILEdBQVcsT0FBTyxDQUFDLEtBQTdFO0FBQ0g7QUFDSjtBQUVKLE9BNUNEO0FBNkNIO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFlUyxZLEVBQWMsWSxFQUFjO0FBQUE7O0FBQ2pDLFVBQUksTUFBSjtBQUNBLFVBQUksTUFBTSxHQUFHLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBRCxDQUFYLEdBQTRCLENBQXJEOztBQUVBLFVBQUcsT0FBTyxZQUFQLEtBQXdCLFFBQTNCLEVBQXFDO0FBRWpDLFlBQUcsWUFBWSxLQUFLLEtBQXBCLEVBQTJCO0FBQ3ZCLFVBQUEsTUFBTSxHQUFHLENBQVQ7QUFDSCxTQUZELE1BRU8sSUFBRyxZQUFZLEtBQUssUUFBcEIsRUFBOEI7QUFDakMsVUFBQSxNQUFNLEdBQUcsS0FBSyxRQUFMLENBQWMsS0FBdkI7QUFDSCxTQUZNLE1BRUE7QUFDSCxVQUFBLE1BQU0sR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsWUFBMUIsRUFBd0MsQ0FBeEMsQ0FBVDtBQUNIO0FBRUosT0FWRCxNQVVPLElBQUcsQ0FBQyxZQUFZLENBQUMsTUFBakIsRUFBeUI7QUFDNUIsUUFBQSxNQUFNLEdBQUcsWUFBVDtBQUNILE9BaEJnQyxDQWtCakM7OztBQUNBLFVBQUksTUFBSixFQUFZO0FBQ1I7QUFDQSxZQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMscUJBQVAsRUFBbEI7QUFDQSxZQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBVixHQUFnQixLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXZELENBSFEsQ0FLUjs7QUFDQSxZQUFNLGFBQWEsR0FBRyxzQkFBVyxNQUFYLENBQXRCO0FBQ0EsWUFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDLElBQWQsQ0FBbUIsVUFBQSxTQUFTO0FBQUEsaUJBQUksT0FBSSxDQUFDLFFBQUwsQ0FBYyxJQUFkLENBQW1CLFVBQUEsT0FBTztBQUFBLG1CQUFJLE9BQU8sQ0FBQyxPQUFSLElBQW1CLFNBQXZCO0FBQUEsV0FBMUIsQ0FBSjtBQUFBLFNBQTVCLENBQXRCO0FBQ0EsWUFBSSxtQkFBbUIsR0FBRyxDQUExQjs7QUFDQSxZQUFHLGFBQUgsRUFBa0I7QUFDZCxVQUFBLG1CQUFtQixHQUFHLDZCQUFhLGFBQWIsRUFBNEIsQ0FBbEQsQ0FEYyxDQUNzQztBQUN2RCxTQVhPLENBWVI7OztBQUNBLFFBQUEsTUFBTSxHQUFHLFNBQVMsR0FBRyxNQUFaLEdBQXFCLG1CQUE5QjtBQUNIOztBQUVELFdBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsQ0FBcEIsR0FBd0IsSUFBSSxDQUFDLEdBQUwsQ0FBUyxNQUFULEVBQWlCLEtBQUssUUFBTCxDQUFjLEtBQS9CLENBQXhCLENBbkNpQyxDQW1DOEI7O0FBQy9ELFdBQUssWUFBTCxHQUFvQixJQUFJLENBQUMsR0FBTCxDQUFTLE9BQU8sSUFBSSxDQUFDLEdBQUwsQ0FBUyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLENBQXBCLEdBQXdCLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBdEQsQ0FBaEIsRUFBeUUsR0FBekUsQ0FBcEIsQ0FwQ2lDLENBc0NqQzs7QUFDQSxXQUFLLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxXQUFLLFdBQUw7QUFDQSxNQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsR0FBZixDQUFtQixLQUFLLG9CQUF4QjtBQUNIOzs7OEJBRVM7QUFDTjtBQUNIOzs7O0VBamR3QixpQjs7Ozs7Ozs7Ozs7O0FDUjdCOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7O0FBSUksc0JBQTBCO0FBQUEsUUFBZCxPQUFjLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3RCLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxJQUFBLE1BQU0sQ0FBQyxNQUFQLENBQWMsSUFBZCxFQUFvQixpQkFBcEIsRUFBOEIsT0FBOUI7QUFFQSxTQUFLLElBQUw7QUFDSDs7OzsyQkFFTTtBQUNILFVBQUksQ0FBQyxLQUFLLFlBQVYsRUFBd0I7QUFDcEIsYUFBSyxRQUFMLEdBQWlCLDJEQUEyRCxJQUEzRCxDQUFnRSxTQUFTLENBQUMsU0FBMUUsQ0FBakI7QUFDSDs7QUFFRCxVQUFJLEtBQUssTUFBTCxLQUFnQixJQUFoQixJQUF3QixDQUFDLEtBQUssUUFBbEMsRUFBNEM7QUFDeEMsYUFBSyxNQUFMLEdBQWMsSUFBSSxrQkFBSixDQUFXLEtBQUssT0FBaEIsQ0FBZDtBQUNILE9BRkQsTUFFTztBQUNILGFBQUssTUFBTCxHQUFjLElBQUksa0JBQUosQ0FBVyxLQUFLLE9BQWhCLENBQWQ7QUFDSDs7QUFFRCxXQUFLLE1BQUwsQ0FBWSxJQUFaOztBQUVBLFVBQUcsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsSUFBbkIsRUFBeUI7QUFDckIsYUFBSyxNQUFMLENBQVksUUFBWixDQUFxQixNQUFNLENBQUMsUUFBUCxDQUFnQixJQUFyQztBQUNIO0FBRUo7Ozs4QkFFUztBQUNOLFdBQUssTUFBTCxDQUFZLE9BQVo7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDbENFLElBQU0sUUFBUSxHQUFHO0FBQ3BCLEVBQUEsRUFBRSxFQUFFLFFBRGdCO0FBRXBCLEVBQUEsUUFBUSxFQUFFLFFBRlU7QUFHcEIsRUFBQSxJQUFJLEVBQUUsUUFIYztBQUlwQixFQUFBLE1BQU0sRUFBRSxDQUpZO0FBS3BCLEVBQUEsTUFBTSxFQUFFLEtBTFk7QUFNcEIsRUFBQSxNQUFNLEVBQUUsS0FOWTtBQU9wQixFQUFBLFlBQVksRUFBRSxLQVBNO0FBUXBCLEVBQUEsU0FBUyxFQUFFLFVBUlM7QUFTcEIsRUFBQSxPQUFPLEVBQUUsQ0FUVztBQVVwQixXQUFPLFdBVmE7QUFXcEIsRUFBQSxjQUFjLEVBQUUsYUFYSTtBQVlwQixFQUFBLGNBQWMsRUFBRSxjQVpJO0FBYXBCLEVBQUEsYUFBYSxFQUFFLGFBYks7QUFjcEIsRUFBQSxXQUFXLEVBQUU7QUFkTyxDQUFqQjs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7OztBQUdPLFNBQVMsVUFBVCxDQUFvQixHQUFwQixFQUF5QjtBQUM1QixTQUFPLEdBQUcsQ0FDTCxPQURFLENBQ00sSUFETixFQUNZLE9BRFosRUFFRixPQUZFLENBRU0sSUFGTixFQUVZLE1BRlosRUFHRixPQUhFLENBR00sSUFITixFQUdZLE1BSFosQ0FBUDtBQUlIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTLFlBQVQsQ0FBc0IsR0FBdEIsRUFBMkI7QUFDOUIsU0FBTyxHQUFHLENBQ0wsT0FERSxDQUNNLE9BRE4sRUFDZSxHQURmLEVBRUYsT0FGRSxDQUVNLE9BRk4sRUFFZSxHQUZmLEVBR0YsT0FIRSxDQUdNLFFBSE4sRUFHZ0IsR0FIaEIsQ0FBUDtBQUlIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTLFdBQVQsQ0FBcUIsSUFBckIsRUFBMkI7QUFDOUI7QUFDQSxNQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBdEIsQ0FGOEIsQ0FJOUI7O0FBQ0EsTUFBSSxPQUFPLEdBQUcsY0FBZCxDQUw4QixDQU85Qjs7QUFDQSxNQUFJLElBQUksR0FBRyxFQUFYOztBQUVBLE9BQUssSUFBSSxDQUFULElBQWMsVUFBZCxFQUEwQjtBQUN0QixRQUFJLENBQUMsVUFBVSxDQUFDLENBQUQsQ0FBZixFQUFvQjtBQUNoQjtBQUNILEtBSHFCLENBS3RCOzs7QUFDQSxRQUFJLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWMsSUFBekIsQ0FOc0IsQ0FRdEI7O0FBQ0EsUUFBSSxDQUFDLElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBRUQsUUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLENBQVo7O0FBQ0EsUUFBSSxDQUFDLEtBQUwsRUFBWTtBQUNSO0FBQ0gsS0FoQnFCLENBa0J0QjtBQUNBOzs7QUFDQSxJQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQUosR0FBaUIsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBakI7QUFDSDs7QUFFRCxTQUFPLElBQVA7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBUyxVQUFULENBQW9CLElBQXBCLEVBQTBCO0FBQzdCO0FBQ0EsTUFBSSxPQUFPLEdBQUcsRUFBZCxDQUY2QixDQUk3Qjs7QUFDQSxTQUFRLElBQUksSUFBSSxJQUFJLEtBQUssUUFBekIsRUFBbUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUEvQyxFQUE0RDtBQUN4RCxJQUFBLE9BQU8sQ0FBQyxJQUFSLENBQWEsSUFBYjtBQUNILEdBUDRCLENBUzdCOzs7QUFDQSxTQUFPLE9BQVA7QUFDSCxDLENBRUQ7OztBQUNPLFNBQVMsa0JBQVQsQ0FBNEIsSUFBNUIsRUFBa0MsUUFBbEMsRUFBNEM7QUFFL0M7QUFDQSxNQUFJLENBQUMsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsT0FBdkIsRUFBZ0M7QUFDNUIsSUFBQSxPQUFPLENBQUMsU0FBUixDQUFrQixPQUFsQixHQUNJLE9BQU8sQ0FBQyxTQUFSLENBQWtCLGVBQWxCLElBQ0EsT0FBTyxDQUFDLFNBQVIsQ0FBa0Isa0JBRGxCLElBRUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsaUJBRmxCLElBR0EsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsZ0JBSGxCLElBSUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IscUJBSmxCLElBS0EsVUFBUyxDQUFULEVBQVk7QUFDUixVQUFJLE9BQU8sR0FBRyxDQUFDLEtBQUssUUFBTCxJQUFpQixLQUFLLGFBQXZCLEVBQXNDLGdCQUF0QyxDQUF1RCxDQUF2RCxDQUFkO0FBQUEsVUFDSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BRGhCOztBQUVBLGFBQU8sRUFBRSxDQUFGLElBQU8sQ0FBUCxJQUFZLE9BQU8sQ0FBQyxJQUFSLENBQWEsQ0FBYixNQUFvQixJQUF2QyxFQUE2QyxDQUFFOztBQUMvQyxhQUFPLENBQUMsR0FBRyxDQUFDLENBQVo7QUFDSCxLQVhMO0FBWUgsR0FoQjhDLENBa0IvQzs7O0FBQ0EsU0FBUSxJQUFJLElBQUksSUFBSSxLQUFLLFFBQXpCLEVBQW1DLElBQUksR0FBRyxJQUFJLENBQUMsVUFBL0MsRUFBNEQ7QUFDeEQsUUFBSyxJQUFJLENBQUMsT0FBTCxDQUFjLFFBQWQsQ0FBTCxFQUFnQyxPQUFPLElBQVA7QUFDbkM7O0FBQ0QsU0FBTyxJQUFQO0FBRUg7O0FBQUE7Ozs7Ozs7Ozs7QUMxR00sU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUE4QjtBQUNqQyxTQUFPLENBQUMsSUFBSSxHQUFMLElBQVksS0FBWixHQUFvQixHQUFHLEdBQUcsR0FBakM7QUFDSDs7Ozs7Ozs7Ozs7QUNGTSxTQUFTLFNBQVQsQ0FBbUIsRUFBbkIsRUFBdUIsY0FBdkIsRUFBc0M7QUFDekMsRUFBQSxFQUFFLENBQUMsS0FBSCxDQUFTLGVBQVQsR0FBMkIsY0FBM0I7QUFDQSxFQUFBLEVBQUUsQ0FBQyxLQUFILENBQVMsV0FBVCxHQUF1QixjQUF2QjtBQUNBLEVBQUEsRUFBRSxDQUFDLEtBQUgsQ0FBUyxTQUFULEdBQXFCLGNBQXJCO0FBQ0g7O0FBRU0sU0FBUyxZQUFULENBQXNCLEVBQXRCLEVBQXlCO0FBQzVCLE1BQU0sU0FBUyxHQUFHLEVBQWxCO0FBQ0EsTUFBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBWCxFQUE2QjtBQUU3QixNQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxFQUFELENBQTlCO0FBQ0EsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQU4sSUFBbUIsS0FBSyxDQUFDLGVBQXpCLElBQTRDLEtBQUssQ0FBQyxZQUFwRTtBQUVBLE1BQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFWLENBQWdCLG9CQUFoQixDQUFWO0FBQ0EsTUFBRyxHQUFILEVBQVEsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPLEtBQVAsQ0FBYSxJQUFiLEVBQW1CLEVBQW5CLENBQUQsQ0FBakI7QUFDUixFQUFBLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBVixDQUFnQixrQkFBaEIsQ0FBTjtBQUNBLEVBQUEsU0FBUyxDQUFDLENBQVYsR0FBYyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBTyxLQUFQLENBQWEsSUFBYixFQUFtQixDQUFuQixDQUFELENBQWIsR0FBdUMsQ0FBeEQ7QUFDQSxFQUFBLFNBQVMsQ0FBQyxDQUFWLEdBQWMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sS0FBUCxDQUFhLElBQWIsRUFBbUIsQ0FBbkIsQ0FBRCxDQUFiLEdBQXVDLENBQXhEO0FBRUEsU0FBTyxTQUFQO0FBQ0g7OztBQ3BCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBsb2NvbW90aXZlU2Nyb2xsIGZyb20gJy4vc2Nyb2xsL3ZlbmRvcnMvbWFpbic7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IHNjcm9sbCA9IG5ldyBsb2NvbW90aXZlU2Nyb2xsKHtcbiAgICAgICAgZWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1zY3JvbGwnKSxcbiAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICBzbW9vdGhNb2JpbGU6IGZhbHNlLFxuICAgICAgICBtb2JpbGVDb250YWluZXI6ICQoZG9jdW1lbnQpLFxuICAgICAgICBpbmVydGlhOiAxLFxuICAgICAgICBzY3JvbGxCYXJDbGFzc05hbWU6ICdvLXNjcm9sbGJhcicsXG4gICAgICAgIGlzU2Nyb2xsaW5nQ2xhc3NOYW1lOiAnaXMtc2Nyb2xsaW5nJyxcbiAgICAgICAgaXNEcmFnZ2luZ0NsYXNzTmFtZTogJ2lzLWRyYWdnaW5nJyxcbiAgICAgICAgb25TY3JvbGw6IChlKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnNjcm9sbC55KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59KSgpO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEV4dGVuZGVkIExvY29tb3RpdmUgU2Nyb2xsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0IE5hdGl2ZSBmcm9tICcuL3ZlbmRvcnMvTmF0aXZlJ1xuXG4vKipcbiAqIFVOQ09NTUVOVCBPTkxZIFRIRSBMSU5FUyBZT1UgTkVFRFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgTmF0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEV4dGVuZGVkIExvY29tb3RpdmUgU21vb3RoIFNjcm9sbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCBTbW9vdGggZnJvbSAnLi92ZW5kb3JzL1Ntb290aCdcblxuLyoqXG4gKiBVTkNPTU1FTlQgT05MWSBUSEUgTElORVMgWU9VIE5FRURcbiAqL1xuLy8gaW1wb3J0IHZpcnR1YWxTY3JvbGwgZnJvbSAndmlydHVhbC1zY3JvbGwnO1xuLy8gaW1wb3J0IENvcmUgZnJvbSAnLi9Db3JlJztcbi8vIGltcG9ydCB7IGxlcnAgfSBmcm9tICcuLi91dGlscy9tYXRocydcbi8vIGltcG9ydCB7IGdldFRyYW5zbGF0ZSB9IGZyb20gJy4uL3V0aWxzL3RyYW5zZm9ybSdcbi8vIGltcG9ydCB7IGdldFBhcmVudHMsIHF1ZXJ5Q2xvc2VzdFBhcmVudCB9IGZyb20gJy4uL3V0aWxzL2h0bWwnO1xuXG4vLyBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFNtb290aCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi9vcHRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLm5hbWVzcGFjZSA9ICdsb2NvbW90aXZlJztcbiAgICAgICAgdGhpcy5odG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuZWxzID0gW107XG5cbiAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGwgPSB0aGlzLmNoZWNrU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tSZXNpemUgPSB0aGlzLmNoZWNrUmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IHtcbiAgICAgICAgICAgIHNjcm9sbDoge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG51bGwsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNoZWNrUmVzaXplLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLy8gY2hlY2tTY3JvbGwoKSB7fVxuXG4gICAgLy8gY2hlY2tSZXNpemUoKSB7fVxuXG4gICAgaW5pdEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0VscyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtJHt0aGlzLm5hbWV9LXRvXWApO1xuICAgICAgICB0aGlzLnNldFNjcm9sbFRvID0gdGhpcy5zZXRTY3JvbGxUby5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9FbHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZXRTY3JvbGxUbywgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRTY3JvbGxUbyhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8oXG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShgZGF0YS0ke3RoaXMubmFtZX0taHJlZmApIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyksXG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShgZGF0YS0ke3RoaXMubmFtZX0tb2Zmc2V0YClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBhZGRFbGVtZW50cygpIHt9XG5cbiAgICBkZXRlY3RFbGVtZW50cygpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsQm90dG9tID0gc2Nyb2xsVG9wICsgdGhpcy53aW5kb3dIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5lbHMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgIGlmICghZWwuaW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgaWYgKChzY3JvbGxCb3R0b20gPj0gZWwudG9wKSAmJiAoc2Nyb2xsVG9wIDwgZWwuYm90dG9tKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEluVmlldyhlbCwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZWwuaW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgaWYgKChzY3JvbGxCb3R0b20gPCBlbC50b3ApIHx8IChzY3JvbGxUb3AgPiBlbC5ib3R0b20pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0T3V0T2ZWaWV3KGVsLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldEluVmlldyhjdXJyZW50LCBpKSB7XG4gICAgICAgIHRoaXMuZWxzW2ldLmluVmlldyA9IHRydWU7XG4gICAgICAgIGN1cnJlbnQuZWwuY2xhc3NMaXN0LmFkZChjdXJyZW50LmNsYXNzKTtcblxuICAgICAgICBpZiAoY3VycmVudC5jYWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxWYWx1ZSA9IGN1cnJlbnQuY2FsbC5zcGxpdCgnLCcpLm1hcChpdGVtID0+IGl0ZW0udHJpbSgpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbGxWYWx1ZS5sZW5ndGggPT0gMSkgdGhpcy5jYWxsVmFsdWUgPSB0aGlzLmNhbGxWYWx1ZVswXTtcblxuICAgICAgICAgICAgY29uc3QgY2FsbEV2ZW50ID0gbmV3IEV2ZW50KHRoaXMubmFtZXNwYWNlICsgJ2NhbGwnKTtcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGNhbGxFdmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWN1cnJlbnQucmVwZWF0ICYmIGN1cnJlbnQuc3BlZWQgPT09IGZhbHNlICYmICFjdXJyZW50LnN0aWNreSApe1xuICAgICAgICAgICAgdGhpcy5lbHMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0T3V0T2ZWaWV3KGN1cnJlbnQsIGkpIHtcbiAgICAgICAgaWYoY3VycmVudC5yZXBlYXQgfHwgY3VycmVudC5zcGVlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVsc1tpXS5pblZpZXcgPSBmYWxzZTtcbiAgICAgICAgICAgIGN1cnJlbnQuZWwuY2xhc3NMaXN0LnJlbW92ZShjdXJyZW50LmNsYXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLmVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9wID0gZWwuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbSA9IHRvcCArIGVsLmVsLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgdGhpcy5lbHNbaV0udG9wID0gdG9wICsgZWwub2Zmc2V0O1xuICAgICAgICAgICAgdGhpcy5lbHNbaV0uYm90dG9tID0gYm90dG9tO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICB9XG5cblxuICAgIG9uKGV2ZW50LCBmdW5jKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZXNwYWNlICsgZXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjYWxsJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmModGhpcy5jYWxsVmFsdWUpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jaGVja1Jlc2l6ZSwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9FbHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZXRTY3JvbGxUbywgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29yZSBmcm9tICcuL0NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvcmUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jaGVja1Njcm9sbCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcblxuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgfVxuXG4gICAgY2hlY2tTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzU2Nyb2xsVGlja2luZykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tSZXNpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgICBpZighdGhpcy5oYXNTY3JvbGxUaWNraW5nKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50cygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgY29uc3QgZWxzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS0nK3RoaXMubmFtZSsnXScpO1xuXG4gICAgICAgIGVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNsID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnQ2xhc3MnXSB8fCB0aGlzLmNsYXNzO1xuICAgICAgICAgICAgbGV0IHRvcCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgICAgICBsZXQgYm90dG9tID0gdG9wICsgZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHBhcnNlSW50KGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ09mZnNldCddKSB8fCBwYXJzZUludCh0aGlzLm9mZnNldCk7XG4gICAgICAgICAgICBsZXQgcmVwZWF0ID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnUmVwZWF0J107XG4gICAgICAgICAgICBsZXQgY2FsbCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0NhbGwnXTtcblxuICAgICAgICAgICAgaWYocmVwZWF0ID09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVwZWF0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRoaXMucmVwZWF0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVsc1tpXSA9IHtcbiAgICAgICAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgICAgICAgY2xhc3M6IGNsLFxuICAgICAgICAgICAgICAgIHRvcDogdG9wICsgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgICAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgICAgICAgICAgIGluVmlldzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2FsbDogY2FsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIGRlc2lyZWQgdGFyZ2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzY3JvbGxUbyh0YXJnZXRPcHRpb24sIG9mZnNldE9wdGlvbikge1xuICAgICAgICBsZXQgdGFyZ2V0O1xuICAgICAgICBsZXQgb2Zmc2V0ID0gb2Zmc2V0T3B0aW9uID8gcGFyc2VJbnQob2Zmc2V0T3B0aW9uKSA6IDA7XG5cbiAgICAgICAgaWYodHlwZW9mIHRhcmdldE9wdGlvbiA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgICAgICAgaWYodGFyZ2V0T3B0aW9uID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuaHRtbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZih0YXJnZXRPcHRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gZG9jdW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuaHRtbC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6IFwiZW5kXCIsIGlubGluZTogXCJuZWFyZXN0XCJ9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldE9wdGlvbilbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmKCF0YXJnZXRPcHRpb24udGFyZ2V0KSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRPcHRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICBvZmZzZXQgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgb2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnfSk7XG4gICAgfVxuXG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG5cbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hlY2tTY3JvbGwsIGZhbHNlKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB2aXJ0dWFsU2Nyb2xsIGZyb20gJ3ZpcnR1YWwtc2Nyb2xsJztcbmltcG9ydCBDb3JlIGZyb20gJy4vQ29yZSc7XG5pbXBvcnQgeyBsZXJwIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0aHMnXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGUgfSBmcm9tICcuLi8uLi91dGlscy90cmFuc2Zvcm0nXG5pbXBvcnQgeyBnZXRQYXJlbnRzLCBxdWVyeUNsb3Nlc3RQYXJlbnQgfSBmcm9tICcuLi8uLi91dGlscy9odG1sJztcblxuY29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb3JlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbmVydGlhID0gdGhpcy5pbmVydGlhICogMC4xO1xuICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVGlja2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuaW5lcnRpYVJhdGlvID0gMTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQodGhpcy5zbW9vdGhDbGFzcyk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IHtcbiAgICAgICAgICAgIHZzOiBuZXcgdmlydHVhbFNjcm9sbCh7XG4gICAgICAgICAgICAgICAgbW91c2VNdWx0aXBsaWVyOiAobmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoJ1dpbicpID4gLTEpID8gMSA6IDAuNCxcbiAgICAgICAgICAgICAgICB0b3VjaE11bHRpcGxpZXI6IDQsXG4gICAgICAgICAgICAgICAgZmlyZWZveE11bHRpcGxpZXI6IDMwXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGRlbHRhOiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4udGhpcy5pbnN0YW5jZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZS52cy5vbigoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVGlja2luZyAmJiAhdGhpcy5pc0RyYWdnaW5nU2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2Nyb2xsaW5nKSB0aGlzLnN0YXJ0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZWx0YShlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzVGlja2luZyA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFNjcm9sbExpbWl0KCk7XG4gICAgICAgIHRoaXMuaW5pdFNjcm9sbEJhcigpO1xuICAgICAgICB0aGlzLmFkZFNlY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5kZXRlY3RFbGVtZW50cygpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKHRydWUpO1xuXG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICB9XG5cbiAgICBzZXRTY3JvbGxMaW1pdCgpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5saW1pdCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0IC0gdGhpcy53aW5kb3dIZWlnaHQ7XG4gICAgfVxuXG4gICAgc3RhcnRTY3JvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsKCk7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLnNjcm9sbGluZ0NsYXNzKTtcbiAgICB9XG5cbiAgICBzdG9wU2Nyb2xsaW5nKCkge1xuICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5lcnRpYVJhdGlvID0gMTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IE1hdGgucm91bmQodGhpcy5pbnN0YW5jZS5zY3JvbGwueSk7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNjcm9sbGluZ0NsYXNzKTtcbiAgICB9XG5cbiAgICBjaGVja1Njcm9sbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTY3JvbGxpbmcgfHwgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzU2Nyb2xsVGlja2luZykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PsKgdGhpcy5jaGVja1Njcm9sbCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IChNYXRoLmFicyh0aGlzLmluc3RhbmNlLmRlbHRhLnkgLSB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSk7XG4gICAgICAgICAgICBpZiAoKGRpc3RhbmNlIDwgMC45ICYmIHRoaXMuaW5zdGFuY2UuZGVsdGEueSAhPSAwKSB8fCAoZGlzdGFuY2UgPCAwLjUgJiYgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID09IDApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNlY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnNlY3Rpb25zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc2VjdGlvbnNbaV0ucGVyc2lzdGVudCB8fCAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+IHRoaXMuc2VjdGlvbnNbaV0ub2Zmc2V0ICYmIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPCB0aGlzLnNlY3Rpb25zW2ldLmxpbWl0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5zZWN0aW9uc1tpXS5lbCwgMCwgLXRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXS5lbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXS5pblZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXS5lbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zW2ldLmluVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5zZWN0aW9uc1tpXS5lbCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdldERpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGlyZWN0aW9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdldFNwZWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTcGVlZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kZXRlY3RFbGVtZW50cygpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cygpO1xuXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxCYXJUcmFuc2xhdGlvbiA9ICh0aGlzLmluc3RhbmNlLnNjcm9sbC55IC8gdGhpcy5pbnN0YW5jZS5saW1pdCkgKiB0aGlzLnNjcm9sbEJhckxpbWl0O1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5zY3JvbGxiYXJUaHVtYiwgMCwgc2Nyb2xsQmFyVHJhbnNsYXRpb24pO1xuXG4gICAgICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrUmVzaXplKCkge1xuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG5cbiAgICAgICAgdGhpcy5zZXRTY3JvbGxMaW1pdCgpO1xuICAgICAgICB0aGlzLmFkZFNlY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5kZXRlY3RFbGVtZW50cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKHRydWUpO1xuICAgIH1cblxuICAgIHVwZGF0ZURlbHRhKGUpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YS55IC09IGUuZGVsdGFZO1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55IDwgMCkgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0gMDtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA+IHRoaXMuaW5zdGFuY2UubGltaXQpIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IHRoaXMuaW5zdGFuY2UubGltaXQ7XG4gICAgfVxuXG4gICAgdXBkYXRlU2Nyb2xsKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Njcm9sbGluZykge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IGxlcnAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSwgdGhpcy5pbnN0YW5jZS5kZWx0YS55LCB0aGlzLmluZXJ0aWEgKiB0aGlzLmluZXJ0aWFSYXRpbyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gbGVycCh0aGlzLmluc3RhbmNlLnNjcm9sbC55LCB0aGlzLmluc3RhbmNlLmRlbHRhLnksICh0aGlzLmluZXJ0aWEgKiAyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gdGhpcy5pbnN0YW5jZS5kZWx0YS55O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55ID4gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA8IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U3BlZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgIT0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuc3BlZWQgPSAodGhpcy5pbnN0YW5jZS5kZWx0YS55IC0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkgLyAoRGF0ZS5ub3coKSAtIHRoaXMudGltZXN0YW1wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnNwZWVkID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRTY3JvbGxCYXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aGlzLnNjcm9sbGJhclRodW1iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5jbGFzc0xpc3QuYWRkKGAke3RoaXMuc2Nyb2xsYmFyQ2xhc3N9YCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyVGh1bWIuY2xhc3NMaXN0LmFkZChgJHt0aGlzLnNjcm9sbGJhckNsYXNzfV90aHVtYmApO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLmFwcGVuZCh0aGlzLnNjcm9sbGJhclRodW1iKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5zY3JvbGxiYXIpO1xuICAgICAgICB0aGlzLnNjcm9sbGJhclRodW1iLnN0eWxlLmhlaWdodCA9IGAkeyh3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gdGhpcy5pbnN0YW5jZS5saW1pdH1weGA7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmFyTGltaXQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLnNjcm9sbGJhclRodW1iLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgICAgICB0aGlzLnNjcm9sbGJhclRodW1iLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsKGUpID0+IHRoaXMuZ2V0U2Nyb2xsQmFyKGUpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLChlKSA9PiB0aGlzLnJlbGVhc2VTY3JvbGxCYXIoZSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywoZSkgPT4gdGhpcy5tb3ZlU2Nyb2xsQmFyKGUpKTtcbiAgICB9XG5cbiAgICByZWluaXRTY3JvbGxCYXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyVGh1bWIuc3R5bGUuaGVpZ2h0ID0gYCR7KHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyB0aGlzLmluc3RhbmNlLmxpbWl0fXB4YDtcbiAgICAgICAgdGhpcy5zY3JvbGxCYXJMaW1pdCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuc2Nyb2xsYmFyVGh1bWIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cblxuICAgIGRlc3Ryb3lTY3JvbGxCYXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyVGh1bWIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywoZSkgPT4gdGhpcy5nZXRTY3JvbGxCYXIoZSkpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsKGUpID0+IHRoaXMucmVsZWFzZVNjcm9sbEJhcihlKSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLChlKSA9PiB0aGlzLm1vdmVTY3JvbGxCYXIoZSkpO1xuICAgIH1cblxuICAgIGdldFNjcm9sbEJhcihlKSB7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhciA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGwoKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQodGhpcy5kcmFnZ2luZ0NsYXNzKTtcbiAgICB9XG5cbiAgICByZWxlYXNlU2Nyb2xsQmFyKGUpIHtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsYmFyID0gZmFsc2U7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLnNjcm9sbGluZ0NsYXNzKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZHJhZ2dpbmdDbGFzcyk7XG4gICAgfVxuXG4gICAgbW92ZVNjcm9sbEJhcihlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1RpY2tpbmcgJiYgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB5ID0gKGUuY2xpZW50WSAqIDEwMCAvICh3aW5kb3cuaW5uZXJIZWlnaHQpKSAqIHRoaXMuaW5zdGFuY2UubGltaXQgLyAxMDA7XG5cbiAgICAgICAgICAgICAgICBpZih5ID4gMCAmJiB5IDwgdGhpcy5pbnN0YW5jZS5saW1pdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSB5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkRWxlbWVudHMoKSB7XG4gICAgICAgIHRoaXMuZWxzID0gW11cbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW11cblxuICAgICAgICB0aGlzLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVscyA9IHRoaXMuc2VjdGlvbnNbeV0uZWwucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtJHt0aGlzLm5hbWV9XWApO1xuXG4gICAgICAgICAgICBlbHMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY2wgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdDbGFzcyddIHx8IHRoaXMuY2xhc3M7XG4gICAgICAgICAgICAgICAgbGV0IHRvcDtcbiAgICAgICAgICAgICAgICBsZXQgcmVwZWF0ID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnUmVwZWF0J107XG4gICAgICAgICAgICAgICAgbGV0IGNhbGwgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdDYWxsJ107XG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnUG9zaXRpb24nXTtcbiAgICAgICAgICAgICAgICBsZXQgZGVsYXkgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdEZWxheSddO1xuICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdEaXJlY3Rpb24nXTtcbiAgICAgICAgICAgICAgICBsZXQgc3RpY2t5ID0gdHlwZW9mIGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ1N0aWNreSddID09PSAnc3RyaW5nJztcbiAgICAgICAgICAgICAgICBsZXQgc3BlZWQgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdTcGVlZCddID8gcGFyc2VGbG9hdChlbC5kYXRhc2V0W3RoaXMubmFtZSArICdTcGVlZCddKS8xMCA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAodHlwZW9mIGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ09mZnNldCddID09PSAnc3RyaW5nJykgPyBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdPZmZzZXQnXS5zcGxpdCgnLCcpIDogZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnVGFyZ2V0J107XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldEVsO1xuXG4gICAgICAgICAgICAgICAgaWYodGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3RhcmdldH1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbCA9IGVsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnNlY3Rpb25zW3ldLmluVmlldykge1xuICAgICAgICAgICAgICAgICAgICB0b3AgPSB0YXJnZXRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBnZXRUcmFuc2xhdGUodGhpcy5zZWN0aW9uc1t5XS5lbCkueSAtIGdldFRyYW5zbGF0ZSh0YXJnZXRFbCkueTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b3AgPSB0YXJnZXRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55IC0gZ2V0VHJhbnNsYXRlKHRhcmdldEVsKS55O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBib3R0b20gPSB0b3AgKyB0YXJnZXRFbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgbGV0IG1pZGRsZSA9ICgoYm90dG9tIC0gdG9wKSAvIDIpICsgdG9wO1xuXG4gICAgICAgICAgICAgICAgaWYoc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcCArPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRvcCArIHRhcmdldEVsLm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCAtIGVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbWlkZGxlID0gKChib3R0b20gLSB0b3ApIC8gMikgKyB0b3A7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYocmVwZWF0ID09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXBlYXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gdGhpcy5yZXBlYXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHJlbGF0aXZlT2Zmc2V0ID0gWzAsMF07XG4gICAgICAgICAgICAgICAgaWYob2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2Zmc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvZmZzZXRbaV0uaW5jbHVkZXMoJyUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0W2ldID0gcGFyc2VJbnQob2Zmc2V0W2ldLnJlcGxhY2UoJyUnLCcnKSAqIHRoaXMud2luZG93SGVpZ2h0IC8gMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXRbaV0gPSBwYXJzZUludChvZmZzZXRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbWFwcGVkRWwgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogY2wsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdG9wICsgcmVsYXRpdmVPZmZzZXRbMF0sXG4gICAgICAgICAgICAgICAgICAgIG1pZGRsZSxcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b20gLSByZWxhdGl2ZU9mZnNldFsxXSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICAgICAgICAgIGluVmlldzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbGwsXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkLFxuICAgICAgICAgICAgICAgICAgICBkZWxheSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0RWwsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgc3RpY2t5XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5lbHMucHVzaChtYXBwZWRFbCk7XG5cbiAgICAgICAgICAgICAgICBpZihzcGVlZCAhPT0gZmFsc2UgfHwgc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cy5wdXNoKG1hcHBlZEVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFNlY3Rpb25zKCkge1xuICAgICAgICB0aGlzLnNlY3Rpb25zID0gW107XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLSR7dGhpcy5uYW1lfS1zZWN0aW9uXWApO1xuXG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIGkpID0+IHtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAxLjUpIC0gZ2V0VHJhbnNsYXRlKHNlY3Rpb24pLnk7XG4gICAgICAgICAgICBsZXQgbGltaXQgPSBvZmZzZXQgKyBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAyKTtcbiAgICAgICAgICAgIGxldCBwZXJzaXN0ZW50ID0gdHlwZW9mIHNlY3Rpb24uZGF0YXNldFt0aGlzLm5hbWUgKyAnUGVyc2lzdGVudCddID09PSAnc3RyaW5nJztcblxuICAgICAgICAgICAgbGV0IGluVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+PSBvZmZzZXQgJiYgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1hcHBlZFNlY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgZWw6IHNlY3Rpb24sXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICAgICAgbGltaXQ6IGxpbWl0LFxuICAgICAgICAgICAgICAgIGluVmlldzogaW5WaWV3LFxuICAgICAgICAgICAgICAgIHBlcnNpc3RlbnQ6IHBlcnNpc3RlbnRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXSA9IG1hcHBlZFNlY3Rpb247XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyYW5zZm9ybShlbGVtZW50LCB4LCB5LCBkZWxheSkge1xuICAgICAgICBsZXQgdHJhbnNmb3JtO1xuXG4gICAgICAgIGlmKCFkZWxheSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtID0gYG1hdHJpeCgxLDAsMCwxLCR7eH0sJHt5fSlgXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzdGFydCA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIGxldCBsZXJwWCA9IGxlcnAoc3RhcnQueCwgeCwgZGVsYXkpO1xuICAgICAgICAgICAgbGV0IGxlcnBZID0gbGVycChzdGFydC55LCB5LCBkZWxheSk7XG5cbiAgICAgICAgICAgIHRyYW5zZm9ybSA9IGBtYXRyaXgoMSwwLDAsMSwke2xlcnBYfSwke2xlcnBZfSlgXG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tc1RyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtRWxlbWVudHMoaXNGb3JjZWQpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsQm90dG9tID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSArIHRoaXMud2luZG93SGVpZ2h0O1xuICAgICAgICBjb25zdCBzY3JvbGxNaWRkbGUgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICsgdGhpcy53aW5kb3dNaWRkbGU7XG5cbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzLmZvckVhY2goKGN1cnJlbnQsIGkpID0+IHtcbiAgICAgICAgICAgIGxldCB0cmFuc2Zvcm1EaXN0YW5jZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZigoaXNGb3JjZWQgJiYgIWN1cnJlbnQuaW5WaWV3KSkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gMFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjdXJyZW50LmluVmlldykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudC5wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICogLWN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9ICh0aGlzLmluc3RhbmNlLmxpbWl0IC0gc2Nyb2xsQm90dG9tICsgdGhpcy53aW5kb3dIZWlnaHQpICogY3VycmVudC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKHNjcm9sbE1pZGRsZSAtIGN1cnJlbnQubWlkZGxlKSAqIC1jdXJyZW50LnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGN1cnJlbnQuc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudC5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55IC0gY3VycmVudC50b3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8IGN1cnJlbnQudG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+IGN1cnJlbnQuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IGN1cnJlbnQuYm90dG9tIC0gY3VycmVudC50b3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRyYW5zZm9ybURpc3RhbmNlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnQuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oY3VycmVudC5lbCwgdHJhbnNmb3JtRGlzdGFuY2UsIDAsIChpc0ZvcmNlZCA/IGZhbHNlIDogY3VycmVudC5kZWxheSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oY3VycmVudC5lbCwgMCwgdHJhbnNmb3JtRGlzdGFuY2UsIChpc0ZvcmNlZCA/IGZhbHNlIDogY3VycmVudC5kZWxheSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIGRlc2lyZWQgdGFyZ2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogICAgICBBdmFpbGFibGUgb3B0aW9ucyA6XG4gICAgICogICAgICAgICAge25vZGV9IHRhcmdldCAtIFRoZSBET00gZWxlbWVudCB3ZSB3YW50IHRvIHNjcm9sbCB0b1xuICAgICAqICAgICAgICAgIHtub2RlfSBzb3VyY2VFbGVtIC0gQW4gYDxhPmAgZWxlbWVudCB3aXRoIGFuIGhyZWYgdGFyZ2V0aW5nIHRoZSBhbmNob3Igd2Ugd2FudCB0byBzY3JvbGwgdG9cbiAgICAgKiAgICAgICAgICB7bm9kZX0gb2Zmc2V0RWxlbSAtIEEgRE9NIGVsZW1lbnQgZnJvbSB3aGljaCB3ZSBnZXQgdGhlIGhlaWdodCB0byBzdWJzdHJhY3QgZnJvbSB0aGUgb2Zmc2V0XG4gICAgICogICAgICAgICAgICAgIChleDogdXNlIG9mZnNldEVsZW0gdG8gcGFzcyBhIG1vYmlsZSBoZWFkZXIgdGhhdCBpcyBhYm92ZSBjb250ZW50LCB0byBtYWtlIHN1cmUgdGhlIHNjcm9sbFRvIHdpbGwgYmUgYWxpZ25lZCB3aXRoIGl0KVxuICAgICAqICAgICAgICAgIHtpbnR9IG9mZnNldCAtIEFuIGFic29sdXRlIHZlcnRpY2FsIHNjcm9sbCB2YWx1ZSB0byByZWFjaCwgb3IgYW4gb2Zmc2V0IHRvIGFwcGx5IG9uIHRvcCBvZiBnaXZlbiBgdGFyZ2V0YCBvciBgc291cmNlRWxlbWAncyB0YXJnZXRcbiAgICAgKiAgICAgICAgICB7aW50fSBkZWxheSAtIEFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmUgc3RhcnRpbmcgdG8gc2Nyb2xsXG4gICAgICogICAgICAgICAge2Jvb2xlYW59IHRvVG9wIC0gU2V0IHRvIHRydWUgdG8gc2Nyb2xsIGFsbCB0aGUgd2F5IHRvIHRoZSB0b3BcbiAgICAgKiAgICAgICAgICB7Ym9vbGVhbn0gdG9Cb3R0b20gLSBTZXQgdG8gdHJ1ZSB0byBzY3JvbGwgYWxsIHRoZSB3YXkgdG8gdGhlIGJvdHRvbVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2Nyb2xsVG8odGFyZ2V0T3B0aW9uLCBvZmZzZXRPcHRpb24pIHtcbiAgICAgICAgbGV0IHRhcmdldDtcbiAgICAgICAgbGV0IG9mZnNldCA9IG9mZnNldE9wdGlvbiA/IHBhcnNlSW50KG9mZnNldE9wdGlvbikgOiAwO1xuXG4gICAgICAgIGlmKHR5cGVvZiB0YXJnZXRPcHRpb24gPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgICAgICAgIGlmKHRhcmdldE9wdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHRhcmdldE9wdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSB0aGlzLmluc3RhbmNlLmxpbWl0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldE9wdGlvbilbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmKCF0YXJnZXRPcHRpb24udGFyZ2V0KSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRPcHRpb247XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZSBoYXZlIGEgdGFyZ2V0LCBnZXQgaXQncyBjb29yZGluYXRlc1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBHZXQgdGFyZ2V0IG9mZnNldCBmcm9tIHRvcFxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0QkNSID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSB0YXJnZXRCQ1IudG9wICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueVxuXG4gICAgICAgICAgICAvLyBUcnkgYW5kIGZpbmQgdGhlIHRhcmdldCdzIHBhcmVudCBzZWN0aW9uXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRQYXJlbnRzID0gZ2V0UGFyZW50cyh0YXJnZXQpXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRTZWN0aW9uID0gdGFyZ2V0UGFyZW50cy5maW5kKGNhbmRpZGF0ZSA9PiB0aGlzLnNlY3Rpb25zLmZpbmQoc2VjdGlvbiA9PiBzZWN0aW9uLmVsZW1lbnQgPT0gY2FuZGlkYXRlKSlcbiAgICAgICAgICAgIGxldCBwYXJlbnRTZWN0aW9uT2Zmc2V0ID0gMFxuICAgICAgICAgICAgaWYocGFyZW50U2VjdGlvbikge1xuICAgICAgICAgICAgICAgIHBhcmVudFNlY3Rpb25PZmZzZXQgPSBnZXRUcmFuc2xhdGUocGFyZW50U2VjdGlvbikueSAvLyBXZSBnb3QgYSBwYXJlbnQgc2VjdGlvbiwgc3RvcmUgaXQncyBjdXJyZW50IG9mZnNldCB0byByZW1vdmUgaXQgbGF0ZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpbmFsIHZhbHVlIG9mIHNjcm9sbCBkZXN0aW5hdGlvbiA6IG9mZnNldFRvcCArIChvcHRpb25hbCBvZmZzZXQgZ2l2ZW4gaW4gb3B0aW9ucykgLSAocGFyZW50J3Mgc2VjdGlvbiB0cmFuc2xhdGUpXG4gICAgICAgICAgICBvZmZzZXQgPSBvZmZzZXRUb3AgKyBvZmZzZXQgLSBwYXJlbnRTZWN0aW9uT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0gTWF0aC5taW4ob2Zmc2V0LCB0aGlzLmluc3RhbmNlLmxpbWl0KTsgLy8gQWN0dWFsIHNjcm9sbFRvICh0aGUgbGVycCB3aWxsIGRvIHRoZSBhbmltYXRpb24gaXRzZWxmKVxuICAgICAgICB0aGlzLmluZXJ0aWFSYXRpbyA9IE1hdGgubWluKDQwMDAgLyBNYXRoLmFicyh0aGlzLmluc3RhbmNlLmRlbHRhLnkgLSB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSwwLjgpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc2Nyb2xsLiBJZiB3ZSB3ZXJlIGluIGlkbGUgc3RhdGU6IHdlJ3JlIG5vdCBhbnltb3JlXG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsKCk7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLmlzU2Nyb2xsaW5nQ2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IFNjcm9sbCBmcm9tICcuLi9OYXRpdmUnO1xuaW1wb3J0IFNtb290aCBmcm9tICcuLi9TbW9vdGguanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNtb290aE1vYmlsZSkge1xuICAgICAgICAgICAgdGhpcy5pc01vYmlsZSA9ICgvQW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc21vb3RoID09PSB0cnVlICYmICF0aGlzLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbCA9IG5ldyBTbW9vdGgodGhpcy5vcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsID0gbmV3IFNjcm9sbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGwuaW5pdCgpO1xuXG4gICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUbyh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgZWw6IGRvY3VtZW50LFxuICAgIGVsTW9iaWxlOiBkb2N1bWVudCxcbiAgICBuYW1lOiAnc2Nyb2xsJyxcbiAgICBvZmZzZXQ6IDAsXG4gICAgcmVwZWF0OiBmYWxzZSxcbiAgICBzbW9vdGg6IGZhbHNlLFxuICAgIHNtb290aE1vYmlsZTogZmFsc2UsXG4gICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgIGluZXJ0aWE6IDEsXG4gICAgY2xhc3M6ICdpcy1pbnZpZXcnLFxuICAgIHNjcm9sbGJhckNsYXNzOiAnYy1zY3JvbGxiYXInLFxuICAgIHNjcm9sbGluZ0NsYXNzOiAnaXMtc2Nyb2xsaW5nJyxcbiAgICBkcmFnZ2luZ0NsYXNzOiAnaXMtZHJhZ2dpbmcnLFxuICAgIHNtb290aENsYXNzOiAnaGFzLXNtb290aHNjcm9sbCdcbn07XG4iLCIvKipcbiAqIEBzZWUgIGh0dHBzOi8vZ2l0aHViLmNvbS9yYWN0aXZlanMvcmFjdGl2ZS9ibG9iL2Rldi9zcmMvdXRpbHMvaHRtbC5qc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlSHRtbChzdHIpIHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIEhUTUwgY29udGVudCB0aGF0IGNvbnRhaW5zIG11c3RhY2hlIGNoYXJhY3RlcnMgZm9yIHVzZSB3aXRoIFJhY3RpdmVcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmVzY2FwZUh0bWwoc3RyKSB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgICAgIC5yZXBsYWNlKC8mZ3Q7L2csICc+JylcbiAgICAgICAgLnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XG59XG5cbi8qKlxuICogR2V0IGVsZW1lbnQgZGF0YSBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0gICB7RE9NRWxlbWVudH0gIG5vZGVcbiAqIEByZXR1cm4gIHtBcnJheX0gICAgICAgZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZURhdGEobm9kZSkge1xuICAgIC8vIEFsbCBhdHRyaWJ1dGVzXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXM7XG5cbiAgICAvLyBSZWdleCBQYXR0ZXJuXG4gICAgdmFyIHBhdHRlcm4gPSAvXmRhdGFcXC0oLispJC87XG5cbiAgICAvLyBPdXRwdXRcbiAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmICghYXR0cmlidXRlc1tpXSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdHRyaWJ1dGVzIG5hbWUgKGV4OiBkYXRhLW1vZHVsZSlcbiAgICAgICAgbGV0IG5hbWUgPSBhdHRyaWJ1dGVzW2ldLm5hbWU7XG5cbiAgICAgICAgLy8gVGhpcyBoYXBwZW5zLlxuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1hdGNoID0gbmFtZS5tYXRjaChwYXR0ZXJuKTtcbiAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGlzIHRocm93cyBhbiBlcnJvciwgeW91IGhhdmUgc29tZVxuICAgICAgICAvLyBzZXJpb3VzIHByb2JsZW1zIGluIHlvdXIgSFRNTC5cbiAgICAgICAgZGF0YVttYXRjaFsxXV0gPSBub2RlLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHRoZSBwYXJlbnQgbm9kZXMgb2YgdGhlIGdpdmVuIG5vZGVcbiAqIEBwYXJhbSAge29iamVjdH0gbm9kZVxuICogQHJldHVybiB7YXJyYXl9IHBhcmVudCBub2Rlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50cyhlbGVtKSB7XG4gICAgLy8gU2V0IHVwIGEgcGFyZW50IGFycmF5XG4gICAgbGV0IHBhcmVudHMgPSBbXTtcblxuICAgIC8vIFB1c2ggZWFjaCBwYXJlbnQgZWxlbWVudCB0byB0aGUgYXJyYXlcbiAgICBmb3IgKCA7IGVsZW0gJiYgZWxlbSAhPT0gZG9jdW1lbnQ7IGVsZW0gPSBlbGVtLnBhcmVudE5vZGUgKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChlbGVtKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gb3VyIHBhcmVudCBhcnJheVxuICAgIHJldHVybiBwYXJlbnRzO1xufVxuXG4vLyBodHRwczovL2dvbWFrZXRoaW5ncy5jb20vaG93LXRvLWdldC10aGUtY2xvc2VzdC1wYXJlbnQtZWxlbWVudC13aXRoLWEtbWF0Y2hpbmctc2VsZWN0b3ItdXNpbmctdmFuaWxsYS1qYXZhc2NyaXB0L1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5Q2xvc2VzdFBhcmVudChlbGVtLCBzZWxlY3Rvcikge1xuXG4gICAgLy8gRWxlbWVudC5tYXRjaGVzKCkgcG9seWZpbGxcbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9XG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzID0gKHRoaXMuZG9jdW1lbnQgfHwgdGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHMpLFxuICAgICAgICAgICAgICAgICAgICBpID0gbWF0Y2hlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwICYmIG1hdGNoZXMuaXRlbShpKSAhPT0gdGhpcykge31cbiAgICAgICAgICAgICAgICByZXR1cm4gaSA+IC0xO1xuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGNsb3Nlc3QgbWF0Y2hpbmcgZWxlbWVudFxuICAgIGZvciAoIDsgZWxlbSAmJiBlbGVtICE9PSBkb2N1bWVudDsgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSApIHtcbiAgICAgICAgaWYgKCBlbGVtLm1hdGNoZXMoIHNlbGVjdG9yICkgKSByZXR1cm4gZWxlbTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gbGVycChzdGFydCwgZW5kLCBhbXQpe1xuICAgIHJldHVybiAoMSAtIGFtdCkgKiBzdGFydCArIGFtdCAqIGVuZFxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShlbCwgdHJhbnNmb3JtVmFsdWUpe1xuICAgIGVsLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xuICAgIGVsLnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XG4gICAgZWwuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWwpe1xuICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHt9XG4gICAgaWYoIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSByZXR1cm47XG5cbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSB8fCBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gfHwgc3R5bGUubW96VHJhbnNmb3JtO1xuXG4gICAgbGV0IG1hdCA9IHRyYW5zZm9ybS5tYXRjaCgvXm1hdHJpeDNkXFwoKC4rKVxcKSQvKTtcbiAgICBpZihtYXQpIHJldHVybiBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVsxM10pO1xuICAgIG1hdCA9IHRyYW5zZm9ybS5tYXRjaCgvXm1hdHJpeFxcKCguKylcXCkkLyk7XG4gICAgdHJhbnNsYXRlLnggPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVs0XSkgOiAwO1xuICAgIHRyYW5zbGF0ZS55ID0gbWF0ID8gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbNV0pIDogMDtcblxuICAgIHJldHVybiB0cmFuc2xhdGU7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmKCFvYmplY3QpIHJldHVybiBjb25zb2xlLndhcm4oJ2JpbmRBbGwgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50LicpO1xuXG4gICAgdmFyIGZ1bmN0aW9ucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICBpZiAoZnVuY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgIGZvciAodmFyIG1ldGhvZCBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBtZXRob2QpKSB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIG9iamVjdFttZXRob2RdID09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbChvYmplY3RbbWV0aG9kXSkgPT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9ucy5wdXNoKG1ldGhvZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGZ1bmN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uc1tpXTtcbiAgICAgICAgb2JqZWN0W2ZdID0gYmluZChvYmplY3RbZl0sIG9iamVjdCk7XG4gICAgfVxufTtcblxuLypcbiAgICBGYXN0ZXIgYmluZCB3aXRob3V0IHNwZWNpZmljLWNhc2UgY2hlY2tpbmcuIChzZWUgaHR0cHM6Ly9jb2RlcndhbGwuY29tL3Avb2kzajN3KS5cbiAgICBiaW5kQWxsIGlzIG9ubHkgbmVlZGVkIGZvciBldmVudHMgYmluZGluZyBzbyBubyBuZWVkIHRvIG1ha2Ugc2xvdyBmaXhlcyBmb3IgY29uc3RydWN0b3JcbiAgICBvciBwYXJ0aWFsIGFwcGxpY2F0aW9uLlxuKi9cbmZ1bmN0aW9uIGJpbmQoZnVuYywgY29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgfTtcbn0iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuOS4yXG4oZnVuY3Rpb24oKSB7XG4gIHZhciByb290O1xuXG4gIHJvb3QgPSB0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBleHBvcnRzICE9PSBudWxsID8gZXhwb3J0cyA6IHRoaXM7XG5cbiAgcm9vdC5MZXRoYXJneSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBMZXRoYXJneShzdGFiaWxpdHksIHNlbnNpdGl2aXR5LCB0b2xlcmFuY2UsIGRlbGF5KSB7XG4gICAgICB0aGlzLnN0YWJpbGl0eSA9IHN0YWJpbGl0eSAhPSBudWxsID8gTWF0aC5hYnMoc3RhYmlsaXR5KSA6IDg7XG4gICAgICB0aGlzLnNlbnNpdGl2aXR5ID0gc2Vuc2l0aXZpdHkgIT0gbnVsbCA/IDEgKyBNYXRoLmFicyhzZW5zaXRpdml0eSkgOiAxMDA7XG4gICAgICB0aGlzLnRvbGVyYW5jZSA9IHRvbGVyYW5jZSAhPSBudWxsID8gMSArIE1hdGguYWJzKHRvbGVyYW5jZSkgOiAxLjE7XG4gICAgICB0aGlzLmRlbGF5ID0gZGVsYXkgIT0gbnVsbCA/IGRlbGF5IDogMTUwO1xuICAgICAgdGhpcy5sYXN0VXBEZWx0YXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMubGFzdERvd25EZWx0YXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDEsIHJlZiA9IHRoaXMuc3RhYmlsaXR5ICogMjsgMSA8PSByZWYgPyBpIDw9IHJlZiA6IGkgPj0gcmVmOyAxIDw9IHJlZiA/IGkrKyA6IGktLSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGxhc3REZWx0YTtcbiAgICAgIGUgPSBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcbiAgICAgIGlmIChlLndoZWVsRGVsdGEgIT0gbnVsbCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLndoZWVsRGVsdGE7XG4gICAgICB9IGVsc2UgaWYgKGUuZGVsdGFZICE9IG51bGwpIHtcbiAgICAgICAgbGFzdERlbHRhID0gZS5kZWx0YVkgKiAtNDA7XG4gICAgICB9IGVsc2UgaWYgKChlLmRldGFpbCAhPSBudWxsKSB8fCBlLmRldGFpbCA9PT0gMCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLmRldGFpbCAqIC00MDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wLnB1c2goRGF0ZS5ub3coKSk7XG4gICAgICB0aGlzLmRlbHRhc1RpbWVzdGFtcC5zaGlmdCgpO1xuICAgICAgaWYgKGxhc3REZWx0YSA+IDApIHtcbiAgICAgICAgdGhpcy5sYXN0VXBEZWx0YXMucHVzaChsYXN0RGVsdGEpO1xuICAgICAgICB0aGlzLmxhc3RVcERlbHRhcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0luZXJ0aWEoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhc3REb3duRGVsdGFzLnB1c2gobGFzdERlbHRhKTtcbiAgICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0luZXJ0aWEoLTEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuaXNJbmVydGlhID0gZnVuY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgbGFzdERlbHRhcywgbGFzdERlbHRhc05ldywgbGFzdERlbHRhc09sZCwgbmV3QXZlcmFnZSwgbmV3U3VtLCBvbGRBdmVyYWdlLCBvbGRTdW07XG4gICAgICBsYXN0RGVsdGFzID0gZGlyZWN0aW9uID09PSAtMSA/IHRoaXMubGFzdERvd25EZWx0YXMgOiB0aGlzLmxhc3RVcERlbHRhcztcbiAgICAgIGlmIChsYXN0RGVsdGFzWzBdID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kZWx0YXNUaW1lc3RhbXBbKHRoaXMuc3RhYmlsaXR5ICogMikgLSAyXSArIHRoaXMuZGVsYXkgPiBEYXRlLm5vdygpICYmIGxhc3REZWx0YXNbMF0gPT09IGxhc3REZWx0YXNbKHRoaXMuc3RhYmlsaXR5ICogMikgLSAxXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsYXN0RGVsdGFzT2xkID0gbGFzdERlbHRhcy5zbGljZSgwLCB0aGlzLnN0YWJpbGl0eSk7XG4gICAgICBsYXN0RGVsdGFzTmV3ID0gbGFzdERlbHRhcy5zbGljZSh0aGlzLnN0YWJpbGl0eSwgdGhpcy5zdGFiaWxpdHkgKiAyKTtcbiAgICAgIG9sZFN1bSA9IGxhc3REZWx0YXNPbGQucmVkdWNlKGZ1bmN0aW9uKHQsIHMpIHtcbiAgICAgICAgcmV0dXJuIHQgKyBzO1xuICAgICAgfSk7XG4gICAgICBuZXdTdW0gPSBsYXN0RGVsdGFzTmV3LnJlZHVjZShmdW5jdGlvbih0LCBzKSB7XG4gICAgICAgIHJldHVybiB0ICsgcztcbiAgICAgIH0pO1xuICAgICAgb2xkQXZlcmFnZSA9IG9sZFN1bSAvIGxhc3REZWx0YXNPbGQubGVuZ3RoO1xuICAgICAgbmV3QXZlcmFnZSA9IG5ld1N1bSAvIGxhc3REZWx0YXNOZXcubGVuZ3RoO1xuICAgICAgaWYgKE1hdGguYWJzKG9sZEF2ZXJhZ2UpIDwgTWF0aC5hYnMobmV3QXZlcmFnZSAqIHRoaXMudG9sZXJhbmNlKSAmJiAodGhpcy5zZW5zaXRpdml0eSA8IE1hdGguYWJzKG5ld0F2ZXJhZ2UpKSkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuc2hvd0xhc3RVcERlbHRhcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFzdFVwRGVsdGFzO1xuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuc2hvd0xhc3REb3duRGVsdGFzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0RG93bkRlbHRhcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIExldGhhcmd5O1xuXG4gIH0pKCk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiZnVuY3Rpb24gRSAoKSB7XG4gIC8vIEtlZXAgdGhpcyBlbXB0eSBzbyBpdCdzIGVhc2llciB0byBpbmhlcml0IGZyb21cbiAgLy8gKHZpYSBodHRwczovL2dpdGh1Yi5jb20vbGlwc21hY2sgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2lzc3Vlcy8zKVxufVxuXG5FLnByb3RvdHlwZSA9IHtcbiAgb246IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcblxuICAgIChlW25hbWVdIHx8IChlW25hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgIGN0eDogY3R4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvbmNlOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiBsaXN0ZW5lciAoKSB7XG4gICAgICBzZWxmLm9mZihuYW1lLCBsaXN0ZW5lcik7XG4gICAgICBjYWxsYmFjay5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVyLl8gPSBjYWxsYmFja1xuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIGxpc3RlbmVyLCBjdHgpO1xuICB9LFxuXG4gIGVtaXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGRhdGEgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGV2dEFyciA9ICgodGhpcy5lIHx8ICh0aGlzLmUgPSB7fSkpW25hbWVdIHx8IFtdKS5zbGljZSgpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuID0gZXZ0QXJyLmxlbmd0aDtcblxuICAgIGZvciAoaTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBldnRBcnJbaV0uZm4uYXBwbHkoZXZ0QXJyW2ldLmN0eCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb2ZmOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuICAgIHZhciBldnRzID0gZVtuYW1lXTtcbiAgICB2YXIgbGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKGV2dHMgJiYgY2FsbGJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChldnRzW2ldLmZuICE9PSBjYWxsYmFjayAmJiBldnRzW2ldLmZuLl8gIT09IGNhbGxiYWNrKVxuICAgICAgICAgIGxpdmVFdmVudHMucHVzaChldnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgZnJvbSBxdWV1ZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAgLy8gU3VnZ2VzdGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9sYXpkXG4gICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2NvbW1pdC9jNmViZmFhOWJjOTczYjMzZDExMGE4NGEzMDc3NDJiN2NmOTRjOTUzI2NvbW1pdGNvbW1lbnQtNTAyNDkxMFxuXG4gICAgKGxpdmVFdmVudHMubGVuZ3RoKVxuICAgICAgPyBlW25hbWVdID0gbGl2ZUV2ZW50c1xuICAgICAgOiBkZWxldGUgZVtuYW1lXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEU7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc291cmNlKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc291cmNlKSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgndGlueS1lbWl0dGVyJyk7XG52YXIgTGV0aGFyZ3kgPSByZXF1aXJlKCdsZXRoYXJneScpLkxldGhhcmd5O1xudmFyIHN1cHBvcnQgPSByZXF1aXJlKCcuL3N1cHBvcnQnKTtcbnZhciBjbG9uZSA9IHJlcXVpcmUoJy4vY2xvbmUnKTtcbnZhciBiaW5kQWxsID0gcmVxdWlyZSgnYmluZGFsbC1zdGFuZGFsb25lJyk7XG52YXIgRVZUX0lEID0gJ3ZpcnR1YWxzY3JvbGwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxTY3JvbGw7XG5cbnZhciBrZXlDb2RlcyA9IHtcbiAgICBMRUZUOiAzNyxcbiAgICBVUDogMzgsXG4gICAgUklHSFQ6IDM5LFxuICAgIERPV046IDQwLFxuICAgIFNQQUNFOiAzMlxufTtcblxuZnVuY3Rpb24gVmlydHVhbFNjcm9sbChvcHRpb25zKSB7XG4gICAgYmluZEFsbCh0aGlzLCAnX29uV2hlZWwnLCAnX29uTW91c2VXaGVlbCcsICdfb25Ub3VjaFN0YXJ0JywgJ19vblRvdWNoTW92ZScsICdfb25LZXlEb3duJyk7XG5cbiAgICB0aGlzLmVsID0gd2luZG93O1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZWwpIHtcbiAgICAgICAgdGhpcy5lbCA9IG9wdGlvbnMuZWw7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmVsO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSBvYmplY3RBc3NpZ24oe1xuICAgICAgICBtb3VzZU11bHRpcGxpZXI6IDEsXG4gICAgICAgIHRvdWNoTXVsdGlwbGllcjogMixcbiAgICAgICAgZmlyZWZveE11bHRpcGxpZXI6IDE1LFxuICAgICAgICBrZXlTdGVwOiAxMjAsXG4gICAgICAgIHByZXZlbnRUb3VjaDogZmFsc2UsXG4gICAgICAgIHVucHJldmVudFRvdWNoQ2xhc3M6ICd2cy10b3VjaG1vdmUtYWxsb3dlZCcsXG4gICAgICAgIGxpbWl0SW5lcnRpYTogZmFsc2UsXG4gICAgICAgIHVzZUtleWJvYXJkOiB0cnVlXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW5lcnRpYSkgdGhpcy5fbGV0aGFyZ3kgPSBuZXcgTGV0aGFyZ3koKTtcblxuICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuICAgIHRoaXMuX2V2ZW50ID0ge1xuICAgICAgICB5OiAwLFxuICAgICAgICB4OiAwLFxuICAgICAgICBkZWx0YVg6IDAsXG4gICAgICAgIGRlbHRhWTogMFxuICAgIH07XG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy5ib2R5VG91Y2hBY3Rpb24gPSBudWxsO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wYXNzaXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lck9wdGlvbnMgPSB7cGFzc2l2ZTogdGhpcy5vcHRpb25zLnBhc3NpdmV9O1xuICAgIH1cbn1cblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX25vdGlmeSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LnggKz0gZXZ0LmRlbHRhWDtcbiAgICBldnQueSArPSBldnQuZGVsdGFZO1xuXG4gICB0aGlzLl9lbWl0dGVyLmVtaXQoRVZUX0lELCB7XG4gICAgICAgIHg6IGV2dC54LFxuICAgICAgICB5OiBldnQueSxcbiAgICAgICAgZGVsdGFYOiBldnQuZGVsdGFYLFxuICAgICAgICBkZWx0YVk6IGV2dC5kZWx0YVksXG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGVcbiAgIH0pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uV2hlZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKHRoaXMuX2xldGhhcmd5ICYmIHRoaXMuX2xldGhhcmd5LmNoZWNrKGUpID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgIC8vIEluIENocm9tZSBhbmQgaW4gRmlyZWZveCAoYXQgbGVhc3QgdGhlIG5ldyBvbmUpXG4gICAgZXZ0LmRlbHRhWCA9IGUud2hlZWxEZWx0YVggfHwgZS5kZWx0YVggKiAtMTtcbiAgICBldnQuZGVsdGFZID0gZS53aGVlbERlbHRhWSB8fCBlLmRlbHRhWSAqIC0xO1xuXG4gICAgLy8gZm9yIG91ciBwdXJwb3NlIGRlbHRhbW9kZSA9IDEgbWVhbnMgdXNlciBpcyBvbiBhIHdoZWVsIG1vdXNlLCBub3QgdG91Y2ggcGFkXG4gICAgLy8gcmVhbCBtZWFuaW5nOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2hlZWxFdmVudCNEZWx0YV9tb2Rlc1xuICAgIGlmKHN1cHBvcnQuaXNGaXJlZm94ICYmIGUuZGVsdGFNb2RlID09IDEpIHtcbiAgICAgICAgZXZ0LmRlbHRhWCAqPSBvcHRpb25zLmZpcmVmb3hNdWx0aXBsaWVyO1xuICAgICAgICBldnQuZGVsdGFZICo9IG9wdGlvbnMuZmlyZWZveE11bHRpcGxpZXI7XG4gICAgfVxuXG4gICAgZXZ0LmRlbHRhWCAqPSBvcHRpb25zLm1vdXNlTXVsdGlwbGllcjtcbiAgICBldnQuZGVsdGFZICo9IG9wdGlvbnMubW91c2VNdWx0aXBsaWVyO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uTW91c2VXaGVlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW5lcnRpYSAmJiB0aGlzLl9sZXRoYXJneS5jaGVjayhlKSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgIC8vIEluIFNhZmFyaSwgSUUgYW5kIGluIENocm9tZSBpZiAnd2hlZWwnIGlzbid0IGRlZmluZWRcbiAgICBldnQuZGVsdGFYID0gKGUud2hlZWxEZWx0YVgpID8gZS53aGVlbERlbHRhWCA6IDA7XG4gICAgZXZ0LmRlbHRhWSA9IChlLndoZWVsRGVsdGFZKSA/IGUud2hlZWxEZWx0YVkgOiBlLndoZWVsRGVsdGE7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciB0ID0gKGUudGFyZ2V0VG91Y2hlcykgPyBlLnRhcmdldFRvdWNoZXNbMF0gOiBlO1xuICAgIHRoaXMudG91Y2hTdGFydFggPSB0LnBhZ2VYO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSB0LnBhZ2VZO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uVG91Y2hNb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmKG9wdGlvbnMucHJldmVudFRvdWNoXG4gICAgICAgICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMob3B0aW9ucy51bnByZXZlbnRUb3VjaENsYXNzKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgdmFyIHQgPSAoZS50YXJnZXRUb3VjaGVzKSA/IGUudGFyZ2V0VG91Y2hlc1swXSA6IGU7XG5cbiAgICBldnQuZGVsdGFYID0gKHQucGFnZVggLSB0aGlzLnRvdWNoU3RhcnRYKSAqIG9wdGlvbnMudG91Y2hNdWx0aXBsaWVyO1xuICAgIGV2dC5kZWx0YVkgPSAodC5wYWdlWSAtIHRoaXMudG91Y2hTdGFydFkpICogb3B0aW9ucy50b3VjaE11bHRpcGxpZXI7XG5cbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gdC5wYWdlWDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gdC5wYWdlWTtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbktleURvd24gPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuICAgIGV2dC5kZWx0YVggPSBldnQuZGVsdGFZID0gMDtcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gNDBcblxuICAgIHN3aXRjaChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5MRUZUOlxuICAgICAgICBjYXNlIGtleUNvZGVzLlVQOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IHRoaXMub3B0aW9ucy5rZXlTdGVwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5SSUdIVDpcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5ET1dOOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IC0gdGhpcy5vcHRpb25zLmtleVN0ZXA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5TUEFDRSAmJiBlLnNoaWZ0S2V5OlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IHdpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGtleUNvZGVzLlNQQUNFOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IC0gd2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX2JpbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzdXBwb3J0Lmhhc1doZWVsRXZlbnQpIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9vbldoZWVsLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgaWYoc3VwcG9ydC5oYXNNb3VzZVdoZWVsRXZlbnQpIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuX29uTW91c2VXaGVlbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuXG4gICAgaWYoc3VwcG9ydC5oYXNUb3VjaCkge1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzUG9pbnRlciAmJiBzdXBwb3J0Lmhhc1RvdWNoV2luKSB7XG4gICAgICAgIHRoaXMuYm9keVRvdWNoQWN0aW9uID0gZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb24gPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyRG93bicsIHRoaXMuX29uVG91Y2hTdGFydCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyTW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc0tleURvd24gJiYgdGhpcy5vcHRpb25zLnVzZUtleWJvYXJkKSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl91bmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzdXBwb3J0Lmhhc1doZWVsRXZlbnQpIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9vbldoZWVsKTtcbiAgICBpZihzdXBwb3J0Lmhhc01vdXNlV2hlZWxFdmVudCkgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5fb25Nb3VzZVdoZWVsKTtcblxuICAgIGlmKHN1cHBvcnQuaGFzVG91Y2gpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNQb2ludGVyICYmIHN1cHBvcnQuaGFzVG91Y2hXaW4pIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uID0gdGhpcy5ib2R5VG91Y2hBY3Rpb247XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyRG93bicsIHRoaXMuX29uVG91Y2hTdGFydCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyTW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc0tleURvd24gJiYgdGhpcy5vcHRpb25zLnVzZUtleWJvYXJkKSBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oY2IsIGN0eCkge1xuICB0aGlzLl9lbWl0dGVyLm9uKEVWVF9JRCwgY2IsIGN0eCk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2VtaXR0ZXIuZTtcbiAgaWYgKGV2ZW50cyAmJiBldmVudHNbRVZUX0lEXSAmJiBldmVudHNbRVZUX0lEXS5sZW5ndGggPT09IDEpIHRoaXMuX2JpbmQoKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGNiLCBjdHgpIHtcbiAgdGhpcy5fZW1pdHRlci5vZmYoRVZUX0lELCBjYiwgY3R4KTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZW1pdHRlci5lO1xuICBpZiAoIWV2ZW50c1tFVlRfSURdIHx8IGV2ZW50c1tFVlRfSURdLmxlbmd0aCA8PSAwKSB0aGlzLl91bmJpbmQoKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuICAgIGV2dC54ID0gMDtcbiAgICBldnQueSA9IDA7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vZmYoKTtcbiAgICB0aGlzLl91bmJpbmQoKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uIGdldFN1cHBvcnQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGFzV2hlZWxFdmVudDogJ29ud2hlZWwnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNNb3VzZVdoZWVsRXZlbnQ6ICdvbm1vdXNld2hlZWwnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNUb3VjaDogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc1RvdWNoV2luOiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyAmJiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDEsXG4gICAgICAgIGhhc1BvaW50ZXI6ICEhd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkLFxuICAgICAgICBoYXNLZXlEb3duOiAnb25rZXlkb3duJyBpbiBkb2N1bWVudCxcbiAgICAgICAgaXNGaXJlZm94OiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA+IC0xXG4gICAgfTtcbn0pKCk7XG4iXX0=
