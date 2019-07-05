(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _main = _interopRequireDefault(require("./scroll/main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function () {
  var scroll = new _main["default"]({
    el: document.querySelector('#js-scroll'),
    smooth: true,
    smoothMobile: true,
    mobileContainer: $(document),
    inertia: 1,
    scrollBarClassName: 'o-scrollbar',
    isScrollingClassName: 'is-scrolling',
    onScroll: function onScroll(e) {// console.log(e.scroll.y);
    }
  });
})();

},{"./scroll/main":5}],2:[function(require,module,exports){
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
    window.addEventListener('scroll', this.checkScroll, false);
    window.addEventListener('resize', this.checkResize, false);
  }

  _createClass(_default, [{
    key: "checkScroll",
    value: function checkScroll() {}
  }, {
    key: "checkResize",
    value: function checkResize() {} // addElements(){}

  }, {
    key: "detectElements",
    value: function detectElements() {
      var _this = this;

      var scrollTop = this.instance.scroll.y;
      var scrollBottom = scrollTop + this.windowHeight;
      this.els.forEach(function (el, i) {
        if (!el.inView) {
          if (scrollBottom >= el.top && scrollTop < el.bottom) {
            _this.setInView(el, i);
          }
        }

        if (el.inView) {
          if (scrollBottom < el.top || scrollTop > el.bottom) {
            _this.setOutOfView(el, i);
          }
        }
      });
      this.hasScrollTicking = false;
    }
  }, {
    key: "setInView",
    value: function setInView(el, i) {
      this.els[i].inView = true;
      el.el.classList.add(el["class"]);

      if (el.call) {
        this.callValue = el.call.split(',').map(function (item) {
          return item.trim();
        });
        if (this.callValue.length == 1) this.callValue = this.callValue[0];
        var callEvent = new Event(this.namespace + 'call');
        window.dispatchEvent(callEvent);
      }

      if (!el.repeat && el.speed === undefined) {
        this.els.splice(i, 1);
      }
    }
  }, {
    key: "setOutOfView",
    value: function setOutOfView(el, i) {
      if (el.repeat || el.speed !== undefined) {
        this.els[i].inView = false;
        el.el.classList.remove(el["class"]);
      }
    }
  }, {
    key: "updateElements",
    value: function updateElements() {
      var _this2 = this;

      this.els.forEach(function (el, i) {
        var top = el.el.getBoundingClientRect().top + _this2.instance.scroll.y;

        var bottom = top + el.el.offsetHeight;
        _this2.els[i].top = top + el.offset;
        _this2.els[i].bottom = bottom;
      });
      this.hasScrollTicking = false;
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
    key: "destroy",
    value: function destroy() {
      window.removeEventListener('scroll', this.checkScroll, false);
      window.removeEventListener('resize', this.checkResize, false);
    }
  }]);

  return _default;
}();

exports["default"] = _default;

},{"./options":6}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _options = require("./options");

