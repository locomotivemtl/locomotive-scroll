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
      smooth: true,
      getSpeed: true,
      getDirection: true
    });
    var dynamicBackgrounds = [];
    scroll.on('scroll', function (instance) {
      var progress = 360 * instance.scroll.y / instance.limit;
      scroll.el.style.backgroundColor = "hsl(".concat(progress, ", 11%, 81%)");
      dynamicBackgrounds.forEach(function (obj) {
        obj.el.style.backgroundColor = "hsl(".concat(progress, ", 11%, 81%)");
      });
    });
    scroll.on('call', function (value, way, obj) {
      if (value === 'dynamicBackground') {
        if (way === 'enter') {
          dynamicBackgrounds.push({
            id: obj.id,
            el: obj.el
          });
        } else {
          for (var i = 0; i < dynamicBackgrounds.length; i++) {
            if (obj.id === dynamicBackgrounds[i].id) {
              dynamicBackgrounds.splice(i, 1);
            }
          }
        }
      }
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
        y: 0
      }
    };

    if (this.getDirection) {
      this.instance.direction = null;
    }

    if (this.getDirection) {
      this.instance.speed = 0;
    }

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
        this.dispatchCall(current, 'enter');
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

      if (current.call) {
        this.dispatchCall(current, 'exit');
      }

      if (current.repeat) {
        current.el.classList.remove(current["class"]);
      }
    }
  }, {
    key: "dispatchCall",
    value: function dispatchCall(current, way) {
      this.callWay = way;
      this.callValue = current.call.split(',').map(function (item) {
        return item.trim();
      });
      this.callObj = current;
      if (this.callValue.length == 1) this.callValue = this.callValue[0];
      var callEvent = new Event(this.namespace + 'call');
      window.dispatchEvent(callEvent);
    }
  }, {
    key: "setEvents",
    value: function setEvents(event, func) {
      var _this3 = this;

      window.addEventListener(this.namespace + event, function () {
        switch (event) {
          case 'scroll':
            return func(_this3.instance);

          case 'call':
            return func(_this3.callValue, _this3.callWay, _this3.callObj);

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
        delta: {
          x: 0,
          y: 0
        },
        limit: 0
      }, this.instance);
      var vs = new _virtualScroll["default"]({
        mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
        touchMultiplier: 4,
        firefoxMultiplier: 30
      });
      vs.on(function (e) {
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

        if (distance < 0.5 && this.instance.delta.y != 0 || distance < 0.5 && this.instance.delta.y == 0) {
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
          this.addDirection();
        }

        if (this.getSpeed) {
          this.addSpeed();
          this.timestamp = Date.now();
        }

        this.detectElements();
        this.transformElements();
        var scrollBarTranslation = this.instance.scroll.y / this.instance.limit * this.scrollBarLimit;
        this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
        this.dispatchScroll();
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
    key: "addDirection",
    value: function addDirection() {
      if (this.instance.delta.y > this.instance.scroll.y) {
        if (this.instance.direction !== 'down') {
          this.instance.direction = 'down';
        }
      } else if (this.instance.delta.y < this.instance.scroll.y) {
        if (this.instance.direction !== 'up') {
          this.instance.direction = 'up';
        }
      }
    }
  }, {
    key: "addSpeed",
    value: function addSpeed() {
      if (this.instance.delta.y != this.instance.scroll.y) {
        this.instance.speed = (this.instance.delta.y - this.instance.scroll.y) / (Date.now() - this.timestamp);
      } else {
        this.instance.speed = 0;
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
      var count = 0;
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
            id: count,
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
          count++;

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
  }, {
    key: "dispatchScroll",
    value: function dispatchScroll() {
      var scrollEvent = new Event(this.namespace + 'scroll');
      window.dispatchEvent(scrollEvent);
    }
    /**
     * Scroll to a desired target.
     *
     * @param  {object} options
     *      Available options :
     *          {node, string, "top", "bottom"} targetOption - The DOM element we want to scroll to
     *          {int} offsetOption - An absolute vertical scroll value to reach, or an offset to apply on top of given `target` or `sourceElem`'s target
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

      offset -= this.instance.scroll.y;
      this.instance.delta.y = Math.min(offset, this.instance.limit); // Actual scrollTo (the lerp will do the animation itself)

      this.inertiaRatio = Math.min(4000 / Math.abs(this.instance.delta.y - this.instance.scroll.y), 0.8);
      console.log(offset, this.instance.limit); // Update the scroll. If we were in idle state: we're not anymore

      this.isScrolling = true;
      this.checkScroll();
      this.html.classList.add(this.scrollingClass);
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
    key: "on",
    value: function on(event, func) {
      this.scroll.setEvents(event, func);
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
  scrollingClass: 'has-scroll-scrolling',
  draggingClass: 'has-scroll-dragging',
  smoothClass: 'has-scroll-smooth',
  initClass: 'has-scroll-init',
  getSpeed: false,
  getDirection: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9hcHAuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvTmF0aXZlLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL1Ntb290aC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL0NvcmUuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvdmVuZG9ycy9OYXRpdmUuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvdmVuZG9ycy9TbW9vdGguanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvdmVuZG9ycy9tYWluLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL3ZlbmRvcnMvb3B0aW9ucy5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL2h0bWwuanMiLCJhc3NldHMvc2NyaXB0cy91dGlscy9tYXRocy5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL3RyYW5zZm9ybS5qcyIsIm5vZGVfbW9kdWxlcy9iaW5kYWxsLXN0YW5kYWxvbmUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbGV0aGFyZ3kvbGV0aGFyZ3kuanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90aW55LWVtaXR0ZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvc3JjL2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtc2Nyb2xsL3NyYy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLXNjcm9sbC9zcmMvc3VwcG9ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQSxDQUFDLFlBQVc7QUFFUixFQUFBLFFBQVEsQ0FBQyxlQUFULENBQXlCLFNBQXpCLENBQW1DLEdBQW5DLENBQXVDLFdBQXZDO0FBQ0EsRUFBQSxRQUFRLENBQUMsZUFBVCxDQUF5QixTQUF6QixD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RCxDQUFiLEdBQXVDLENBQXhEO0FBRUEsU0FBTyxTQUFQO0FBQ0g7OztBQ3BCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBsb2NvbW90aXZlU2Nyb2xsIGZyb20gJy4vc2Nyb2xsL3ZlbmRvcnMvbWFpbic7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkZWQnKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNjcm9sbCA9IG5ldyBsb2NvbW90aXZlU2Nyb2xsKHtcbiAgICAgICAgICAgIGVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtc2Nyb2xsJyksXG4gICAgICAgICAgICBzbW9vdGg6IHRydWUsXG4gICAgICAgICAgICBnZXRTcGVlZDogdHJ1ZSxcbiAgICAgICAgICAgIGdldERpcmVjdGlvbjogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZHluYW1pY0JhY2tncm91bmRzID0gW107XG5cbiAgICAgICAgc2Nyb2xsLm9uKCdzY3JvbGwnLCAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gMzYwICogaW5zdGFuY2Uuc2Nyb2xsLnkgLyBpbnN0YW5jZS5saW1pdDtcblxuICAgICAgICAgICAgc2Nyb2xsLmVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGBoc2woJHtwcm9ncmVzc30sIDExJSwgODElKWA7XG5cbiAgICAgICAgICAgIGR5bmFtaWNCYWNrZ3JvdW5kcy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgb2JqLmVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGBoc2woJHtwcm9ncmVzc30sIDExJSwgODElKWA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBzY3JvbGwub24oJ2NhbGwnLCAodmFsdWUsIHdheSwgb2JqKSA9PiB7XG4gICAgICAgICAgICBpZih2YWx1ZSA9PT0gJ2R5bmFtaWNCYWNrZ3JvdW5kJykge1xuICAgICAgICAgICAgICAgIGlmKHdheSA9PT0gJ2VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICBkeW5hbWljQmFja2dyb3VuZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb2JqLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWw6IG9iai5lbFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGR5bmFtaWNCYWNrZ3JvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYob2JqLmlkID09PSBkeW5hbWljQmFja2dyb3VuZHNbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeW5hbWljQmFja2dyb3VuZHMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfSwgMTAwMClcblxufSkoKTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFeHRlbmRlZCBMb2NvbW90aXZlIFNjcm9sbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCBOYXRpdmUgZnJvbSAnLi92ZW5kb3JzL05hdGl2ZSdcblxuLyoqXG4gKiBVTkNPTU1FTlQgT05MWSBUSEUgTElORVMgWU9VIE5FRURcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIE5hdGl2ZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKVxuICAgIH1cbn1cbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFeHRlbmRlZCBMb2NvbW90aXZlIFNtb290aCBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgU21vb3RoIGZyb20gJy4vdmVuZG9ycy9TbW9vdGgnXG5cbi8qKlxuICogVU5DT01NRU5UIE9OTFkgVEhFIExJTkVTIFlPVSBORUVEXG4gKi9cbi8vIGltcG9ydCB2aXJ0dWFsU2Nyb2xsIGZyb20gJ3ZpcnR1YWwtc2Nyb2xsJztcbi8vIGltcG9ydCBDb3JlIGZyb20gJy4vQ29yZSc7XG4vLyBpbXBvcnQgeyBsZXJwIH0gZnJvbSAnLi4vdXRpbHMvbWF0aHMnXG4vLyBpbXBvcnQgeyBnZXRUcmFuc2xhdGUgfSBmcm9tICcuLi91dGlscy90cmFuc2Zvcm0nXG4vLyBpbXBvcnQgeyBnZXRQYXJlbnRzLCBxdWVyeUNsb3Nlc3RQYXJlbnQgfSBmcm9tICcuLi91dGlscy9odG1sJztcblxuLy8gY29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBTbW9vdGgge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucylcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4vb3B0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsMCk7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5uYW1lc3BhY2UgPSAnbG9jb21vdGl2ZSc7XG4gICAgICAgIHRoaXMuaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMud2luZG93TWlkZGxlID0gdGhpcy53aW5kb3dIZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmVscyA9IFtdO1xuXG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsID0gdGhpcy5jaGVja1Njcm9sbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrUmVzaXplID0gdGhpcy5jaGVja1Jlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSB7XG4gICAgICAgICAgICBzY3JvbGw6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdldERpcmVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNwZWVkID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuaW5pdENsYXNzKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jaGVja1Jlc2l6ZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgIH1cblxuICAgIGNoZWNrU2Nyb2xsKCkge31cblxuICAgIGNoZWNrUmVzaXplKCkge31cblxuICAgIGluaXRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9FbHMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLSR7dGhpcy5uYW1lfS10b11gKTtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxUbyA9IHRoaXMuc2V0U2Nyb2xsVG8uYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnNjcm9sbFRvRWxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2V0U2Nyb2xsVG8sIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0U2Nyb2xsVG8oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnNjcm9sbFRvKFxuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHt0aGlzLm5hbWV9LWhyZWZgKSB8fCBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpLFxuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHt0aGlzLm5hbWV9LW9mZnNldGApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYWRkRWxlbWVudHMoKSB7fVxuXG4gICAgZGV0ZWN0RWxlbWVudHMoKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHNjcm9sbFRvcCArIHRoaXMud2luZG93SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuZWxzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVsLmluVmlldykge1xuICAgICAgICAgICAgICAgIGlmICgoc2Nyb2xsQm90dG9tID49IGVsLnRvcCkgJiYgKHNjcm9sbFRvcCA8IGVsLmJvdHRvbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJblZpZXcoZWwsIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGVsLmluVmlldykge1xuICAgICAgICAgICAgICAgIGlmICgoc2Nyb2xsQm90dG9tIDwgZWwudG9wKSB8fCAoc2Nyb2xsVG9wID4gZWwuYm90dG9tKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE91dE9mVmlldyhlbCwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRJblZpZXcoY3VycmVudCwgaSkge1xuICAgICAgICB0aGlzLmVsc1tpXS5pblZpZXcgPSB0cnVlO1xuICAgICAgICBjdXJyZW50LmVsLmNsYXNzTGlzdC5hZGQoY3VycmVudC5jbGFzcyk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnQuY2FsbCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaENhbGwoY3VycmVudCwgJ2VudGVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWN1cnJlbnQucmVwZWF0ICYmIGN1cnJlbnQuc3BlZWQgPT09IGZhbHNlICYmICFjdXJyZW50LnN0aWNreSApIHtcbiAgICAgICAgICAgIHRoaXMuZWxzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE91dE9mVmlldyhjdXJyZW50LCBpKSB7XG4gICAgICAgIGlmKGN1cnJlbnQucmVwZWF0IHx8IGN1cnJlbnQuc3BlZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbHNbaV0uaW5WaWV3ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudC5jYWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ2FsbChjdXJyZW50LCAnZXhpdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoY3VycmVudC5yZXBlYXQgKSB7XG4gICAgICAgICAgICBjdXJyZW50LmVsLmNsYXNzTGlzdC5yZW1vdmUoY3VycmVudC5jbGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwYXRjaENhbGwoY3VycmVudCwgd2F5KSB7XG4gICAgICAgIHRoaXMuY2FsbFdheSA9IHdheTtcbiAgICAgICAgdGhpcy5jYWxsVmFsdWUgPSBjdXJyZW50LmNhbGwuc3BsaXQoJywnKS5tYXAoaXRlbSA9PiBpdGVtLnRyaW0oKSk7XG4gICAgICAgIHRoaXMuY2FsbE9iaiA9IGN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FsbFZhbHVlLmxlbmd0aCA9PSAxKSB0aGlzLmNhbGxWYWx1ZSA9IHRoaXMuY2FsbFZhbHVlWzBdO1xuXG4gICAgICAgIGNvbnN0IGNhbGxFdmVudCA9IG5ldyBFdmVudCh0aGlzLm5hbWVzcGFjZSArICdjYWxsJyk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGNhbGxFdmVudCk7XG4gICAgfVxuXG4gICAgc2V0RXZlbnRzKGV2ZW50LCBmdW5jKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZXNwYWNlICsgZXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzY3JvbGwnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuYyh0aGlzLmluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICBjYXNlICdjYWxsJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmModGhpcy5jYWxsVmFsdWUsIHRoaXMuY2FsbFdheSwgdGhpcy5jYWxsT2JqKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgc3RhcnRTY3JvbGwoKSB7fVxuXG4gICAgc3RvcFNjcm9sbCgpIHt9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jaGVja1Jlc2l6ZSwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9FbHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZXRTY3JvbGxUbywgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29yZSBmcm9tICcuL0NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvcmUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jaGVja1Njcm9sbCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcblxuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgfVxuXG4gICAgY2hlY2tTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzU2Nyb2xsVGlja2luZykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tSZXNpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgICBpZighdGhpcy5oYXNTY3JvbGxUaWNraW5nKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50cygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgY29uc3QgZWxzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS0nK3RoaXMubmFtZSsnXScpO1xuXG4gICAgICAgIGVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNsID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnQ2xhc3MnXSB8fCB0aGlzLmNsYXNzO1xuICAgICAgICAgICAgbGV0IHRvcCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgICAgICBsZXQgYm90dG9tID0gdG9wICsgZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHBhcnNlSW50KGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ09mZnNldCddKSB8fCBwYXJzZUludCh0aGlzLm9mZnNldCk7XG4gICAgICAgICAgICBsZXQgcmVwZWF0ID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnUmVwZWF0J107XG4gICAgICAgICAgICBsZXQgY2FsbCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0NhbGwnXTtcblxuICAgICAgICAgICAgaWYocmVwZWF0ID09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVwZWF0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRoaXMucmVwZWF0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVsc1tpXSA9IHtcbiAgICAgICAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgICAgICAgY2xhc3M6IGNsLFxuICAgICAgICAgICAgICAgIHRvcDogdG9wICsgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgICAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgICAgICAgICAgIGluVmlldzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2FsbDogY2FsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5lbHMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IGVsLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgICAgICBjb25zdCBib3R0b20gPSB0b3AgKyBlbC5lbC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgIHRoaXMuZWxzW2ldLnRvcCA9IHRvcCArIGVsLm9mZnNldDtcbiAgICAgICAgICAgIHRoaXMuZWxzW2ldLmJvdHRvbSA9IGJvdHRvbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgZGVzaXJlZCB0YXJnZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNjcm9sbFRvKHRhcmdldE9wdGlvbiwgb2Zmc2V0T3B0aW9uKSB7XG4gICAgICAgIGxldCB0YXJnZXQ7XG4gICAgICAgIGxldCBvZmZzZXQgPSBvZmZzZXRPcHRpb24gPyBwYXJzZUludChvZmZzZXRPcHRpb24pIDogMDtcblxuICAgICAgICBpZih0eXBlb2YgdGFyZ2V0T3B0aW9uID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgICAgICBpZih0YXJnZXRPcHRpb24gPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5odG1sO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHRhcmdldE9wdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBkb2N1bWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5odG1sLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogXCJlbmRcIiwgaW5saW5lOiBcIm5lYXJlc3RcIn0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0T3B0aW9uKVswXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYoIXRhcmdldE9wdGlvbi50YXJnZXQpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldE9wdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCd9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG5cbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hlY2tTY3JvbGwsIGZhbHNlKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB2aXJ0dWFsU2Nyb2xsIGZyb20gJ3ZpcnR1YWwtc2Nyb2xsJztcbmltcG9ydCBDb3JlIGZyb20gJy4vQ29yZSc7XG5pbXBvcnQgeyBsZXJwIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0aHMnXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGUgfSBmcm9tICcuLi8uLi91dGlscy90cmFuc2Zvcm0nXG5pbXBvcnQgeyBnZXRQYXJlbnRzLCBxdWVyeUNsb3Nlc3RQYXJlbnQgfSBmcm9tICcuLi8uLi91dGlscy9odG1sJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb3JlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbmVydGlhID0gdGhpcy5pbmVydGlhICogMC4xO1xuICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVGlja2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuaW5lcnRpYVJhdGlvID0gMTtcbiAgICAgICAgdGhpcy5zdG9wID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5hZGQodGhpcy5zbW9vdGhDbGFzcyk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IHtcbiAgICAgICAgICAgIGRlbHRhOiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGltaXQ6IDAsXG4gICAgICAgICAgICAuLi50aGlzLmluc3RhbmNlXG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IHZzID0gbmV3IHZpcnR1YWxTY3JvbGwoe1xuICAgICAgICAgICAgbW91c2VNdWx0aXBsaWVyOiAobmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoJ1dpbicpID4gLTEpID8gMSA6IDAuNCxcbiAgICAgICAgICAgIHRvdWNoTXVsdGlwbGllcjogNCxcbiAgICAgICAgICAgIGZpcmVmb3hNdWx0aXBsaWVyOiAzMFxuICAgICAgICB9KTtcblxuICAgICAgICB2cy5vbigoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVGlja2luZyAmJiAhdGhpcy5pc0RyYWdnaW5nU2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2Nyb2xsaW5nKSB0aGlzLnN0YXJ0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZWx0YShlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzVGlja2luZyA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFNjcm9sbExpbWl0KCk7XG4gICAgICAgIHRoaXMuaW5pdFNjcm9sbEJhcigpO1xuICAgICAgICB0aGlzLmFkZFNlY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5kZXRlY3RFbGVtZW50cygpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKHRydWUpO1xuXG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICB9XG5cbiAgICBzZXRTY3JvbGxMaW1pdCgpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5saW1pdCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0IC0gdGhpcy53aW5kb3dIZWlnaHQ7XG4gICAgfVxuXG4gICAgc3RhcnRTY3JvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsKCk7XG4gICAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgIH1cblxuICAgIHN0b3BTY3JvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbmVydGlhUmF0aW8gPSAxO1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gTWF0aC5yb3VuZCh0aGlzLmluc3RhbmNlLnNjcm9sbC55KTtcbiAgICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zY3JvbGxpbmdDbGFzcyk7XG4gICAgfVxuXG4gICAgY2hlY2tTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2Nyb2xsaW5nIHx8IHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhcikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc1Njcm9sbFRpY2tpbmcpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT7CoHRoaXMuY2hlY2tTY3JvbGwoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAoTWF0aC5hYnModGhpcy5pbnN0YW5jZS5kZWx0YS55IC0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkpO1xuICAgICAgICAgICAgaWYgKChkaXN0YW5jZSA8IDAuNSAmJiB0aGlzLmluc3RhbmNlLmRlbHRhLnkgIT0gMCkgfHwgKGRpc3RhbmNlIDwgMC41ICYmIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9PSAwKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5zZWN0aW9ucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2VjdGlvbnNbaV0ucGVyc2lzdGVudCB8fCAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+IHRoaXMuc2VjdGlvbnNbaV0ub2Zmc2V0ICYmIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPCB0aGlzLnNlY3Rpb25zW2ldLmxpbWl0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLnNlY3Rpb25zW2ldLmVsLCAwLCAtdGhpcy5pbnN0YW5jZS5zY3JvbGwueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbnNbaV0uZWwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXS5pblZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbnNbaV0uZWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zW2ldLmluVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLnNlY3Rpb25zW2ldLmVsLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdldERpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRGlyZWN0aW9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdldFNwZWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTcGVlZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kZXRlY3RFbGVtZW50cygpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cygpO1xuXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxCYXJUcmFuc2xhdGlvbiA9ICh0aGlzLmluc3RhbmNlLnNjcm9sbC55IC8gdGhpcy5pbnN0YW5jZS5saW1pdCkgKiB0aGlzLnNjcm9sbEJhckxpbWl0O1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5zY3JvbGxiYXJUaHVtYiwgMCwgc2Nyb2xsQmFyVHJhbnNsYXRpb24pO1xuXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoU2Nyb2xsKCk7XG5cbiAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tSZXNpemUoKSB7XG4gICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLndpbmRvd01pZGRsZSA9IHRoaXMud2luZG93SGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEZWx0YShlKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGEueSAtPSBlLmRlbHRhWTtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA8IDApIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IDA7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgPiB0aGlzLmluc3RhbmNlLmxpbWl0KSB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSB0aGlzLmluc3RhbmNlLmxpbWl0O1xuICAgIH1cblxuICAgIHVwZGF0ZVNjcm9sbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSBsZXJwKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnksIHRoaXMuaW5zdGFuY2UuZGVsdGEueSwgdGhpcy5pbmVydGlhICogdGhpcy5pbmVydGlhUmF0aW8pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNEcmFnZ2luZ1Njcm9sbEJhcikge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IGxlcnAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSwgdGhpcy5pbnN0YW5jZS5kZWx0YS55LCAodGhpcy5pbmVydGlhICogMikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IHRoaXMuaW5zdGFuY2UuZGVsdGEueTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZERpcmVjdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA+IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiAhPT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55IDwgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uICE9PSAndXAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkU3BlZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgIT0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zcGVlZCA9ICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgLSB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSAvIChEYXRlLm5vdygpIC0gdGhpcy50aW1lc3RhbXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zcGVlZCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0U2Nyb2xsQmFyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIuY2xhc3NMaXN0LmFkZChgJHt0aGlzLnNjcm9sbGJhckNsYXNzfWApO1xuICAgICAgICB0aGlzLnNjcm9sbGJhclRodW1iLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5zY3JvbGxiYXJDbGFzc31fdGh1bWJgKTtcblxuICAgICAgICB0aGlzLnNjcm9sbGJhci5hcHBlbmQodGhpcy5zY3JvbGxiYXJUaHVtYik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuc2Nyb2xsYmFyKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5zdHlsZS5oZWlnaHQgPSBgJHsod2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmlubmVySGVpZ2h0KSAvICh0aGlzLmluc3RhbmNlLmxpbWl0ICsgd2luZG93LmlubmVySGVpZ2h0KX1weGA7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmFyTGltaXQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLnNjcm9sbGJhclRodW1iLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgICAgICB0aGlzLnNjcm9sbGJhclRodW1iLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsKGUpID0+IHRoaXMuZ2V0U2Nyb2xsQmFyKGUpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLChlKSA9PiB0aGlzLnJlbGVhc2VTY3JvbGxCYXIoZSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywoZSkgPT4gdGhpcy5tb3ZlU2Nyb2xsQmFyKGUpKTtcbiAgICB9XG5cbiAgICByZWluaXRTY3JvbGxCYXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyVGh1bWIuc3R5bGUuaGVpZ2h0ID0gYCR7KHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyB0aGlzLmluc3RhbmNlLmxpbWl0fXB4YDtcbiAgICAgICAgdGhpcy5zY3JvbGxCYXJMaW1pdCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuc2Nyb2xsYmFyVGh1bWIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cblxuICAgIGRlc3Ryb3lTY3JvbGxCYXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyVGh1bWIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywoZSkgPT4gdGhpcy5nZXRTY3JvbGxCYXIoZSkpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsKGUpID0+IHRoaXMucmVsZWFzZVNjcm9sbEJhcihlKSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLChlKSA9PiB0aGlzLm1vdmVTY3JvbGxCYXIoZSkpO1xuICAgIH1cblxuICAgIGdldFNjcm9sbEJhcihlKSB7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhciA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zY3JvbGxpbmdDbGFzcyk7XG4gICAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuZHJhZ2dpbmdDbGFzcyk7XG4gICAgfVxuXG4gICAgcmVsZWFzZVNjcm9sbEJhcihlKSB7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLnNjcm9sbGluZ0NsYXNzKTtcbiAgICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kcmFnZ2luZ0NsYXNzKTtcbiAgICB9XG5cbiAgICBtb3ZlU2Nyb2xsQmFyKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVGlja2luZyAmJiB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxiYXIpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSAoZS5jbGllbnRZICogMTAwIC8gKHdpbmRvdy5pbm5lckhlaWdodCkpICogdGhpcy5pbnN0YW5jZS5saW1pdCAvIDEwMDtcblxuICAgICAgICAgICAgICAgIGlmKHkgPiAwICYmIHkgPCB0aGlzLmluc3RhbmNlLmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmlzVGlja2luZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5lbHMgPSBbXVxuICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMgPSBbXVxuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIHRoaXMuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxzID0gdGhpcy5zZWN0aW9uc1t5XS5lbC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS0ke3RoaXMubmFtZX1dYCk7XG5cbiAgICAgICAgICAgIGVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjbCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0NsYXNzJ10gfHwgdGhpcy5jbGFzcztcbiAgICAgICAgICAgICAgICBsZXQgdG9wO1xuICAgICAgICAgICAgICAgIGxldCByZXBlYXQgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdSZXBlYXQnXTtcbiAgICAgICAgICAgICAgICBsZXQgY2FsbCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0NhbGwnXTtcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdQb3NpdGlvbiddO1xuICAgICAgICAgICAgICAgIGxldCBkZWxheSA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0RlbGF5J107XG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0RpcmVjdGlvbiddO1xuICAgICAgICAgICAgICAgIGxldCBzdGlja3kgPSB0eXBlb2YgZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnU3RpY2t5J10gPT09ICdzdHJpbmcnO1xuICAgICAgICAgICAgICAgIGxldCBzcGVlZCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ1NwZWVkJ10gPyBwYXJzZUZsb2F0KGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ1NwZWVkJ10pLzEwIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9ICh0eXBlb2YgZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnT2Zmc2V0J10gPT09ICdzdHJpbmcnKSA/IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ09mZnNldCddLnNwbGl0KCcsJykgOiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdUYXJnZXQnXTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0RWw7XG5cbiAgICAgICAgICAgICAgICBpZih0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7dGFyZ2V0fWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEVsID0gZWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc2VjdGlvbnNbeV0uaW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHRhcmdldEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGdldFRyYW5zbGF0ZSh0aGlzLnNlY3Rpb25zW3ldLmVsKS55IC0gZ2V0VHJhbnNsYXRlKHRhcmdldEVsKS55O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHRhcmdldEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgLSBnZXRUcmFuc2xhdGUodGFyZ2V0RWwpLnk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGJvdHRvbSA9IHRvcCArIHRhcmdldEVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICBsZXQgbWlkZGxlID0gKChib3R0b20gLSB0b3ApIC8gMikgKyB0b3A7XG5cbiAgICAgICAgICAgICAgICBpZihzdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wICs9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gdG9wICsgdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0IC0gZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBtaWRkbGUgPSAoKGJvdHRvbSAtIHRvcCkgLyAyKSArIHRvcDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihyZXBlYXQgPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcGVhdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSB0aGlzLnJlcGVhdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgcmVsYXRpdmVPZmZzZXQgPSBbMCwwXTtcbiAgICAgICAgICAgICAgICBpZihvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvZmZzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9mZnNldFtpXS5pbmNsdWRlcygnJScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXRbaV0gPSBwYXJzZUludChvZmZzZXRbaV0ucmVwbGFjZSgnJScsJycpICogdGhpcy53aW5kb3dIZWlnaHQgLyAxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZU9mZnNldFtpXSA9IHBhcnNlSW50KG9mZnNldFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRFbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZWwsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGNsLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRvcCArIHJlbGF0aXZlT2Zmc2V0WzBdLFxuICAgICAgICAgICAgICAgICAgICBtaWRkbGUsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tIC0gcmVsYXRpdmVPZmZzZXRbMV0sXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgICAgICAgICBpblZpZXc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjYWxsLFxuICAgICAgICAgICAgICAgICAgICBzcGVlZCxcbiAgICAgICAgICAgICAgICAgICAgZGVsYXksXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldEVsLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHN0aWNreVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgdGhpcy5lbHMucHVzaChtYXBwZWRFbCk7XG5cbiAgICAgICAgICAgICAgICBpZihzcGVlZCAhPT0gZmFsc2UgfHwgc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cy5wdXNoKG1hcHBlZEVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFNlY3Rpb25zKCkge1xuICAgICAgICB0aGlzLnNlY3Rpb25zID0gW107XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLSR7dGhpcy5uYW1lfS1zZWN0aW9uXWApO1xuXG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIGkpID0+IHtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAxLjUpIC0gZ2V0VHJhbnNsYXRlKHNlY3Rpb24pLnk7XG4gICAgICAgICAgICBsZXQgbGltaXQgPSBvZmZzZXQgKyBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAyKTtcbiAgICAgICAgICAgIGxldCBwZXJzaXN0ZW50ID0gdHlwZW9mIHNlY3Rpb24uZGF0YXNldFt0aGlzLm5hbWUgKyAnUGVyc2lzdGVudCddID09PSAnc3RyaW5nJztcblxuICAgICAgICAgICAgbGV0IGluVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+PSBvZmZzZXQgJiYgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1hcHBlZFNlY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgZWw6IHNlY3Rpb24sXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICAgICAgbGltaXQ6IGxpbWl0LFxuICAgICAgICAgICAgICAgIGluVmlldzogaW5WaWV3LFxuICAgICAgICAgICAgICAgIHBlcnNpc3RlbnQ6IHBlcnNpc3RlbnRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXSA9IG1hcHBlZFNlY3Rpb247XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyYW5zZm9ybShlbGVtZW50LCB4LCB5LCBkZWxheSkge1xuICAgICAgICBsZXQgdHJhbnNmb3JtO1xuXG4gICAgICAgIGlmKCFkZWxheSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtID0gYG1hdHJpeCgxLDAsMCwxLCR7eH0sJHt5fSlgXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzdGFydCA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIGxldCBsZXJwWCA9IGxlcnAoc3RhcnQueCwgeCwgZGVsYXkpO1xuICAgICAgICAgICAgbGV0IGxlcnBZID0gbGVycChzdGFydC55LCB5LCBkZWxheSk7XG5cbiAgICAgICAgICAgIHRyYW5zZm9ybSA9IGBtYXRyaXgoMSwwLDAsMSwke2xlcnBYfSwke2xlcnBZfSlgXG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tc1RyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtRWxlbWVudHMoaXNGb3JjZWQpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsQm90dG9tID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSArIHRoaXMud2luZG93SGVpZ2h0O1xuICAgICAgICBjb25zdCBzY3JvbGxNaWRkbGUgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICsgdGhpcy53aW5kb3dNaWRkbGU7XG5cbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzLmZvckVhY2goKGN1cnJlbnQsIGkpID0+IHtcbiAgICAgICAgICAgIGxldCB0cmFuc2Zvcm1EaXN0YW5jZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZigoaXNGb3JjZWQgJiYgIWN1cnJlbnQuaW5WaWV3KSkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gMFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjdXJyZW50LmluVmlldykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudC5wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICogLWN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9ICh0aGlzLmluc3RhbmNlLmxpbWl0IC0gc2Nyb2xsQm90dG9tICsgdGhpcy53aW5kb3dIZWlnaHQpICogY3VycmVudC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKHNjcm9sbE1pZGRsZSAtIGN1cnJlbnQubWlkZGxlKSAqIC1jdXJyZW50LnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGN1cnJlbnQuc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudC5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55IC0gY3VycmVudC50b3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmluc3RhbmNlLnNjcm9sbC55IDwgY3VycmVudC50b3AgJiYgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+IGN1cnJlbnQudG9wIC0xMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPiBjdXJyZW50LmJvdHRvbSAmJiB0aGlzLmluc3RhbmNlLnNjcm9sbC55IDwgY3VycmVudC5ib3R0b20gKyAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gY3VycmVudC5ib3R0b20gLSBjdXJyZW50LnRvcCArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRyYW5zZm9ybURpc3RhbmNlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnQuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oY3VycmVudC5lbCwgdHJhbnNmb3JtRGlzdGFuY2UsIDAsIChpc0ZvcmNlZCA/IGZhbHNlIDogY3VycmVudC5kZWxheSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oY3VycmVudC5lbCwgMCwgdHJhbnNmb3JtRGlzdGFuY2UsIChpc0ZvcmNlZCA/IGZhbHNlIDogY3VycmVudC5kZWxheSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc3BhdGNoU2Nyb2xsKCkge1xuICAgICAgICBjb25zdCBzY3JvbGxFdmVudCA9IG5ldyBFdmVudCh0aGlzLm5hbWVzcGFjZSArICdzY3JvbGwnKTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoc2Nyb2xsRXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIGRlc2lyZWQgdGFyZ2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogICAgICBBdmFpbGFibGUgb3B0aW9ucyA6XG4gICAgICogICAgICAgICAge25vZGUsIHN0cmluZywgXCJ0b3BcIiwgXCJib3R0b21cIn0gdGFyZ2V0T3B0aW9uIC0gVGhlIERPTSBlbGVtZW50IHdlIHdhbnQgdG8gc2Nyb2xsIHRvXG4gICAgICogICAgICAgICAge2ludH0gb2Zmc2V0T3B0aW9uIC0gQW4gYWJzb2x1dGUgdmVydGljYWwgc2Nyb2xsIHZhbHVlIHRvIHJlYWNoLCBvciBhbiBvZmZzZXQgdG8gYXBwbHkgb24gdG9wIG9mIGdpdmVuIGB0YXJnZXRgIG9yIGBzb3VyY2VFbGVtYCdzIHRhcmdldFxuICAgICAqICAgICAgICAgIHtib29sZWFufSB0b0JvdHRvbSAtIFNldCB0byB0cnVlIHRvIHNjcm9sbCBhbGwgdGhlIHdheSB0byB0aGUgYm90dG9tXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzY3JvbGxUbyh0YXJnZXRPcHRpb24sIG9mZnNldE9wdGlvbikge1xuICAgICAgICBsZXQgdGFyZ2V0O1xuICAgICAgICBsZXQgb2Zmc2V0ID0gb2Zmc2V0T3B0aW9uID8gcGFyc2VJbnQob2Zmc2V0T3B0aW9uKSA6IDA7XG5cblxuICAgICAgICBpZih0eXBlb2YgdGFyZ2V0T3B0aW9uID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgICAgICBpZih0YXJnZXRPcHRpb24gPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZih0YXJnZXRPcHRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy5pbnN0YW5jZS5saW1pdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXRPcHRpb24pWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZighdGFyZ2V0T3B0aW9uLnRhcmdldCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0T3B0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgaGF2ZSBhIHRhcmdldCwgZ2V0IGl0J3MgY29vcmRpbmF0ZXNcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgLy8gR2V0IHRhcmdldCBvZmZzZXQgZnJvbSB0b3BcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEJDUiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gdGFyZ2V0QkNSLnRvcCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnlcblxuICAgICAgICAgICAgLy8gVHJ5IGFuZCBmaW5kIHRoZSB0YXJnZXQncyBwYXJlbnQgc2VjdGlvblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGFyZW50cyA9IGdldFBhcmVudHModGFyZ2V0KVxuICAgICAgICAgICAgY29uc3QgcGFyZW50U2VjdGlvbiA9IHRhcmdldFBhcmVudHMuZmluZChjYW5kaWRhdGUgPT4gdGhpcy5zZWN0aW9ucy5maW5kKHNlY3Rpb24gPT4gc2VjdGlvbi5lbGVtZW50ID09IGNhbmRpZGF0ZSkpXG4gICAgICAgICAgICBsZXQgcGFyZW50U2VjdGlvbk9mZnNldCA9IDBcbiAgICAgICAgICAgIGlmKHBhcmVudFNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRTZWN0aW9uT2Zmc2V0ID0gZ2V0VHJhbnNsYXRlKHBhcmVudFNlY3Rpb24pLnkgLy8gV2UgZ290IGEgcGFyZW50IHNlY3Rpb24sIHN0b3JlIGl0J3MgY3VycmVudCBvZmZzZXQgdG8gcmVtb3ZlIGl0IGxhdGVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaW5hbCB2YWx1ZSBvZiBzY3JvbGwgZGVzdGluYXRpb24gOiBvZmZzZXRUb3AgKyAob3B0aW9uYWwgb2Zmc2V0IGdpdmVuIGluIG9wdGlvbnMpIC0gKHBhcmVudCdzIHNlY3Rpb24gdHJhbnNsYXRlKVxuICAgICAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0VG9wICsgb2Zmc2V0IC0gcGFyZW50U2VjdGlvbk9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBvZmZzZXQgLT0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSBNYXRoLm1pbihvZmZzZXQsIHRoaXMuaW5zdGFuY2UubGltaXQpOyAvLyBBY3R1YWwgc2Nyb2xsVG8gKHRoZSBsZXJwIHdpbGwgZG8gdGhlIGFuaW1hdGlvbiBpdHNlbGYpXG4gICAgICAgIHRoaXMuaW5lcnRpYVJhdGlvID0gTWF0aC5taW4oNDAwMCAvIE1hdGguYWJzKHRoaXMuaW5zdGFuY2UuZGVsdGEueSAtIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpLDAuOCk7XG5cbiAgICAgICAgY29uc29sZS5sb2cob2Zmc2V0LCB0aGlzLmluc3RhbmNlLmxpbWl0KTtcblxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc2Nyb2xsLiBJZiB3ZSB3ZXJlIGluIGlkbGUgc3RhdGU6IHdlJ3JlIG5vdCBhbnltb3JlXG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsKCk7XG4gICAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxMaW1pdCgpO1xuICAgICAgICB0aGlzLmFkZFNlY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5kZXRlY3RFbGVtZW50cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKHRydWUpO1xuICAgIH1cblxuICAgIHN0YXJ0U2Nyb2xsKCkge1xuICAgICAgICB0aGlzLnN0b3AgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzdG9wU2Nyb2xsKCkge1xuICAgICAgICB0aGlzLnN0b3AgPSB0cnVlO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgU2Nyb2xsIGZyb20gJy4uL05hdGl2ZSc7XG5pbXBvcnQgU21vb3RoIGZyb20gJy4uL1Ntb290aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNtb290aE1vYmlsZSkge1xuICAgICAgICAgICAgdGhpcy5pc01vYmlsZSA9ICgvQW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc21vb3RoID09PSB0cnVlICYmICF0aGlzLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbCA9IG5ldyBTbW9vdGgodGhpcy5vcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsID0gbmV3IFNjcm9sbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGwuaW5pdCgpO1xuXG4gICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUbyh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNjcm9sbC5zdGFydFNjcm9sbCgpO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsLnN0b3BTY3JvbGwoKTtcbiAgICB9XG5cbiAgICBzY3JvbGxUbyh0YXJnZXQsIG9mZnNldCkge1xuICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUbyh0YXJnZXQsIG9mZnNldCk7XG4gICAgfVxuXG4gICAgb24oZXZlbnQsIGZ1bmMpIHtcbiAgICAgICAgdGhpcy5zY3JvbGwuc2V0RXZlbnRzKGV2ZW50LCBmdW5jKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnNjcm9sbC5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIGVsOiBkb2N1bWVudCxcbiAgICBlbE1vYmlsZTogZG9jdW1lbnQsXG4gICAgbmFtZTogJ3Njcm9sbCcsXG4gICAgb2Zmc2V0OiAwLFxuICAgIHJlcGVhdDogZmFsc2UsXG4gICAgc21vb3RoOiBmYWxzZSxcbiAgICBzbW9vdGhNb2JpbGU6IGZhbHNlLFxuICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICBpbmVydGlhOiAxLFxuICAgIGNsYXNzOiAnaXMtaW52aWV3JyxcbiAgICBzY3JvbGxiYXJDbGFzczogJ2Mtc2Nyb2xsYmFyJyxcbiAgICBzY3JvbGxpbmdDbGFzczogJ2hhcy1zY3JvbGwtc2Nyb2xsaW5nJyxcbiAgICBkcmFnZ2luZ0NsYXNzOiAnaGFzLXNjcm9sbC1kcmFnZ2luZycsXG4gICAgc21vb3RoQ2xhc3M6ICdoYXMtc2Nyb2xsLXNtb290aCcsXG4gICAgaW5pdENsYXNzOiAnaGFzLXNjcm9sbC1pbml0JyxcbiAgICBnZXRTcGVlZDogZmFsc2UsXG4gICAgZ2V0RGlyZWN0aW9uOiBmYWxzZVxufTtcbiIsIi8qKlxuICogQHNlZSAgaHR0cHM6Ly9naXRodWIuY29tL3JhY3RpdmVqcy9yYWN0aXZlL2Jsb2IvZGV2L3NyYy91dGlscy9odG1sLmpzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVIdG1sKHN0cikge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xufVxuXG4vKipcbiAqIFByZXBhcmUgSFRNTCBjb250ZW50IHRoYXQgY29udGFpbnMgbXVzdGFjaGUgY2hhcmFjdGVycyBmb3IgdXNlIHdpdGggUmFjdGl2ZVxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuZXNjYXBlSHRtbChzdHIpIHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKC8mbHQ7L2csICc8JylcbiAgICAgICAgLnJlcGxhY2UoLyZndDsvZywgJz4nKVxuICAgICAgICAucmVwbGFjZSgvJmFtcDsvZywgJyYnKTtcbn1cblxuLyoqXG4gKiBHZXQgZWxlbWVudCBkYXRhIGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSAgIHtET01FbGVtZW50fSAgbm9kZVxuICogQHJldHVybiAge0FycmF5fSAgICAgICBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlRGF0YShub2RlKSB7XG4gICAgLy8gQWxsIGF0dHJpYnV0ZXNcbiAgICB2YXIgYXR0cmlidXRlcyA9IG5vZGUuYXR0cmlidXRlcztcblxuICAgIC8vIFJlZ2V4IFBhdHRlcm5cbiAgICB2YXIgcGF0dGVybiA9IC9eZGF0YVxcLSguKykkLztcblxuICAgIC8vIE91dHB1dFxuICAgIHZhciBkYXRhID0ge307XG5cbiAgICBmb3IgKGxldCBpIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGVzW2ldKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF0dHJpYnV0ZXMgbmFtZSAoZXg6IGRhdGEtbW9kdWxlKVxuICAgICAgICBsZXQgbmFtZSA9IGF0dHJpYnV0ZXNbaV0ubmFtZTtcblxuICAgICAgICAvLyBUaGlzIGhhcHBlbnMuXG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWF0Y2ggPSBuYW1lLm1hdGNoKHBhdHRlcm4pO1xuICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoaXMgdGhyb3dzIGFuIGVycm9yLCB5b3UgaGF2ZSBzb21lXG4gICAgICAgIC8vIHNlcmlvdXMgcHJvYmxlbXMgaW4geW91ciBIVE1MLlxuICAgICAgICBkYXRhW21hdGNoWzFdXSA9IG5vZGUuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIHBhcmVudCBub2RlcyBvZiB0aGUgZ2l2ZW4gbm9kZVxuICogQHBhcmFtICB7b2JqZWN0fSBub2RlXG4gKiBAcmV0dXJuIHthcnJheX0gcGFyZW50IG5vZGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnRzKGVsZW0pIHtcbiAgICAvLyBTZXQgdXAgYSBwYXJlbnQgYXJyYXlcbiAgICBsZXQgcGFyZW50cyA9IFtdO1xuXG4gICAgLy8gUHVzaCBlYWNoIHBhcmVudCBlbGVtZW50IHRvIHRoZSBhcnJheVxuICAgIGZvciAoIDsgZWxlbSAmJiBlbGVtICE9PSBkb2N1bWVudDsgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSApIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKGVsZW0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBvdXIgcGFyZW50IGFycmF5XG4gICAgcmV0dXJuIHBhcmVudHM7XG59XG5cbi8vIGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbS9ob3ctdG8tZ2V0LXRoZS1jbG9zZXN0LXBhcmVudC1lbGVtZW50LXdpdGgtYS1tYXRjaGluZy1zZWxlY3Rvci11c2luZy12YW5pbGxhLWphdmFzY3JpcHQvXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlDbG9zZXN0UGFyZW50KGVsZW0sIHNlbGVjdG9yKSB7XG5cbiAgICAvLyBFbGVtZW50Lm1hdGNoZXMoKSBwb2x5ZmlsbFxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID1cbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSAodGhpcy5kb2N1bWVudCB8fCB0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwocyksXG4gICAgICAgICAgICAgICAgICAgIGkgPSBtYXRjaGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDAgJiYgbWF0Y2hlcy5pdGVtKGkpICE9PSB0aGlzKSB7fVxuICAgICAgICAgICAgICAgIHJldHVybiBpID4gLTE7XG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgY2xvc2VzdCBtYXRjaGluZyBlbGVtZW50XG4gICAgZm9yICggOyBlbGVtICYmIGVsZW0gIT09IGRvY3VtZW50OyBlbGVtID0gZWxlbS5wYXJlbnROb2RlICkge1xuICAgICAgICBpZiAoIGVsZW0ubWF0Y2hlcyggc2VsZWN0b3IgKSApIHJldHVybiBlbGVtO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcblxufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBsZXJwKHN0YXJ0LCBlbmQsIGFtdCl7XG4gICAgcmV0dXJuICgxIC0gYW10KSAqIHN0YXJ0ICsgYW10ICogZW5kXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKGVsLCB0cmFuc2Zvcm1WYWx1ZSl7XG4gICAgZWwuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XG4gICAgZWwuc3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbiAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0ZShlbCl7XG4gICAgY29uc3QgdHJhbnNsYXRlID0ge31cbiAgICBpZighd2luZG93LmdldENvbXB1dGVkU3R5bGUpIHJldHVybjtcblxuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtIHx8IHN0eWxlLndlYmtpdFRyYW5zZm9ybSB8fCBzdHlsZS5tb3pUcmFuc2Zvcm07XG5cbiAgICBsZXQgbWF0ID0gdHJhbnNmb3JtLm1hdGNoKC9ebWF0cml4M2RcXCgoLispXFwpJC8pO1xuICAgIGlmKG1hdCkgcmV0dXJuIHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzEzXSk7XG4gICAgbWF0ID0gdHJhbnNmb3JtLm1hdGNoKC9ebWF0cml4XFwoKC4rKVxcKSQvKTtcbiAgICB0cmFuc2xhdGUueCA9IG1hdCA/IHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzRdKSA6IDA7XG4gICAgdHJhbnNsYXRlLnkgPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVs1XSkgOiAwO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0ZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYoIW9iamVjdCkgcmV0dXJuIGNvbnNvbGUud2FybignYmluZEFsbCByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQuJyk7XG5cbiAgICB2YXIgZnVuY3Rpb25zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIGlmIChmdW5jdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgZm9yICh2YXIgbWV0aG9kIGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIG1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2Ygb2JqZWN0W21ldGhvZF0gPT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKG9iamVjdFttZXRob2RdKSA9PSBcIltvYmplY3QgRnVuY3Rpb25dXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25zLnB1c2gobWV0aG9kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZnVuY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmID0gZnVuY3Rpb25zW2ldO1xuICAgICAgICBvYmplY3RbZl0gPSBiaW5kKG9iamVjdFtmXSwgb2JqZWN0KTtcbiAgICB9XG59O1xuXG4vKlxuICAgIEZhc3RlciBiaW5kIHdpdGhvdXQgc3BlY2lmaWMtY2FzZSBjaGVja2luZy4gKHNlZSBodHRwczovL2NvZGVyd2FsbC5jb20vcC9vaTNqM3cpLlxuICAgIGJpbmRBbGwgaXMgb25seSBuZWVkZWQgZm9yIGV2ZW50cyBiaW5kaW5nIHNvIG5vIG5lZWQgdG8gbWFrZSBzbG93IGZpeGVzIGZvciBjb25zdHJ1Y3RvclxuICAgIG9yIHBhcnRpYWwgYXBwbGljYXRpb24uXG4qL1xuZnVuY3Rpb24gYmluZChmdW5jLCBjb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICB9O1xufSIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS45LjJcbihmdW5jdGlvbigpIHtcbiAgdmFyIHJvb3Q7XG5cbiAgcm9vdCA9IHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiICYmIGV4cG9ydHMgIT09IG51bGwgPyBleHBvcnRzIDogdGhpcztcblxuICByb290LkxldGhhcmd5ID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIExldGhhcmd5KHN0YWJpbGl0eSwgc2Vuc2l0aXZpdHksIHRvbGVyYW5jZSwgZGVsYXkpIHtcbiAgICAgIHRoaXMuc3RhYmlsaXR5ID0gc3RhYmlsaXR5ICE9IG51bGwgPyBNYXRoLmFicyhzdGFiaWxpdHkpIDogODtcbiAgICAgIHRoaXMuc2Vuc2l0aXZpdHkgPSBzZW5zaXRpdml0eSAhPSBudWxsID8gMSArIE1hdGguYWJzKHNlbnNpdGl2aXR5KSA6IDEwMDtcbiAgICAgIHRoaXMudG9sZXJhbmNlID0gdG9sZXJhbmNlICE9IG51bGwgPyAxICsgTWF0aC5hYnModG9sZXJhbmNlKSA6IDEuMTtcbiAgICAgIHRoaXMuZGVsYXkgPSBkZWxheSAhPSBudWxsID8gZGVsYXkgOiAxNTA7XG4gICAgICB0aGlzLmxhc3RVcERlbHRhcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgbGFzdERlbHRhO1xuICAgICAgZSA9IGUub3JpZ2luYWxFdmVudCB8fCBlO1xuICAgICAgaWYgKGUud2hlZWxEZWx0YSAhPSBudWxsKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUud2hlZWxEZWx0YTtcbiAgICAgIH0gZWxzZSBpZiAoZS5kZWx0YVkgIT0gbnVsbCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLmRlbHRhWSAqIC00MDtcbiAgICAgIH0gZWxzZSBpZiAoKGUuZGV0YWlsICE9IG51bGwpIHx8IGUuZGV0YWlsID09PSAwKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUuZGV0YWlsICogLTQwO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAucHVzaChEYXRlLm5vdygpKTtcbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wLnNoaWZ0KCk7XG4gICAgICBpZiAobGFzdERlbHRhID4gMCkge1xuICAgICAgICB0aGlzLmxhc3RVcERlbHRhcy5wdXNoKGxhc3REZWx0YSk7XG4gICAgICAgIHRoaXMubGFzdFVwRGVsdGFzLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5lcnRpYSgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGFzdERvd25EZWx0YXMucHVzaChsYXN0RGVsdGEpO1xuICAgICAgICB0aGlzLmxhc3REb3duRGVsdGFzLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5lcnRpYSgtMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5pc0luZXJ0aWEgPSBmdW5jdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBsYXN0RGVsdGFzLCBsYXN0RGVsdGFzTmV3LCBsYXN0RGVsdGFzT2xkLCBuZXdBdmVyYWdlLCBuZXdTdW0sIG9sZEF2ZXJhZ2UsIG9sZFN1bTtcbiAgICAgIGxhc3REZWx0YXMgPSBkaXJlY3Rpb24gPT09IC0xID8gdGhpcy5sYXN0RG93bkRlbHRhcyA6IHRoaXMubGFzdFVwRGVsdGFzO1xuICAgICAgaWYgKGxhc3REZWx0YXNbMF0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRlbHRhc1RpbWVzdGFtcFsodGhpcy5zdGFiaWxpdHkgKiAyKSAtIDJdICsgdGhpcy5kZWxheSA+IERhdGUubm93KCkgJiYgbGFzdERlbHRhc1swXSA9PT0gbGFzdERlbHRhc1sodGhpcy5zdGFiaWxpdHkgKiAyKSAtIDFdKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxhc3REZWx0YXNPbGQgPSBsYXN0RGVsdGFzLnNsaWNlKDAsIHRoaXMuc3RhYmlsaXR5KTtcbiAgICAgIGxhc3REZWx0YXNOZXcgPSBsYXN0RGVsdGFzLnNsaWNlKHRoaXMuc3RhYmlsaXR5LCB0aGlzLnN0YWJpbGl0eSAqIDIpO1xuICAgICAgb2xkU3VtID0gbGFzdERlbHRhc09sZC5yZWR1Y2UoZnVuY3Rpb24odCwgcykge1xuICAgICAgICByZXR1cm4gdCArIHM7XG4gICAgICB9KTtcbiAgICAgIG5ld1N1bSA9IGxhc3REZWx0YXNOZXcucmVkdWNlKGZ1bmN0aW9uKHQsIHMpIHtcbiAgICAgICAgcmV0dXJuIHQgKyBzO1xuICAgICAgfSk7XG4gICAgICBvbGRBdmVyYWdlID0gb2xkU3VtIC8gbGFzdERlbHRhc09sZC5sZW5ndGg7XG4gICAgICBuZXdBdmVyYWdlID0gbmV3U3VtIC8gbGFzdERlbHRhc05ldy5sZW5ndGg7XG4gICAgICBpZiAoTWF0aC5hYnMob2xkQXZlcmFnZSkgPCBNYXRoLmFicyhuZXdBdmVyYWdlICogdGhpcy50b2xlcmFuY2UpICYmICh0aGlzLnNlbnNpdGl2aXR5IDwgTWF0aC5hYnMobmV3QXZlcmFnZSkpKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5zaG93TGFzdFVwRGVsdGFzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0VXBEZWx0YXM7XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5zaG93TGFzdERvd25EZWx0YXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhc3REb3duRGVsdGFzO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGV0aGFyZ3k7XG5cbiAgfSkoKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJmdW5jdGlvbiBFICgpIHtcbiAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59XG5cbkUucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzb3VyY2UpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCd0aW55LWVtaXR0ZXInKTtcbnZhciBMZXRoYXJneSA9IHJlcXVpcmUoJ2xldGhhcmd5JykuTGV0aGFyZ3k7XG52YXIgc3VwcG9ydCA9IHJlcXVpcmUoJy4vc3VwcG9ydCcpO1xudmFyIGNsb25lID0gcmVxdWlyZSgnLi9jbG9uZScpO1xudmFyIGJpbmRBbGwgPSByZXF1aXJlKCdiaW5kYWxsLXN0YW5kYWxvbmUnKTtcbnZhciBFVlRfSUQgPSAndmlydHVhbHNjcm9sbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbFNjcm9sbDtcblxudmFyIGtleUNvZGVzID0ge1xuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG4gICAgU1BBQ0U6IDMyXG59O1xuXG5mdW5jdGlvbiBWaXJ0dWFsU2Nyb2xsKG9wdGlvbnMpIHtcbiAgICBiaW5kQWxsKHRoaXMsICdfb25XaGVlbCcsICdfb25Nb3VzZVdoZWVsJywgJ19vblRvdWNoU3RhcnQnLCAnX29uVG91Y2hNb3ZlJywgJ19vbktleURvd24nKTtcblxuICAgIHRoaXMuZWwgPSB3aW5kb3c7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbCkge1xuICAgICAgICB0aGlzLmVsID0gb3B0aW9ucy5lbDtcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMuZWw7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG9iamVjdEFzc2lnbih7XG4gICAgICAgIG1vdXNlTXVsdGlwbGllcjogMSxcbiAgICAgICAgdG91Y2hNdWx0aXBsaWVyOiAyLFxuICAgICAgICBmaXJlZm94TXVsdGlwbGllcjogMTUsXG4gICAgICAgIGtleVN0ZXA6IDEyMCxcbiAgICAgICAgcHJldmVudFRvdWNoOiBmYWxzZSxcbiAgICAgICAgdW5wcmV2ZW50VG91Y2hDbGFzczogJ3ZzLXRvdWNobW92ZS1hbGxvd2VkJyxcbiAgICAgICAgbGltaXRJbmVydGlhOiBmYWxzZSxcbiAgICAgICAgdXNlS2V5Ym9hcmQ6IHRydWVcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbmVydGlhKSB0aGlzLl9sZXRoYXJneSA9IG5ldyBMZXRoYXJneSgpO1xuXG4gICAgdGhpcy5fZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG4gICAgdGhpcy5fZXZlbnQgPSB7XG4gICAgICAgIHk6IDAsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgZGVsdGFZOiAwXG4gICAgfTtcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLmJvZHlUb3VjaEFjdGlvbiA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnBhc3NpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyT3B0aW9ucyA9IHtwYXNzaXZlOiB0aGlzLm9wdGlvbnMucGFzc2l2ZX07XG4gICAgfVxufVxuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fbm90aWZ5ID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQueCArPSBldnQuZGVsdGFYO1xuICAgIGV2dC55ICs9IGV2dC5kZWx0YVk7XG5cbiAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFVlRfSUQsIHtcbiAgICAgICAgeDogZXZ0LngsXG4gICAgICAgIHk6IGV2dC55LFxuICAgICAgICBkZWx0YVg6IGV2dC5kZWx0YVgsXG4gICAgICAgIGRlbHRhWTogZXZ0LmRlbHRhWSxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZVxuICAgfSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25XaGVlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAodGhpcy5fbGV0aGFyZ3kgJiYgdGhpcy5fbGV0aGFyZ3kuY2hlY2soZSkgPT09IGZhbHNlKSByZXR1cm47XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgLy8gSW4gQ2hyb21lIGFuZCBpbiBGaXJlZm94IChhdCBsZWFzdCB0aGUgbmV3IG9uZSlcbiAgICBldnQuZGVsdGFYID0gZS53aGVlbERlbHRhWCB8fCBlLmRlbHRhWCAqIC0xO1xuICAgIGV2dC5kZWx0YVkgPSBlLndoZWVsRGVsdGFZIHx8IGUuZGVsdGFZICogLTE7XG5cbiAgICAvLyBmb3Igb3VyIHB1cnBvc2UgZGVsdGFtb2RlID0gMSBtZWFucyB1c2VyIGlzIG9uIGEgd2hlZWwgbW91c2UsIG5vdCB0b3VjaCBwYWRcbiAgICAvLyByZWFsIG1lYW5pbmc6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaGVlbEV2ZW50I0RlbHRhX21vZGVzXG4gICAgaWYoc3VwcG9ydC5pc0ZpcmVmb3ggJiYgZS5kZWx0YU1vZGUgPT0gMSkge1xuICAgICAgICBldnQuZGVsdGFYICo9IG9wdGlvbnMuZmlyZWZveE11bHRpcGxpZXI7XG4gICAgICAgIGV2dC5kZWx0YVkgKj0gb3B0aW9ucy5maXJlZm94TXVsdGlwbGllcjtcbiAgICB9XG5cbiAgICBldnQuZGVsdGFYICo9IG9wdGlvbnMubW91c2VNdWx0aXBsaWVyO1xuICAgIGV2dC5kZWx0YVkgKj0gb3B0aW9ucy5tb3VzZU11bHRpcGxpZXI7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Nb3VzZVdoZWVsID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbmVydGlhICYmIHRoaXMuX2xldGhhcmd5LmNoZWNrKGUpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgLy8gSW4gU2FmYXJpLCBJRSBhbmQgaW4gQ2hyb21lIGlmICd3aGVlbCcgaXNuJ3QgZGVmaW5lZFxuICAgIGV2dC5kZWx0YVggPSAoZS53aGVlbERlbHRhWCkgPyBlLndoZWVsRGVsdGFYIDogMDtcbiAgICBldnQuZGVsdGFZID0gKGUud2hlZWxEZWx0YVkpID8gZS53aGVlbERlbHRhWSA6IGUud2hlZWxEZWx0YTtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vblRvdWNoU3RhcnQgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHQgPSAoZS50YXJnZXRUb3VjaGVzKSA/IGUudGFyZ2V0VG91Y2hlc1swXSA6IGU7XG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IHQucGFnZVg7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IHQucGFnZVk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Ub3VjaE1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYob3B0aW9ucy5wcmV2ZW50VG91Y2hcbiAgICAgICAgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhvcHRpb25zLnVucHJldmVudFRvdWNoQ2xhc3MpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICB2YXIgdCA9IChlLnRhcmdldFRvdWNoZXMpID8gZS50YXJnZXRUb3VjaGVzWzBdIDogZTtcblxuICAgIGV2dC5kZWx0YVggPSAodC5wYWdlWCAtIHRoaXMudG91Y2hTdGFydFgpICogb3B0aW9ucy50b3VjaE11bHRpcGxpZXI7XG4gICAgZXZ0LmRlbHRhWSA9ICh0LnBhZ2VZIC0gdGhpcy50b3VjaFN0YXJ0WSkgKiBvcHRpb25zLnRvdWNoTXVsdGlwbGllcjtcblxuICAgIHRoaXMudG91Y2hTdGFydFggPSB0LnBhZ2VYO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSB0LnBhZ2VZO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uS2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LmRlbHRhWCA9IGV2dC5kZWx0YVkgPSAwO1xuICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA0MFxuXG4gICAgc3dpdGNoKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIGtleUNvZGVzLkxFRlQ6XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuVVA6XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gdGhpcy5vcHRpb25zLmtleVN0ZXA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGtleUNvZGVzLlJJR0hUOlxuICAgICAgICBjYXNlIGtleUNvZGVzLkRPV046XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gLSB0aGlzLm9wdGlvbnMua2V5U3RlcDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGtleUNvZGVzLlNQQUNFICYmIGUuc2hpZnRLZXk6XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gd2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuU1BBQ0U6XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gLSB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fYmluZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHN1cHBvcnQuaGFzV2hlZWxFdmVudCkgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuX29uV2hlZWwsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICBpZihzdXBwb3J0Lmhhc01vdXNlV2hlZWxFdmVudCkgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5fb25Nb3VzZVdoZWVsLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG5cbiAgICBpZihzdXBwb3J0Lmhhc1RvdWNoKSB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uVG91Y2hTdGFydCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNQb2ludGVyICYmIHN1cHBvcnQuaGFzVG91Y2hXaW4pIHtcbiAgICAgICAgdGhpcy5ib2R5VG91Y2hBY3Rpb24gPSBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb247XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbiA9ICdub25lJztcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJNb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRydWUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzS2V5RG93biAmJiB0aGlzLm9wdGlvbnMudXNlS2V5Ym9hcmQpIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX3VuYmluZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHN1cHBvcnQuaGFzV2hlZWxFdmVudCkgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuX29uV2hlZWwpO1xuICAgIGlmKHN1cHBvcnQuaGFzTW91c2VXaGVlbEV2ZW50KSB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLl9vbk1vdXNlV2hlZWwpO1xuXG4gICAgaWYoc3VwcG9ydC5oYXNUb3VjaCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc1BvaW50ZXIgJiYgc3VwcG9ydC5oYXNUb3VjaFdpbikge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb24gPSB0aGlzLmJvZHlUb3VjaEFjdGlvbjtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJNb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRydWUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzS2V5RG93biAmJiB0aGlzLm9wdGlvbnMudXNlS2V5Ym9hcmQpIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihjYiwgY3R4KSB7XG4gIHRoaXMuX2VtaXR0ZXIub24oRVZUX0lELCBjYiwgY3R4KTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZW1pdHRlci5lO1xuICBpZiAoZXZlbnRzICYmIGV2ZW50c1tFVlRfSURdICYmIGV2ZW50c1tFVlRfSURdLmxlbmd0aCA9PT0gMSkgdGhpcy5fYmluZCgpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oY2IsIGN0eCkge1xuICB0aGlzLl9lbWl0dGVyLm9mZihFVlRfSUQsIGNiLCBjdHgpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9lbWl0dGVyLmU7XG4gIGlmICghZXZlbnRzW0VWVF9JRF0gfHwgZXZlbnRzW0VWVF9JRF0ubGVuZ3RoIDw9IDApIHRoaXMuX3VuYmluZCgpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LnggPSAwO1xuICAgIGV2dC55ID0gMDtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9mZigpO1xuICAgIHRoaXMuX3VuYmluZCgpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gZ2V0U3VwcG9ydCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoYXNXaGVlbEV2ZW50OiAnb253aGVlbCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc01vdXNlV2hlZWxFdmVudDogJ29ubW91c2V3aGVlbCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc1RvdWNoOiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudCxcbiAgICAgICAgaGFzVG91Y2hXaW46IG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzICYmIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMSxcbiAgICAgICAgaGFzUG9pbnRlcjogISF3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQsXG4gICAgICAgIGhhc0tleURvd246ICdvbmtleWRvd24nIGluIGRvY3VtZW50LFxuICAgICAgICBpc0ZpcmVmb3g6IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID4gLTFcbiAgICB9O1xufSkoKTtcbiJdfQ==
