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
      window.addEventListener('scrollto', this.scrollTo, false); // example to trigger a scroll to
      // const scrollToEvent = new CustomEvent('scrollto',{
      //     detail: {
      //         options: {
      //             targetElem: document.querySelectorAll('#introduction')[0]
      //         }
      //     }
      // });
      // window.dispatchEvent(scrollToEvent)
    }
  }, {
    key: "prepareScrollTo",
    value: function prepareScrollTo(event) {
      event.preventDefault();
      this.scrollTo({
        options: {
          sourceElem: event.currentTarget,
          offsetElem: event.currentTarget.getAttribute('data-offset')
        }
      });
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
    value: function scrollTo(params) {
      var options = params.options;
      var targetElem = options.targetElem;
      var sourceElem = options.sourceElem;
      var offsetElem = options.offsetElem;
      var targetOffset = options.targetOffset ? options.targetOffset : 0;
      var speed = options.speed ? options.speed : 800;
      var delay = options.delay;
      var toTop = options.toTop;
      var toBottom = options.toBottom;
      var offset = 0; // If sourceElem is given, find and store the targetElem it's related to

      if (sourceElem) {
        var targetData = ''; // Get the selector (given with `data-target` or `href` attributes on sourceElem)

        var sourceElemTarget = sourceElem.getAttribute('data-target');
        targetData = sourceElemTarget ? sourceElemTarget : sourceElem.getAttribute('href'); // Store the target for later

        targetElem = document.querySelectorAll(targetData)[0];
      }

      if (targetElem) {
        targetOffset = targetElem.getBoundingClientRect().top + targetOffset;
      }

      if (offsetElem) {
        var _offset = offsetElem.offsetHeight;
        targetOffset = targetOffset - _offset;
      }

      if (toTop === true) {
        targetElem = document.querySelectorAll('html')[0];
      } else if (toBottom === true) {
        targetOffset = document.offsetHeight;
        setTimeout(function () {
          document.querySelectorAll('html')[0].scrollIntoView({
            behavior: 'smooth',
            block: "end",
            inline: "nearest"
          });
        }, delay);
        return;
      }

      setTimeout(function () {
        targetElem.scrollIntoView({
          behavior: 'smooth'
        });
      }, delay);
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
     *          {node} targetElem - The DOM element we want to scroll to
     *          {node} sourceElem - An `<a>` element with an href targeting the anchor we want to scroll to
     *          {node} offsetElem - A DOM element from which we get the height to substract from the targetOffset
     *              (ex: use offsetElem to pass a mobile header that is above content, to make sure the scrollTo will be aligned with it)
     *          {int} targetOffset - An absolute vertical scroll value to reach, or an offset to apply on top of given `targetElem` or `sourceElem`'s target
     *          {int} delay - Amount of milliseconds to wait before starting to scroll
     *          {boolean} toTop - Set to true to scroll all the way to the top
     *          {boolean} toBottom - Set to true to scroll all the way to the bottom
     * @return {void}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(params) {
      var _this3 = this;

      var options = params.options;
      var targetElem = options.targetElem;
      var sourceElem = options.sourceElem;
      var offsetElem = options.offsetElem;
      var targetOffset = options.targetOffset ? options.targetOffset : 0;
      var delay = options.delay;
      var toTop = options.toTop;
      var toBottom = options.toBottom; // If sourceElem is given, find and store the targetElem it's related to

      if (sourceElem) {
        var targetData = ''; // Get the selector (given with `data-target` or `href` attributes on sourceElem)

        var sourceElemTarget = sourceElem.getAttribute('data-target');
        targetData = sourceElemTarget ? sourceElemTarget : sourceElem.getAttribute('href'); // Store the target for later

        targetElem = document.querySelectorAll(targetData)[0];
      } // We have a targetElem, get it's coordinates


      if (targetElem) {
        // Get targetElem offset from top
        var targetElemBCR = targetElem.getBoundingClientRect();
        var targetElemOffsetTop = targetElemBCR.top + this.instance.scroll.y; // Try and find the targetElem's parent section

        var targetParents = (0, _html.getParents)(targetElem);
        console.log(targetParents);
        var parentSection = targetParents.find(function (candidate) {
          return _this3.sections.find(function (section) {
            return section.element == candidate;
          });
        });
        var parentSectionOffset = 0;

        if (parentSection) {
          parentSectionOffset = (0, _transform.getTranslate)(parentSection).y; // We got a parent section, store it's current offset to remove it later
        } // Final value of scroll destination : targetElemOffsetTop + (optional offset given in options) - (parent's section translate)


        targetOffset = targetElemOffsetTop + targetOffset - parentSectionOffset;
      } // We have an offsetElem, get its height and remove it from targetOffset already computed


      if (offsetElem) {
        var offset = offsetElem.offsetHeight;
        targetOffset = targetOffset - offset;
      } // If we want to go to one of boundaries


      if (toTop === true) {
        targetOffset = 0;
      } else if (toBottom === true) {
        targetOffset = this.instance.limit;
      } // Wait for the asked delay if needed


      setTimeout(function () {
        _this3.instance.delta.y = targetOffset; // Actual scrollTo (the lerp will do the animation itself)
        // Update the scroll. If we were in idle state: we're not anymore

        _this3.isScrolling = true;

        _this3.checkScroll();

        html.classList.add(_this3.isScrollingClassName);
      }, delay);
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
      var _this4 = this;

      if (this.isScrolling || this.isDraggingScrollBar) {
        if (!this.hasScrollTicking) {
          requestAnimationFrame(function () {
            return _this4.checkScroll();
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
    } // Scrollbar functions

  }, {
    key: "initScrollBar",
    value: function initScrollBar() {
      var _this5 = this;

      this.scrollbarWrapper = document.createElement('span');
      this.scrollbar = document.createElement('span');
      this.scrollbarWrapper.classList.add("".concat(this.scrollBarClassName, "_wrapper"));
      this.scrollbar.classList.add("".concat(this.scrollBarClassName));
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
      this.isDraggingScrollBar = true;
      this.checkScroll();
      html.classList.remove(this.isScrollingClassName);
      html.classList.add(this.isDraggingClassName);
    }
  }, {
    key: "releaseScrollBar",
    value: function releaseScrollBar(e) {
      this.isDraggingScrollBar = false;
      html.classList.add(this.isScrollingClassName);
      html.classList.remove(this.isDraggingClassName);
    }
  }, {
    key: "moveScrollBar",
    value: function moveScrollBar(e) {
      var _this7 = this;

      if (!this.isTicking && this.isDraggingScrollBar) {
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
  "class": 'is-inview',
  scrollBarClassName: 'o-scrollbar',
  isScrollingClassName: 'is-scrolling',
  isDraggingClassName: 'is-dragging',
  smoothClass: 'has-smoothscroll',
  offset: 0,
  inertia: 1,
  repeat: false,
  smooth: false,
  smoothMobile: false,
  getDirection: false,
  getSpeed: false,
  onScroll: function onScroll(e) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9hcHAuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvQ29yZS5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC9OYXRpdmUuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvU21vb3RoLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL21haW4uanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvb3B0aW9ucy5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL2h0bWwuanMiLCJhc3NldHMvc2NyaXB0cy91dGlscy9tYXRocy5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL3RyYW5zZm9ybS5qcyIsIm5vZGVfbW9kdWxlcy9iaW5kYWxsLXN0YW5kYWxvbmUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbGV0aGFyZ3kvbGV0aGFyZ3kuanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90aW55LWVtaXR0ZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvc3JjL2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtc2Nyb2xsL3NyYy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLXNjcm9sbC9zcmMvc3VwcG9ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQSxDQUFDLFlBQVc7QUFFUixNQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFKLENBQXFCO0FBQ2hDLElBQUEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLFlBQXZCLENBRDRCO0FBRWhDLElBQUEsTUFBTSxFQUFFLEtBRndCO0FBR2hDLElBQUEsWUFBWSxFQUFFLEtBSGtCO0FBSWhDLElBQUEsZUFBZSxFQUFFLENBQUMsQ0FBQyxRQUFELENBSmM7QUFLaEMsSUFBQSxPQUFPLEVBQUUsQ0FMdUI7QUFNaEMsSUFBQSxrQkFBa0IsRUFBRSxhQU5ZO0FBT2hDLElBQUEsb0JBQW9CLEVBQUUsY0FQVTtBQVFoQyxJQUFBLG1CQUFtQixFQUFFLGFBUlc7QUFTaEMsSUFBQSxRQUFRLEVBQUUsa0JBQUMsQ0FBRCxFQUFPLENBQ2I7QUFDSDtBQVgrQixHQUFyQixDQUFmO0FBY0gsQ0FoQkQ7Ozs7Ozs7Ozs7QUNGQTs7Ozs7Ozs7Ozs7QUFHSSxzQkFBMEI7QUFBQSxRQUFkLE9BQWMsdUVBQUosRUFBSTs7QUFBQTs7QUFDdEIsSUFBQSxNQUFNLENBQUMsTUFBUCxDQUFjLElBQWQsRUFBb0IsaUJBQXBCLEVBQThCLE9BQTlCO0FBRUEsU0FBSyxTQUFMLEdBQWlCLFlBQWpCO0FBQ0EsU0FBSyxZQUFMLEdBQW9CLE1BQU0sQ0FBQyxXQUEzQjtBQUNBLFNBQUssWUFBTCxHQUFvQixLQUFLLFlBQUwsR0FBb0IsQ0FBeEM7QUFDQSxTQUFLLEdBQUwsR0FBVyxFQUFYO0FBR0EsU0FBSyxnQkFBTCxHQUF3QixLQUF4QjtBQUNBLFNBQUssV0FBTCxHQUFtQixLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLLFdBQUwsR0FBbUIsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBRUEsU0FBSyxRQUFMLEdBQWdCO0FBQ1osTUFBQSxNQUFNLEVBQUU7QUFDSixRQUFBLENBQUMsRUFBRSxDQURDO0FBRUosUUFBQSxDQUFDLEVBQUUsQ0FGQztBQUdKLFFBQUEsU0FBUyxFQUFFLElBSFA7QUFJSixRQUFBLEtBQUssRUFBRTtBQUpIO0FBREksS0FBaEI7QUFTQSxJQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLLFdBQXZDLEVBQW9ELEtBQXBEO0FBQ0g7Ozs7MkJBRU07QUFFSCxXQUFLLFVBQUw7QUFDSDs7O2tDQUVZLENBQUU7OztrQ0FDRixDQUFFOzs7aUNBRUY7QUFBQTs7QUFFVDtBQUNBLFdBQUssZ0JBQUwsR0FBd0IsS0FBSyxFQUFMLENBQVEsZ0JBQVIsaUJBQWtDLEtBQUssSUFBdkMsVUFBeEI7QUFFQSxXQUFLLGVBQUwsR0FBdUIsS0FBSyxlQUFMLENBQXFCLElBQXJCLENBQTBCLElBQTFCLENBQXZCO0FBQ0EsV0FBSyxnQkFBTCxDQUFzQixPQUF0QixDQUE4QixVQUFDLEVBQUQsRUFBUTtBQUNsQyxRQUFBLEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixLQUFJLENBQUMsZUFBbEMsRUFBbUQsS0FBbkQ7QUFDSCxPQUZELEVBTlMsQ0FVVDs7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNBLE1BQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DLEtBQUssUUFBekMsRUFBbUQsS0FBbkQsRUFaUyxDQWNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVIOzs7b0NBRWUsSyxFQUFPO0FBQ25CLE1BQUEsS0FBSyxDQUFDLGNBQU47QUFFQSxXQUFLLFFBQUwsQ0FBYztBQUNWLFFBQUEsT0FBTyxFQUFFO0FBQ0wsVUFBQSxVQUFVLEVBQUUsS0FBSyxDQUFDLGFBRGI7QUFFTCxVQUFBLFVBQVUsRUFBRSxLQUFLLENBQUMsYUFBTixDQUFvQixZQUFwQixDQUFpQyxhQUFqQztBQUZQO0FBREMsT0FBZDtBQU1ILEssQ0FFRDs7OztxQ0FFaUI7QUFBQTs7QUFFYixVQUFNLFNBQVMsR0FBRyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXZDO0FBQ0EsVUFBTSxZQUFZLEdBQUcsU0FBUyxHQUFHLEtBQUssWUFBdEM7QUFFQSxXQUFLLEdBQUwsQ0FBUyxPQUFULENBQWlCLFVBQUMsRUFBRCxFQUFLLENBQUwsRUFBVztBQUN4QixZQUFJLENBQUMsRUFBRSxDQUFDLE1BQVIsRUFBZ0I7QUFDWixjQUFLLFlBQVksSUFBSSxFQUFFLENBQUMsR0FBcEIsSUFBNkIsU0FBUyxHQUFHLEVBQUUsQ0FBQyxNQUFoRCxFQUF5RDtBQUNyRCxZQUFBLE1BQUksQ0FBQyxTQUFMLENBQWUsRUFBZixFQUFtQixDQUFuQjtBQUNIO0FBQ0o7O0FBQ0QsWUFBRyxFQUFFLENBQUMsTUFBTixFQUFjO0FBQ1YsY0FBSyxZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQW5CLElBQTRCLFNBQVMsR0FBRyxFQUFFLENBQUMsTUFBL0MsRUFBd0Q7QUFDcEQsWUFBQSxNQUFJLENBQUMsWUFBTCxDQUFrQixFQUFsQixFQUFzQixDQUF0QjtBQUNIO0FBQ0o7QUFDSixPQVhEO0FBYUEsV0FBSyxnQkFBTCxHQUF3QixLQUF4QjtBQUNIOzs7OEJBRVMsTyxFQUFTLEMsRUFBRztBQUVsQixXQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBWixHQUFxQixJQUFyQjtBQUNBLE1BQUEsT0FBTyxDQUFDLEVBQVIsQ0FBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLE9BQU8sU0FBaEM7O0FBRUEsVUFBSSxPQUFPLENBQUMsSUFBWixFQUFrQjtBQUNkLGFBQUssU0FBTCxHQUFpQixPQUFPLENBQUMsSUFBUixDQUFhLEtBQWIsQ0FBbUIsR0FBbkIsRUFBd0IsR0FBeEIsQ0FBNEIsVUFBQSxJQUFJO0FBQUEsaUJBQUksSUFBSSxDQUFDLElBQUwsRUFBSjtBQUFBLFNBQWhDLENBQWpCO0FBQ0EsWUFBSSxLQUFLLFNBQUwsQ0FBZSxNQUFmLElBQXlCLENBQTdCLEVBQWdDLEtBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsQ0FBZSxDQUFmLENBQWpCO0FBRWhDLFlBQU0sU0FBUyxHQUFHLElBQUksS0FBSixDQUFVLEtBQUssU0FBTCxHQUFpQixNQUEzQixDQUFsQjtBQUNBLFFBQUEsTUFBTSxDQUFDLGFBQVAsQ0FBcUIsU0FBckI7QUFDSDs7QUFFRCxVQUFJLENBQUMsT0FBTyxDQUFDLE1BQVQsSUFBbUIsT0FBTyxDQUFDLEtBQVIsS0FBa0IsS0FBckMsSUFBOEMsQ0FBQyxPQUFPLENBQUMsTUFBM0QsRUFBbUU7QUFDL0QsYUFBSyxHQUFMLENBQVMsTUFBVCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNIO0FBQ0o7OztpQ0FFWSxPLEVBQVMsQyxFQUFHO0FBRXJCLFVBQUcsT0FBTyxDQUFDLE1BQVIsSUFBa0IsT0FBTyxDQUFDLEtBQVIsS0FBa0IsU0FBdkMsRUFBa0Q7QUFDOUMsYUFBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLE1BQVosR0FBcUIsS0FBckI7QUFDQSxRQUFBLE9BQU8sQ0FBQyxFQUFSLENBQVcsU0FBWCxDQUFxQixNQUFyQixDQUE0QixPQUFPLFNBQW5DO0FBQ0g7QUFFSjs7O3FDQUVnQjtBQUFBOztBQUNiLFdBQUssR0FBTCxDQUFTLE9BQVQsQ0FBaUIsVUFBQyxFQUFELEVBQUssQ0FBTCxFQUFXO0FBQ3hCLFlBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFILENBQU0scUJBQU4sR0FBOEIsR0FBOUIsR0FBb0MsTUFBSSxDQUFDLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXJFOztBQUNBLFlBQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBSCxDQUFNLFlBQTNCO0FBRUEsUUFBQSxNQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsRUFBWSxHQUFaLEdBQWtCLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBM0I7QUFDQSxRQUFBLE1BQUksQ0FBQyxHQUFMLENBQVMsQ0FBVCxFQUFZLE1BQVosR0FBcUIsTUFBckI7QUFDSCxPQU5EO0FBUUEsV0FBSyxnQkFBTCxHQUF3QixLQUF4QjtBQUNIOzs7dUJBR0UsSyxFQUFPLEksRUFBTTtBQUFBOztBQUNaLE1BQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLEtBQUssU0FBTCxHQUFpQixLQUF6QyxFQUFnRCxZQUFNO0FBQ2xELGdCQUFRLEtBQVI7QUFDSSxlQUFLLE1BQUw7QUFDSSxtQkFBTyxJQUFJLENBQUMsTUFBSSxDQUFDLFNBQU4sQ0FBWDs7QUFDSjtBQUNJLG1CQUFPLElBQUksRUFBWDtBQUpSO0FBTUgsT0FQRCxFQU9HLEtBUEg7QUFRSDs7OzhCQUVTO0FBQUE7O0FBQ04sTUFBQSxNQUFNLENBQUMsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBSyxXQUExQyxFQUF1RCxLQUF2RDtBQUVBLFdBQUssZ0JBQUwsQ0FBc0IsT0FBdEIsQ0FBOEIsVUFBQyxFQUFELEVBQVE7QUFDbEMsUUFBQSxFQUFFLENBQUMsbUJBQUgsQ0FBdUIsT0FBdkIsRUFBZ0MsTUFBSSxDQUFDLGVBQXJDLEVBQXNELEtBQXREO0FBQ0gsT0FGRDtBQUdIOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUpMOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0ksc0JBQTBCO0FBQUE7O0FBQUEsUUFBZCxPQUFjLHVFQUFKLEVBQUk7O0FBQUE7O0FBRXRCLGtGQUFNLE9BQU47QUFDQSxJQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxNQUFLLFdBQXZDLEVBQW9ELEtBQXBEO0FBSHNCO0FBS3pCOzs7OzJCQUVNO0FBQ0gsV0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixDQUFyQixHQUF5QixNQUFNLENBQUMsT0FBaEM7QUFFQSxXQUFLLFdBQUw7QUFDQSxXQUFLLGNBQUw7O0FBRUE7QUFDSDs7O2tDQUVhO0FBQUE7O0FBQ1YsVUFBSSxLQUFLLEdBQUwsQ0FBUyxNQUFiLEVBQXFCO0FBQ2pCLGFBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBckIsR0FBeUIsTUFBTSxDQUFDLE9BQWhDOztBQUVBLFlBQUcsQ0FBQyxLQUFLLGdCQUFULEVBQTJCO0FBQ3ZCLFVBQUEscUJBQXFCLENBQUMsWUFBTTtBQUN4QixZQUFBLE1BQUksQ0FBQyxjQUFMO0FBQ0gsV0FGb0IsQ0FBckI7QUFHQSxlQUFLLGdCQUFMLEdBQXdCLElBQXhCO0FBQ0g7QUFDSjtBQUNKOzs7a0NBRWE7QUFBQTs7QUFDVixVQUFJLEtBQUssR0FBTCxDQUFTLE1BQWIsRUFBcUI7QUFDakIsYUFBSyxZQUFMLEdBQW9CLE1BQU0sQ0FBQyxXQUEzQjs7QUFFQSxZQUFHLENBQUMsS0FBSyxnQkFBVCxFQUEyQjtBQUN2QixVQUFBLHFCQUFxQixDQUFDLFlBQU07QUFDeEIsWUFBQSxNQUFJLENBQUMsY0FBTDtBQUNILFdBRm9CLENBQXJCO0FBR0EsZUFBSyxnQkFBTCxHQUF3QixJQUF4QjtBQUNIO0FBQ0o7QUFDSjs7O2tDQUVhO0FBQUE7O0FBQ1YsVUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFMLENBQVEsZ0JBQVIsQ0FBeUIsV0FBUyxLQUFLLElBQWQsR0FBbUIsR0FBNUMsQ0FBWjtBQUVBLE1BQUEsR0FBRyxDQUFDLE9BQUosQ0FBWSxVQUFDLEVBQUQsRUFBSyxDQUFMLEVBQVc7QUFDbkIsWUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQUgsQ0FBVyxNQUFJLENBQUMsSUFBTCxHQUFZLE9BQXZCLEtBQW1DLE1BQUksU0FBaEQ7O0FBQ0EsWUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLHFCQUFILEdBQTJCLEdBQTNCLEdBQWlDLE1BQUksQ0FBQyxRQUFMLENBQWMsTUFBZCxDQUFxQixDQUFoRTs7QUFDQSxZQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLFlBQXRCO0FBQ0EsWUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFILENBQVcsTUFBSSxDQUFDLElBQUwsR0FBWSxRQUF2QixDQUFELENBQVIsSUFBOEMsUUFBUSxDQUFDLE1BQUksQ0FBQyxNQUFOLENBQW5FO0FBQ0EsWUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLE9BQUgsQ0FBVyxNQUFJLENBQUMsSUFBTCxHQUFZLFFBQXZCLENBQWI7QUFDQSxZQUFJLElBQUksR0FBRyxFQUFFLENBQUMsT0FBSCxDQUFXLE1BQUksQ0FBQyxJQUFMLEdBQVksTUFBdkIsQ0FBWDs7QUFFQSxZQUFHLE1BQU0sSUFBSSxPQUFiLEVBQXNCO0FBQ2xCLFVBQUEsTUFBTSxHQUFHLEtBQVQ7QUFDSCxTQUZELE1BRU8sSUFBSSxNQUFNLElBQUksU0FBZCxFQUF5QjtBQUM1QixVQUFBLE1BQU0sR0FBRyxJQUFUO0FBQ0gsU0FGTSxNQUVBO0FBQ0gsVUFBQSxNQUFNLEdBQUcsTUFBSSxDQUFDLE1BQWQ7QUFDSDs7QUFFRCxRQUFBLE1BQUksQ0FBQyxHQUFMLENBQVMsQ0FBVCxJQUFjO0FBQ1YsVUFBQSxFQUFFLEVBQUUsRUFETTtBQUVWLG1CQUFPLEVBRkc7QUFHVixVQUFBLEdBQUcsRUFBRSxHQUFHLEdBQUcsTUFIRDtBQUlWLFVBQUEsTUFBTSxFQUFFLE1BSkU7QUFLVixVQUFBLE1BQU0sRUFBRSxNQUxFO0FBTVYsVUFBQSxNQUFNLEVBQUUsTUFORTtBQU9WLFVBQUEsTUFBTSxFQUFFLEtBUEU7QUFRVixVQUFBLElBQUksRUFBRTtBQVJJLFNBQWQ7QUFVSCxPQTFCRDtBQTRCSDtBQUVEOzs7Ozs7Ozs7NkJBTVMsTSxFQUFRO0FBQ2IsVUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQXZCO0FBRUEsVUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQXpCO0FBQ0EsVUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQXpCO0FBQ0EsVUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQTNCO0FBQ0EsVUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVIsR0FBdUIsT0FBTyxDQUFDLFlBQS9CLEdBQThDLENBQWpFO0FBQ0EsVUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsT0FBTyxDQUFDLEtBQXhCLEdBQWdDLEdBQTlDO0FBQ0EsVUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQXRCO0FBQ0EsVUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQXBCO0FBQ0EsVUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQXZCO0FBQ0EsVUFBSSxNQUFNLEdBQUcsQ0FBYixDQVhhLENBY2I7O0FBQ0EsVUFBSSxVQUFKLEVBQWdCO0FBQ1osWUFBSSxVQUFVLEdBQUcsRUFBakIsQ0FEWSxDQUdaOztBQUNBLFlBQUksZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLFlBQVgsQ0FBd0IsYUFBeEIsQ0FBdkI7QUFDQSxRQUFBLFVBQVUsR0FBRyxnQkFBZ0IsR0FBRyxnQkFBSCxHQUFzQixVQUFVLENBQUMsWUFBWCxDQUF3QixNQUF4QixDQUFuRCxDQUxZLENBT1o7O0FBQ0EsUUFBQSxVQUFVLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDLENBQXRDLENBQWI7QUFDSDs7QUFFRCxVQUFJLFVBQUosRUFBZ0I7QUFDWixRQUFBLFlBQVksR0FBRyxVQUFVLENBQUMscUJBQVgsR0FBbUMsR0FBbkMsR0FBeUMsWUFBeEQ7QUFDSDs7QUFFRCxVQUFJLFVBQUosRUFBZ0I7QUFDWixZQUFJLE9BQU0sR0FBRyxVQUFVLENBQUMsWUFBeEI7QUFDQSxRQUFBLFlBQVksR0FBRyxZQUFZLEdBQUcsT0FBOUI7QUFDSDs7QUFFRCxVQUFJLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2hCLFFBQUEsVUFBVSxHQUFJLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixNQUExQixFQUFrQyxDQUFsQyxDQUFkO0FBQ0gsT0FGRCxNQUVPLElBQUksUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQzFCLFFBQUEsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUF4QjtBQUVBLFFBQUEsVUFBVSxDQUFDLFlBQU07QUFDYixVQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixNQUExQixFQUFrQyxDQUFsQyxFQUFxQyxjQUFyQyxDQUFvRDtBQUFFLFlBQUEsUUFBUSxFQUFFLFFBQVo7QUFBc0IsWUFBQSxLQUFLLEVBQUUsS0FBN0I7QUFBb0MsWUFBQSxNQUFNLEVBQUU7QUFBNUMsV0FBcEQ7QUFDSCxTQUZTLEVBRVAsS0FGTyxDQUFWO0FBSUE7QUFDSDs7QUFFRCxNQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2IsUUFBQSxVQUFVLENBQUMsY0FBWCxDQUEwQjtBQUFFLFVBQUEsUUFBUSxFQUFFO0FBQVosU0FBMUI7QUFDSCxPQUZTLEVBRVAsS0FGTyxDQUFWO0FBSUg7Ozs4QkFHUztBQUNOOztBQUVBLE1BQUEsTUFBTSxDQUFDLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUssV0FBMUMsRUFBdUQsS0FBdkQ7QUFDSDs7OztFQTVJd0IsaUI7Ozs7Ozs7Ozs7OztBQ0g3Qjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGVBQXRCOzs7Ozs7O0FBR0ksc0JBQTBCO0FBQUE7O0FBQUEsUUFBZCxPQUFjLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3RCLGtGQUFNLE9BQU47QUFFQSxVQUFLLE9BQUwsR0FBZSxNQUFLLE9BQUwsR0FBZSxHQUE5QjtBQUNBLFVBQUssV0FBTCxHQUFtQixLQUFuQjtBQUNBLFVBQUssbUJBQUwsR0FBMkIsS0FBM0I7QUFDQSxVQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxVQUFLLGdCQUFMLEdBQXdCLEtBQXhCO0FBQ0EsVUFBSyxnQkFBTCxHQUF3QixFQUF4QjtBQVJzQjtBQVN6Qjs7OzsyQkFFTTtBQUFBOztBQUNILE1BQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxHQUFmLENBQW1CLEtBQUssV0FBeEI7QUFFQSxXQUFLLFFBQUw7QUFDSSxRQUFBLEVBQUUsRUFBRSxJQUFJLHlCQUFKLENBQWtCO0FBQ2xCLFVBQUEsZUFBZSxFQUFHLFNBQVMsQ0FBQyxRQUFWLENBQW1CLE9BQW5CLENBQTJCLEtBQTNCLElBQW9DLENBQUMsQ0FBdEMsR0FBMkMsQ0FBM0MsR0FBK0MsR0FEOUM7QUFFbEIsVUFBQSxlQUFlLEVBQUUsQ0FGQztBQUdsQixVQUFBLGlCQUFpQixFQUFFO0FBSEQsU0FBbEIsQ0FEUjtBQU1JLFFBQUEsS0FBSyxFQUFFO0FBQ0gsVUFBQSxDQUFDLEVBQUUsQ0FEQTtBQUVILFVBQUEsQ0FBQyxFQUFFO0FBRkE7QUFOWCxTQVVPLEtBQUssUUFWWjtBQWFBLFdBQUssUUFBTCxDQUFjLEVBQWQsQ0FBaUIsRUFBakIsQ0FBb0IsVUFBQyxDQUFELEVBQU87QUFDdkIsWUFBSSxDQUFDLE1BQUksQ0FBQyxTQUFOLElBQW1CLENBQUMsTUFBSSxDQUFDLG1CQUE3QixFQUFrRDtBQUM5QyxVQUFBLHFCQUFxQixDQUFDLFlBQU07QUFDeEIsZ0JBQUksQ0FBQyxNQUFJLENBQUMsV0FBVixFQUF1QixNQUFJLENBQUMsY0FBTDs7QUFFdkIsWUFBQSxNQUFJLENBQUMsV0FBTCxDQUFpQixDQUFqQjtBQUNILFdBSm9CLENBQXJCO0FBS0EsVUFBQSxNQUFJLENBQUMsU0FBTCxHQUFpQixJQUFqQjtBQUNIOztBQUNELFFBQUEsTUFBSSxDQUFDLFNBQUwsR0FBaUIsS0FBakI7QUFDSCxPQVZEO0FBWUEsV0FBSyxjQUFMO0FBQ0EsV0FBSyxhQUFMO0FBRUEsV0FBSyxXQUFMO0FBQ0EsV0FBSyxXQUFMO0FBQ0EsV0FBSyxjQUFMO0FBQ0EsV0FBSyxpQkFBTCxDQUF1QixJQUF2Qjs7QUFFQTtBQUVIO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFlUyxNLEVBQVE7QUFBQTs7QUFFYixVQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBdkI7QUFFQSxVQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBekI7QUFDQSxVQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBM0I7QUFDQSxVQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBM0I7QUFDQSxVQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBUixHQUF1QixPQUFPLENBQUMsWUFBL0IsR0FBOEMsQ0FBakU7QUFDQSxVQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBdEI7QUFDQSxVQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBdEI7QUFDQSxVQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBekIsQ0FWYSxDQVliOztBQUNBLFVBQUksVUFBSixFQUFnQjtBQUNaLFlBQUksVUFBVSxHQUFHLEVBQWpCLENBRFksQ0FHWjs7QUFDQSxZQUFJLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxZQUFYLENBQXdCLGFBQXhCLENBQXZCO0FBQ0EsUUFBQSxVQUFVLEdBQUcsZ0JBQWdCLEdBQUcsZ0JBQUgsR0FBc0IsVUFBVSxDQUFDLFlBQVgsQ0FBd0IsTUFBeEIsQ0FBbkQsQ0FMWSxDQU9aOztBQUNBLFFBQUEsVUFBVSxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixVQUExQixFQUFzQyxDQUF0QyxDQUFiO0FBQ0gsT0F0QlksQ0F3QmI7OztBQUNBLFVBQUksVUFBSixFQUFnQjtBQUNaO0FBQ0EsWUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLHFCQUFYLEVBQXRCO0FBQ0EsWUFBTSxtQkFBbUIsR0FBRyxhQUFhLENBQUMsR0FBZCxHQUFvQixLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXJFLENBSFksQ0FLWjs7QUFDQSxZQUFNLGFBQWEsR0FBRyxzQkFBVyxVQUFYLENBQXRCO0FBQ0EsUUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLGFBQVo7QUFDQSxZQUFNLGFBQWEsR0FBRyxhQUFhLENBQUMsSUFBZCxDQUFtQixVQUFBLFNBQVM7QUFBQSxpQkFBSSxNQUFJLENBQUMsUUFBTCxDQUFjLElBQWQsQ0FBbUIsVUFBQSxPQUFPO0FBQUEsbUJBQUksT0FBTyxDQUFDLE9BQVIsSUFBbUIsU0FBdkI7QUFBQSxXQUExQixDQUFKO0FBQUEsU0FBNUIsQ0FBdEI7QUFDQSxZQUFJLG1CQUFtQixHQUFHLENBQTFCOztBQUNBLFlBQUcsYUFBSCxFQUFrQjtBQUNkLFVBQUEsbUJBQW1CLEdBQUcsNkJBQWEsYUFBYixFQUE0QixDQUFsRCxDQURjLENBQ3NDO0FBQ3ZELFNBWlcsQ0FjWjs7O0FBQ0EsUUFBQSxZQUFZLEdBQUcsbUJBQW1CLEdBQUcsWUFBdEIsR0FBcUMsbUJBQXBEO0FBQ0gsT0F6Q1ksQ0EyQ2I7OztBQUNBLFVBQUksVUFBSixFQUFnQjtBQUNaLFlBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxZQUF4QjtBQUNBLFFBQUEsWUFBWSxHQUFHLFlBQVksR0FBRyxNQUE5QjtBQUNILE9BL0NZLENBaURiOzs7QUFDQSxVQUFJLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2hCLFFBQUEsWUFBWSxHQUFHLENBQWY7QUFDSCxPQUZELE1BRU8sSUFBSSxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDMUIsUUFBQSxZQUFZLEdBQUcsS0FBSyxRQUFMLENBQWMsS0FBN0I7QUFDSCxPQXREWSxDQXdEYjs7O0FBQ0EsTUFBQSxVQUFVLENBQUMsWUFBTTtBQUNiLFFBQUEsTUFBSSxDQUFDLFFBQUwsQ0FBYyxLQUFkLENBQW9CLENBQXBCLEdBQXdCLFlBQXhCLENBRGEsQ0FDeUI7QUFFdEM7O0FBQ0EsUUFBQSxNQUFJLENBQUMsV0FBTCxHQUFtQixJQUFuQjs7QUFDQSxRQUFBLE1BQUksQ0FBQyxXQUFMOztBQUNBLFFBQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxHQUFmLENBQW1CLE1BQUksQ0FBQyxvQkFBeEI7QUFDSCxPQVBTLEVBT1AsS0FQTyxDQUFWO0FBUUg7OztxQ0FFZ0I7QUFDYixXQUFLLFFBQUwsQ0FBYyxLQUFkLEdBQXNCLEtBQUssRUFBTCxDQUFRLFlBQVIsR0FBdUIsS0FBSyxZQUFsRDtBQUNIOzs7cUNBRWdCO0FBQ2IsV0FBSyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsV0FBSyxXQUFMO0FBQ0EsTUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLEdBQWYsQ0FBbUIsS0FBSyxjQUF4QjtBQUNIOzs7b0NBRWU7QUFDWixXQUFLLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEdBQXlCLElBQUksQ0FBQyxLQUFMLENBQVcsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixDQUFoQyxDQUF6QjtBQUNBLE1BQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxNQUFmLENBQXNCLEtBQUssY0FBM0I7QUFDSDs7O2tDQUVhO0FBQUE7O0FBQ1YsVUFBSSxLQUFLLFdBQUwsSUFBb0IsS0FBSyxtQkFBN0IsRUFBa0Q7QUFDOUMsWUFBSSxDQUFDLEtBQUssZ0JBQVYsRUFBNEI7QUFDeEIsVUFBQSxxQkFBcUIsQ0FBQztBQUFBLG1CQUFNLE1BQUksQ0FBQyxXQUFMLEVBQU47QUFBQSxXQUFELENBQXJCO0FBQ0EsZUFBSyxnQkFBTCxHQUF3QixJQUF4QjtBQUNIOztBQUVELFlBQU0sUUFBUSxHQUFJLElBQUksQ0FBQyxHQUFMLENBQVMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUFwQixHQUF3QixLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXRELENBQWxCOztBQUNBLFlBQUssUUFBUSxHQUFHLENBQVgsSUFBZ0IsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUFwQixJQUF5QixDQUExQyxJQUFpRCxRQUFRLEdBQUcsR0FBWCxJQUFrQixLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLENBQXBCLElBQXlCLENBQWhHLEVBQW9HO0FBQ2hHLGVBQUssYUFBTDtBQUNIOztBQUVELGFBQUssWUFBTDs7QUFFQSxhQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssUUFBTCxDQUFjLE1BQWQsR0FBdUIsQ0FBcEMsRUFBdUMsQ0FBQyxJQUFJLENBQTVDLEVBQStDLENBQUMsRUFBaEQsRUFBb0Q7QUFDaEQsY0FBRyxLQUFLLFFBQUwsQ0FBYyxDQUFkLEVBQWlCLFVBQWpCLElBQWdDLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBckIsR0FBeUIsS0FBSyxRQUFMLENBQWMsQ0FBZCxFQUFpQixNQUExQyxJQUFvRCxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEdBQXlCLEtBQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsS0FBakksRUFBeUk7QUFDckksaUJBQUssU0FBTCxDQUFlLEtBQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsRUFBaEMsRUFBbUMsQ0FBbkMsRUFBcUMsQ0FBQyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQTNEO0FBQ0EsaUJBQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsRUFBakIsQ0FBb0IsS0FBcEIsQ0FBMEIsVUFBMUIsR0FBdUMsU0FBdkM7QUFDQSxpQkFBSyxRQUFMLENBQWMsQ0FBZCxFQUFpQixNQUFqQixHQUEwQixJQUExQjtBQUNILFdBSkQsTUFJTztBQUNILGlCQUFLLFFBQUwsQ0FBYyxDQUFkLEVBQWlCLEVBQWpCLENBQW9CLEtBQXBCLENBQTBCLFVBQTFCLEdBQXVDLFFBQXZDO0FBQ0EsaUJBQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsTUFBakIsR0FBMEIsS0FBMUI7QUFDSDtBQUNKOztBQUVELFlBQUksS0FBSyxZQUFULEVBQXVCO0FBQ25CLGVBQUssWUFBTDtBQUNIOztBQUVELFlBQUksS0FBSyxRQUFULEVBQW1CO0FBQ2YsZUFBSyxRQUFMO0FBQ0EsZUFBSyxTQUFMLEdBQWlCLElBQUksQ0FBQyxHQUFMLEVBQWpCO0FBQ0g7O0FBRUQsYUFBSyxjQUFMO0FBQ0EsYUFBSyxpQkFBTCxHQWxDOEMsQ0FvQzlDOztBQUNBLFlBQU0sb0JBQW9CLEdBQUksS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixDQUFyQixHQUF5QixLQUFLLFFBQUwsQ0FBYyxLQUF4QyxHQUFpRCxLQUFLLGNBQW5GO0FBQ0EsYUFBSyxTQUFMLENBQWUsS0FBSyxTQUFwQixFQUE4QixDQUE5QixFQUFnQyxvQkFBaEM7QUFFQSxhQUFLLGdCQUFMLEdBQXdCLEtBQXhCO0FBQ0g7QUFDSjs7O2tDQUVhO0FBQ1YsV0FBSyxZQUFMLEdBQW9CLE1BQU0sQ0FBQyxXQUEzQjtBQUNBLFdBQUssWUFBTCxHQUFvQixLQUFLLFlBQUwsR0FBb0IsQ0FBeEM7QUFFQSxXQUFLLGNBQUw7QUFDQSxXQUFLLFdBQUw7QUFDQSxXQUFLLFdBQUw7QUFDQSxXQUFLLGNBQUw7QUFDQSxXQUFLLFlBQUw7QUFDQSxXQUFLLGlCQUFMLENBQXVCLElBQXZCO0FBRUg7OztnQ0FFVyxDLEVBQUc7QUFDWCxXQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLENBQXBCLElBQXlCLENBQUMsQ0FBQyxNQUEzQjtBQUNBLFVBQUksS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUFwQixHQUF3QixDQUE1QixFQUErQixLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLENBQXBCLEdBQXdCLENBQXhCO0FBQy9CLFVBQUksS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUFwQixHQUF3QixLQUFLLFFBQUwsQ0FBYyxLQUExQyxFQUFpRCxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLENBQXBCLEdBQXdCLEtBQUssUUFBTCxDQUFjLEtBQXRDO0FBQ3BEOzs7bUNBRWM7QUFDWCxVQUFJLEtBQUssV0FBVCxFQUFzQjtBQUNsQixhQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEdBQXlCLGlCQUFLLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBMUIsRUFBNkIsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUFqRCxFQUFvRCxLQUFLLE9BQXpELENBQXpCO0FBQ0gsT0FGRCxNQUVPLElBQUksS0FBSyxtQkFBVCxFQUE4QjtBQUNqQyxhQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEdBQXlCLGlCQUFLLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBMUIsRUFBNkIsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUFqRCxFQUFxRCxLQUFLLE9BQUwsR0FBZSxDQUFwRSxDQUF6QjtBQUNILE9BRk0sTUFFQTtBQUNILGFBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBckIsR0FBeUIsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUE3QztBQUNIO0FBQ0o7OzttQ0FFYztBQUNYLFVBQUksS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUFwQixHQUF3QixLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQWpELEVBQW9EO0FBQ2hELFlBQUksS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixTQUFyQixLQUFtQyxNQUF2QyxFQUErQztBQUMzQyxlQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLFNBQXJCLEdBQWlDLE1BQWpDO0FBQ0g7QUFDSixPQUpELE1BSU8sSUFBSSxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLENBQXBCLEdBQXdCLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBakQsRUFBb0Q7QUFDdkQsWUFBSSxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLFNBQXJCLEtBQW1DLElBQXZDLEVBQTZDO0FBQ3pDLGVBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsU0FBckIsR0FBaUMsSUFBakM7QUFDSDtBQUNKO0FBQ0o7OzsrQkFFVTtBQUNQLFVBQUksS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUFwQixJQUF5QixLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQWxELEVBQXFEO0FBQ2pELGFBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckIsR0FBNkIsQ0FBQyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLENBQXBCLEdBQXdCLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBOUMsS0FBb0QsSUFBSSxDQUFDLEdBQUwsS0FBYSxLQUFLLFNBQXRFLENBQTdCO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixHQUE2QixDQUE3QjtBQUNIO0FBQ0osSyxDQUVEOzs7O29DQUNnQjtBQUFBOztBQUNaLFdBQUssZ0JBQUwsR0FBd0IsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBeEI7QUFDQSxXQUFLLFNBQUwsR0FBaUIsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBakI7QUFDQSxXQUFLLGdCQUFMLENBQXNCLFNBQXRCLENBQWdDLEdBQWhDLFdBQXVDLEtBQUssa0JBQTVDO0FBQ0EsV0FBSyxTQUFMLENBQWUsU0FBZixDQUF5QixHQUF6QixXQUFnQyxLQUFLLGtCQUFyQztBQUVBLFdBQUssZ0JBQUwsQ0FBc0IsTUFBdEIsQ0FBNkIsS0FBSyxTQUFsQztBQUNBLE1BQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxNQUFkLENBQXFCLEtBQUssZ0JBQTFCO0FBQ0EsV0FBSyxTQUFMLENBQWUsS0FBZixDQUFxQixNQUFyQixhQUFrQyxNQUFNLENBQUMsV0FBUCxHQUFxQixNQUFNLENBQUMsV0FBN0IsR0FBNEMsS0FBSyxRQUFMLENBQWMsS0FBM0Y7QUFDQSxXQUFLLGNBQUwsR0FBc0IsTUFBTSxDQUFDLFdBQVAsR0FBcUIsS0FBSyxTQUFMLENBQWUscUJBQWYsR0FBdUMsTUFBbEY7QUFFQSxXQUFLLFNBQUwsQ0FBZSxnQkFBZixDQUFnQyxXQUFoQyxFQUE0QyxVQUFDLENBQUQ7QUFBQSxlQUFPLE1BQUksQ0FBQyxZQUFMLENBQWtCLENBQWxCLENBQVA7QUFBQSxPQUE1QztBQUNBLE1BQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFNBQXhCLEVBQWtDLFVBQUMsQ0FBRDtBQUFBLGVBQU8sTUFBSSxDQUFDLGdCQUFMLENBQXNCLENBQXRCLENBQVA7QUFBQSxPQUFsQztBQUNBLE1BQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFdBQXhCLEVBQW9DLFVBQUMsQ0FBRDtBQUFBLGVBQU8sTUFBSSxDQUFDLGFBQUwsQ0FBbUIsQ0FBbkIsQ0FBUDtBQUFBLE9BQXBDO0FBRUg7OztzQ0FFaUI7QUFDZCxXQUFLLFNBQUwsQ0FBZSxLQUFmLENBQXFCLE1BQXJCLGFBQWtDLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLE1BQU0sQ0FBQyxXQUE3QixHQUE0QyxLQUFLLFFBQUwsQ0FBYyxLQUEzRjtBQUNBLFdBQUssY0FBTCxHQUFzQixNQUFNLENBQUMsV0FBUCxHQUFxQixLQUFLLFNBQUwsQ0FBZSxxQkFBZixHQUF1QyxNQUFsRjtBQUNIOzs7dUNBRWtCO0FBQUE7O0FBQ2YsV0FBSyxTQUFMLENBQWUsbUJBQWYsQ0FBbUMsV0FBbkMsRUFBK0MsVUFBQyxDQUFEO0FBQUEsZUFBTyxNQUFJLENBQUMsWUFBTCxDQUFrQixDQUFsQixDQUFQO0FBQUEsT0FBL0M7QUFDQSxNQUFBLE1BQU0sQ0FBQyxtQkFBUCxDQUEyQixTQUEzQixFQUFxQyxVQUFDLENBQUQ7QUFBQSxlQUFPLE1BQUksQ0FBQyxnQkFBTCxDQUFzQixDQUF0QixDQUFQO0FBQUEsT0FBckM7QUFDQSxNQUFBLE1BQU0sQ0FBQyxtQkFBUCxDQUEyQixXQUEzQixFQUF1QyxVQUFDLENBQUQ7QUFBQSxlQUFPLE1BQUksQ0FBQyxhQUFMLENBQW1CLENBQW5CLENBQVA7QUFBQSxPQUF2QztBQUNIOzs7aUNBRVksQyxFQUFHO0FBQ1osV0FBSyxtQkFBTCxHQUEyQixJQUEzQjtBQUNBLFdBQUssV0FBTDtBQUNBLE1BQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxNQUFmLENBQXNCLEtBQUssb0JBQTNCO0FBQ0EsTUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLEdBQWYsQ0FBbUIsS0FBSyxtQkFBeEI7QUFDSDs7O3FDQUVnQixDLEVBQUc7QUFDaEIsV0FBSyxtQkFBTCxHQUEyQixLQUEzQjtBQUNBLE1BQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxHQUFmLENBQW1CLEtBQUssb0JBQXhCO0FBQ0EsTUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLE1BQWYsQ0FBc0IsS0FBSyxtQkFBM0I7QUFDSDs7O2tDQUVhLEMsRUFBRztBQUFBOztBQUNiLFVBQUksQ0FBQyxLQUFLLFNBQU4sSUFBbUIsS0FBSyxtQkFBNUIsRUFBaUQ7QUFDN0MsUUFBQSxxQkFBcUIsQ0FBQyxZQUFNO0FBQ3hCLFVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxNQUFNLENBQUMsV0FBbkI7QUFDQSxjQUFJLENBQUMsR0FBSSxDQUFDLENBQUMsT0FBRixHQUFZLEdBQVosR0FBbUIsTUFBTSxDQUFDLFdBQTNCLEdBQTJDLE1BQUksQ0FBQyxRQUFMLENBQWMsS0FBekQsR0FBaUUsR0FBekU7O0FBRUEsY0FBRyxDQUFDLEdBQUcsQ0FBSixJQUFTLENBQUMsR0FBRyxNQUFJLENBQUMsUUFBTCxDQUFjLEtBQTlCLEVBQXFDO0FBQ2pDLFlBQUEsTUFBSSxDQUFDLFFBQUwsQ0FBYyxLQUFkLENBQW9CLENBQXBCLEdBQXdCLENBQXhCO0FBQ0g7QUFDSixTQVBvQixDQUFyQjtBQVFBLGFBQUssU0FBTCxHQUFpQixJQUFqQjtBQUNIOztBQUNELFdBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNILEssQ0FHRDs7OztrQ0FDYztBQUFBOztBQUNWLFdBQUssR0FBTCxHQUFXLEVBQVg7QUFDQSxXQUFLLGdCQUFMLEdBQXdCLEVBQXhCO0FBRUEsV0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFDLE9BQUQsRUFBVSxDQUFWLEVBQWdCO0FBRWxDLFlBQU0sR0FBRyxHQUFHLE1BQUksQ0FBQyxRQUFMLENBQWMsQ0FBZCxFQUFpQixFQUFqQixDQUFvQixnQkFBcEIsaUJBQThDLE1BQUksQ0FBQyxJQUFuRCxPQUFaOztBQUVBLFFBQUEsR0FBRyxDQUFDLE9BQUosQ0FBWSxVQUFDLEVBQUQsRUFBSyxDQUFMLEVBQVc7QUFDbkIsY0FBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQUgsQ0FBVyxNQUFJLENBQUMsSUFBTCxHQUFZLE9BQXZCLEtBQW1DLE1BQUksU0FBaEQ7QUFDQSxjQUFJLEdBQUo7QUFDQSxjQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQUgsQ0FBVyxNQUFJLENBQUMsSUFBTCxHQUFZLFFBQXZCLENBQUQsQ0FBUixJQUE4QyxRQUFRLENBQUMsTUFBSSxDQUFDLE1BQU4sQ0FBbkU7QUFDQSxjQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsT0FBSCxDQUFXLE1BQUksQ0FBQyxJQUFMLEdBQVksUUFBdkIsQ0FBYjtBQUNBLGNBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxPQUFILENBQVcsTUFBSSxDQUFDLElBQUwsR0FBWSxNQUF2QixDQUFYO0FBQ0EsY0FBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLE9BQUgsQ0FBVyxNQUFJLENBQUMsSUFBTCxHQUFZLFVBQXZCLENBQWY7QUFDQSxjQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBSCxDQUFXLE1BQUksQ0FBQyxJQUFMLEdBQVksT0FBdkIsQ0FBWjtBQUNBLGNBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxPQUFILENBQVcsTUFBSSxDQUFDLElBQUwsR0FBWSxXQUF2QixDQUFoQjtBQUNBLGNBQUksTUFBTSxHQUFHLE9BQU8sRUFBRSxDQUFDLE9BQUgsQ0FBVyxNQUFJLENBQUMsSUFBTCxHQUFZLFFBQXZCLENBQVAsS0FBNEMsUUFBekQ7QUFDQSxjQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBSCxDQUFXLE1BQUksQ0FBQyxJQUFMLEdBQVksT0FBdkIsSUFBa0MsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFILENBQVcsTUFBSSxDQUFDLElBQUwsR0FBWSxPQUF2QixDQUFELENBQVYsR0FBNEMsRUFBOUUsR0FBbUYsS0FBL0Y7QUFDQSxjQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsT0FBSCxDQUFXLE1BQUksQ0FBQyxJQUFMLEdBQVksUUFBdkIsQ0FBYjtBQUNBLGNBQUksUUFBSjs7QUFFQSxjQUFHLE1BQU0sS0FBSyxTQUFkLEVBQXlCO0FBQ3JCLFlBQUEsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULFdBQTBCLE1BQTFCLEVBQVg7QUFDSCxXQUZELE1BRU87QUFDSCxZQUFBLFFBQVEsR0FBRyxFQUFYO0FBQ0g7O0FBRUQsY0FBRyxDQUFDLE1BQUksQ0FBQyxRQUFMLENBQWMsQ0FBZCxFQUFpQixNQUFyQixFQUE2QjtBQUN6QixZQUFBLEdBQUcsR0FBRyxRQUFRLENBQUMscUJBQVQsR0FBaUMsR0FBakMsR0FBdUMsNkJBQWEsTUFBSSxDQUFDLFFBQUwsQ0FBYyxDQUFkLEVBQWlCLEVBQTlCLEVBQWtDLENBQXpFLEdBQTZFLDZCQUFhLFFBQWIsRUFBdUIsQ0FBMUc7QUFDSCxXQUZELE1BRU87QUFDSCxZQUFBLEdBQUcsR0FBRyxRQUFRLENBQUMscUJBQVQsR0FBaUMsR0FBakMsR0FBdUMsTUFBSSxDQUFDLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQTVELEdBQWdFLDZCQUFhLFFBQWIsRUFBdUIsQ0FBN0Y7QUFDSDs7QUFFRCxjQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLFlBQTVCO0FBQ0EsY0FBSSxNQUFNLEdBQUksQ0FBQyxNQUFNLEdBQUcsR0FBVixJQUFpQixDQUFsQixHQUF1QixHQUFwQzs7QUFFQSxjQUFHLE1BQUgsRUFBVztBQUNQLFlBQUEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFkO0FBQ0EsWUFBQSxNQUFNLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxZQUFmLEdBQThCLE1BQU0sQ0FBQyxXQUFyQyxHQUFtRCxFQUFFLENBQUMsWUFBL0Q7QUFDQSxZQUFBLE1BQU0sR0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFWLElBQWlCLENBQWxCLEdBQXVCLEdBQWhDO0FBQ0g7O0FBR0QsY0FBRyxNQUFNLElBQUksT0FBYixFQUFzQjtBQUNsQixZQUFBLE1BQU0sR0FBRyxLQUFUO0FBQ0gsV0FGRCxNQUVPLElBQUksTUFBTSxJQUFJLFNBQWQsRUFBeUI7QUFDNUIsWUFBQSxNQUFNLEdBQUcsSUFBVDtBQUNILFdBRk0sTUFFQTtBQUNILFlBQUEsTUFBTSxHQUFHLE1BQUksQ0FBQyxNQUFkO0FBQ0g7O0FBRUQsY0FBTSxRQUFRLEdBQUc7QUFDYixZQUFBLEVBQUUsRUFBRixFQURhO0FBRWIscUJBQU8sRUFGTTtBQUdiLFlBQUEsR0FBRyxFQUFFLEdBQUcsR0FBRyxNQUhFO0FBSWIsWUFBQSxNQUFNLEVBQU4sTUFKYTtBQUtiLFlBQUEsTUFBTSxFQUFOLE1BTGE7QUFNYixZQUFBLE1BQU0sRUFBTixNQU5hO0FBT2IsWUFBQSxNQUFNLEVBQU4sTUFQYTtBQVFiLFlBQUEsTUFBTSxFQUFFLEtBUks7QUFTYixZQUFBLElBQUksRUFBSixJQVRhO0FBVWIsWUFBQSxLQUFLLEVBQUwsS0FWYTtBQVdiLFlBQUEsS0FBSyxFQUFMLEtBWGE7QUFZYixZQUFBLFFBQVEsRUFBUixRQVphO0FBYWIsWUFBQSxNQUFNLEVBQU4sTUFiYTtBQWNiLFlBQUEsU0FBUyxFQUFULFNBZGE7QUFlYixZQUFBLE1BQU0sRUFBTjtBQWZhLFdBQWpCOztBQWtCQSxVQUFBLE1BQUksQ0FBQyxHQUFMLENBQVMsSUFBVCxDQUFjLFFBQWQ7O0FBRUEsY0FBRyxLQUFLLEtBQUssS0FBVixJQUFtQixNQUF0QixFQUE4QjtBQUMxQixZQUFBLE1BQUksQ0FBQyxnQkFBTCxDQUFzQixJQUF0QixDQUEyQixRQUEzQjtBQUNIO0FBQ0osU0FuRUQ7QUFxRUgsT0F6RUQ7QUEyRUg7OztrQ0FFYTtBQUFBOztBQUNWLFdBQUssUUFBTCxHQUFnQixFQUFoQjtBQUVBLFVBQU0sUUFBUSxHQUFHLEtBQUssRUFBTCxDQUFRLGdCQUFSLGlCQUFrQyxLQUFLLElBQXZDLGVBQWpCO0FBRUEsTUFBQSxRQUFRLENBQUMsT0FBVCxDQUFpQixVQUFDLE9BQUQsRUFBVSxDQUFWLEVBQWdCO0FBRTdCLFlBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxxQkFBUixHQUFnQyxHQUFoQyxHQUF1QyxNQUFNLENBQUMsV0FBUCxHQUFxQixHQUE1RCxHQUFtRSw2QkFBYSxPQUFiLEVBQXNCLENBQXRHO0FBQ0EsWUFBSSxLQUFLLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQyxxQkFBUixHQUFnQyxNQUF6QyxHQUFtRCxNQUFNLENBQUMsV0FBUCxHQUFxQixDQUFwRjtBQUNBLFlBQUksVUFBVSxHQUFHLE9BQU8sT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsTUFBSSxDQUFDLElBQUwsR0FBWSxZQUE1QixDQUFQLEtBQXFELFFBQXRFO0FBRUEsWUFBSSxNQUFNLEdBQUcsS0FBYjs7QUFDQSxZQUFHLE1BQUksQ0FBQyxRQUFMLENBQWMsTUFBZCxDQUFxQixDQUFyQixJQUEwQixNQUExQixJQUFvQyxNQUFJLENBQUMsUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBckIsSUFBMEIsS0FBakUsRUFBd0U7QUFDcEUsVUFBQSxNQUFNLEdBQUcsSUFBVDtBQUNIOztBQUVELFlBQU0sYUFBYSxHQUFHO0FBQ2xCLFVBQUEsRUFBRSxFQUFFLE9BRGM7QUFFbEIsVUFBQSxNQUFNLEVBQUUsTUFGVTtBQUdsQixVQUFBLEtBQUssRUFBRSxLQUhXO0FBSWxCLFVBQUEsTUFBTSxFQUFFLE1BSlU7QUFLbEIsVUFBQSxVQUFVLEVBQUU7QUFMTSxTQUF0QjtBQVFBLFFBQUEsTUFBSSxDQUFDLFFBQUwsQ0FBYyxDQUFkLElBQW1CLGFBQW5CO0FBRUgsT0FyQkQ7QUFzQkg7Ozs4QkFFUyxPLEVBQVMsQyxFQUFHLEMsRUFBRyxLLEVBQU87QUFDNUIsVUFBSSxTQUFKOztBQUVBLFVBQUcsQ0FBQyxLQUFKLEVBQVc7QUFDUCxRQUFBLFNBQVMsNEJBQXFCLENBQXJCLGNBQTBCLENBQTFCLE1BQVQ7QUFFSCxPQUhELE1BR087QUFDSCxZQUFJLEtBQUssR0FBRyw2QkFBYSxPQUFiLENBQVo7QUFDQSxZQUFJLEtBQUssR0FBRyxpQkFBSyxLQUFLLENBQUMsQ0FBWCxFQUFjLENBQWQsRUFBaUIsS0FBakIsQ0FBWjtBQUNBLFlBQUksS0FBSyxHQUFHLGlCQUFLLEtBQUssQ0FBQyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixLQUFqQixDQUFaO0FBRUEsUUFBQSxTQUFTLDRCQUFxQixLQUFyQixjQUE4QixLQUE5QixNQUFUO0FBQ0g7O0FBRUQsTUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLGVBQWQsR0FBZ0MsU0FBaEM7QUFDQSxNQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsV0FBZCxHQUE0QixTQUE1QjtBQUNBLE1BQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxTQUFkLEdBQTBCLFNBQTFCO0FBQ0g7OztzQ0FFaUIsUSxFQUFVO0FBQUE7O0FBRXhCLFVBQU0sWUFBWSxHQUFHLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBckIsR0FBeUIsS0FBSyxZQUFuRDtBQUNBLFVBQU0sWUFBWSxHQUFHLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBckIsR0FBeUIsS0FBSyxZQUFuRDtBQUVBLFdBQUssZ0JBQUwsQ0FBc0IsT0FBdEIsQ0FBOEIsVUFBQyxPQUFELEVBQVUsQ0FBVixFQUFnQjtBQUMxQyxZQUFJLGlCQUFpQixHQUFHLEtBQXhCOztBQUVBLFlBQUksUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQXpCLEVBQWtDO0FBQzlCLFVBQUEsaUJBQWlCLEdBQUcsQ0FBcEI7QUFDSDs7QUFFRCxZQUFHLE9BQU8sQ0FBQyxNQUFYLEVBQW1CO0FBQ2Ysa0JBQVEsT0FBTyxDQUFDLFFBQWhCO0FBQ0ksaUJBQUssS0FBTDtBQUNJLGNBQUEsaUJBQWlCLEdBQUcsT0FBSSxDQUFDLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEdBQXlCLENBQUMsT0FBTyxDQUFDLEtBQXREO0FBQ0o7O0FBRUEsaUJBQUssUUFBTDtBQUNJLGNBQUEsaUJBQWlCLEdBQUcsQ0FBQyxPQUFJLENBQUMsUUFBTCxDQUFjLEtBQWQsR0FBc0IsWUFBdEIsR0FBcUMsT0FBSSxDQUFDLFlBQTNDLElBQTJELE9BQU8sQ0FBQyxLQUF2RjtBQUNKOztBQUVBO0FBQ0ksY0FBQSxpQkFBaUIsR0FBRyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBeEIsSUFBa0MsQ0FBQyxPQUFPLENBQUMsS0FBL0Q7QUFDSjtBQVhKO0FBY0g7O0FBRUQsWUFBRyxPQUFPLENBQUMsTUFBWCxFQUFtQjtBQUNmLGNBQUcsT0FBTyxDQUFDLE1BQVgsRUFBbUI7QUFDZixZQUFBLGlCQUFpQixHQUFHLE9BQUksQ0FBQyxRQUFMLENBQWMsTUFBZCxDQUFxQixDQUFyQixHQUF5QixPQUFPLENBQUMsR0FBakMsR0FBdUMsTUFBTSxDQUFDLFdBQWxFO0FBQ0gsV0FGRCxNQUVPO0FBQ0gsZ0JBQUcsT0FBSSxDQUFDLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEdBQXlCLE9BQU8sQ0FBQyxHQUFwQyxFQUF5QztBQUNyQyxjQUFBLGlCQUFpQixHQUFHLENBQXBCO0FBQ0g7O0FBQ0QsZ0JBQUcsT0FBSSxDQUFDLFFBQUwsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEdBQXlCLE9BQU8sQ0FBQyxNQUFwQyxFQUE0QztBQUN4QyxjQUFBLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLE9BQU8sQ0FBQyxZQUE3QztBQUNIO0FBQ0o7QUFDSjs7QUFFRCxZQUFHLGlCQUFpQixLQUFLLEtBQXpCLEVBQWdDO0FBQzVCLGNBQUcsT0FBTyxDQUFDLFNBQVIsS0FBc0IsWUFBekIsRUFBdUM7QUFDbkMsWUFBQSxPQUFJLENBQUMsU0FBTCxDQUFlLE9BQU8sQ0FBQyxFQUF2QixFQUEyQixpQkFBM0IsRUFBOEMsQ0FBOUMsRUFBa0QsUUFBUSxHQUFHLEtBQUgsR0FBVyxPQUFPLENBQUMsS0FBN0U7QUFDSCxXQUZELE1BRU87QUFDSCxZQUFBLE9BQUksQ0FBQyxTQUFMLENBQWUsT0FBTyxDQUFDLEVBQXZCLEVBQTJCLENBQTNCLEVBQThCLGlCQUE5QixFQUFrRCxRQUFRLEdBQUcsS0FBSCxHQUFXLE9BQU8sQ0FBQyxLQUE3RTtBQUNIO0FBQ0o7QUFFSixPQTdDRDtBQThDSDs7OzhCQUVTO0FBQ047QUFDSDs7OztFQXZld0IsaUI7Ozs7Ozs7Ozs7OztBQ1I3Qjs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7OztBQUdJLHNCQUEwQjtBQUFBLFFBQWQsT0FBYyx1RUFBSixFQUFJOztBQUFBOztBQUN0QixTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsSUFBQSxNQUFNLENBQUMsTUFBUCxDQUFjLElBQWQsRUFBb0IsaUJBQXBCLEVBQThCLE9BQTlCO0FBRUEsU0FBSyxJQUFMO0FBQ0g7Ozs7MkJBRU07QUFDSCxVQUFJLENBQUMsS0FBSyxZQUFWLEVBQXdCO0FBQ3BCLGFBQUssUUFBTCxHQUFpQiwyREFBMkQsSUFBM0QsQ0FBZ0UsU0FBUyxDQUFDLFNBQTFFLENBQWpCO0FBQ0g7O0FBRUQsVUFBSSxLQUFLLE1BQUwsS0FBZ0IsSUFBaEIsSUFBd0IsQ0FBQyxLQUFLLFFBQWxDLEVBQTRDO0FBQ3hDLGFBQUssTUFBTCxHQUFjLElBQUksa0JBQUosQ0FBVyxLQUFLLE9BQWhCLENBQWQ7QUFDSCxPQUZELE1BRU87QUFDSCxhQUFLLE1BQUwsR0FBYyxJQUFJLGtCQUFKLENBQVcsS0FBSyxPQUFoQixDQUFkO0FBQ0g7O0FBRUQsV0FBSyxNQUFMLENBQVksSUFBWjtBQUVIOzs7OEJBRVM7QUFDTixXQUFLLE1BQUwsQ0FBWSxPQUFaO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQzdCRSxJQUFNLFFBQVEsR0FBRztBQUNwQixFQUFBLEVBQUUsRUFBRSxRQURnQjtBQUVwQixFQUFBLFFBQVEsRUFBRSxRQUZVO0FBR3BCLEVBQUEsSUFBSSxFQUFFLFFBSGM7QUFJcEIsV0FBTyxXQUphO0FBS3BCLEVBQUEsa0JBQWtCLEVBQUUsYUFMQTtBQU1wQixFQUFBLG9CQUFvQixFQUFFLGNBTkY7QUFPcEIsRUFBQSxtQkFBbUIsRUFBRSxhQVBEO0FBUXBCLEVBQUEsV0FBVyxFQUFFLGtCQVJPO0FBU3BCLEVBQUEsTUFBTSxFQUFFLENBVFk7QUFVcEIsRUFBQSxPQUFPLEVBQUUsQ0FWVztBQVdwQixFQUFBLE1BQU0sRUFBRSxLQVhZO0FBWXBCLEVBQUEsTUFBTSxFQUFFLEtBWlk7QUFhcEIsRUFBQSxZQUFZLEVBQUUsS0FiTTtBQWNwQixFQUFBLFlBQVksRUFBRSxLQWRNO0FBZXBCLEVBQUEsUUFBUSxFQUFFLEtBZlU7QUFnQnBCLEVBQUEsUUFBUSxFQUFFLGtCQUFDLENBQUQsRUFBTyxDQUFFO0FBaEJDLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7QUNBUDs7O0FBR08sU0FBUyxVQUFULENBQW9CLEdBQXBCLEVBQXlCO0FBQzVCLFNBQU8sR0FBRyxDQUNMLE9BREUsQ0FDTSxJQUROLEVBQ1ksT0FEWixFQUVGLE9BRkUsQ0FFTSxJQUZOLEVBRVksTUFGWixFQUdGLE9BSEUsQ0FHTSxJQUhOLEVBR1ksTUFIWixDQUFQO0FBSUg7QUFFRDs7Ozs7OztBQUtPLFNBQVMsWUFBVCxDQUFzQixHQUF0QixFQUEyQjtBQUM5QixTQUFPLEdBQUcsQ0FDTCxPQURFLENBQ00sT0FETixFQUNlLEdBRGYsRUFFRixPQUZFLENBRU0sT0FGTixFQUVlLEdBRmYsRUFHRixPQUhFLENBR00sUUFITixFQUdnQixHQUhoQixDQUFQO0FBSUg7QUFFRDs7Ozs7OztBQUtPLFNBQVMsV0FBVCxDQUFxQixJQUFyQixFQUEyQjtBQUM5QjtBQUNBLE1BQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUF0QixDQUY4QixDQUk5Qjs7QUFDQSxNQUFJLE9BQU8sR0FBRyxjQUFkLENBTDhCLENBTzlCOztBQUNBLE1BQUksSUFBSSxHQUFHLEVBQVg7O0FBRUEsT0FBSyxJQUFJLENBQVQsSUFBYyxVQUFkLEVBQTBCO0FBQ3RCLFFBQUksQ0FBQyxVQUFVLENBQUMsQ0FBRCxDQUFmLEVBQW9CO0FBQ2hCO0FBQ0gsS0FIcUIsQ0FLdEI7OztBQUNBLFFBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBYyxJQUF6QixDQU5zQixDQVF0Qjs7QUFDQSxRQUFJLENBQUMsSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFFRCxRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQVgsQ0FBWjs7QUFDQSxRQUFJLENBQUMsS0FBTCxFQUFZO0FBQ1I7QUFDSCxLQWhCcUIsQ0FrQnRCO0FBQ0E7OztBQUNBLElBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBSixHQUFpQixJQUFJLENBQUMsWUFBTCxDQUFrQixJQUFsQixDQUFqQjtBQUNIOztBQUVELFNBQU8sSUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTLFVBQVQsQ0FBb0IsSUFBcEIsRUFBMEI7QUFDN0I7QUFDQSxNQUFJLE9BQU8sR0FBRyxFQUFkLENBRjZCLENBSTdCOztBQUNBLFNBQVEsSUFBSSxJQUFJLElBQUksS0FBSyxRQUF6QixFQUFtQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQS9DLEVBQTREO0FBQ3hELElBQUEsT0FBTyxDQUFDLElBQVIsQ0FBYSxJQUFiO0FBQ0gsR0FQNEIsQ0FTN0I7OztBQUNBLFNBQU8sT0FBUDtBQUNILEMsQ0FFRDs7O0FBQ08sU0FBUyxrQkFBVCxDQUE0QixJQUE1QixFQUFrQyxRQUFsQyxFQUE0QztBQUUvQztBQUNBLE1BQUksQ0FBQyxPQUFPLENBQUMsU0FBUixDQUFrQixPQUF2QixFQUFnQztBQUM1QixJQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLE9BQWxCLEdBQ0ksT0FBTyxDQUFDLFNBQVIsQ0FBa0IsZUFBbEIsSUFDQSxPQUFPLENBQUMsU0FBUixDQUFrQixrQkFEbEIsSUFFQSxPQUFPLENBQUMsU0FBUixDQUFrQixpQkFGbEIsSUFHQSxPQUFPLENBQUMsU0FBUixDQUFrQixnQkFIbEIsSUFJQSxPQUFPLENBQUMsU0FBUixDQUFrQixxQkFKbEIsSUFLQSxVQUFTLENBQVQsRUFBWTtBQUNSLFVBQUksT0FBTyxHQUFHLENBQUMsS0FBSyxRQUFMLElBQWlCLEtBQUssYUFBdkIsRUFBc0MsZ0JBQXRDLENBQXVELENBQXZELENBQWQ7QUFBQSxVQUNJLENBQUMsR0FBRyxPQUFPLENBQUMsTUFEaEI7O0FBRUEsYUFBTyxFQUFFLENBQUYsSUFBTyxDQUFQLElBQVksT0FBTyxDQUFDLElBQVIsQ0FBYSxDQUFiLE1BQW9CLElBQXZDLEVBQTZDLENBQUU7O0FBQy9DLGFBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBWjtBQUNILEtBWEw7QUFZSCxHQWhCOEMsQ0FrQi9DOzs7QUFDQSxTQUFRLElBQUksSUFBSSxJQUFJLEtBQUssUUFBekIsRUFBbUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUEvQyxFQUE0RDtBQUN4RCxRQUFLLElBQUksQ0FBQyxPQUFMLENBQWMsUUFBZCxDQUFMLEVBQWdDLE9BQU8sSUFBUDtBQUNuQzs7QUFDRCxTQUFPLElBQVA7QUFFSDs7QUFBQTs7Ozs7Ozs7OztBQzFHTSxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQThCO0FBQ2pDLFNBQU8sQ0FBQyxJQUFJLEdBQUwsSUFBWSxLQUFaLEdBQW9CLEdBQUcsR0FBRyxHQUFqQztBQUNIOzs7Ozs7Ozs7OztBQ0ZNLFNBQVMsU0FBVCxDQUFtQixFQUFuQixFQUF1QixjQUF2QixFQUFzQztBQUN6QyxFQUFBLEVBQUUsQ0FBQyxLQUFILENBQVMsZUFBVCxHQUEyQixjQUEzQjtBQUNBLEVBQUEsRUFBRSxDQUFDLEtBQUgsQ0FBUyxXQUFULEdBQXVCLGNBQXZCO0FBQ0EsRUFBQSxFQUFFLENBQUMsS0FBSCxDQUFTLFNBQVQsR0FBcUIsY0FBckI7QUFDSDs7QUFFTSxTQUFTLFlBQVQsQ0FBc0IsRUFBdEIsRUFBeUI7QUFDNUIsTUFBTSxTQUFTLEdBQUcsRUFBbEI7QUFDQSxNQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFYLEVBQTZCO0FBRTdCLE1BQU0sS0FBSyxHQUFHLGdCQUFnQixDQUFDLEVBQUQsQ0FBOUI7QUFDQSxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBTixJQUFtQixLQUFLLENBQUMsZUFBekIsSUFBNEMsS0FBSyxDQUFDLFlBQXBFO0FBRUEsTUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLEtBQVYsQ0FBZ0Isb0JBQWhCLENBQVY7QUFDQSxNQUFHLEdBQUgsRUFBUSxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sS0FBUCxDQUFhLElBQWIsRUFBbUIsRUFBbkIsQ0FBRCxDQUFqQjtBQUNSLEVBQUEsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFWLENBQWdCLGtCQUFoQixDQUFOO0FBQ0EsRUFBQSxTQUFTLENBQUMsQ0FBVixHQUFjLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPLEtBQVAsQ0FBYSxJQUFiLEVBQW1CLENBQW5CLENBQUQsQ0FBYixHQUF1QyxDQUF4RDtBQUNBLEVBQUEsU0FBUyxDQUFDLENBQVYsR0FBYyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBTyxLQUFQLENBQWEsSUFBYixFQUFtQixDQUFuQixDQUFELENBQWIsR0FBdUMsQ0FBeEQ7QUFFQSxTQUFPLFNBQVA7QUFDSDs7O0FDcEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IGxvY29tb3RpdmVTY3JvbGwgZnJvbSAnLi9zY3JvbGwvbWFpbic7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IHNjcm9sbCA9IG5ldyBsb2NvbW90aXZlU2Nyb2xsKHtcbiAgICAgICAgZWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1zY3JvbGwnKSxcbiAgICAgICAgc21vb3RoOiBmYWxzZSxcbiAgICAgICAgc21vb3RoTW9iaWxlOiBmYWxzZSxcbiAgICAgICAgbW9iaWxlQ29udGFpbmVyOiAkKGRvY3VtZW50KSxcbiAgICAgICAgaW5lcnRpYTogMSxcbiAgICAgICAgc2Nyb2xsQmFyQ2xhc3NOYW1lOiAnby1zY3JvbGxiYXInLFxuICAgICAgICBpc1Njcm9sbGluZ0NsYXNzTmFtZTogJ2lzLXNjcm9sbGluZycsXG4gICAgICAgIGlzRHJhZ2dpbmdDbGFzc05hbWU6ICdpcy1kcmFnZ2luZycsXG4gICAgICAgIG9uU2Nyb2xsOiAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5zY3JvbGwueSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoKTtcbiIsImltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi9vcHRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLm5hbWVzcGFjZSA9ICdsb2NvbW90aXZlJztcbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMud2luZG93TWlkZGxlID0gdGhpcy53aW5kb3dIZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmVscyA9IFtdO1xuXG5cbiAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGwgPSB0aGlzLmNoZWNrU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tSZXNpemUgPSB0aGlzLmNoZWNrUmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IHtcbiAgICAgICAgICAgIHNjcm9sbDoge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG51bGwsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNoZWNrUmVzaXplLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcblxuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBjaGVja1Njcm9sbCgpe31cbiAgICBjaGVja1Jlc2l6ZSgpe31cblxuICAgIGluaXRFdmVudHMoKSB7XG5cbiAgICAgICAgLy8gc2Nyb2xsIHRvIGVsZW1lbnRzXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9FbGVtZW50cyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtJHt0aGlzLm5hbWV9LXRvXWApO1xuXG4gICAgICAgIHRoaXMucHJlcGFyZVNjcm9sbFRvID0gdGhpcy5wcmVwYXJlU2Nyb2xsVG8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0VsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJlcGFyZVNjcm9sbFRvLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHNjcm9sbCB0byBldmVudFxuICAgICAgICB0aGlzLnNjcm9sbFRvID0gdGhpcy5zY3JvbGxUby5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsdG8nLCB0aGlzLnNjcm9sbFRvLCBmYWxzZSk7XG5cbiAgICAgICAgLy8gZXhhbXBsZSB0byB0cmlnZ2VyIGEgc2Nyb2xsIHRvXG4gICAgICAgIC8vIGNvbnN0IHNjcm9sbFRvRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3Njcm9sbHRvJyx7XG4gICAgICAgIC8vICAgICBkZXRhaWw6IHtcbiAgICAgICAgLy8gICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRhcmdldEVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNpbnRyb2R1Y3Rpb24nKVswXVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gd2luZG93LmRpc3BhdGNoRXZlbnQoc2Nyb2xsVG9FdmVudClcblxuICAgIH1cblxuICAgIHByZXBhcmVTY3JvbGxUbyhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHNvdXJjZUVsZW06IGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0RWxlbTogZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2Zmc2V0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gYWRkRWxlbWVudHMoKXt9XG5cbiAgICBkZXRlY3RFbGVtZW50cygpIHtcblxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55O1xuICAgICAgICBjb25zdCBzY3JvbGxCb3R0b20gPSBzY3JvbGxUb3AgKyB0aGlzLndpbmRvd0hlaWdodDtcblxuICAgICAgICB0aGlzLmVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlbC5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHNjcm9sbEJvdHRvbSA+PSBlbC50b3ApICYmIChzY3JvbGxUb3AgPCBlbC5ib3R0b20pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5WaWV3KGVsLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihlbC5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHNjcm9sbEJvdHRvbSA8IGVsLnRvcCkgfHwgKHNjcm9sbFRvcCA+IGVsLmJvdHRvbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRPdXRPZlZpZXcoZWwsIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0SW5WaWV3KGN1cnJlbnQsIGkpIHtcblxuICAgICAgICB0aGlzLmVsc1tpXS5pblZpZXcgPSB0cnVlO1xuICAgICAgICBjdXJyZW50LmVsLmNsYXNzTGlzdC5hZGQoY3VycmVudC5jbGFzcyk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnQuY2FsbCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsVmFsdWUgPSBjdXJyZW50LmNhbGwuc3BsaXQoJywnKS5tYXAoaXRlbSA9PiBpdGVtLnRyaW0oKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jYWxsVmFsdWUubGVuZ3RoID09IDEpIHRoaXMuY2FsbFZhbHVlID0gdGhpcy5jYWxsVmFsdWVbMF07XG5cbiAgICAgICAgICAgIGNvbnN0IGNhbGxFdmVudCA9IG5ldyBFdmVudCh0aGlzLm5hbWVzcGFjZSArICdjYWxsJyk7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChjYWxsRXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjdXJyZW50LnJlcGVhdCAmJiBjdXJyZW50LnNwZWVkID09PSBmYWxzZSAmJiAhY3VycmVudC5zdGlja3kgKXtcbiAgICAgICAgICAgIHRoaXMuZWxzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE91dE9mVmlldyhjdXJyZW50LCBpKSB7XG5cbiAgICAgICAgaWYoY3VycmVudC5yZXBlYXQgfHwgY3VycmVudC5zcGVlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVsc1tpXS5pblZpZXcgPSBmYWxzZTtcbiAgICAgICAgICAgIGN1cnJlbnQuZWwuY2xhc3NMaXN0LnJlbW92ZShjdXJyZW50LmNsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgdXBkYXRlRWxlbWVudHMoKSB7XG4gICAgICAgIHRoaXMuZWxzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSBlbC5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55O1xuICAgICAgICAgICAgY29uc3QgYm90dG9tID0gdG9wICsgZWwuZWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICB0aGlzLmVsc1tpXS50b3AgPSB0b3AgKyBlbC5vZmZzZXQ7XG4gICAgICAgICAgICB0aGlzLmVsc1tpXS5ib3R0b20gPSBib3R0b207XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgb24oZXZlbnQsIGZ1bmMpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lc3BhY2UgKyBldmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NhbGwnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuYyh0aGlzLmNhbGxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNoZWNrUmVzaXplLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUb0VsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJlcGFyZVNjcm9sbFRvLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IENvcmUgZnJvbSAnLi9Db3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb3JlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcblxuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hlY2tTY3JvbGwsIGZhbHNlKTtcblxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcblxuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgfVxuXG4gICAgY2hlY2tTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzU2Nyb2xsVGlja2luZykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tSZXNpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgICBpZighdGhpcy5oYXNTY3JvbGxUaWNraW5nKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50cygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgY29uc3QgZWxzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS0nK3RoaXMubmFtZSsnXScpO1xuXG4gICAgICAgIGVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNsID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnQ2xhc3MnXSB8fCB0aGlzLmNsYXNzO1xuICAgICAgICAgICAgbGV0IHRvcCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgICAgICBsZXQgYm90dG9tID0gdG9wICsgZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHBhcnNlSW50KGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ09mZnNldCddKSB8fCBwYXJzZUludCh0aGlzLm9mZnNldCk7XG4gICAgICAgICAgICBsZXQgcmVwZWF0ID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnUmVwZWF0J107XG4gICAgICAgICAgICBsZXQgY2FsbCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0NhbGwnXTtcblxuICAgICAgICAgICAgaWYocmVwZWF0ID09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVwZWF0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRoaXMucmVwZWF0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVsc1tpXSA9IHtcbiAgICAgICAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgICAgICAgY2xhc3M6IGNsLFxuICAgICAgICAgICAgICAgIHRvcDogdG9wICsgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgICAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgICAgICAgICAgIGluVmlldzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2FsbDogY2FsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIGRlc2lyZWQgdGFyZ2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzY3JvbGxUbyhwYXJhbXMpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHBhcmFtcy5vcHRpb25zO1xuXG4gICAgICAgIGxldCB0YXJnZXRFbGVtID0gb3B0aW9ucy50YXJnZXRFbGVtO1xuICAgICAgICBsZXQgc291cmNlRWxlbSA9IG9wdGlvbnMuc291cmNlRWxlbTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0RWxlbSA9IG9wdGlvbnMub2Zmc2V0RWxlbTtcbiAgICAgICAgbGV0IHRhcmdldE9mZnNldCA9IG9wdGlvbnMudGFyZ2V0T2Zmc2V0ID8gb3B0aW9ucy50YXJnZXRPZmZzZXQgOiAwIDtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBvcHRpb25zLnNwZWVkID8gb3B0aW9ucy5zcGVlZCA6IDgwMCA7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gb3B0aW9ucy5kZWxheTtcbiAgICAgICAgbGV0IHRvVG9wID0gb3B0aW9ucy50b1RvcDtcbiAgICAgICAgbGV0IHRvQm90dG9tID0gb3B0aW9ucy50b0JvdHRvbTtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG5cblxuICAgICAgICAvLyBJZiBzb3VyY2VFbGVtIGlzIGdpdmVuLCBmaW5kIGFuZCBzdG9yZSB0aGUgdGFyZ2V0RWxlbSBpdCdzIHJlbGF0ZWQgdG9cbiAgICAgICAgaWYgKHNvdXJjZUVsZW0pIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXREYXRhID0gJyc7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgc2VsZWN0b3IgKGdpdmVuIHdpdGggYGRhdGEtdGFyZ2V0YCBvciBgaHJlZmAgYXR0cmlidXRlcyBvbiBzb3VyY2VFbGVtKVxuICAgICAgICAgICAgbGV0IHNvdXJjZUVsZW1UYXJnZXQgPSBzb3VyY2VFbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKVxuICAgICAgICAgICAgdGFyZ2V0RGF0YSA9IHNvdXJjZUVsZW1UYXJnZXQgPyBzb3VyY2VFbGVtVGFyZ2V0IDogc291cmNlRWxlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuXG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgdGFyZ2V0IGZvciBsYXRlclxuICAgICAgICAgICAgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0RGF0YSlbMF1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRFbGVtKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0YXJnZXRFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRhcmdldE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvZmZzZXRFbGVtKSB7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gb2Zmc2V0RWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0YXJnZXRPZmZzZXQgLSBvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9Ub3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhcmdldEVsZW0gPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaHRtbCcpWzBdO1xuICAgICAgICB9IGVsc2UgaWYgKHRvQm90dG9tID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSBkb2N1bWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2h0bWwnKVswXS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6IFwiZW5kXCIsIGlubGluZTogXCJuZWFyZXN0XCJ9KTtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnfSk7XG4gICAgICAgIH0sIGRlbGF5KTtcblxuICAgIH1cblxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNoZWNrU2Nyb2xsLCBmYWxzZSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgdmlydHVhbFNjcm9sbCBmcm9tICd2aXJ0dWFsLXNjcm9sbCc7XG5pbXBvcnQgQ29yZSBmcm9tICcuL0NvcmUnO1xuaW1wb3J0IHsgbGVycCB9IGZyb20gJy4uL3V0aWxzL21hdGhzJ1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRlIH0gZnJvbSAnLi4vdXRpbHMvdHJhbnNmb3JtJ1xuaW1wb3J0IHsgZ2V0UGFyZW50cywgcXVlcnlDbG9zZXN0UGFyZW50IH0gZnJvbSAnLi4vdXRpbHMvaHRtbCc7XG5cbmNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29yZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuaW5lcnRpYSA9IHRoaXMuaW5lcnRpYSAqIDAuMTtcbiAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cyA9IFtdO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLnNtb290aENsYXNzKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlID0ge1xuICAgICAgICAgICAgdnM6IG5ldyB2aXJ0dWFsU2Nyb2xsKHtcbiAgICAgICAgICAgICAgICBtb3VzZU11bHRpcGxpZXI6IChuYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZignV2luJykgPiAtMSkgPyAxIDogMC40LFxuICAgICAgICAgICAgICAgIHRvdWNoTXVsdGlwbGllcjogNCxcbiAgICAgICAgICAgICAgICBmaXJlZm94TXVsdGlwbGllcjogMzBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZGVsdGE6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi50aGlzLmluc3RhbmNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlLnZzLm9uKChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNUaWNraW5nICYmICF0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNTY3JvbGxpbmcpIHRoaXMuc3RhcnRTY3JvbGxpbmcoKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlbHRhKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTGltaXQoKTtcbiAgICAgICAgdGhpcy5pbml0U2Nyb2xsQmFyKCk7XG5cbiAgICAgICAgdGhpcy5hZGRTZWN0aW9ucygpO1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cyh0cnVlKTtcblxuICAgICAgICBzdXBlci5pbml0KCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gYSBkZXNpcmVkIHRhcmdldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9uc1xuICAgICAqICAgICAgQXZhaWxhYmxlIG9wdGlvbnMgOlxuICAgICAqICAgICAgICAgIHtub2RlfSB0YXJnZXRFbGVtIC0gVGhlIERPTSBlbGVtZW50IHdlIHdhbnQgdG8gc2Nyb2xsIHRvXG4gICAgICogICAgICAgICAge25vZGV9IHNvdXJjZUVsZW0gLSBBbiBgPGE+YCBlbGVtZW50IHdpdGggYW4gaHJlZiB0YXJnZXRpbmcgdGhlIGFuY2hvciB3ZSB3YW50IHRvIHNjcm9sbCB0b1xuICAgICAqICAgICAgICAgIHtub2RlfSBvZmZzZXRFbGVtIC0gQSBET00gZWxlbWVudCBmcm9tIHdoaWNoIHdlIGdldCB0aGUgaGVpZ2h0IHRvIHN1YnN0cmFjdCBmcm9tIHRoZSB0YXJnZXRPZmZzZXRcbiAgICAgKiAgICAgICAgICAgICAgKGV4OiB1c2Ugb2Zmc2V0RWxlbSB0byBwYXNzIGEgbW9iaWxlIGhlYWRlciB0aGF0IGlzIGFib3ZlIGNvbnRlbnQsIHRvIG1ha2Ugc3VyZSB0aGUgc2Nyb2xsVG8gd2lsbCBiZSBhbGlnbmVkIHdpdGggaXQpXG4gICAgICogICAgICAgICAge2ludH0gdGFyZ2V0T2Zmc2V0IC0gQW4gYWJzb2x1dGUgdmVydGljYWwgc2Nyb2xsIHZhbHVlIHRvIHJlYWNoLCBvciBhbiBvZmZzZXQgdG8gYXBwbHkgb24gdG9wIG9mIGdpdmVuIGB0YXJnZXRFbGVtYCBvciBgc291cmNlRWxlbWAncyB0YXJnZXRcbiAgICAgKiAgICAgICAgICB7aW50fSBkZWxheSAtIEFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmUgc3RhcnRpbmcgdG8gc2Nyb2xsXG4gICAgICogICAgICAgICAge2Jvb2xlYW59IHRvVG9wIC0gU2V0IHRvIHRydWUgdG8gc2Nyb2xsIGFsbCB0aGUgd2F5IHRvIHRoZSB0b3BcbiAgICAgKiAgICAgICAgICB7Ym9vbGVhbn0gdG9Cb3R0b20gLSBTZXQgdG8gdHJ1ZSB0byBzY3JvbGwgYWxsIHRoZSB3YXkgdG8gdGhlIGJvdHRvbVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2Nyb2xsVG8ocGFyYW1zKSB7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHBhcmFtcy5vcHRpb25zO1xuXG4gICAgICAgIGxldCB0YXJnZXRFbGVtID0gb3B0aW9ucy50YXJnZXRFbGVtO1xuICAgICAgICBjb25zdCBzb3VyY2VFbGVtID0gb3B0aW9ucy5zb3VyY2VFbGVtO1xuICAgICAgICBjb25zdCBvZmZzZXRFbGVtID0gb3B0aW9ucy5vZmZzZXRFbGVtO1xuICAgICAgICBsZXQgdGFyZ2V0T2Zmc2V0ID0gb3B0aW9ucy50YXJnZXRPZmZzZXQgPyBvcHRpb25zLnRhcmdldE9mZnNldCA6IDAgO1xuICAgICAgICBjb25zdCBkZWxheSA9IG9wdGlvbnMuZGVsYXk7XG4gICAgICAgIGNvbnN0IHRvVG9wID0gb3B0aW9ucy50b1RvcDtcbiAgICAgICAgY29uc3QgdG9Cb3R0b20gPSBvcHRpb25zLnRvQm90dG9tO1xuXG4gICAgICAgIC8vIElmIHNvdXJjZUVsZW0gaXMgZ2l2ZW4sIGZpbmQgYW5kIHN0b3JlIHRoZSB0YXJnZXRFbGVtIGl0J3MgcmVsYXRlZCB0b1xuICAgICAgICBpZiAoc291cmNlRWxlbSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldERhdGEgPSAnJztcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBzZWxlY3RvciAoZ2l2ZW4gd2l0aCBgZGF0YS10YXJnZXRgIG9yIGBocmVmYCBhdHRyaWJ1dGVzIG9uIHNvdXJjZUVsZW0pXG4gICAgICAgICAgICBsZXQgc291cmNlRWxlbVRhcmdldCA9IHNvdXJjZUVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXG4gICAgICAgICAgICB0YXJnZXREYXRhID0gc291cmNlRWxlbVRhcmdldCA/IHNvdXJjZUVsZW1UYXJnZXQgOiBzb3VyY2VFbGVtLmdldEF0dHJpYnV0ZSgnaHJlZicpXG5cbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSB0YXJnZXQgZm9yIGxhdGVyXG4gICAgICAgICAgICB0YXJnZXRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXREYXRhKVswXVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgaGF2ZSBhIHRhcmdldEVsZW0sIGdldCBpdCdzIGNvb3JkaW5hdGVzXG4gICAgICAgIGlmICh0YXJnZXRFbGVtKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGFyZ2V0RWxlbSBvZmZzZXQgZnJvbSB0b3BcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW1CQ1IgPSB0YXJnZXRFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtT2Zmc2V0VG9wID0gdGFyZ2V0RWxlbUJDUi50b3AgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55XG5cbiAgICAgICAgICAgIC8vIFRyeSBhbmQgZmluZCB0aGUgdGFyZ2V0RWxlbSdzIHBhcmVudCBzZWN0aW9uXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRQYXJlbnRzID0gZ2V0UGFyZW50cyh0YXJnZXRFbGVtKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0UGFyZW50cyk7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRTZWN0aW9uID0gdGFyZ2V0UGFyZW50cy5maW5kKGNhbmRpZGF0ZSA9PiB0aGlzLnNlY3Rpb25zLmZpbmQoc2VjdGlvbiA9PiBzZWN0aW9uLmVsZW1lbnQgPT0gY2FuZGlkYXRlKSlcbiAgICAgICAgICAgIGxldCBwYXJlbnRTZWN0aW9uT2Zmc2V0ID0gMFxuICAgICAgICAgICAgaWYocGFyZW50U2VjdGlvbikge1xuICAgICAgICAgICAgICAgIHBhcmVudFNlY3Rpb25PZmZzZXQgPSBnZXRUcmFuc2xhdGUocGFyZW50U2VjdGlvbikueSAvLyBXZSBnb3QgYSBwYXJlbnQgc2VjdGlvbiwgc3RvcmUgaXQncyBjdXJyZW50IG9mZnNldCB0byByZW1vdmUgaXQgbGF0ZXJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmluYWwgdmFsdWUgb2Ygc2Nyb2xsIGRlc3RpbmF0aW9uIDogdGFyZ2V0RWxlbU9mZnNldFRvcCArIChvcHRpb25hbCBvZmZzZXQgZ2l2ZW4gaW4gb3B0aW9ucykgLSAocGFyZW50J3Mgc2VjdGlvbiB0cmFuc2xhdGUpXG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0YXJnZXRFbGVtT2Zmc2V0VG9wICsgdGFyZ2V0T2Zmc2V0IC0gcGFyZW50U2VjdGlvbk9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIGhhdmUgYW4gb2Zmc2V0RWxlbSwgZ2V0IGl0cyBoZWlnaHQgYW5kIHJlbW92ZSBpdCBmcm9tIHRhcmdldE9mZnNldCBhbHJlYWR5IGNvbXB1dGVkXG4gICAgICAgIGlmIChvZmZzZXRFbGVtKSB7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gb2Zmc2V0RWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0YXJnZXRPZmZzZXQgLSBvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSB3YW50IHRvIGdvIHRvIG9uZSBvZiBib3VuZGFyaWVzXG4gICAgICAgIGlmICh0b1RvcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh0b0JvdHRvbSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gdGhpcy5pbnN0YW5jZS5saW1pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSBhc2tlZCBkZWxheSBpZiBuZWVkZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSB0YXJnZXRPZmZzZXQ7IC8vIEFjdHVhbCBzY3JvbGxUbyAodGhlIGxlcnAgd2lsbCBkbyB0aGUgYW5pbWF0aW9uIGl0c2VsZilcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBzY3JvbGwuIElmIHdlIHdlcmUgaW4gaWRsZSBzdGF0ZTogd2UncmUgbm90IGFueW1vcmVcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jaGVja1Njcm9sbCgpO1xuICAgICAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuaXNTY3JvbGxpbmdDbGFzc05hbWUpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgc2V0U2Nyb2xsTGltaXQoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UubGltaXQgPSB0aGlzLmVsLm9mZnNldEhlaWdodCAtIHRoaXMud2luZG93SGVpZ2h0O1xuICAgIH1cblxuICAgIHN0YXJ0U2Nyb2xsaW5nKCkge1xuICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaGVja1Njcm9sbCgpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQodGhpcy5zY3JvbGxpbmdDbGFzcyk7XG4gICAgfVxuXG4gICAgc3RvcFNjcm9sbGluZygpIHtcbiAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gTWF0aC5yb3VuZCh0aGlzLmluc3RhbmNlLnNjcm9sbC55KTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgIH1cblxuICAgIGNoZWNrU2Nyb2xsKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Njcm9sbGluZyB8fCB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNTY3JvbGxUaWNraW5nKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+wqB0aGlzLmNoZWNrU2Nyb2xsKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gKE1hdGguYWJzKHRoaXMuaW5zdGFuY2UuZGVsdGEueSAtIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpKTtcbiAgICAgICAgICAgIGlmICgoZGlzdGFuY2UgPCAxICYmIHRoaXMuaW5zdGFuY2UuZGVsdGEueSAhPSAwKSB8fCAoZGlzdGFuY2UgPCAwLjUgJiYgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID09IDApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnNlY3Rpb25zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zZWN0aW9uc1tpXS5wZXJzaXN0ZW50IHx8ICh0aGlzLmluc3RhbmNlLnNjcm9sbC55ID4gdGhpcy5zZWN0aW9uc1tpXS5vZmZzZXQgJiYgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8IHRoaXMuc2VjdGlvbnNbaV0ubGltaXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuc2VjdGlvbnNbaV0uZWwsMCwtdGhpcy5pbnN0YW5jZS5zY3JvbGwueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbnNbaV0uZWwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXS5pblZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbnNbaV0uZWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zW2ldLmluVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXREaXJlY3Rpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0U3BlZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNwZWVkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRldGVjdEVsZW1lbnRzKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKCk7XG5cbiAgICAgICAgICAgIC8vIHNjcm9sbGJhciB0cmFuc2xhdGlvblxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQmFyVHJhbnNsYXRpb24gPSAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSAvIHRoaXMuaW5zdGFuY2UubGltaXQpICogdGhpcy5zY3JvbGxCYXJMaW1pdDtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuc2Nyb2xsYmFyLDAsc2Nyb2xsQmFyVHJhbnNsYXRpb24pO1xuXG4gICAgICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrUmVzaXplKCkge1xuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG5cbiAgICAgICAgdGhpcy5zZXRTY3JvbGxMaW1pdCgpO1xuICAgICAgICB0aGlzLmFkZFNlY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5kZXRlY3RFbGVtZW50cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKHRydWUpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlRGVsdGEoZSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgLT0gZS5kZWx0YVk7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgPCAwKSB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSAwO1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55ID4gdGhpcy5pbnN0YW5jZS5saW1pdCkgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0gdGhpcy5pbnN0YW5jZS5saW1pdDtcbiAgICB9XG5cbiAgICB1cGRhdGVTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gbGVycCh0aGlzLmluc3RhbmNlLnNjcm9sbC55LCB0aGlzLmluc3RhbmNlLmRlbHRhLnksIHRoaXMuaW5lcnRpYSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gbGVycCh0aGlzLmluc3RhbmNlLnNjcm9sbC55LCB0aGlzLmluc3RhbmNlLmRlbHRhLnksICh0aGlzLmluZXJ0aWEgKiAyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gdGhpcy5pbnN0YW5jZS5kZWx0YS55O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55ID4gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA8IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U3BlZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgIT0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuc3BlZWQgPSAodGhpcy5pbnN0YW5jZS5kZWx0YS55IC0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkgLyAoRGF0ZS5ub3coKSAtIHRoaXMudGltZXN0YW1wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnNwZWVkID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNjcm9sbGJhciBmdW5jdGlvbnNcbiAgICBpbml0U2Nyb2xsQmFyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbGJhcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aGlzLnNjcm9sbGJhcldyYXBwZXIuY2xhc3NMaXN0LmFkZChgJHt0aGlzLnNjcm9sbEJhckNsYXNzTmFtZX1fd3JhcHBlcmApO1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5jbGFzc0xpc3QuYWRkKGAke3RoaXMuc2Nyb2xsQmFyQ2xhc3NOYW1lfWApO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV3JhcHBlci5hcHBlbmQodGhpcy5zY3JvbGxiYXIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLnNjcm9sbGJhcldyYXBwZXIpO1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5zdHlsZS5oZWlnaHQgPSBgJHsod2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmlubmVySGVpZ2h0KSAvIHRoaXMuaW5zdGFuY2UubGltaXR9cHhgO1xuICAgICAgICB0aGlzLnNjcm9sbEJhckxpbWl0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5zY3JvbGxiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsKGUpID0+IHRoaXMuZ2V0U2Nyb2xsQmFyKGUpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLChlKSA9PiB0aGlzLnJlbGVhc2VTY3JvbGxCYXIoZSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywoZSkgPT4gdGhpcy5tb3ZlU2Nyb2xsQmFyKGUpKTtcblxuICAgIH1cblxuICAgIHJlaW5pdFNjcm9sbEJhcigpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIuc3R5bGUuaGVpZ2h0ID0gYCR7KHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyB0aGlzLmluc3RhbmNlLmxpbWl0fXB4YDtcbiAgICAgICAgdGhpcy5zY3JvbGxCYXJMaW1pdCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuc2Nyb2xsYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9XG5cbiAgICBkZXN0cm95U2Nyb2xsQmFyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLChlKSA9PiB0aGlzLmdldFNjcm9sbEJhcihlKSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywoZSkgPT4gdGhpcy5yZWxlYXNlU2Nyb2xsQmFyKGUpKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsKGUpID0+IHRoaXMubW92ZVNjcm9sbEJhcihlKSk7XG4gICAgfVxuXG4gICAgZ2V0U2Nyb2xsQmFyKGUpIHtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaGVja1Njcm9sbCgpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5pc1Njcm9sbGluZ0NsYXNzTmFtZSk7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLmlzRHJhZ2dpbmdDbGFzc05hbWUpO1xuICAgIH1cblxuICAgIHJlbGVhc2VTY3JvbGxCYXIoZSkge1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIgPSBmYWxzZTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuaXNTY3JvbGxpbmdDbGFzc05hbWUpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5pc0RyYWdnaW5nQ2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBtb3ZlU2Nyb2xsQmFyKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVGlja2luZyAmJiB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmlubmVySGVpZ2h0KVxuICAgICAgICAgICAgICAgIGxldCB5ID0gKGUuY2xpZW50WSAqIDEwMCAvICh3aW5kb3cuaW5uZXJIZWlnaHQpKSAqIHRoaXMuaW5zdGFuY2UubGltaXQgLyAxMDA7XG5cbiAgICAgICAgICAgICAgICBpZih5ID4gMCAmJiB5IDwgdGhpcy5pbnN0YW5jZS5saW1pdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSB5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XG4gICAgfVxuXG5cbiAgICAvLyBNYW5hZ2UgZWxlbWVudHMgYW5kIHNlY3Rpb25zXG4gICAgYWRkRWxlbWVudHMoKSB7XG4gICAgICAgIHRoaXMuZWxzID0gW11cbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW11cblxuICAgICAgICB0aGlzLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIHkpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZWxzID0gdGhpcy5zZWN0aW9uc1t5XS5lbC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS0ke3RoaXMubmFtZX1dYCk7XG5cbiAgICAgICAgICAgIGVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjbCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0NsYXNzJ10gfHwgdGhpcy5jbGFzcztcbiAgICAgICAgICAgICAgICBsZXQgdG9wO1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBwYXJzZUludChlbC5kYXRhc2V0W3RoaXMubmFtZSArICdPZmZzZXQnXSkgfHwgcGFyc2VJbnQodGhpcy5vZmZzZXQpO1xuICAgICAgICAgICAgICAgIGxldCByZXBlYXQgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdSZXBlYXQnXTtcbiAgICAgICAgICAgICAgICBsZXQgY2FsbCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0NhbGwnXTtcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICdQb3NpdGlvbiddO1xuICAgICAgICAgICAgICAgIGxldCBkZWxheSA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0RlbGF5J107XG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ0RpcmVjdGlvbiddO1xuICAgICAgICAgICAgICAgIGxldCBzdGlja3kgPSB0eXBlb2YgZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnU3RpY2t5J10gPT09ICdzdHJpbmcnO1xuICAgICAgICAgICAgICAgIGxldCBzcGVlZCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ1NwZWVkJ10gPyBwYXJzZUZsb2F0KGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ1NwZWVkJ10pLzEwIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJ1RhcmdldCddO1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRFbDtcblxuICAgICAgICAgICAgICAgIGlmKHRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHt0YXJnZXR9YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWwgPSBlbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZighdGhpcy5zZWN0aW9uc1t5XS5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gdGFyZ2V0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gZ2V0VHJhbnNsYXRlKHRoaXMuc2VjdGlvbnNbeV0uZWwpLnkgLSBnZXRUcmFuc2xhdGUodGFyZ2V0RWwpLnk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gdGFyZ2V0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSAtIGdldFRyYW5zbGF0ZSh0YXJnZXRFbCkueTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgYm90dG9tID0gdG9wICsgdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIGxldCBtaWRkbGUgPSAoKGJvdHRvbSAtIHRvcCkgLyAyKSArIHRvcDtcblxuICAgICAgICAgICAgICAgIGlmKHN0aWNreSkge1xuICAgICAgICAgICAgICAgICAgICB0b3AgKz0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0b3AgKyB0YXJnZXRFbC5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIG1pZGRsZSA9ICgoYm90dG9tIC0gdG9wKSAvIDIpICsgdG9wO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgaWYocmVwZWF0ID09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXBlYXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gdGhpcy5yZXBlYXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbWFwcGVkRWwgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogY2wsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdG9wICsgb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICBtaWRkbGUsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICAgICAgICAgIGluVmlldzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbGwsXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkLFxuICAgICAgICAgICAgICAgICAgICBkZWxheSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzdGlja3lcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmVscy5wdXNoKG1hcHBlZEVsKTtcblxuICAgICAgICAgICAgICAgIGlmKHNwZWVkICE9PSBmYWxzZSB8fCBzdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzLnB1c2gobWFwcGVkRWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBhZGRTZWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5zZWN0aW9ucyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS0ke3RoaXMubmFtZX0tc2VjdGlvbl1gKTtcblxuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uLCBpKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAxLjUpIC0gZ2V0VHJhbnNsYXRlKHNlY3Rpb24pLnk7XG4gICAgICAgICAgICBsZXQgbGltaXQgPSBvZmZzZXQgKyBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAyKTtcbiAgICAgICAgICAgIGxldCBwZXJzaXN0ZW50ID0gdHlwZW9mIHNlY3Rpb24uZGF0YXNldFt0aGlzLm5hbWUgKyAnUGVyc2lzdGVudCddID09PSAnc3RyaW5nJztcblxuICAgICAgICAgICAgbGV0IGluVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+PSBvZmZzZXQgJiYgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1hcHBlZFNlY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgZWw6IHNlY3Rpb24sXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICAgICAgbGltaXQ6IGxpbWl0LFxuICAgICAgICAgICAgICAgIGluVmlldzogaW5WaWV3LFxuICAgICAgICAgICAgICAgIHBlcnNpc3RlbnQ6IHBlcnNpc3RlbnRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXSA9IG1hcHBlZFNlY3Rpb247XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKGVsZW1lbnQsIHgsIHksIGRlbGF5KSB7XG4gICAgICAgIGxldCB0cmFuc2Zvcm07XG5cbiAgICAgICAgaWYoIWRlbGF5KSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSBgbWF0cml4KDEsMCwwLDEsJHt4fSwke3l9KWBcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgbGV0IGxlcnBYID0gbGVycChzdGFydC54LCB4LCBkZWxheSk7XG4gICAgICAgICAgICBsZXQgbGVycFkgPSBsZXJwKHN0YXJ0LnksIHksIGRlbGF5KTtcblxuICAgICAgICAgICAgdHJhbnNmb3JtID0gYG1hdHJpeCgxLDAsMCwxLCR7bGVycFh9LCR7bGVycFl9KWBcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1FbGVtZW50cyhpc0ZvcmNlZCkge1xuXG4gICAgICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0aGlzLndpbmRvd0hlaWdodDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsTWlkZGxlID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSArIHRoaXMud2luZG93TWlkZGxlO1xuXG4gICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cy5mb3JFYWNoKChjdXJyZW50LCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgdHJhbnNmb3JtRGlzdGFuY2UgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYoKGlzRm9yY2VkICYmICFjdXJyZW50LmluVmlldykpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY3VycmVudC5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnQucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSAqIC1jdXJyZW50LnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAodGhpcy5pbnN0YW5jZS5saW1pdCAtIHNjcm9sbEJvdHRvbSArIHRoaXMud2luZG93SGVpZ2h0KSAqIGN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IChzY3JvbGxNaWRkbGUgLSBjdXJyZW50Lm1pZGRsZSkgKiAtY3VycmVudC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGN1cnJlbnQuc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudC5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55IC0gY3VycmVudC50b3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8IGN1cnJlbnQudG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+IGN1cnJlbnQuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IGN1cnJlbnQuYm90dG9tIC0gY3VycmVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRyYW5zZm9ybURpc3RhbmNlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnQuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oY3VycmVudC5lbCwgdHJhbnNmb3JtRGlzdGFuY2UsIDAsIChpc0ZvcmNlZCA/IGZhbHNlIDogY3VycmVudC5kZWxheSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oY3VycmVudC5lbCwgMCwgdHJhbnNmb3JtRGlzdGFuY2UsIChpc0ZvcmNlZCA/IGZhbHNlIDogY3VycmVudC5kZWxheSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgU2Nyb2xsIGZyb20gJy4vTmF0aXZlJztcbmltcG9ydCBTbW9vdGggZnJvbSAnLi9TbW9vdGguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zbW9vdGhNb2JpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGUgPSAoL0FuZHJvaWR8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNtb290aCA9PT0gdHJ1ZSAmJiAhdGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwgPSBuZXcgU21vb3RoKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbCA9IG5ldyBTY3JvbGwodGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsLmluaXQoKTtcblxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgZWw6IGRvY3VtZW50LFxuICAgIGVsTW9iaWxlOiBkb2N1bWVudCxcbiAgICBuYW1lOiAnc2Nyb2xsJyxcbiAgICBjbGFzczogJ2lzLWludmlldycsXG4gICAgc2Nyb2xsQmFyQ2xhc3NOYW1lOiAnby1zY3JvbGxiYXInLFxuICAgIGlzU2Nyb2xsaW5nQ2xhc3NOYW1lOiAnaXMtc2Nyb2xsaW5nJyxcbiAgICBpc0RyYWdnaW5nQ2xhc3NOYW1lOiAnaXMtZHJhZ2dpbmcnLFxuICAgIHNtb290aENsYXNzOiAnaGFzLXNtb290aHNjcm9sbCcsXG4gICAgb2Zmc2V0OiAwLFxuICAgIGluZXJ0aWE6IDEsXG4gICAgcmVwZWF0OiBmYWxzZSxcbiAgICBzbW9vdGg6IGZhbHNlLFxuICAgIHNtb290aE1vYmlsZTogZmFsc2UsXG4gICAgZ2V0RGlyZWN0aW9uOiBmYWxzZSxcbiAgICBnZXRTcGVlZDogZmFsc2UsXG4gICAgb25TY3JvbGw6IChlKSA9PiB7fVxufTtcbiIsIi8qKlxuICogQHNlZSAgaHR0cHM6Ly9naXRodWIuY29tL3JhY3RpdmVqcy9yYWN0aXZlL2Jsb2IvZGV2L3NyYy91dGlscy9odG1sLmpzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVIdG1sKHN0cikge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xufVxuXG4vKipcbiAqIFByZXBhcmUgSFRNTCBjb250ZW50IHRoYXQgY29udGFpbnMgbXVzdGFjaGUgY2hhcmFjdGVycyBmb3IgdXNlIHdpdGggUmFjdGl2ZVxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuZXNjYXBlSHRtbChzdHIpIHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKC8mbHQ7L2csICc8JylcbiAgICAgICAgLnJlcGxhY2UoLyZndDsvZywgJz4nKVxuICAgICAgICAucmVwbGFjZSgvJmFtcDsvZywgJyYnKTtcbn1cblxuLyoqXG4gKiBHZXQgZWxlbWVudCBkYXRhIGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSAgIHtET01FbGVtZW50fSAgbm9kZVxuICogQHJldHVybiAge0FycmF5fSAgICAgICBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlRGF0YShub2RlKSB7XG4gICAgLy8gQWxsIGF0dHJpYnV0ZXNcbiAgICB2YXIgYXR0cmlidXRlcyA9IG5vZGUuYXR0cmlidXRlcztcblxuICAgIC8vIFJlZ2V4IFBhdHRlcm5cbiAgICB2YXIgcGF0dGVybiA9IC9eZGF0YVxcLSguKykkLztcblxuICAgIC8vIE91dHB1dFxuICAgIHZhciBkYXRhID0ge307XG5cbiAgICBmb3IgKGxldCBpIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGVzW2ldKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF0dHJpYnV0ZXMgbmFtZSAoZXg6IGRhdGEtbW9kdWxlKVxuICAgICAgICBsZXQgbmFtZSA9IGF0dHJpYnV0ZXNbaV0ubmFtZTtcblxuICAgICAgICAvLyBUaGlzIGhhcHBlbnMuXG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWF0Y2ggPSBuYW1lLm1hdGNoKHBhdHRlcm4pO1xuICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoaXMgdGhyb3dzIGFuIGVycm9yLCB5b3UgaGF2ZSBzb21lXG4gICAgICAgIC8vIHNlcmlvdXMgcHJvYmxlbXMgaW4geW91ciBIVE1MLlxuICAgICAgICBkYXRhW21hdGNoWzFdXSA9IG5vZGUuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIHBhcmVudCBub2RlcyBvZiB0aGUgZ2l2ZW4gbm9kZVxuICogQHBhcmFtICB7b2JqZWN0fSBub2RlXG4gKiBAcmV0dXJuIHthcnJheX0gcGFyZW50IG5vZGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnRzKGVsZW0pIHtcbiAgICAvLyBTZXQgdXAgYSBwYXJlbnQgYXJyYXlcbiAgICBsZXQgcGFyZW50cyA9IFtdO1xuXG4gICAgLy8gUHVzaCBlYWNoIHBhcmVudCBlbGVtZW50IHRvIHRoZSBhcnJheVxuICAgIGZvciAoIDsgZWxlbSAmJiBlbGVtICE9PSBkb2N1bWVudDsgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSApIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKGVsZW0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBvdXIgcGFyZW50IGFycmF5XG4gICAgcmV0dXJuIHBhcmVudHM7XG59XG5cbi8vIGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbS9ob3ctdG8tZ2V0LXRoZS1jbG9zZXN0LXBhcmVudC1lbGVtZW50LXdpdGgtYS1tYXRjaGluZy1zZWxlY3Rvci11c2luZy12YW5pbGxhLWphdmFzY3JpcHQvXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlDbG9zZXN0UGFyZW50KGVsZW0sIHNlbGVjdG9yKSB7XG5cbiAgICAvLyBFbGVtZW50Lm1hdGNoZXMoKSBwb2x5ZmlsbFxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID1cbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSAodGhpcy5kb2N1bWVudCB8fCB0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwocyksXG4gICAgICAgICAgICAgICAgICAgIGkgPSBtYXRjaGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDAgJiYgbWF0Y2hlcy5pdGVtKGkpICE9PSB0aGlzKSB7fVxuICAgICAgICAgICAgICAgIHJldHVybiBpID4gLTE7XG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgY2xvc2VzdCBtYXRjaGluZyBlbGVtZW50XG4gICAgZm9yICggOyBlbGVtICYmIGVsZW0gIT09IGRvY3VtZW50OyBlbGVtID0gZWxlbS5wYXJlbnROb2RlICkge1xuICAgICAgICBpZiAoIGVsZW0ubWF0Y2hlcyggc2VsZWN0b3IgKSApIHJldHVybiBlbGVtO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcblxufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBsZXJwKHN0YXJ0LCBlbmQsIGFtdCl7XG4gICAgcmV0dXJuICgxIC0gYW10KSAqIHN0YXJ0ICsgYW10ICogZW5kXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKGVsLCB0cmFuc2Zvcm1WYWx1ZSl7XG4gICAgZWwuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XG4gICAgZWwuc3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbiAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0ZShlbCl7XG4gICAgY29uc3QgdHJhbnNsYXRlID0ge31cbiAgICBpZighd2luZG93LmdldENvbXB1dGVkU3R5bGUpIHJldHVybjtcblxuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtIHx8IHN0eWxlLndlYmtpdFRyYW5zZm9ybSB8fCBzdHlsZS5tb3pUcmFuc2Zvcm07XG5cbiAgICBsZXQgbWF0ID0gdHJhbnNmb3JtLm1hdGNoKC9ebWF0cml4M2RcXCgoLispXFwpJC8pO1xuICAgIGlmKG1hdCkgcmV0dXJuIHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzEzXSk7XG4gICAgbWF0ID0gdHJhbnNmb3JtLm1hdGNoKC9ebWF0cml4XFwoKC4rKVxcKSQvKTtcbiAgICB0cmFuc2xhdGUueCA9IG1hdCA/IHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzRdKSA6IDA7XG4gICAgdHJhbnNsYXRlLnkgPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVs1XSkgOiAwO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0ZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYoIW9iamVjdCkgcmV0dXJuIGNvbnNvbGUud2FybignYmluZEFsbCByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQuJyk7XG5cbiAgICB2YXIgZnVuY3Rpb25zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIGlmIChmdW5jdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgZm9yICh2YXIgbWV0aG9kIGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIG1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2Ygb2JqZWN0W21ldGhvZF0gPT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKG9iamVjdFttZXRob2RdKSA9PSBcIltvYmplY3QgRnVuY3Rpb25dXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25zLnB1c2gobWV0aG9kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZnVuY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmID0gZnVuY3Rpb25zW2ldO1xuICAgICAgICBvYmplY3RbZl0gPSBiaW5kKG9iamVjdFtmXSwgb2JqZWN0KTtcbiAgICB9XG59O1xuXG4vKlxuICAgIEZhc3RlciBiaW5kIHdpdGhvdXQgc3BlY2lmaWMtY2FzZSBjaGVja2luZy4gKHNlZSBodHRwczovL2NvZGVyd2FsbC5jb20vcC9vaTNqM3cpLlxuICAgIGJpbmRBbGwgaXMgb25seSBuZWVkZWQgZm9yIGV2ZW50cyBiaW5kaW5nIHNvIG5vIG5lZWQgdG8gbWFrZSBzbG93IGZpeGVzIGZvciBjb25zdHJ1Y3RvclxuICAgIG9yIHBhcnRpYWwgYXBwbGljYXRpb24uXG4qL1xuZnVuY3Rpb24gYmluZChmdW5jLCBjb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICB9O1xufSIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS45LjJcbihmdW5jdGlvbigpIHtcbiAgdmFyIHJvb3Q7XG5cbiAgcm9vdCA9IHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiICYmIGV4cG9ydHMgIT09IG51bGwgPyBleHBvcnRzIDogdGhpcztcblxuICByb290LkxldGhhcmd5ID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIExldGhhcmd5KHN0YWJpbGl0eSwgc2Vuc2l0aXZpdHksIHRvbGVyYW5jZSwgZGVsYXkpIHtcbiAgICAgIHRoaXMuc3RhYmlsaXR5ID0gc3RhYmlsaXR5ICE9IG51bGwgPyBNYXRoLmFicyhzdGFiaWxpdHkpIDogODtcbiAgICAgIHRoaXMuc2Vuc2l0aXZpdHkgPSBzZW5zaXRpdml0eSAhPSBudWxsID8gMSArIE1hdGguYWJzKHNlbnNpdGl2aXR5KSA6IDEwMDtcbiAgICAgIHRoaXMudG9sZXJhbmNlID0gdG9sZXJhbmNlICE9IG51bGwgPyAxICsgTWF0aC5hYnModG9sZXJhbmNlKSA6IDEuMTtcbiAgICAgIHRoaXMuZGVsYXkgPSBkZWxheSAhPSBudWxsID8gZGVsYXkgOiAxNTA7XG4gICAgICB0aGlzLmxhc3RVcERlbHRhcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgbGFzdERlbHRhO1xuICAgICAgZSA9IGUub3JpZ2luYWxFdmVudCB8fCBlO1xuICAgICAgaWYgKGUud2hlZWxEZWx0YSAhPSBudWxsKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUud2hlZWxEZWx0YTtcbiAgICAgIH0gZWxzZSBpZiAoZS5kZWx0YVkgIT0gbnVsbCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLmRlbHRhWSAqIC00MDtcbiAgICAgIH0gZWxzZSBpZiAoKGUuZGV0YWlsICE9IG51bGwpIHx8IGUuZGV0YWlsID09PSAwKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUuZGV0YWlsICogLTQwO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAucHVzaChEYXRlLm5vdygpKTtcbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wLnNoaWZ0KCk7XG4gICAgICBpZiAobGFzdERlbHRhID4gMCkge1xuICAgICAgICB0aGlzLmxhc3RVcERlbHRhcy5wdXNoKGxhc3REZWx0YSk7XG4gICAgICAgIHRoaXMubGFzdFVwRGVsdGFzLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5lcnRpYSgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGFzdERvd25EZWx0YXMucHVzaChsYXN0RGVsdGEpO1xuICAgICAgICB0aGlzLmxhc3REb3duRGVsdGFzLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5lcnRpYSgtMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5pc0luZXJ0aWEgPSBmdW5jdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBsYXN0RGVsdGFzLCBsYXN0RGVsdGFzTmV3LCBsYXN0RGVsdGFzT2xkLCBuZXdBdmVyYWdlLCBuZXdTdW0sIG9sZEF2ZXJhZ2UsIG9sZFN1bTtcbiAgICAgIGxhc3REZWx0YXMgPSBkaXJlY3Rpb24gPT09IC0xID8gdGhpcy5sYXN0RG93bkRlbHRhcyA6IHRoaXMubGFzdFVwRGVsdGFzO1xuICAgICAgaWYgKGxhc3REZWx0YXNbMF0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRlbHRhc1RpbWVzdGFtcFsodGhpcy5zdGFiaWxpdHkgKiAyKSAtIDJdICsgdGhpcy5kZWxheSA+IERhdGUubm93KCkgJiYgbGFzdERlbHRhc1swXSA9PT0gbGFzdERlbHRhc1sodGhpcy5zdGFiaWxpdHkgKiAyKSAtIDFdKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxhc3REZWx0YXNPbGQgPSBsYXN0RGVsdGFzLnNsaWNlKDAsIHRoaXMuc3RhYmlsaXR5KTtcbiAgICAgIGxhc3REZWx0YXNOZXcgPSBsYXN0RGVsdGFzLnNsaWNlKHRoaXMuc3RhYmlsaXR5LCB0aGlzLnN0YWJpbGl0eSAqIDIpO1xuICAgICAgb2xkU3VtID0gbGFzdERlbHRhc09sZC5yZWR1Y2UoZnVuY3Rpb24odCwgcykge1xuICAgICAgICByZXR1cm4gdCArIHM7XG4gICAgICB9KTtcbiAgICAgIG5ld1N1bSA9IGxhc3REZWx0YXNOZXcucmVkdWNlKGZ1bmN0aW9uKHQsIHMpIHtcbiAgICAgICAgcmV0dXJuIHQgKyBzO1xuICAgICAgfSk7XG4gICAgICBvbGRBdmVyYWdlID0gb2xkU3VtIC8gbGFzdERlbHRhc09sZC5sZW5ndGg7XG4gICAgICBuZXdBdmVyYWdlID0gbmV3U3VtIC8gbGFzdERlbHRhc05ldy5sZW5ndGg7XG4gICAgICBpZiAoTWF0aC5hYnMob2xkQXZlcmFnZSkgPCBNYXRoLmFicyhuZXdBdmVyYWdlICogdGhpcy50b2xlcmFuY2UpICYmICh0aGlzLnNlbnNpdGl2aXR5IDwgTWF0aC5hYnMobmV3QXZlcmFnZSkpKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5zaG93TGFzdFVwRGVsdGFzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0VXBEZWx0YXM7XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5zaG93TGFzdERvd25EZWx0YXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhc3REb3duRGVsdGFzO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGV0aGFyZ3k7XG5cbiAgfSkoKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJmdW5jdGlvbiBFICgpIHtcbiAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59XG5cbkUucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzb3VyY2UpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCd0aW55LWVtaXR0ZXInKTtcbnZhciBMZXRoYXJneSA9IHJlcXVpcmUoJ2xldGhhcmd5JykuTGV0aGFyZ3k7XG52YXIgc3VwcG9ydCA9IHJlcXVpcmUoJy4vc3VwcG9ydCcpO1xudmFyIGNsb25lID0gcmVxdWlyZSgnLi9jbG9uZScpO1xudmFyIGJpbmRBbGwgPSByZXF1aXJlKCdiaW5kYWxsLXN0YW5kYWxvbmUnKTtcbnZhciBFVlRfSUQgPSAndmlydHVhbHNjcm9sbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbFNjcm9sbDtcblxudmFyIGtleUNvZGVzID0ge1xuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG4gICAgU1BBQ0U6IDMyXG59O1xuXG5mdW5jdGlvbiBWaXJ0dWFsU2Nyb2xsKG9wdGlvbnMpIHtcbiAgICBiaW5kQWxsKHRoaXMsICdfb25XaGVlbCcsICdfb25Nb3VzZVdoZWVsJywgJ19vblRvdWNoU3RhcnQnLCAnX29uVG91Y2hNb3ZlJywgJ19vbktleURvd24nKTtcblxuICAgIHRoaXMuZWwgPSB3aW5kb3c7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbCkge1xuICAgICAgICB0aGlzLmVsID0gb3B0aW9ucy5lbDtcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMuZWw7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG9iamVjdEFzc2lnbih7XG4gICAgICAgIG1vdXNlTXVsdGlwbGllcjogMSxcbiAgICAgICAgdG91Y2hNdWx0aXBsaWVyOiAyLFxuICAgICAgICBmaXJlZm94TXVsdGlwbGllcjogMTUsXG4gICAgICAgIGtleVN0ZXA6IDEyMCxcbiAgICAgICAgcHJldmVudFRvdWNoOiBmYWxzZSxcbiAgICAgICAgdW5wcmV2ZW50VG91Y2hDbGFzczogJ3ZzLXRvdWNobW92ZS1hbGxvd2VkJyxcbiAgICAgICAgbGltaXRJbmVydGlhOiBmYWxzZSxcbiAgICAgICAgdXNlS2V5Ym9hcmQ6IHRydWVcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbmVydGlhKSB0aGlzLl9sZXRoYXJneSA9IG5ldyBMZXRoYXJneSgpO1xuXG4gICAgdGhpcy5fZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG4gICAgdGhpcy5fZXZlbnQgPSB7XG4gICAgICAgIHk6IDAsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgZGVsdGFZOiAwXG4gICAgfTtcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLmJvZHlUb3VjaEFjdGlvbiA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnBhc3NpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyT3B0aW9ucyA9IHtwYXNzaXZlOiB0aGlzLm9wdGlvbnMucGFzc2l2ZX07XG4gICAgfVxufVxuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fbm90aWZ5ID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQueCArPSBldnQuZGVsdGFYO1xuICAgIGV2dC55ICs9IGV2dC5kZWx0YVk7XG5cbiAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFVlRfSUQsIHtcbiAgICAgICAgeDogZXZ0LngsXG4gICAgICAgIHk6IGV2dC55LFxuICAgICAgICBkZWx0YVg6IGV2dC5kZWx0YVgsXG4gICAgICAgIGRlbHRhWTogZXZ0LmRlbHRhWSxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZVxuICAgfSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25XaGVlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAodGhpcy5fbGV0aGFyZ3kgJiYgdGhpcy5fbGV0aGFyZ3kuY2hlY2soZSkgPT09IGZhbHNlKSByZXR1cm47XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgLy8gSW4gQ2hyb21lIGFuZCBpbiBGaXJlZm94IChhdCBsZWFzdCB0aGUgbmV3IG9uZSlcbiAgICBldnQuZGVsdGFYID0gZS53aGVlbERlbHRhWCB8fCBlLmRlbHRhWCAqIC0xO1xuICAgIGV2dC5kZWx0YVkgPSBlLndoZWVsRGVsdGFZIHx8IGUuZGVsdGFZICogLTE7XG5cbiAgICAvLyBmb3Igb3VyIHB1cnBvc2UgZGVsdGFtb2RlID0gMSBtZWFucyB1c2VyIGlzIG9uIGEgd2hlZWwgbW91c2UsIG5vdCB0b3VjaCBwYWRcbiAgICAvLyByZWFsIG1lYW5pbmc6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaGVlbEV2ZW50I0RlbHRhX21vZGVzXG4gICAgaWYoc3VwcG9ydC5pc0ZpcmVmb3ggJiYgZS5kZWx0YU1vZGUgPT0gMSkge1xuICAgICAgICBldnQuZGVsdGFYICo9IG9wdGlvbnMuZmlyZWZveE11bHRpcGxpZXI7XG4gICAgICAgIGV2dC5kZWx0YVkgKj0gb3B0aW9ucy5maXJlZm94TXVsdGlwbGllcjtcbiAgICB9XG5cbiAgICBldnQuZGVsdGFYICo9IG9wdGlvbnMubW91c2VNdWx0aXBsaWVyO1xuICAgIGV2dC5kZWx0YVkgKj0gb3B0aW9ucy5tb3VzZU11bHRpcGxpZXI7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Nb3VzZVdoZWVsID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbmVydGlhICYmIHRoaXMuX2xldGhhcmd5LmNoZWNrKGUpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgLy8gSW4gU2FmYXJpLCBJRSBhbmQgaW4gQ2hyb21lIGlmICd3aGVlbCcgaXNuJ3QgZGVmaW5lZFxuICAgIGV2dC5kZWx0YVggPSAoZS53aGVlbERlbHRhWCkgPyBlLndoZWVsRGVsdGFYIDogMDtcbiAgICBldnQuZGVsdGFZID0gKGUud2hlZWxEZWx0YVkpID8gZS53aGVlbERlbHRhWSA6IGUud2hlZWxEZWx0YTtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vblRvdWNoU3RhcnQgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHQgPSAoZS50YXJnZXRUb3VjaGVzKSA/IGUudGFyZ2V0VG91Y2hlc1swXSA6IGU7XG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IHQucGFnZVg7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IHQucGFnZVk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Ub3VjaE1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYob3B0aW9ucy5wcmV2ZW50VG91Y2hcbiAgICAgICAgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhvcHRpb25zLnVucHJldmVudFRvdWNoQ2xhc3MpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICB2YXIgdCA9IChlLnRhcmdldFRvdWNoZXMpID8gZS50YXJnZXRUb3VjaGVzWzBdIDogZTtcblxuICAgIGV2dC5kZWx0YVggPSAodC5wYWdlWCAtIHRoaXMudG91Y2hTdGFydFgpICogb3B0aW9ucy50b3VjaE11bHRpcGxpZXI7XG4gICAgZXZ0LmRlbHRhWSA9ICh0LnBhZ2VZIC0gdGhpcy50b3VjaFN0YXJ0WSkgKiBvcHRpb25zLnRvdWNoTXVsdGlwbGllcjtcblxuICAgIHRoaXMudG91Y2hTdGFydFggPSB0LnBhZ2VYO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSB0LnBhZ2VZO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uS2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LmRlbHRhWCA9IGV2dC5kZWx0YVkgPSAwO1xuICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA0MFxuXG4gICAgc3dpdGNoKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIGtleUNvZGVzLkxFRlQ6XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuVVA6XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gdGhpcy5vcHRpb25zLmtleVN0ZXA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGtleUNvZGVzLlJJR0hUOlxuICAgICAgICBjYXNlIGtleUNvZGVzLkRPV046XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gLSB0aGlzLm9wdGlvbnMua2V5U3RlcDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGtleUNvZGVzLlNQQUNFICYmIGUuc2hpZnRLZXk6XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gd2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuU1BBQ0U6XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gLSB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fYmluZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHN1cHBvcnQuaGFzV2hlZWxFdmVudCkgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuX29uV2hlZWwsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICBpZihzdXBwb3J0Lmhhc01vdXNlV2hlZWxFdmVudCkgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5fb25Nb3VzZVdoZWVsLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG5cbiAgICBpZihzdXBwb3J0Lmhhc1RvdWNoKSB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uVG91Y2hTdGFydCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNQb2ludGVyICYmIHN1cHBvcnQuaGFzVG91Y2hXaW4pIHtcbiAgICAgICAgdGhpcy5ib2R5VG91Y2hBY3Rpb24gPSBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb247XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbiA9ICdub25lJztcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJNb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRydWUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzS2V5RG93biAmJiB0aGlzLm9wdGlvbnMudXNlS2V5Ym9hcmQpIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX3VuYmluZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHN1cHBvcnQuaGFzV2hlZWxFdmVudCkgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuX29uV2hlZWwpO1xuICAgIGlmKHN1cHBvcnQuaGFzTW91c2VXaGVlbEV2ZW50KSB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLl9vbk1vdXNlV2hlZWwpO1xuXG4gICAgaWYoc3VwcG9ydC5oYXNUb3VjaCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc1BvaW50ZXIgJiYgc3VwcG9ydC5oYXNUb3VjaFdpbikge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb24gPSB0aGlzLmJvZHlUb3VjaEFjdGlvbjtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJNb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRydWUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzS2V5RG93biAmJiB0aGlzLm9wdGlvbnMudXNlS2V5Ym9hcmQpIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihjYiwgY3R4KSB7XG4gIHRoaXMuX2VtaXR0ZXIub24oRVZUX0lELCBjYiwgY3R4KTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZW1pdHRlci5lO1xuICBpZiAoZXZlbnRzICYmIGV2ZW50c1tFVlRfSURdICYmIGV2ZW50c1tFVlRfSURdLmxlbmd0aCA9PT0gMSkgdGhpcy5fYmluZCgpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oY2IsIGN0eCkge1xuICB0aGlzLl9lbWl0dGVyLm9mZihFVlRfSUQsIGNiLCBjdHgpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9lbWl0dGVyLmU7XG4gIGlmICghZXZlbnRzW0VWVF9JRF0gfHwgZXZlbnRzW0VWVF9JRF0ubGVuZ3RoIDw9IDApIHRoaXMuX3VuYmluZCgpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LnggPSAwO1xuICAgIGV2dC55ID0gMDtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9mZigpO1xuICAgIHRoaXMuX3VuYmluZCgpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gZ2V0U3VwcG9ydCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoYXNXaGVlbEV2ZW50OiAnb253aGVlbCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc01vdXNlV2hlZWxFdmVudDogJ29ubW91c2V3aGVlbCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc1RvdWNoOiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudCxcbiAgICAgICAgaGFzVG91Y2hXaW46IG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzICYmIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMSxcbiAgICAgICAgaGFzUG9pbnRlcjogISF3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQsXG4gICAgICAgIGhhc0tleURvd246ICdvbmtleWRvd24nIGluIGRvY3VtZW50LFxuICAgICAgICBpc0ZpcmVmb3g6IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID4gLTFcbiAgICB9O1xufSkoKTtcbiJdfQ==
