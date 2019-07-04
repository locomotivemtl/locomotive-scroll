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
      if (el.repeat) {
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
        console.log('checkScroll');
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
          var speed = el.dataset[_this4.name + 'Speed'] ? parseFloat(el.dataset[_this4.name + 'Speed']) / 10 : false;

          if (!_this4.sections[y].inView) {
            top = el.getBoundingClientRect().top - (0, _transform.getTranslate)(_this4.sections[y].el).y - (0, _transform.getTranslate)(el).y;
          } else {
            top = el.getBoundingClientRect().top + _this4.instance.scroll.y - (0, _transform.getTranslate)(el).y;
          }

          var bottom = top + el.offsetHeight;
          var middle = (bottom - top) / 2 + top;

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
            position: position
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
        var lerpY = (0, _maths.lerp)((0, _transform.getTranslate)(element).y, y, delay);
        transform = "matrix(1,0,0,1,0,".concat(lerpY, ")");
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

        if (transformDistance !== false) {
          _this6.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9hcHAuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvQ29yZS5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC9OYXRpdmUuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvU21vb3RoLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL21haW4uanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvb3B0aW9ucy5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL21hdGhzLmpzIiwiYXNzZXRzL3NjcmlwdHMvdXRpbHMvdHJhbnNmb3JtLmpzIiwibm9kZV9tb2R1bGVzL2JpbmRhbGwtc3RhbmRhbG9uZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sZXRoYXJneS9sZXRoYXJneS5qcyIsIm5vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3RpbnktZW1pdHRlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLXNjcm9sbC9zcmMvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvc3JjL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtc2Nyb2xsL3NyYy9zdXBwb3J0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUVBLENBQUMsWUFBVztBQUVSLE1BQU0sTUFBTSxHQUFHLElBQUksZ0JBQUosQ0FBcUI7QUFDaEMsSUFBQSxFQUFFLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FENEI7QUFFaEMsSUFBQSxNQUFNLEVBQUUsSUFGd0I7QUFHaEMsSUFBQSxZQUFZLEVBQUUsSUFIa0I7QUFJaEMsSUFBQSxlQUFlLEVBQUUsQ0FBQyxDQUFDLFFBQUQsQ0FKYztBQUtoQyxJQUFBLE9BQU8sRUFBRSxDQUx1QjtBQU1oQyxJQUFBLGtCQUFrQixFQUFFLGFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBsb2NvbW90aXZlU2Nyb2xsIGZyb20gJy4vc2Nyb2xsL21haW4nO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBzY3JvbGwgPSBuZXcgbG9jb21vdGl2ZVNjcm9sbCh7XG4gICAgICAgIGVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtc2Nyb2xsJyksXG4gICAgICAgIHNtb290aDogdHJ1ZSxcbiAgICAgICAgc21vb3RoTW9iaWxlOiB0cnVlLFxuICAgICAgICBtb2JpbGVDb250YWluZXI6ICQoZG9jdW1lbnQpLFxuICAgICAgICBpbmVydGlhOiAxLFxuICAgICAgICBzY3JvbGxCYXJDbGFzc05hbWU6ICdvLXNjcm9sbGJhcicsXG4gICAgICAgIGlzU2Nyb2xsaW5nQ2xhc3NOYW1lOiAnaXMtc2Nyb2xsaW5nJyxcbiAgICAgICAgb25TY3JvbGw6IChlKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnNjcm9sbC55KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59KSgpO1xuIiwiaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL29wdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMubmFtZXNwYWNlID0gJ2xvY29tb3RpdmUnO1xuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuZWxzID0gW107XG5cblxuICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGVja1Njcm9sbCA9IHRoaXMuY2hlY2tTY3JvbGwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja1Jlc2l6ZSA9IHRoaXMuY2hlY2tSZXNpemUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlID0ge1xuICAgICAgICAgICAgc2Nyb2xsOiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBzcGVlZDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hlY2tTY3JvbGwsIGZhbHNlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2hlY2tSZXNpemUsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjaGVja1Njcm9sbCgpe31cbiAgICBjaGVja1Jlc2l6ZSgpe31cblxuICAgIC8vIGFkZEVsZW1lbnRzKCl7fVxuXG4gICAgZGV0ZWN0RWxlbWVudHMoKSB7XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsQm90dG9tID0gc2Nyb2xsVG9wICsgdGhpcy53aW5kb3dIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5lbHMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgIGlmICghZWwuaW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgaWYgKChzY3JvbGxCb3R0b20gPj0gZWwudG9wKSAmJiAoc2Nyb2xsVG9wIDwgZWwuYm90dG9tKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEluVmlldyhlbCwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZWwuaW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgaWYgKChzY3JvbGxCb3R0b20gPCBlbC50b3ApIHx8IChzY3JvbGxUb3AgPiBlbC5ib3R0b20pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0T3V0T2ZWaWV3KGVsLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldEluVmlldyhlbCwgaSkge1xuXG4gICAgICAgIHRoaXMuZWxzW2ldLmluVmlldyA9IHRydWU7XG4gICAgICAgIGVsLmVsLmNsYXNzTGlzdC5hZGQoZWwuY2xhc3MpO1xuXG4gICAgICAgIGlmIChlbC5jYWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxWYWx1ZSA9IGVsLmNhbGwuc3BsaXQoJywnKS5tYXAoaXRlbSA9PiBpdGVtLnRyaW0oKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jYWxsVmFsdWUubGVuZ3RoID09IDEpIHRoaXMuY2FsbFZhbHVlID0gdGhpcy5jYWxsVmFsdWVbMF07XG5cbiAgICAgICAgICAgIGNvbnN0IGNhbGxFdmVudCA9IG5ldyBFdmVudCh0aGlzLm5hbWVzcGFjZSArICdjYWxsJyk7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChjYWxsRXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlbC5yZXBlYXQgJiYgZWwuc3BlZWQgPT09IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgdGhpcy5lbHMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0T3V0T2ZWaWV3KGVsLCBpKSB7XG5cbiAgICAgICAgaWYoZWwucmVwZWF0KSB7XG4gICAgICAgICAgICB0aGlzLmVsc1tpXS5pblZpZXcgPSBmYWxzZTtcbiAgICAgICAgICAgIGVsLmVsLmNsYXNzTGlzdC5yZW1vdmUoZWwuY2xhc3MpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICB1cGRhdGVFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5lbHMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IGVsLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgICAgICBjb25zdCBib3R0b20gPSB0b3AgKyBlbC5lbC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgIHRoaXMuZWxzW2ldLnRvcCA9IHRvcCArIGVsLm9mZnNldDtcbiAgICAgICAgICAgIHRoaXMuZWxzW2ldLmJvdHRvbSA9IGJvdHRvbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBvbihldmVudCwgZnVuYykge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWVzcGFjZSArIGV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2FsbCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jKHRoaXMuY2FsbFZhbHVlKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hlY2tTY3JvbGwsIGZhbHNlKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2hlY2tSZXNpemUsIGZhbHNlKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCBDb3JlIGZyb20gJy4vQ29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29yZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG5cbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gd2luZG93LnNjcm9sbFk7XG5cbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmRldGVjdEVsZW1lbnRzKCk7XG4gICAgfVxuXG4gICAgY2hlY2tTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzU2Nyb2xsVGlja2luZykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tSZXNpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgICBpZighdGhpcy5oYXNTY3JvbGxUaWNraW5nKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50cygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgY29uc3QgZWxzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS0nK3RoaXMubmFtZSsnXScpO1xuXG4gICAgICAgIGVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNsID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnQ2xhc3MnXSB8fCB0aGlzLmNsYXNzO1xuICAgICAgICAgICAgbGV0IHRvcCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgICAgICBsZXQgYm90dG9tID0gdG9wICsgZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHBhcnNlSW50KGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ09mZnNldCddKSB8fCBwYXJzZUludCh0aGlzLm9mZnNldCk7XG4gICAgICAgICAgICBsZXQgcmVwZWF0ID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnUmVwZWF0J107XG4gICAgICAgICAgICBsZXQgY2FsbCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0NhbGwnXTtcblxuICAgICAgICAgICAgaWYocmVwZWF0ID09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVwZWF0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRoaXMucmVwZWF0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVsc1tpXSA9IHtcbiAgICAgICAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgICAgICAgY2xhc3M6IGNsLFxuICAgICAgICAgICAgICAgIHRvcDogdG9wICsgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgICAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgICAgICAgICAgIGluVmlldzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2FsbDogY2FsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuXG5cblxufVxuIiwiaW1wb3J0IHZpcnR1YWxTY3JvbGwgZnJvbSAndmlydHVhbC1zY3JvbGwnO1xuaW1wb3J0IENvcmUgZnJvbSAnLi9Db3JlJztcbmltcG9ydCB7IGxlcnAgfSBmcm9tICcuLi91dGlscy9tYXRocydcbmltcG9ydCB7IGdldFRyYW5zbGF0ZSB9IGZyb20gJy4uL3V0aWxzL3RyYW5zZm9ybSdcblxuY29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb3JlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbmVydGlhID0gdGhpcy5pbmVydGlhICogMC4xO1xuICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ1Njcm9sbEJhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVGlja2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW107XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuc21vb3RoQ2xhc3MpO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSB7XG4gICAgICAgICAgICB2czogbmV3IHZpcnR1YWxTY3JvbGwoe1xuICAgICAgICAgICAgICAgIG1vdXNlTXVsdGlwbGllcjogKG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKCdXaW4nKSA+IC0xKSA/IDEgOiAwLjQsXG4gICAgICAgICAgICAgICAgdG91Y2hNdWx0aXBsaWVyOiA0LFxuICAgICAgICAgICAgICAgIGZpcmVmb3hNdWx0aXBsaWVyOiAzMFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBkZWx0YToge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLnRoaXMuaW5zdGFuY2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTGltaXQoKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlLnZzLm9uKChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNUaWNraW5nICYmICF0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNTY3JvbGxpbmcpIHRoaXMuc3RhcnRTY3JvbGxpbmcoKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlbHRhKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkU2VjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmRldGVjdEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudHModHJ1ZSk7XG4gICAgfVxuXG4gICAgc2V0U2Nyb2xsTGltaXQoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UubGltaXQgPSB0aGlzLmVsLm9mZnNldEhlaWdodCAtIHRoaXMud2luZG93SGVpZ2h0O1xuICAgIH1cblxuICAgIHN0YXJ0U2Nyb2xsaW5nKCkge1xuICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaGVja1Njcm9sbCgpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQodGhpcy5zY3JvbGxpbmdDbGFzcyk7XG4gICAgfVxuXG4gICAgc3RvcFNjcm9sbGluZygpIHtcbiAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gTWF0aC5yb3VuZCh0aGlzLmluc3RhbmNlLnNjcm9sbC55KTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgIH1cblxuICAgIGNoZWNrU2Nyb2xsKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Njcm9sbGluZyB8fCB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNTY3JvbGxUaWNraW5nKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+wqB0aGlzLmNoZWNrU2Nyb2xsKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gKE1hdGguYWJzKHRoaXMuaW5zdGFuY2UuZGVsdGEueSAtIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpKTtcbiAgICAgICAgICAgIGlmICgoZGlzdGFuY2UgPCAxICYmIHRoaXMuaW5zdGFuY2UuZGVsdGEueSAhPSAwKSB8fCAoZGlzdGFuY2UgPCAwLjUgJiYgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID09IDApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnNlY3Rpb25zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zZWN0aW9uc1tpXS5wZXJzaXN0ZW50IHx8ICh0aGlzLmluc3RhbmNlLnNjcm9sbC55ID4gdGhpcy5zZWN0aW9uc1tpXS5vZmZzZXQgJiYgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8IHRoaXMuc2VjdGlvbnNbaV0ubGltaXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuc2VjdGlvbnNbaV0uZWwsMCwtdGhpcy5pbnN0YW5jZS5zY3JvbGwueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbnNbaV0uZWwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXS5pblZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbnNbaV0uZWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zW2ldLmluVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXREaXJlY3Rpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0U3BlZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNwZWVkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRldGVjdEVsZW1lbnRzKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tTY3JvbGwnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrUmVzaXplKCkge1xuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG5cbiAgICAgICAgdGhpcy5zZXRTY3JvbGxMaW1pdCgpO1xuICAgICAgICB0aGlzLmFkZFNlY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5kZXRlY3RFbGVtZW50cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKHRydWUpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlRGVsdGEoZSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgLT0gZS5kZWx0YVk7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgPCAwKSB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSAwO1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55ID4gdGhpcy5pbnN0YW5jZS5saW1pdCkgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0gdGhpcy5pbnN0YW5jZS5saW1pdDtcbiAgICB9XG5cbiAgICB1cGRhdGVTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gbGVycCh0aGlzLmluc3RhbmNlLnNjcm9sbC55LCB0aGlzLmluc3RhbmNlLmRlbHRhLnksIHRoaXMuaW5lcnRpYSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gbGVycCh0aGlzLmluc3RhbmNlLnNjcm9sbC55LCB0aGlzLmluc3RhbmNlLmRlbHRhLnksICh0aGlzLmluZXJ0aWEgKiAyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gdGhpcy5pbnN0YW5jZS5kZWx0YS55O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55ID4gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA8IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U3BlZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgIT0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuc3BlZWQgPSAodGhpcy5pbnN0YW5jZS5kZWx0YS55IC0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkgLyAoRGF0ZS5ub3coKSAtIHRoaXMudGltZXN0YW1wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnNwZWVkID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLmVscyA9IFtdXG4gICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cyA9IFtdXG5cbiAgICAgICAgdGhpcy5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uLCB5KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGVscyA9IHRoaXMuc2VjdGlvbnNbeV0uZWwucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtJHt0aGlzLm5hbWV9XWApO1xuXG4gICAgICAgICAgICBlbHMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY2wgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdDbGFzcyddIHx8IHRoaXMuY2xhc3M7XG4gICAgICAgICAgICAgICAgbGV0IHRvcDtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gcGFyc2VJbnQoZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnT2Zmc2V0J10pIHx8IHBhcnNlSW50KHRoaXMub2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBsZXQgcmVwZWF0ID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnUmVwZWF0J107XG4gICAgICAgICAgICAgICAgbGV0IGNhbGwgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdDYWxsJ107XG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnUG9zaXRpb24nXTtcbiAgICAgICAgICAgICAgICBsZXQgZGVsYXkgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdEZWxheSddO1xuICAgICAgICAgICAgICAgIGxldCBzcGVlZCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ1NwZWVkJ10gPyBwYXJzZUZsb2F0KGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ1NwZWVkJ10pLzEwIDogZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZighdGhpcy5zZWN0aW9uc1t5XS5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gZ2V0VHJhbnNsYXRlKHRoaXMuc2VjdGlvbnNbeV0uZWwpLnkgLSBnZXRUcmFuc2xhdGUoZWwpLnk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSAtIGdldFRyYW5zbGF0ZShlbCkueTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgYm90dG9tID0gdG9wICsgZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIGxldCBtaWRkbGUgPSAoKGJvdHRvbSAtIHRvcCkgLyAyKSArIHRvcFxuXG4gICAgICAgICAgICAgICAgaWYocmVwZWF0ID09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXBlYXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gdGhpcy5yZXBlYXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbWFwcGVkRWwgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogY2wsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdG9wICsgb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICBtaWRkbGUsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICAgICAgICAgIGluVmlldzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbGwsXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkLFxuICAgICAgICAgICAgICAgICAgICBkZWxheSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmVscy5wdXNoKG1hcHBlZEVsKTtcblxuICAgICAgICAgICAgICAgIGlmKHNwZWVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzLnB1c2gobWFwcGVkRWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBhZGRTZWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5zZWN0aW9ucyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS0ke3RoaXMubmFtZX0tc2VjdGlvbl1gKTtcblxuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uLCBpKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAxLjUpIC0gZ2V0VHJhbnNsYXRlKHNlY3Rpb24pLnk7XG4gICAgICAgICAgICBsZXQgbGltaXQgPSBvZmZzZXQgKyBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAyKTtcbiAgICAgICAgICAgIGxldCBwZXJzaXN0ZW50ID0gdHlwZW9mIHNlY3Rpb24uZGF0YXNldFt0aGlzLm5hbWUgKyAnUGVyc2lzdGVudCddID09PSAnc3RyaW5nJztcblxuICAgICAgICAgICAgbGV0IGluVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+PSBvZmZzZXQgJiYgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1hcHBlZFNlY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgZWw6IHNlY3Rpb24sXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICAgICAgbGltaXQ6IGxpbWl0LFxuICAgICAgICAgICAgICAgIGluVmlldzogaW5WaWV3LFxuICAgICAgICAgICAgICAgIHBlcnNpc3RlbnQ6IHBlcnNpc3RlbnRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXSA9IG1hcHBlZFNlY3Rpb247XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyYW5zZm9ybShlbGVtZW50LCB4LCB5LCBkZWxheSkge1xuICAgICAgICBsZXQgdHJhbnNmb3JtO1xuXG4gICAgICAgIGlmKCFkZWxheSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtID0gYG1hdHJpeCgxLDAsMCwxLCR7eH0sJHt5fSlgXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsZXJwWSA9IGxlcnAoZ2V0VHJhbnNsYXRlKGVsZW1lbnQpLnksIHksIGRlbGF5KTtcblxuICAgICAgICAgICAgdHJhbnNmb3JtID0gYG1hdHJpeCgxLDAsMCwxLDAsJHtsZXJwWX0pYFxuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIH1cblxuICAgIHRyYW5zZm9ybUVsZW1lbnRzKGlzRm9yY2VkKSB7XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsQm90dG9tID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSArIHRoaXMud2luZG93SGVpZ2h0O1xuICAgICAgICBjb25zdCBzY3JvbGxNaWRkbGUgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICsgdGhpcy53aW5kb3dNaWRkbGU7XG5cbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzLmZvckVhY2goKGN1cnJlbnQsIGkpID0+IHtcbiAgICAgICAgICAgIGxldCB0cmFuc2Zvcm1EaXN0YW5jZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZihpc0ZvcmNlZCAmJiAhY3VycmVudC5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY3VycmVudC5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnQucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSAqIC1jdXJyZW50LnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAodGhpcy5pbnN0YW5jZS5saW1pdCAtIHNjcm9sbEJvdHRvbSArIHRoaXMud2luZG93SGVpZ2h0KSAqIGN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IChzY3JvbGxNaWRkbGUgLSBjdXJyZW50Lm1pZGRsZSkgKiAtY3VycmVudC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0cmFuc2Zvcm1EaXN0YW5jZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybShjdXJyZW50LmVsLCAwLCB0cmFuc2Zvcm1EaXN0YW5jZSwgKGlzRm9yY2VkID8gZmFsc2UgOiBjdXJyZW50LmRlbGF5KSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IFNjcm9sbCBmcm9tICcuL05hdGl2ZSc7XG5pbXBvcnQgU21vb3RoIGZyb20gJy4vU21vb3RoLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMuc21vb3RoTW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLmlzTW9iaWxlID0gKC9BbmRyb2lkfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zbW9vdGggPT0gdHJ1ZSAmJiAhdGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwgPSBuZXcgU21vb3RoKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbCA9IG5ldyBTY3JvbGwodGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsLmluaXQoKTtcblxuICAgICAgICAvLyBjb25zdCAkc2Nyb2xsVG9PbkxvYWRFbCA9ICQoJy5qcy1zY3JvbGx0by1vbi1sb2FkJykuZmlyc3QoKTtcblxuICAgICAgICAvLyBpZiAoJHNjcm9sbFRvT25Mb2FkRWwubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vICAgICAkZG9jdW1lbnQudHJpZ2dlckhhbmRsZXIoe1xuICAgICAgICAvLyAgICAgICAgIHR5cGU6ICdFdmVudC5TQ1JPTExUTycsXG4gICAgICAgIC8vICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAvLyAgICAgICAgICAgICB0YXJnZXRFbGVtOiAkc2Nyb2xsVG9PbkxvYWRFbFxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGwuZGVzdHJveSgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICBlbDogZG9jdW1lbnQsXG4gICAgZWxNb2JpbGU6IGRvY3VtZW50LFxuICAgIG5hbWU6ICdzY3JvbGwnLFxuICAgIGNsYXNzOiAnaXMtaW52aWV3JyxcbiAgICBzY3JvbGxpbmdDbGFzczogJ2lzLXNjcm9sbGluZycsXG4gICAgc21vb3RoQ2xhc3M6ICdoYXMtc21vb3Roc2Nyb2xsJyxcbiAgICBvZmZzZXQ6IDAsXG4gICAgaW5lcnRpYTogMSxcbiAgICByZXBlYXQ6IGZhbHNlLFxuICAgIHNtb290aDogZmFsc2UsXG4gICAgc21vb3RoTW9iaWxlOiBmYWxzZSxcbiAgICBnZXREaXJlY3Rpb246IGZhbHNlLFxuICAgIGdldFNwZWVkOiBmYWxzZVxufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBsZXJwKHN0YXJ0LCBlbmQsIGFtdCl7XG4gICAgcmV0dXJuICgxIC0gYW10KSAqIHN0YXJ0ICsgYW10ICogZW5kXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKGVsLCB0cmFuc2Zvcm1WYWx1ZSl7XG4gICAgZWwuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XG4gICAgZWwuc3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbiAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0ZShlbCl7XG4gICAgY29uc3QgdHJhbnNsYXRlID0ge31cbiAgICBpZighd2luZG93LmdldENvbXB1dGVkU3R5bGUpIHJldHVybjtcblxuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtIHx8IHN0eWxlLndlYmtpdFRyYW5zZm9ybSB8fCBzdHlsZS5tb3pUcmFuc2Zvcm07XG5cbiAgICBsZXQgbWF0ID0gdHJhbnNmb3JtLm1hdGNoKC9ebWF0cml4M2RcXCgoLispXFwpJC8pO1xuICAgIGlmKG1hdCkgcmV0dXJuIHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzEzXSk7XG4gICAgbWF0ID0gdHJhbnNmb3JtLm1hdGNoKC9ebWF0cml4XFwoKC4rKVxcKSQvKTtcbiAgICB0cmFuc2xhdGUueCA9IG1hdCA/IHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzRdKSA6IDA7XG4gICAgdHJhbnNsYXRlLnkgPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVs1XSkgOiAwO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0ZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYoIW9iamVjdCkgcmV0dXJuIGNvbnNvbGUud2FybignYmluZEFsbCByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQuJyk7XG5cbiAgICB2YXIgZnVuY3Rpb25zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIGlmIChmdW5jdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgZm9yICh2YXIgbWV0aG9kIGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIG1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2Ygb2JqZWN0W21ldGhvZF0gPT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKG9iamVjdFttZXRob2RdKSA9PSBcIltvYmplY3QgRnVuY3Rpb25dXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25zLnB1c2gobWV0aG9kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZnVuY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmID0gZnVuY3Rpb25zW2ldO1xuICAgICAgICBvYmplY3RbZl0gPSBiaW5kKG9iamVjdFtmXSwgb2JqZWN0KTtcbiAgICB9XG59O1xuXG4vKlxuICAgIEZhc3RlciBiaW5kIHdpdGhvdXQgc3BlY2lmaWMtY2FzZSBjaGVja2luZy4gKHNlZSBodHRwczovL2NvZGVyd2FsbC5jb20vcC9vaTNqM3cpLlxuICAgIGJpbmRBbGwgaXMgb25seSBuZWVkZWQgZm9yIGV2ZW50cyBiaW5kaW5nIHNvIG5vIG5lZWQgdG8gbWFrZSBzbG93IGZpeGVzIGZvciBjb25zdHJ1Y3RvclxuICAgIG9yIHBhcnRpYWwgYXBwbGljYXRpb24uXG4qL1xuZnVuY3Rpb24gYmluZChmdW5jLCBjb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICB9O1xufSIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS45LjJcbihmdW5jdGlvbigpIHtcbiAgdmFyIHJvb3Q7XG5cbiAgcm9vdCA9IHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiICYmIGV4cG9ydHMgIT09IG51bGwgPyBleHBvcnRzIDogdGhpcztcblxuICByb290LkxldGhhcmd5ID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIExldGhhcmd5KHN0YWJpbGl0eSwgc2Vuc2l0aXZpdHksIHRvbGVyYW5jZSwgZGVsYXkpIHtcbiAgICAgIHRoaXMuc3RhYmlsaXR5ID0gc3RhYmlsaXR5ICE9IG51bGwgPyBNYXRoLmFicyhzdGFiaWxpdHkpIDogODtcbiAgICAgIHRoaXMuc2Vuc2l0aXZpdHkgPSBzZW5zaXRpdml0eSAhPSBudWxsID8gMSArIE1hdGguYWJzKHNlbnNpdGl2aXR5KSA6IDEwMDtcbiAgICAgIHRoaXMudG9sZXJhbmNlID0gdG9sZXJhbmNlICE9IG51bGwgPyAxICsgTWF0aC5hYnModG9sZXJhbmNlKSA6IDEuMTtcbiAgICAgIHRoaXMuZGVsYXkgPSBkZWxheSAhPSBudWxsID8gZGVsYXkgOiAxNTA7XG4gICAgICB0aGlzLmxhc3RVcERlbHRhcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgbGFzdERlbHRhO1xuICAgICAgZSA9IGUub3JpZ2luYWxFdmVudCB8fCBlO1xuICAgICAgaWYgKGUud2hlZWxEZWx0YSAhPSBudWxsKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUud2hlZWxEZWx0YTtcbiAgICAgIH0gZWxzZSBpZiAoZS5kZWx0YVkgIT0gbnVsbCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLmRlbHRhWSAqIC00MDtcbiAgICAgIH0gZWxzZSBpZiAoKGUuZGV0YWlsICE9IG51bGwpIHx8IGUuZGV0YWlsID09PSAwKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUuZGV0YWlsICogLTQwO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAucHVzaChEYXRlLm5vdygpKTtcbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wLnNoaWZ0KCk7XG4gICAgICBpZiAobGFzdERlbHRhID4gMCkge1xuICAgICAgICB0aGlzLmxhc3RVcERlbHRhcy5wdXNoKGxhc3REZWx0YSk7XG4gICAgICAgIHRoaXMubGFzdFVwRGVsdGFzLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5lcnRpYSgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGFzdERvd25EZWx0YXMucHVzaChsYXN0RGVsdGEpO1xuICAgICAgICB0aGlzLmxhc3REb3duRGVsdGFzLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5lcnRpYSgtMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5pc0luZXJ0aWEgPSBmdW5jdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBsYXN0RGVsdGFzLCBsYXN0RGVsdGFzTmV3LCBsYXN0RGVsdGFzT2xkLCBuZXdBdmVyYWdlLCBuZXdTdW0sIG9sZEF2ZXJhZ2UsIG9sZFN1bTtcbiAgICAgIGxhc3REZWx0YXMgPSBkaXJlY3Rpb24gPT09IC0xID8gdGhpcy5sYXN0RG93bkRlbHRhcyA6IHRoaXMubGFzdFVwRGVsdGFzO1xuICAgICAgaWYgKGxhc3REZWx0YXNbMF0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRlbHRhc1RpbWVzdGFtcFsodGhpcy5zdGFiaWxpdHkgKiAyKSAtIDJdICsgdGhpcy5kZWxheSA+IERhdGUubm93KCkgJiYgbGFzdERlbHRhc1swXSA9PT0gbGFzdERlbHRhc1sodGhpcy5zdGFiaWxpdHkgKiAyKSAtIDFdKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxhc3REZWx0YXNPbGQgPSBsYXN0RGVsdGFzLnNsaWNlKDAsIHRoaXMuc3RhYmlsaXR5KTtcbiAgICAgIGxhc3REZWx0YXNOZXcgPSBsYXN0RGVsdGFzLnNsaWNlKHRoaXMuc3RhYmlsaXR5LCB0aGlzLnN0YWJpbGl0eSAqIDIpO1xuICAgICAgb2xkU3VtID0gbGFzdERlbHRhc09sZC5yZWR1Y2UoZnVuY3Rpb24odCwgcykge1xuICAgICAgICByZXR1cm4gdCArIHM7XG4gICAgICB9KTtcbiAgICAgIG5ld1N1bSA9IGxhc3REZWx0YXNOZXcucmVkdWNlKGZ1bmN0aW9uKHQsIHMpIHtcbiAgICAgICAgcmV0dXJuIHQgKyBzO1xuICAgICAgfSk7XG4gICAgICBvbGRBdmVyYWdlID0gb2xkU3VtIC8gbGFzdERlbHRhc09sZC5sZW5ndGg7XG4gICAgICBuZXdBdmVyYWdlID0gbmV3U3VtIC8gbGFzdERlbHRhc05ldy5sZW5ndGg7XG4gICAgICBpZiAoTWF0aC5hYnMob2xkQXZlcmFnZSkgPCBNYXRoLmFicyhuZXdBdmVyYWdlICogdGhpcy50b2xlcmFuY2UpICYmICh0aGlzLnNlbnNpdGl2aXR5IDwgTWF0aC5hYnMobmV3QXZlcmFnZSkpKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5zaG93TGFzdFVwRGVsdGFzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0VXBEZWx0YXM7XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5zaG93TGFzdERvd25EZWx0YXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhc3REb3duRGVsdGFzO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGV0aGFyZ3k7XG5cbiAgfSkoKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJmdW5jdGlvbiBFICgpIHtcbiAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59XG5cbkUucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzb3VyY2UpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCd0aW55LWVtaXR0ZXInKTtcbnZhciBMZXRoYXJneSA9IHJlcXVpcmUoJ2xldGhhcmd5JykuTGV0aGFyZ3k7XG52YXIgc3VwcG9ydCA9IHJlcXVpcmUoJy4vc3VwcG9ydCcpO1xudmFyIGNsb25lID0gcmVxdWlyZSgnLi9jbG9uZScpO1xudmFyIGJpbmRBbGwgPSByZXF1aXJlKCdiaW5kYWxsLXN0YW5kYWxvbmUnKTtcbnZhciBFVlRfSUQgPSAndmlydHVhbHNjcm9sbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbFNjcm9sbDtcblxudmFyIGtleUNvZGVzID0ge1xuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG4gICAgU1BBQ0U6IDMyXG59O1xuXG5mdW5jdGlvbiBWaXJ0dWFsU2Nyb2xsKG9wdGlvbnMpIHtcbiAgICBiaW5kQWxsKHRoaXMsICdfb25XaGVlbCcsICdfb25Nb3VzZVdoZWVsJywgJ19vblRvdWNoU3RhcnQnLCAnX29uVG91Y2hNb3ZlJywgJ19vbktleURvd24nKTtcblxuICAgIHRoaXMuZWwgPSB3aW5kb3c7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbCkge1xuICAgICAgICB0aGlzLmVsID0gb3B0aW9ucy5lbDtcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMuZWw7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG9iamVjdEFzc2lnbih7XG4gICAgICAgIG1vdXNlTXVsdGlwbGllcjogMSxcbiAgICAgICAgdG91Y2hNdWx0aXBsaWVyOiAyLFxuICAgICAgICBmaXJlZm94TXVsdGlwbGllcjogMTUsXG4gICAgICAgIGtleVN0ZXA6IDEyMCxcbiAgICAgICAgcHJldmVudFRvdWNoOiBmYWxzZSxcbiAgICAgICAgdW5wcmV2ZW50VG91Y2hDbGFzczogJ3ZzLXRvdWNobW92ZS1hbGxvd2VkJyxcbiAgICAgICAgbGltaXRJbmVydGlhOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEluZXJ0aWEpIHRoaXMuX2xldGhhcmd5ID0gbmV3IExldGhhcmd5KCk7XG5cbiAgICB0aGlzLl9lbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcbiAgICB0aGlzLl9ldmVudCA9IHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgeDogMCxcbiAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICBkZWx0YVk6IDBcbiAgICB9O1xuICAgIHRoaXMudG91Y2hTdGFydFggPSBudWxsO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSBudWxsO1xuICAgIHRoaXMuYm9keVRvdWNoQWN0aW9uID0gbnVsbDtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMucGFzc2l2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJPcHRpb25zID0ge3Bhc3NpdmU6IHRoaXMub3B0aW9ucy5wYXNzaXZlfTtcbiAgICB9XG59XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9ub3RpZnkgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuICAgIGV2dC54ICs9IGV2dC5kZWx0YVg7XG4gICAgZXZ0LnkgKz0gZXZ0LmRlbHRhWTtcblxuICAgdGhpcy5fZW1pdHRlci5lbWl0KEVWVF9JRCwge1xuICAgICAgICB4OiBldnQueCxcbiAgICAgICAgeTogZXZ0LnksXG4gICAgICAgIGRlbHRhWDogZXZ0LmRlbHRhWCxcbiAgICAgICAgZGVsdGFZOiBldnQuZGVsdGFZLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBlXG4gICB9KTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbldoZWVsID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICh0aGlzLl9sZXRoYXJneSAmJiB0aGlzLl9sZXRoYXJneS5jaGVjayhlKSA9PT0gZmFsc2UpIHJldHVybjtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICAvLyBJbiBDaHJvbWUgYW5kIGluIEZpcmVmb3ggKGF0IGxlYXN0IHRoZSBuZXcgb25lKVxuICAgIGV2dC5kZWx0YVggPSBlLndoZWVsRGVsdGFYIHx8IGUuZGVsdGFYICogLTE7XG4gICAgZXZ0LmRlbHRhWSA9IGUud2hlZWxEZWx0YVkgfHwgZS5kZWx0YVkgKiAtMTtcblxuICAgIC8vIGZvciBvdXIgcHVycG9zZSBkZWx0YW1vZGUgPSAxIG1lYW5zIHVzZXIgaXMgb24gYSB3aGVlbCBtb3VzZSwgbm90IHRvdWNoIHBhZFxuICAgIC8vIHJlYWwgbWVhbmluZzogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1doZWVsRXZlbnQjRGVsdGFfbW9kZXNcbiAgICBpZihzdXBwb3J0LmlzRmlyZWZveCAmJiBlLmRlbHRhTW9kZSA9PSAxKSB7XG4gICAgICAgIGV2dC5kZWx0YVggKj0gb3B0aW9ucy5maXJlZm94TXVsdGlwbGllcjtcbiAgICAgICAgZXZ0LmRlbHRhWSAqPSBvcHRpb25zLmZpcmVmb3hNdWx0aXBsaWVyO1xuICAgIH1cblxuICAgIGV2dC5kZWx0YVggKj0gb3B0aW9ucy5tb3VzZU11bHRpcGxpZXI7XG4gICAgZXZ0LmRlbHRhWSAqPSBvcHRpb25zLm1vdXNlTXVsdGlwbGllcjtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbk1vdXNlV2hlZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEluZXJ0aWEgJiYgdGhpcy5fbGV0aGFyZ3kuY2hlY2soZSkgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICAvLyBJbiBTYWZhcmksIElFIGFuZCBpbiBDaHJvbWUgaWYgJ3doZWVsJyBpc24ndCBkZWZpbmVkXG4gICAgZXZ0LmRlbHRhWCA9IChlLndoZWVsRGVsdGFYKSA/IGUud2hlZWxEZWx0YVggOiAwO1xuICAgIGV2dC5kZWx0YVkgPSAoZS53aGVlbERlbHRhWSkgPyBlLndoZWVsRGVsdGFZIDogZS53aGVlbERlbHRhO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uVG91Y2hTdGFydCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdCA9IChlLnRhcmdldFRvdWNoZXMpID8gZS50YXJnZXRUb3VjaGVzWzBdIDogZTtcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gdC5wYWdlWDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gdC5wYWdlWTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZihvcHRpb25zLnByZXZlbnRUb3VjaFxuICAgICAgICAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKG9wdGlvbnMudW5wcmV2ZW50VG91Y2hDbGFzcykpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgIHZhciB0ID0gKGUudGFyZ2V0VG91Y2hlcykgPyBlLnRhcmdldFRvdWNoZXNbMF0gOiBlO1xuXG4gICAgZXZ0LmRlbHRhWCA9ICh0LnBhZ2VYIC0gdGhpcy50b3VjaFN0YXJ0WCkgKiBvcHRpb25zLnRvdWNoTXVsdGlwbGllcjtcbiAgICBldnQuZGVsdGFZID0gKHQucGFnZVkgLSB0aGlzLnRvdWNoU3RhcnRZKSAqIG9wdGlvbnMudG91Y2hNdWx0aXBsaWVyO1xuXG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IHQucGFnZVg7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IHQucGFnZVk7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25LZXlEb3duID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQuZGVsdGFYID0gZXZ0LmRlbHRhWSA9IDA7XG4gICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDQwXG5cbiAgICBzd2l0Y2goZS5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuTEVGVDpcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5VUDpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSB0aGlzLm9wdGlvbnMua2V5U3RlcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Uga2V5Q29kZXMuUklHSFQ6XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuRE9XTjpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSAtIHRoaXMub3B0aW9ucy5rZXlTdGVwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuU1BBQ0UgJiYgZS5zaGlmdEtleTpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5TUEFDRTpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSAtIHdpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9iaW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc3VwcG9ydC5oYXNXaGVlbEV2ZW50KSB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5fb25XaGVlbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgIGlmKHN1cHBvcnQuaGFzTW91c2VXaGVlbEV2ZW50KSB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLl9vbk1vdXNlV2hlZWwsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcblxuICAgIGlmKHN1cHBvcnQuaGFzVG91Y2gpIHtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc1BvaW50ZXIgJiYgc3VwcG9ydC5oYXNUb3VjaFdpbikge1xuICAgICAgICB0aGlzLmJvZHlUb3VjaEFjdGlvbiA9IGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlckRvd24nLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRydWUpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlck1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNLZXlEb3duKSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl91bmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzdXBwb3J0Lmhhc1doZWVsRXZlbnQpIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9vbldoZWVsKTtcbiAgICBpZihzdXBwb3J0Lmhhc01vdXNlV2hlZWxFdmVudCkgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5fb25Nb3VzZVdoZWVsKTtcblxuICAgIGlmKHN1cHBvcnQuaGFzVG91Y2gpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNQb2ludGVyICYmIHN1cHBvcnQuaGFzVG91Y2hXaW4pIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uID0gdGhpcy5ib2R5VG91Y2hBY3Rpb247XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyRG93bicsIHRoaXMuX29uVG91Y2hTdGFydCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyTW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc0tleURvd24pIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihjYiwgY3R4KSB7XG4gIHRoaXMuX2VtaXR0ZXIub24oRVZUX0lELCBjYiwgY3R4KTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZW1pdHRlci5lO1xuICBpZiAoZXZlbnRzICYmIGV2ZW50c1tFVlRfSURdICYmIGV2ZW50c1tFVlRfSURdLmxlbmd0aCA9PT0gMSkgdGhpcy5fYmluZCgpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oY2IsIGN0eCkge1xuICB0aGlzLl9lbWl0dGVyLm9mZihFVlRfSUQsIGNiLCBjdHgpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9lbWl0dGVyLmU7XG4gIGlmICghZXZlbnRzW0VWVF9JRF0gfHwgZXZlbnRzW0VWVF9JRF0ubGVuZ3RoIDw9IDApIHRoaXMuX3VuYmluZCgpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LnggPSAwO1xuICAgIGV2dC55ID0gMDtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9mZigpO1xuICAgIHRoaXMuX3VuYmluZCgpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gZ2V0U3VwcG9ydCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoYXNXaGVlbEV2ZW50OiAnb253aGVlbCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc01vdXNlV2hlZWxFdmVudDogJ29ubW91c2V3aGVlbCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc1RvdWNoOiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudCxcbiAgICAgICAgaGFzVG91Y2hXaW46IG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzICYmIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMSxcbiAgICAgICAgaGFzUG9pbnRlcjogISF3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQsXG4gICAgICAgIGhhc0tleURvd246ICdvbmtleWRvd24nIGluIGRvY3VtZW50LFxuICAgICAgICBpc0ZpcmVmb3g6IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID4gLTFcbiAgICB9O1xufSkoKTtcbiJdfQ==
