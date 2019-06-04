(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _main = _interopRequireDefault(require("./scroll/main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function () {
  var scroll = new _main["default"]({
    el: document.querySelector('#js-scroll'),
    sections: '.js-section',
    selector: '[data-scroll]',
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

},{"./scroll/main":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _options = require("./options");

var _scroll = _interopRequireDefault(require("./scroll"));

var _smoothScroll = _interopRequireDefault(require("./smoothScroll.js"));

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
        this.scroll = new _smoothScroll["default"](this.options);
      } else {
        this.scroll = new _scroll["default"](this.options);
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

},{"./options":3,"./scroll":4,"./smoothScroll.js":5}],3:[function(require,module,exports){
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
  sections: '.js-section',
  getDirection: false,
  getSpeed: false
};
exports.defaults = defaults;

},{}],4:[function(require,module,exports){
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
    this.namespace = 'modular';
    this.windowHeight = window.innerHeight;
    this.els = [];
    this.scrollPosition = 0;
    this.frame = false;
    this.checkScroll = this.checkScroll.bind(this);
    this.checkResize = this.checkResize.bind(this);
    window.addEventListener('scroll', this.checkScroll, false);
    window.addEventListener('resize', this.checkResize, false);
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.scrollPosition = window.scrollY;
      var els = this.el.querySelectorAll('[data-' + this.name + ']');
      els.forEach(function (el, i) {
        var cl = el.dataset[_this.name + '-class'] || _this["class"];

        var top = el.getBoundingClientRect().top + _this.scrollPosition;

        var bottom = top + el.offsetHeight;
        var offset = parseInt(el.dataset[_this.name + '-offset']) || parseInt(_this.offset);
        var repeat = el.dataset[_this.name + '-repeat'];
        var call = el.dataset[_this.name + '-call'];

        if (repeat == 'false') {
          repeat = false;
        } else if (repeat != undefined) {
          repeat = true;
        } else {
          repeat = _this.repeat;
        }

        _this.els[i] = {
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
      this.detectElements();
    }
  }, {
    key: "update",
    value: function update() {
      this.updateElements();
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var _this2 = this;

      if (this.els.length) {
        this.scrollPosition = window.scrollY;

        if (!this.frame) {
          requestAnimationFrame(function () {
            _this2.detectElements();
          });
          this.frame = true;
        }
      }
    }
  }, {
    key: "checkResize",
    value: function checkResize() {
      var _this3 = this;

      if (this.els.length) {
        this.windowHeight = window.innerHeight;

        if (!this.frame) {
          requestAnimationFrame(function () {
            _this3.updateElements();
          });
          this.frame = true;
        }
      }
    }
  }, {
    key: "detectElements",
    value: function detectElements() {
      var _this4 = this;

      var scrollTop = this.scrollPosition;
      var scrollBottom = scrollTop + this.windowHeight;
      this.els.forEach(function (el, i) {
        if (!el.inView) {
          if (scrollBottom > el.top && scrollTop < el.bottom) {
            _this4.setInView(el, i);
          }
        } else {
          if (scrollBottom < el.top || scrollTop > el.bottom) {
            _this4.setOutOfView(el, i);
          }
        }
      });
      this.frame = false;
    }
  }, {
    key: "setInView",
    value: function setInView(el, i) {
      if (el.repeat) {
        this.els[i].inView = true;
      } else {
        this.els.splice(i, 1);
      }

      el.el.classList.add(el["class"]);

      if (el.call) {
        this.callValue = el.call.split(',').map(function (item) {
          return item.trim();
        });
        if (this.callValue.length == 1) this.callValue = this.callValue[0];
        var callEvent = new Event(this.namespace + 'call');
        window.dispatchEvent(callEvent);
      }
    }
  }, {
    key: "setOutOfView",
    value: function setOutOfView(el, i) {
      this.els[i].inView = false;
      el.el.classList.remove(el["class"]);
    }
  }, {
    key: "updateElements",
    value: function updateElements() {
      var _this5 = this;

      this.els.forEach(function (el, i) {
        var top = el.el.getBoundingClientRect().top + _this5.scrollPosition;

        var bottom = top + el.el.offsetHeight;
        _this5.els[i].top = top + el.offset;
        _this5.els[i].bottom = bottom;
      });
      this.frame = false;
    }
  }, {
    key: "on",
    value: function on(event, func) {
      var _this6 = this;

      window.addEventListener(this.namespace + event, function () {
        switch (event) {
          case 'call':
            return func(_this6.callValue);

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

},{"./options":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _virtualScroll = _interopRequireDefault(require("virtual-scroll"));

var _scroll2 = _interopRequireDefault(require("./scroll"));

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

var html = document.documentElement;

var _default =
/*#__PURE__*/
function (_scroll) {
  _inherits(_default, _scroll);

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
    return _this;
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      html.classList.add(this.smoothClass);
      this.instance = new _virtualScroll["default"]({
        mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
        touchMultiplier: 4,
        firefoxMultiplier: 30
      });
      this.instance.scroll = {
        x: 0,
        y: 0,
        direction: null
      };
      this.instance.delta = {
        x: 0,
        y: 0
      };
      this.setScrollLimit();
      this.instance.on(function (e) {
        if (!_this2.isTicking && !_this2.isDraggingScrollBar) {
          requestAnimationFrame(function () {
            if (!_this2.isScrolling) _this2.startScrolling();

            _this2.updateDelta(e);
          });
          _this2.isTicking = true;
        }

        _this2.isTicking = false;
      });
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
        this.transform(this.el, 0, -this.instance.scroll.y);

        if (this.getDirection) {
          this.getDirection();
        }

        if (this.getSpeed) {
          this.getSpeed();
          this.timestamp = Date.now();
        }

        this.hasScrollTicking = false;
      }
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
        this.instance.scroll.y = this.lerp(this.instance.scroll.y, this.instance.delta.y, this.inertia);
      } else if (this.isDraggingScrollBar) {
        this.instance.scroll.y = this.lerp(this.instance.scroll.y, this.instance.delta.y, this.inertia * 2);
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
    } // render(isFirstCall, e) {
    //     for (let i = this.sections.length - 1; i >= 0; i--) {
    //         if(this.instance.scroll.y > this.sections[i].offset && this.instance.scroll.y < this.sections[i].limit) {
    //             this.transform(this.sections[i].element,0,-this.instance.scroll.y);
    //             this.sections[i].element.style.visibility = 'visible';
    //         } else {
    //             this.sections[i].element.style.visibility = 'hidden';
    //         }
    //     }
    //     this.transformElements(isFirstCall);
    //     this.animateElements();
    //     // scrollbar translation
    //     let scrollBarTranslation = (this.instance.scroll.y / this.instance.limit) * this.scrollBarLimit;
    //     this.transform(this.scrollbar,0,scrollBarTranslation);
    // }

  }, {
    key: "lerp",
    value: function lerp(start, end, amt) {
      return (1 - amt) * start + amt * end;
    }
  }, {
    key: "transform",
    value: function transform(element, x, y, delay) {
      var transform = "matrix(1,0,0,1,".concat(x, ",").concat(y, ")");
      element.style.webkitTransform = transform;
      element.style.msTransform = transform;
      element.style.transform = transform;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);
    }
  }]);

  return _default;
}(_scroll2["default"]);

exports["default"] = _default;

},{"./scroll":4,"virtual-scroll":11}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
'use strict';

module.exports = function(source) {
    return JSON.parse(JSON.stringify(source));
};
},{}],11:[function(require,module,exports){
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

},{"./clone":10,"./support":12,"bindall-standalone":6,"lethargy":7,"object-assign":8,"tiny-emitter":9}],12:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9hcHAuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvbWFpbi5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC9vcHRpb25zLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL3Njcm9sbC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC9zbW9vdGhTY3JvbGwuanMiLCJub2RlX21vZHVsZXMvYmluZGFsbC1zdGFuZGFsb25lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xldGhhcmd5L2xldGhhcmd5LmpzIiwibm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvbm9kZV9tb2R1bGVzL3RpbnktZW1pdHRlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLXNjcm9sbC9zcmMvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvc3JjL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtc2Nyb2xsL3NyYy9zdXBwb3J0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUVBLENBQUMsWUFBVztBQUVSLE1BQU0sTUFBTSxHQUFHLElBQUksZ0JBQUosQ0FBcUI7QUFDaEMsSUFBQSxFQUFFLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FENEI7QUFFaEMsSUFBQSxRQUFRLEVBQUUsYUFGc0I7QUFHaEMsSUFBQSxRQUFRLEVBQUUsZUFIc0I7QUFJaEMsSUFBQSxNQUFNLEVBQUUsSUFKd0I7QUFLaEMsSUFBQSxZQUFZLEVBQUUsSUFMa0I7QUFNaEMsSUFBQSxlQUFlLEVBQUUsQ0FBQyxDQUFDLFFBQUQsQ0FOYztBQU9oQyxJQUFBLE9BQU8sRUFBRSxDQVB1QjtBQVFoQyxJQUFBLGtCQUFrQixFQUFFLGFBUlk7QUFTaEMsSUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgbG9jb21vdGl2ZVNjcm9sbCBmcm9tICcuL3Njcm9sbC9tYWluJztcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3Qgc2Nyb2xsID0gbmV3IGxvY29tb3RpdmVTY3JvbGwoe1xuICAgICAgICBlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLXNjcm9sbCcpLFxuICAgICAgICBzZWN0aW9uczogJy5qcy1zZWN0aW9uJyxcbiAgICAgICAgc2VsZWN0b3I6ICdbZGF0YS1zY3JvbGxdJyxcbiAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICBzbW9vdGhNb2JpbGU6IHRydWUsXG4gICAgICAgIG1vYmlsZUNvbnRhaW5lcjogJChkb2N1bWVudCksXG4gICAgICAgIGluZXJ0aWE6IDEsXG4gICAgICAgIHNjcm9sbEJhckNsYXNzTmFtZTogJ28tc2Nyb2xsYmFyJyxcbiAgICAgICAgaXNTY3JvbGxpbmdDbGFzc05hbWU6ICdpcy1zY3JvbGxpbmcnLFxuICAgICAgICBvblNjcm9sbDogKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUuc2Nyb2xsLnkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn0pKCk7XG4iLCJpbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgc2Nyb2xsIGZyb20gJy4vc2Nyb2xsJztcbmltcG9ydCBzbW9vdGhTY3JvbGwgZnJvbSAnLi9zbW9vdGhTY3JvbGwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zbW9vdGhNb2JpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGUgPSAoL0FuZHJvaWR8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNtb290aCA9PSB0cnVlICYmICF0aGlzLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbCA9IG5ldyBzbW9vdGhTY3JvbGwodGhpcy5vcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsID0gbmV3IHNjcm9sbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGwuaW5pdCgpO1xuXG4gICAgICAgIC8vIGNvbnN0ICRzY3JvbGxUb09uTG9hZEVsID0gJCgnLmpzLXNjcm9sbHRvLW9uLWxvYWQnKS5maXJzdCgpO1xuXG4gICAgICAgIC8vIGlmICgkc2Nyb2xsVG9PbkxvYWRFbC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gICAgICRkb2N1bWVudC50cmlnZ2VySGFuZGxlcih7XG4gICAgICAgIC8vICAgICAgICAgdHlwZTogJ0V2ZW50LlNDUk9MTFRPJyxcbiAgICAgICAgLy8gICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRhcmdldEVsZW06ICRzY3JvbGxUb09uTG9hZEVsXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnNjcm9sbC5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIGVsOiBkb2N1bWVudCxcbiAgICBlbE1vYmlsZTogZG9jdW1lbnQsXG4gICAgbmFtZTogJ3Njcm9sbCcsXG4gICAgY2xhc3M6ICdpcy1pbnZpZXcnLFxuICAgIHNjcm9sbGluZ0NsYXNzOiAnaXMtc2Nyb2xsaW5nJyxcbiAgICBzbW9vdGhDbGFzczogJ2hhcy1zbW9vdGhzY3JvbGwnLFxuICAgIG9mZnNldDogMCxcbiAgICBpbmVydGlhOiAxLFxuICAgIHJlcGVhdDogZmFsc2UsXG4gICAgc21vb3RoOiBmYWxzZSxcbiAgICBzbW9vdGhNb2JpbGU6IGZhbHNlLFxuICAgIHNlY3Rpb25zOiAnLmpzLXNlY3Rpb24nLFxuICAgIGdldERpcmVjdGlvbjogZmFsc2UsXG4gICAgZ2V0U3BlZWQ6IGZhbHNlXG59O1xuIiwiaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL29wdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMubmFtZXNwYWNlID0gJ21vZHVsYXInO1xuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy5lbHMgPSBbXTtcbiAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuZnJhbWUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsID0gdGhpcy5jaGVja1Njcm9sbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrUmVzaXplID0gdGhpcy5jaGVja1Jlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNoZWNrU2Nyb2xsLCBmYWxzZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNoZWNrUmVzaXplLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICAgIGNvbnN0IGVscyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtJyt0aGlzLm5hbWUrJ10nKTtcblxuICAgICAgICBlbHMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgIGxldCBjbCA9IGVsLmRhdGFzZXRbdGhpcy5uYW1lICsgJy1jbGFzcyddIHx8IHRoaXMuY2xhc3M7XG4gICAgICAgICAgICBsZXQgdG9wID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy5zY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgICAgIGxldCBib3R0b20gPSB0b3AgKyBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gcGFyc2VJbnQoZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnLW9mZnNldCddKSB8fCBwYXJzZUludCh0aGlzLm9mZnNldCk7XG4gICAgICAgICAgICBsZXQgcmVwZWF0ID0gZWwuZGF0YXNldFt0aGlzLm5hbWUgKyAnLXJlcGVhdCddO1xuICAgICAgICAgICAgbGV0IGNhbGwgPSBlbC5kYXRhc2V0W3RoaXMubmFtZSArICctY2FsbCddO1xuXG4gICAgICAgICAgICBpZihyZXBlYXQgPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXBlYXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0ID0gdGhpcy5yZXBlYXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZWxzW2ldID0ge1xuICAgICAgICAgICAgICAgIGVsOiBlbCxcbiAgICAgICAgICAgICAgICBjbGFzczogY2wsXG4gICAgICAgICAgICAgICAgdG9wOiB0b3AgKyBvZmZzZXQsXG4gICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICAgICAgICAgICAgaW5WaWV3OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjYWxsOiBjYWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICBjaGVja1Njcm9sbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICAgICAgICBpZighdGhpcy5mcmFtZSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrUmVzaXplKCkge1xuICAgICAgICBpZiAodGhpcy5lbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgaWYoIXRoaXMuZnJhbWUpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnRzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3RFbGVtZW50cygpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgY29uc3Qgc2Nyb2xsQm90dG9tID0gc2Nyb2xsVG9wICsgdGhpcy53aW5kb3dIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5lbHMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgIGlmICghZWwuaW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgaWYgKChzY3JvbGxCb3R0b20gPiBlbC50b3ApICYmIChzY3JvbGxUb3AgPCBlbC5ib3R0b20pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5WaWV3KGVsLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgoc2Nyb2xsQm90dG9tIDwgZWwudG9wKSB8fCAoc2Nyb2xsVG9wID4gZWwuYm90dG9tKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE91dE9mVmlldyhlbCwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZyYW1lID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0SW5WaWV3KGVsLCBpKSB7XG4gICAgICAgIGlmIChlbC5yZXBlYXQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxzW2ldLmluVmlldyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVscy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbC5lbC5jbGFzc0xpc3QuYWRkKGVsLmNsYXNzKTtcblxuICAgICAgICBpZiAoZWwuY2FsbCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsVmFsdWUgPSBlbC5jYWxsLnNwbGl0KCcsJykubWFwKGl0ZW0gPT4gaXRlbS50cmltKCkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FsbFZhbHVlLmxlbmd0aCA9PSAxKSB0aGlzLmNhbGxWYWx1ZSA9IHRoaXMuY2FsbFZhbHVlWzBdO1xuXG4gICAgICAgICAgICBjb25zdCBjYWxsRXZlbnQgPSBuZXcgRXZlbnQodGhpcy5uYW1lc3BhY2UgKyAnY2FsbCcpO1xuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoY2FsbEV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE91dE9mVmlldyhlbCwgaSkge1xuICAgICAgICB0aGlzLmVsc1tpXS5pblZpZXcgPSBmYWxzZTtcbiAgICAgICAgZWwuZWwuY2xhc3NMaXN0LnJlbW92ZShlbC5jbGFzcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlRWxlbWVudHMoKSB7XG4gICAgICAgIHRoaXMuZWxzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSBlbC5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0aGlzLnNjcm9sbFBvc2l0aW9uO1xuICAgICAgICAgICAgY29uc3QgYm90dG9tID0gdG9wICsgZWwuZWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICB0aGlzLmVsc1tpXS50b3AgPSB0b3AgKyBlbC5vZmZzZXQ7XG4gICAgICAgICAgICB0aGlzLmVsc1tpXS5ib3R0b20gPSBib3R0b207XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZnJhbWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbihldmVudCwgZnVuYykge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWVzcGFjZSArIGV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2FsbCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jKHRoaXMuY2FsbFZhbHVlKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hlY2tTY3JvbGwsIGZhbHNlKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2hlY2tSZXNpemUsIGZhbHNlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgdmlydHVhbFNjcm9sbCBmcm9tICd2aXJ0dWFsLXNjcm9sbCc7XG5pbXBvcnQgc2Nyb2xsIGZyb20gJy4vc2Nyb2xsJztcblxuY29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBzY3JvbGwge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmluZXJ0aWEgPSB0aGlzLmluZXJ0aWEgKiAwLjE7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLnNtb290aENsYXNzKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IHZpcnR1YWxTY3JvbGwoe1xuICAgICAgICAgICAgbW91c2VNdWx0aXBsaWVyOiAobmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoJ1dpbicpID4gLTEpID8gMSA6IDAuNCxcbiAgICAgICAgICAgIHRvdWNoTXVsdGlwbGllcjogNCxcbiAgICAgICAgICAgIGZpcmVmb3hNdWx0aXBsaWVyOiAzMFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbCA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTGltaXQoKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlLm9uKChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNUaWNraW5nICYmICF0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNTY3JvbGxpbmcpIHRoaXMuc3RhcnRTY3JvbGxpbmcoKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlbHRhKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFNjcm9sbExpbWl0KCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmxpbWl0ID0gdGhpcy5lbC5vZmZzZXRIZWlnaHQgLSB0aGlzLndpbmRvd0hlaWdodDtcbiAgICB9XG5cbiAgICBzdGFydFNjcm9sbGluZygpIHtcbiAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGwoKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgIH1cblxuICAgIHN0b3BTY3JvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IE1hdGgucm91bmQodGhpcy5pbnN0YW5jZS5zY3JvbGwueSk7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNjcm9sbGluZ0NsYXNzKTtcbiAgICB9XG5cbiAgICBjaGVja1Njcm9sbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTY3JvbGxpbmcgfHwgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzU2Nyb2xsVGlja2luZykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PsKgdGhpcy5jaGVja1Njcm9sbCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IChNYXRoLmFicyh0aGlzLmluc3RhbmNlLmRlbHRhLnkgLSB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSk7XG4gICAgICAgICAgICBpZiAoKGRpc3RhbmNlIDwgMSAmJiB0aGlzLmluc3RhbmNlLmRlbHRhLnkgIT0gMCkgfHwgKGRpc3RhbmNlIDwgMC41ICYmIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9PSAwKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5lbCwgMCwgLXRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5nZXREaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldERpcmVjdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRTcGVlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3BlZWQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlRGVsdGEoZSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgLT0gZS5kZWx0YVk7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgPCAwKSB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSAwO1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55ID4gdGhpcy5pbnN0YW5jZS5saW1pdCkgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0gdGhpcy5pbnN0YW5jZS5saW1pdDtcbiAgICB9XG5cbiAgICB1cGRhdGVTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gdGhpcy5sZXJwKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnksIHRoaXMuaW5zdGFuY2UuZGVsdGEueSwgdGhpcy5pbmVydGlhKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB0aGlzLmxlcnAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSwgdGhpcy5pbnN0YW5jZS5kZWx0YS55LCAodGhpcy5pbmVydGlhICogMikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55ID4gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA8IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U3BlZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgIT0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuc3BlZWQgPSAodGhpcy5pbnN0YW5jZS5kZWx0YS55IC0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkgLyAoRGF0ZS5ub3coKSAtIHRoaXMudGltZXN0YW1wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnNwZWVkID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlbmRlcihpc0ZpcnN0Q2FsbCwgZSkge1xuICAgIC8vICAgICBmb3IgKGxldCBpID0gdGhpcy5zZWN0aW9ucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIC8vICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+IHRoaXMuc2VjdGlvbnNbaV0ub2Zmc2V0ICYmIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPCB0aGlzLnNlY3Rpb25zW2ldLmxpbWl0KSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5zZWN0aW9uc1tpXS5lbGVtZW50LDAsLXRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2VjdGlvbnNbaV0uZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zW2ldLmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cyhpc0ZpcnN0Q2FsbCk7XG4gICAgLy8gICAgIHRoaXMuYW5pbWF0ZUVsZW1lbnRzKCk7XG5cbiAgICAvLyAgICAgLy8gc2Nyb2xsYmFyIHRyYW5zbGF0aW9uXG4gICAgLy8gICAgIGxldCBzY3JvbGxCYXJUcmFuc2xhdGlvbiA9ICh0aGlzLmluc3RhbmNlLnNjcm9sbC55IC8gdGhpcy5pbnN0YW5jZS5saW1pdCkgKiB0aGlzLnNjcm9sbEJhckxpbWl0O1xuICAgIC8vICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLnNjcm9sbGJhciwwLHNjcm9sbEJhclRyYW5zbGF0aW9uKTtcbiAgICAvLyB9XG5cbiAgICBsZXJwKHN0YXJ0LCBlbmQsIGFtdCl7XG4gICAgICAgIHJldHVybiAoMSAtIGFtdCkgKiBzdGFydCArIGFtdCAqIGVuZFxuICAgIH1cblxuICAgIHRyYW5zZm9ybShlbGVtZW50LCB4LCB5LCBkZWxheSkge1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgbWF0cml4KDEsMCwwLDEsJHt4fSwke3l9KWBcblxuICAgICAgICBlbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tc1RyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYoIW9iamVjdCkgcmV0dXJuIGNvbnNvbGUud2FybignYmluZEFsbCByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQuJyk7XG5cbiAgICB2YXIgZnVuY3Rpb25zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIGlmIChmdW5jdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgZm9yICh2YXIgbWV0aG9kIGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIG1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2Ygb2JqZWN0W21ldGhvZF0gPT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKG9iamVjdFttZXRob2RdKSA9PSBcIltvYmplY3QgRnVuY3Rpb25dXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25zLnB1c2gobWV0aG9kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZnVuY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmID0gZnVuY3Rpb25zW2ldO1xuICAgICAgICBvYmplY3RbZl0gPSBiaW5kKG9iamVjdFtmXSwgb2JqZWN0KTtcbiAgICB9XG59O1xuXG4vKlxuICAgIEZhc3RlciBiaW5kIHdpdGhvdXQgc3BlY2lmaWMtY2FzZSBjaGVja2luZy4gKHNlZSBodHRwczovL2NvZGVyd2FsbC5jb20vcC9vaTNqM3cpLlxuICAgIGJpbmRBbGwgaXMgb25seSBuZWVkZWQgZm9yIGV2ZW50cyBiaW5kaW5nIHNvIG5vIG5lZWQgdG8gbWFrZSBzbG93IGZpeGVzIGZvciBjb25zdHJ1Y3RvclxuICAgIG9yIHBhcnRpYWwgYXBwbGljYXRpb24uXG4qL1xuZnVuY3Rpb24gYmluZChmdW5jLCBjb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICB9O1xufSIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS45LjJcbihmdW5jdGlvbigpIHtcbiAgdmFyIHJvb3Q7XG5cbiAgcm9vdCA9IHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiICYmIGV4cG9ydHMgIT09IG51bGwgPyBleHBvcnRzIDogdGhpcztcblxuICByb290LkxldGhhcmd5ID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIExldGhhcmd5KHN0YWJpbGl0eSwgc2Vuc2l0aXZpdHksIHRvbGVyYW5jZSwgZGVsYXkpIHtcbiAgICAgIHRoaXMuc3RhYmlsaXR5ID0gc3RhYmlsaXR5ICE9IG51bGwgPyBNYXRoLmFicyhzdGFiaWxpdHkpIDogODtcbiAgICAgIHRoaXMuc2Vuc2l0aXZpdHkgPSBzZW5zaXRpdml0eSAhPSBudWxsID8gMSArIE1hdGguYWJzKHNlbnNpdGl2aXR5KSA6IDEwMDtcbiAgICAgIHRoaXMudG9sZXJhbmNlID0gdG9sZXJhbmNlICE9IG51bGwgPyAxICsgTWF0aC5hYnModG9sZXJhbmNlKSA6IDEuMTtcbiAgICAgIHRoaXMuZGVsYXkgPSBkZWxheSAhPSBudWxsID8gZGVsYXkgOiAxNTA7XG4gICAgICB0aGlzLmxhc3RVcERlbHRhcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgbGFzdERlbHRhO1xuICAgICAgZSA9IGUub3JpZ2luYWxFdmVudCB8fCBlO1xuICAgICAgaWYgKGUud2hlZWxEZWx0YSAhPSBudWxsKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUud2hlZWxEZWx0YTtcbiAgICAgIH0gZWxzZSBpZiAoZS5kZWx0YVkgIT0gbnVsbCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLmRlbHRhWSAqIC00MDtcbiAgICAgIH0gZWxzZSBpZiAoKGUuZGV0YWlsICE9IG51bGwpIHx8IGUuZGV0YWlsID09PSAwKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUuZGV0YWlsICogLTQwO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAucHVzaChEYXRlLm5vdygpKTtcbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wLnNoaWZ0KCk7XG4gICAgICBpZiAobGFzdERlbHRhID4gMCkge1xuICAgICAgICB0aGlzLmxhc3RVcERlbHRhcy5wdXNoKGxhc3REZWx0YSk7XG4gICAgICAgIHRoaXMubGFzdFVwRGVsdGFzLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5lcnRpYSgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGFzdERvd25EZWx0YXMucHVzaChsYXN0RGVsdGEpO1xuICAgICAgICB0aGlzLmxhc3REb3duRGVsdGFzLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5lcnRpYSgtMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5pc0luZXJ0aWEgPSBmdW5jdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBsYXN0RGVsdGFzLCBsYXN0RGVsdGFzTmV3LCBsYXN0RGVsdGFzT2xkLCBuZXdBdmVyYWdlLCBuZXdTdW0sIG9sZEF2ZXJhZ2UsIG9sZFN1bTtcbiAgICAgIGxhc3REZWx0YXMgPSBkaXJlY3Rpb24gPT09IC0xID8gdGhpcy5sYXN0RG93bkRlbHRhcyA6IHRoaXMubGFzdFVwRGVsdGFzO1xuICAgICAgaWYgKGxhc3REZWx0YXNbMF0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRlbHRhc1RpbWVzdGFtcFsodGhpcy5zdGFiaWxpdHkgKiAyKSAtIDJdICsgdGhpcy5kZWxheSA+IERhdGUubm93KCkgJiYgbGFzdERlbHRhc1swXSA9PT0gbGFzdERlbHRhc1sodGhpcy5zdGFiaWxpdHkgKiAyKSAtIDFdKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxhc3REZWx0YXNPbGQgPSBsYXN0RGVsdGFzLnNsaWNlKDAsIHRoaXMuc3RhYmlsaXR5KTtcbiAgICAgIGxhc3REZWx0YXNOZXcgPSBsYXN0RGVsdGFzLnNsaWNlKHRoaXMuc3RhYmlsaXR5LCB0aGlzLnN0YWJpbGl0eSAqIDIpO1xuICAgICAgb2xkU3VtID0gbGFzdERlbHRhc09sZC5yZWR1Y2UoZnVuY3Rpb24odCwgcykge1xuICAgICAgICByZXR1cm4gdCArIHM7XG4gICAgICB9KTtcbiAgICAgIG5ld1N1bSA9IGxhc3REZWx0YXNOZXcucmVkdWNlKGZ1bmN0aW9uKHQsIHMpIHtcbiAgICAgICAgcmV0dXJuIHQgKyBzO1xuICAgICAgfSk7XG4gICAgICBvbGRBdmVyYWdlID0gb2xkU3VtIC8gbGFzdERlbHRhc09sZC5sZW5ndGg7XG4gICAgICBuZXdBdmVyYWdlID0gbmV3U3VtIC8gbGFzdERlbHRhc05ldy5sZW5ndGg7XG4gICAgICBpZiAoTWF0aC5hYnMob2xkQXZlcmFnZSkgPCBNYXRoLmFicyhuZXdBdmVyYWdlICogdGhpcy50b2xlcmFuY2UpICYmICh0aGlzLnNlbnNpdGl2aXR5IDwgTWF0aC5hYnMobmV3QXZlcmFnZSkpKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5zaG93TGFzdFVwRGVsdGFzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0VXBEZWx0YXM7XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5zaG93TGFzdERvd25EZWx0YXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhc3REb3duRGVsdGFzO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGV0aGFyZ3k7XG5cbiAgfSkoKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJmdW5jdGlvbiBFICgpIHtcbiAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59XG5cbkUucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzb3VyY2UpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCd0aW55LWVtaXR0ZXInKTtcbnZhciBMZXRoYXJneSA9IHJlcXVpcmUoJ2xldGhhcmd5JykuTGV0aGFyZ3k7XG52YXIgc3VwcG9ydCA9IHJlcXVpcmUoJy4vc3VwcG9ydCcpO1xudmFyIGNsb25lID0gcmVxdWlyZSgnLi9jbG9uZScpO1xudmFyIGJpbmRBbGwgPSByZXF1aXJlKCdiaW5kYWxsLXN0YW5kYWxvbmUnKTtcbnZhciBFVlRfSUQgPSAndmlydHVhbHNjcm9sbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbFNjcm9sbDtcblxudmFyIGtleUNvZGVzID0ge1xuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG4gICAgU1BBQ0U6IDMyXG59O1xuXG5mdW5jdGlvbiBWaXJ0dWFsU2Nyb2xsKG9wdGlvbnMpIHtcbiAgICBiaW5kQWxsKHRoaXMsICdfb25XaGVlbCcsICdfb25Nb3VzZVdoZWVsJywgJ19vblRvdWNoU3RhcnQnLCAnX29uVG91Y2hNb3ZlJywgJ19vbktleURvd24nKTtcblxuICAgIHRoaXMuZWwgPSB3aW5kb3c7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbCkge1xuICAgICAgICB0aGlzLmVsID0gb3B0aW9ucy5lbDtcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMuZWw7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG9iamVjdEFzc2lnbih7XG4gICAgICAgIG1vdXNlTXVsdGlwbGllcjogMSxcbiAgICAgICAgdG91Y2hNdWx0aXBsaWVyOiAyLFxuICAgICAgICBmaXJlZm94TXVsdGlwbGllcjogMTUsXG4gICAgICAgIGtleVN0ZXA6IDEyMCxcbiAgICAgICAgcHJldmVudFRvdWNoOiBmYWxzZSxcbiAgICAgICAgdW5wcmV2ZW50VG91Y2hDbGFzczogJ3ZzLXRvdWNobW92ZS1hbGxvd2VkJyxcbiAgICAgICAgbGltaXRJbmVydGlhOiBmYWxzZSxcbiAgICAgICAgdXNlS2V5Ym9hcmQ6IHRydWVcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbmVydGlhKSB0aGlzLl9sZXRoYXJneSA9IG5ldyBMZXRoYXJneSgpO1xuXG4gICAgdGhpcy5fZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG4gICAgdGhpcy5fZXZlbnQgPSB7XG4gICAgICAgIHk6IDAsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgZGVsdGFZOiAwXG4gICAgfTtcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLmJvZHlUb3VjaEFjdGlvbiA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnBhc3NpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyT3B0aW9ucyA9IHtwYXNzaXZlOiB0aGlzLm9wdGlvbnMucGFzc2l2ZX07XG4gICAgfVxufVxuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fbm90aWZ5ID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQueCArPSBldnQuZGVsdGFYO1xuICAgIGV2dC55ICs9IGV2dC5kZWx0YVk7XG5cbiAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFVlRfSUQsIHtcbiAgICAgICAgeDogZXZ0LngsXG4gICAgICAgIHk6IGV2dC55LFxuICAgICAgICBkZWx0YVg6IGV2dC5kZWx0YVgsXG4gICAgICAgIGRlbHRhWTogZXZ0LmRlbHRhWSxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZVxuICAgfSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25XaGVlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAodGhpcy5fbGV0aGFyZ3kgJiYgdGhpcy5fbGV0aGFyZ3kuY2hlY2soZSkgPT09IGZhbHNlKSByZXR1cm47XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgLy8gSW4gQ2hyb21lIGFuZCBpbiBGaXJlZm94IChhdCBsZWFzdCB0aGUgbmV3IG9uZSlcbiAgICBldnQuZGVsdGFYID0gZS53aGVlbERlbHRhWCB8fCBlLmRlbHRhWCAqIC0xO1xuICAgIGV2dC5kZWx0YVkgPSBlLndoZWVsRGVsdGFZIHx8IGUuZGVsdGFZICogLTE7XG5cbiAgICAvLyBmb3Igb3VyIHB1cnBvc2UgZGVsdGFtb2RlID0gMSBtZWFucyB1c2VyIGlzIG9uIGEgd2hlZWwgbW91c2UsIG5vdCB0b3VjaCBwYWRcbiAgICAvLyByZWFsIG1lYW5pbmc6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaGVlbEV2ZW50I0RlbHRhX21vZGVzXG4gICAgaWYoc3VwcG9ydC5pc0ZpcmVmb3ggJiYgZS5kZWx0YU1vZGUgPT0gMSkge1xuICAgICAgICBldnQuZGVsdGFYICo9IG9wdGlvbnMuZmlyZWZveE11bHRpcGxpZXI7XG4gICAgICAgIGV2dC5kZWx0YVkgKj0gb3B0aW9ucy5maXJlZm94TXVsdGlwbGllcjtcbiAgICB9XG5cbiAgICBldnQuZGVsdGFYICo9IG9wdGlvbnMubW91c2VNdWx0aXBsaWVyO1xuICAgIGV2dC5kZWx0YVkgKj0gb3B0aW9ucy5tb3VzZU11bHRpcGxpZXI7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Nb3VzZVdoZWVsID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbmVydGlhICYmIHRoaXMuX2xldGhhcmd5LmNoZWNrKGUpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgLy8gSW4gU2FmYXJpLCBJRSBhbmQgaW4gQ2hyb21lIGlmICd3aGVlbCcgaXNuJ3QgZGVmaW5lZFxuICAgIGV2dC5kZWx0YVggPSAoZS53aGVlbERlbHRhWCkgPyBlLndoZWVsRGVsdGFYIDogMDtcbiAgICBldnQuZGVsdGFZID0gKGUud2hlZWxEZWx0YVkpID8gZS53aGVlbERlbHRhWSA6IGUud2hlZWxEZWx0YTtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vblRvdWNoU3RhcnQgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHQgPSAoZS50YXJnZXRUb3VjaGVzKSA/IGUudGFyZ2V0VG91Y2hlc1swXSA6IGU7XG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IHQucGFnZVg7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IHQucGFnZVk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Ub3VjaE1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYob3B0aW9ucy5wcmV2ZW50VG91Y2hcbiAgICAgICAgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhvcHRpb25zLnVucHJldmVudFRvdWNoQ2xhc3MpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICB2YXIgdCA9IChlLnRhcmdldFRvdWNoZXMpID8gZS50YXJnZXRUb3VjaGVzWzBdIDogZTtcblxuICAgIGV2dC5kZWx0YVggPSAodC5wYWdlWCAtIHRoaXMudG91Y2hTdGFydFgpICogb3B0aW9ucy50b3VjaE11bHRpcGxpZXI7XG4gICAgZXZ0LmRlbHRhWSA9ICh0LnBhZ2VZIC0gdGhpcy50b3VjaFN0YXJ0WSkgKiBvcHRpb25zLnRvdWNoTXVsdGlwbGllcjtcblxuICAgIHRoaXMudG91Y2hTdGFydFggPSB0LnBhZ2VYO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSB0LnBhZ2VZO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uS2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LmRlbHRhWCA9IGV2dC5kZWx0YVkgPSAwO1xuICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA0MFxuXG4gICAgc3dpdGNoKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIGtleUNvZGVzLkxFRlQ6XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuVVA6XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gdGhpcy5vcHRpb25zLmtleVN0ZXA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGtleUNvZGVzLlJJR0hUOlxuICAgICAgICBjYXNlIGtleUNvZGVzLkRPV046XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gLSB0aGlzLm9wdGlvbnMua2V5U3RlcDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGtleUNvZGVzLlNQQUNFICYmIGUuc2hpZnRLZXk6XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gd2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuU1BBQ0U6XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gLSB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fYmluZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHN1cHBvcnQuaGFzV2hlZWxFdmVudCkgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuX29uV2hlZWwsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICBpZihzdXBwb3J0Lmhhc01vdXNlV2hlZWxFdmVudCkgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5fb25Nb3VzZVdoZWVsLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG5cbiAgICBpZihzdXBwb3J0Lmhhc1RvdWNoKSB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uVG91Y2hTdGFydCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNQb2ludGVyICYmIHN1cHBvcnQuaGFzVG91Y2hXaW4pIHtcbiAgICAgICAgdGhpcy5ib2R5VG91Y2hBY3Rpb24gPSBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb247XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbiA9ICdub25lJztcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJNb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRydWUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzS2V5RG93biAmJiB0aGlzLm9wdGlvbnMudXNlS2V5Ym9hcmQpIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX3VuYmluZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHN1cHBvcnQuaGFzV2hlZWxFdmVudCkgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuX29uV2hlZWwpO1xuICAgIGlmKHN1cHBvcnQuaGFzTW91c2VXaGVlbEV2ZW50KSB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLl9vbk1vdXNlV2hlZWwpO1xuXG4gICAgaWYoc3VwcG9ydC5oYXNUb3VjaCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc1BvaW50ZXIgJiYgc3VwcG9ydC5oYXNUb3VjaFdpbikge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb24gPSB0aGlzLmJvZHlUb3VjaEFjdGlvbjtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJNb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRydWUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzS2V5RG93biAmJiB0aGlzLm9wdGlvbnMudXNlS2V5Ym9hcmQpIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihjYiwgY3R4KSB7XG4gIHRoaXMuX2VtaXR0ZXIub24oRVZUX0lELCBjYiwgY3R4KTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZW1pdHRlci5lO1xuICBpZiAoZXZlbnRzICYmIGV2ZW50c1tFVlRfSURdICYmIGV2ZW50c1tFVlRfSURdLmxlbmd0aCA9PT0gMSkgdGhpcy5fYmluZCgpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oY2IsIGN0eCkge1xuICB0aGlzLl9lbWl0dGVyLm9mZihFVlRfSUQsIGNiLCBjdHgpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9lbWl0dGVyLmU7XG4gIGlmICghZXZlbnRzW0VWVF9JRF0gfHwgZXZlbnRzW0VWVF9JRF0ubGVuZ3RoIDw9IDApIHRoaXMuX3VuYmluZCgpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LnggPSAwO1xuICAgIGV2dC55ID0gMDtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9mZigpO1xuICAgIHRoaXMuX3VuYmluZCgpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gZ2V0U3VwcG9ydCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoYXNXaGVlbEV2ZW50OiAnb253aGVlbCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc01vdXNlV2hlZWxFdmVudDogJ29ubW91c2V3aGVlbCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc1RvdWNoOiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudCxcbiAgICAgICAgaGFzVG91Y2hXaW46IG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzICYmIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMSxcbiAgICAgICAgaGFzUG9pbnRlcjogISF3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQsXG4gICAgICAgIGhhc0tleURvd246ICdvbmtleWRvd24nIGluIGRvY3VtZW50LFxuICAgICAgICBpc0ZpcmVmb3g6IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID4gLTFcbiAgICB9O1xufSkoKTtcbiJdfQ==