var _Core2 = _interopRequireDefault(require("./Core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default =
/*#__PURE__*/
function (_Core) {
  _inherits(_default, _Core);

  function _default() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, options));
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      this.instance.scroll.y = window.scrollY;
      this.addElements();
      this.detectElements();
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var _this = this;

      if (this.els.length) {
        this.instance.scroll.y = window.scrollY;

        if (!this.hasScrollTicking) {
          requestAnimationFrame(function () {
            _this.detectElements();
          });
          this.hasScrollTicking = true;
        }
      }
    }
  }, {
    key: "checkResize",
    value: function checkResize() {
      var _this2 = this;

      if (this.els.length) {
        this.windowHeight = window.innerHeight;

        if (!this.hasScrollTicking) {
          requestAnimationFrame(function () {
            _this2.updateElements();
          });
          this.hasScrollTicking = true;
        }
      }
    }
  }, {
    key: "addElements",
    value: function addElements() {
      var _this3 = this;

      var els = this.el.querySelectorAll('[data-' + this.name + ']');
      els.forEach(function (el, i) {
        var cl = el.dataset[_this3.name + 'Class'] || _this3["class"];

        var top = el.getBoundingClientRect().top + _this3.instance.scroll.y;

        var bottom = top + el.offsetHeight;
        var offset = parseInt(el.dataset[_this3.name + 'Offset']) || parseInt(_this3.offset);
        var repeat = el.dataset[_this3.name + 'Repeat'];
        var call = el.dataset[_this3.name + 'Call'];

        if (repeat == 'false') {
          repeat = false;
        } else if (repeat != undefined) {
          repeat = true;
        } else {
          repeat = _this3.repeat;
        }

        _this3.els[i] = {
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
  }]);

  return _default;
}(_Core2["default"]);

exports["default"] = _default;

},{"./Core":2,"./options":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _virtualScroll = _interopRequireDefault(require("virtual-scroll"));

var _Core2 = _interopRequireDefault(require("./Core"));

var _maths = require("../utils/maths");

var _transform = require("../utils/transform");

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
    _this.isDraggingScrollBar = false;
    _this.isTicking = false;
    _this.hasScrollTicking = false;
    _this.parallaxElements = [];
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
      this.setScrollLimit();
      this.instance.vs.on(function (e) {
        if (!_this2.isTicking && !_this2.isDraggingScrollBar) {
          requestAnimationFrame(function () {
            if (!_this2.isScrolling) _this2.startScrolling();

            _this2.updateDelta(e);
          });
          _this2.isTicking = true;
        }

        _this2.isTicking = false;
      });
      this.addSections();
      this.addElements();
      this.detectElements();
      this.transformElements(true);
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
      this.instance.scroll.y = Math.round(this.instance.scroll.y);
      html.classList.remove(this.scrollingClass);
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var _this3 = this;

      if (this.isScrolling || this.isDraggingScrollBar) {
        if (!this.hasScrollTicking) {
          requestAnimationFrame(function () {
            return _this3.checkScroll();
          });
          this.hasScrollTicking = true;
        }

        var distance = Math.abs(this.instance.delta.y - this.instance.scroll.y);

        if (distance < 1 && this.instance.delta.y != 0 || distance < 0.5 && this.instance.delta.y == 0) {
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
        this.instance.scroll.y = (0, _maths.lerp)(this.instance.scroll.y, this.instance.delta.y, this.inertia);
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
    key: "addElements",
    value: function addElements() {
      var _this4 = this;

      this.els = [];
      this.parallaxElements = [];
      this.sections.forEach(function (section, y) {
        var els = _this4.sections[y].el.querySelectorAll("[data-".concat(_this4.name, "]"));

        els.forEach(function (el, i) {
          var cl = el.dataset[_this4.name + 'Class'] || _this4["class"];
          var top;
          var offset = parseInt(el.dataset[_this4.name + 'Offset']) || parseInt(_this4.offset);
          var repeat = el.dataset[_this4.name + 'Repeat'];
          var call = el.dataset[_this4.name + 'Call'];
          var position = el.dataset[_this4.name + 'Position'];
          var delay = el.dataset[_this4.name + 'Delay'];
          var direction = el.dataset[_this4.name + 'Direction'];
          var sticky = typeof el.dataset[_this4.name + 'Sticky'] === 'string';
          var speed = el.dataset[_this4.name + 'Speed'] ? parseFloat(el.dataset[_this4.name + 'Speed']) / 10 : false;
          var target = el.dataset[_this4.name + 'Target'];
          var targetEl;

          if (target !== undefined) {
            targetEl = document.querySelector("".concat(target));
          } else {
            targetEl = el;
          }

          if (!_this4.sections[y].inView) {
            top = targetEl.getBoundingClientRect().top - (0, _transform.getTranslate)(_this4.sections[y].el).y - (0, _transform.getTranslate)(targetEl).y;
          } else {
            top = targetEl.getBoundingClientRect().top + _this4.instance.scroll.y - (0, _transform.getTranslate)(targetEl).y;
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
            repeat = _this4.repeat;
          }

          var mappedEl = {
            el: el,
            "class": cl,
            top: top + offset,
            middle: middle,
            bottom: bottom,
            offset: offset,
            repeat: repeat,
            inView: false,
            call: call,
            speed: speed,
            delay: delay,
            position: position,
            target: target,
            direction: direction,
            sticky: sticky
          };

          _this4.els.push(mappedEl);

          if (speed !== undefined) {
            _this4.parallaxElements.push(mappedEl);
          }
        });
      });
    }
  }, {
    key: "addSections",
    value: function addSections() {
      var _this5 = this;

      this.sections = [];
      var sections = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
      sections.forEach(function (section, i) {
        var offset = section.getBoundingClientRect().top - window.innerHeight * 1.5 - (0, _transform.getTranslate)(section).y;
        var limit = offset + section.getBoundingClientRect().height + window.innerHeight * 2;
        var persistent = typeof section.dataset[_this5.name + 'Persistent'] === 'string';
        var inView = false;

        if (_this5.instance.scroll.y >= offset && _this5.instance.scroll.y <= limit) {
          inView = true;
        }

        var mappedSection = {
          el: section,
          offset: offset,
          limit: limit,
          inView: inView,
          persistent: persistent
        };
        _this5.sections[i] = mappedSection;
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
      var _this6 = this;

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
              transformDistance = _this6.instance.scroll.y * -current.speed;
              break;

            case 'bottom':
              transformDistance = (_this6.instance.limit - scrollBottom + _this6.windowHeight) * current.speed;
              break;

            default:
              transformDistance = (scrollMiddle - current.middle) * -current.speed;
              break;
          }
        }

        if (current.sticky) {
          if (current.inView) {
            transformDistance = _this6.instance.scroll.y - current.top + window.innerHeight;
          }

          if (_this6.instance.scroll.y < current.top) {
            transformDistance = 0;
          }

          if (_this6.instance.scroll.y > current.bottom) {
            transformDistance = current.bottom;
          }
        }

        if (transformDistance !== false) {
          if (current.direction === 'horizontal') {
            _this6.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
          } else {
            _this6.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
          }
        }
      });
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

},{"../utils/maths":7,"../utils/transform":8,"./Core":2,"virtual-scroll":14}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _options = require("./options");

var _Native = _interopRequireDefault(require("./Native"));

var _Smooth = _interopRequireDefault(require("./Smooth.js"));

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

      if (this.smooth == true && !this.isMobile) {
        this.scroll = new _Smooth["default"](this.options);
      } else {
        this.scroll = new _Native["default"](this.options);
      }

      this.scroll.init(); // const $scrollToOnLoadEl = $('.js-scrollto-on-load').first();
      // if ($scrollToOnLoadEl.length === 1) {
      //     $document.triggerHandler({
      //         type: 'Event.SCROLLTO',
      //         options: {
      //             targetElem: $scrollToOnLoadEl
      //         }
      //     });
      // }
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

},{"./Native":3,"./Smooth.js":4,"./options":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = void 0;
var defaults = {
  el: document,
  elMobile: document,
  name: 'scroll',
  "class": 'is-inview',
  scrollingClass: 'is-scrolling',
  smoothClass: 'has-smoothscroll',
  offset: 0,
  inertia: 1,
  repeat: false,
  smooth: false,
  smoothMobile: false,
  getDirection: false,
  getSpeed: false
};
exports.defaults = defaults;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lerp = lerp;

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
'use strict';

module.exports = function(source) {
    return JSON.parse(JSON.stringify(source));
};
},{}],14:[function(require,module,exports){
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

},{"./clone":13,"./support":15,"bindall-standalone":9,"lethargy":10,"object-assign":11,"tiny-emitter":12}],15:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9hcHAuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvQ29yZS5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC9OYXRpdmUuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvU21vb3RoLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL21haW4uanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvb3B0aW9ucy5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL21hdGhzLmpzIiwiYXNzZXRzL3NjcmlwdHMvdXRpbHMvdHJhbnNmb3JtLmpzIiwibm9kZV9tb2R1bGVzL2JpbmRhbGwtc3RhbmRhbG9uZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sZXRoYXJneS9sZXRoYXJneS5qcyIsIm5vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3RpbnktZW1pdHRlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLXNjcm9sbC9zcmMvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvc3JjL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtc2Nyb2xsL3NyYy9zdXBwb3J0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUVBLENBQUMsWUFBVztBQUVSLE1BQU0sTUFBTSxHQUFHLElBQUksZ0JBQUosQ0FBcUI7QUFDaEMsSUFBQSxFQUFFLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FENEI7QUFFaEMsSUFBQSxNQUFNLEVBQUUsSUFGd0I7QUFHaEMsSUFBQSxZQUFZLEVBQUUsSUFIa0I7QUFJaEMsSUFBQSxlQUFlLEVBQUUsQ0FBQyxDQUFDLFFBQUQsQ0FKYztBQUtoQyxJQUFBLE9BQU8sRUFBRSxDQUx1QjtBQU1oQyxJQUFBLGtCQUFrQixFQUFFLGFB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QUFDSDs7O0FDcEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBsb2NvbW90aXZlU2Nyb2xsIGZyb20gJy4vc2Nyb2xsL21haW4nO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBzY3JvbGwgPSBuZXcgbG9jb21vdGl2ZVNjcm9sbCh7XG4gICAgICAgIGVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtc2Nyb2xsJyksXG4gICAgICAgIHNtb290aDogdHJ1ZSxcbiAgICAgICAgc21vb3RoTW9iaWxlOiB0cnVlLFxuICAgICAgICBtb2JpbGVDb250YWluZXI6ICQoZG9jdW1lbnQpLFxuICAgICAgICBpbmVydGlhOiAxLFxuICAgICAgICBzY3JvbGxCYXJDbGFzc05hbWU6ICdvLXNjcm9sbGJhcicsXG4gICAgICAgIGlzU2Nyb2xsaW5nQ2xhc3NOYW1lOiAnaXMtc2Nyb2xsaW5nJyxcbiAgICAgICAgb25TY3JvbGw6IChlKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnNjcm9sbC55KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59KSgpO1xuIiwiaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL29wdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMubmFtZXNwYWNlID0gJ2xvY29tb3RpdmUnO1xuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuZWxzID0gW107XG5cblxuICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGVja1Njcm9sbCA9IHRoaXMuY2hlY2tTY3JvbGwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja1Jlc2l6ZSA9IHRoaXMuY2hlY2tSZXNpemUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlID0ge1xuICAgICAgICAgICAgc2Nyb2xsOiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBzcGVlZDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hlY2tTY3JvbGwsIGZhbHNlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2hlY2tSZXNpemUsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjaGVja1Njcm9sbCgpe31cbiAgICBjaGVja1Jlc2l6ZSgpe31cblxuICAgIC8vIGFkZEVsZW1lbnRzKCl7fVxuXG4gICAgZGV0ZWN0RWxlbWVudHMoKSB7XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsQm90dG9tID0gc2Nyb2xsVG9wICsgdGhpcy53aW5kb3dIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5lbHMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgIGlmICghZWwuaW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgaWYgKChzY3JvbGxCb3R0b20gPj0gZWwudG9wKSAmJiAoc2Nyb2xsVG9wIDwgZWwuYm90dG9tKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEluVmlldyhlbCwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZWwuaW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgaWYgKChzY3JvbGxCb3R0b20gPCBlbC50b3ApIHx8IChzY3JvbGxUb3AgPiBlbC5ib3R0b20pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0T3V0T2ZWaWV3KGVsLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldEluVmlldyhlbCwgaSkge1xuXG4gICAgICAgIHRoaXMuZWxzW2ldLmluVmlldyA9IHRydWU7XG4gICAgICAgIGVsLmVsLmNsYXNzTGlzdC5hZGQoZWwuY2xhc3MpO1xuXG4gICAgICAgIGlmIChlbC5jYWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxWYWx1ZSA9IGVsLmNhbGwuc3BsaXQoJywnKS5tYXAoaXRlbSA9PiBpdGVtLnRyaW0oKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jYWxsVmFsdWUubGVuZ3RoID09IDEpIHRoaXMuY2FsbFZhbHVlID0gdGhpcy5jYWxsVmFsdWVbMF07XG5cbiAgICAgICAgICAgIGNvbnN0IGNhbGxFdmVudCA9IG5ldyBFdmVudCh0aGlzLm5hbWVzcGFjZSArICdjYWxsJyk7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChjYWxsRXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlbC5yZXBlYXQgJiYgZWwuc3BlZWQgPT09IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgdGhpcy5lbHMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0T3V0T2ZWaWV3KGVsLCBpKSB7XG5cbiAgICAgICAgaWYoZWwucmVwZWF0IHx8IGVsLnNwZWVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxzW2ldLmluVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgZWwuZWwuY2xhc3NMaXN0LnJlbW92ZShlbC5jbGFzcyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHVwZGF0ZUVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLmVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9wID0gZWwuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbSA9IHRvcCArIGVsLmVsLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgdGhpcy5lbHNbaV0udG9wID0gdG9wICsgZWwub2Zmc2V0O1xuICAgICAgICAgICAgdGhpcy5lbHNbaV0uYm90dG9tID0gYm90dG9tO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICB9XG5cblxuICAgIG9uKGV2ZW50LCBmdW5jKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZXNwYWNlICsgZXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjYWxsJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmModGhpcy5jYWxsVmFsdWUpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jaGVja1Njcm9sbCwgZmFsc2UpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jaGVja1Jlc2l6ZSwgZmFsc2UpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IENvcmUgZnJvbSAnLi9Db3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb3JlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcblxuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICBjaGVja1Njcm9sbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICAgICAgICBpZighdGhpcy5oYXNTY3JvbGxUaWNraW5nKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRlY3RFbGVtZW50cygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1Jlc2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc1Njcm9sbFRpY2tpbmcpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnRzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCBlbHMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLScrdGhpcy5uYW1lKyddJyk7XG5cbiAgICAgICAgZWxzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2wgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdDbGFzcyddIHx8IHRoaXMuY2xhc3M7XG4gICAgICAgICAgICBsZXQgdG9wID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgICAgICAgIGxldCBib3R0b20gPSB0b3AgKyBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gcGFyc2VJbnQoZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnT2Zmc2V0J10pIHx8IHBhcnNlSW50KHRoaXMub2Zmc2V0KTtcbiAgICAgICAgICAgIGxldCByZXBlYXQgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdSZXBlYXQnXTtcbiAgICAgICAgICAgIGxldCBjYWxsID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnQ2FsbCddO1xuXG4gICAgICAgICAgICBpZihyZXBlYXQgPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXBlYXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0ID0gdGhpcy5yZXBlYXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZWxzW2ldID0ge1xuICAgICAgICAgICAgICAgIGVsOiBlbCxcbiAgICAgICAgICAgICAgICBjbGFzczogY2wsXG4gICAgICAgICAgICAgICAgdG9wOiB0b3AgKyBvZmZzZXQsXG4gICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICAgICAgICAgICAgaW5WaWV3OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjYWxsOiBjYWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG5cblxuXG59XG4iLCJpbXBvcnQgdmlydHVhbFNjcm9sbCBmcm9tICd2aXJ0dWFsLXNjcm9sbCc7XG5pbXBvcnQgQ29yZSBmcm9tICcuL0NvcmUnO1xuaW1wb3J0IHsgbGVycCB9IGZyb20gJy4uL3V0aWxzL21hdGhzJ1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRlIH0gZnJvbSAnLi4vdXRpbHMvdHJhbnNmb3JtJ1xuXG5jb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvcmUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmluZXJ0aWEgPSB0aGlzLmluZXJ0aWEgKiAwLjE7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMgPSBbXTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQodGhpcy5zbW9vdGhDbGFzcyk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IHtcbiAgICAgICAgICAgIHZzOiBuZXcgdmlydHVhbFNjcm9sbCh7XG4gICAgICAgICAgICAgICAgbW91c2VNdWx0aXBsaWVyOiAobmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoJ1dpbicpID4gLTEpID8gMSA6IDAuNCxcbiAgICAgICAgICAgICAgICB0b3VjaE11bHRpcGxpZXI6IDQsXG4gICAgICAgICAgICAgICAgZmlyZWZveE11bHRpcGxpZXI6IDMwXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGRlbHRhOiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4udGhpcy5pbnN0YW5jZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTY3JvbGxMaW1pdCgpO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UudnMub24oKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1RpY2tpbmcgJiYgIXRoaXMuaXNEcmFnZ2luZ1Njcm9sbEJhcikge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Njcm9sbGluZykgdGhpcy5zdGFydFNjcm9sbGluZygpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGVsdGEoZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRTZWN0aW9ucygpO1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cyh0cnVlKTtcbiAgICB9XG5cbiAgICBzZXRTY3JvbGxMaW1pdCgpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5saW1pdCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0IC0gdGhpcy53aW5kb3dIZWlnaHQ7XG4gICAgfVxuXG4gICAgc3RhcnRTY3JvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsKCk7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLnNjcm9sbGluZ0NsYXNzKTtcbiAgICB9XG5cbiAgICBzdG9wU2Nyb2xsaW5nKCkge1xuICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSBNYXRoLnJvdW5kKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zY3JvbGxpbmdDbGFzcyk7XG4gICAgfVxuXG4gICAgY2hlY2tTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2Nyb2xsaW5nIHx8IHRoaXMuaXNEcmFnZ2luZ1Njcm9sbEJhcikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc1Njcm9sbFRpY2tpbmcpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT7CoHRoaXMuY2hlY2tTY3JvbGwoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAoTWF0aC5hYnModGhpcy5pbnN0YW5jZS5kZWx0YS55IC0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkpO1xuICAgICAgICAgICAgaWYgKChkaXN0YW5jZSA8IDEgJiYgdGhpcy5pbnN0YW5jZS5kZWx0YS55ICE9IDApIHx8IChkaXN0YW5jZSA8IDAuNSAmJiB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPT0gMCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51cGRhdGVTY3JvbGwoKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc2VjdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNlY3Rpb25zW2ldLnBlcnNpc3RlbnQgfHwgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPiB0aGlzLnNlY3Rpb25zW2ldLm9mZnNldCAmJiB0aGlzLmluc3RhbmNlLnNjcm9sbC55IDwgdGhpcy5zZWN0aW9uc1tpXS5saW1pdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5zZWN0aW9uc1tpXS5lbCwwLC10aGlzLmluc3RhbmNlLnNjcm9sbC55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXS5lbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zW2ldLmluVmlldyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXS5lbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbnNbaV0uaW5WaWV3ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5nZXREaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldERpcmVjdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRTcGVlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3BlZWQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudHMoKTtcblxuICAgICAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1Jlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMud2luZG93TWlkZGxlID0gdGhpcy53aW5kb3dIZWlnaHQgLyAyO1xuXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTGltaXQoKTtcbiAgICAgICAgdGhpcy5hZGRTZWN0aW9ucygpO1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTY3JvbGwoKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cyh0cnVlKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZURlbHRhKGUpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YS55IC09IGUuZGVsdGFZO1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55IDwgMCkgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0gMDtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA+IHRoaXMuaW5zdGFuY2UubGltaXQpIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IHRoaXMuaW5zdGFuY2UubGltaXQ7XG4gICAgfVxuXG4gICAgdXBkYXRlU2Nyb2xsKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Njcm9sbGluZykge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IGxlcnAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSwgdGhpcy5pbnN0YW5jZS5kZWx0YS55LCB0aGlzLmluZXJ0aWEpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNEcmFnZ2luZ1Njcm9sbEJhcikge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IGxlcnAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSwgdGhpcy5pbnN0YW5jZS5kZWx0YS55LCAodGhpcy5pbmVydGlhICogMikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IHRoaXMuaW5zdGFuY2UuZGVsdGEueTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldERpcmVjdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA+IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gIT09ICdkb3duJykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiA9ICdkb3duJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgPCB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uICE9PSAndXAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uID0gJ3VwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNwZWVkKCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55ICE9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnNwZWVkID0gKHRoaXMuaW5zdGFuY2UuZGVsdGEueSAtIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIC8gKERhdGUubm93KCkgLSB0aGlzLnRpbWVzdGFtcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5zcGVlZCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5lbHMgPSBbXVxuICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMgPSBbXVxuXG4gICAgICAgIHRoaXMuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgeSkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBlbHMgPSB0aGlzLnNlY3Rpb25zW3ldLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLSR7dGhpcy5uYW1lfV1gKTtcblxuICAgICAgICAgICAgZWxzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNsID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnQ2xhc3MnXSB8fCB0aGlzLmNsYXNzO1xuICAgICAgICAgICAgICAgIGxldCB0b3A7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IHBhcnNlSW50KGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ09mZnNldCddKSB8fCBwYXJzZUludCh0aGlzLm9mZnNldCk7XG4gICAgICAgICAgICAgICAgbGV0IHJlcGVhdCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ1JlcGVhdCddO1xuICAgICAgICAgICAgICAgIGxldCBjYWxsID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnQ2FsbCddO1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ1Bvc2l0aW9uJ107XG4gICAgICAgICAgICAgICAgbGV0IGRlbGF5ID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnRGVsYXknXTtcbiAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnRGlyZWN0aW9uJ107XG4gICAgICAgICAgICAgICAgbGV0IHN0aWNreSA9IHR5cGVvZiBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdTdGlja3knXSA9PT0gJ3N0cmluZyc7XG4gICAgICAgICAgICAgICAgbGV0IHNwZWVkID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnU3BlZWQnXSA/IHBhcnNlRmxvYXQoZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnU3BlZWQnXSkvMTAgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnVGFyZ2V0J107XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldEVsO1xuXG4gICAgICAgICAgICAgICAgaWYodGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3RhcmdldH1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbCA9IGVsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnNlY3Rpb25zW3ldLmluVmlldykge1xuICAgICAgICAgICAgICAgICAgICB0b3AgPSB0YXJnZXRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBnZXRUcmFuc2xhdGUodGhpcy5zZWN0aW9uc1t5XS5lbCkueSAtIGdldFRyYW5zbGF0ZSh0YXJnZXRFbCkueTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b3AgPSB0YXJnZXRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55IC0gZ2V0VHJhbnNsYXRlKHRhcmdldEVsKS55O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBib3R0b20gPSB0b3AgKyB0YXJnZXRFbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgbGV0IG1pZGRsZSA9ICgoYm90dG9tIC0gdG9wKSAvIDIpICsgdG9wO1xuXG4gICAgICAgICAgICAgICAgaWYoc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcCArPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRvcCArIHRhcmdldEVsLm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCAtIGVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbWlkZGxlID0gKChib3R0b20gLSB0b3ApIC8gMikgKyB0b3A7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBpZihyZXBlYXQgPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcGVhdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSB0aGlzLnJlcGVhdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRFbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZWwsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBjbCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0b3AgKyBvZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgIG1pZGRsZSxcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgICAgICAgICAgaW5WaWV3OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbCxcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5LFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHN0aWNreVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZWxzLnB1c2gobWFwcGVkRWwpO1xuXG4gICAgICAgICAgICAgICAgaWYoc3BlZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMucHVzaChtYXBwZWRFbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGFkZFNlY3Rpb25zKCkge1xuICAgICAgICB0aGlzLnNlY3Rpb25zID0gW107XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLSR7dGhpcy5uYW1lfS1zZWN0aW9uXWApO1xuXG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIGkpID0+IHtcblxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gKHdpbmRvdy5pbm5lckhlaWdodCAqIDEuNSkgLSBnZXRUcmFuc2xhdGUoc2VjdGlvbikueTtcbiAgICAgICAgICAgIGxldCBsaW1pdCA9IG9mZnNldCArIHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgKHdpbmRvdy5pbm5lckhlaWdodCAqIDIpO1xuICAgICAgICAgICAgbGV0IHBlcnNpc3RlbnQgPSB0eXBlb2Ygc2VjdGlvbi5kYXRhc2V0W3RoaXMubmFtZSArICdQZXJzaXN0ZW50J10gPT09ICdzdHJpbmcnO1xuXG4gICAgICAgICAgICBsZXQgaW5WaWV3ID0gZmFsc2U7XG4gICAgICAgICAgICBpZih0aGlzLmluc3RhbmNlLnNjcm9sbC55ID49IG9mZnNldCAmJiB0aGlzLmluc3RhbmNlLnNjcm9sbC55IDw9IGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgaW5WaWV3ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbWFwcGVkU2VjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBlbDogc2VjdGlvbixcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICAgICAgICBsaW1pdDogbGltaXQsXG4gICAgICAgICAgICAgICAgaW5WaWV3OiBpblZpZXcsXG4gICAgICAgICAgICAgICAgcGVyc2lzdGVudDogcGVyc2lzdGVudFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25zW2ldID0gbWFwcGVkU2VjdGlvbjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKGVsZW1lbnQsIHgsIHksIGRlbGF5KSB7XG4gICAgICAgIGxldCB0cmFuc2Zvcm07XG5cbiAgICAgICAgaWYoIWRlbGF5KSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSBgbWF0cml4KDEsMCwwLDEsJHt4fSwke3l9KWBcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgbGV0IGxlcnBYID0gbGVycChzdGFydC54LCB4LCBkZWxheSk7XG4gICAgICAgICAgICBsZXQgbGVycFkgPSBsZXJwKHN0YXJ0LnksIHksIGRlbGF5KTtcblxuICAgICAgICAgICAgdHJhbnNmb3JtID0gYG1hdHJpeCgxLDAsMCwxLCR7bGVycFh9LCR7bGVycFl9KWBcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1FbGVtZW50cyhpc0ZvcmNlZCkge1xuXG4gICAgICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0aGlzLndpbmRvd0hlaWdodDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsTWlkZGxlID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSArIHRoaXMud2luZG93TWlkZGxlO1xuXG4gICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cy5mb3JFYWNoKChjdXJyZW50LCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgdHJhbnNmb3JtRGlzdGFuY2UgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYoKGlzRm9yY2VkICYmICFjdXJyZW50LmluVmlldykpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY3VycmVudC5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnQucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSAqIC1jdXJyZW50LnNwZWVkO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9ICh0aGlzLmluc3RhbmNlLmxpbWl0IC0gc2Nyb2xsQm90dG9tICsgdGhpcy53aW5kb3dIZWlnaHQpICogY3VycmVudC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKHNjcm9sbE1pZGRsZSAtIGN1cnJlbnQubWlkZGxlKSAqIC1jdXJyZW50LnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY3VycmVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50LmluVmlldykge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgLSBjdXJyZW50LnRvcCArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8IGN1cnJlbnQudG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+IGN1cnJlbnQuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gY3VycmVudC5ib3R0b207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmKHRyYW5zZm9ybURpc3RhbmNlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnQuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oY3VycmVudC5lbCwgdHJhbnNmb3JtRGlzdGFuY2UsIDAsIChpc0ZvcmNlZCA/IGZhbHNlIDogY3VycmVudC5kZWxheSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oY3VycmVudC5lbCwgMCwgdHJhbnNmb3JtRGlzdGFuY2UsIChpc0ZvcmNlZCA/IGZhbHNlIDogY3VycmVudC5kZWxheSkpXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCBTY3JvbGwgZnJvbSAnLi9OYXRpdmUnO1xuaW1wb3J0IFNtb290aCBmcm9tICcuL1Ntb290aC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNtb290aE1vYmlsZSkge1xuICAgICAgICAgICAgdGhpcy5pc01vYmlsZSA9ICgvQW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc21vb3RoID09IHRydWUgJiYgIXRoaXMuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsID0gbmV3IFNtb290aCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwgPSBuZXcgU2Nyb2xsKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbC5pbml0KCk7XG5cbiAgICAgICAgLy8gY29uc3QgJHNjcm9sbFRvT25Mb2FkRWwgPSAkKCcuanMtc2Nyb2xsdG8tb24tbG9hZCcpLmZpcnN0KCk7XG5cbiAgICAgICAgLy8gaWYgKCRzY3JvbGxUb09uTG9hZEVsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyAgICAgJGRvY3VtZW50LnRyaWdnZXJIYW5kbGVyKHtcbiAgICAgICAgLy8gICAgICAgICB0eXBlOiAnRXZlbnQuU0NST0xMVE8nLFxuICAgICAgICAvLyAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGFyZ2V0RWxlbTogJHNjcm9sbFRvT25Mb2FkRWxcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgZWw6IGRvY3VtZW50LFxuICAgIGVsTW9iaWxlOiBkb2N1bWVudCxcbiAgICBuYW1lOiAnc2Nyb2xsJyxcbiAgICBjbGFzczogJ2lzLWludmlldycsXG4gICAgc2Nyb2xsaW5nQ2xhc3M6ICdpcy1zY3JvbGxpbmcnLFxuICAgIHNtb290aENsYXNzOiAnaGFzLXNtb290aHNjcm9sbCcsXG4gICAgb2Zmc2V0OiAwLFxuICAgIGluZXJ0aWE6IDEsXG4gICAgcmVwZWF0OiBmYWxzZSxcbiAgICBzbW9vdGg6IGZhbHNlLFxuICAgIHNtb290aE1vYmlsZTogZmFsc2UsXG4gICAgZ2V0RGlyZWN0aW9uOiBmYWxzZSxcbiAgICBnZXRTcGVlZDogZmFsc2Vcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gbGVycChzdGFydCwgZW5kLCBhbXQpe1xuICAgIHJldHVybiAoMSAtIGFtdCkgKiBzdGFydCArIGFtdCAqIGVuZFxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShlbCwgdHJhbnNmb3JtVmFsdWUpe1xuICAgIGVsLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xuICAgIGVsLnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XG4gICAgZWwuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWwpe1xuICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHt9XG4gICAgaWYoIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSByZXR1cm47XG5cbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSB8fCBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gfHwgc3R5bGUubW96VHJhbnNmb3JtO1xuXG4gICAgbGV0IG1hdCA9IHRyYW5zZm9ybS5tYXRjaCgvXm1hdHJpeDNkXFwoKC4rKVxcKSQvKTtcbiAgICBpZihtYXQpIHJldHVybiBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVsxM10pO1xuICAgIG1hdCA9IHRyYW5zZm9ybS5tYXRjaCgvXm1hdHJpeFxcKCguKylcXCkkLyk7XG4gICAgdHJhbnNsYXRlLnggPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVs0XSkgOiAwO1xuICAgIHRyYW5zbGF0ZS55ID0gbWF0ID8gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbNV0pIDogMDtcblxuICAgIHJldHVybiB0cmFuc2xhdGU7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmKCFvYmplY3QpIHJldHVybiBjb25zb2xlLndhcm4oJ2JpbmRBbGwgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50LicpO1xuXG4gICAgdmFyIGZ1bmN0aW9ucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICBpZiAoZnVuY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgIGZvciAodmFyIG1ldGhvZCBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBtZXRob2QpKSB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIG9iamVjdFttZXRob2RdID09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbChvYmplY3RbbWV0aG9kXSkgPT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9ucy5wdXNoKG1ldGhvZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGZ1bmN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uc1tpXTtcbiAgICAgICAgb2JqZWN0W2ZdID0gYmluZChvYmplY3RbZl0sIG9iamVjdCk7XG4gICAgfVxufTtcblxuLypcbiAgICBGYXN0ZXIgYmluZCB3aXRob3V0IHNwZWNpZmljLWNhc2UgY2hlY2tpbmcuIChzZWUgaHR0cHM6Ly9jb2RlcndhbGwuY29tL3Avb2kzajN3KS5cbiAgICBiaW5kQWxsIGlzIG9ubHkgbmVlZGVkIGZvciBldmVudHMgYmluZGluZyBzbyBubyBuZWVkIHRvIG1ha2Ugc2xvdyBmaXhlcyBmb3IgY29uc3RydWN0b3JcbiAgICBvciBwYXJ0aWFsIGFwcGxpY2F0aW9uLlxuKi9cbmZ1bmN0aW9uIGJpbmQoZnVuYywgY29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgfTtcbn0iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuOS4yXG4oZnVuY3Rpb24oKSB7XG4gIHZhciByb290O1xuXG4gIHJvb3QgPSB0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBleHBvcnRzICE9PSBudWxsID8gZXhwb3J0cyA6IHRoaXM7XG5cbiAgcm9vdC5MZXRoYXJneSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBMZXRoYXJneShzdGFiaWxpdHksIHNlbnNpdGl2aXR5LCB0b2xlcmFuY2UsIGRlbGF5KSB7XG4gICAgICB0aGlzLnN0YWJpbGl0eSA9IHN0YWJpbGl0eSAhPSBudWxsID8gTWF0aC5hYnMoc3RhYmlsaXR5KSA6IDg7XG4gICAgICB0aGlzLnNlbnNpdGl2aXR5ID0gc2Vuc2l0aXZpdHkgIT0gbnVsbCA/IDEgKyBNYXRoLmFicyhzZW5zaXRpdml0eSkgOiAxMDA7XG4gICAgICB0aGlzLnRvbGVyYW5jZSA9IHRvbGVyYW5jZSAhPSBudWxsID8gMSArIE1hdGguYWJzKHRvbGVyYW5jZSkgOiAxLjE7XG4gICAgICB0aGlzLmRlbGF5ID0gZGVsYXkgIT0gbnVsbCA/IGRlbGF5IDogMTUwO1xuICAgICAgdGhpcy5sYXN0VXBEZWx0YXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMubGFzdERvd25EZWx0YXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDEsIHJlZiA9IHRoaXMuc3RhYmlsaXR5ICogMjsgMSA8PSByZWYgPyBpIDw9IHJlZiA6IGkgPj0gcmVmOyAxIDw9IHJlZiA/IGkrKyA6IGktLSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGxhc3REZWx0YTtcbiAgICAgIGUgPSBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcbiAgICAgIGlmIChlLndoZWVsRGVsdGEgIT0gbnVsbCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLndoZWVsRGVsdGE7XG4gICAgICB9IGVsc2UgaWYgKGUuZGVsdGFZICE9IG51bGwpIHtcbiAgICAgICAgbGFzdERlbHRhID0gZS5kZWx0YVkgKiAtNDA7XG4gICAgICB9IGVsc2UgaWYgKChlLmRldGFpbCAhPSBudWxsKSB8fCBlLmRldGFpbCA9PT0gMCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLmRldGFpbCAqIC00MDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wLnB1c2goRGF0ZS5ub3coKSk7XG4gICAgICB0aGlzLmRlbHRhc1RpbWVzdGFtcC5zaGlmdCgpO1xuICAgICAgaWYgKGxhc3REZWx0YSA+IDApIHtcbiAgICAgICAgdGhpcy5sYXN0VXBEZWx0YXMucHVzaChsYXN0RGVsdGEpO1xuICAgICAgICB0aGlzLmxhc3RVcERlbHRhcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0luZXJ0aWEoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhc3REb3duRGVsdGFzLnB1c2gobGFzdERlbHRhKTtcbiAgICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0luZXJ0aWEoLTEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuaXNJbmVydGlhID0gZnVuY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgbGFzdERlbHRhcywgbGFzdERlbHRhc05ldywgbGFzdERlbHRhc09sZCwgbmV3QXZlcmFnZSwgbmV3U3VtLCBvbGRBdmVyYWdlLCBvbGRTdW07XG4gICAgICBsYXN0RGVsdGFzID0gZGlyZWN0aW9uID09PSAtMSA/IHRoaXMubGFzdERvd25EZWx0YXMgOiB0aGlzLmxhc3RVcERlbHRhcztcbiAgICAgIGlmIChsYXN0RGVsdGFzWzBdID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kZWx0YXNUaW1lc3RhbXBbKHRoaXMuc3RhYmlsaXR5ICogMikgLSAyXSArIHRoaXMuZGVsYXkgPiBEYXRlLm5vdygpICYmIGxhc3REZWx0YXNbMF0gPT09IGxhc3REZWx0YXNbKHRoaXMuc3RhYmlsaXR5ICogMikgLSAxXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsYXN0RGVsdGFzT2xkID0gbGFzdERlbHRhcy5zbGljZSgwLCB0aGlzLnN0YWJpbGl0eSk7XG4gICAgICBsYXN0RGVsdGFzTmV3ID0gbGFzdERlbHRhcy5zbGljZSh0aGlzLnN0YWJpbGl0eSwgdGhpcy5zdGFiaWxpdHkgKiAyKTtcbiAgICAgIG9sZFN1bSA9IGxhc3REZWx0YXNPbGQucmVkdWNlKGZ1bmN0aW9uKHQsIHMpIHtcbiAgICAgICAgcmV0dXJuIHQgKyBzO1xuICAgICAgfSk7XG4gICAgICBuZXdTdW0gPSBsYXN0RGVsdGFzTmV3LnJlZHVjZShmdW5jdGlvbih0LCBzKSB7XG4gICAgICAgIHJldHVybiB0ICsgcztcbiAgICAgIH0pO1xuICAgICAgb2xkQXZlcmFnZSA9IG9sZFN1bSAvIGxhc3REZWx0YXNPbGQubGVuZ3RoO1xuICAgICAgbmV3QXZlcmFnZSA9IG5ld1N1bSAvIGxhc3REZWx0YXNOZXcubGVuZ3RoO1xuICAgICAgaWYgKE1hdGguYWJzKG9sZEF2ZXJhZ2UpIDwgTWF0aC5hYnMobmV3QXZlcmFnZSAqIHRoaXMudG9sZXJhbmNlKSAmJiAodGhpcy5zZW5zaXRpdml0eSA8IE1hdGguYWJzKG5ld0F2ZXJhZ2UpKSkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuc2hvd0xhc3RVcERlbHRhcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFzdFVwRGVsdGFzO1xuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuc2hvd0xhc3REb3duRGVsdGFzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0RG93bkRlbHRhcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIExldGhhcmd5O1xuXG4gIH0pKCk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiZnVuY3Rpb24gRSAoKSB7XG4gIC8vIEtlZXAgdGhpcyBlbXB0eSBzbyBpdCdzIGVhc2llciB0byBpbmhlcml0IGZyb21cbiAgLy8gKHZpYSBodHRwczovL2dpdGh1Yi5jb20vbGlwc21hY2sgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2lzc3Vlcy8zKVxufVxuXG5FLnByb3RvdHlwZSA9IHtcbiAgb246IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcblxuICAgIChlW25hbWVdIHx8IChlW25hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgIGN0eDogY3R4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvbmNlOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiBsaXN0ZW5lciAoKSB7XG4gICAgICBzZWxmLm9mZihuYW1lLCBsaXN0ZW5lcik7XG4gICAgICBjYWxsYmFjay5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVyLl8gPSBjYWxsYmFja1xuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIGxpc3RlbmVyLCBjdHgpO1xuICB9LFxuXG4gIGVtaXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGRhdGEgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGV2dEFyciA9ICgodGhpcy5lIHx8ICh0aGlzLmUgPSB7fSkpW25hbWVdIHx8IFtdKS5zbGljZSgpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuID0gZXZ0QXJyLmxlbmd0aDtcblxuICAgIGZvciAoaTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBldnRBcnJbaV0uZm4uYXBwbHkoZXZ0QXJyW2ldLmN0eCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb2ZmOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuICAgIHZhciBldnRzID0gZVtuYW1lXTtcbiAgICB2YXIgbGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKGV2dHMgJiYgY2FsbGJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChldnRzW2ldLmZuICE9PSBjYWxsYmFjayAmJiBldnRzW2ldLmZuLl8gIT09IGNhbGxiYWNrKVxuICAgICAgICAgIGxpdmVFdmVudHMucHVzaChldnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgZnJvbSBxdWV1ZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAgLy8gU3VnZ2VzdGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9sYXpkXG4gICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2NvbW1pdC9jNmViZmFhOWJjOTczYjMzZDExMGE4NGEzMDc3NDJiN2NmOTRjOTUzI2NvbW1pdGNvbW1lbnQtNTAyNDkxMFxuXG4gICAgKGxpdmVFdmVudHMubGVuZ3RoKVxuICAgICAgPyBlW25hbWVdID0gbGl2ZUV2ZW50c1xuICAgICAgOiBkZWxldGUgZVtuYW1lXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEU7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc291cmNlKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc291cmNlKSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgndGlueS1lbWl0dGVyJyk7XG52YXIgTGV0aGFyZ3kgPSByZXF1aXJlKCdsZXRoYXJneScpLkxldGhhcmd5O1xudmFyIHN1cHBvcnQgPSByZXF1aXJlKCcuL3N1cHBvcnQnKTtcbnZhciBjbG9uZSA9IHJlcXVpcmUoJy4vY2xvbmUnKTtcbnZhciBiaW5kQWxsID0gcmVxdWlyZSgnYmluZGFsbC1zdGFuZGFsb25lJyk7XG52YXIgRVZUX0lEID0gJ3ZpcnR1YWxzY3JvbGwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxTY3JvbGw7XG5cbnZhciBrZXlDb2RlcyA9IHtcbiAgICBMRUZUOiAzNyxcbiAgICBVUDogMzgsXG4gICAgUklHSFQ6IDM5LFxuICAgIERPV046IDQwLFxuICAgIFNQQUNFOiAzMlxufTtcblxuZnVuY3Rpb24gVmlydHVhbFNjcm9sbChvcHRpb25zKSB7XG4gICAgYmluZEFsbCh0aGlzLCAnX29uV2hlZWwnLCAnX29uTW91c2VXaGVlbCcsICdfb25Ub3VjaFN0YXJ0JywgJ19vblRvdWNoTW92ZScsICdfb25LZXlEb3duJyk7XG5cbiAgICB0aGlzLmVsID0gd2luZG93O1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZWwpIHtcbiAgICAgICAgdGhpcy5lbCA9IG9wdGlvbnMuZWw7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmVsO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSBvYmplY3RBc3NpZ24oe1xuICAgICAgICBtb3VzZU11bHRpcGxpZXI6IDEsXG4gICAgICAgIHRvdWNoTXVsdGlwbGllcjogMixcbiAgICAgICAgZmlyZWZveE11bHRpcGxpZXI6IDE1LFxuICAgICAgICBrZXlTdGVwOiAxMjAsXG4gICAgICAgIHByZXZlbnRUb3VjaDogZmFsc2UsXG4gICAgICAgIHVucHJldmVudFRvdWNoQ2xhc3M6ICd2cy10b3VjaG1vdmUtYWxsb3dlZCcsXG4gICAgICAgIGxpbWl0SW5lcnRpYTogZmFsc2VcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbmVydGlhKSB0aGlzLl9sZXRoYXJneSA9IG5ldyBMZXRoYXJneSgpO1xuXG4gICAgdGhpcy5fZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG4gICAgdGhpcy5fZXZlbnQgPSB7XG4gICAgICAgIHk6IDAsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgZGVsdGFZOiAwXG4gICAgfTtcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLmJvZHlUb3VjaEFjdGlvbiA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnBhc3NpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyT3B0aW9ucyA9IHtwYXNzaXZlOiB0aGlzLm9wdGlvbnMucGFzc2l2ZX07XG4gICAgfVxufVxuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fbm90aWZ5ID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQueCArPSBldnQuZGVsdGFYO1xuICAgIGV2dC55ICs9IGV2dC5kZWx0YVk7XG5cbiAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFVlRfSUQsIHtcbiAgICAgICAgeDogZXZ0LngsXG4gICAgICAgIHk6IGV2dC55LFxuICAgICAgICBkZWx0YVg6IGV2dC5kZWx0YVgsXG4gICAgICAgIGRlbHRhWTogZXZ0LmRlbHRhWSxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZVxuICAgfSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25XaGVlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAodGhpcy5fbGV0aGFyZ3kgJiYgdGhpcy5fbGV0aGFyZ3kuY2hlY2soZSkgPT09IGZhbHNlKSByZXR1cm47XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgLy8gSW4gQ2hyb21lIGFuZCBpbiBGaXJlZm94IChhdCBsZWFzdCB0aGUgbmV3IG9uZSlcbiAgICBldnQuZGVsdGFYID0gZS53aGVlbERlbHRhWCB8fCBlLmRlbHRhWCAqIC0xO1xuICAgIGV2dC5kZWx0YVkgPSBlLndoZWVsRGVsdGFZIHx8IGUuZGVsdGFZICogLTE7XG5cbiAgICAvLyBmb3Igb3VyIHB1cnBvc2UgZGVsdGFtb2RlID0gMSBtZWFucyB1c2VyIGlzIG9uIGEgd2hlZWwgbW91c2UsIG5vdCB0b3VjaCBwYWRcbiAgICAvLyByZWFsIG1lYW5pbmc6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaGVlbEV2ZW50I0RlbHRhX21vZGVzXG4gICAgaWYoc3VwcG9ydC5pc0ZpcmVmb3ggJiYgZS5kZWx0YU1vZGUgPT0gMSkge1xuICAgICAgICBldnQuZGVsdGFYICo9IG9wdGlvbnMuZmlyZWZveE11bHRpcGxpZXI7XG4gICAgICAgIGV2dC5kZWx0YVkgKj0gb3B0aW9ucy5maXJlZm94TXVsdGlwbGllcjtcbiAgICB9XG5cbiAgICBldnQuZGVsdGFYICo9IG9wdGlvbnMubW91c2VNdWx0aXBsaWVyO1xuICAgIGV2dC5kZWx0YVkgKj0gb3B0aW9ucy5tb3VzZU11bHRpcGxpZXI7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Nb3VzZVdoZWVsID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbmVydGlhICYmIHRoaXMuX2xldGhhcmd5LmNoZWNrKGUpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgLy8gSW4gU2FmYXJpLCBJRSBhbmQgaW4gQ2hyb21lIGlmICd3aGVlbCcgaXNuJ3QgZGVmaW5lZFxuICAgIGV2dC5kZWx0YVggPSAoZS53aGVlbERlbHRhWCkgPyBlLndoZWVsRGVsdGFYIDogMDtcbiAgICBldnQuZGVsdGFZID0gKGUud2hlZWxEZWx0YVkpID8gZS53aGVlbERlbHRhWSA6IGUud2hlZWxEZWx0YTtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vblRvdWNoU3RhcnQgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHQgPSAoZS50YXJnZXRUb3VjaGVzKSA/IGUudGFyZ2V0VG91Y2hlc1swXSA6IGU7XG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IHQucGFnZVg7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IHQucGFnZVk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Ub3VjaE1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYob3B0aW9ucy5wcmV2ZW50VG91Y2hcbiAgICAgICAgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhvcHRpb25zLnVucHJldmVudFRvdWNoQ2xhc3MpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICB2YXIgdCA9IChlLnRhcmdldFRvdWNoZXMpID8gZS50YXJnZXRUb3VjaGVzWzBdIDogZTtcblxuICAgIGV2dC5kZWx0YVggPSAodC5wYWdlWCAtIHRoaXMudG91Y2hTdGFydFgpICogb3B0aW9ucy50b3VjaE11bHRpcGxpZXI7XG4gICAgZXZ0LmRlbHRhWSA9ICh0LnBhZ2VZIC0gdGhpcy50b3VjaFN0YXJ0WSkgKiBvcHRpb25zLnRvdWNoTXVsdGlwbGllcjtcblxuICAgIHRoaXMudG91Y2hTdGFydFggPSB0LnBhZ2VYO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSB0LnBhZ2VZO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uS2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LmRlbHRhWCA9IGV2dC5kZWx0YVkgPSAwO1xuICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA0MFxuXG4gICAgc3dpdGNoKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIGtleUNvZGVzLkxFRlQ6XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuVVA6XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gdGhpcy5vcHRpb25zLmtleVN0ZXA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGtleUNvZGVzLlJJR0hUOlxuICAgICAgICBjYXNlIGtleUNvZGVzLkRPV046XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gLSB0aGlzLm9wdGlvbnMua2V5U3RlcDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGtleUNvZGVzLlNQQUNFICYmIGUuc2hpZnRLZXk6XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gd2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuU1BBQ0U6XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gLSB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fYmluZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHN1cHBvcnQuaGFzV2hlZWxFdmVudCkgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuX29uV2hlZWwsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICBpZihzdXBwb3J0Lmhhc01vdXNlV2hlZWxFdmVudCkgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5fb25Nb3VzZVdoZWVsLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG5cbiAgICBpZihzdXBwb3J0Lmhhc1RvdWNoKSB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uVG91Y2hTdGFydCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNQb2ludGVyICYmIHN1cHBvcnQuaGFzVG91Y2hXaW4pIHtcbiAgICAgICAgdGhpcy5ib2R5VG91Y2hBY3Rpb24gPSBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb247XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbiA9ICdub25lJztcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJNb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRydWUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzS2V5RG93bikgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bik7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fdW5iaW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc3VwcG9ydC5oYXNXaGVlbEV2ZW50KSB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5fb25XaGVlbCk7XG4gICAgaWYoc3VwcG9ydC5oYXNNb3VzZVdoZWVsRXZlbnQpIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuX29uTW91c2VXaGVlbCk7XG5cbiAgICBpZihzdXBwb3J0Lmhhc1RvdWNoKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uVG91Y2hTdGFydCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzUG9pbnRlciAmJiBzdXBwb3J0Lmhhc1RvdWNoV2luKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbiA9IHRoaXMuYm9keVRvdWNoQWN0aW9uO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlckRvd24nLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRydWUpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlck1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNLZXlEb3duKSBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oY2IsIGN0eCkge1xuICB0aGlzLl9lbWl0dGVyLm9uKEVWVF9JRCwgY2IsIGN0eCk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2VtaXR0ZXIuZTtcbiAgaWYgKGV2ZW50cyAmJiBldmVudHNbRVZUX0lEXSAmJiBldmVudHNbRVZUX0lEXS5sZW5ndGggPT09IDEpIHRoaXMuX2JpbmQoKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGNiLCBjdHgpIHtcbiAgdGhpcy5fZW1pdHRlci5vZmYoRVZUX0lELCBjYiwgY3R4KTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZW1pdHRlci5lO1xuICBpZiAoIWV2ZW50c1tFVlRfSURdIHx8IGV2ZW50c1tFVlRfSURdLmxlbmd0aCA8PSAwKSB0aGlzLl91bmJpbmQoKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuICAgIGV2dC54ID0gMDtcbiAgICBldnQueSA9IDA7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vZmYoKTtcbiAgICB0aGlzLl91bmJpbmQoKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uIGdldFN1cHBvcnQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGFzV2hlZWxFdmVudDogJ29ud2hlZWwnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNNb3VzZVdoZWVsRXZlbnQ6ICdvbm1vdXNld2hlZWwnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNUb3VjaDogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc1RvdWNoV2luOiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyAmJiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDEsXG4gICAgICAgIGhhc1BvaW50ZXI6ICEhd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkLFxuICAgICAgICBoYXNLZXlEb3duOiAnb25rZXlkb3duJyBpbiBkb2N1bWVudCxcbiAgICAgICAgaXNGaXJlZm94OiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA+IC0xXG4gICAgfTtcbn0pKCk7XG4iXX0=
