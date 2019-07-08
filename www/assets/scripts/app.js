(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _main = _interopRequireDefault(require("./scroll/main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function () {
  var scroll = new _main["default"]({
    el: document.querySelector('#js-scroll'),
    smooth: false,
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

      // scroll to elements
      this.scrollToElements = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
      this.prepareScrollTo = this.prepareScrollTo.bind(this);
      this.scrollToElements.forEach(function (el) {
        el.addEventListener('click', _this.prepareScrollTo, false);
      }); // scroll to event

      this.scrollTo = this.scrollTo.bind(this);
      window.addEventListener('scrollto', this.scrollTo, false);
      setTimeout(function () {// this.scrollTo(document.querySelectorAll('#introduction')[0]);
        // this.scrollTo('#introduction');
        // this.scrollTo('bottom');
        // this.scrollTo('top');
      }, 1000);
    }
  }, {
    key: "prepareScrollTo",
    value: function prepareScrollTo(event) {
      event.preventDefault();
      this.scrollTo(event.currentTarget.getAttribute('data-href') ? event.currentTarget.getAttribute('data-href') : event.currentTarget.getAttribute('href'), event.currentTarget.getAttribute('data-offset'));
    } // addElements(){}

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
      this.scrollToElements.forEach(function (el) {
        el.removeEventListener('click', _this5.prepareScrollTo, false);
      });
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
          target = document.querySelectorAll('html')[0];
        } else if (targetOption === 'bottom') {
          offset = document.offsetHeight;
          document.querySelectorAll('html')[0].scrollIntoView({
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

var _html = require("../utils/html");

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
      var _this3 = this;

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
          return _this3.sections.find(function (section) {
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
      var _this4 = this;

      if (this.isScrolling || this.isDraggingScrollbar) {
        if (!this.hasScrollTicking) {
          requestAnimationFrame(function () {
            return _this4.checkScroll();
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
        this.transformElements(); // scrollbar translation

        var scrollBarTranslation = this.instance.scroll.y / this.instance.limit * this.scrollBarLimit;
        this.transform(this.scrollbar, 0, scrollBarTranslation);
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
    } // Scrollbar functions

  }, {
    key: "initScrollBar",
    value: function initScrollBar() {
      var _this5 = this;

      this.scrollbarWrapper = document.createElement('span');
      this.scrollbar = document.createElement('span');
      this.scrollbarWrapper.classList.add("".concat(this.scrollbarClass, "_wrapper"));
      this.scrollbar.classList.add("".concat(this.scrollbarClass));
      this.scrollbarWrapper.append(this.scrollbar);
      document.body.append(this.scrollbarWrapper);
      this.scrollbar.style.height = "".concat(window.innerHeight * window.innerHeight / this.instance.limit, "px");
      this.scrollBarLimit = window.innerHeight - this.scrollbar.getBoundingClientRect().height;
      this.scrollbar.addEventListener('mousedown', function (e) {
        return _this5.getScrollBar(e);
      });
      window.addEventListener('mouseup', function (e) {
        return _this5.releaseScrollBar(e);
      });
      window.addEventListener('mousemove', function (e) {
        return _this5.moveScrollBar(e);
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
      var _this6 = this;

      this.scrollbar.removeEventListener('mousedown', function (e) {
        return _this6.getScrollBar(e);
      });
      window.removeEventListener('mouseup', function (e) {
        return _this6.releaseScrollBar(e);
      });
      window.removeEventListener('mousemove', function (e) {
        return _this6.moveScrollBar(e);
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
      var _this7 = this;

      if (!this.isTicking && this.isDraggingScrollbar) {
        requestAnimationFrame(function () {
          console.log(window.innerHeight);
          var y = e.clientY * 100 / window.innerHeight * _this7.instance.limit / 100;

          if (y > 0 && y < _this7.instance.limit) {
            _this7.instance.delta.y = y;
          }
        });
        this.isTicking = true;
      }

      this.isTicking = false;
    } // Manage elements and sections

  }, {
    key: "addElements",
    value: function addElements() {
      var _this8 = this;

      this.els = [];
      this.parallaxElements = [];
      this.sections.forEach(function (section, y) {
        var els = _this8.sections[y].el.querySelectorAll("[data-".concat(_this8.name, "]"));

        els.forEach(function (el, i) {
          var cl = el.dataset[_this8.name + 'Class'] || _this8["class"];
          var top;
          var offset = parseInt(el.dataset[_this8.name + 'Offset']) || parseInt(_this8.offset);
          var repeat = el.dataset[_this8.name + 'Repeat'];
          var call = el.dataset[_this8.name + 'Call'];
          var position = el.dataset[_this8.name + 'Position'];
          var delay = el.dataset[_this8.name + 'Delay'];
          var direction = el.dataset[_this8.name + 'Direction'];
          var sticky = typeof el.dataset[_this8.name + 'Sticky'] === 'string';
          var speed = el.dataset[_this8.name + 'Speed'] ? parseFloat(el.dataset[_this8.name + 'Speed']) / 10 : false;
          var target = el.dataset[_this8.name + 'Target'];
          var targetEl;

          if (target !== undefined) {
            targetEl = document.querySelector("".concat(target));
          } else {
            targetEl = el;
          }

          if (!_this8.sections[y].inView) {
            top = targetEl.getBoundingClientRect().top - (0, _transform.getTranslate)(_this8.sections[y].el).y - (0, _transform.getTranslate)(targetEl).y;
          } else {
            top = targetEl.getBoundingClientRect().top + _this8.instance.scroll.y - (0, _transform.getTranslate)(targetEl).y;
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
            repeat = _this8.repeat;
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

          _this8.els.push(mappedEl);

          if (speed !== false || sticky) {
            _this8.parallaxElements.push(mappedEl);
          }
        });
      });
    }
  }, {
    key: "addSections",
    value: function addSections() {
      var _this9 = this;

      this.sections = [];
      var sections = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
      sections.forEach(function (section, i) {
        var offset = section.getBoundingClientRect().top - window.innerHeight * 1.5 - (0, _transform.getTranslate)(section).y;
        var limit = offset + section.getBoundingClientRect().height + window.innerHeight * 2;
        var persistent = typeof section.dataset[_this9.name + 'Persistent'] === 'string';
        var inView = false;

        if (_this9.instance.scroll.y >= offset && _this9.instance.scroll.y <= limit) {
          inView = true;
        }

        var mappedSection = {
          el: section,
          offset: offset,
          limit: limit,
          inView: inView,
          persistent: persistent
        };
        _this9.sections[i] = mappedSection;
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
      var _this10 = this;

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
              transformDistance = _this10.instance.scroll.y * -current.speed;
              break;

            case 'bottom':
              transformDistance = (_this10.instance.limit - scrollBottom + _this10.windowHeight) * current.speed;
              break;

            default:
              transformDistance = (scrollMiddle - current.middle) * -current.speed;
              break;
          }
        }

        if (current.sticky) {
          if (current.inView) {
            transformDistance = _this10.instance.scroll.y - current.top + window.innerHeight;
          } else {
            if (_this10.instance.scroll.y < current.top) {
              transformDistance = 0;
            }

            if (_this10.instance.scroll.y > current.bottom) {
              transformDistance = current.bottom - current.offsetHeight;
            }
          }
        }

        if (transformDistance !== false) {
          if (current.direction === 'horizontal') {
            _this10.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
          } else {
            _this10.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
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

},{"../utils/html":7,"../utils/maths":8,"../utils/transform":9,"./Core":2,"virtual-scroll":15}],5:[function(require,module,exports){
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

      if (this.smooth === true && !this.isMobile) {
        this.scroll = new _Smooth["default"](this.options);
      } else {
        this.scroll = new _Native["default"](this.options);
      }

      this.scroll.init();
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
  offset: 0,
  repeat: false,
  smooth: false,
  smoothMobile: false,
  direction: 'vertical',
  inertia: 1,
  "class": 'is-inview',
  scrollbarClass: 'o-scrollbar',
  scrollingClass: 'is-scrolling',
  draggingClass: 'is-dragging',
  smoothClass: 'has-smoothscroll'
};
exports.defaults = defaults;

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lerp = lerp;

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

},{}],9:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9hcHAuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvQ29yZS5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC9OYXRpdmUuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvU21vb3RoLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL21haW4uanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvb3B0aW9ucy5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL2h0bWwuanMiLCJhc3NldHMvc2NyaXB0cy91dGlscy9tYXRocy5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL3RyYW5zZm9ybS5qcyIsIm5vZGVfbW9kdWxlcy9iaW5kYWxsLXN0YW5kYWxvbmUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbGV0aGFyZ3kvbGV0aGFyZ3kuanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90aW55LWVtaXR0ZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvc3JjL2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtc2Nyb2xsL3NyYy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLXNjcm9sbC9zcmMvc3VwcG9ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQSxDQUFDLFlBQVc7QUFFUixNQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFKLENBQXFCO0FBQ2hDLElBQUEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLFlBQXZCLENBRDRCO0FBRWhDLElBQUEsTUFBTSxFQUFFLEtBRndCO0FBR2hDLElBQUEsWUFBWSxFQUFFLEtBSGtCO0FBSWhDLElBQUEsZUFBZSxFQUFFLENBQUMsQ0FBQyxRQUFELENBSmM7QUFLaEMsSUFBQSxPQUFPLEVBQUUs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IGxvY29tb3RpdmVTY3JvbGwgZnJvbSAnLi9zY3JvbGwvbWFpbic7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IHNjcm9sbCA9IG5ldyBsb2NvbW90aXZlU2Nyb2xsKHtcbiAgICAgICAgZWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1zY3JvbGwnKSxcbiAgICAgICAgc21vb3RoOiBmYWxzZSxcbiAgICAgICAgc21vb3RoTW9iaWxlOiBmYWxzZSxcbiAgICAgICAgbW9iaWxlQ29udGFpbmVyOiAkKGRvY3VtZW50KSxcbiAgICAgICAgaW5lcnRpYTogMSxcbiAgICAgICAgc2Nyb2xsQmFyQ2xhc3NOYW1lOiAnby1zY3JvbGxiYXInLFxuICAgICAgICBpc1Njcm9sbGluZ0NsYXNzTmFtZTogJ2lzLXNjcm9sbGluZycsXG4gICAgICAgIGlzRHJhZ2dpbmdDbGFzc05hbWU6ICdpcy1kcmFnZ2luZycsXG4gICAgICAgIG9uU2Nyb2xsOiAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5zY3JvbGwueSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoKTtcbiIsImltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi9vcHRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLm5hbWVzcGFjZSA9ICdsb2NvbW90aXZlJztcbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMud2luZG93TWlkZGxlID0gdGhpcy53aW5kb3dIZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmVscyA9IFtdO1xuXG5cbiAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGwgPSB0aGlzLmNoZWNrU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tSZXNpemUgPSB0aGlzLmNoZWNrUmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IHtcbiAgICAgICAgICAgIHNjcm9sbDoge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG51bGwsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNoZWNrUmVzaXplLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcblxuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBjaGVja1Njcm9sbCgpe31cbiAgICBjaGVja1Jlc2l6ZSgpe31cblxuICAgIGluaXRFdmVudHMoKSB7XG5cbiAgICAgICAgLy8gc2Nyb2xsIHRvIGVsZW1lbnRzXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9FbGVtZW50cyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtJHt0aGlzLm5hbWV9LXRvXWApO1xuXG4gICAgICAgIHRoaXMucHJlcGFyZVNjcm9sbFRvID0gdGhpcy5wcmVwYXJlU2Nyb2xsVG8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0VsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJlcGFyZVNjcm9sbFRvLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHNjcm9sbCB0byBldmVudFxuICAgICAgICB0aGlzLnNjcm9sbFRvID0gdGhpcy5zY3JvbGxUby5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsdG8nLCB0aGlzLnNjcm9sbFRvLCBmYWxzZSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLnNjcm9sbFRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNpbnRyb2R1Y3Rpb24nKVswXSk7XG4gICAgICAgICAgICAvLyB0aGlzLnNjcm9sbFRvKCcjaW50cm9kdWN0aW9uJyk7XG4gICAgICAgICAgICAvLyB0aGlzLnNjcm9sbFRvKCdib3R0b20nKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2Nyb2xsVG8oJ3RvcCcpO1xuICAgICAgICB9LDEwMDApXG5cbiAgICB9XG5cbiAgICBwcmVwYXJlU2Nyb2xsVG8oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnNjcm9sbFRvKFxuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicpID8gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicpIDogZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSxcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9mZnNldCcpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gYWRkRWxlbWVudHMoKXt9XG5cbiAgICBkZXRlY3RFbGVtZW50cygpIHtcblxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55O1xuICAgICAgICBjb25zdCBzY3JvbGxCb3R0b20gPSBzY3JvbGxUb3AgKyB0aGlzLndpbmRvd0hlaWdodDtcblxuICAgICAgICB0aGlzLmVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlbC5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHNjcm9sbEJvdHRvbSA+PSBlbC50b3ApICYmIChzY3JvbGxUb3AgPCBlbC5ib3R0b20pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5WaWV3KGVsLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihlbC5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHNjcm9sbEJvdHRvbSA8IGVsLnRvcCkgfHwgKHNjcm9sbFRvcCA+IGVsLmJvdHRvbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRPdXRPZlZpZXcoZWwsIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0SW5WaWV3KGN1cnJlbnQsIGkpIHtcblxuICAgICAgICB0aGlzLmVsc1tpXS5pblZpZXcgPSB0cnVlO1xuICAgICAgICBjdXJyZW50LmVsLmNsYXNzTGlzdC5hZGQoY3VycmVudC5jbGFzcyk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnQuY2FsbCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsVmFsdWUgPSBjdXJyZW50LmNhbGwuc3BsaXQoJywnKS5tYXAoaXRlbSA9PiBpdGVtLnRyaW0oKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jYWxsVmFsdWUubGVuZ3RoID09IDEpIHRoaXMuY2FsbFZhbHVlID0gdGhpcy5jYWxsVmFsdWVbMF07XG5cbiAgICAgICAgICAgIGNvbnN0IGNhbGxFdmVudCA9IG5ldyBFdmVudCh0aGlzLm5hbWVzcGFjZSArICdjYWxsJyk7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChjYWxsRXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjdXJyZW50LnJlcGVhdCAmJiBjdXJyZW50LnNwZWVkID09PSBmYWxzZSAmJiAhY3VycmVudC5zdGlja3kgKXtcbiAgICAgICAgICAgIHRoaXMuZWxzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE91dE9mVmlldyhjdXJyZW50LCBpKSB7XG5cbiAgICAgICAgaWYoY3VycmVudC5yZXBlYXQgfHwgY3VycmVudC5zcGVlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVsc1tpXS5pblZpZXcgPSBmYWxzZTtcbiAgICAgICAgICAgIGN1cnJlbnQuZWwuY2xhc3NMaXN0LnJlbW92ZShjdXJyZW50LmNsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgdXBkYXRlRWxlbWVudHMoKSB7XG4gICAgICAgIHRoaXMuZWxzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSBlbC5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55O1xuICAgICAgICAgICAgY29uc3QgYm90dG9tID0gdG9wICsgZWwuZWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICB0aGlzLmVsc1tpXS50b3AgPSB0b3AgKyBlbC5vZmZzZXQ7XG4gICAgICAgICAgICB0aGlzLmVsc1tpXS5ib3R0b20gPSBib3R0b207XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgb24oZXZlbnQsIGZ1bmMpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lc3BhY2UgKyBldmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NhbGwnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuYyh0aGlzLmNhbGxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNoZWNrUmVzaXplLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUb0VsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJlcGFyZVNjcm9sbFRvLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IENvcmUgZnJvbSAnLi9Db3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb3JlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcblxuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hlY2tTY3JvbGwsIGZhbHNlKTtcblxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcblxuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgfVxuXG4gICAgY2hlY2tTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzU2Nyb2xsVGlja2luZykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tSZXNpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgICBpZighdGhpcy5oYXNTY3JvbGxUaWNraW5nKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50cygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgY29uc3QgZWxzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS0nK3RoaXMubmFtZSsnXScpO1xuXG4gICAgICAgIGVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNsID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnQ2xhc3MnXSB8fCB0aGlzLmNsYXNzO1xuICAgICAgICAgICAgbGV0IHRvcCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgICAgICBsZXQgYm90dG9tID0gdG9wICsgZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHBhcnNlSW50KGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ09mZnNldCddKSB8fCBwYXJzZUludCh0aGlzLm9mZnNldCk7XG4gICAgICAgICAgICBsZXQgcmVwZWF0ID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnUmVwZWF0J107XG4gICAgICAgICAgICBsZXQgY2FsbCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0NhbGwnXTtcblxuICAgICAgICAgICAgaWYocmVwZWF0ID09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVwZWF0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRoaXMucmVwZWF0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVsc1tpXSA9IHtcbiAgICAgICAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgICAgICAgY2xhc3M6IGNsLFxuICAgICAgICAgICAgICAgIHRvcDogdG9wICsgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgICAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgICAgICAgICAgIGluVmlldzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2FsbDogY2FsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIGRlc2lyZWQgdGFyZ2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzY3JvbGxUbyh0YXJnZXRPcHRpb24sIG9mZnNldE9wdGlvbikge1xuICAgICAgICBsZXQgdGFyZ2V0O1xuICAgICAgICBsZXQgb2Zmc2V0ID0gb2Zmc2V0T3B0aW9uID8gcGFyc2VJbnQob2Zmc2V0T3B0aW9uKSA6IDA7XG5cbiAgICAgICAgaWYodHlwZW9mIHRhcmdldE9wdGlvbiA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgICAgICAgaWYodGFyZ2V0T3B0aW9uID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2h0bWwnKVswXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZih0YXJnZXRPcHRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gZG9jdW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2h0bWwnKVswXS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6IFwiZW5kXCIsIGlubGluZTogXCJuZWFyZXN0XCJ9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldE9wdGlvbilbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmKCF0YXJnZXRPcHRpb24udGFyZ2V0KSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRPcHRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICBvZmZzZXQgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgb2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnfSk7XG4gICAgfVxuXG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG5cbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hlY2tTY3JvbGwsIGZhbHNlKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB2aXJ0dWFsU2Nyb2xsIGZyb20gJ3ZpcnR1YWwtc2Nyb2xsJztcbmltcG9ydCBDb3JlIGZyb20gJy4vQ29yZSc7XG5pbXBvcnQgeyBsZXJwIH0gZnJvbSAnLi4vdXRpbHMvbWF0aHMnXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGUgfSBmcm9tICcuLi91dGlscy90cmFuc2Zvcm0nXG5pbXBvcnQgeyBnZXRQYXJlbnRzLCBxdWVyeUNsb3Nlc3RQYXJlbnQgfSBmcm9tICcuLi91dGlscy9odG1sJztcblxuY29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb3JlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbmVydGlhID0gdGhpcy5pbmVydGlhICogMC4xO1xuICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVGlja2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW107XG5cbiAgICAgICAgdGhpcy5pbmVydGlhUmF0aW8gPSAxO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLnNtb290aENsYXNzKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlID0ge1xuICAgICAgICAgICAgdnM6IG5ldyB2aXJ0dWFsU2Nyb2xsKHtcbiAgICAgICAgICAgICAgICBtb3VzZU11bHRpcGxpZXI6IChuYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZignV2luJykgPiAtMSkgPyAxIDogMC40LFxuICAgICAgICAgICAgICAgIHRvdWNoTXVsdGlwbGllcjogNCxcbiAgICAgICAgICAgICAgICBmaXJlZm94TXVsdGlwbGllcjogMzBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZGVsdGE6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi50aGlzLmluc3RhbmNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlLnZzLm9uKChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNUaWNraW5nICYmICF0aGlzLmlzRHJhZ2dpbmdTY3JvbGxiYXIpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNTY3JvbGxpbmcpIHRoaXMuc3RhcnRTY3JvbGxpbmcoKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlbHRhKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTGltaXQoKTtcbiAgICAgICAgdGhpcy5pbml0U2Nyb2xsQmFyKCk7XG5cbiAgICAgICAgdGhpcy5hZGRTZWN0aW9ucygpO1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cyh0cnVlKTtcblxuICAgICAgICBzdXBlci5pbml0KCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gYSBkZXNpcmVkIHRhcmdldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9uc1xuICAgICAqICAgICAgQXZhaWxhYmxlIG9wdGlvbnMgOlxuICAgICAqICAgICAgICAgIHtub2RlfSB0YXJnZXQgLSBUaGUgRE9NIGVsZW1lbnQgd2Ugd2FudCB0byBzY3JvbGwgdG9cbiAgICAgKiAgICAgICAgICB7bm9kZX0gc291cmNlRWxlbSAtIEFuIGA8YT5gIGVsZW1lbnQgd2l0aCBhbiBocmVmIHRhcmdldGluZyB0aGUgYW5jaG9yIHdlIHdhbnQgdG8gc2Nyb2xsIHRvXG4gICAgICogICAgICAgICAge25vZGV9IG9mZnNldEVsZW0gLSBBIERPTSBlbGVtZW50IGZyb20gd2hpY2ggd2UgZ2V0IHRoZSBoZWlnaHQgdG8gc3Vic3RyYWN0IGZyb20gdGhlIG9mZnNldFxuICAgICAqICAgICAgICAgICAgICAoZXg6IHVzZSBvZmZzZXRFbGVtIHRvIHBhc3MgYSBtb2JpbGUgaGVhZGVyIHRoYXQgaXMgYWJvdmUgY29udGVudCwgdG8gbWFrZSBzdXJlIHRoZSBzY3JvbGxUbyB3aWxsIGJlIGFsaWduZWQgd2l0aCBpdClcbiAgICAgKiAgICAgICAgICB7aW50fSBvZmZzZXQgLSBBbiBhYnNvbHV0ZSB2ZXJ0aWNhbCBzY3JvbGwgdmFsdWUgdG8gcmVhY2gsIG9yIGFuIG9mZnNldCB0byBhcHBseSBvbiB0b3Agb2YgZ2l2ZW4gYHRhcmdldGAgb3IgYHNvdXJjZUVsZW1gJ3MgdGFyZ2V0XG4gICAgICogICAgICAgICAge2ludH0gZGVsYXkgLSBBbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIHN0YXJ0aW5nIHRvIHNjcm9sbFxuICAgICAqICAgICAgICAgIHtib29sZWFufSB0b1RvcCAtIFNldCB0byB0cnVlIHRvIHNjcm9sbCBhbGwgdGhlIHdheSB0byB0aGUgdG9wXG4gICAgICogICAgICAgICAge2Jvb2xlYW59IHRvQm90dG9tIC0gU2V0IHRvIHRydWUgdG8gc2Nyb2xsIGFsbCB0aGUgd2F5IHRvIHRoZSBib3R0b21cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNjcm9sbFRvKHRhcmdldE9wdGlvbiwgb2Zmc2V0T3B0aW9uKSB7XG4gICAgICAgIGxldCB0YXJnZXQ7XG4gICAgICAgIGxldCBvZmZzZXQgPSBvZmZzZXRPcHRpb24gPyBwYXJzZUludChvZmZzZXRPcHRpb24pIDogMDtcblxuICAgICAgICBpZih0eXBlb2YgdGFyZ2V0T3B0aW9uID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgICAgICBpZih0YXJnZXRPcHRpb24gPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZih0YXJnZXRPcHRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy5pbnN0YW5jZS5saW1pdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXRPcHRpb24pWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZighdGFyZ2V0T3B0aW9uLnRhcmdldCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0T3B0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgaGF2ZSBhIHRhcmdldCwgZ2V0IGl0J3MgY29vcmRpbmF0ZXNcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgLy8gR2V0IHRhcmdldCBvZmZzZXQgZnJvbSB0b3BcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEJDUiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gdGFyZ2V0QkNSLnRvcCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnlcblxuICAgICAgICAgICAgLy8gVHJ5IGFuZCBmaW5kIHRoZSB0YXJnZXQncyBwYXJlbnQgc2VjdGlvblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGFyZW50cyA9IGdldFBhcmVudHModGFyZ2V0KVxuICAgICAgICAgICAgY29uc3QgcGFyZW50U2VjdGlvbiA9IHRhcmdldFBhcmVudHMuZmluZChjYW5kaWRhdGUgPT4gdGhpcy5zZWN0aW9ucy5maW5kKHNlY3Rpb24gPT4gc2VjdGlvbi5lbGVtZW50ID09IGNhbmRpZGF0ZSkpXG4gICAgICAgICAgICBsZXQgcGFyZW50U2VjdGlvbk9mZnNldCA9IDBcbiAgICAgICAgICAgIGlmKHBhcmVudFNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRTZWN0aW9uT2Zmc2V0ID0gZ2V0VHJhbnNsYXRlKHBhcmVudFNlY3Rpb24pLnkgLy8gV2UgZ290IGEgcGFyZW50IHNlY3Rpb24sIHN0b3JlIGl0J3MgY3VycmVudCBvZmZzZXQgdG8gcmVtb3ZlIGl0IGxhdGVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaW5hbCB2YWx1ZSBvZiBzY3JvbGwgZGVzdGluYXRpb24gOiBvZmZzZXRUb3AgKyAob3B0aW9uYWwgb2Zmc2V0IGdpdmVuIGluIG9wdGlvbnMpIC0gKHBhcmVudCdzIHNlY3Rpb24gdHJhbnNsYXRlKVxuICAgICAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0VG9wICsgb2Zmc2V0IC0gcGFyZW50U2VjdGlvbk9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IE1hdGgubWluKG9mZnNldCwgdGhpcy5pbnN0YW5jZS5saW1pdCk7IC8vIEFjdHVhbCBzY3JvbGxUbyAodGhlIGxlcnAgd2lsbCBkbyB0aGUgYW5pbWF0aW9uIGl0c2VsZilcbiAgICAgICAgdGhpcy5pbmVydGlhUmF0aW8gPSBNYXRoLm1pbig0MDAwIC8gTWF0aC5hYnModGhpcy5pbnN0YW5jZS5kZWx0YS55IC0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSksMC44KTtcblxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc2Nyb2xsLiBJZiB3ZSB3ZXJlIGluIGlkbGUgc3RhdGU6IHdlJ3JlIG5vdCBhbnltb3JlXG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsKCk7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLmlzU2Nyb2xsaW5nQ2xhc3NOYW1lKTtcblxuICAgIH1cblxuICAgIHNldFNjcm9sbExpbWl0KCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmxpbWl0ID0gdGhpcy5lbC5vZmZzZXRIZWlnaHQgLSB0aGlzLndpbmRvd0hlaWdodDtcbiAgICB9XG5cbiAgICBzdGFydFNjcm9sbGluZygpIHtcbiAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGwoKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgIH1cblxuICAgIHN0b3BTY3JvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbmVydGlhUmF0aW8gPSAxO1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gTWF0aC5yb3VuZCh0aGlzLmluc3RhbmNlLnNjcm9sbC55KTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgIH1cblxuICAgIGNoZWNrU2Nyb2xsKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Njcm9sbGluZyB8fCB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxiYXIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNTY3JvbGxUaWNraW5nKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+wqB0aGlzLmNoZWNrU2Nyb2xsKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gKE1hdGguYWJzKHRoaXMuaW5zdGFuY2UuZGVsdGEueSAtIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpKTtcbiAgICAgICAgICAgIGlmICgoZGlzdGFuY2UgPCAwLjkgJiYgdGhpcy5pbnN0YW5jZS5kZWx0YS55ICE9IDApIHx8IChkaXN0YW5jZSA8IDAuNSAmJiB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPT0gMCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51cGRhdGVTY3JvbGwoKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc2VjdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNlY3Rpb25zW2ldLnBlcnNpc3RlbnQgfHwgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPiB0aGlzLnNlY3Rpb25zW2ldLm9mZnNldCAmJiB0aGlzLmluc3RhbmNlLnNjcm9sbC55IDwgdGhpcy5zZWN0aW9uc1tpXS5saW1pdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5zZWN0aW9uc1tpXS5lbCwwLC10aGlzLmluc3RhbmNlLnNjcm9sbC55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXS5lbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zW2ldLmluVmlldyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXS5lbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbnNbaV0uaW5WaWV3ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuc2VjdGlvbnNbaV0uZWwsIDAsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXREaXJlY3Rpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0U3BlZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNwZWVkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRldGVjdEVsZW1lbnRzKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKCk7XG5cbiAgICAgICAgICAgIC8vIHNjcm9sbGJhciB0cmFuc2xhdGlvblxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQmFyVHJhbnNsYXRpb24gPSAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSAvIHRoaXMuaW5zdGFuY2UubGltaXQpICogdGhpcy5zY3JvbGxCYXJMaW1pdDtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuc2Nyb2xsYmFyLDAsc2Nyb2xsQmFyVHJhbnNsYXRpb24pO1xuXG4gICAgICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrUmVzaXplKCkge1xuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG5cbiAgICAgICAgdGhpcy5zZXRTY3JvbGxMaW1pdCgpO1xuICAgICAgICB0aGlzLmFkZFNlY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5kZXRlY3RFbGVtZW50cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKHRydWUpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlRGVsdGEoZSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgLT0gZS5kZWx0YVk7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgPCAwKSB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSAwO1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55ID4gdGhpcy5pbnN0YW5jZS5saW1pdCkgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0gdGhpcy5pbnN0YW5jZS5saW1pdDtcbiAgICB9XG5cbiAgICB1cGRhdGVTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gbGVycCh0aGlzLmluc3RhbmNlLnNjcm9sbC55LCB0aGlzLmluc3RhbmNlLmRlbHRhLnksIHRoaXMuaW5lcnRpYSAqIHRoaXMuaW5lcnRpYVJhdGlvKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSBsZXJwKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnksIHRoaXMuaW5zdGFuY2UuZGVsdGEueSwgKHRoaXMuaW5lcnRpYSAqIDIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB0aGlzLmluc3RhbmNlLmRlbHRhLnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXREaXJlY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgPiB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55IDwgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ3VwJykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiA9ICd1cCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTcGVlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSAhPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5zcGVlZCA9ICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgLSB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSAvIChEYXRlLm5vdygpIC0gdGhpcy50aW1lc3RhbXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuc3BlZWQgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2Nyb2xsYmFyIGZ1bmN0aW9uc1xuICAgIGluaXRTY3JvbGxCYXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV3JhcHBlci5jbGFzc0xpc3QuYWRkKGAke3RoaXMuc2Nyb2xsYmFyQ2xhc3N9X3dyYXBwZXJgKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIuY2xhc3NMaXN0LmFkZChgJHt0aGlzLnNjcm9sbGJhckNsYXNzfWApO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV3JhcHBlci5hcHBlbmQodGhpcy5zY3JvbGxiYXIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLnNjcm9sbGJhcldyYXBwZXIpO1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5zdHlsZS5oZWlnaHQgPSBgJHsod2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmlubmVySGVpZ2h0KSAvIHRoaXMuaW5zdGFuY2UubGltaXR9cHhgO1xuICAgICAgICB0aGlzLnNjcm9sbEJhckxpbWl0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5zY3JvbGxiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsKGUpID0+IHRoaXMuZ2V0U2Nyb2xsQmFyKGUpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLChlKSA9PiB0aGlzLnJlbGVhc2VTY3JvbGxCYXIoZSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywoZSkgPT4gdGhpcy5tb3ZlU2Nyb2xsQmFyKGUpKTtcblxuICAgIH1cblxuICAgIHJlaW5pdFNjcm9sbEJhcigpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIuc3R5bGUuaGVpZ2h0ID0gYCR7KHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyB0aGlzLmluc3RhbmNlLmxpbWl0fXB4YDtcbiAgICAgICAgdGhpcy5zY3JvbGxCYXJMaW1pdCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuc2Nyb2xsYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9XG5cbiAgICBkZXN0cm95U2Nyb2xsQmFyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLChlKSA9PiB0aGlzLmdldFNjcm9sbEJhcihlKSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywoZSkgPT4gdGhpcy5yZWxlYXNlU2Nyb2xsQmFyKGUpKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsKGUpID0+IHRoaXMubW92ZVNjcm9sbEJhcihlKSk7XG4gICAgfVxuXG4gICAgZ2V0U2Nyb2xsQmFyKGUpIHtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsYmFyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaGVja1Njcm9sbCgpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zY3JvbGxpbmdDbGFzcyk7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLmRyYWdnaW5nQ2xhc3MpO1xuICAgIH1cblxuICAgIHJlbGVhc2VTY3JvbGxCYXIoZSkge1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxiYXIgPSBmYWxzZTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kcmFnZ2luZ0NsYXNzKTtcbiAgICB9XG5cbiAgICBtb3ZlU2Nyb2xsQmFyKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVGlja2luZyAmJiB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxiYXIpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmlubmVySGVpZ2h0KVxuICAgICAgICAgICAgICAgIGxldCB5ID0gKGUuY2xpZW50WSAqIDEwMCAvICh3aW5kb3cuaW5uZXJIZWlnaHQpKSAqIHRoaXMuaW5zdGFuY2UubGltaXQgLyAxMDA7XG5cbiAgICAgICAgICAgICAgICBpZih5ID4gMCAmJiB5IDwgdGhpcy5pbnN0YW5jZS5saW1pdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSB5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XG4gICAgfVxuXG5cbiAgICAvLyBNYW5hZ2UgZWxlbWVudHMgYW5kIHNlY3Rpb25zXG4gICAgYWRkRWxlbWVudHMoKSB7XG4gICAgICAgIHRoaXMuZWxzID0gW11cbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW11cblxuICAgICAgICB0aGlzLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIHkpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZWxzID0gdGhpcy5zZWN0aW9uc1t5XS5lbC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS0ke3RoaXMubmFtZX1dYCk7XG5cbiAgICAgICAgICAgIGVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjbCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0NsYXNzJ10gfHwgdGhpcy5jbGFzcztcbiAgICAgICAgICAgICAgICBsZXQgdG9wO1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBwYXJzZUludChlbC5kYXRhc2V0W3RoaXMubmFtZSArICdPZmZzZXQnXSkgfHwgcGFyc2VJbnQodGhpcy5vZmZzZXQpO1xuICAgICAgICAgICAgICAgIGxldCByZXBlYXQgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdSZXBlYXQnXTtcbiAgICAgICAgICAgICAgICBsZXQgY2FsbCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0NhbGwnXTtcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdQb3NpdGlvbiddO1xuICAgICAgICAgICAgICAgIGxldCBkZWxheSA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0RlbGF5J107XG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0RpcmVjdGlvbiddO1xuICAgICAgICAgICAgICAgIGxldCBzdGlja3kgPSB0eXBlb2YgZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnU3RpY2t5J10gPT09ICdzdHJpbmcnO1xuICAgICAgICAgICAgICAgIGxldCBzcGVlZCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ1NwZWVkJ10gPyBwYXJzZUZsb2F0KGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ1NwZWVkJ10pLzEwIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ1RhcmdldCddO1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRFbDtcblxuICAgICAgICAgICAgICAgIGlmKHRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHt0YXJnZXR9YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWwgPSBlbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZighdGhpcy5zZWN0aW9uc1t5XS5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gdGFyZ2V0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gZ2V0VHJhbnNsYXRlKHRoaXMuc2VjdGlvbnNbeV0uZWwpLnkgLSBnZXRUcmFuc2xhdGUodGFyZ2V0RWwpLnk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gdGFyZ2V0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSAtIGdldFRyYW5zbGF0ZSh0YXJnZXRFbCkueTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgYm90dG9tID0gdG9wICsgdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIGxldCBtaWRkbGUgPSAoKGJvdHRvbSAtIHRvcCkgLyAyKSArIHRvcDtcblxuICAgICAgICAgICAgICAgIGlmKHN0aWNreSkge1xuICAgICAgICAgICAgICAgICAgICB0b3AgKz0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0b3AgKyB0YXJnZXRFbC5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIG1pZGRsZSA9ICgoYm90dG9tIC0gdG9wKSAvIDIpICsgdG9wO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgaWYocmVwZWF0ID09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXBlYXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gdGhpcy5yZXBlYXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbWFwcGVkRWwgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogY2wsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdG9wICsgb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICBtaWRkbGUsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICAgICAgICAgIGluVmlldzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbGwsXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkLFxuICAgICAgICAgICAgICAgICAgICBkZWxheSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzdGlja3lcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmVscy5wdXNoKG1hcHBlZEVsKTtcblxuICAgICAgICAgICAgICAgIGlmKHNwZWVkICE9PSBmYWxzZSB8fCBzdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzLnB1c2gobWFwcGVkRWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBhZGRTZWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5zZWN0aW9ucyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS0ke3RoaXMubmFtZX0tc2VjdGlvbl1gKTtcblxuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uLCBpKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAxLjUpIC0gZ2V0VHJhbnNsYXRlKHNlY3Rpb24pLnk7XG4gICAgICAgICAgICBsZXQgbGltaXQgPSBvZmZzZXQgKyBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAyKTtcbiAgICAgICAgICAgIGxldCBwZXJzaXN0ZW50ID0gdHlwZW9mIHNlY3Rpb24uZGF0YXNldFt0aGlzLm5hbWUgKyAnUGVyc2lzdGVudCddID09PSAnc3RyaW5nJztcblxuICAgICAgICAgICAgbGV0IGluVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+PSBvZmZzZXQgJiYgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1hcHBlZFNlY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgZWw6IHNlY3Rpb24sXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICAgICAgbGltaXQ6IGxpbWl0LFxuICAgICAgICAgICAgICAgIGluVmlldzogaW5WaWV3LFxuICAgICAgICAgICAgICAgIHBlcnNpc3RlbnQ6IHBlcnNpc3RlbnRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXSA9IG1hcHBlZFNlY3Rpb247XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKGVsZW1lbnQsIHgsIHksIGRlbGF5KSB7XG4gICAgICAgIGxldCB0cmFuc2Zvcm07XG5cbiAgICAgICAgaWYoIWRlbGF5KSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSBgbWF0cml4KDEsMCwwLDEsJHt4fSwke3l9KWBcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgbGV0IGxlcnBYID0gbGVycChzdGFydC54LCB4LCBkZWxheSk7XG4gICAgICAgICAgICBsZXQgbGVycFkgPSBsZXJwKHN0YXJ0LnksIHksIGRlbGF5KTtcblxuICAgICAgICAgICAgdHJhbnNmb3JtID0gYG1hdHJpeCgxLDAsMCwxLCR7bGVycFh9LCR7bGVycFl9KWBcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1FbGVtZW50cyhpc0ZvcmNlZCkge1xuXG4gICAgICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0aGlzLndpbmRvd0hlaWdodDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsTWlkZGxlID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSArIHRoaXMud2luZG93TWlkZGxlO1xuXG4gICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cy5mb3JFYWNoKChjdXJyZW50LCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgdHJhbnNmb3JtRGlzdGFuY2UgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYoKGlzRm9yY2VkICYmICFjdXJyZW50LmluVmlldykpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY3VycmVudC5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnQucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSAqIC1jdXJyZW50LnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAodGhpcy5pbnN0YW5jZS5saW1pdCAtIHNjcm9sbEJvdHRvbSArIHRoaXMud2luZG93SGVpZ2h0KSAqIGN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IChzY3JvbGxNaWRkbGUgLSBjdXJyZW50Lm1pZGRsZSkgKiAtY3VycmVudC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGN1cnJlbnQuc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudC5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55IC0gY3VycmVudC50b3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8IGN1cnJlbnQudG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+IGN1cnJlbnQuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IGN1cnJlbnQuYm90dG9tIC0gY3VycmVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRyYW5zZm9ybURpc3RhbmNlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnQuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oY3VycmVudC5lbCwgdHJhbnNmb3JtRGlzdGFuY2UsIDAsIChpc0ZvcmNlZCA/IGZhbHNlIDogY3VycmVudC5kZWxheSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oY3VycmVudC5lbCwgMCwgdHJhbnNmb3JtRGlzdGFuY2UsIChpc0ZvcmNlZCA/IGZhbHNlIDogY3VycmVudC5kZWxheSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgU2Nyb2xsIGZyb20gJy4vTmF0aXZlJztcbmltcG9ydCBTbW9vdGggZnJvbSAnLi9TbW9vdGguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zbW9vdGhNb2JpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGUgPSAoL0FuZHJvaWR8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNtb290aCA9PT0gdHJ1ZSAmJiAhdGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwgPSBuZXcgU21vb3RoKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbCA9IG5ldyBTY3JvbGwodGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsLmluaXQoKTtcblxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgZWw6IGRvY3VtZW50LFxuICAgIGVsTW9iaWxlOiBkb2N1bWVudCxcbiAgICBuYW1lOiAnc2Nyb2xsJyxcbiAgICBvZmZzZXQ6IDAsXG4gICAgcmVwZWF0OiBmYWxzZSxcbiAgICBzbW9vdGg6IGZhbHNlLFxuICAgIHNtb290aE1vYmlsZTogZmFsc2UsXG4gICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgIGluZXJ0aWE6IDEsXG4gICAgY2xhc3M6ICdpcy1pbnZpZXcnLFxuICAgIHNjcm9sbGJhckNsYXNzOiAnby1zY3JvbGxiYXInLFxuICAgIHNjcm9sbGluZ0NsYXNzOiAnaXMtc2Nyb2xsaW5nJyxcbiAgICBkcmFnZ2luZ0NsYXNzOiAnaXMtZHJhZ2dpbmcnLFxuICAgIHNtb290aENsYXNzOiAnaGFzLXNtb290aHNjcm9sbCdcbn07XG4iLCIvKipcbiAqIEBzZWUgIGh0dHBzOi8vZ2l0aHViLmNvbS9yYWN0aXZlanMvcmFjdGl2ZS9ibG9iL2Rldi9zcmMvdXRpbHMvaHRtbC5qc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlSHRtbChzdHIpIHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIEhUTUwgY29udGVudCB0aGF0IGNvbnRhaW5zIG11c3RhY2hlIGNoYXJhY3RlcnMgZm9yIHVzZSB3aXRoIFJhY3RpdmVcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmVzY2FwZUh0bWwoc3RyKSB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgICAgIC5yZXBsYWNlKC8mZ3Q7L2csICc+JylcbiAgICAgICAgLnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XG59XG5cbi8qKlxuICogR2V0IGVsZW1lbnQgZGF0YSBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0gICB7RE9NRWxlbWVudH0gIG5vZGVcbiAqIEByZXR1cm4gIHtBcnJheX0gICAgICAgZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZURhdGEobm9kZSkge1xuICAgIC8vIEFsbCBhdHRyaWJ1dGVzXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXM7XG5cbiAgICAvLyBSZWdleCBQYXR0ZXJuXG4gICAgdmFyIHBhdHRlcm4gPSAvXmRhdGFcXC0oLispJC87XG5cbiAgICAvLyBPdXRwdXRcbiAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmICghYXR0cmlidXRlc1tpXSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdHRyaWJ1dGVzIG5hbWUgKGV4OiBkYXRhLW1vZHVsZSlcbiAgICAgICAgbGV0IG5hbWUgPSBhdHRyaWJ1dGVzW2ldLm5hbWU7XG5cbiAgICAgICAgLy8gVGhpcyBoYXBwZW5zLlxuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1hdGNoID0gbmFtZS5tYXRjaChwYXR0ZXJuKTtcbiAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGlzIHRocm93cyBhbiBlcnJvciwgeW91IGhhdmUgc29tZVxuICAgICAgICAvLyBzZXJpb3VzIHByb2JsZW1zIGluIHlvdXIgSFRNTC5cbiAgICAgICAgZGF0YVttYXRjaFsxXV0gPSBub2RlLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHRoZSBwYXJlbnQgbm9kZXMgb2YgdGhlIGdpdmVuIG5vZGVcbiAqIEBwYXJhbSAge29iamVjdH0gbm9kZVxuICogQHJldHVybiB7YXJyYXl9IHBhcmVudCBub2Rlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50cyhlbGVtKSB7XG4gICAgLy8gU2V0IHVwIGEgcGFyZW50IGFycmF5XG4gICAgbGV0IHBhcmVudHMgPSBbXTtcblxuICAgIC8vIFB1c2ggZWFjaCBwYXJlbnQgZWxlbWVudCB0byB0aGUgYXJyYXlcbiAgICBmb3IgKCA7IGVsZW0gJiYgZWxlbSAhPT0gZG9jdW1lbnQ7IGVsZW0gPSBlbGVtLnBhcmVudE5vZGUgKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChlbGVtKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gb3VyIHBhcmVudCBhcnJheVxuICAgIHJldHVybiBwYXJlbnRzO1xufVxuXG4vLyBodHRwczovL2dvbWFrZXRoaW5ncy5jb20vaG93LXRvLWdldC10aGUtY2xvc2VzdC1wYXJlbnQtZWxlbWVudC13aXRoLWEtbWF0Y2hpbmctc2VsZWN0b3ItdXNpbmctdmFuaWxsYS1qYXZhc2NyaXB0L1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5Q2xvc2VzdFBhcmVudChlbGVtLCBzZWxlY3Rvcikge1xuXG4gICAgLy8gRWxlbWVudC5tYXRjaGVzKCkgcG9seWZpbGxcbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9XG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzID0gKHRoaXMuZG9jdW1lbnQgfHwgdGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHMpLFxuICAgICAgICAgICAgICAgICAgICBpID0gbWF0Y2hlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwICYmIG1hdGNoZXMuaXRlbShpKSAhPT0gdGhpcykge31cbiAgICAgICAgICAgICAgICByZXR1cm4gaSA+IC0xO1xuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGNsb3Nlc3QgbWF0Y2hpbmcgZWxlbWVudFxuICAgIGZvciAoIDsgZWxlbSAmJiBlbGVtICE9PSBkb2N1bWVudDsgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSApIHtcbiAgICAgICAgaWYgKCBlbGVtLm1hdGNoZXMoIHNlbGVjdG9yICkgKSByZXR1cm4gZWxlbTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gbGVycChzdGFydCwgZW5kLCBhbXQpe1xuICAgIHJldHVybiAoMSAtIGFtdCkgKiBzdGFydCArIGFtdCAqIGVuZFxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShlbCwgdHJhbnNmb3JtVmFsdWUpe1xuICAgIGVsLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xuICAgIGVsLnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XG4gICAgZWwuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWwpe1xuICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHt9XG4gICAgaWYoIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSByZXR1cm47XG5cbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSB8fCBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gfHwgc3R5bGUubW96VHJhbnNmb3JtO1xuXG4gICAgbGV0IG1hdCA9IHRyYW5zZm9ybS5tYXRjaCgvXm1hdHJpeDNkXFwoKC4rKVxcKSQvKTtcbiAgICBpZihtYXQpIHJldHVybiBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVsxM10pO1xuICAgIG1hdCA9IHRyYW5zZm9ybS5tYXRjaCgvXm1hdHJpeFxcKCguKylcXCkkLyk7XG4gICAgdHJhbnNsYXRlLnggPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVs0XSkgOiAwO1xuICAgIHRyYW5zbGF0ZS55ID0gbWF0ID8gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbNV0pIDogMDtcblxuICAgIHJldHVybiB0cmFuc2xhdGU7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmKCFvYmplY3QpIHJldHVybiBjb25zb2xlLndhcm4oJ2JpbmRBbGwgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50LicpO1xuXG4gICAgdmFyIGZ1bmN0aW9ucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICBpZiAoZnVuY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgIGZvciAodmFyIG1ldGhvZCBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBtZXRob2QpKSB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIG9iamVjdFttZXRob2RdID09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbChvYmplY3RbbWV0aG9kXSkgPT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9ucy5wdXNoKG1ldGhvZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGZ1bmN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uc1tpXTtcbiAgICAgICAgb2JqZWN0W2ZdID0gYmluZChvYmplY3RbZl0sIG9iamVjdCk7XG4gICAgfVxufTtcblxuLypcbiAgICBGYXN0ZXIgYmluZCB3aXRob3V0IHNwZWNpZmljLWNhc2UgY2hlY2tpbmcuIChzZWUgaHR0cHM6Ly9jb2RlcndhbGwuY29tL3Avb2kzajN3KS5cbiAgICBiaW5kQWxsIGlzIG9ubHkgbmVlZGVkIGZvciBldmVudHMgYmluZGluZyBzbyBubyBuZWVkIHRvIG1ha2Ugc2xvdyBmaXhlcyBmb3IgY29uc3RydWN0b3JcbiAgICBvciBwYXJ0aWFsIGFwcGxpY2F0aW9uLlxuKi9cbmZ1bmN0aW9uIGJpbmQoZnVuYywgY29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgfTtcbn0iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuOS4yXG4oZnVuY3Rpb24oKSB7XG4gIHZhciByb290O1xuXG4gIHJvb3QgPSB0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBleHBvcnRzICE9PSBudWxsID8gZXhwb3J0cyA6IHRoaXM7XG5cbiAgcm9vdC5MZXRoYXJneSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBMZXRoYXJneShzdGFiaWxpdHksIHNlbnNpdGl2aXR5LCB0b2xlcmFuY2UsIGRlbGF5KSB7XG4gICAgICB0aGlzLnN0YWJpbGl0eSA9IHN0YWJpbGl0eSAhPSBudWxsID8gTWF0aC5hYnMoc3RhYmlsaXR5KSA6IDg7XG4gICAgICB0aGlzLnNlbnNpdGl2aXR5ID0gc2Vuc2l0aXZpdHkgIT0gbnVsbCA/IDEgKyBNYXRoLmFicyhzZW5zaXRpdml0eSkgOiAxMDA7XG4gICAgICB0aGlzLnRvbGVyYW5jZSA9IHRvbGVyYW5jZSAhPSBudWxsID8gMSArIE1hdGguYWJzKHRvbGVyYW5jZSkgOiAxLjE7XG4gICAgICB0aGlzLmRlbGF5ID0gZGVsYXkgIT0gbnVsbCA/IGRlbGF5IDogMTUwO1xuICAgICAgdGhpcy5sYXN0VXBEZWx0YXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMubGFzdERvd25EZWx0YXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDEsIHJlZiA9IHRoaXMuc3RhYmlsaXR5ICogMjsgMSA8PSByZWYgPyBpIDw9IHJlZiA6IGkgPj0gcmVmOyAxIDw9IHJlZiA/IGkrKyA6IGktLSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGxhc3REZWx0YTtcbiAgICAgIGUgPSBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcbiAgICAgIGlmIChlLndoZWVsRGVsdGEgIT0gbnVsbCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLndoZWVsRGVsdGE7XG4gICAgICB9IGVsc2UgaWYgKGUuZGVsdGFZICE9IG51bGwpIHtcbiAgICAgICAgbGFzdERlbHRhID0gZS5kZWx0YVkgKiAtNDA7XG4gICAgICB9IGVsc2UgaWYgKChlLmRldGFpbCAhPSBudWxsKSB8fCBlLmRldGFpbCA9PT0gMCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLmRldGFpbCAqIC00MDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wLnB1c2goRGF0ZS5ub3coKSk7XG4gICAgICB0aGlzLmRlbHRhc1RpbWVzdGFtcC5zaGlmdCgpO1xuICAgICAgaWYgKGxhc3REZWx0YSA+IDApIHtcbiAgICAgICAgdGhpcy5sYXN0VXBEZWx0YXMucHVzaChsYXN0RGVsdGEpO1xuICAgICAgICB0aGlzLmxhc3RVcERlbHRhcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0luZXJ0aWEoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhc3REb3duRGVsdGFzLnB1c2gobGFzdERlbHRhKTtcbiAgICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0luZXJ0aWEoLTEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuaXNJbmVydGlhID0gZnVuY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgbGFzdERlbHRhcywgbGFzdERlbHRhc05ldywgbGFzdERlbHRhc09sZCwgbmV3QXZlcmFnZSwgbmV3U3VtLCBvbGRBdmVyYWdlLCBvbGRTdW07XG4gICAgICBsYXN0RGVsdGFzID0gZGlyZWN0aW9uID09PSAtMSA/IHRoaXMubGFzdERvd25EZWx0YXMgOiB0aGlzLmxhc3RVcERlbHRhcztcbiAgICAgIGlmIChsYXN0RGVsdGFzWzBdID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kZWx0YXNUaW1lc3RhbXBbKHRoaXMuc3RhYmlsaXR5ICogMikgLSAyXSArIHRoaXMuZGVsYXkgPiBEYXRlLm5vdygpICYmIGxhc3REZWx0YXNbMF0gPT09IGxhc3REZWx0YXNbKHRoaXMuc3RhYmlsaXR5ICogMikgLSAxXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsYXN0RGVsdGFzT2xkID0gbGFzdERlbHRhcy5zbGljZSgwLCB0aGlzLnN0YWJpbGl0eSk7XG4gICAgICBsYXN0RGVsdGFzTmV3ID0gbGFzdERlbHRhcy5zbGljZSh0aGlzLnN0YWJpbGl0eSwgdGhpcy5zdGFiaWxpdHkgKiAyKTtcbiAgICAgIG9sZFN1bSA9IGxhc3REZWx0YXNPbGQucmVkdWNlKGZ1bmN0aW9uKHQsIHMpIHtcbiAgICAgICAgcmV0dXJuIHQgKyBzO1xuICAgICAgfSk7XG4gICAgICBuZXdTdW0gPSBsYXN0RGVsdGFzTmV3LnJlZHVjZShmdW5jdGlvbih0LCBzKSB7XG4gICAgICAgIHJldHVybiB0ICsgcztcbiAgICAgIH0pO1xuICAgICAgb2xkQXZlcmFnZSA9IG9sZFN1bSAvIGxhc3REZWx0YXNPbGQubGVuZ3RoO1xuICAgICAgbmV3QXZlcmFnZSA9IG5ld1N1bSAvIGxhc3REZWx0YXNOZXcubGVuZ3RoO1xuICAgICAgaWYgKE1hdGguYWJzKG9sZEF2ZXJhZ2UpIDwgTWF0aC5hYnMobmV3QXZlcmFnZSAqIHRoaXMudG9sZXJhbmNlKSAmJiAodGhpcy5zZW5zaXRpdml0eSA8IE1hdGguYWJzKG5ld0F2ZXJhZ2UpKSkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuc2hvd0xhc3RVcERlbHRhcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFzdFVwRGVsdGFzO1xuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuc2hvd0xhc3REb3duRGVsdGFzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0RG93bkRlbHRhcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIExldGhhcmd5O1xuXG4gIH0pKCk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiZnVuY3Rpb24gRSAoKSB7XG4gIC8vIEtlZXAgdGhpcyBlbXB0eSBzbyBpdCdzIGVhc2llciB0byBpbmhlcml0IGZyb21cbiAgLy8gKHZpYSBodHRwczovL2dpdGh1Yi5jb20vbGlwc21hY2sgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2lzc3Vlcy8zKVxufVxuXG5FLnByb3RvdHlwZSA9IHtcbiAgb246IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcblxuICAgIChlW25hbWVdIHx8IChlW25hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgIGN0eDogY3R4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvbmNlOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiBsaXN0ZW5lciAoKSB7XG4gICAgICBzZWxmLm9mZihuYW1lLCBsaXN0ZW5lcik7XG4gICAgICBjYWxsYmFjay5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVyLl8gPSBjYWxsYmFja1xuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIGxpc3RlbmVyLCBjdHgpO1xuICB9LFxuXG4gIGVtaXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGRhdGEgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGV2dEFyciA9ICgodGhpcy5lIHx8ICh0aGlzLmUgPSB7fSkpW25hbWVdIHx8IFtdKS5zbGljZSgpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuID0gZXZ0QXJyLmxlbmd0aDtcblxuICAgIGZvciAoaTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBldnRBcnJbaV0uZm4uYXBwbHkoZXZ0QXJyW2ldLmN0eCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb2ZmOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuICAgIHZhciBldnRzID0gZVtuYW1lXTtcbiAgICB2YXIgbGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKGV2dHMgJiYgY2FsbGJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChldnRzW2ldLmZuICE9PSBjYWxsYmFjayAmJiBldnRzW2ldLmZuLl8gIT09IGNhbGxiYWNrKVxuICAgICAgICAgIGxpdmVFdmVudHMucHVzaChldnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgZnJvbSBxdWV1ZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAgLy8gU3VnZ2VzdGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9sYXpkXG4gICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2NvbW1pdC9jNmViZmFhOWJjOTczYjMzZDExMGE4NGEzMDc3NDJiN2NmOTRjOTUzI2NvbW1pdGNvbW1lbnQtNTAyNDkxMFxuXG4gICAgKGxpdmVFdmVudHMubGVuZ3RoKVxuICAgICAgPyBlW25hbWVdID0gbGl2ZUV2ZW50c1xuICAgICAgOiBkZWxldGUgZVtuYW1lXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEU7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc291cmNlKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc291cmNlKSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgndGlueS1lbWl0dGVyJyk7XG52YXIgTGV0aGFyZ3kgPSByZXF1aXJlKCdsZXRoYXJneScpLkxldGhhcmd5O1xudmFyIHN1cHBvcnQgPSByZXF1aXJlKCcuL3N1cHBvcnQnKTtcbnZhciBjbG9uZSA9IHJlcXVpcmUoJy4vY2xvbmUnKTtcbnZhciBiaW5kQWxsID0gcmVxdWlyZSgnYmluZGFsbC1zdGFuZGFsb25lJyk7XG52YXIgRVZUX0lEID0gJ3ZpcnR1YWxzY3JvbGwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxTY3JvbGw7XG5cbnZhciBrZXlDb2RlcyA9IHtcbiAgICBMRUZUOiAzNyxcbiAgICBVUDogMzgsXG4gICAgUklHSFQ6IDM5LFxuICAgIERPV046IDQwLFxuICAgIFNQQUNFOiAzMlxufTtcblxuZnVuY3Rpb24gVmlydHVhbFNjcm9sbChvcHRpb25zKSB7XG4gICAgYmluZEFsbCh0aGlzLCAnX29uV2hlZWwnLCAnX29uTW91c2VXaGVlbCcsICdfb25Ub3VjaFN0YXJ0JywgJ19vblRvdWNoTW92ZScsICdfb25LZXlEb3duJyk7XG5cbiAgICB0aGlzLmVsID0gd2luZG93O1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZWwpIHtcbiAgICAgICAgdGhpcy5lbCA9IG9wdGlvbnMuZWw7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmVsO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSBvYmplY3RBc3NpZ24oe1xuICAgICAgICBtb3VzZU11bHRpcGxpZXI6IDEsXG4gICAgICAgIHRvdWNoTXVsdGlwbGllcjogMixcbiAgICAgICAgZmlyZWZveE11bHRpcGxpZXI6IDE1LFxuICAgICAgICBrZXlTdGVwOiAxMjAsXG4gICAgICAgIHByZXZlbnRUb3VjaDogZmFsc2UsXG4gICAgICAgIHVucHJldmVudFRvdWNoQ2xhc3M6ICd2cy10b3VjaG1vdmUtYWxsb3dlZCcsXG4gICAgICAgIGxpbWl0SW5lcnRpYTogZmFsc2UsXG4gICAgICAgIHVzZUtleWJvYXJkOiB0cnVlXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW5lcnRpYSkgdGhpcy5fbGV0aGFyZ3kgPSBuZXcgTGV0aGFyZ3koKTtcblxuICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuICAgIHRoaXMuX2V2ZW50ID0ge1xuICAgICAgICB5OiAwLFxuICAgICAgICB4OiAwLFxuICAgICAgICBkZWx0YVg6IDAsXG4gICAgICAgIGRlbHRhWTogMFxuICAgIH07XG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy5ib2R5VG91Y2hBY3Rpb24gPSBudWxsO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wYXNzaXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lck9wdGlvbnMgPSB7cGFzc2l2ZTogdGhpcy5vcHRpb25zLnBhc3NpdmV9O1xuICAgIH1cbn1cblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX25vdGlmeSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LnggKz0gZXZ0LmRlbHRhWDtcbiAgICBldnQueSArPSBldnQuZGVsdGFZO1xuXG4gICB0aGlzLl9lbWl0dGVyLmVtaXQoRVZUX0lELCB7XG4gICAgICAgIHg6IGV2dC54LFxuICAgICAgICB5OiBldnQueSxcbiAgICAgICAgZGVsdGFYOiBldnQuZGVsdGFYLFxuICAgICAgICBkZWx0YVk6IGV2dC5kZWx0YVksXG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGVcbiAgIH0pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uV2hlZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKHRoaXMuX2xldGhhcmd5ICYmIHRoaXMuX2xldGhhcmd5LmNoZWNrKGUpID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgIC8vIEluIENocm9tZSBhbmQgaW4gRmlyZWZveCAoYXQgbGVhc3QgdGhlIG5ldyBvbmUpXG4gICAgZXZ0LmRlbHRhWCA9IGUud2hlZWxEZWx0YVggfHwgZS5kZWx0YVggKiAtMTtcbiAgICBldnQuZGVsdGFZID0gZS53aGVlbERlbHRhWSB8fCBlLmRlbHRhWSAqIC0xO1xuXG4gICAgLy8gZm9yIG91ciBwdXJwb3NlIGRlbHRhbW9kZSA9IDEgbWVhbnMgdXNlciBpcyBvbiBhIHdoZWVsIG1vdXNlLCBub3QgdG91Y2ggcGFkXG4gICAgLy8gcmVhbCBtZWFuaW5nOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2hlZWxFdmVudCNEZWx0YV9tb2Rlc1xuICAgIGlmKHN1cHBvcnQuaXNGaXJlZm94ICYmIGUuZGVsdGFNb2RlID09IDEpIHtcbiAgICAgICAgZXZ0LmRlbHRhWCAqPSBvcHRpb25zLmZpcmVmb3hNdWx0aXBsaWVyO1xuICAgICAgICBldnQuZGVsdGFZICo9IG9wdGlvbnMuZmlyZWZveE11bHRpcGxpZXI7XG4gICAgfVxuXG4gICAgZXZ0LmRlbHRhWCAqPSBvcHRpb25zLm1vdXNlTXVsdGlwbGllcjtcbiAgICBldnQuZGVsdGFZICo9IG9wdGlvbnMubW91c2VNdWx0aXBsaWVyO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uTW91c2VXaGVlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW5lcnRpYSAmJiB0aGlzLl9sZXRoYXJneS5jaGVjayhlKSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgIC8vIEluIFNhZmFyaSwgSUUgYW5kIGluIENocm9tZSBpZiAnd2hlZWwnIGlzbid0IGRlZmluZWRcbiAgICBldnQuZGVsdGFYID0gKGUud2hlZWxEZWx0YVgpID8gZS53aGVlbERlbHRhWCA6IDA7XG4gICAgZXZ0LmRlbHRhWSA9IChlLndoZWVsRGVsdGFZKSA/IGUud2hlZWxEZWx0YVkgOiBlLndoZWVsRGVsdGE7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciB0ID0gKGUudGFyZ2V0VG91Y2hlcykgPyBlLnRhcmdldFRvdWNoZXNbMF0gOiBlO1xuICAgIHRoaXMudG91Y2hTdGFydFggPSB0LnBhZ2VYO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSB0LnBhZ2VZO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uVG91Y2hNb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmKG9wdGlvbnMucHJldmVudFRvdWNoXG4gICAgICAgICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMob3B0aW9ucy51bnByZXZlbnRUb3VjaENsYXNzKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgdmFyIHQgPSAoZS50YXJnZXRUb3VjaGVzKSA/IGUudGFyZ2V0VG91Y2hlc1swXSA6IGU7XG5cbiAgICBldnQuZGVsdGFYID0gKHQucGFnZVggLSB0aGlzLnRvdWNoU3RhcnRYKSAqIG9wdGlvbnMudG91Y2hNdWx0aXBsaWVyO1xuICAgIGV2dC5kZWx0YVkgPSAodC5wYWdlWSAtIHRoaXMudG91Y2hTdGFydFkpICogb3B0aW9ucy50b3VjaE11bHRpcGxpZXI7XG5cbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gdC5wYWdlWDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gdC5wYWdlWTtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbktleURvd24gPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuICAgIGV2dC5kZWx0YVggPSBldnQuZGVsdGFZID0gMDtcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gNDBcblxuICAgIHN3aXRjaChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5MRUZUOlxuICAgICAgICBjYXNlIGtleUNvZGVzLlVQOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IHRoaXMub3B0aW9ucy5rZXlTdGVwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5SSUdIVDpcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5ET1dOOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IC0gdGhpcy5vcHRpb25zLmtleVN0ZXA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5TUEFDRSAmJiBlLnNoaWZ0S2V5OlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IHdpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGtleUNvZGVzLlNQQUNFOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IC0gd2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX2JpbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzdXBwb3J0Lmhhc1doZWVsRXZlbnQpIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9vbldoZWVsLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgaWYoc3VwcG9ydC5oYXNNb3VzZVdoZWVsRXZlbnQpIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuX29uTW91c2VXaGVlbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuXG4gICAgaWYoc3VwcG9ydC5oYXNUb3VjaCkge1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzUG9pbnRlciAmJiBzdXBwb3J0Lmhhc1RvdWNoV2luKSB7XG4gICAgICAgIHRoaXMuYm9keVRvdWNoQWN0aW9uID0gZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb24gPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyRG93bicsIHRoaXMuX29uVG91Y2hTdGFydCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyTW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc0tleURvd24gJiYgdGhpcy5vcHRpb25zLnVzZUtleWJvYXJkKSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl91bmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzdXBwb3J0Lmhhc1doZWVsRXZlbnQpIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9vbldoZWVsKTtcbiAgICBpZihzdXBwb3J0Lmhhc01vdXNlV2hlZWxFdmVudCkgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5fb25Nb3VzZVdoZWVsKTtcblxuICAgIGlmKHN1cHBvcnQuaGFzVG91Y2gpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNQb2ludGVyICYmIHN1cHBvcnQuaGFzVG91Y2hXaW4pIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uID0gdGhpcy5ib2R5VG91Y2hBY3Rpb247XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyRG93bicsIHRoaXMuX29uVG91Y2hTdGFydCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyTW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc0tleURvd24gJiYgdGhpcy5vcHRpb25zLnVzZUtleWJvYXJkKSBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oY2IsIGN0eCkge1xuICB0aGlzLl9lbWl0dGVyLm9uKEVWVF9JRCwgY2IsIGN0eCk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2VtaXR0ZXIuZTtcbiAgaWYgKGV2ZW50cyAmJiBldmVudHNbRVZUX0lEXSAmJiBldmVudHNbRVZUX0lEXS5sZW5ndGggPT09IDEpIHRoaXMuX2JpbmQoKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGNiLCBjdHgpIHtcbiAgdGhpcy5fZW1pdHRlci5vZmYoRVZUX0lELCBjYiwgY3R4KTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZW1pdHRlci5lO1xuICBpZiAoIWV2ZW50c1tFVlRfSURdIHx8IGV2ZW50c1tFVlRfSURdLmxlbmd0aCA8PSAwKSB0aGlzLl91bmJpbmQoKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuICAgIGV2dC54ID0gMDtcbiAgICBldnQueSA9IDA7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vZmYoKTtcbiAgICB0aGlzLl91bmJpbmQoKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uIGdldFN1cHBvcnQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGFzV2hlZWxFdmVudDogJ29ud2hlZWwnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNNb3VzZVdoZWVsRXZlbnQ6ICdvbm1vdXNld2hlZWwnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNUb3VjaDogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc1RvdWNoV2luOiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyAmJiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDEsXG4gICAgICAgIGhhc1BvaW50ZXI6ICEhd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkLFxuICAgICAgICBoYXNLZXlEb3duOiAnb25rZXlkb3duJyBpbiBkb2N1bWVudCxcbiAgICAgICAgaXNGaXJlZm94OiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA+IC0xXG4gICAgfTtcbn0pKCk7XG4iXX0=
