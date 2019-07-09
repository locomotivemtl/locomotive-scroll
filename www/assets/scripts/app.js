(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _main = _interopRequireDefault(require("./scroll/vendors/main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function () {
  document.documentElement.classList.add('is-loaded');
  document.documentElement.classList.remove('is-loading');
  setTimeout(function () {
    var scroll = new _main["default"]({
      el: document.querySelector('#js-scroll'),
      smooth: true
    });
  }, 1000);
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

    window.scrollTo(0, 0);
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
    this.html.classList.add(this.initClass);
    window.addEventListener('resize', this.checkResize, false);
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      this.initEvents();
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {}
  }, {
    key: "checkResize",
    value: function checkResize() {}
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
    }
  }, {
    key: "addElements",
    value: function addElements() {}
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
      }

      if (current.repeat) {
        current.el.classList.remove(current["class"]);
      }
    }
  }, {
    key: "on",
    value: function on(event, func) {
      var _this3 = this;

      window.addEventListener(this.namespace + event, function () {
        switch (event) {
          case 'call':
            return func(_this3.callValue);

          default:
            return func();
        }
      }, false);
    }
  }, {
    key: "startScroll",
    value: function startScroll() {}
  }, {
    key: "stopScroll",
    value: function stopScroll() {}
  }, {
    key: "destroy",
    value: function destroy() {
      var _this4 = this;

      window.removeEventListener('resize', this.checkResize, false);
      this.scrollToEls.forEach(function (el) {
        el.removeEventListener('click', _this4.setScrollTo, false);
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
  }, {
    key: "updateElements",
    value: function updateElements() {
      var _this5 = this;

      this.els.forEach(function (el, i) {
        var top = el.el.getBoundingClientRect().top + _this5.instance.scroll.y;

        var bottom = top + el.el.offsetHeight;
        _this5.els[i].top = top + el.offset;
        _this5.els[i].bottom = bottom;
      });
      this.hasScrollTicking = false;
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
    key: "update",
    value: function update() {
      this.updateElements();
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
    _this.stop = false;
    return _this;
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.html.classList.add(this.smoothClass);
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
        if (_this2.stop) {
          return;
        }

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
      this.html.classList.add(this.scrollingClass);
    }
  }, {
    key: "stopScrolling",
    value: function stopScrolling() {
      this.isScrolling = false;
      this.inertiaRatio = 1;
      this.instance.scroll.y = Math.round(this.instance.scroll.y);
      this.html.classList.remove(this.scrollingClass);
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
      this.update();
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
      this.scrollbarThumb.style.height = "".concat(window.innerHeight * window.innerHeight / (this.instance.limit + window.innerHeight), "px");
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
      this.html.classList.remove(this.scrollingClass);
      this.html.classList.add(this.draggingClass);
    }
  }, {
    key: "releaseScrollBar",
    value: function releaseScrollBar(e) {
      this.isDraggingScrollbar = false;
      this.html.classList.add(this.scrollingClass);
      this.html.classList.remove(this.draggingClass);
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
            if (_this9.instance.scroll.y < current.top && _this9.instance.scroll.y > current.top - 100) {
              transformDistance = 0;
            } else if (_this9.instance.scroll.y > current.bottom && _this9.instance.scroll.y < current.bottom + 100) {
              transformDistance = current.bottom - current.top + window.innerHeight;
            } else {
              transformDistance = false;
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
      html.classList.add(this.scrollingClass);
    }
  }, {
    key: "update",
    value: function update() {
      this.setScrollLimit();
      this.addSections();
      this.addElements();
      this.detectElements();
      this.updateScroll();
      this.transformElements(true);
    }
  }, {
    key: "startScroll",
    value: function startScroll() {
      this.stop = false;
    }
  }, {
    key: "stopScroll",
    value: function stopScroll() {
      this.stop = true;
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

var _Smooth = _interopRequireDefault(require("../Smooth"));

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
    key: "update",
    value: function update() {
      this.scroll.update();
    }
  }, {
    key: "start",
    value: function start() {
      this.scroll.startScroll();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.scroll.stopScroll();
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(target, offset) {
      this.scroll.scrollTo(target, offset);
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

},{"../Native":2,"../Smooth":3,"./options":8}],8:[function(require,module,exports){
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
  smoothClass: 'has-smoothscroll',
  initClass: 'has-scroll-init'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9hcHAuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvTmF0aXZlLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL1Ntb290aC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL0NvcmUuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvdmVuZG9ycy9OYXRpdmUuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvdmVuZG9ycy9TbW9vdGguanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvdmVuZG9ycy9tYWluLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL3ZlbmRvcnMvb3B0aW9ucy5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL2h0bWwuanMiLCJhc3NldHMvc2NyaXB0cy91dGlscy9tYXRocy5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL3RyYW5zZm9ybS5qcyIsIm5vZGVfbW9kdWxlcy9iaW5kYWxsLXN0YW5kYWxvbmUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbGV0aGFyZ3kvbGV0aGFyZ3kuanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90aW55LWVtaXR0ZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvc3JjL2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtc2Nyb2xsL3NyYy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLXNjcm9sbC9zcmMvc3VwcG9ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQSxDQUFDLFlBQVc7QUFFUixFQUFBLFFBQVEsQ0FBQyxlQUFULENBQXlCLFNBQXpCLENBQW1DLEdBQW5DLENBQXVDLFdBQXZDO0FBQ0EsRUFBQSxRQUFRLENBQUMsZUFBVCxDQUF5QixTQUF6QixD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dUMsQ0FBeEQ7QUFDQSxFQUFBLFNBQVMsQ0FBQyxDQUFWLEdBQWMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sS0FBUCxDQUFhLElBQWIsRUFBbUIsQ0FBbkIsQ0FBRCxDQUFiLEdBQXVDLENBQXhEO0FBRUEsU0FBTyxTQUFQO0FBQ0g7OztBQ3BCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBsb2NvbW90aXZlU2Nyb2xsIGZyb20gJy4vc2Nyb2xsL3ZlbmRvcnMvbWFpbic7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkZWQnKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNjcm9sbCA9IG5ldyBsb2NvbW90aXZlU2Nyb2xsKHtcbiAgICAgICAgICAgIGVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtc2Nyb2xsJyksXG4gICAgICAgICAgICBzbW9vdGg6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSwxMDAwKVxuXG59KSgpO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEV4dGVuZGVkIExvY29tb3RpdmUgU2Nyb2xsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0IE5hdGl2ZSBmcm9tICcuL3ZlbmRvcnMvTmF0aXZlJ1xuXG4vKipcbiAqIFVOQ09NTUVOVCBPTkxZIFRIRSBMSU5FUyBZT1UgTkVFRFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgTmF0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEV4dGVuZGVkIExvY29tb3RpdmUgU21vb3RoIFNjcm9sbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCBTbW9vdGggZnJvbSAnLi92ZW5kb3JzL1Ntb290aCdcblxuLyoqXG4gKiBVTkNPTU1FTlQgT05MWSBUSEUgTElORVMgWU9VIE5FRURcbiAqL1xuLy8gaW1wb3J0IHZpcnR1YWxTY3JvbGwgZnJvbSAndmlydHVhbC1zY3JvbGwnO1xuLy8gaW1wb3J0IENvcmUgZnJvbSAnLi9Db3JlJztcbi8vIGltcG9ydCB7IGxlcnAgfSBmcm9tICcuLi91dGlscy9tYXRocydcbi8vIGltcG9ydCB7IGdldFRyYW5zbGF0ZSB9IGZyb20gJy4uL3V0aWxzL3RyYW5zZm9ybSdcbi8vIGltcG9ydCB7IGdldFBhcmVudHMsIHF1ZXJ5Q2xvc2VzdFBhcmVudCB9IGZyb20gJy4uL3V0aWxzL2h0bWwnO1xuXG4vLyBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFNtb290aCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi9vcHRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLm5hbWVzcGFjZSA9ICdsb2NvbW90aXZlJztcbiAgICAgICAgdGhpcy5odG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuZWxzID0gW107XG5cbiAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGwgPSB0aGlzLmNoZWNrU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tSZXNpemUgPSB0aGlzLmNoZWNrUmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IHtcbiAgICAgICAgICAgIHNjcm9sbDoge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG51bGwsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuaW5pdENsYXNzKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jaGVja1Jlc2l6ZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgIH1cblxuICAgIGNoZWNrU2Nyb2xsKCkge31cblxuICAgIGNoZWNrUmVzaXplKCkge31cblxuICAgIGluaXRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9FbHMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLSR7dGhpcy5uYW1lfS10b11gKTtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxUbyA9IHRoaXMuc2V0U2Nyb2xsVG8uYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnNjcm9sbFRvRWxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2V0U2Nyb2xsVG8sIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0U2Nyb2xsVG8oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnNjcm9sbFRvKFxuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHt0aGlzLm5hbWV9LWhyZWZgKSB8fCBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpLFxuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHt0aGlzLm5hbWV9LW9mZnNldGApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYWRkRWxlbWVudHMoKSB7fVxuXG4gICAgZGV0ZWN0RWxlbWVudHMoKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHNjcm9sbFRvcCArIHRoaXMud2luZG93SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuZWxzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVsLmluVmlldykge1xuICAgICAgICAgICAgICAgIGlmICgoc2Nyb2xsQm90dG9tID49IGVsLnRvcCkgJiYgKHNjcm9sbFRvcCA8IGVsLmJvdHRvbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJblZpZXcoZWwsIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGVsLmluVmlldykge1xuICAgICAgICAgICAgICAgIGlmICgoc2Nyb2xsQm90dG9tIDwgZWwudG9wKSB8fCAoc2Nyb2xsVG9wID4gZWwuYm90dG9tKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE91dE9mVmlldyhlbCwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRJblZpZXcoY3VycmVudCwgaSkge1xuICAgICAgICB0aGlzLmVsc1tpXS5pblZpZXcgPSB0cnVlO1xuICAgICAgICBjdXJyZW50LmVsLmNsYXNzTGlzdC5hZGQoY3VycmVudC5jbGFzcyk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnQuY2FsbCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsVmFsdWUgPSBjdXJyZW50LmNhbGwuc3BsaXQoJywnKS5tYXAoaXRlbSA9PiBpdGVtLnRyaW0oKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jYWxsVmFsdWUubGVuZ3RoID09IDEpIHRoaXMuY2FsbFZhbHVlID0gdGhpcy5jYWxsVmFsdWVbMF07XG5cbiAgICAgICAgICAgIGNvbnN0IGNhbGxFdmVudCA9IG5ldyBFdmVudCh0aGlzLm5hbWVzcGFjZSArICdjYWxsJyk7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChjYWxsRXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjdXJyZW50LnJlcGVhdCAmJiBjdXJyZW50LnNwZWVkID09PSBmYWxzZSAmJiAhY3VycmVudC5zdGlja3kgKXtcbiAgICAgICAgICAgIHRoaXMuZWxzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE91dE9mVmlldyhjdXJyZW50LCBpKSB7XG4gICAgICAgIGlmKGN1cnJlbnQucmVwZWF0IHx8IGN1cnJlbnQuc3BlZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbHNbaV0uaW5WaWV3ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZihjdXJyZW50LnJlcGVhdCApIHtcbiAgICAgICAgICAgIGN1cnJlbnQuZWwuY2xhc3NMaXN0LnJlbW92ZShjdXJyZW50LmNsYXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uKGV2ZW50LCBmdW5jKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZXNwYWNlICsgZXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjYWxsJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmModGhpcy5jYWxsVmFsdWUpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBzdGFydFNjcm9sbCgpIHt9XG5cbiAgICBzdG9wU2Nyb2xsKCkge31cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNoZWNrUmVzaXplLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUb0Vscy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNldFNjcm9sbFRvLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb3JlIGZyb20gJy4vQ29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29yZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNoZWNrU2Nyb2xsLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5kZXRlY3RFbGVtZW50cygpO1xuXG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICB9XG5cbiAgICBjaGVja1Njcm9sbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICAgICAgICBpZighdGhpcy5oYXNTY3JvbGxUaWNraW5nKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRlY3RFbGVtZW50cygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1Jlc2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc1Njcm9sbFRpY2tpbmcpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnRzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCBlbHMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLScrdGhpcy5uYW1lKyddJyk7XG5cbiAgICAgICAgZWxzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2wgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdDbGFzcyddIHx8IHRoaXMuY2xhc3M7XG4gICAgICAgICAgICBsZXQgdG9wID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgICAgICAgIGxldCBib3R0b20gPSB0b3AgKyBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gcGFyc2VJbnQoZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnT2Zmc2V0J10pIHx8IHBhcnNlSW50KHRoaXMub2Zmc2V0KTtcbiAgICAgICAgICAgIGxldCByZXBlYXQgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdSZXBlYXQnXTtcbiAgICAgICAgICAgIGxldCBjYWxsID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnQ2FsbCddO1xuXG4gICAgICAgICAgICBpZihyZXBlYXQgPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXBlYXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0ID0gdGhpcy5yZXBlYXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZWxzW2ldID0ge1xuICAgICAgICAgICAgICAgIGVsOiBlbCxcbiAgICAgICAgICAgICAgICBjbGFzczogY2wsXG4gICAgICAgICAgICAgICAgdG9wOiB0b3AgKyBvZmZzZXQsXG4gICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICAgICAgICAgICAgaW5WaWV3OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjYWxsOiBjYWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLmVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9wID0gZWwuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbSA9IHRvcCArIGVsLmVsLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgdGhpcy5lbHNbaV0udG9wID0gdG9wICsgZWwub2Zmc2V0O1xuICAgICAgICAgICAgdGhpcy5lbHNbaV0uYm90dG9tID0gYm90dG9tO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gYSBkZXNpcmVkIHRhcmdldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2Nyb2xsVG8odGFyZ2V0T3B0aW9uLCBvZmZzZXRPcHRpb24pIHtcbiAgICAgICAgbGV0IHRhcmdldDtcbiAgICAgICAgbGV0IG9mZnNldCA9IG9mZnNldE9wdGlvbiA/IHBhcnNlSW50KG9mZnNldE9wdGlvbikgOiAwO1xuXG4gICAgICAgIGlmKHR5cGVvZiB0YXJnZXRPcHRpb24gPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgICAgICAgIGlmKHRhcmdldE9wdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGlzLmh0bWw7XG4gICAgICAgICAgICB9IGVsc2UgaWYodGFyZ2V0T3B0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IGRvY3VtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWwuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiBcImVuZFwiLCBpbmxpbmU6IFwibmVhcmVzdFwifSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXRPcHRpb24pWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZighdGFyZ2V0T3B0aW9uLnRhcmdldCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0T3B0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIG9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJ30pO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50cygpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcblxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jaGVja1Njcm9sbCwgZmFsc2UpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHZpcnR1YWxTY3JvbGwgZnJvbSAndmlydHVhbC1zY3JvbGwnO1xuaW1wb3J0IENvcmUgZnJvbSAnLi9Db3JlJztcbmltcG9ydCB7IGxlcnAgfSBmcm9tICcuLi8uLi91dGlscy9tYXRocydcbmltcG9ydCB7IGdldFRyYW5zbGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3RyYW5zZm9ybSdcbmltcG9ydCB7IGdldFBhcmVudHMsIHF1ZXJ5Q2xvc2VzdFBhcmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2h0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvcmUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmluZXJ0aWEgPSB0aGlzLmluZXJ0aWEgKiAwLjE7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsYmFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5pbmVydGlhUmF0aW8gPSAxO1xuICAgICAgICB0aGlzLnN0b3AgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLnNtb290aENsYXNzKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlID0ge1xuICAgICAgICAgICAgdnM6IG5ldyB2aXJ0dWFsU2Nyb2xsKHtcbiAgICAgICAgICAgICAgICBtb3VzZU11bHRpcGxpZXI6IChuYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZignV2luJykgPiAtMSkgPyAxIDogMC40LFxuICAgICAgICAgICAgICAgIHRvdWNoTXVsdGlwbGllcjogNCxcbiAgICAgICAgICAgICAgICBmaXJlZm94TXVsdGlwbGllcjogMzBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZGVsdGE6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi50aGlzLmluc3RhbmNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlLnZzLm9uKChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdG9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNUaWNraW5nICYmICF0aGlzLmlzRHJhZ2dpbmdTY3JvbGxiYXIpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNTY3JvbGxpbmcpIHRoaXMuc3RhcnRTY3JvbGxpbmcoKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlbHRhKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTGltaXQoKTtcbiAgICAgICAgdGhpcy5pbml0U2Nyb2xsQmFyKCk7XG4gICAgICAgIHRoaXMuYWRkU2VjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmRldGVjdEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudHModHJ1ZSk7XG5cbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuICAgIH1cblxuICAgIHNldFNjcm9sbExpbWl0KCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmxpbWl0ID0gdGhpcy5lbC5vZmZzZXRIZWlnaHQgLSB0aGlzLndpbmRvd0hlaWdodDtcbiAgICB9XG5cbiAgICBzdGFydFNjcm9sbGluZygpIHtcbiAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5hZGQodGhpcy5zY3JvbGxpbmdDbGFzcyk7XG4gICAgfVxuXG4gICAgc3RvcFNjcm9sbGluZygpIHtcbiAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluZXJ0aWFSYXRpbyA9IDE7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSBNYXRoLnJvdW5kKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpO1xuICAgICAgICB0aGlzLmh0bWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNjcm9sbGluZ0NsYXNzKTtcbiAgICB9XG5cbiAgICBjaGVja1Njcm9sbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTY3JvbGxpbmcgfHwgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzU2Nyb2xsVGlja2luZykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PsKgdGhpcy5jaGVja1Njcm9sbCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IChNYXRoLmFicyh0aGlzLmluc3RhbmNlLmRlbHRhLnkgLSB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSk7XG4gICAgICAgICAgICBpZiAoKGRpc3RhbmNlIDwgMC45ICYmIHRoaXMuaW5zdGFuY2UuZGVsdGEueSAhPSAwKSB8fCAoZGlzdGFuY2UgPCAwLjUgJiYgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID09IDApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnNlY3Rpb25zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zZWN0aW9uc1tpXS5wZXJzaXN0ZW50IHx8ICh0aGlzLmluc3RhbmNlLnNjcm9sbC55ID4gdGhpcy5zZWN0aW9uc1tpXS5vZmZzZXQgJiYgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8IHRoaXMuc2VjdGlvbnNbaV0ubGltaXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuc2VjdGlvbnNbaV0uZWwsIDAsIC10aGlzLmluc3RhbmNlLnNjcm9sbC55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXS5lbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zW2ldLmluVmlldyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXS5lbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbnNbaV0uaW5WaWV3ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuc2VjdGlvbnNbaV0uZWwsIDAsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXREaXJlY3Rpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0U3BlZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNwZWVkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRldGVjdEVsZW1lbnRzKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEJhclRyYW5zbGF0aW9uID0gKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgLyB0aGlzLmluc3RhbmNlLmxpbWl0KSAqIHRoaXMuc2Nyb2xsQmFyTGltaXQ7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLnNjcm9sbGJhclRodW1iLCAwLCBzY3JvbGxCYXJUcmFuc2xhdGlvbik7XG5cbiAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tSZXNpemUoKSB7XG4gICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLndpbmRvd01pZGRsZSA9IHRoaXMud2luZG93SGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEZWx0YShlKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGEueSAtPSBlLmRlbHRhWTtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA8IDApIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IDA7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgPiB0aGlzLmluc3RhbmNlLmxpbWl0KSB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSB0aGlzLmluc3RhbmNlLmxpbWl0O1xuICAgIH1cblxuICAgIHVwZGF0ZVNjcm9sbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSBsZXJwKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnksIHRoaXMuaW5zdGFuY2UuZGVsdGEueSwgdGhpcy5pbmVydGlhICogdGhpcy5pbmVydGlhUmF0aW8pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNEcmFnZ2luZ1Njcm9sbEJhcikge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IGxlcnAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSwgdGhpcy5pbnN0YW5jZS5kZWx0YS55LCAodGhpcy5pbmVydGlhICogMikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IHRoaXMuaW5zdGFuY2UuZGVsdGEueTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldERpcmVjdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA+IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gIT09ICdkb3duJykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiA9ICdkb3duJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgPCB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uICE9PSAndXAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uID0gJ3VwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNwZWVkKCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55ICE9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnNwZWVkID0gKHRoaXMuaW5zdGFuY2UuZGVsdGEueSAtIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIC8gKERhdGUubm93KCkgLSB0aGlzLnRpbWVzdGFtcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5zcGVlZCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0U2Nyb2xsQmFyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIuY2xhc3NMaXN0LmFkZChgJHt0aGlzLnNjcm9sbGJhckNsYXNzfWApO1xuICAgICAgICB0aGlzLnNjcm9sbGJhclRodW1iLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5zY3JvbGxiYXJDbGFzc31fdGh1bWJgKTtcblxuICAgICAgICB0aGlzLnNjcm9sbGJhci5hcHBlbmQodGhpcy5zY3JvbGxiYXJUaHVtYik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuc2Nyb2xsYmFyKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5zdHlsZS5oZWlnaHQgPSBgJHsod2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmlubmVySGVpZ2h0KSAvICh0aGlzLmluc3RhbmNlLmxpbWl0ICsgd2luZG93LmlubmVySGVpZ2h0KX1weGA7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmFyTGltaXQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLnNjcm9sbGJhclRodW1iLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgICAgICB0aGlzLnNjcm9sbGJhclRodW1iLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsKGUpID0+IHRoaXMuZ2V0U2Nyb2xsQmFyKGUpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLChlKSA9PiB0aGlzLnJlbGVhc2VTY3JvbGxCYXIoZSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywoZSkgPT4gdGhpcy5tb3ZlU2Nyb2xsQmFyKGUpKTtcbiAgICB9XG5cbiAgICByZWluaXRTY3JvbGxCYXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyVGh1bWIuc3R5bGUuaGVpZ2h0ID0gYCR7KHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyB0aGlzLmluc3RhbmNlLmxpbWl0fXB4YDtcbiAgICAgICAgdGhpcy5zY3JvbGxCYXJMaW1pdCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuc2Nyb2xsYmFyVGh1bWIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cblxuICAgIGRlc3Ryb3lTY3JvbGxCYXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyVGh1bWIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywoZSkgPT4gdGhpcy5nZXRTY3JvbGxCYXIoZSkpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsKGUpID0+IHRoaXMucmVsZWFzZVNjcm9sbEJhcihlKSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLChlKSA9PiB0aGlzLm1vdmVTY3JvbGxCYXIoZSkpO1xuICAgIH1cblxuICAgIGdldFNjcm9sbEJhcihlKSB7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhciA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zY3JvbGxpbmdDbGFzcyk7XG4gICAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuZHJhZ2dpbmdDbGFzcyk7XG4gICAgfVxuXG4gICAgcmVsZWFzZVNjcm9sbEJhcihlKSB7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLnNjcm9sbGluZ0NsYXNzKTtcbiAgICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kcmFnZ2luZ0NsYXNzKTtcbiAgICB9XG5cbiAgICBtb3ZlU2Nyb2xsQmFyKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVGlja2luZyAmJiB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxiYXIpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSAoZS5jbGllbnRZICogMTAwIC8gKHdpbmRvdy5pbm5lckhlaWdodCkpICogdGhpcy5pbnN0YW5jZS5saW1pdCAvIDEwMDtcblxuICAgICAgICAgICAgICAgIGlmKHkgPiAwICYmIHkgPCB0aGlzLmluc3RhbmNlLmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmlzVGlja2luZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5lbHMgPSBbXVxuICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMgPSBbXVxuXG4gICAgICAgIHRoaXMuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxzID0gdGhpcy5zZWN0aW9uc1t5XS5lbC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS0ke3RoaXMubmFtZX1dYCk7XG5cbiAgICAgICAgICAgIGVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjbCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0NsYXNzJ10gfHwgdGhpcy5jbGFzcztcbiAgICAgICAgICAgICAgICBsZXQgdG9wO1xuICAgICAgICAgICAgICAgIGxldCByZXBlYXQgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdSZXBlYXQnXTtcbiAgICAgICAgICAgICAgICBsZXQgY2FsbCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0NhbGwnXTtcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdQb3NpdGlvbiddO1xuICAgICAgICAgICAgICAgIGxldCBkZWxheSA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0RlbGF5J107XG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0RpcmVjdGlvbiddO1xuICAgICAgICAgICAgICAgIGxldCBzdGlja3kgPSB0eXBlb2YgZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnU3RpY2t5J10gPT09ICdzdHJpbmcnO1xuICAgICAgICAgICAgICAgIGxldCBzcGVlZCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ1NwZWVkJ10gPyBwYXJzZUZsb2F0KGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ1NwZWVkJ10pLzEwIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9ICh0eXBlb2YgZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnT2Zmc2V0J10gPT09ICdzdHJpbmcnKSA/IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ09mZnNldCddLnNwbGl0KCcsJykgOiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdUYXJnZXQnXTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0RWw7XG5cbiAgICAgICAgICAgICAgICBpZih0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7dGFyZ2V0fWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEVsID0gZWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc2VjdGlvbnNbeV0uaW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHRhcmdldEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGdldFRyYW5zbGF0ZSh0aGlzLnNlY3Rpb25zW3ldLmVsKS55IC0gZ2V0VHJhbnNsYXRlKHRhcmdldEVsKS55O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHRhcmdldEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgLSBnZXRUcmFuc2xhdGUodGFyZ2V0RWwpLnk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGJvdHRvbSA9IHRvcCArIHRhcmdldEVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICBsZXQgbWlkZGxlID0gKChib3R0b20gLSB0b3ApIC8gMikgKyB0b3A7XG5cbiAgICAgICAgICAgICAgICBpZihzdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wICs9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gdG9wICsgdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0IC0gZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBtaWRkbGUgPSAoKGJvdHRvbSAtIHRvcCkgLyAyKSArIHRvcDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihyZXBlYXQgPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcGVhdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSB0aGlzLnJlcGVhdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgcmVsYXRpdmVPZmZzZXQgPSBbMCwwXTtcbiAgICAgICAgICAgICAgICBpZihvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvZmZzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9mZnNldFtpXS5pbmNsdWRlcygnJScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXRbaV0gPSBwYXJzZUludChvZmZzZXRbaV0ucmVwbGFjZSgnJScsJycpICogdGhpcy53aW5kb3dIZWlnaHQgLyAxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZU9mZnNldFtpXSA9IHBhcnNlSW50KG9mZnNldFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRFbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZWwsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBjbCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0b3AgKyByZWxhdGl2ZU9mZnNldFswXSxcbiAgICAgICAgICAgICAgICAgICAgbWlkZGxlLFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IGJvdHRvbSAtIHJlbGF0aXZlT2Zmc2V0WzFdLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgICAgICAgICAgaW5WaWV3OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbCxcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5LFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRFbCxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzdGlja3lcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmVscy5wdXNoKG1hcHBlZEVsKTtcblxuICAgICAgICAgICAgICAgIGlmKHNwZWVkICE9PSBmYWxzZSB8fCBzdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzLnB1c2gobWFwcGVkRWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkU2VjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuc2VjdGlvbnMgPSBbXTtcblxuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtJHt0aGlzLm5hbWV9LXNlY3Rpb25dYCk7XG5cbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gKHdpbmRvdy5pbm5lckhlaWdodCAqIDEuNSkgLSBnZXRUcmFuc2xhdGUoc2VjdGlvbikueTtcbiAgICAgICAgICAgIGxldCBsaW1pdCA9IG9mZnNldCArIHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgKHdpbmRvdy5pbm5lckhlaWdodCAqIDIpO1xuICAgICAgICAgICAgbGV0IHBlcnNpc3RlbnQgPSB0eXBlb2Ygc2VjdGlvbi5kYXRhc2V0W3RoaXMubmFtZSArICdQZXJzaXN0ZW50J10gPT09ICdzdHJpbmcnO1xuXG4gICAgICAgICAgICBsZXQgaW5WaWV3ID0gZmFsc2U7XG4gICAgICAgICAgICBpZih0aGlzLmluc3RhbmNlLnNjcm9sbC55ID49IG9mZnNldCAmJiB0aGlzLmluc3RhbmNlLnNjcm9sbC55IDw9IGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgaW5WaWV3ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbWFwcGVkU2VjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBlbDogc2VjdGlvbixcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICAgICAgICBsaW1pdDogbGltaXQsXG4gICAgICAgICAgICAgICAgaW5WaWV3OiBpblZpZXcsXG4gICAgICAgICAgICAgICAgcGVyc2lzdGVudDogcGVyc2lzdGVudFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25zW2ldID0gbWFwcGVkU2VjdGlvbjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKGVsZW1lbnQsIHgsIHksIGRlbGF5KSB7XG4gICAgICAgIGxldCB0cmFuc2Zvcm07XG5cbiAgICAgICAgaWYoIWRlbGF5KSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSBgbWF0cml4KDEsMCwwLDEsJHt4fSwke3l9KWBcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgbGV0IGxlcnBYID0gbGVycChzdGFydC54LCB4LCBkZWxheSk7XG4gICAgICAgICAgICBsZXQgbGVycFkgPSBsZXJwKHN0YXJ0LnksIHksIGRlbGF5KTtcblxuICAgICAgICAgICAgdHJhbnNmb3JtID0gYG1hdHJpeCgxLDAsMCwxLCR7bGVycFh9LCR7bGVycFl9KWBcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1FbGVtZW50cyhpc0ZvcmNlZCkge1xuICAgICAgICBjb25zdCBzY3JvbGxCb3R0b20gPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICsgdGhpcy53aW5kb3dIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHNjcm9sbE1pZGRsZSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0aGlzLndpbmRvd01pZGRsZTtcblxuICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMuZm9yRWFjaCgoY3VycmVudCwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRyYW5zZm9ybURpc3RhbmNlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmKChpc0ZvcmNlZCAmJiAhY3VycmVudC5pblZpZXcpKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAwXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGN1cnJlbnQuaW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChjdXJyZW50LnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKiAtY3VycmVudC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKHRoaXMuaW5zdGFuY2UubGltaXQgLSBzY3JvbGxCb3R0b20gKyB0aGlzLndpbmRvd0hlaWdodCkgKiBjdXJyZW50LnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAoc2Nyb2xsTWlkZGxlIC0gY3VycmVudC5taWRkbGUpICogLWN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY3VycmVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50LmluVmlldykge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgLSBjdXJyZW50LnRvcCArIHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPCBjdXJyZW50LnRvcCAmJiB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID4gY3VycmVudC50b3AgLTEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+IGN1cnJlbnQuYm90dG9tICYmIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPCBjdXJyZW50LmJvdHRvbSArIDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSBjdXJyZW50LmJvdHRvbSAtIGN1cnJlbnQudG9wICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodHJhbnNmb3JtRGlzdGFuY2UgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudC5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybShjdXJyZW50LmVsLCB0cmFuc2Zvcm1EaXN0YW5jZSwgMCwgKGlzRm9yY2VkID8gZmFsc2UgOiBjdXJyZW50LmRlbGF5KSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybShjdXJyZW50LmVsLCAwLCB0cmFuc2Zvcm1EaXN0YW5jZSwgKGlzRm9yY2VkID8gZmFsc2UgOiBjdXJyZW50LmRlbGF5KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgZGVzaXJlZCB0YXJnZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiAgICAgIEF2YWlsYWJsZSBvcHRpb25zIDpcbiAgICAgKiAgICAgICAgICB7bm9kZX0gdGFyZ2V0IC0gVGhlIERPTSBlbGVtZW50IHdlIHdhbnQgdG8gc2Nyb2xsIHRvXG4gICAgICogICAgICAgICAge25vZGV9IHNvdXJjZUVsZW0gLSBBbiBgPGE+YCBlbGVtZW50IHdpdGggYW4gaHJlZiB0YXJnZXRpbmcgdGhlIGFuY2hvciB3ZSB3YW50IHRvIHNjcm9sbCB0b1xuICAgICAqICAgICAgICAgIHtub2RlfSBvZmZzZXRFbGVtIC0gQSBET00gZWxlbWVudCBmcm9tIHdoaWNoIHdlIGdldCB0aGUgaGVpZ2h0IHRvIHN1YnN0cmFjdCBmcm9tIHRoZSBvZmZzZXRcbiAgICAgKiAgICAgICAgICAgICAgKGV4OiB1c2Ugb2Zmc2V0RWxlbSB0byBwYXNzIGEgbW9iaWxlIGhlYWRlciB0aGF0IGlzIGFib3ZlIGNvbnRlbnQsIHRvIG1ha2Ugc3VyZSB0aGUgc2Nyb2xsVG8gd2lsbCBiZSBhbGlnbmVkIHdpdGggaXQpXG4gICAgICogICAgICAgICAge2ludH0gb2Zmc2V0IC0gQW4gYWJzb2x1dGUgdmVydGljYWwgc2Nyb2xsIHZhbHVlIHRvIHJlYWNoLCBvciBhbiBvZmZzZXQgdG8gYXBwbHkgb24gdG9wIG9mIGdpdmVuIGB0YXJnZXRgIG9yIGBzb3VyY2VFbGVtYCdzIHRhcmdldFxuICAgICAqICAgICAgICAgIHtpbnR9IGRlbGF5IC0gQW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZSBzdGFydGluZyB0byBzY3JvbGxcbiAgICAgKiAgICAgICAgICB7Ym9vbGVhbn0gdG9Ub3AgLSBTZXQgdG8gdHJ1ZSB0byBzY3JvbGwgYWxsIHRoZSB3YXkgdG8gdGhlIHRvcFxuICAgICAqICAgICAgICAgIHtib29sZWFufSB0b0JvdHRvbSAtIFNldCB0byB0cnVlIHRvIHNjcm9sbCBhbGwgdGhlIHdheSB0byB0aGUgYm90dG9tXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzY3JvbGxUbyh0YXJnZXRPcHRpb24sIG9mZnNldE9wdGlvbikge1xuICAgICAgICBsZXQgdGFyZ2V0O1xuICAgICAgICBsZXQgb2Zmc2V0ID0gb2Zmc2V0T3B0aW9uID8gcGFyc2VJbnQob2Zmc2V0T3B0aW9uKSA6IDA7XG5cbiAgICAgICAgaWYodHlwZW9mIHRhcmdldE9wdGlvbiA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgICAgICAgaWYodGFyZ2V0T3B0aW9uID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYodGFyZ2V0T3B0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuaW5zdGFuY2UubGltaXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0T3B0aW9uKVswXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYoIXRhcmdldE9wdGlvbi50YXJnZXQpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldE9wdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIGhhdmUgYSB0YXJnZXQsIGdldCBpdCdzIGNvb3JkaW5hdGVzXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIEdldCB0YXJnZXQgb2Zmc2V0IGZyb20gdG9wXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRCQ1IgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFRvcCA9IHRhcmdldEJDUi50b3AgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55XG5cbiAgICAgICAgICAgIC8vIFRyeSBhbmQgZmluZCB0aGUgdGFyZ2V0J3MgcGFyZW50IHNlY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFBhcmVudHMgPSBnZXRQYXJlbnRzKHRhcmdldClcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudFNlY3Rpb24gPSB0YXJnZXRQYXJlbnRzLmZpbmQoY2FuZGlkYXRlID0+IHRoaXMuc2VjdGlvbnMuZmluZChzZWN0aW9uID0+IHNlY3Rpb24uZWxlbWVudCA9PSBjYW5kaWRhdGUpKVxuICAgICAgICAgICAgbGV0IHBhcmVudFNlY3Rpb25PZmZzZXQgPSAwXG4gICAgICAgICAgICBpZihwYXJlbnRTZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50U2VjdGlvbk9mZnNldCA9IGdldFRyYW5zbGF0ZShwYXJlbnRTZWN0aW9uKS55IC8vIFdlIGdvdCBhIHBhcmVudCBzZWN0aW9uLCBzdG9yZSBpdCdzIGN1cnJlbnQgb2Zmc2V0IHRvIHJlbW92ZSBpdCBsYXRlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmluYWwgdmFsdWUgb2Ygc2Nyb2xsIGRlc3RpbmF0aW9uIDogb2Zmc2V0VG9wICsgKG9wdGlvbmFsIG9mZnNldCBnaXZlbiBpbiBvcHRpb25zKSAtIChwYXJlbnQncyBzZWN0aW9uIHRyYW5zbGF0ZSlcbiAgICAgICAgICAgIG9mZnNldCA9IG9mZnNldFRvcCArIG9mZnNldCAtIHBhcmVudFNlY3Rpb25PZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSBNYXRoLm1pbihvZmZzZXQsIHRoaXMuaW5zdGFuY2UubGltaXQpOyAvLyBBY3R1YWwgc2Nyb2xsVG8gKHRoZSBsZXJwIHdpbGwgZG8gdGhlIGFuaW1hdGlvbiBpdHNlbGYpXG4gICAgICAgIHRoaXMuaW5lcnRpYVJhdGlvID0gTWF0aC5taW4oNDAwMCAvIE1hdGguYWJzKHRoaXMuaW5zdGFuY2UuZGVsdGEueSAtIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpLDAuOCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBzY3JvbGwuIElmIHdlIHdlcmUgaW4gaWRsZSBzdGF0ZTogd2UncmUgbm90IGFueW1vcmVcbiAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGwoKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxMaW1pdCgpO1xuICAgICAgICB0aGlzLmFkZFNlY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5kZXRlY3RFbGVtZW50cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKHRydWUpO1xuICAgIH1cblxuICAgIHN0YXJ0U2Nyb2xsKCkge1xuICAgICAgICB0aGlzLnN0b3AgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzdG9wU2Nyb2xsKCkge1xuICAgICAgICB0aGlzLnN0b3AgPSB0cnVlO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgU2Nyb2xsIGZyb20gJy4uL05hdGl2ZSc7XG5pbXBvcnQgU21vb3RoIGZyb20gJy4uL1Ntb290aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNtb290aE1vYmlsZSkge1xuICAgICAgICAgICAgdGhpcy5pc01vYmlsZSA9ICgvQW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc21vb3RoID09PSB0cnVlICYmICF0aGlzLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbCA9IG5ldyBTbW9vdGgodGhpcy5vcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsID0gbmV3IFNjcm9sbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGwuaW5pdCgpO1xuXG4gICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUbyh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNjcm9sbC5zdGFydFNjcm9sbCgpO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsLnN0b3BTY3JvbGwoKTtcbiAgICB9XG5cbiAgICBzY3JvbGxUbyh0YXJnZXQsIG9mZnNldCkge1xuICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUbyh0YXJnZXQsIG9mZnNldCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGwuZGVzdHJveSgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICBlbDogZG9jdW1lbnQsXG4gICAgZWxNb2JpbGU6IGRvY3VtZW50LFxuICAgIG5hbWU6ICdzY3JvbGwnLFxuICAgIG9mZnNldDogMCxcbiAgICByZXBlYXQ6IGZhbHNlLFxuICAgIHNtb290aDogZmFsc2UsXG4gICAgc21vb3RoTW9iaWxlOiBmYWxzZSxcbiAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gICAgaW5lcnRpYTogMSxcbiAgICBjbGFzczogJ2lzLWludmlldycsXG4gICAgc2Nyb2xsYmFyQ2xhc3M6ICdjLXNjcm9sbGJhcicsXG4gICAgc2Nyb2xsaW5nQ2xhc3M6ICdpcy1zY3JvbGxpbmcnLFxuICAgIGRyYWdnaW5nQ2xhc3M6ICdpcy1kcmFnZ2luZycsXG4gICAgc21vb3RoQ2xhc3M6ICdoYXMtc21vb3Roc2Nyb2xsJyxcbiAgICBpbml0Q2xhc3M6ICdoYXMtc2Nyb2xsLWluaXQnXG59O1xuIiwiLyoqXG4gKiBAc2VlICBodHRwczovL2dpdGh1Yi5jb20vcmFjdGl2ZWpzL3JhY3RpdmUvYmxvYi9kZXYvc3JjL3V0aWxzL2h0bWwuanNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyKSB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5cbi8qKlxuICogUHJlcGFyZSBIVE1MIGNvbnRlbnQgdGhhdCBjb250YWlucyBtdXN0YWNoZSBjaGFyYWN0ZXJzIGZvciB1c2Ugd2l0aCBSYWN0aXZlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5lc2NhcGVIdG1sKHN0cikge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgICAgICAucmVwbGFjZSgvJmd0Oy9nLCAnPicpXG4gICAgICAgIC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xufVxuXG4vKipcbiAqIEdldCBlbGVtZW50IGRhdGEgYXR0cmlidXRlc1xuICogQHBhcmFtICAge0RPTUVsZW1lbnR9ICBub2RlXG4gKiBAcmV0dXJuICB7QXJyYXl9ICAgICAgIGRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGVEYXRhKG5vZGUpIHtcbiAgICAvLyBBbGwgYXR0cmlidXRlc1xuICAgIHZhciBhdHRyaWJ1dGVzID0gbm9kZS5hdHRyaWJ1dGVzO1xuXG4gICAgLy8gUmVnZXggUGF0dGVyblxuICAgIHZhciBwYXR0ZXJuID0gL15kYXRhXFwtKC4rKSQvO1xuXG4gICAgLy8gT3V0cHV0XG4gICAgdmFyIGRhdGEgPSB7fTtcblxuICAgIGZvciAobGV0IGkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoIWF0dHJpYnV0ZXNbaV0pIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXR0cmlidXRlcyBuYW1lIChleDogZGF0YS1tb2R1bGUpXG4gICAgICAgIGxldCBuYW1lID0gYXR0cmlidXRlc1tpXS5uYW1lO1xuXG4gICAgICAgIC8vIFRoaXMgaGFwcGVucy5cbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtYXRjaCA9IG5hbWUubWF0Y2gocGF0dGVybik7XG4gICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhpcyB0aHJvd3MgYW4gZXJyb3IsIHlvdSBoYXZlIHNvbWVcbiAgICAgICAgLy8gc2VyaW91cyBwcm9ibGVtcyBpbiB5b3VyIEhUTUwuXG4gICAgICAgIGRhdGFbbWF0Y2hbMV1dID0gbm9kZS5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgcGFyZW50IG5vZGVzIG9mIHRoZSBnaXZlbiBub2RlXG4gKiBAcGFyYW0gIHtvYmplY3R9IG5vZGVcbiAqIEByZXR1cm4ge2FycmF5fSBwYXJlbnQgbm9kZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudHMoZWxlbSkge1xuICAgIC8vIFNldCB1cCBhIHBhcmVudCBhcnJheVxuICAgIGxldCBwYXJlbnRzID0gW107XG5cbiAgICAvLyBQdXNoIGVhY2ggcGFyZW50IGVsZW1lbnQgdG8gdGhlIGFycmF5XG4gICAgZm9yICggOyBlbGVtICYmIGVsZW0gIT09IGRvY3VtZW50OyBlbGVtID0gZWxlbS5wYXJlbnROb2RlICkge1xuICAgICAgICBwYXJlbnRzLnB1c2goZWxlbSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIG91ciBwYXJlbnQgYXJyYXlcbiAgICByZXR1cm4gcGFyZW50cztcbn1cblxuLy8gaHR0cHM6Ly9nb21ha2V0aGluZ3MuY29tL2hvdy10by1nZXQtdGhlLWNsb3Nlc3QtcGFyZW50LWVsZW1lbnQtd2l0aC1hLW1hdGNoaW5nLXNlbGVjdG9yLXVzaW5nLXZhbmlsbGEtamF2YXNjcmlwdC9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUNsb3Nlc3RQYXJlbnQoZWxlbSwgc2VsZWN0b3IpIHtcblxuICAgIC8vIEVsZW1lbnQubWF0Y2hlcygpIHBvbHlmaWxsXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPVxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5vTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlcyA9ICh0aGlzLmRvY3VtZW50IHx8IHRoaXMub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzKSxcbiAgICAgICAgICAgICAgICAgICAgaSA9IG1hdGNoZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCAmJiBtYXRjaGVzLml0ZW0oaSkgIT09IHRoaXMpIHt9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgPiAtMTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBjbG9zZXN0IG1hdGNoaW5nIGVsZW1lbnRcbiAgICBmb3IgKCA7IGVsZW0gJiYgZWxlbSAhPT0gZG9jdW1lbnQ7IGVsZW0gPSBlbGVtLnBhcmVudE5vZGUgKSB7XG4gICAgICAgIGlmICggZWxlbS5tYXRjaGVzKCBzZWxlY3RvciApICkgcmV0dXJuIGVsZW07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGxlcnAoc3RhcnQsIGVuZCwgYW10KXtcbiAgICByZXR1cm4gKDEgLSBhbXQpICogc3RhcnQgKyBhbXQgKiBlbmRcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0oZWwsIHRyYW5zZm9ybVZhbHVlKXtcbiAgICBlbC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbiAgICBlbC5zdHlsZS5tc1RyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xuICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRlKGVsKXtcbiAgICBjb25zdCB0cmFuc2xhdGUgPSB7fVxuICAgIGlmKCF3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gfHwgc3R5bGUud2Via2l0VHJhbnNmb3JtIHx8IHN0eWxlLm1velRyYW5zZm9ybTtcblxuICAgIGxldCBtYXQgPSB0cmFuc2Zvcm0ubWF0Y2goL15tYXRyaXgzZFxcKCguKylcXCkkLyk7XG4gICAgaWYobWF0KSByZXR1cm4gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbMTNdKTtcbiAgICBtYXQgPSB0cmFuc2Zvcm0ubWF0Y2goL15tYXRyaXhcXCgoLispXFwpJC8pO1xuICAgIHRyYW5zbGF0ZS54ID0gbWF0ID8gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbNF0pIDogMDtcbiAgICB0cmFuc2xhdGUueSA9IG1hdCA/IHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzVdKSA6IDA7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRlO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZighb2JqZWN0KSByZXR1cm4gY29uc29sZS53YXJuKCdiaW5kQWxsIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBhcmd1bWVudC4nKTtcblxuICAgIHZhciBmdW5jdGlvbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgaWYgKGZ1bmN0aW9ucy5sZW5ndGggPT09IDApIHtcblxuICAgICAgICBmb3IgKHZhciBtZXRob2QgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBpZihoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgbWV0aG9kKSkge1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBvYmplY3RbbWV0aG9kXSA9PSAnZnVuY3Rpb24nICYmIHRvU3RyaW5nLmNhbGwob2JqZWN0W21ldGhvZF0pID09IFwiW29iamVjdCBGdW5jdGlvbl1cIikge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbnMucHVzaChtZXRob2QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmdW5jdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGYgPSBmdW5jdGlvbnNbaV07XG4gICAgICAgIG9iamVjdFtmXSA9IGJpbmQob2JqZWN0W2ZdLCBvYmplY3QpO1xuICAgIH1cbn07XG5cbi8qXG4gICAgRmFzdGVyIGJpbmQgd2l0aG91dCBzcGVjaWZpYy1jYXNlIGNoZWNraW5nLiAoc2VlIGh0dHBzOi8vY29kZXJ3YWxsLmNvbS9wL29pM2ozdykuXG4gICAgYmluZEFsbCBpcyBvbmx5IG5lZWRlZCBmb3IgZXZlbnRzIGJpbmRpbmcgc28gbm8gbmVlZCB0byBtYWtlIHNsb3cgZml4ZXMgZm9yIGNvbnN0cnVjdG9yXG4gICAgb3IgcGFydGlhbCBhcHBsaWNhdGlvbi5cbiovXG5mdW5jdGlvbiBiaW5kKGZ1bmMsIGNvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gIH07XG59IiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjkuMlxuKGZ1bmN0aW9uKCkge1xuICB2YXIgcm9vdDtcblxuICByb290ID0gdHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIgJiYgZXhwb3J0cyAhPT0gbnVsbCA/IGV4cG9ydHMgOiB0aGlzO1xuXG4gIHJvb3QuTGV0aGFyZ3kgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gTGV0aGFyZ3koc3RhYmlsaXR5LCBzZW5zaXRpdml0eSwgdG9sZXJhbmNlLCBkZWxheSkge1xuICAgICAgdGhpcy5zdGFiaWxpdHkgPSBzdGFiaWxpdHkgIT0gbnVsbCA/IE1hdGguYWJzKHN0YWJpbGl0eSkgOiA4O1xuICAgICAgdGhpcy5zZW5zaXRpdml0eSA9IHNlbnNpdGl2aXR5ICE9IG51bGwgPyAxICsgTWF0aC5hYnMoc2Vuc2l0aXZpdHkpIDogMTAwO1xuICAgICAgdGhpcy50b2xlcmFuY2UgPSB0b2xlcmFuY2UgIT0gbnVsbCA/IDEgKyBNYXRoLmFicyh0b2xlcmFuY2UpIDogMS4xO1xuICAgICAgdGhpcy5kZWxheSA9IGRlbGF5ICE9IG51bGwgPyBkZWxheSA6IDE1MDtcbiAgICAgIHRoaXMubGFzdFVwRGVsdGFzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDEsIHJlZiA9IHRoaXMuc3RhYmlsaXR5ICogMjsgMSA8PSByZWYgPyBpIDw9IHJlZiA6IGkgPj0gcmVmOyAxIDw9IHJlZiA/IGkrKyA6IGktLSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLmxhc3REb3duRGVsdGFzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDEsIHJlZiA9IHRoaXMuc3RhYmlsaXR5ICogMjsgMSA8PSByZWYgPyBpIDw9IHJlZiA6IGkgPj0gcmVmOyAxIDw9IHJlZiA/IGkrKyA6IGktLSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLmRlbHRhc1RpbWVzdGFtcCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBsYXN0RGVsdGE7XG4gICAgICBlID0gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XG4gICAgICBpZiAoZS53aGVlbERlbHRhICE9IG51bGwpIHtcbiAgICAgICAgbGFzdERlbHRhID0gZS53aGVlbERlbHRhO1xuICAgICAgfSBlbHNlIGlmIChlLmRlbHRhWSAhPSBudWxsKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUuZGVsdGFZICogLTQwO1xuICAgICAgfSBlbHNlIGlmICgoZS5kZXRhaWwgIT0gbnVsbCkgfHwgZS5kZXRhaWwgPT09IDApIHtcbiAgICAgICAgbGFzdERlbHRhID0gZS5kZXRhaWwgKiAtNDA7XG4gICAgICB9XG4gICAgICB0aGlzLmRlbHRhc1RpbWVzdGFtcC5wdXNoKERhdGUubm93KCkpO1xuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAuc2hpZnQoKTtcbiAgICAgIGlmIChsYXN0RGVsdGEgPiAwKSB7XG4gICAgICAgIHRoaXMubGFzdFVwRGVsdGFzLnB1c2gobGFzdERlbHRhKTtcbiAgICAgICAgdGhpcy5sYXN0VXBEZWx0YXMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmVydGlhKDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcy5wdXNoKGxhc3REZWx0YSk7XG4gICAgICAgIHRoaXMubGFzdERvd25EZWx0YXMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmVydGlhKC0xKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLmlzSW5lcnRpYSA9IGZ1bmN0aW9uKGRpcmVjdGlvbikge1xuICAgICAgdmFyIGxhc3REZWx0YXMsIGxhc3REZWx0YXNOZXcsIGxhc3REZWx0YXNPbGQsIG5ld0F2ZXJhZ2UsIG5ld1N1bSwgb2xkQXZlcmFnZSwgb2xkU3VtO1xuICAgICAgbGFzdERlbHRhcyA9IGRpcmVjdGlvbiA9PT0gLTEgPyB0aGlzLmxhc3REb3duRGVsdGFzIDogdGhpcy5sYXN0VXBEZWx0YXM7XG4gICAgICBpZiAobGFzdERlbHRhc1swXSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZGVsdGFzVGltZXN0YW1wWyh0aGlzLnN0YWJpbGl0eSAqIDIpIC0gMl0gKyB0aGlzLmRlbGF5ID4gRGF0ZS5ub3coKSAmJiBsYXN0RGVsdGFzWzBdID09PSBsYXN0RGVsdGFzWyh0aGlzLnN0YWJpbGl0eSAqIDIpIC0gMV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgbGFzdERlbHRhc09sZCA9IGxhc3REZWx0YXMuc2xpY2UoMCwgdGhpcy5zdGFiaWxpdHkpO1xuICAgICAgbGFzdERlbHRhc05ldyA9IGxhc3REZWx0YXMuc2xpY2UodGhpcy5zdGFiaWxpdHksIHRoaXMuc3RhYmlsaXR5ICogMik7XG4gICAgICBvbGRTdW0gPSBsYXN0RGVsdGFzT2xkLnJlZHVjZShmdW5jdGlvbih0LCBzKSB7XG4gICAgICAgIHJldHVybiB0ICsgcztcbiAgICAgIH0pO1xuICAgICAgbmV3U3VtID0gbGFzdERlbHRhc05ldy5yZWR1Y2UoZnVuY3Rpb24odCwgcykge1xuICAgICAgICByZXR1cm4gdCArIHM7XG4gICAgICB9KTtcbiAgICAgIG9sZEF2ZXJhZ2UgPSBvbGRTdW0gLyBsYXN0RGVsdGFzT2xkLmxlbmd0aDtcbiAgICAgIG5ld0F2ZXJhZ2UgPSBuZXdTdW0gLyBsYXN0RGVsdGFzTmV3Lmxlbmd0aDtcbiAgICAgIGlmIChNYXRoLmFicyhvbGRBdmVyYWdlKSA8IE1hdGguYWJzKG5ld0F2ZXJhZ2UgKiB0aGlzLnRvbGVyYW5jZSkgJiYgKHRoaXMuc2Vuc2l0aXZpdHkgPCBNYXRoLmFicyhuZXdBdmVyYWdlKSkpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLnNob3dMYXN0VXBEZWx0YXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhc3RVcERlbHRhcztcbiAgICB9O1xuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLnNob3dMYXN0RG93bkRlbHRhcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFzdERvd25EZWx0YXM7XG4gICAgfTtcblxuICAgIHJldHVybiBMZXRoYXJneTtcblxuICB9KSgpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsImZ1bmN0aW9uIEUgKCkge1xuICAvLyBLZWVwIHRoaXMgZW1wdHkgc28gaXQncyBlYXNpZXIgdG8gaW5oZXJpdCBmcm9tXG4gIC8vICh2aWEgaHR0cHM6Ly9naXRodWIuY29tL2xpcHNtYWNrIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9pc3N1ZXMvMylcbn1cblxuRS5wcm90b3R5cGUgPSB7XG4gIG9uOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG5cbiAgICAoZVtuYW1lXSB8fCAoZVtuYW1lXSA9IFtdKSkucHVzaCh7XG4gICAgICBmbjogY2FsbGJhY2ssXG4gICAgICBjdHg6IGN0eFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb25jZTogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgZnVuY3Rpb24gbGlzdGVuZXIgKCkge1xuICAgICAgc2VsZi5vZmYobmFtZSwgbGlzdGVuZXIpO1xuICAgICAgY2FsbGJhY2suYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBsaXN0ZW5lci5fID0gY2FsbGJhY2tcbiAgICByZXR1cm4gdGhpcy5vbihuYW1lLCBsaXN0ZW5lciwgY3R4KTtcbiAgfSxcblxuICBlbWl0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBkYXRhID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBldnRBcnIgPSAoKHRoaXMuZSB8fCAodGhpcy5lID0ge30pKVtuYW1lXSB8fCBbXSkuc2xpY2UoKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbiA9IGV2dEFyci5sZW5ndGg7XG5cbiAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xuICAgICAgZXZ0QXJyW2ldLmZuLmFwcGx5KGV2dEFycltpXS5jdHgsIGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcbiAgICB2YXIgZXZ0cyA9IGVbbmFtZV07XG4gICAgdmFyIGxpdmVFdmVudHMgPSBbXTtcblxuICAgIGlmIChldnRzICYmIGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXZ0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZXZ0c1tpXS5mbiAhPT0gY2FsbGJhY2sgJiYgZXZ0c1tpXS5mbi5fICE9PSBjYWxsYmFjaylcbiAgICAgICAgICBsaXZlRXZlbnRzLnB1c2goZXZ0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGZyb20gcXVldWUgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgIC8vIFN1Z2dlc3RlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbGF6ZFxuICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9jb21taXQvYzZlYmZhYTliYzk3M2IzM2QxMTBhODRhMzA3NzQyYjdjZjk0Yzk1MyNjb21taXRjb21tZW50LTUwMjQ5MTBcblxuICAgIChsaXZlRXZlbnRzLmxlbmd0aClcbiAgICAgID8gZVtuYW1lXSA9IGxpdmVFdmVudHNcbiAgICAgIDogZGVsZXRlIGVbbmFtZV07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNvdXJjZSkpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ3RpbnktZW1pdHRlcicpO1xudmFyIExldGhhcmd5ID0gcmVxdWlyZSgnbGV0aGFyZ3knKS5MZXRoYXJneTtcbnZhciBzdXBwb3J0ID0gcmVxdWlyZSgnLi9zdXBwb3J0Jyk7XG52YXIgY2xvbmUgPSByZXF1aXJlKCcuL2Nsb25lJyk7XG52YXIgYmluZEFsbCA9IHJlcXVpcmUoJ2JpbmRhbGwtc3RhbmRhbG9uZScpO1xudmFyIEVWVF9JRCA9ICd2aXJ0dWFsc2Nyb2xsJztcblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsU2Nyb2xsO1xuXG52YXIga2V5Q29kZXMgPSB7XG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbiAgICBTUEFDRTogMzJcbn07XG5cbmZ1bmN0aW9uIFZpcnR1YWxTY3JvbGwob3B0aW9ucykge1xuICAgIGJpbmRBbGwodGhpcywgJ19vbldoZWVsJywgJ19vbk1vdXNlV2hlZWwnLCAnX29uVG91Y2hTdGFydCcsICdfb25Ub3VjaE1vdmUnLCAnX29uS2V5RG93bicpO1xuXG4gICAgdGhpcy5lbCA9IHdpbmRvdztcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmVsKSB7XG4gICAgICAgIHRoaXMuZWwgPSBvcHRpb25zLmVsO1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5lbDtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gb2JqZWN0QXNzaWduKHtcbiAgICAgICAgbW91c2VNdWx0aXBsaWVyOiAxLFxuICAgICAgICB0b3VjaE11bHRpcGxpZXI6IDIsXG4gICAgICAgIGZpcmVmb3hNdWx0aXBsaWVyOiAxNSxcbiAgICAgICAga2V5U3RlcDogMTIwLFxuICAgICAgICBwcmV2ZW50VG91Y2g6IGZhbHNlLFxuICAgICAgICB1bnByZXZlbnRUb3VjaENsYXNzOiAndnMtdG91Y2htb3ZlLWFsbG93ZWQnLFxuICAgICAgICBsaW1pdEluZXJ0aWE6IGZhbHNlLFxuICAgICAgICB1c2VLZXlib2FyZDogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEluZXJ0aWEpIHRoaXMuX2xldGhhcmd5ID0gbmV3IExldGhhcmd5KCk7XG5cbiAgICB0aGlzLl9lbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcbiAgICB0aGlzLl9ldmVudCA9IHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgeDogMCxcbiAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICBkZWx0YVk6IDBcbiAgICB9O1xuICAgIHRoaXMudG91Y2hTdGFydFggPSBudWxsO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSBudWxsO1xuICAgIHRoaXMuYm9keVRvdWNoQWN0aW9uID0gbnVsbDtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMucGFzc2l2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJPcHRpb25zID0ge3Bhc3NpdmU6IHRoaXMub3B0aW9ucy5wYXNzaXZlfTtcbiAgICB9XG59XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9ub3RpZnkgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuICAgIGV2dC54ICs9IGV2dC5kZWx0YVg7XG4gICAgZXZ0LnkgKz0gZXZ0LmRlbHRhWTtcblxuICAgdGhpcy5fZW1pdHRlci5lbWl0KEVWVF9JRCwge1xuICAgICAgICB4OiBldnQueCxcbiAgICAgICAgeTogZXZ0LnksXG4gICAgICAgIGRlbHRhWDogZXZ0LmRlbHRhWCxcbiAgICAgICAgZGVsdGFZOiBldnQuZGVsdGFZLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBlXG4gICB9KTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbldoZWVsID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICh0aGlzLl9sZXRoYXJneSAmJiB0aGlzLl9sZXRoYXJneS5jaGVjayhlKSA9PT0gZmFsc2UpIHJldHVybjtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICAvLyBJbiBDaHJvbWUgYW5kIGluIEZpcmVmb3ggKGF0IGxlYXN0IHRoZSBuZXcgb25lKVxuICAgIGV2dC5kZWx0YVggPSBlLndoZWVsRGVsdGFYIHx8IGUuZGVsdGFYICogLTE7XG4gICAgZXZ0LmRlbHRhWSA9IGUud2hlZWxEZWx0YVkgfHwgZS5kZWx0YVkgKiAtMTtcblxuICAgIC8vIGZvciBvdXIgcHVycG9zZSBkZWx0YW1vZGUgPSAxIG1lYW5zIHVzZXIgaXMgb24gYSB3aGVlbCBtb3VzZSwgbm90IHRvdWNoIHBhZFxuICAgIC8vIHJlYWwgbWVhbmluZzogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1doZWVsRXZlbnQjRGVsdGFfbW9kZXNcbiAgICBpZihzdXBwb3J0LmlzRmlyZWZveCAmJiBlLmRlbHRhTW9kZSA9PSAxKSB7XG4gICAgICAgIGV2dC5kZWx0YVggKj0gb3B0aW9ucy5maXJlZm94TXVsdGlwbGllcjtcbiAgICAgICAgZXZ0LmRlbHRhWSAqPSBvcHRpb25zLmZpcmVmb3hNdWx0aXBsaWVyO1xuICAgIH1cblxuICAgIGV2dC5kZWx0YVggKj0gb3B0aW9ucy5tb3VzZU11bHRpcGxpZXI7XG4gICAgZXZ0LmRlbHRhWSAqPSBvcHRpb25zLm1vdXNlTXVsdGlwbGllcjtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbk1vdXNlV2hlZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEluZXJ0aWEgJiYgdGhpcy5fbGV0aGFyZ3kuY2hlY2soZSkgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICAvLyBJbiBTYWZhcmksIElFIGFuZCBpbiBDaHJvbWUgaWYgJ3doZWVsJyBpc24ndCBkZWZpbmVkXG4gICAgZXZ0LmRlbHRhWCA9IChlLndoZWVsRGVsdGFYKSA/IGUud2hlZWxEZWx0YVggOiAwO1xuICAgIGV2dC5kZWx0YVkgPSAoZS53aGVlbERlbHRhWSkgPyBlLndoZWVsRGVsdGFZIDogZS53aGVlbERlbHRhO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uVG91Y2hTdGFydCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdCA9IChlLnRhcmdldFRvdWNoZXMpID8gZS50YXJnZXRUb3VjaGVzWzBdIDogZTtcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gdC5wYWdlWDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gdC5wYWdlWTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZihvcHRpb25zLnByZXZlbnRUb3VjaFxuICAgICAgICAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKG9wdGlvbnMudW5wcmV2ZW50VG91Y2hDbGFzcykpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgIHZhciB0ID0gKGUudGFyZ2V0VG91Y2hlcykgPyBlLnRhcmdldFRvdWNoZXNbMF0gOiBlO1xuXG4gICAgZXZ0LmRlbHRhWCA9ICh0LnBhZ2VYIC0gdGhpcy50b3VjaFN0YXJ0WCkgKiBvcHRpb25zLnRvdWNoTXVsdGlwbGllcjtcbiAgICBldnQuZGVsdGFZID0gKHQucGFnZVkgLSB0aGlzLnRvdWNoU3RhcnRZKSAqIG9wdGlvbnMudG91Y2hNdWx0aXBsaWVyO1xuXG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IHQucGFnZVg7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IHQucGFnZVk7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25LZXlEb3duID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQuZGVsdGFYID0gZXZ0LmRlbHRhWSA9IDA7XG4gICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDQwXG5cbiAgICBzd2l0Y2goZS5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuTEVGVDpcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5VUDpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSB0aGlzLm9wdGlvbnMua2V5U3RlcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Uga2V5Q29kZXMuUklHSFQ6XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuRE9XTjpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSAtIHRoaXMub3B0aW9ucy5rZXlTdGVwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuU1BBQ0UgJiYgZS5zaGlmdEtleTpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5TUEFDRTpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSAtIHdpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9iaW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc3VwcG9ydC5oYXNXaGVlbEV2ZW50KSB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5fb25XaGVlbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgIGlmKHN1cHBvcnQuaGFzTW91c2VXaGVlbEV2ZW50KSB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLl9vbk1vdXNlV2hlZWwsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcblxuICAgIGlmKHN1cHBvcnQuaGFzVG91Y2gpIHtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc1BvaW50ZXIgJiYgc3VwcG9ydC5oYXNUb3VjaFdpbikge1xuICAgICAgICB0aGlzLmJvZHlUb3VjaEFjdGlvbiA9IGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlckRvd24nLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRydWUpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlck1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNLZXlEb3duICYmIHRoaXMub3B0aW9ucy51c2VLZXlib2FyZCkgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bik7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fdW5iaW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc3VwcG9ydC5oYXNXaGVlbEV2ZW50KSB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5fb25XaGVlbCk7XG4gICAgaWYoc3VwcG9ydC5oYXNNb3VzZVdoZWVsRXZlbnQpIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuX29uTW91c2VXaGVlbCk7XG5cbiAgICBpZihzdXBwb3J0Lmhhc1RvdWNoKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uVG91Y2hTdGFydCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzUG9pbnRlciAmJiBzdXBwb3J0Lmhhc1RvdWNoV2luKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbiA9IHRoaXMuYm9keVRvdWNoQWN0aW9uO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlckRvd24nLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRydWUpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlck1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNLZXlEb3duICYmIHRoaXMub3B0aW9ucy51c2VLZXlib2FyZCkgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bik7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGNiLCBjdHgpIHtcbiAgdGhpcy5fZW1pdHRlci5vbihFVlRfSUQsIGNiLCBjdHgpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9lbWl0dGVyLmU7XG4gIGlmIChldmVudHMgJiYgZXZlbnRzW0VWVF9JRF0gJiYgZXZlbnRzW0VWVF9JRF0ubGVuZ3RoID09PSAxKSB0aGlzLl9iaW5kKCk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihjYiwgY3R4KSB7XG4gIHRoaXMuX2VtaXR0ZXIub2ZmKEVWVF9JRCwgY2IsIGN0eCk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2VtaXR0ZXIuZTtcbiAgaWYgKCFldmVudHNbRVZUX0lEXSB8fCBldmVudHNbRVZUX0lEXS5sZW5ndGggPD0gMCkgdGhpcy5fdW5iaW5kKCk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQueCA9IDA7XG4gICAgZXZ0LnkgPSAwO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2VtaXR0ZXIub2ZmKCk7XG4gICAgdGhpcy5fdW5iaW5kKCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiBnZXRTdXBwb3J0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGhhc1doZWVsRXZlbnQ6ICdvbndoZWVsJyBpbiBkb2N1bWVudCxcbiAgICAgICAgaGFzTW91c2VXaGVlbEV2ZW50OiAnb25tb3VzZXdoZWVsJyBpbiBkb2N1bWVudCxcbiAgICAgICAgaGFzVG91Y2g6ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNUb3VjaFdpbjogbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgJiYgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAxLFxuICAgICAgICBoYXNQb2ludGVyOiAhIXdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCxcbiAgICAgICAgaGFzS2V5RG93bjogJ29ua2V5ZG93bicgaW4gZG9jdW1lbnQsXG4gICAgICAgIGlzRmlyZWZveDogbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPiAtMVxuICAgIH07XG59KSgpO1xuIl19
