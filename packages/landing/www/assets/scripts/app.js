(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e3) {
          reject(e3);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e3) {
          reject(e3);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/svg4everybody/dist/svg4everybody.js
  var require_svg4everybody = __commonJS({
    "node_modules/svg4everybody/dist/svg4everybody.js"(exports, module) {
      !function(root, factory) {
        "function" == typeof define && define.amd ? (
          // AMD. Register as an anonymous module unless amdModuleId is set
          define([], function() {
            return root.svg4everybody = factory();
          })
        ) : "object" == typeof module && module.exports ? (
          // Node. Does not work with strict CommonJS, but
          // only CommonJS-like environments that support module.exports,
          // like Node.
          module.exports = factory()
        ) : root.svg4everybody = factory();
      }(exports, function() {
        function embed(parent, svg, target) {
          if (target) {
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            viewBox && svg.setAttribute("viewBox", viewBox);
            for (var clone = target.cloneNode(true); clone.childNodes.length; ) {
              fragment.appendChild(clone.firstChild);
            }
            parent.appendChild(fragment);
          }
        }
        function loadreadystatechange(xhr) {
          xhr.onreadystatechange = function() {
            if (4 === xhr.readyState) {
              var cachedDocument = xhr._cachedDocument;
              cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
              xhr._embeds.splice(0).map(function(item) {
                var target = xhr._cachedTarget[item.id];
                target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), // embed the target into the svg
                embed(item.parent, item.svg, target);
              });
            }
          }, // test the ready state change immediately
          xhr.onreadystatechange();
        }
        function svg4everybody2(rawopts) {
          function oninterval() {
            for (var index = 0; index < uses.length; ) {
              var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
              if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), svg && src) {
                if (polyfill) {
                  if (!opts.validate || opts.validate(src, svg, use)) {
                    parent.removeChild(use);
                    var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                    if (url.length) {
                      var xhr = requests[url];
                      xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                      xhr._embeds.push({
                        parent,
                        svg,
                        id
                      }), // prepare the xhr ready state change event
                      loadreadystatechange(xhr);
                    } else {
                      embed(parent, svg, document.getElementById(id));
                    }
                  } else {
                    ++index, ++numberOfSvgUseElementsToBypass;
                  }
                }
              } else {
                ++index;
              }
            }
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame2(oninterval, 67);
          }
          var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
          polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
          var requests = {}, requestAnimationFrame2 = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
          polyfill && oninterval();
        }
        function getSVGAncestor(node) {
          for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {
          }
          return svg;
        }
        return svg4everybody2;
      });
    }
  });

  // assets/scripts/utils/grid-helper.js
  var grid_helper_exports = {};
  __export(grid_helper_exports, {
    gridHelper: () => gridHelper
  });
  function gridHelper({
    gutterCssVar = GRID_HELPER_GUTTER_CSS_VAR,
    marginCssVar = GRID_HELPER_MARGIN_CSS_VAR,
    rgbaColor = GRID_HELPER_RGBA_COLOR
  } = {}) {
    const $gridContainer = document.createElement("div");
    document.body.append($gridContainer);
    setGridHelperColumns($gridContainer, rgbaColor);
    setGridHelperStyles($gridContainer, gutterCssVar, marginCssVar);
    setGridEvents($gridContainer, rgbaColor);
  }
  function setGridHelperStyles($container, gutterCssVar, marginCssVar) {
    const elStyles = $container.style;
    elStyles.zIndex = "10000";
    elStyles.position = "fixed";
    elStyles.top = "0";
    elStyles.left = "0";
    elStyles.display = "flex";
    elStyles.width = "100%";
    elStyles.height = "100%";
    elStyles.columnGap = `var(${gutterCssVar}, 0)`;
    elStyles.paddingLeft = `var(${marginCssVar}, 0)`;
    elStyles.paddingRight = `var(${marginCssVar}, 0)`;
    elStyles.pointerEvents = "none";
    elStyles.visibility = "hidden";
  }
  function setGridHelperColumns($container, rgbaColor) {
    $container.innerHTML = "";
    const columns = Number(
      window.getComputedStyle($container).getPropertyValue("--grid-columns")
    );
    let $col;
    for (var i2 = 0; i2 < columns; i2++) {
      $col = document.createElement("div");
      $col.style.flex = "1 1 0";
      $col.style.backgroundColor = rgbaColor;
      $container.appendChild($col);
    }
  }
  function setGridEvents($container, rgbaColor) {
    window.addEventListener(
      "resize",
      setGridHelperColumns($container, rgbaColor)
    );
    let ctrlDown = false;
    let isActive = false;
    document.addEventListener("keydown", (e3) => {
      if (e3.key == "Control") {
        ctrlDown = true;
      } else {
        if (ctrlDown && e3.key == "g") {
          if (isActive) {
            $container.style.visibility = "hidden";
          } else {
            $container.style.visibility = "visible";
          }
          isActive = !isActive;
        }
      }
    });
    document.addEventListener("keyup", (e3) => {
      if (e3.key == "Control") {
        ctrlDown = false;
      }
    });
  }
  var GRID_HELPER_GUTTER_CSS_VAR, GRID_HELPER_MARGIN_CSS_VAR, GRID_HELPER_RGBA_COLOR;
  var init_grid_helper = __esm({
    "assets/scripts/utils/grid-helper.js"() {
      GRID_HELPER_GUTTER_CSS_VAR = "--grid-gutter";
      GRID_HELPER_MARGIN_CSS_VAR = "--grid-margin";
      GRID_HELPER_RGBA_COLOR = "rgba(255, 0, 0, .1)";
    }
  });

  // node_modules/modujs/dist/main.esm.js
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i2) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
      return Array.from(iter);
  }
  function _iterableToArrayLimit(arr, i2) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i2 = arr[Symbol.iterator](), _s; !(_n = (_s = _i2.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i2["return"] != null)
          _i2["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o2, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
      arr2[i2] = arr[i2];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var _default = /* @__PURE__ */ function() {
    function _default3(options) {
      _classCallCheck(this, _default3);
      this.mAttr = "data-" + options.dataName;
      this.mCaptureEvents = ["mouseenter", "mouseleave"];
      this.el = options.el;
    }
    _createClass(_default3, [{
      key: "mInit",
      value: function mInit(modules) {
        var _this = this;
        this.modules = modules;
        this.mCheckEventTarget = this.mCheckEventTarget.bind(this);
        if (this.events) {
          Object.keys(this.events).forEach(function(event) {
            return _this.mAddEvent(event);
          });
        }
      }
    }, {
      key: "mUpdate",
      value: function mUpdate(modules) {
        this.modules = modules;
      }
    }, {
      key: "mDestroy",
      value: function mDestroy() {
        var _this2 = this;
        if (this.events) {
          Object.keys(this.events).forEach(function(event) {
            return _this2.mRemoveEvent(event);
          });
        }
      }
    }, {
      key: "mAddEvent",
      value: function mAddEvent(event) {
        var capture = this.mCaptureEvents.includes(event) ? true : false;
        this.el.addEventListener(event, this.mCheckEventTarget, capture);
      }
    }, {
      key: "mRemoveEvent",
      value: function mRemoveEvent(event) {
        var capture = this.mCaptureEvents.includes(event) ? true : false;
        this.el.removeEventListener(event, this.mCheckEventTarget, capture);
      }
    }, {
      key: "mCheckEventTarget",
      value: function mCheckEventTarget(e3) {
        var event = this.events[e3.type];
        if (typeof event === "string") {
          this[event](e3);
        } else {
          var data = "[" + this.mAttr + "]";
          var target = e3.target;
          if (this.mCaptureEvents.includes(e3.type)) {
            if (target.matches(data)) {
              this.mCallEventMethod(e3, event, target);
            }
          } else {
            while (target && target !== document) {
              if (target.matches(data)) {
                if (this.mCallEventMethod(e3, event, target) != "undefined") {
                  break;
                }
              }
              target = target.parentNode;
            }
          }
        }
      }
    }, {
      key: "mCallEventMethod",
      value: function mCallEventMethod(e3, event, target) {
        var name = target.getAttribute(this.mAttr);
        if (event.hasOwnProperty(name)) {
          var method = event[name];
          if (!e3.hasOwnProperty("currentTarget")) {
            Object.defineProperty(e3, "currentTarget", {
              value: target
            });
          }
          if (!e3.hasOwnProperty("curTarget")) {
            Object.defineProperty(e3, "curTarget", {
              value: target
            });
          }
          this[method](e3);
        }
      }
    }, {
      key: "$",
      value: function $(query, context3) {
        var classIndex = query.indexOf(".");
        var idIndex = query.indexOf("#");
        var attrIndex = query.indexOf("[");
        var indexes = [classIndex, idIndex, attrIndex].filter(function(index2) {
          return index2 != -1;
        });
        var index = false;
        var name = query;
        var more = "";
        var parent = this.el;
        if (indexes.length) {
          index = Math.min.apply(Math, _toConsumableArray(indexes));
          name = query.slice(0, index);
          more = query.slice(index);
        }
        if (_typeof(context3) == "object") {
          parent = context3;
        }
        return parent.querySelectorAll("[" + this.mAttr + "=" + name + "]" + more);
      }
    }, {
      key: "parent",
      value: function parent(query, context3) {
        var data = "[" + this.mAttr + "=" + query + "]";
        var parent2 = context3.parentNode;
        while (parent2 && parent2 !== document) {
          if (parent2.matches(data)) {
            return parent2;
          }
          parent2 = parent2.parentNode;
        }
      }
    }, {
      key: "getData",
      value: function getData(name, context3) {
        var target = context3 || this.el;
        return target.getAttribute(this.mAttr + "-" + name);
      }
    }, {
      key: "setData",
      value: function setData(name, value, context3) {
        var target = context3 || this.el;
        return target.setAttribute(this.mAttr + "-" + name, value);
      }
    }, {
      key: "call",
      value: function call(func, args, mod, id) {
        var _this3 = this;
        if (args && !mod) {
          mod = args;
          args = false;
        }
        if (this.modules[mod]) {
          if (id) {
            if (this.modules[mod][id]) {
              this.modules[mod][id][func](args);
            }
          } else {
            Object.keys(this.modules[mod]).forEach(function(id2) {
              _this3.modules[mod][id2][func](args);
            });
          }
        }
      }
    }, {
      key: "on",
      value: function on(e3, mod, func, id) {
        var _this4 = this;
        if (this.modules[mod]) {
          if (id) {
            this.modules[mod][id].el.addEventListener(e3, function(o2) {
              return func(o2);
            });
          } else {
            Object.keys(this.modules[mod]).forEach(function(i2) {
              _this4.modules[mod][i2].el.addEventListener(e3, function(o2) {
                return func(o2);
              });
            });
          }
        }
      }
    }, {
      key: "init",
      value: function init6() {
      }
    }, {
      key: "destroy",
      value: function destroy() {
      }
    }]);
    return _default3;
  }();
  var _default$1 = /* @__PURE__ */ function() {
    function _default3(options) {
      _classCallCheck(this, _default3);
      this.app;
      this.modules = options.modules;
      this.currentModules = {};
      this.activeModules = {};
      this.newModules = {};
      this.moduleId = 0;
    }
    _createClass(_default3, [{
      key: "init",
      value: function init6(app2, scope) {
        var _this = this;
        var container = scope || document;
        var elements = container.querySelectorAll("*");
        if (app2 && !this.app) {
          this.app = app2;
        }
        this.activeModules["app"] = {
          "app": this.app
        };
        elements.forEach(function(el) {
          Array.from(el.attributes).forEach(function(i2) {
            if (i2.name.startsWith("data-module")) {
              var moduleExists = false;
              var dataName = i2.name.split("-").splice(2);
              var moduleName = _this.toCamel(dataName);
              if (_this.modules[moduleName]) {
                moduleExists = true;
              } else if (_this.modules[_this.toUpper(moduleName)]) {
                moduleName = _this.toUpper(moduleName);
                moduleExists = true;
              }
              if (moduleExists) {
                var options = {
                  el,
                  name: moduleName,
                  dataName: dataName.join("-")
                };
                var module = new _this.modules[moduleName](options);
                var id = i2.value;
                if (!id) {
                  _this.moduleId++;
                  id = "m" + _this.moduleId;
                  el.setAttribute(i2.name, id);
                }
                _this.addActiveModule(moduleName, id, module);
                var moduleId = moduleName + "-" + id;
                if (scope) {
                  _this.newModules[moduleId] = module;
                } else {
                  _this.currentModules[moduleId] = module;
                }
              }
            }
          });
        });
        Object.entries(this.currentModules).forEach(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], module = _ref2[1];
          if (scope) {
            var split = id.split("-");
            var moduleName = split.shift();
            var moduleId = split.pop();
            _this.addActiveModule(moduleName, moduleId, module);
          } else {
            _this.initModule(module);
          }
        });
      }
    }, {
      key: "initModule",
      value: function initModule(module) {
        module.mInit(this.activeModules);
        module.init();
      }
    }, {
      key: "addActiveModule",
      value: function addActiveModule(name, id, module) {
        if (this.activeModules[name]) {
          Object.assign(this.activeModules[name], _defineProperty({}, id, module));
        } else {
          this.activeModules[name] = _defineProperty({}, id, module);
        }
      }
    }, {
      key: "update",
      value: function update(scope) {
        var _this2 = this;
        this.init(this.app, scope);
        Object.entries(this.currentModules).forEach(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), id = _ref4[0], module = _ref4[1];
          module.mUpdate(_this2.activeModules);
        });
        Object.entries(this.newModules).forEach(function(_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2), id = _ref6[0], module = _ref6[1];
          _this2.initModule(module);
        });
        Object.assign(this.currentModules, this.newModules);
      }
    }, {
      key: "destroy",
      value: function destroy(scope) {
        if (scope) {
          this.destroyScope(scope);
        } else {
          this.destroyModules();
        }
      }
    }, {
      key: "destroyScope",
      value: function destroyScope(scope) {
        var _this3 = this;
        var elements = scope.querySelectorAll("*");
        elements.forEach(function(el) {
          Array.from(el.attributes).forEach(function(i2) {
            if (i2.name.startsWith("data-module")) {
              var id = i2.value;
              var dataName = i2.name.split("-").splice(2);
              var moduleName = _this3.toCamel(dataName) + "-" + id;
              var moduleExists = false;
              if (_this3.currentModules[moduleName]) {
                moduleExists = true;
              } else if (_this3.currentModules[_this3.toUpper(moduleName)]) {
                moduleName = _this3.toUpper(moduleName);
                moduleExists = true;
              }
              if (moduleExists) {
                _this3.destroyModule(_this3.currentModules[moduleName]);
                delete _this3.currentModules[moduleName];
              }
            }
          });
        });
        this.activeModules = {};
        this.newModules = {};
      }
    }, {
      key: "destroyModules",
      value: function destroyModules() {
        var _this4 = this;
        Object.entries(this.currentModules).forEach(function(_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2), id = _ref8[0], module = _ref8[1];
          _this4.destroyModule(module);
        });
        this.currentModules = [];
      }
    }, {
      key: "destroyModule",
      value: function destroyModule(module) {
        module.mDestroy();
        module.destroy();
      }
    }, {
      key: "toCamel",
      value: function toCamel(arr) {
        var _this5 = this;
        return arr.reduce(function(a2, b) {
          return a2 + _this5.toUpper(b);
        });
      }
    }, {
      key: "toUpper",
      value: function toUpper(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    }]);
    return _default3;
  }();
  var main_esm_default = _default$1;

  // assets/scripts/modules.js
  var modules_exports = {};
  __export(modules_exports, {
    FadeInText: () => FadeInText_default,
    HoverShuffle: () => HoverShuffle_default,
    Load: () => Load_default,
    MaskLines: () => MaskLines_default,
    Rail: () => Rail_default,
    Randomize: () => Ramdomize,
    Scroll: () => Scroll
  });

  // node_modules/modularload/dist/main.esm.js
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties2(Constructor, staticProps);
    return Constructor;
  }
  function _slicedToArray2(arr, i2) {
    return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i2) || _unsupportedIterableToArray2(arr, i2) || _nonIterableRest2();
  }
  function _arrayWithHoles2(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArrayLimit2(arr, i2) {
    var _i2 = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i2 == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i2 = _i2.call(arr); !(_n = (_s = _i2.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i2["return"] != null)
          _i2["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray2(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray2(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray2(o2, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
      arr2[i2] = arr[i2];
    return arr2;
  }
  function _nonIterableRest2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var _default2 = /* @__PURE__ */ function() {
    function _default3(options) {
      _classCallCheck2(this, _default3);
      this.defaults = {
        name: "load",
        loadingClass: "is-loading",
        loadedClass: "is-loaded",
        readyClass: "is-ready",
        transitionsPrefix: "is-",
        transitionsHistory: true,
        enterDelay: 0,
        exitDelay: 0,
        loadedDelay: 0,
        isLoaded: false,
        isEntered: false,
        isUrl: false,
        transitionContainer: null,
        popstateIgnore: false
      };
      Object.assign(this, this.defaults, options);
      this.options = options;
      this.namespace = "modular";
      this.html = document.documentElement;
      this.href = window.location.href;
      this.container = "data-" + this.name + "-container";
      this.subContainer = false;
      this.prevTransition = null;
      this.loadAttributes = ["src", "srcset", "style", "href"];
      this.isInserted = false;
      this.isLoading = false;
      this.enterTimeout = false;
      this.controller = new AbortController();
      this.classContainer = this.html;
      this.isChrome = navigator.userAgent.indexOf("Chrome") != -1 ? true : false;
      this.init();
    }
    _createClass2(_default3, [{
      key: "init",
      value: function init6() {
        var _this = this;
        window.addEventListener("popstate", function(e3) {
          return _this.checkState(e3);
        }, false);
        this.html.addEventListener("click", function(e3) {
          return _this.checkClick(e3);
        }, false);
        this.loadEls(document);
      }
    }, {
      key: "checkClick",
      value: function checkClick(e3) {
        if (!e3.ctrlKey && !e3.metaKey) {
          var target = e3.target;
          while (target && target !== document) {
            if (target.matches("a") && target.getAttribute("download") == null) {
              var href = target.getAttribute("href");
              if (!href.startsWith("#") && !href.startsWith("mailto:") && !href.startsWith("tel:")) {
                e3.preventDefault();
                this.reset();
                this.getClickOptions(target);
              }
              break;
            }
            target = target.parentNode;
          }
        }
      }
    }, {
      key: "checkState",
      value: function checkState() {
        if (typeof this.popstateIgnore === "string" && window.location.href.indexOf(this.popstateIgnore) > -1) {
          return;
        }
        this.reset();
        this.getStateOptions();
      }
    }, {
      key: "reset",
      value: function reset() {
        if (this.isLoading) {
          this.controller.abort();
          this.isLoading = false;
          this.controller = new AbortController();
        }
        window.clearTimeout(this.enterTimeout);
        if (this.isInserted) {
          this.removeContainer();
        }
        this.classContainer = this.html;
        Object.assign(this, this.defaults, this.options);
      }
    }, {
      key: "getClickOptions",
      value: function getClickOptions(link) {
        this.transition = link.getAttribute("data-" + this.name);
        this.isUrl = link.getAttribute("data-" + this.name + "-url");
        var href = link.getAttribute("href");
        var target = link.getAttribute("target");
        if (target == "_blank") {
          window.open(href, "_blank");
          return;
        }
        if (this.transition == "false") {
          window.location = href;
          return;
        }
        this.setOptions(href, true);
      }
    }, {
      key: "getStateOptions",
      value: function getStateOptions() {
        if (this.transitionsHistory) {
          this.transition = history.state;
        } else {
          this.transition = false;
        }
        var href = window.location.href;
        this.setOptions(href);
      }
    }, {
      key: "goTo",
      value: function goTo(href, transition, isUrl) {
        this.reset();
        this.transition = transition;
        this.isUrl = isUrl;
        this.setOptions(href, true);
      }
    }, {
      key: "setOptions",
      value: function setOptions(href, push) {
        var container = "[" + this.container + "]";
        var oldContainer;
        if (this.transition && this.transition != "true") {
          this.transitionContainer = "[" + this.container + '="' + this.transition + '"]';
          this.loadingClass = this.transitions[this.transition].loadingClass || this.loadingClass;
          this.loadedClass = this.transitions[this.transition].loadedClass || this.loadedClass;
          this.readyClass = this.transitions[this.transition].readyClass || this.readyClass;
          this.transitionsPrefix = this.transitions[this.transition].transitionsPrefix || this.transitionsPrefix;
          this.enterDelay = this.transitions[this.transition].enterDelay || this.enterDelay;
          this.exitDelay = this.transitions[this.transition].exitDelay || this.exitDelay;
          this.loadedDelay = this.transitions[this.transition].loadedDelay || this.loadedDelay;
          oldContainer = document.querySelector(this.transitionContainer);
        }
        if (oldContainer) {
          container = this.transitionContainer;
          this.oldContainer = oldContainer;
          this.classContainer = this.oldContainer.parentNode;
          if (!this.subContainer) {
            history.replaceState(this.transition, null, this.href);
          }
          this.subContainer = true;
        } else {
          this.oldContainer = document.querySelector(container);
          if (this.subContainer) {
            history.replaceState(this.prevTransition, null, this.href);
          }
          this.subContainer = false;
        }
        this.href = href;
        this.parentContainer = this.oldContainer.parentNode;
        if (this.isUrl === "" || this.isUrl != null && this.isUrl != "false" && this.isUrl != false) {
          history.pushState(this.transition, null, href);
        } else {
          this.oldContainer.classList.add("is-old");
          this.setLoading();
          this.startEnterDelay();
          this.loadHref(href, container, push);
        }
      }
    }, {
      key: "setLoading",
      value: function setLoading() {
        this.classContainer.classList.remove(this.loadedClass, this.readyClass);
        this.classContainer.classList.add(this.loadingClass);
        this.classContainer.classList.remove(this.transitionsPrefix + this.prevTransition);
        if (this.transition) {
          this.classContainer.classList.add(this.transitionsPrefix + this.transition);
        }
        if (!this.subContainer) {
          this.prevTransition = this.transition;
        }
        var loadingEvent = new Event(this.namespace + "loading");
        window.dispatchEvent(loadingEvent);
      }
    }, {
      key: "startEnterDelay",
      value: function startEnterDelay() {
        var _this2 = this;
        this.enterTimeout = window.setTimeout(function() {
          _this2.isEntered = true;
          if (_this2.isLoaded) {
            _this2.transitionContainers();
          }
        }, this.enterDelay);
      }
    }, {
      key: "loadHref",
      value: function loadHref(href, container, push) {
        var _this3 = this;
        this.isLoading = true;
        var signal = this.controller.signal;
        fetch(href, {
          signal
        }).then(function(response) {
          return response.text();
        }).then(function(data) {
          if (push) {
            history.pushState(_this3.transition, null, href);
          }
          var parser = new DOMParser();
          _this3.data = parser.parseFromString(data, "text/html");
          _this3.newContainer = _this3.data.querySelector(container);
          _this3.newContainer.classList.add("is-new");
          _this3.parentNewContainer = _this3.newContainer.parentNode;
          _this3.hideContainer();
          _this3.parentContainer.insertBefore(_this3.newContainer, _this3.oldContainer);
          _this3.isInserted = true;
          _this3.setSvgs();
          _this3.isLoaded = true;
          if (_this3.isEntered) {
            _this3.transitionContainers();
          }
          _this3.loadEls(_this3.newContainer);
          _this3.isLoading = false;
        })["catch"](function(err) {
          window.location = href;
        });
      }
    }, {
      key: "transitionContainers",
      value: function transitionContainers() {
        var _this4 = this;
        this.setAttributes();
        this.showContainer();
        this.setLoaded();
        setTimeout(function() {
          _this4.removeContainer();
          _this4.setReady();
        }, this.exitDelay);
      }
    }, {
      key: "setSvgs",
      value: function setSvgs() {
        if (this.isChrome) {
          var svgs = this.newContainer.querySelectorAll("use");
          if (svgs.length) {
            svgs.forEach(function(svg) {
              var xhref = svg.getAttribute("xlink:href");
              if (xhref) {
                svg.parentNode.innerHTML = '<use xlink:href="' + xhref + '"></use>';
              } else {
                var href = svg.getAttribute("href");
                if (href)
                  svg.parentNode.innerHTML = '<use href="' + href + '"></use>';
              }
            });
          }
        }
      }
    }, {
      key: "setAttributes",
      value: function setAttributes() {
        var _this5 = this;
        var title = this.data.getElementsByTagName("title")[0];
        var newDesc = this.data.head.querySelector('meta[name="description"]');
        var oldDesc = document.head.querySelector('meta[name="description"]');
        var container;
        var newContainer;
        if (this.subContainer) {
          newContainer = this.parentNewContainer;
          container = document.querySelector(this.transitionContainer).parentNode;
        } else {
          newContainer = this.data.querySelector("html");
          container = document.querySelector("html");
        }
        var datas = Object.assign({}, newContainer.dataset);
        if (title)
          document.title = title.innerText;
        if (oldDesc && newDesc)
          oldDesc.setAttribute("content", newDesc.getAttribute("content"));
        if (datas) {
          Object.entries(datas).forEach(function(_ref) {
            var _ref2 = _slicedToArray2(_ref, 2), key = _ref2[0], val = _ref2[1];
            container.setAttribute("data-" + _this5.toDash(key), val);
          });
        }
      }
    }, {
      key: "toDash",
      value: function toDash(str) {
        return str.split(/(?=[A-Z])/).join("-").toLowerCase();
      }
    }, {
      key: "hideContainer",
      value: function hideContainer() {
        this.newContainer.style.visibility = "hidden";
        this.newContainer.style.height = 0;
        this.newContainer.style.overflow = "hidden";
      }
    }, {
      key: "showContainer",
      value: function showContainer() {
        this.newContainer.style.visibility = "";
        this.newContainer.style.height = "";
        this.newContainer.style.overflow = "";
      }
    }, {
      key: "loadEls",
      value: function loadEls(container) {
        var _this6 = this;
        var promises = [];
        this.loadAttributes.forEach(function(attr) {
          var data = "data-" + _this6.name + "-" + attr;
          var els = container.querySelectorAll("[" + data + "]");
          if (els.length) {
            els.forEach(function(el) {
              var elData = el.getAttribute(data);
              el.setAttribute(attr, elData);
              if (attr == "src" || attr == "srcset") {
                var promise = new Promise(function(resolve) {
                  el.onload = function() {
                    return resolve(el);
                  };
                });
                promises.push(promise);
              }
            });
          }
        });
        Promise.all(promises).then(function(val) {
          var imagesEvent = new Event(_this6.namespace + "images");
          window.dispatchEvent(imagesEvent);
        });
      }
    }, {
      key: "setLoaded",
      value: function setLoaded() {
        var _this7 = this;
        this.classContainer.classList.remove(this.loadingClass);
        setTimeout(function() {
          _this7.classContainer.classList.add(_this7.loadedClass);
        }, this.loadedDelay);
        var loadedEvent = new Event(this.namespace + "loaded");
        window.dispatchEvent(loadedEvent);
      }
    }, {
      key: "removeContainer",
      value: function removeContainer() {
        this.parentContainer.removeChild(this.oldContainer);
        this.newContainer.classList.remove("is-new");
        this.isInserted = false;
      }
    }, {
      key: "setReady",
      value: function setReady() {
        this.classContainer.classList.add(this.readyClass);
        var readyEvent = new Event(this.namespace + "ready");
        window.dispatchEvent(readyEvent);
      }
    }, {
      key: "on",
      value: function on(event, func) {
        var _this8 = this;
        window.addEventListener(this.namespace + event, function() {
          switch (event) {
            case "loading":
              return func(_this8.transition, _this8.oldContainer);
            case "loaded":
              return func(_this8.transition, _this8.oldContainer, _this8.newContainer);
            case "ready":
              return func(_this8.transition, _this8.newContainer);
            default:
              return func();
          }
        }, false);
      }
    }]);
    return _default3;
  }();
  var main_esm_default2 = _default2;

  // assets/scripts/modules/Load.js
  var Load_default = class extends _default {
    constructor(m) {
      super(m);
    }
    init() {
      const load = new main_esm_default2({
        enterDelay: 0,
        transitions: {
          customTransition: {}
        }
      });
      load.on("loaded", (transition, oldContainer, newContainer) => {
        this.call("destroy", oldContainer, "app");
        this.call("update", newContainer, "app");
      });
    }
  };

  // assets/scripts/utils/fonts.js
  var isFontLoadingAPIAvailable = "fonts" in document;
  function conformsToReference(font, criterion2) {
    for (const [key, value] of Object.entries(criterion2)) {
      switch (key) {
        case "family": {
          if (trim(font[key]) !== value) {
            return false;
          }
          break;
        }
        case "weight": {
          if (font[key] != value) {
            return false;
          }
          break;
        }
        default: {
          if (font[key] !== value) {
            return false;
          }
          break;
        }
      }
    }
    return true;
  }
  function conformsToShorthand(font, criterion2) {
    const family = trim(font.family);
    if (trim(family) === criterion2) {
      return true;
    }
    if (criterion2.endsWith(trim(family)) && (criterion2.match(font.weight) || criterion2.match(font.style))) {
      return true;
    }
    return true;
  }
  function findManyByReference(search) {
    const found = [];
    for (const font of document.fonts) {
      if (conformsToReference(font, search)) {
        found.push(font);
      }
    }
    return found;
  }
  function findManyByShorthand(search) {
    const found = [];
    for (const font of document.fonts) {
      if (conformsToShorthand(font, search)) {
        found.push(font);
      }
    }
    return found;
  }
  function getMany(queries) {
    if (!Array.isArray(queries)) {
      queries = [queries];
    }
    const found = /* @__PURE__ */ new Set();
    queries.forEach((search) => {
      if (search) {
        switch (typeof search) {
          case "string":
            found.add(...findManyByShorthand(search));
            return;
          case "object":
            found.add(...findManyByReference(search));
            return;
        }
      }
      throw new TypeError(
        "Expected font query to be font shorthand or font reference"
      );
    });
    return [...found];
  }
  function loadFonts(fontsToLoad, debug = false) {
    return __async(this, null, function* () {
      var _a;
      if (((_a = fontsToLoad.size) != null ? _a : fontsToLoad.length) === 0) {
        throw new TypeError(
          "Expected at least one font"
        );
      }
      return yield loadFontsWithAPI([...fontsToLoad], debug);
    });
  }
  function loadFontFaceWithAPI(font) {
    return __async(this, null, function* () {
      return yield (font.status === "unloaded" ? font.load() : font.loaded).then((font2) => font2, (err) => font);
    });
  }
  function loadFontsWithAPI(fontsToLoad, debug = false) {
    return __async(this, null, function* () {
      debug && console.group("[loadFonts:API]", fontsToLoad.length, "/", document.fonts.size);
      const fontsToBeLoaded = [];
      for (const fontToLoad of fontsToLoad) {
        if (fontToLoad instanceof FontFace) {
          if (!document.fonts.has(fontToLoad)) {
            document.fonts.add(fontToLoad);
          }
          fontsToBeLoaded.push(
            loadFontFaceWithAPI(fontToLoad)
          );
        } else {
          fontsToBeLoaded.push(
            ...getMany(fontToLoad).map((font) => loadFontFaceWithAPI(font))
          );
        }
      }
      debug && console.groupEnd();
      return yield Promise.all(fontsToBeLoaded);
    });
  }
  function trim(value) {
    return value.replace(/['"]+/g, "");
  }
  function whenReady(queries) {
    return __async(this, null, function* () {
      const fonts = getMany(queries);
      return yield Promise.all(fonts.map((font) => font.loaded));
    });
  }

  // node_modules/gsap/gsap-core.js
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  };
  var _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  };
  var _suppressOverwrites;
  var _reverting;
  var _context;
  var _bigNum = 1e8;
  var _tinyNum = 1 / _bigNum;
  var _2PI = Math.PI * 2;
  var _HALF_PI = _2PI / 4;
  var _gsID = 0;
  var _sqrt = Math.sqrt;
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isUndefined = function _isUndefined2(value) {
    return typeof value === "undefined";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _isNotFalse = function _isNotFalse2(value) {
    return value !== false;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _isFuncOrString = function _isFuncOrString2(value) {
    return _isFunction(value) || _isString(value);
  };
  var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  };
  var _isArray = Array.isArray;
  var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
  var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var _relExp = /[+-]=-?[.\d]+/;
  var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
  var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var _globalTimeline;
  var _win;
  var _coreInitted;
  var _doc;
  var _globals = {};
  var _installScope = {};
  var _coreReady;
  var _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  };
  var _missingPlugin = function _missingPlugin2(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  };
  var _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  };
  var _addGlobal = function _addGlobal2(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  };
  var _emptyFunc = function _emptyFunc2() {
    return 0;
  };
  var _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  };
  var _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  };
  var _revertConfig = {
    suppressEvents: true
  };
  var _reservedProps = {};
  var _lazyTweens = [];
  var _lazyLookup = {};
  var _lastRenderedFrame;
  var _plugins = {};
  var _effects = {};
  var _nextGCFrame = 30;
  var _harnessPlugins = [];
  var _callbackNames = "";
  var _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i2;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i2 = _harnessPlugins.length;
      while (i2-- && !_harnessPlugins[i2].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i2];
    }
    i2 = targets.length;
    while (i2--) {
      targets[i2] && (targets[i2]._gsap || (targets[i2]._gsap = new GSCache(targets[i2], harnessPlugin))) || targets.splice(i2, 1);
    }
    return targets;
  };
  var _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  };
  var _getProperty = function _getProperty2(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  };
  var _forEachName = function _forEachName2(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  };
  var _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _roundPrecise = function _roundPrecise2(value) {
    return Math.round(value * 1e7) / 1e7 || 0;
  };
  var _parseRelative = function _parseRelative2(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  };
  var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l2 = toFind.length, i2 = 0;
    for (; toSearch.indexOf(toFind[i2]) < 0 && ++i2 < l2; ) {
    }
    return i2 < l2;
  };
  var _lazyRender = function _lazyRender2() {
    var l2 = _lazyTweens.length, a2 = _lazyTweens.slice(0), i2, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i2 = 0; i2 < l2; i2++) {
      tween = a2[i2];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value) {
    var n2 = parseFloat(value);
    return (n2 || n2 === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n2 : _isString(value) ? value.trim() : value;
  };
  var _passThrough = function _passThrough2(p) {
    return p;
  };
  var _setDefaults = function _setDefaults2(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || (obj[p] = defaults2[p]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults2) {
      for (var p in defaults2) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
      }
    };
  };
  var _merge = function _merge2(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  };
  var _mergeDeep = function _mergeDeep2(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy = {}, p;
    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }
    return copy;
  };
  var _inheritDefaults = function _inheritDefaults2(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  };
  var _arraysMatch = function _arraysMatch2(a1, a2) {
    var i2 = a1.length, match = i2 === a2.length;
    while (match && i2-- && a1[i2] === a2[i2]) {
    }
    return i2 < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t2;
    if (sortBy) {
      t2 = child[sortBy];
      while (prev && prev[sortBy] > t2) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  };
  var _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  };
  var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  };
  var _uncache = function _uncache2(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a2 = animation;
      while (a2) {
        a2._dirty = 1;
        a2 = a2.parent;
      }
    }
    return animation;
  };
  var _recacheAncestors = function _recacheAncestors2(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  };
  var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  };
  var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  };
  var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  };
  var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  };
  var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  };
  var _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  };
  var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  };
  var _postAddChecks = function _postAddChecks2(timeline2, child) {
    var t2;
    if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
      t2 = _parentToChildTotalTime(timeline2.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t2) - child._tTime > _tinyNum) {
        child.render(t2, true);
      }
    }
    if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t2 = timeline2;
        while (t2._dp) {
          t2.rawTime() >= 0 && t2.totalTime(t2._tTime);
          t2 = t2._dp;
        }
      }
      timeline2._zTime = -_tinyNum;
    }
  };
  var _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline2._recent = child);
    skipChecks || _postAddChecks(timeline2, child);
    timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
    return timeline2;
  };
  var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  };
  var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  };
  var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
  };
  var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  };
  var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  };
  var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  };
  var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  };
  var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  };
  var _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  };
  var _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i2, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i2 = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i2 >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i2 < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i2 < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i2 - 1) + position.substr(i2 + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i2 > 1 ? _parsePosition2(animation, position.substr(0, i2 - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  };
  var _createTweenType = function _createTweenType2(type, params, timeline2) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline2;
    if (type) {
      irVars = vars;
      parent = timeline2;
      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  };
  var _conditionalReturn = function _conditionalReturn2(value, func) {
    return value || value === 0 ? func(value) : func;
  };
  var _clamp = function _clamp2(min, max, value) {
    return value < min ? min : value > max ? max : value;
  };
  var getUnit = function getUnit2(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  };
  var clamp = function clamp2(min, max, value) {
    return _conditionalReturn(value, function(v) {
      return _clamp(min, max, v);
    });
  };
  var _slice = [].slice;
  var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  };
  var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  };
  var toArray = function toArray2(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  };
  var selector = function selector2(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  };
  var shuffle = function shuffle2(a2) {
    return a2.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var distribute = function distribute2(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
      each: v
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function(i2, target, a2) {
      var l2 = (a2 || vars).length, distances = cache[l2], originX, originY, x, y, d, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a2[wrapAt++].getBoundingClientRect().left) && wrapAt < l2) {
          }
          wrapAt < l2 && wrapAt--;
        }
        distances = cache[l2] = [];
        originX = ratios ? Math.min(wrapAt, l2) * ratioX - 0.5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l2 * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l2; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l2 = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l2 ? l2 - 1 : !axis ? Math.max(wrapAt, l2 / wrapAt) : axis === "y" ? l2 / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l2 < 0 ? base - l2 : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l2 < 0 ? _invertEase(ease) : ease;
      }
      l2 = (distances[i2] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l2) : l2) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function(raw) {
      var n2 = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
      return (n2 - n2 % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i2 = snapTo.length, dx, dy;
      while (i2--) {
        if (is2D) {
          dx = snapTo[i2].x - x;
          dy = snapTo[i2].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i2] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i2;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  };
  var random = function random2(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  };
  var pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value) {
      return functions.reduce(function(v, f) {
        return f(v);
      }, value);
    };
  };
  var unitize = function unitize2(func, unit) {
    return function(value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  };
  var normalize = function normalize2(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  };
  var _wrapArray = function _wrapArray2(a2, wrapper, value) {
    return _conditionalReturn(value, function(index) {
      return a2[~~wrapper(index)];
    });
  };
  var wrap = function wrap2(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
      return (range + (value2 - min) % range) % range + min;
    });
  };
  var wrapYoyo = function wrapYoyo2(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
      value2 = (total + (value2 - min) % total) % total || 0;
      return min + (value2 > range ? total - value2 : value2);
    });
  };
  var _replaceRandom = function _replaceRandom2(value) {
    var prev = 0, s2 = "", i2, nums, end, isArray;
    while (~(i2 = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i2);
      isArray = value.charAt(i2 + 7) === "[";
      nums = value.substr(i2 + 7, end - i2 - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s2 += value.substr(prev, i2 - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s2 + value.substr(prev, value.length - prev);
  };
  var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value2) {
      return outMin + ((value2 - inMin) / inRange * outRange || 0);
    });
  };
  var interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p2) {
      return (1 - p2) * start + p2 * end;
    };
    if (!func) {
      var isString = _isString(start), master = {}, p, i2, interpolators, l2, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l2 = start.length;
        il = l2 - 2;
        for (i2 = 1; i2 < l2; i2++) {
          interpolators.push(interpolate2(start[i2 - 1], start[i2]));
        }
        l2--;
        func = function func2(p2) {
          p2 *= l2;
          var i3 = Math.min(il, ~~p2);
          return interpolators[i3](p2 - i3);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func2(p2) {
          return _renderPropTweens(p2, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  };
  var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
    var labels = timeline2.labels, min = _bigNum, p, distance, label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }
    return label;
  };
  var _callback = function _callback2(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context3 && (_context = context3);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  };
  var _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  };
  var _quickTween;
  var _registerPluginQueue = [];
  var _createPlugin = function _createPlugin2(config3) {
    if (!config3)
      return;
    config3 = !config3.name && config3["default"] || config3;
    if (_windowExists() || config3.headless) {
      var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
        this._props = [];
      } : config3, instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };
      _wake();
      if (config3 !== Plugin) {
        if (_plugins[name]) {
          return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
        _plugins[Plugin.prop = name] = Plugin;
        if (config3.targetTest) {
          _harnessPlugins.push(Plugin);
          _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
      }
      _addGlobal(name, Plugin);
      config3.register && config3.register(gsap, Plugin, PropTween);
    } else {
      _registerPluginQueue.push(config3);
    }
  };
  var _255 = 255;
  var _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  };
  var _hue = function _hue2(h2, m1, m2) {
    h2 += h2 < 0 ? 1 : h2 > 1 ? -1 : 0;
    return (h2 * 6 < 1 ? m1 + (m2 - m1) * h2 * 6 : h2 < 0.5 ? m2 : h2 * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h2) * 6 : m1) * _255 + 0.5 | 0;
  };
  var splitColor = function splitColor2(v, toHSL, forceAlpha) {
    var a2 = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r2, g, b, h2, s2, l2, max, min, d, wasHSL;
    if (!a2) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a2 = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r2 = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r2 + r2 + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a2 = parseInt(v.substr(1, 6), 16);
          return [a2 >> 16, a2 >> 8 & _255, a2 & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a2 = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a2 = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h2 = +a2[0] % 360 / 360;
          s2 = +a2[1] / 100;
          l2 = +a2[2] / 100;
          g = l2 <= 0.5 ? l2 * (s2 + 1) : l2 + s2 - l2 * s2;
          r2 = l2 * 2 - g;
          a2.length > 3 && (a2[3] *= 1);
          a2[0] = _hue(h2 + 1 / 3, r2, g);
          a2[1] = _hue(h2, r2, g);
          a2[2] = _hue(h2 - 1 / 3, r2, g);
        } else if (~v.indexOf("=")) {
          a2 = v.match(_numExp);
          forceAlpha && a2.length < 4 && (a2[3] = 1);
          return a2;
        }
      } else {
        a2 = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a2 = a2.map(Number);
    }
    if (toHSL && !wasHSL) {
      r2 = a2[0] / _255;
      g = a2[1] / _255;
      b = a2[2] / _255;
      max = Math.max(r2, g, b);
      min = Math.min(r2, g, b);
      l2 = (max + min) / 2;
      if (max === min) {
        h2 = s2 = 0;
      } else {
        d = max - min;
        s2 = l2 > 0.5 ? d / (2 - max - min) : d / (max + min);
        h2 = max === r2 ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r2) / d + 2 : (r2 - g) / d + 4;
        h2 *= 60;
      }
      a2[0] = ~~(h2 + 0.5);
      a2[1] = ~~(s2 * 100 + 0.5);
      a2[2] = ~~(l2 * 100 + 0.5);
    }
    forceAlpha && a2.length < 4 && (a2[3] = 1);
    return a2;
  };
  var _colorOrderData = function _colorOrderData2(v) {
    var values = [], c2 = [], i2 = -1;
    v.split(_colorExp).forEach(function(v2) {
      var a2 = v2.match(_numWithUnitExp) || [];
      values.push.apply(values, a2);
      c2.push(i2 += a2.length + 1);
    });
    values.c = c2;
    return values;
  };
  var _formatColors = function _formatColors2(s2, toHSL, orderMatchData) {
    var result = "", colors = (s2 + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i2 = 0, c2, shell, d, l2;
    if (!colors) {
      return s2;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s2);
      c2 = orderMatchData.c;
      if (c2.join(result) !== d.c.join(result)) {
        shell = s2.replace(_colorExp, "1").split(_numWithUnitExp);
        l2 = shell.length - 1;
        for (; i2 < l2; i2++) {
          result += shell[i2] + (~c2.indexOf(i2) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s2.split(_colorExp);
      l2 = shell.length - 1;
      for (; i2 < l2; i2++) {
        result += shell[i2] + colors[i2];
      }
    }
    return result + shell[l2];
  };
  var _colorExp = function() {
    var s2 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
    for (p in _colorLookup) {
      s2 += "|" + p + "\\b";
    }
    return new RegExp(s2 + ")", "gi");
  }();
  var _hslExp = /hsl[a]?\(/;
  var _colorStringFilter = function _colorStringFilter2(a2) {
    var combined = a2.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a2[1] = _formatColors(a2[1], toHSL);
      a2[0] = _formatColors(a2[0], toHSL, _colorOrderData(a2[1]));
      return true;
    }
  };
  var _tickerActive;
  var _ticker = function() {
    var _getTime3 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime3(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
      var elapsed = _getTime3() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
      (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id = _req(_tick2));
      if (dispatch) {
        for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
          _listeners3[_i2](time, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _registerPluginQueue.forEach(_createPlugin);
          }
          _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
          _id && _self.sleep();
          _req = _raf || function(f) {
            return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity;
        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function(t2, d, f, v) {
          callback(t2, d, f, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners3[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove(callback, i2) {
        ~(i2 = _listeners3.indexOf(callback)) && _listeners3.splice(i2, 1) && _i2 >= i2 && _i2--;
      },
      _listeners: _listeners3
    };
    return _self;
  }();
  var _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  };
  var _easeMap = {};
  var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
  var _quotesExp = /["']/g;
  var _parseObjectInString = function _parseObjectInString2(value) {
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i2 = 1, l2 = split.length, index, val, parsedVal;
    for (; i2 < l2; i2++) {
      val = split[i2];
      index = i2 !== l2 - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  };
  var _valueInParentheses = function _valueInParentheses2(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  };
  var _configEaseFromString = function _configEaseFromString2(name) {
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  };
  var _invertEase = function _invertEase2(ease) {
    return function(p) {
      return 1 - ease(1 - p);
    };
  };
  var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
    var child = timeline2._first, ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase2(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase2(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  };
  var _parseEase = function _parseEase2(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  };
  var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut2(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
      easeIn,
      easeOut,
      easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  };
  var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
    return function(p) {
      return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
    };
  };
  var _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease;
  };
  var _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut2(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i2) {
    var power = i2 < 5 ? i2 + 1 : i2;
    _insertEase(name + ",Power" + (power - 1), i2 ? function(p) {
      return Math.pow(p, power);
    } : function(p) {
      return p;
    }, function(p) {
      return 1 - Math.pow(1 - p, power);
    }, function(p) {
      return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n2, c2) {
    var n1 = 1 / c2, n22 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
      return p < n1 ? n2 * p * p : p < n22 ? n2 * Math.pow(p - 1.5 / c2, 2) + 0.75 : p < n3 ? n2 * (p -= 2.25 / c2) * p + 0.9375 : n2 * Math.pow(p - 2.625 / c2, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });
  _insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
  });
  _insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function(p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      if (_context) {
        this._ctx = _context;
        _context.data.push(this);
      }
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value, suppressEvents) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);
      _setEnd(this);
      return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config3) {
      if (config3 === void 0) {
        config3 = _revertConfig;
      }
      var prevIsReverting = _reverting;
      _reverting = config3;
      if (this._initted || this._startAt) {
        this.timeline && this.timeline.revert(config3);
        this.totalTime(-0.01, config3.suppressEvents);
      }
      this.data !== "nested" && config3.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (Math.abs(animation._ts) || 1);
        animation = animation._dp;
      }
      return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function(resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
          var _then = self.then;
          self.then = null;
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };
        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation2;
  }();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render4(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && time && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a2 = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a2.push(child);
          } else {
            timelines && a2.push(child);
            nested && a2.push.apply(a2, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a2;
    };
    _proto2.getById = function getById2(id) {
      var animations = this.getChildren(1, 1, 1), i2 = animations.length;
      while (i2--) {
        if (animations[i2].vars.id === id) {
          return animations[i2];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t2 = Tween.delayedCall(0, callback || _emptyFunc, params);
      t2.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t2, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i2 = tweens.length;
      while (i2--) {
        _overwritingTween !== tweens[i2] && tweens[i2].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
      var a2 = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a2.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a2.push.apply(a2, children);
        }
        child = child._next;
      }
      return a2;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate(soft);
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }
      if (self._dirty) {
        parent = self.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }
            self.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
        self._dirty = 0;
      }
      return self._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  }(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a2;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a2 = [start, end];
      stringFilter(a2, target, prop);
      start = a2[0];
      end = a2[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  };
  var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  };
  var _processVars = function _processVars2(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p;
    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
  };
  var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i2;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i2 = plugin._props.length;
        while (i2--) {
          ptLookup[plugin._props[i2]] = pt;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _forceAllPropTweens;
  var _initTween = function _initTween2(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i2, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards;
    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate && function() {
            return _callback(tween, "onUpdate");
          },
          stagger: 0
        }, startAt)));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent
            //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i2 = 0; i2 < targets.length; i2++) {
        target = targets[i2];
        gsData = target._gsap || _harness(targets)[i2]._gsap;
        tween._ptLookup[i2] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i2 : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i2] && tween.kill(target, tween._op[i2]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  };
  var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i2;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i2 = tween._targets.length;
      while (i2--) {
        pt = lookup[i2][property];
        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;
          while (pt && pt.p !== property && pt.fp !== property) {
            pt = pt._next;
          }
        }
        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return skipRecursion ? _warn(property + " not eligible for reset") : 1;
        }
        ptCache.push(pt);
      }
    }
    i2 = ptCache.length;
    while (i2--) {
      rootPT = ptCache[i2];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i2, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i2 = aliases.length;
        while (i2--) {
          copy[aliases[i2]] = copy[p];
        }
      }
    }
    return copy;
  };
  var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a2;
    if (_isArray(obj)) {
      a2 = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value, i2) {
        return a2.push({
          t: i2 / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a2 = allProps[p] || (allProps[p] = []);
        p === "ease" || a2.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  };
  var _parseFuncOrString = function _parseFuncOrString2(value, tween, i2, target, targets) {
    return _isFunction(value) ? value.call(tween, i2, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  };
  var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
  var _staggerPropsToSkip = {};
  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
  });
  var Tween = /* @__PURE__ */ function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i2, copy, l2, p, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults2 || {},
          targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l2 = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }
          for (i2 = 0; i2 < l2; i2++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i2];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i2, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i2, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l2 === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i2, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0, a2, kf, v;
          if (_isArray(keyframes)) {
            keyframes.forEach(function(frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy = {};
            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
            }
            for (p in copy) {
              a2 = copy[p].sort(function(a3, b) {
                return a3.t - b.t;
              });
              time = 0;
              for (i2 = 0; i2 < a2.length; i2++) {
                kf = a2[i2];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i2 ? a2[i2 - 1].t : 0)) / 100 * duration
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }
            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay) || 0);
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render4(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
        time = tTime;
        timeline2 = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === _roundPrecise(tTime / cycleDuration)) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted && iteration === prevIteration) {
            this._tTime = tTime;
            return this;
          }
          if (iteration !== prevIteration) {
            timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }
          if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (time && !prevTime && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline2 && timeline2.render(totalTime < 0 ? totalTime : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);
      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
        return this.resetTo(property, value, start, startIsRelative, 1);
      }
      _alignPlayhead(this, 0);
      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i2;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};
          _forEachName(vars, function(name) {
            return p[name] = 1;
          });
          vars = p;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i2 = parsedTargets.length;
      while (i2--) {
        if (~killingTargets.indexOf(parsedTargets[i2])) {
          curLookup = propTweenLookup[i2];
          if (vars === "all") {
            overwrittenProps[i2] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i2] = overwrittenProps[i2] || {};
            props = vars;
          }
          for (p in props) {
            pt = curLookup && curLookup[p];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  }(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
    return target[property] = value;
  };
  var _setterFunc = function _setterFunc2(target, property, value) {
    return target[property](value);
  };
  var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
    return target[property](data.fp, value);
  };
  var _setterAttribute = function _setterAttribute2(target, property, value) {
    return target.setAttribute(property, value);
  };
  var _getSetter = function _getSetter2(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  };
  var _renderPlain = function _renderPlain2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
  };
  var _renderBoolean = function _renderBoolean2(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  };
  var _renderComplexString = function _renderComplexString2(ratio, data) {
    var pt = data._pt, s2 = "";
    if (!ratio && data.b) {
      s2 = data.b;
    } else if (ratio === 1 && data.e) {
      s2 = data.e;
    } else {
      while (pt) {
        s2 = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s2;
        pt = pt._next;
      }
      s2 += data.c;
    }
    data.set(data.t, data.p, s2, data);
  };
  var _renderPropTweens = function _renderPropTweens2(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  };
  var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  };
  var _killPropTweensOf = function _killPropTweensOf2(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  };
  var _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  };
  var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
    var pt = parent._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  };
  var PropTween = /* @__PURE__ */ function() {
    function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween2.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween2;
  }();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _media = [];
  var _listeners = {};
  var _emptyArray = [];
  var _lastMediaTime = 0;
  var _contextID = 0;
  var _dispatch = function _dispatch2(type) {
    return (_listeners[type] || _emptyArray).map(function(f) {
      return f();
    });
  };
  var _onMediaChange = function _onMediaChange2() {
    var time = Date.now(), matches = [];
    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function(c2) {
        var queries = c2.queries, conditions = c2.conditions, match, p, anyMatch, toggled;
        for (p in queries) {
          match = _win.matchMedia(queries[p]).matches;
          match && (anyMatch = 1);
          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c2.revert();
          anyMatch && matches.push(c2);
        }
      });
      _dispatch("matchMediaRevert");
      matches.forEach(function(c2) {
        return c2.onMatch(c2, function(func) {
          return c2.add(null, func);
        });
      });
      _lastMediaTime = time;
      _dispatch("matchMedia");
    }
  };
  var Context = /* @__PURE__ */ function() {
    function Context2(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      this.id = _contextID++;
      func && this.add(func);
    }
    var _proto5 = Context2.prototype;
    _proto5.add = function add(name, func, scope) {
      if (_isFunction(name)) {
        scope = func;
        func = name;
        name = _isFunction;
      }
      var self = this, f = function f2() {
        var prev = _context, prevSelector = self.selector, result;
        prev && prev !== self && prev.data.push(self);
        scope && (self.selector = selector(scope));
        _context = self;
        result = func.apply(self, arguments);
        _isFunction(result) && self._r.push(result);
        _context = prev;
        self.selector = prevSelector;
        self.isReverted = false;
        return result;
      };
      self.last = f;
      return name === _isFunction ? f(self, function(func2) {
        return self.add(null, func2);
      }) : name ? self[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
      var prev = _context;
      _context = null;
      func(this);
      _context = prev;
    };
    _proto5.getTweens = function getTweens() {
      var a2 = [];
      this.data.forEach(function(e3) {
        return e3 instanceof Context2 ? a2.push.apply(a2, e3.getTweens()) : e3 instanceof Tween && !(e3.parent && e3.parent.data === "nested") && a2.push(e3);
      });
      return a2;
    };
    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia2) {
      var _this4 = this;
      if (revert) {
        (function() {
          var tweens = _this4.getTweens(), i3 = _this4.data.length, t2;
          while (i3--) {
            t2 = _this4.data[i3];
            if (t2.data === "isFlip") {
              t2.revert();
              t2.getChildren(true, true, false).forEach(function(tween) {
                return tweens.splice(tweens.indexOf(tween), 1);
              });
            }
          }
          tweens.map(function(t3) {
            return {
              g: t3._dur || t3._delay || t3._sat && !t3._sat.vars.immediateRender ? t3.globalTime(0) : -Infinity,
              t: t3
            };
          }).sort(function(a2, b) {
            return b.g - a2.g || -Infinity;
          }).forEach(function(o2) {
            return o2.t.revert(revert);
          });
          i3 = _this4.data.length;
          while (i3--) {
            t2 = _this4.data[i3];
            if (t2 instanceof Timeline) {
              if (t2.data !== "nested") {
                t2.scrollTrigger && t2.scrollTrigger.revert();
                t2.kill();
              }
            } else {
              !(t2 instanceof Tween) && t2.revert && t2.revert(revert);
            }
          }
          _this4._r.forEach(function(f) {
            return f(revert, _this4);
          });
          _this4.isReverted = true;
        })();
      } else {
        this.data.forEach(function(e3) {
          return e3.kill && e3.kill();
        });
      }
      this.clear();
      if (matchMedia2) {
        var i2 = _media.length;
        while (i2--) {
          _media[i2].id === this.id && _media.splice(i2, 1);
        }
      }
    };
    _proto5.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    return Context2;
  }();
  var MatchMedia = /* @__PURE__ */ function() {
    function MatchMedia2(scope) {
      this.contexts = [];
      this.scope = scope;
      _context && _context.data.push(this);
    }
    var _proto6 = MatchMedia2.prototype;
    _proto6.add = function add(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
      _context && !context3.selector && (context3.selector = _context.selector);
      this.contexts.push(context3);
      func = context3.add("onMatch", func);
      context3.queries = conditions;
      for (p in conditions) {
        if (p === "all") {
          active = 1;
        } else {
          mq = _win.matchMedia(conditions[p]);
          if (mq) {
            _media.indexOf(context3) < 0 && _media.push(context3);
            (cond[p] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }
      active && func(context3, function(f) {
        return context3.add(null, f);
      });
      return this;
    };
    _proto6.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    _proto6.kill = function kill(revert) {
      this.contexts.forEach(function(c2) {
        return c2.kill(revert, true);
      });
    };
    return MatchMedia2;
  }();
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config3) {
        return _createPlugin(config3);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function(property2, unit2, uncache2) {
        return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function(t2) {
          return gsap.quickSetter(t2, property, unit);
        }), l2 = setters.length;
        return function(value) {
          var i2 = l2;
          while (i2--) {
            setters[i2](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
        var p2 = new Plugin();
        _quickTween._pt = 0;
        p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p2.render(1, p2);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
      return Plugin ? setter : function(value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _merge22;
      var tween = gsap.to(target, _merge((_merge22 = {}, _merge22[property] = "+=0.1", _merge22.paused = true, _merge22), vars || {})), func = function func2(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config2(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function(targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function(targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function(c2) {
        var cond = c2.conditions, found, p;
        for (p in cond) {
          if (cond[p]) {
            cond[p] = false;
            found = 1;
          }
        }
        found && c2.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a2 = _listeners[type] || (_listeners[type] = []);
      ~a2.indexOf(callback) || a2.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a2 = _listeners[type], i2 = a2 && a2.indexOf(callback);
      i2 >= 0 && a2.splice(i2, 1);
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context2(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);
          toAdd._ctx = _context;
        }
        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  };
  var _addModifiers = function _addModifiers2(tween, modifiers) {
    var targets = tween._targets, p, i2, pt;
    for (p in modifiers) {
      i2 = targets.length;
      while (i2--) {
        pt = tween._ptLookup[i2][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i2], p);
        }
      }
    }
  };
  var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
    return {
      name,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init6(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function(name2) {
              return temp[name2] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt, v;
      this.tween = tween;
      for (p in vars) {
        v = target.getAttribute(p) || "";
        pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
        pt.op = p;
        pt.b = v;
        this._props.push(p);
      }
    },
    render: function render(ratio, data) {
      var pt = data._pt;
      while (pt) {
        _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }
  }, {
    name: "endArray",
    init: function init2(target, value) {
      var i2 = value.length;
      while (i2--) {
        this.add(target, i2, target[i2] || 0, value[i2], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.12.5";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0;
  var Power1 = _easeMap.Power1;
  var Power2 = _easeMap.Power2;
  var Power3 = _easeMap.Power3;
  var Power4 = _easeMap.Power4;
  var Linear = _easeMap.Linear;
  var Quad = _easeMap.Quad;
  var Cubic = _easeMap.Cubic;
  var Quart = _easeMap.Quart;
  var Quint = _easeMap.Quint;
  var Strong = _easeMap.Strong;
  var Elastic = _easeMap.Elastic;
  var Back = _easeMap.Back;
  var SteppedEase = _easeMap.SteppedEase;
  var Bounce = _easeMap.Bounce;
  var Sine = _easeMap.Sine;
  var Expo = _easeMap.Expo;
  var Circ = _easeMap.Circ;

  // node_modules/gsap/CSSPlugin.js
  var _win2;
  var _doc2;
  var _docElement;
  var _pluginInitted;
  var _tempDiv;
  var _tempDivStyler;
  var _recentSetterPlugin;
  var _reverting2;
  var _windowExists3 = function _windowExists4() {
    return typeof window !== "undefined";
  };
  var _transformProps = {};
  var _RAD2DEG = 180 / Math.PI;
  var _DEG2RAD = Math.PI / 180;
  var _atan2 = Math.atan2;
  var _bigNum2 = 1e8;
  var _capsExp = /([A-Z])/g;
  var _horizontalExp = /(left|right|width|margin|padding|x)/i;
  var _complexExp = /[\s,\(]\S/;
  var _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  };
  var _renderCSSProp = function _renderCSSProp2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  };
  var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
  };
  var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  };
  var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  };
  var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
    return target.style[property] = value;
  };
  var _setterCSSProp = function _setterCSSProp2(target, property, value) {
    return target.style.setProperty(property, value);
  };
  var _setterTransform = function _setterTransform2(target, property, value) {
    return target._gsap[property] = value;
  };
  var _setterScale = function _setterScale2(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  };
  var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  };
  var _transformProp = "transform";
  var _transformOriginProp = _transformProp + "Origin";
  var _saveStyle = function _saveStyle2(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style, cache = target._gsap;
    if (property in _transformProps && style) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function(a2) {
          return _this.tfm[a2] = _get(target, a2);
        }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
        property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
      } else {
        return _propertyAliases.transform.split(",").forEach(function(p) {
          return _saveStyle2.call(_this, p, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (cache.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  };
  var _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  };
  var _revertStyle = function _revertStyle2() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i2, p;
    for (i2 = 0; i2 < props.length; i2 += 3) {
      props[i2 + 1] ? target[props[i2]] = props[i2 + 2] : props[i2 + 2] ? style[props[i2]] = props[i2 + 2] : style.removeProperty(props[i2].substr(0, 2) === "--" ? props[i2] : props[i2].replace(_capsExp, "-$1").toLowerCase());
    }
    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }
      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i2 = _reverting2();
      if ((!i2 || !i2.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);
        if (cache.zOrigin && style[_transformOriginProp]) {
          style[_transformOriginProp] += " " + cache.zOrigin + "px";
          cache.zOrigin = 0;
          cache.renderTransform();
        }
        cache.uncache = 1;
      }
    }
  };
  var _getStyleSaver = function _getStyleSaver2(target, properties) {
    var saver = {
      target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || gsap.core.getCache(target);
    properties && properties.split(",").forEach(function(p) {
      return saver.save(p);
    });
    return saver;
  };
  var _supports3D;
  var _createElement = function _createElement2(type, ns) {
    var e3 = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
    return e3 && e3.style ? e3 : _doc2.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e3 = element || _tempDiv, s2 = e3.style, i2 = 5;
    if (property in s2 && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i2-- && !(_prefixes[i2] + property in s2)) {
    }
    return i2 < 0 ? null : (i2 === 3 ? "ms" : i2 >= 0 ? _prefixes[i2] : "") + property;
  };
  var _initCore = function _initCore2() {
    if (_windowExists3() && window.document) {
      _win2 = window;
      _doc2 = _win2.document;
      _docElement = _doc2.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting2 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  };
  var _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack2;
      } catch (e3) {
      }
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  };
  var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i2 = attributesArray.length;
    while (i2--) {
      if (target.hasAttribute(attributesArray[i2])) {
        return target.getAttribute(attributesArray[i2]);
      }
    }
  };
  var _getBBox = function _getBBox2(target) {
    var bounds;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  };
  var _isSVG = function _isSVG2(e3) {
    return !!(e3.getCTM && (!e3.parentNode || e3.ownerSVGElement) && _getBBox(e3));
  };
  var _removeProperty = function _removeProperty2(target, property) {
    if (property) {
      var style = target.style, first2Chars;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        first2Chars = property.substr(0, 2);
        if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  };
  var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  };
  var _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  };
  var _nonStandardLayouts = {
    grid: 1,
    flex: 1
  };
  var _convertToUnit = function _convertToUnit2(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc2 || !parent.appendChild) {
      parent = _doc2.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
      return _round(curValue / cache.width * amount);
    } else {
      if (toPercent && (property === "height" || property === "width")) {
        var v = target.style[property];
        target.style[property] = amount + unit;
        px = target[measureProperty];
        v ? target.style[property] = v : _removeProperty(target, property);
      } else {
        (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
        parent === target && (style.position = "static");
        parent.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent.removeChild(_tempDiv);
        style.position = "absolute";
      }
      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  };
  var _get = function _get2(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  };
  var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1), s2 = p && _getComputedProperty(target, p, 1);
      if (s2 && s2 !== start) {
        prop = p;
        start = s2;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a2, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end === "auto") {
      startValue = target.style[prop];
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
    }
    a2 = [start, end];
    _colorStringFilter(a2);
    start = a2[0];
    end = a2[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  };
  var _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  };
  var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i2;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i2 = props.length;
        while (--i2 > -1) {
          prop = props[i2];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          _parseTransform(target, 1);
          cache.uncache = 1;
          _removeIndependentTransforms(style);
        }
      }
    }
  };
  var _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  };
  var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
  var _rotationalProperties = {};
  var _isNullTransform = function _isNullTransform2(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  };
  var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  };
  var _getMatrix = function _getMatrix2(target, force2D) {
    var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  };
  var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a2 = matrix[0], b = matrix[1], c2 = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a2 * d - b * c2)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c2 / determinant) + (c2 * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a2 / determinant) - (a2 * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a2 + ty * c2) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a2, b, c2, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      if (cache.uncache) {
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a2 = matrix[0];
      b = matrix[1];
      c2 = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a2 * a2 + b * b);
        scaleY = Math.sqrt(d * d + c2 * c2);
        rotation = a2 || b ? _atan2(b, a2) * _RAD2DEG : 0;
        skewX = c2 || d ? _atan2(c2, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a2 + yOrigin * c2);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c2, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a2 * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c2 * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a2 = t1;
          b = t2;
          c2 = t3;
        }
        angle = _atan2(b, a2);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a2 * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a2 * sin;
          a22 = a22 * cos - a12 * sin;
          a2 = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a2 * a2 + b * b + c2 * c2));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  };
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  };
  var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  };
  var _assign = function _assign2(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  };
  var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name, index) {
    var t2 = "Top", r2 = "Right", b = "Bottom", l2 = "Left", props = (index < 3 ? [t2, r2, b, l2] : [t2 + l2, t2 + r2, b + r2, b + l2]).map(function(side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
      var a2, vars;
      if (arguments.length < 4) {
        a2 = props.map(function(prop) {
          return _get(plugin, prop, property);
        });
        vars = a2.join(" ");
        return vars.split(a2[0]).length === 5 ? a2[0] : vars;
      }
      a2 = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i2) {
        return vars[prop] = a2[i2] = a2[i2] || a2[(i2 - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init3(target, vars, tween, index, targets) {
      var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
        endValue = vars[p];
        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
          inlineProps.push(p, 0, style[p]);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              inlineProps.push("visibility", 0, style.visibility);
              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }
          isTransformRelated = p in _transformProps;
          if (isTransformRelated) {
            this.styles.save(p);
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
            } else if (p !== "parseTransform") {
              _missingPlugin(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          }
          isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
          props.push(p);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render2(ratio, data) {
      if (data.tween._time || !_reverting2()) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;
  (function(positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function(name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function(name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _config.units[name] = "px";
  });
  gsap.registerPlugin(CSSPlugin);

  // node_modules/gsap/index.js
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  var TweenMaxWithCSS = gsapWithCSS.core.Tween;

  // assets/scripts/config.js
  var NODE_ENV = "development";
  var IS_MOBILE = window.matchMedia("(any-pointer:coarse)").matches;
  var ENV = Object.freeze({
    // Node environment
    NAME: NODE_ENV,
    IS_PROD: NODE_ENV === "production",
    IS_DEV: NODE_ENV === "development",
    // Device
    IS_MOBILE,
    IS_DESKTOP: !IS_MOBILE
  });
  var CSS_CLASS = Object.freeze({
    FIRST_LOADED: "is-first-loaded",
    LOADING: "is-loading",
    LOADED: "is-loaded",
    READY: "is-ready",
    FONTS_LOADED: "fonts-loaded",
    LAZY_CONTAINER: "c-lazy",
    LAZY_LOADED: "-lazy-loaded"
    // ...
  });
  var CUSTOM_EVENT = Object.freeze({
    RESIZE_END: "loco.resizeEnd"
    // ...
  });
  var FONT = Object.freeze({
    EAGER: [
      { family: "PP Locomotive New", style: "normal", weight: 300 },
      { family: "Helvetica Now Display", style: "normal", weight: 400 },
      { family: "Helvetica Now Display", style: "normal", weight: 500 }
    ]
  });

  // assets/scripts/modules/Rail.js
  var Rail_default = class extends _default {
    constructor(m) {
      super(m);
      this.onUpdateBind = this.onUpdate.bind(this);
      this.onResizeBind = this.onResize.bind(this);
      this.onFontsLoadedBind = this.onFontsLoaded.bind(this);
      this.$container = this.$("container")[0];
      this.$pattern = this.$("pattern")[0];
      this.prevCount = null;
      this.currentTranslate = 0;
      this.maxTranslate = this.$container.offsetWidth;
      this.idleVelocity = 1;
      this.scrollVelocity = 0.1;
      this.scrollLerp = 0.8;
      this.scrollDirection = 1;
      this.railDirection = this.getData("direction");
      this.showFrom = parseInt(this.getData("from")) || false;
      this.showTo = parseInt(this.getData("to")) || false;
      this.data = [];
      this.$items = [];
      this.glyphs = ["\u{1F6D1}", "\u{1F51D}", "\u{1F378}", "\u26FA", "\u{1F616}"];
    }
    ///////////////
    // Lifecyle
    ///////////////
    init() {
      this.bindEvents();
      whenReady(FONT.EAGER).then((fonts) => this.onFontsLoaded(fonts));
    }
    destroy() {
      super.destroy();
      this.unbindEvents();
      this.stop();
    }
    ///////////////
    // Events
    ///////////////
    bindEvents() {
      window.addEventListener(CUSTOM_EVENT.RESIZE_END, this.onResizeBind);
    }
    unbindEvents() {
      window.removeEventListener(CUSTOM_EVENT.RESIZE_END, this.onResizeBind);
    }
    ///////////////
    // Callbacks
    ///////////////
    onResize() {
      this.repeatPattern();
    }
    onFontsLoaded() {
      this.repeatPattern();
    }
    onUpdate() {
      this.currentTranslate = (this.currentTranslate + this.idleVelocity * this.scrollDirection * this.railDirection + this.scrollVelocity * this.scrollDirection * this.railDirection) % this.maxTranslate;
      for (const [index, $items] of this.$items.entries()) {
        let translate;
        const right = this.data[index].left + this.data[index].width;
        if (this.currentTranslate < right * -1) {
          translate = this.maxTranslate;
        } else if (this.currentTranslate > this.maxTranslate - right) {
          translate = -this.maxTranslate;
        } else {
          translate = 0;
        }
        this.data[index].translate = translate;
        $items.style.transform = `translate3d(${translate}px,0,0)`;
      }
      this.$container.style.transform = `translate3d(${this.currentTranslate}px,0,0)`;
    }
    onScroll(scrollData) {
      const { velocity, direction } = scrollData;
      this.scrollDirection = direction != 0 ? direction : this.scrollDirection;
      this.scrollDirection = this.scrollDirection * -1;
      this.scrollVelocity = Math.round(Math.abs(velocity)) * this.scrollLerp;
    }
    ///////////////
    // Methods
    ///////////////
    start() {
      if (this.isPlaying)
        return;
      this.isPlaying = true;
      gsapWithCSS.ticker.add(this.onUpdateBind);
    }
    stop() {
      if (!this.isPlaying)
        return;
      this.isPlaying = false;
      gsapWithCSS.ticker.remove(this.onUpdateBind);
    }
    toggle(e3) {
      const { way } = e3;
      way === "enter" ? this.start() : this.stop();
    }
    computeMetrics(reset = false) {
      if (reset) {
        this.$items = this.el.querySelectorAll("[data-rail-item]");
        this.data = [];
        this.currentTranslate = 0;
        for (const [index, $items] of this.$items.entries()) {
          const { left, width } = $items.getBoundingClientRect();
          this.data[index] = {
            left,
            width,
            translate: 0
          };
        }
      } else {
        for (const [index, $items] of this.$items.entries()) {
          const { left, width } = $items.getBoundingClientRect();
          this.data[index].left = left - this.currentTranslate - this.data[index].translate;
          this.data[index].width = width;
        }
      }
    }
    repeatPattern() {
      if (this.showFrom && window.innerWidth < this.showFrom || this.showTo && window.innerWidth > this.showTo) {
        return;
      }
      const patternWidth = this.$pattern.offsetWidth;
      const repeatCount = Math.ceil(window.innerWidth / patternWidth) + 1;
      this.maxTranslate = repeatCount * patternWidth;
      if (repeatCount === this.prevCount)
        return this.computeMetrics();
      this.prevCount = repeatCount;
      const $currentClones = this.$container.querySelectorAll("[data-clone]");
      for (const $currentClone of $currentClones) {
        $currentClone.remove();
      }
      for (let index = 0; index < repeatCount - 1; index++) {
        const $clone = this.$pattern.cloneNode(true);
        $clone.querySelector(".c-rail_glyph").innerHTML = this.glyphs[index];
        $clone.setAttribute("data-clone", "");
        $clone.setAttribute("aria-hidden", "true");
        this.$container.appendChild($clone);
      }
      requestAnimationFrame(() => {
        this.computeMetrics(true);
      });
    }
  };

  // assets/scripts/utils/dom.js
  var $html = document.documentElement;
  var $body = document.body;

  // node_modules/lenis/dist/lenis.mjs
  var __assign = function() {
    return __assign = Object.assign || function __assign2(t2) {
      for (var e3, i2 = 1, o2 = arguments.length; i2 < o2; i2++)
        for (var s2 in e3 = arguments[i2])
          Object.prototype.hasOwnProperty.call(e3, s2) && (t2[s2] = e3[s2]);
      return t2;
    }, __assign.apply(this, arguments);
  };
  function clamp3(t2, e3, i2) {
    return Math.max(t2, Math.min(e3, i2));
  }
  var Animate = class {
    advance(t2) {
      var _a;
      if (!this.isRunning)
        return;
      let e3 = false;
      if (this.lerp)
        this.value = function damp(t3, e4, i2, o2) {
          return function lerp(t4, e5, i3) {
            return (1 - i3) * t4 + i3 * e5;
          }(t3, e4, 1 - Math.exp(-i2 * o2));
        }(this.value, this.to, 60 * this.lerp, t2), Math.round(this.value) === this.to && (this.value = this.to, e3 = true);
      else {
        this.currentTime += t2;
        const i2 = clamp3(0, this.currentTime / this.duration, 1);
        e3 = i2 >= 1;
        const o2 = e3 ? 1 : this.easing(i2);
        this.value = this.from + (this.to - this.from) * o2;
      }
      e3 && this.stop(), (_a = this.onUpdate) == null ? void 0 : _a.call(this, this.value, e3);
    }
    stop() {
      this.isRunning = false;
    }
    fromTo(t2, e3, { lerp: i2 = 0.1, duration: o2 = 1, easing: s2 = (t3) => t3, onStart: n2, onUpdate: r2 }) {
      this.from = this.value = t2, this.to = e3, this.lerp = i2, this.duration = o2, this.easing = s2, this.currentTime = 0, this.isRunning = true, n2 == null ? void 0 : n2(), this.onUpdate = r2;
    }
  };
  var Dimensions = class {
    constructor({ wrapper: t2, content: e3, autoResize: i2 = true, debounce: o2 = 250 } = {}) {
      __publicField(this, "resize", () => {
        this.onWrapperResize(), this.onContentResize();
      });
      __publicField(this, "onWrapperResize", () => {
        this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
      });
      __publicField(this, "onContentResize", () => {
        this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
      });
      this.wrapper = t2, this.content = e3, i2 && (this.debouncedResize = function debounce2(t3, e4) {
        let i3;
        return function() {
          let o3 = arguments, s2 = this;
          clearTimeout(i3), i3 = setTimeout(function() {
            t3.apply(s2, o3);
          }, e4);
        };
      }(this.resize, o2), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, false) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
    }
    destroy() {
      var _a, _b;
      (_a = this.wrapperResizeObserver) == null ? void 0 : _a.disconnect(), (_b = this.contentResizeObserver) == null ? void 0 : _b.disconnect(), window.removeEventListener("resize", this.debouncedResize, false);
    }
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
  };
  var Emitter = class {
    constructor() {
      this.events = {};
    }
    emit(t2, ...e3) {
      let i2 = this.events[t2] || [];
      for (let t3 = 0, o2 = i2.length; t3 < o2; t3++)
        i2[t3](...e3);
    }
    on(t2, e3) {
      var _a;
      return ((_a = this.events[t2]) == null ? void 0 : _a.push(e3)) || (this.events[t2] = [e3]), () => {
        var _a2;
        this.events[t2] = (_a2 = this.events[t2]) == null ? void 0 : _a2.filter((t3) => e3 !== t3);
      };
    }
    off(t2, e3) {
      var _a;
      this.events[t2] = (_a = this.events[t2]) == null ? void 0 : _a.filter((t3) => e3 !== t3);
    }
    destroy() {
      this.events = {};
    }
  };
  var t = 100 / 6;
  var VirtualScroll = class {
    constructor(t2, { wheelMultiplier: e3 = 1, touchMultiplier: i2 = 1 }) {
      __publicField(this, "onTouchStart", (t2) => {
        const { clientX: e3, clientY: i2 } = t2.targetTouches ? t2.targetTouches[0] : t2;
        this.touchStart.x = e3, this.touchStart.y = i2, this.lastDelta = { x: 0, y: 0 }, this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t2 });
      });
      __publicField(this, "onTouchMove", (t2) => {
        const { clientX: e3, clientY: i2 } = t2.targetTouches ? t2.targetTouches[0] : t2, o2 = -(e3 - this.touchStart.x) * this.touchMultiplier, s2 = -(i2 - this.touchStart.y) * this.touchMultiplier;
        this.touchStart.x = e3, this.touchStart.y = i2, this.lastDelta = { x: o2, y: s2 }, this.emitter.emit("scroll", { deltaX: o2, deltaY: s2, event: t2 });
      });
      __publicField(this, "onTouchEnd", (t2) => {
        this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t2 });
      });
      __publicField(this, "onWheel", (e3) => {
        let { deltaX: i2, deltaY: o2, deltaMode: s2 } = e3;
        i2 *= 1 === s2 ? t : 2 === s2 ? this.windowWidth : 1, o2 *= 1 === s2 ? t : 2 === s2 ? this.windowHeight : 1, i2 *= this.wheelMultiplier, o2 *= this.wheelMultiplier, this.emitter.emit("scroll", { deltaX: i2, deltaY: o2, event: e3 });
      });
      __publicField(this, "onWindowResize", () => {
        this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight;
      });
      this.element = t2, this.wheelMultiplier = e3, this.touchMultiplier = i2, this.touchStart = { x: null, y: null }, this.emitter = new Emitter(), window.addEventListener("resize", this.onWindowResize, false), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, { passive: false }), this.element.addEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.addEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.addEventListener("touchend", this.onTouchEnd, { passive: false });
    }
    on(t2, e3) {
      return this.emitter.on(t2, e3);
    }
    destroy() {
      this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, false), this.element.removeEventListener("wheel", this.onWheel, { passive: false }), this.element.removeEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.removeEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.removeEventListener("touchend", this.onTouchEnd, { passive: false });
    }
  };
  var e = function() {
    function Lenis(t2) {
      var e3 = void 0 === t2 ? {} : t2, i2 = e3.wrapper, o2 = void 0 === i2 ? window : i2, s2 = e3.content, n2 = void 0 === s2 ? document.documentElement : s2, r2 = e3.wheelEventsTarget, l2 = void 0 === r2 ? o2 : r2, h2 = e3.eventsTarget, a2 = void 0 === h2 ? l2 : h2, c2 = e3.smoothWheel, p = void 0 === c2 || c2, u = e3.syncTouch, d = void 0 !== u && u, m = e3.syncTouchLerp, v = void 0 === m ? 0.075 : m, g = e3.touchInertiaMultiplier, f = void 0 === g ? 35 : g, S = e3.duration, w = e3.easing, y = void 0 === w ? function(t3) {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t3));
      } : w, b = e3.lerp, L = void 0 === b ? !S && 0.1 : b, _ = e3.infinite, z = void 0 !== _ && _, E = e3.orientation, T = void 0 === E ? "vertical" : E, M = e3.gestureOrientation, R = void 0 === M ? "vertical" : M, O = e3.touchMultiplier, W = void 0 === O ? 1 : O, x = e3.wheelMultiplier, H = void 0 === x ? 1 : x, N = e3.autoResize, k = void 0 === N || N, C = e3.__experimental__naiveDimensions, j = void 0 !== C && C, P = this;
      this.__isSmooth = false, this.__isScrolling = false, this.__isStopped = false, this.__isLocked = false, this.onVirtualScroll = function(t3) {
        var e4 = t3.deltaX, i3 = t3.deltaY, o3 = t3.event;
        if (!o3.ctrlKey) {
          var s3 = o3.type.includes("touch"), n3 = o3.type.includes("wheel");
          if (P.options.syncTouch && s3 && "touchstart" === o3.type && !P.isStopped && !P.isLocked)
            P.reset();
          else {
            var r3 = 0 === e4 && 0 === i3, l3 = "vertical" === P.options.gestureOrientation && 0 === i3 || "horizontal" === P.options.gestureOrientation && 0 === e4;
            if (!r3 && !l3) {
              var h3 = o3.composedPath();
              if (!(h3 = h3.slice(0, h3.indexOf(P.rootElement))).find(function(t4) {
                var e5, i4, o4, r4, l4;
                return (null === (e5 = t4.hasAttribute) || void 0 === e5 ? void 0 : e5.call(t4, "data-lenis-prevent")) || s3 && (null === (i4 = t4.hasAttribute) || void 0 === i4 ? void 0 : i4.call(t4, "data-lenis-prevent-touch")) || n3 && (null === (o4 = t4.hasAttribute) || void 0 === o4 ? void 0 : o4.call(t4, "data-lenis-prevent-wheel")) || (null === (r4 = t4.classList) || void 0 === r4 ? void 0 : r4.contains("lenis")) && !(null === (l4 = t4.classList) || void 0 === l4 ? void 0 : l4.contains("lenis-stopped"));
              }))
                if (P.isStopped || P.isLocked)
                  o3.preventDefault();
                else {
                  if (P.isSmooth = P.options.syncTouch && s3 || P.options.smoothWheel && n3, !P.isSmooth)
                    return P.isScrolling = false, void P.animate.stop();
                  o3.preventDefault();
                  var a3 = i3;
                  "both" === P.options.gestureOrientation ? a3 = Math.abs(i3) > Math.abs(e4) ? i3 : e4 : "horizontal" === P.options.gestureOrientation && (a3 = e4);
                  var c3 = s3 && P.options.syncTouch, p2 = s3 && "touchend" === o3.type && Math.abs(a3) > 5;
                  p2 && (a3 = P.velocity * P.options.touchInertiaMultiplier), P.scrollTo(P.targetScroll + a3, __assign({ programmatic: false }, c3 ? { lerp: p2 ? P.options.syncTouchLerp : 1 } : { lerp: P.options.lerp, duration: P.options.duration, easing: P.options.easing }));
                }
            }
          }
        }
      }, this.onNativeScroll = function() {
        if (!P.__preventNextScrollEvent && !P.isScrolling) {
          var t3 = P.animatedScroll;
          P.animatedScroll = P.targetScroll = P.actualScroll, P.velocity = 0, P.direction = Math.sign(P.animatedScroll - t3), P.emit();
        }
      }, window.lenisVersion = "1.0.45", o2 !== document.documentElement && o2 !== document.body || (o2 = window), this.options = { wrapper: o2, content: n2, wheelEventsTarget: l2, eventsTarget: a2, smoothWheel: p, syncTouch: d, syncTouchLerp: v, touchInertiaMultiplier: f, duration: S, easing: y, lerp: L, infinite: z, gestureOrientation: R, orientation: T, touchMultiplier: W, wheelMultiplier: H, autoResize: k, __experimental__naiveDimensions: j }, this.animate = new Animate(), this.emitter = new Emitter(), this.dimensions = new Dimensions({ wrapper: o2, content: n2, autoResize: k }), this.toggleClassName("lenis", true), this.velocity = 0, this.isLocked = false, this.isStopped = false, this.isSmooth = d || p, this.isScrolling = false, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false), this.virtualScroll = new VirtualScroll(a2, { touchMultiplier: W, wheelMultiplier: H }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    return Lenis.prototype.destroy = function() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, false), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", false), this.toggleClassName("lenis-smooth", false), this.toggleClassName("lenis-scrolling", false), this.toggleClassName("lenis-stopped", false), this.toggleClassName("lenis-locked", false);
    }, Lenis.prototype.on = function(t2, e3) {
      return this.emitter.on(t2, e3);
    }, Lenis.prototype.off = function(t2, e3) {
      return this.emitter.off(t2, e3);
    }, Lenis.prototype.setScroll = function(t2) {
      this.isHorizontal ? this.rootElement.scrollLeft = t2 : this.rootElement.scrollTop = t2;
    }, Lenis.prototype.resize = function() {
      this.dimensions.resize();
    }, Lenis.prototype.emit = function() {
      this.emitter.emit("scroll", this);
    }, Lenis.prototype.reset = function() {
      this.isLocked = false, this.isScrolling = false, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop();
    }, Lenis.prototype.start = function() {
      this.isStopped && (this.isStopped = false, this.reset());
    }, Lenis.prototype.stop = function() {
      this.isStopped || (this.isStopped = true, this.animate.stop(), this.reset());
    }, Lenis.prototype.raf = function(t2) {
      var e3 = t2 - (this.time || t2);
      this.time = t2, this.animate.advance(1e-3 * e3);
    }, Lenis.prototype.scrollTo = function(t2, e3) {
      var i2 = this, o2 = void 0 === e3 ? {} : e3, s2 = o2.offset, n2 = void 0 === s2 ? 0 : s2, r2 = o2.immediate, l2 = void 0 !== r2 && r2, h2 = o2.lock, a2 = void 0 !== h2 && h2, c2 = o2.duration, p = void 0 === c2 ? this.options.duration : c2, u = o2.easing, d = void 0 === u ? this.options.easing : u, m = o2.lerp, v = void 0 === m ? !p && this.options.lerp : m, g = o2.onComplete, f = o2.force, S = void 0 !== f && f, w = o2.programmatic, y = void 0 === w || w;
      if (!this.isStopped && !this.isLocked || S) {
        if (["top", "left", "start"].includes(t2))
          t2 = 0;
        else if (["bottom", "right", "end"].includes(t2))
          t2 = this.limit;
        else {
          var b = void 0;
          if ("string" == typeof t2 ? b = document.querySelector(t2) : (null == t2 ? void 0 : t2.nodeType) && (b = t2), b) {
            if (this.options.wrapper !== window) {
              var L = this.options.wrapper.getBoundingClientRect();
              n2 -= this.isHorizontal ? L.left : L.top;
            }
            var _ = b.getBoundingClientRect();
            t2 = (this.isHorizontal ? _.left : _.top) + this.animatedScroll;
          }
        }
        if ("number" == typeof t2) {
          if (t2 += n2, t2 = Math.round(t2), this.options.infinite ? y && (this.targetScroll = this.animatedScroll = this.scroll) : t2 = clamp3(0, t2, this.limit), l2)
            return this.animatedScroll = this.targetScroll = t2, this.setScroll(this.scroll), this.reset(), void (null == g || g(this));
          if (!y) {
            if (t2 === this.targetScroll)
              return;
            this.targetScroll = t2;
          }
          this.animate.fromTo(this.animatedScroll, t2, { duration: p, easing: d, lerp: v, onStart: function() {
            a2 && (i2.isLocked = true), i2.isScrolling = true;
          }, onUpdate: function(t3, e4) {
            i2.isScrolling = true, i2.velocity = t3 - i2.animatedScroll, i2.direction = Math.sign(i2.velocity), i2.animatedScroll = t3, i2.setScroll(i2.scroll), y && (i2.targetScroll = t3), e4 || i2.emit(), e4 && (i2.reset(), i2.emit(), null == g || g(i2), i2.__preventNextScrollEvent = true, requestAnimationFrame(function() {
              delete i2.__preventNextScrollEvent;
            }));
          } });
        }
      }
    }, Object.defineProperty(Lenis.prototype, "rootElement", { get: function() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "limit", { get: function() {
      return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "isHorizontal", { get: function() {
      return "horizontal" === this.options.orientation;
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "actualScroll", { get: function() {
      return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "scroll", { get: function() {
      return this.options.infinite ? function modulo(t2, e3) {
        return (t2 % e3 + e3) % e3;
      }(this.animatedScroll, this.limit) : this.animatedScroll;
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "progress", { get: function() {
      return 0 === this.limit ? 1 : this.scroll / this.limit;
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "isSmooth", { get: function() {
      return this.__isSmooth;
    }, set: function(t2) {
      this.__isSmooth !== t2 && (this.__isSmooth = t2, this.toggleClassName("lenis-smooth", t2));
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "isScrolling", { get: function() {
      return this.__isScrolling;
    }, set: function(t2) {
      this.__isScrolling !== t2 && (this.__isScrolling = t2, this.toggleClassName("lenis-scrolling", t2));
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "isStopped", { get: function() {
      return this.__isStopped;
    }, set: function(t2) {
      this.__isStopped !== t2 && (this.__isStopped = t2, this.toggleClassName("lenis-stopped", t2));
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "isLocked", { get: function() {
      return this.__isLocked;
    }, set: function(t2) {
      this.__isLocked !== t2 && (this.__isLocked = t2, this.toggleClassName("lenis-locked", t2));
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "className", { get: function() {
      var t2 = "lenis";
      return this.isStopped && (t2 += " lenis-stopped"), this.isLocked && (t2 += " lenis-locked"), this.isScrolling && (t2 += " lenis-scrolling"), this.isSmooth && (t2 += " lenis-smooth"), t2;
    }, enumerable: false, configurable: true }), Lenis.prototype.toggleClassName = function(t2, e3) {
      this.rootElement.classList.toggle(t2, e3), this.emitter.emit("className change", this);
    }, Lenis;
  }();

  // node_modules/locomotive-scroll/dist/locomotive-scroll.modern.mjs
  function s() {
    return s = Object.assign ? Object.assign.bind() : function(t2) {
      for (var s2 = 1; s2 < arguments.length; s2++) {
        var e3 = arguments[s2];
        for (var i2 in e3)
          Object.prototype.hasOwnProperty.call(e3, i2) && (t2[i2] = e3[i2]);
      }
      return t2;
    }, s.apply(this, arguments);
  }
  var e2 = class {
    constructor({ scrollElements: t2, rootMargin: s2 = "-1px -1px -1px -1px", IORaf: e3 }) {
      this.scrollElements = void 0, this.rootMargin = void 0, this.IORaf = void 0, this.observer = void 0, this.scrollElements = t2, this.rootMargin = s2, this.IORaf = e3, this._init();
    }
    _init() {
      this.observer = new IntersectionObserver((t2) => {
        t2.forEach((t3) => {
          const s2 = this.scrollElements.find((s3) => s3.$el === t3.target);
          t3.isIntersecting ? (s2 && (s2.isAlreadyIntersected = true), this._setInview(t3)) : s2 && s2.isAlreadyIntersected && this._setOutOfView(t3);
        });
      }, { rootMargin: this.rootMargin });
      for (const t2 of this.scrollElements)
        this.observe(t2.$el);
    }
    destroy() {
      this.observer.disconnect();
    }
    observe(t2) {
      t2 && this.observer.observe(t2);
    }
    unobserve(t2) {
      t2 && this.observer.unobserve(t2);
    }
    _setInview(t2) {
      const s2 = this.scrollElements.find((s3) => s3.$el === t2.target);
      this.IORaf && (null == s2 || s2.setInteractivityOn()), !this.IORaf && (null == s2 || s2.setInview());
    }
    _setOutOfView(t2) {
      const s2 = this.scrollElements.find((s3) => s3.$el === t2.target);
      this.IORaf && (null == s2 || s2.setInteractivityOff()), !this.IORaf && (null == s2 || s2.setOutOfView()), null != s2 && s2.attributes.scrollRepeat || this.IORaf || this.unobserve(t2.target);
    }
  };
  function i(t2, s2, e3, i2, r2) {
    return e3 + ((r2 - t2) / (s2 - t2) * (i2 - e3) || 0);
  }
  function r(t2, s2) {
    return t2.reduce((t3, e3) => Math.abs(e3 - s2) < Math.abs(t3 - s2) ? e3 : t3);
  }
  var l = class {
    constructor({ $el: t2, id: s2, modularInstance: e3, subscribeElementUpdateFn: i2, unsubscribeElementUpdateFn: r2, needRaf: l2, scrollOrientation: n2 }) {
      var o2, a2, c2, h2, d;
      this.$el = void 0, this.id = void 0, this.needRaf = void 0, this.attributes = void 0, this.scrollOrientation = void 0, this.isAlreadyIntersected = void 0, this.intersection = void 0, this.metrics = void 0, this.currentScroll = void 0, this.translateValue = void 0, this.progress = void 0, this.lastProgress = void 0, this.modularInstance = void 0, this.progressModularModules = void 0, this.isInview = void 0, this.isInteractive = void 0, this.isInFold = void 0, this.isFirstResize = void 0, this.subscribeElementUpdateFn = void 0, this.unsubscribeElementUpdateFn = void 0, this.$el = t2, this.id = s2, this.needRaf = l2, this.scrollOrientation = n2, this.modularInstance = e3, this.subscribeElementUpdateFn = i2, this.unsubscribeElementUpdateFn = r2, this.attributes = { scrollClass: null != (o2 = this.$el.dataset.scrollClass) ? o2 : "is-inview", scrollOffset: null != (a2 = this.$el.dataset.scrollOffset) ? a2 : "0,0", scrollPosition: null != (c2 = this.$el.dataset.scrollPosition) ? c2 : "start,end", scrollModuleProgress: null != this.$el.dataset.scrollModuleProgress, scrollCssProgress: null != this.$el.dataset.scrollCssProgress, scrollEventProgress: null != (h2 = this.$el.dataset.scrollEventProgress) ? h2 : null, scrollSpeed: null != this.$el.dataset.scrollSpeed ? parseFloat(this.$el.dataset.scrollSpeed) : null, scrollRepeat: null != this.$el.dataset.scrollRepeat, scrollCall: null != (d = this.$el.dataset.scrollCall) ? d : null, scrollCallSelf: null != this.$el.dataset.scrollCallSelf, scrollIgnoreFold: null != this.$el.dataset.scrollIgnoreFold, scrollEnableTouchSpeed: null != this.$el.dataset.scrollEnableTouchSpeed }, this.intersection = { start: 0, end: 0 }, this.metrics = { offsetStart: 0, offsetEnd: 0, bcr: {} }, this.currentScroll = "vertical" === this.scrollOrientation ? window.scrollY : window.scrollX, this.translateValue = 0, this.progress = 0, this.lastProgress = null, this.progressModularModules = [], this.isInview = false, this.isInteractive = false, this.isAlreadyIntersected = false, this.isInFold = false, this.isFirstResize = true, this._init();
    }
    _init() {
      this.needRaf && (this.modularInstance && this.attributes.scrollModuleProgress && this._getProgressModularModules(), this._resize());
    }
    onResize({ currentScroll: t2 }) {
      this.currentScroll = t2, this._resize();
    }
    onRender({ currentScroll: t2, smooth: s2 }) {
      const e3 = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth;
      if (this.currentScroll = t2, this._computeProgress(), this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed))
        if (this.attributes.scrollEnableTouchSpeed || s2) {
          if (this.isInFold) {
            const t3 = Math.max(0, this.progress);
            this.translateValue = t3 * e3 * this.attributes.scrollSpeed * -1;
          } else {
            const t3 = i(0, 1, -1, 1, this.progress);
            this.translateValue = t3 * e3 * this.attributes.scrollSpeed * -1;
          }
          this.$el.style.transform = "vertical" === this.scrollOrientation ? `translate3d(0, ${this.translateValue}px, 0)` : `translate3d(${this.translateValue}px, 0, 0)`;
        } else
          this.translateValue && (this.$el.style.transform = "translate3d(0, 0, 0)"), this.translateValue = 0;
    }
    setInview() {
      if (this.isInview)
        return;
      this.isInview = true, this.$el.classList.add(this.attributes.scrollClass);
      const t2 = this._getScrollCallFrom();
      this.attributes.scrollCall && this._dispatchCall("enter", t2);
    }
    setOutOfView() {
      if (!this.isInview || !this.attributes.scrollRepeat)
        return;
      this.isInview = false, this.$el.classList.remove(this.attributes.scrollClass);
      const t2 = this._getScrollCallFrom();
      this.attributes.scrollCall && this._dispatchCall("leave", t2);
    }
    setInteractivityOn() {
      this.isInteractive || (this.isInteractive = true, this.subscribeElementUpdateFn(this));
    }
    setInteractivityOff() {
      this.isInteractive && (this.isInteractive = false, this.unsubscribeElementUpdateFn(this), null != this.lastProgress && this._computeProgress(r([0, 1], this.lastProgress)));
    }
    _resize() {
      this.metrics.bcr = this.$el.getBoundingClientRect(), this._computeMetrics(), this._computeIntersection(), this.isFirstResize && (this.isFirstResize = false, this.isInFold && this.setInview());
    }
    _computeMetrics() {
      const { top: t2, left: s2, height: e3, width: i2 } = this.metrics.bcr, r2 = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth, l2 = "vertical" === this.scrollOrientation ? e3 : i2;
      this.metrics.offsetStart = this.currentScroll + ("vertical" === this.scrollOrientation ? t2 : s2) - this.translateValue, this.metrics.offsetEnd = this.metrics.offsetStart + l2, this.isInFold = this.metrics.offsetStart < r2 && !this.attributes.scrollIgnoreFold;
    }
    _computeIntersection() {
      const t2 = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth, s2 = "vertical" === this.scrollOrientation ? this.metrics.bcr.height : this.metrics.bcr.width, e3 = this.attributes.scrollOffset.split(","), i2 = null != e3[0] ? e3[0].trim() : "0", r2 = null != e3[1] ? e3[1].trim() : "0", l2 = this.attributes.scrollPosition.split(",");
      let n2 = null != l2[0] ? l2[0].trim() : "start";
      const o2 = null != l2[1] ? l2[1].trim() : "end", a2 = i2.includes("%") ? t2 * parseInt(i2.replace("%", "").trim()) * 0.01 : parseInt(i2), c2 = r2.includes("%") ? t2 * parseInt(r2.replace("%", "").trim()) * 0.01 : parseInt(r2);
      switch (this.isInFold && (n2 = "fold"), n2) {
        case "start":
        default:
          this.intersection.start = this.metrics.offsetStart - t2 + a2;
          break;
        case "middle":
          this.intersection.start = this.metrics.offsetStart - t2 + a2 + 0.5 * s2;
          break;
        case "end":
          this.intersection.start = this.metrics.offsetStart - t2 + a2 + s2;
          break;
        case "fold":
          this.intersection.start = 0;
      }
      switch (o2) {
        case "start":
          this.intersection.end = this.metrics.offsetStart - c2;
          break;
        case "middle":
          this.intersection.end = this.metrics.offsetStart - c2 + 0.5 * s2;
          break;
        default:
          this.intersection.end = this.metrics.offsetStart - c2 + s2;
      }
      if (this.intersection.end <= this.intersection.start)
        switch (o2) {
          case "start":
          default:
            this.intersection.end = this.intersection.start + 1;
            break;
          case "middle":
            this.intersection.end = this.intersection.start + 0.5 * s2;
            break;
          case "end":
            this.intersection.end = this.intersection.start + s2;
        }
    }
    _computeProgress(t2) {
      const s2 = null != t2 ? t2 : (e3 = i(this.intersection.start, this.intersection.end, 0, 1, this.currentScroll)) < 0 ? 0 : e3 > 1 ? 1 : e3;
      var e3;
      if (this.progress = s2, s2 != this.lastProgress) {
        if (this.lastProgress = s2, this.attributes.scrollCssProgress && this._setCssProgress(s2), this.attributes.scrollEventProgress && this._setCustomEventProgress(s2), this.attributes.scrollModuleProgress)
          for (const t3 of this.progressModularModules)
            this.modularInstance && this.modularInstance.call("onScrollProgress", s2, t3.moduleName, t3.moduleId);
        s2 > 0 && s2 < 1 && this.setInview(), 0 === s2 && this.setOutOfView(), 1 === s2 && this.setOutOfView();
      }
    }
    _setCssProgress(t2 = 0) {
      this.$el.style.setProperty("--progress", t2.toString());
    }
    _setCustomEventProgress(t2 = 0) {
      const s2 = this.attributes.scrollEventProgress;
      if (!s2)
        return;
      const e3 = new CustomEvent(s2, { detail: { target: this.$el, progress: t2 } });
      window.dispatchEvent(e3);
    }
    _getProgressModularModules() {
      if (!this.modularInstance)
        return;
      const t2 = Object.keys(this.$el.dataset).filter((t3) => t3.includes("module")), s2 = Object.entries(this.modularInstance.modules);
      if (t2.length)
        for (const e3 of t2) {
          const t3 = this.$el.dataset[e3];
          if (!t3)
            return;
          for (const e4 of s2) {
            const [s3, i2] = e4;
            t3 in i2 && this.progressModularModules.push({ moduleName: s3, moduleId: t3 });
          }
        }
    }
    _getScrollCallFrom() {
      const t2 = r([this.intersection.start, this.intersection.end], this.currentScroll);
      return this.intersection.start === t2 ? "start" : "end";
    }
    _dispatchCall(t2, s2) {
      var e3, i2;
      const r2 = null == (e3 = this.attributes.scrollCall) ? void 0 : e3.split(","), l2 = null == (i2 = this.attributes) ? void 0 : i2.scrollCallSelf;
      if (r2 && r2.length > 1) {
        var n2;
        const [e4, i3, o2] = r2;
        let a2;
        a2 = l2 ? this.$el.dataset[`module${i3.trim()}`] : o2, this.modularInstance && this.modularInstance.call(e4.trim(), { target: this.$el, way: t2, from: s2 }, i3.trim(), null == (n2 = a2) ? void 0 : n2.trim());
      } else if (r2) {
        const [e4] = r2, i3 = new CustomEvent(e4, { detail: { target: this.$el, way: t2, from: s2 } });
        window.dispatchEvent(i3);
      }
    }
  };
  var n = ["scrollOffset", "scrollPosition", "scrollModuleProgress", "scrollCssProgress", "scrollEventProgress", "scrollSpeed"];
  var o = class {
    constructor({ $el: t2, modularInstance: s2, triggerRootMargin: e3, rafRootMargin: i2, scrollOrientation: r2 }) {
      this.$scrollContainer = void 0, this.modularInstance = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.scrollElements = void 0, this.triggeredScrollElements = void 0, this.RAFScrollElements = void 0, this.scrollElementsToUpdate = void 0, this.IOTriggerInstance = void 0, this.IORafInstance = void 0, this.scrollOrientation = void 0, t2 ? (this.$scrollContainer = t2, this.modularInstance = s2, this.scrollOrientation = r2, this.triggerRootMargin = null != e3 ? e3 : "-1px -1px -1px -1px", this.rafRootMargin = null != i2 ? i2 : "100% 100% 100% 100%", this.scrollElements = [], this.triggeredScrollElements = [], this.RAFScrollElements = [], this.scrollElementsToUpdate = [], this._init()) : console.error("Please provide a DOM Element as scrollContainer");
    }
    _init() {
      const t2 = this.$scrollContainer.querySelectorAll("[data-scroll]"), s2 = Array.from(t2);
      this._subscribeScrollElements(s2), this.IOTriggerInstance = new e2({ scrollElements: [...this.triggeredScrollElements], rootMargin: this.triggerRootMargin, IORaf: false }), this.IORafInstance = new e2({ scrollElements: [...this.RAFScrollElements], rootMargin: this.rafRootMargin, IORaf: true });
    }
    destroy() {
      this.IOTriggerInstance.destroy(), this.IORafInstance.destroy(), this._unsubscribeAllScrollElements();
    }
    onResize({ currentScroll: t2 }) {
      for (const s2 of this.RAFScrollElements)
        s2.onResize({ currentScroll: t2 });
    }
    onRender({ currentScroll: t2, smooth: s2 }) {
      for (const e3 of this.scrollElementsToUpdate)
        e3.onRender({ currentScroll: t2, smooth: s2 });
    }
    removeScrollElements(t2) {
      const s2 = t2.querySelectorAll("[data-scroll]");
      if (s2.length) {
        for (let t3 = 0; t3 < this.triggeredScrollElements.length; t3++) {
          const e3 = this.triggeredScrollElements[t3];
          Array.from(s2).indexOf(e3.$el) > -1 && (this.IOTriggerInstance.unobserve(e3.$el), this.triggeredScrollElements.splice(t3, 1));
        }
        for (let t3 = 0; t3 < this.RAFScrollElements.length; t3++) {
          const e3 = this.RAFScrollElements[t3];
          Array.from(s2).indexOf(e3.$el) > -1 && (this.IORafInstance.unobserve(e3.$el), this.RAFScrollElements.splice(t3, 1));
        }
        s2.forEach((t3) => {
          const s3 = this.scrollElementsToUpdate.find((s4) => s4.$el === t3), e3 = this.scrollElements.find((s4) => s4.$el === t3);
          s3 && this._unsubscribeElementUpdate(s3), e3 && (this.scrollElements = this.scrollElements.filter((t4) => t4.id != e3.id));
        });
      }
    }
    addScrollElements(t2) {
      const s2 = t2.querySelectorAll("[data-scroll]"), e3 = [];
      this.scrollElements.forEach((t3) => {
        e3.push(t3.id);
      });
      const i2 = Math.max(...e3) + 1, r2 = Array.from(s2);
      this._subscribeScrollElements(r2, i2, true);
    }
    _subscribeScrollElements(t2, s2 = 0, e3 = false) {
      for (let i2 = 0; i2 < t2.length; i2++) {
        const r2 = t2[i2], n2 = this._checkRafNeeded(r2), o2 = new l({ $el: r2, id: s2 + i2, scrollOrientation: this.scrollOrientation, modularInstance: this.modularInstance, subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this), unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this), needRaf: n2 });
        this.scrollElements.push(o2), n2 ? (this.RAFScrollElements.push(o2), e3 && (this.IORafInstance.scrollElements.push(o2), this.IORafInstance.observe(o2.$el))) : (this.triggeredScrollElements.push(o2), e3 && (this.IOTriggerInstance.scrollElements.push(o2), this.IOTriggerInstance.observe(o2.$el)));
      }
    }
    _unsubscribeAllScrollElements() {
      this.scrollElements = [], this.RAFScrollElements = [], this.triggeredScrollElements = [], this.scrollElementsToUpdate = [];
    }
    _subscribeElementUpdate(t2) {
      this.scrollElementsToUpdate.push(t2);
    }
    _unsubscribeElementUpdate(t2) {
      this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter((s2) => s2.id != t2.id);
    }
    _checkRafNeeded(t2) {
      let s2 = [...n];
      const e3 = (t3) => {
        s2 = s2.filter((s3) => s3 != t3);
      };
      if (t2.dataset.scrollOffset) {
        if ("0,0" != t2.dataset.scrollOffset.split(",").map((t3) => t3.replace("%", "").trim()).join(","))
          return true;
        e3("scrollOffset");
      } else
        e3("scrollOffset");
      if (t2.dataset.scrollPosition) {
        if ("top,bottom" != t2.dataset.scrollPosition.trim())
          return true;
        e3("scrollPosition");
      } else
        e3("scrollPosition");
      if (t2.dataset.scrollSpeed && !isNaN(parseFloat(t2.dataset.scrollSpeed)))
        return true;
      e3("scrollSpeed");
      for (const e4 of s2)
        if (e4 in t2.dataset)
          return true;
      return false;
    }
  };
  var a = class {
    constructor({ resizeElements: t2, resizeCallback: s2 = () => {
    } }) {
      this.$resizeElements = void 0, this.isFirstObserve = void 0, this.observer = void 0, this.resizeCallback = void 0, this.$resizeElements = t2, this.resizeCallback = s2, this.isFirstObserve = true, this._init();
    }
    _init() {
      this.observer = new ResizeObserver((t2) => {
        var s2;
        !this.isFirstObserve && (null == (s2 = this.resizeCallback) || s2.call(this)), this.isFirstObserve = false;
      });
      for (const t2 of this.$resizeElements)
        this.observer.observe(t2);
    }
    destroy() {
      this.observer.disconnect();
    }
  };
  var c = { wrapper: window, content: document.documentElement, wheelEventsTarget: window, eventsTarget: window, smoothWheel: true, syncTouch: false, syncTouchLerp: 0.075, touchInertiaMultiplier: 35, duration: 0.75, easing: (t2) => Math.min(1, 1.001 - Math.pow(2, -10 * t2)), lerp: 0.1, infinite: false, orientation: "vertical", gestureOrientation: "vertical", touchMultiplier: 1, wheelMultiplier: 1, autoResize: true };
  var h = class {
    constructor({ lenisOptions: t2 = {}, modularInstance: e3, triggerRootMargin: i2, rafRootMargin: r2, autoResize: l2 = true, autoStart: n2 = true, scrollCallback: o2 = () => {
    }, initCustomTicker: a2, destroyCustomTicker: h2 } = {}) {
      this.rafPlaying = void 0, this.lenisInstance = void 0, this.coreInstance = void 0, this.lenisOptions = void 0, this.modularInstance = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.rafInstance = void 0, this.autoResize = void 0, this.autoStart = void 0, this.ROInstance = void 0, this.initCustomTicker = void 0, this.destroyCustomTicker = void 0, this._onRenderBind = void 0, this._onResizeBind = void 0, this._onScrollToBind = void 0, this.lenisOptions = s({}, c, t2), Object.assign(this, { lenisOptions: t2, modularInstance: e3, triggerRootMargin: i2, rafRootMargin: r2, autoResize: l2, autoStart: n2, scrollCallback: o2, initCustomTicker: a2, destroyCustomTicker: h2 }), this._onRenderBind = this._onRender.bind(this), this._onScrollToBind = this._onScrollTo.bind(this), this._onResizeBind = this._onResize.bind(this), this.rafPlaying = false, this._init();
    }
    _init() {
      var s2;
      this.lenisInstance = new e({ wrapper: this.lenisOptions.wrapper, content: this.lenisOptions.content, eventsTarget: this.lenisOptions.eventsTarget, lerp: this.lenisOptions.lerp, duration: this.lenisOptions.duration, orientation: this.lenisOptions.orientation, gestureOrientation: this.lenisOptions.gestureOrientation, smoothWheel: this.lenisOptions.smoothWheel, syncTouch: this.lenisOptions.syncTouch, syncTouchLerp: this.lenisOptions.syncTouchLerp, touchInertiaMultiplier: this.lenisOptions.touchInertiaMultiplier, wheelMultiplier: this.lenisOptions.wheelMultiplier, touchMultiplier: this.lenisOptions.touchMultiplier, easing: this.lenisOptions.easing }), null == (s2 = this.lenisInstance) || s2.on("scroll", this.scrollCallback), document.documentElement.setAttribute("data-scroll-orientation", this.lenisInstance.options.orientation), requestAnimationFrame(() => {
        this.coreInstance = new o({ $el: this.lenisInstance.rootElement, modularInstance: this.modularInstance, triggerRootMargin: this.triggerRootMargin, rafRootMargin: this.rafRootMargin, scrollOrientation: this.lenisInstance.options.orientation }), this._bindEvents(), this.initCustomTicker && !this.destroyCustomTicker ? console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.") : !this.initCustomTicker && this.destroyCustomTicker && console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."), this.autoStart && this.start();
      });
    }
    destroy() {
      var t2;
      this.stop(), this._unbindEvents(), this.lenisInstance.destroy(), null == (t2 = this.coreInstance) || t2.destroy(), requestAnimationFrame(() => {
        var t3;
        null == (t3 = this.coreInstance) || t3.destroy();
      });
    }
    _bindEvents() {
      this._bindScrollToEvents(), this.autoResize && ("ResizeObserver" in window ? this.ROInstance = new a({ resizeElements: [document.body], resizeCallback: this._onResizeBind }) : window.addEventListener("resize", this._onResizeBind));
    }
    _unbindEvents() {
      this._unbindScrollToEvents(), this.autoResize && ("ResizeObserver" in window ? this.ROInstance && this.ROInstance.destroy() : window.removeEventListener("resize", this._onResizeBind));
    }
    _bindScrollToEvents(t2) {
      const s2 = t2 || this.lenisInstance.rootElement, e3 = null == s2 ? void 0 : s2.querySelectorAll("[data-scroll-to]");
      (null == e3 ? void 0 : e3.length) && e3.forEach((t3) => {
        t3.addEventListener("click", this._onScrollToBind, false);
      });
    }
    _unbindScrollToEvents(t2) {
      const s2 = t2 || this.lenisInstance.rootElement, e3 = null == s2 ? void 0 : s2.querySelectorAll("[data-scroll-to]");
      (null == e3 ? void 0 : e3.length) && e3.forEach((t3) => {
        t3.removeEventListener("click", this._onScrollToBind, false);
      });
    }
    _onResize() {
      requestAnimationFrame(() => {
        var t2;
        null == (t2 = this.coreInstance) || t2.onResize({ currentScroll: this.lenisInstance.scroll });
      });
    }
    _onRender() {
      var t2, s2;
      null == (t2 = this.lenisInstance) || t2.raf(Date.now()), null == (s2 = this.coreInstance) || s2.onRender({ currentScroll: this.lenisInstance.scroll, smooth: this.lenisInstance.isSmooth });
    }
    _onScrollTo(t2) {
      var s2;
      t2.preventDefault();
      const e3 = null != (s2 = t2.currentTarget) ? s2 : null;
      if (!e3)
        return;
      const i2 = e3.getAttribute("data-scroll-to-href") || e3.getAttribute("href"), r2 = e3.getAttribute("data-scroll-to-offset") || 0, l2 = e3.getAttribute("data-scroll-to-duration") || this.lenisOptions.duration || c.duration;
      i2 && this.scrollTo(i2, { offset: "string" == typeof r2 ? parseInt(r2) : r2, duration: "string" == typeof l2 ? parseInt(l2) : l2 });
    }
    start() {
      var t2;
      this.rafPlaying || (null == (t2 = this.lenisInstance) || t2.start(), this.rafPlaying = true, this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf());
    }
    stop() {
      var t2;
      this.rafPlaying && (null == (t2 = this.lenisInstance) || t2.stop(), this.rafPlaying = false, this.destroyCustomTicker ? this.destroyCustomTicker(this._onRenderBind) : this.rafInstance && cancelAnimationFrame(this.rafInstance));
    }
    removeScrollElements(t2) {
      var s2;
      t2 ? (this._unbindScrollToEvents(t2), null == (s2 = this.coreInstance) || s2.removeScrollElements(t2)) : console.error("Please provide a DOM Element as $oldContainer");
    }
    addScrollElements(t2) {
      var s2;
      t2 ? (null == (s2 = this.coreInstance) || s2.addScrollElements(t2), requestAnimationFrame(() => {
        this._bindScrollToEvents(t2);
      })) : console.error("Please provide a DOM Element as $newContainer");
    }
    resize() {
      this._onResizeBind();
    }
    scrollTo(t2, s2) {
      var e3;
      null == (e3 = this.lenisInstance) || e3.scrollTo(t2, { offset: null == s2 ? void 0 : s2.offset, lerp: null == s2 ? void 0 : s2.lerp, duration: null == s2 ? void 0 : s2.duration, immediate: null == s2 ? void 0 : s2.immediate, lock: null == s2 ? void 0 : s2.lock, force: null == s2 ? void 0 : s2.force, easing: null == s2 ? void 0 : s2.easing, onComplete: null == s2 ? void 0 : s2.onComplete });
    }
    _raf() {
      this._onRenderBind(), this.rafInstance = requestAnimationFrame(() => this._raf());
    }
  };

  // assets/scripts/modules/Scroll.js
  var Scroll = class extends _default {
    constructor(m) {
      super(m);
      this.onScrollBind = this.onScroll.bind(this);
    }
    init() {
      this.scroll = new h({
        modularInstance: this,
        scrollCallback: this.onScrollBind
      });
      if (history.scrollRestoration) {
        history.scrollRestoration = "manual";
        window.scrollTo(0, 0);
      }
    }
    ///////////////
    // Callbacks
    ///////////////
    onScroll({ scroll, limit, velocity, direction, progress }) {
      if (progress > this.lastProgress) {
        if (this.scrollDirection != 1) {
          this.scrollDirection = 1;
        }
      } else {
        if (this.scrollDirection != -1) {
          this.scrollDirection = -1;
        }
      }
      if (this.scrollDirection < 0) {
        $html.classList.add("is-scrolling-up");
      } else {
        $html.classList.remove("is-scrolling-up");
      }
      this.lastProgress = progress;
      this.call("onScroll", { velocity, direction }, "Rail");
    }
    ///////////////
    // Methods
    ///////////////
    scrollTo(params) {
      var _b;
      let _a = params, { target } = _a, options = __objRest(_a, ["target"]);
      options = Object.assign({
        // Defaults
        duration: 1
      }, options);
      (_b = this.scroll) == null ? void 0 : _b.scrollTo(target, options);
    }
    changeHeaderTheme(args) {
      var _a;
      const { target, way, from } = args;
      if (way == "enter") {
        const theme = (_a = target == null ? void 0 : target.parentNode) == null ? void 0 : _a.getAttribute("data-theme");
        theme && $html.setAttribute("data-header-theme", theme);
      }
    }
    /**
     * Observe new scroll elements
     *
     * @param $newContainer (HTMLElement)
     */
    addScrollElements($newContainer) {
      var _a;
      (_a = this.scroll) == null ? void 0 : _a.addScrollElements($newContainer);
    }
    /**
     * Unobserve scroll elements
     *
     * @param $oldContainer (HTMLElement)
     */
    removeScrollElements($oldContainer) {
      var _a;
      (_a = this.scroll) == null ? void 0 : _a.removeScrollElements($oldContainer);
    }
    destroy() {
      this.scroll.destroy();
    }
  };

  // node_modules/gsap/utils/strings.js
  var _trimExp = /(?:^\s+|\s+$)/g;
  var emojiExp = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function getText(e3) {
    var type = e3.nodeType, result = "";
    if (type === 1 || type === 9 || type === 11) {
      if (typeof e3.textContent === "string") {
        return e3.textContent;
      } else {
        for (e3 = e3.firstChild; e3; e3 = e3.nextSibling) {
          result += getText(e3);
        }
      }
    } else if (type === 3 || type === 4) {
      return e3.nodeValue;
    }
    return result;
  }
  function emojiSafeSplit(text, delimiter, trim2, preserveSpaces) {
    text += "";
    trim2 && (text = text.trim ? text.trim() : text.replace(_trimExp, ""));
    if (delimiter && delimiter !== "") {
      return text.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(delimiter);
    }
    var result = [], l2 = text.length, i2 = 0, j, character;
    for (; i2 < l2; i2++) {
      character = text.charAt(i2);
      if (character.charCodeAt(0) >= 55296 && character.charCodeAt(0) <= 56319 || text.charCodeAt(i2 + 1) >= 65024 && text.charCodeAt(i2 + 1) <= 65039) {
        j = ((text.substr(i2, 12).split(emojiExp) || [])[1] || "").length || 2;
        character = text.substr(i2, j);
        result.emoji = 1;
        i2 += j - 1;
      }
      result.push(character === ">" ? "&gt;" : character === "<" ? "&lt;" : preserveSpaces && character === " " && (text.charAt(i2 - 1) === " " || text.charAt(i2 + 1) === " ") ? "&nbsp;" : character);
    }
    return result;
  }

  // node_modules/gsap/ScrambleTextPlugin.js
  var CharSet = /* @__PURE__ */ function() {
    function CharSet2(chars) {
      this.chars = emojiSafeSplit(chars);
      this.sets = [];
      this.length = 50;
      for (var i2 = 0; i2 < 20; i2++) {
        this.sets[i2] = _scrambleText(80, this.chars);
      }
    }
    var _proto = CharSet2.prototype;
    _proto.grow = function grow(newLength) {
      for (var i2 = 0; i2 < 20; i2++) {
        this.sets[i2] += _scrambleText(newLength - this.length, this.chars);
      }
      this.length = newLength;
    };
    return CharSet2;
  }();
  var gsap2;
  var _coreInitted2;
  var _getGSAP = function _getGSAP2() {
    return gsap2 || typeof window !== "undefined" && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
  };
  var _bonusValidated = 1;
  var _spacesExp = /\s+/g;
  var _scrambleText = function _scrambleText2(length, chars) {
    var l2 = chars.length, s2 = "";
    while (--length > -1) {
      s2 += chars[~~(Math.random() * l2)];
    }
    return s2;
  };
  var _upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var _lower = _upper.toLowerCase();
  var _charsLookup = {
    upperCase: new CharSet(_upper),
    lowerCase: new CharSet(_lower),
    upperAndLowerCase: new CharSet(_upper + _lower)
  };
  var _initCore3 = function _initCore4() {
    _coreInitted2 = gsap2 = _getGSAP();
  };
  var ScrambleTextPlugin = {
    version: "3.12.5",
    name: "scrambleText",
    register: function register(core, Plugin, propTween) {
      gsap2 = core;
      _initCore3();
    },
    init: function init4(target, value, tween, index, targets) {
      _coreInitted2 || _initCore3();
      this.prop = "innerHTML" in target ? "innerHTML" : "textContent" in target ? "textContent" : 0;
      if (!this.prop) {
        return;
      }
      this.target = target;
      if (typeof value !== "object") {
        value = {
          text: value
        };
      }
      var text = value.text || value.value || "", trim2 = value.trim !== false, data = this, delim, maxLength, charset, splitByChars;
      data.delimiter = delim = value.delimiter || "";
      data.original = emojiSafeSplit(getText(target).replace(_spacesExp, " ").split("&nbsp;").join(""), delim, trim2);
      if (text === "{original}" || text === true || text == null) {
        text = data.original.join(delim);
      }
      data.text = emojiSafeSplit((text || "").replace(_spacesExp, " "), delim, trim2);
      data.hasClass = !!(value.newClass || value.oldClass);
      data.newClass = value.newClass;
      data.oldClass = value.oldClass;
      splitByChars = delim === "";
      data.textHasEmoji = splitByChars && !!data.text.emoji;
      data.charsHaveEmoji = !!value.chars && !!emojiSafeSplit(value.chars).emoji;
      data.length = splitByChars ? data.original.length : data.original.join(delim).length;
      data.lengthDif = (splitByChars ? data.text.length : data.text.join(delim).length) - data.length;
      data.fillChar = value.fillChar || value.chars && ~value.chars.indexOf(" ") ? "&nbsp;" : "";
      data.charSet = charset = _charsLookup[value.chars || "upperCase"] || new CharSet(value.chars);
      data.speed = 0.05 / (value.speed || 1);
      data.prevScrambleTime = 0;
      data.setIndex = Math.random() * 20 | 0;
      maxLength = data.length + Math.max(data.lengthDif, 0);
      if (maxLength > charset.length) {
        charset.grow(maxLength);
      }
      data.chars = charset.sets[data.setIndex];
      data.revealDelay = value.revealDelay || 0;
      data.tweenLength = value.tweenLength !== false;
      data.tween = tween;
      data.rightToLeft = !!value.rightToLeft;
      data._props.push("scrambleText", "text");
      return _bonusValidated;
    },
    render: function render3(ratio, data) {
      var target = data.target, prop = data.prop, text = data.text, delimiter = data.delimiter, tween = data.tween, prevScrambleTime = data.prevScrambleTime, revealDelay = data.revealDelay, setIndex = data.setIndex, chars = data.chars, charSet = data.charSet, length = data.length, textHasEmoji = data.textHasEmoji, charsHaveEmoji = data.charsHaveEmoji, lengthDif = data.lengthDif, tweenLength = data.tweenLength, oldClass = data.oldClass, newClass = data.newClass, rightToLeft = data.rightToLeft, fillChar = data.fillChar, speed = data.speed, original = data.original, hasClass = data.hasClass, l2 = text.length, time = tween._time, timeDif = time - prevScrambleTime, i2, i22, startText, endText, applyNew, applyOld, str, startClass, endClass, position, r2;
      if (revealDelay) {
        if (tween._from) {
          time = tween._dur - time;
        }
        ratio = time === 0 ? 0 : time < revealDelay ? 1e-6 : time === tween._dur ? 1 : tween._ease((time - revealDelay) / (tween._dur - revealDelay));
      }
      if (ratio < 0) {
        ratio = 0;
      } else if (ratio > 1) {
        ratio = 1;
      }
      if (rightToLeft) {
        ratio = 1 - ratio;
      }
      i2 = ~~(ratio * l2 + 0.5);
      if (ratio) {
        if (timeDif > speed || timeDif < -speed) {
          data.setIndex = setIndex = (setIndex + (Math.random() * 19 | 0)) % 20;
          data.chars = charSet.sets[setIndex];
          data.prevScrambleTime += timeDif;
        }
        endText = chars;
      } else {
        endText = original.join(delimiter);
      }
      r2 = tween._from ? ratio : 1 - ratio;
      position = length + (tweenLength ? tween._from ? r2 * r2 * r2 : 1 - r2 * r2 * r2 : 1) * lengthDif;
      if (rightToLeft) {
        if (ratio === 1 && (tween._from || tween.data === "isFromStart")) {
          startText = "";
          endText = original.join(delimiter);
        } else {
          str = text.slice(i2).join(delimiter);
          if (charsHaveEmoji) {
            startText = emojiSafeSplit(endText).slice(0, position - (textHasEmoji ? emojiSafeSplit(str) : str).length + 0.5 | 0).join("");
          } else {
            startText = endText.substr(0, position - (textHasEmoji ? emojiSafeSplit(str) : str).length + 0.5 | 0);
          }
          endText = str;
        }
      } else {
        startText = text.slice(0, i2).join(delimiter);
        i22 = (textHasEmoji ? emojiSafeSplit(startText) : startText).length;
        if (charsHaveEmoji) {
          endText = emojiSafeSplit(endText).slice(i22, position + 0.5 | 0).join("");
        } else {
          endText = endText.substr(i22, position - i22 + 0.5 | 0);
        }
      }
      if (hasClass) {
        startClass = rightToLeft ? oldClass : newClass;
        endClass = rightToLeft ? newClass : oldClass;
        applyNew = startClass && i2 !== 0;
        applyOld = endClass && i2 !== l2;
        str = (applyNew ? "<span class='" + startClass + "'>" : "") + startText + (applyNew ? "</span>" : "") + (applyOld ? "<span class='" + endClass + "'>" : "") + delimiter + endText + (applyOld ? "</span>" : "");
      } else {
        str = startText + delimiter + endText;
      }
      target[prop] = fillChar === "&nbsp;" && ~str.indexOf("  ") ? str.split("  ").join("&nbsp;&nbsp;") : str;
    }
  };
  ScrambleTextPlugin.emojiSafeSplit = emojiSafeSplit;
  ScrambleTextPlugin.getText = getText;
  _getGSAP() && gsap2.registerPlugin(ScrambleTextPlugin);

  // assets/scripts/modules/Randomize.js
  gsapWithCSS.registerPlugin(ScrambleTextPlugin);
  var Ramdomize = class extends _default {
    constructor(m) {
      super(m);
    }
    inView({ target }) {
      const words = [...target.querySelectorAll("p")];
      words.forEach((word, i2) => {
        gsapWithCSS.to(word, { opacity: 1, duration: 0, delay: 0.1 * i2 });
        gsapWithCSS.to(word, { scrambleText: word.innerHTML, duration: 1.5, delay: 0.1 * i2 });
      });
    }
  };

  // node_modules/gsap/SplitText.js
  var _doc3;
  var _win3;
  var _coreInitted3;
  var gsap3;
  var _context2;
  var _toArray;
  var _stripExp = /(?:\r|\n|\t\t)/g;
  var _multipleSpacesExp = /(?:\s\s+)/g;
  var _nonBreakingSpace = String.fromCharCode(160);
  var _initCore5 = function _initCore6(core) {
    _doc3 = document;
    _win3 = window;
    gsap3 = gsap3 || core || _win3.gsap || console.warn("Please gsap.registerPlugin(SplitText)");
    if (gsap3) {
      _toArray = gsap3.utils.toArray;
      _context2 = gsap3.core.context || function() {
      };
      _coreInitted3 = 1;
    }
  };
  var _bonusValidated2 = 1;
  var _getComputedStyle = function _getComputedStyle2(element) {
    return _win3.getComputedStyle(element);
  };
  var _isAbsolute = function _isAbsolute2(vars) {
    return vars.position === "absolute" || vars.absolute === true;
  };
  var _findSpecialChars = function _findSpecialChars2(text, chars) {
    var i2 = chars.length, s2;
    while (--i2 > -1) {
      s2 = chars[i2];
      if (text.substr(0, s2.length) === s2) {
        return s2.length;
      }
    }
  };
  var _divStart = " style='position:relative;display:inline-block;'";
  var _cssClassFunc = function _cssClassFunc2(cssClass, tag) {
    if (cssClass === void 0) {
      cssClass = "";
    }
    var iterate = ~cssClass.indexOf("++"), num = 1;
    if (iterate) {
      cssClass = cssClass.split("++").join("");
    }
    return function() {
      return "<" + tag + _divStart + (cssClass ? " class='" + cssClass + (iterate ? num++ : "") + "'>" : ">");
    };
  };
  var _swapText = function _swapText2(element, oldText, newText) {
    var type = element.nodeType;
    if (type === 1 || type === 9 || type === 11) {
      for (element = element.firstChild; element; element = element.nextSibling) {
        _swapText2(element, oldText, newText);
      }
    } else if (type === 3 || type === 4) {
      element.nodeValue = element.nodeValue.split(oldText).join(newText);
    }
  };
  var _pushReversed = function _pushReversed2(a2, merge) {
    var i2 = merge.length;
    while (--i2 > -1) {
      a2.push(merge[i2]);
    }
  };
  var _isBeforeWordDelimiter = function _isBeforeWordDelimiter2(e3, root, wordDelimiter) {
    var next;
    while (e3 && e3 !== root) {
      next = e3._next || e3.nextSibling;
      if (next) {
        return next.textContent.charAt(0) === wordDelimiter;
      }
      e3 = e3.parentNode || e3._parent;
    }
  };
  var _deWordify = function _deWordify2(e3) {
    var children = _toArray(e3.childNodes), l2 = children.length, i2, child;
    for (i2 = 0; i2 < l2; i2++) {
      child = children[i2];
      if (child._isSplit) {
        _deWordify2(child);
      } else {
        if (i2 && child.previousSibling && child.previousSibling.nodeType === 3) {
          child.previousSibling.nodeValue += child.nodeType === 3 ? child.nodeValue : child.firstChild.nodeValue;
          e3.removeChild(child);
        } else if (child.nodeType !== 3) {
          e3.insertBefore(child.firstChild, child);
          e3.removeChild(child);
        }
      }
    }
  };
  var _getStyleAsNumber = function _getStyleAsNumber2(name, computedStyle) {
    return parseFloat(computedStyle[name]) || 0;
  };
  var _setPositionsAfterSplit = function _setPositionsAfterSplit2(element, vars, allChars, allWords, allLines, origWidth, origHeight) {
    var cs = _getComputedStyle(element), paddingLeft = _getStyleAsNumber("paddingLeft", cs), lineOffsetY = -999, borderTopAndBottom = _getStyleAsNumber("borderBottomWidth", cs) + _getStyleAsNumber("borderTopWidth", cs), borderLeftAndRight = _getStyleAsNumber("borderLeftWidth", cs) + _getStyleAsNumber("borderRightWidth", cs), padTopAndBottom = _getStyleAsNumber("paddingTop", cs) + _getStyleAsNumber("paddingBottom", cs), padLeftAndRight = _getStyleAsNumber("paddingLeft", cs) + _getStyleAsNumber("paddingRight", cs), lineThreshold = _getStyleAsNumber("fontSize", cs) * (vars.lineThreshold || 0.2), textAlign = cs.textAlign, charArray = [], wordArray = [], lineArray = [], wordDelimiter = vars.wordDelimiter || " ", tag = vars.tag ? vars.tag : vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines", lines = allLines && ~types.indexOf("lines") ? [] : null, words = ~types.indexOf("words"), chars = ~types.indexOf("chars"), absolute = _isAbsolute(vars), linesClass = vars.linesClass, iterateLine = ~(linesClass || "").indexOf("++"), spaceNodesToRemove = [], isFlex = cs.display === "flex", prevInlineDisplay = element.style.display, i2, j, l2, node, nodes, isChild, curLine, addWordSpaces, style, lineNode, lineWidth, offset;
    iterateLine && (linesClass = linesClass.split("++").join(""));
    isFlex && (element.style.display = "block");
    j = element.getElementsByTagName("*");
    l2 = j.length;
    nodes = [];
    for (i2 = 0; i2 < l2; i2++) {
      nodes[i2] = j[i2];
    }
    if (lines || absolute) {
      for (i2 = 0; i2 < l2; i2++) {
        node = nodes[i2];
        isChild = node.parentNode === element;
        if (isChild || absolute || chars && !words) {
          offset = node.offsetTop;
          if (lines && isChild && Math.abs(offset - lineOffsetY) > lineThreshold && (node.nodeName !== "BR" || i2 === 0)) {
            curLine = [];
            lines.push(curLine);
            lineOffsetY = offset;
          }
          if (absolute) {
            node._x = node.offsetLeft;
            node._y = offset;
            node._w = node.offsetWidth;
            node._h = node.offsetHeight;
          }
          if (lines) {
            if (node._isSplit && isChild || !chars && isChild || words && isChild || !words && node.parentNode.parentNode === element && !node.parentNode._isSplit) {
              curLine.push(node);
              node._x -= paddingLeft;
              if (_isBeforeWordDelimiter(node, element, wordDelimiter)) {
                node._wordEnd = true;
              }
            }
            if (node.nodeName === "BR" && (node.nextSibling && node.nextSibling.nodeName === "BR" || i2 === 0)) {
              lines.push([]);
            }
          }
        }
      }
    }
    for (i2 = 0; i2 < l2; i2++) {
      node = nodes[i2];
      isChild = node.parentNode === element;
      if (node.nodeName === "BR") {
        if (lines || absolute) {
          node.parentNode && node.parentNode.removeChild(node);
          nodes.splice(i2--, 1);
          l2--;
        } else if (!words) {
          element.appendChild(node);
        }
        continue;
      }
      if (absolute) {
        style = node.style;
        if (!words && !isChild) {
          node._x += node.parentNode._x;
          node._y += node.parentNode._y;
        }
        style.left = node._x + "px";
        style.top = node._y + "px";
        style.position = "absolute";
        style.display = "block";
        style.width = node._w + 1 + "px";
        style.height = node._h + "px";
      }
      if (!words && chars) {
        if (node._isSplit) {
          node._next = j = node.nextSibling;
          node.parentNode.appendChild(node);
          while (j && j.nodeType === 3 && j.textContent === " ") {
            node._next = j.nextSibling;
            node.parentNode.appendChild(j);
            j = j.nextSibling;
          }
        } else if (node.parentNode._isSplit) {
          node._parent = node.parentNode;
          if (!node.previousSibling && node.firstChild) {
            node.firstChild._isFirst = true;
          }
          if (node.nextSibling && node.nextSibling.textContent === " " && !node.nextSibling.nextSibling) {
            spaceNodesToRemove.push(node.nextSibling);
          }
          node._next = node.nextSibling && node.nextSibling._isFirst ? null : node.nextSibling;
          node.parentNode.removeChild(node);
          nodes.splice(i2--, 1);
          l2--;
        } else if (!isChild) {
          offset = !node.nextSibling && _isBeforeWordDelimiter(node.parentNode, element, wordDelimiter);
          node.parentNode._parent && node.parentNode._parent.appendChild(node);
          offset && node.parentNode.appendChild(_doc3.createTextNode(" "));
          if (tag === "span") {
            node.style.display = "inline";
          }
          charArray.push(node);
        }
      } else if (node.parentNode._isSplit && !node._isSplit && node.innerHTML !== "") {
        wordArray.push(node);
      } else if (chars && !node._isSplit) {
        if (tag === "span") {
          node.style.display = "inline";
        }
        charArray.push(node);
      }
    }
    i2 = spaceNodesToRemove.length;
    while (--i2 > -1) {
      spaceNodesToRemove[i2].parentNode.removeChild(spaceNodesToRemove[i2]);
    }
    if (lines) {
      if (absolute) {
        lineNode = _doc3.createElement(tag);
        element.appendChild(lineNode);
        lineWidth = lineNode.offsetWidth + "px";
        offset = lineNode.offsetParent === element ? 0 : element.offsetLeft;
        element.removeChild(lineNode);
      }
      style = element.style.cssText;
      element.style.cssText = "display:none;";
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      addWordSpaces = wordDelimiter === " " && (!absolute || !words && !chars);
      for (i2 = 0; i2 < lines.length; i2++) {
        curLine = lines[i2];
        lineNode = _doc3.createElement(tag);
        lineNode.style.cssText = "display:block;text-align:" + textAlign + ";position:" + (absolute ? "absolute;" : "relative;");
        if (linesClass) {
          lineNode.className = linesClass + (iterateLine ? i2 + 1 : "");
        }
        lineArray.push(lineNode);
        l2 = curLine.length;
        for (j = 0; j < l2; j++) {
          if (curLine[j].nodeName !== "BR") {
            node = curLine[j];
            lineNode.appendChild(node);
            addWordSpaces && node._wordEnd && lineNode.appendChild(_doc3.createTextNode(" "));
            if (absolute) {
              if (j === 0) {
                lineNode.style.top = node._y + "px";
                lineNode.style.left = paddingLeft + offset + "px";
              }
              node.style.top = "0px";
              if (offset) {
                node.style.left = node._x - offset + "px";
              }
            }
          }
        }
        if (l2 === 0) {
          lineNode.innerHTML = "&nbsp;";
        } else if (!words && !chars) {
          _deWordify(lineNode);
          _swapText(lineNode, String.fromCharCode(160), " ");
        }
        if (absolute) {
          lineNode.style.width = lineWidth;
          lineNode.style.height = node._h + "px";
        }
        element.appendChild(lineNode);
      }
      element.style.cssText = style;
    }
    if (absolute) {
      if (origHeight > element.clientHeight) {
        element.style.height = origHeight - padTopAndBottom + "px";
        if (element.clientHeight < origHeight) {
          element.style.height = origHeight + borderTopAndBottom + "px";
        }
      }
      if (origWidth > element.clientWidth) {
        element.style.width = origWidth - padLeftAndRight + "px";
        if (element.clientWidth < origWidth) {
          element.style.width = origWidth + borderLeftAndRight + "px";
        }
      }
    }
    isFlex && (prevInlineDisplay ? element.style.display = prevInlineDisplay : element.style.removeProperty("display"));
    _pushReversed(allChars, charArray);
    words && _pushReversed(allWords, wordArray);
    _pushReversed(allLines, lineArray);
  };
  var _splitRawText = function _splitRawText2(element, vars, wordStart, charStart) {
    var tag = vars.tag ? vars.tag : vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines", chars = ~types.indexOf("chars"), absolute = _isAbsolute(vars), wordDelimiter = vars.wordDelimiter || " ", isWordDelimiter = function isWordDelimiter2(_char) {
      return _char === wordDelimiter || _char === _nonBreakingSpace && wordDelimiter === " ";
    }, space = wordDelimiter !== " " ? "" : absolute ? "&#173; " : " ", wordEnd = "</" + tag + ">", wordIsOpen = 1, specialChars = vars.specialChars ? typeof vars.specialChars === "function" ? vars.specialChars : _findSpecialChars : null, text, splitText, i2, j, l2, character, hasTagStart, testResult, container = _doc3.createElement("div"), parent = element.parentNode;
    parent.insertBefore(container, element);
    container.textContent = element.nodeValue;
    parent.removeChild(element);
    element = container;
    text = getText(element);
    hasTagStart = text.indexOf("<") !== -1;
    if (vars.reduceWhiteSpace !== false) {
      text = text.replace(_multipleSpacesExp, " ").replace(_stripExp, "");
    }
    if (hasTagStart) {
      text = text.split("<").join("{{LT}}");
    }
    l2 = text.length;
    splitText = (text.charAt(0) === " " ? space : "") + wordStart();
    for (i2 = 0; i2 < l2; i2++) {
      character = text.charAt(i2);
      if (specialChars && (testResult = specialChars(text.substr(i2), vars.specialChars))) {
        character = text.substr(i2, testResult || 1);
        splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
        i2 += testResult - 1;
      } else if (isWordDelimiter(character) && !isWordDelimiter(text.charAt(i2 - 1)) && i2) {
        splitText += wordIsOpen ? wordEnd : "";
        wordIsOpen = 0;
        while (isWordDelimiter(text.charAt(i2 + 1))) {
          splitText += space;
          i2++;
        }
        if (i2 === l2 - 1) {
          splitText += space;
        } else if (text.charAt(i2 + 1) !== ")") {
          splitText += space + wordStart();
          wordIsOpen = 1;
        }
      } else if (character === "{" && text.substr(i2, 6) === "{{LT}}") {
        splitText += chars ? charStart() + "{{LT}}</" + tag + ">" : "{{LT}}";
        i2 += 5;
      } else if (character.charCodeAt(0) >= 55296 && character.charCodeAt(0) <= 56319 || text.charCodeAt(i2 + 1) >= 65024 && text.charCodeAt(i2 + 1) <= 65039) {
        j = ((text.substr(i2, 12).split(emojiExp) || [])[1] || "").length || 2;
        splitText += chars && character !== " " ? charStart() + text.substr(i2, j) + "</" + tag + ">" : text.substr(i2, j);
        i2 += j - 1;
      } else {
        splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
      }
    }
    element.outerHTML = splitText + (wordIsOpen ? wordEnd : "");
    hasTagStart && _swapText(parent, "{{LT}}", "<");
  };
  var _split = function _split2(element, vars, wordStart, charStart) {
    var children = _toArray(element.childNodes), l2 = children.length, absolute = _isAbsolute(vars), i2, child;
    if (element.nodeType !== 3 || l2 > 1) {
      vars.absolute = false;
      for (i2 = 0; i2 < l2; i2++) {
        child = children[i2];
        child._next = child._isFirst = child._parent = child._wordEnd = null;
        if (child.nodeType !== 3 || /\S+/.test(child.nodeValue)) {
          if (absolute && child.nodeType !== 3 && _getComputedStyle(child).display === "inline") {
            child.style.display = "inline-block";
            child.style.position = "relative";
          }
          child._isSplit = true;
          _split2(child, vars, wordStart, charStart);
        }
      }
      vars.absolute = absolute;
      element._isSplit = true;
      return;
    }
    _splitRawText(element, vars, wordStart, charStart);
  };
  var SplitText = /* @__PURE__ */ function() {
    function SplitText2(element, vars) {
      _coreInitted3 || _initCore5();
      this.elements = _toArray(element);
      this.chars = [];
      this.words = [];
      this.lines = [];
      this._originals = [];
      this.vars = vars || {};
      _context2(this);
      _bonusValidated2 && this.split(vars);
    }
    var _proto = SplitText2.prototype;
    _proto.split = function split(vars) {
      this.isSplit && this.revert();
      this.vars = vars = vars || this.vars;
      this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
      var i2 = this.elements.length, tag = vars.tag ? vars.tag : vars.span ? "span" : "div", wordStart = _cssClassFunc(vars.wordsClass, tag), charStart = _cssClassFunc(vars.charsClass, tag), origHeight, origWidth, e3;
      while (--i2 > -1) {
        e3 = this.elements[i2];
        this._originals[i2] = {
          html: e3.innerHTML,
          style: e3.getAttribute("style")
        };
        origHeight = e3.clientHeight;
        origWidth = e3.clientWidth;
        _split(e3, vars, wordStart, charStart);
        _setPositionsAfterSplit(e3, vars, this.chars, this.words, this.lines, origWidth, origHeight);
      }
      this.chars.reverse();
      this.words.reverse();
      this.lines.reverse();
      this.isSplit = true;
      return this;
    };
    _proto.revert = function revert() {
      var originals = this._originals;
      if (!originals) {
        throw "revert() call wasn't scoped properly.";
      }
      this.elements.forEach(function(e3, i2) {
        e3.innerHTML = originals[i2].html;
        e3.setAttribute("style", originals[i2].style);
      });
      this.chars = [];
      this.words = [];
      this.lines = [];
      this.isSplit = false;
      return this;
    };
    SplitText2.create = function create(element, vars) {
      return new SplitText2(element, vars);
    };
    return SplitText2;
  }();
  SplitText.version = "3.12.5";
  SplitText.register = _initCore5;

  // node_modules/gsap/Observer.js
  function _defineProperties3(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass3(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties3(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties3(Constructor, staticProps);
    return Constructor;
  }
  var gsap4;
  var _coreInitted4;
  var _clamp3;
  var _win4;
  var _doc4;
  var _docEl;
  var _body;
  var _isTouch;
  var _pointerType;
  var ScrollTrigger;
  var _root;
  var _normalizer;
  var _eventTypes;
  var _context3;
  var _getGSAP3 = function _getGSAP4() {
    return gsap4 || typeof window !== "undefined" && (gsap4 = window.gsap) && gsap4.registerPlugin && gsap4;
  };
  var _startup = 1;
  var _observers = [];
  var _scrollers = [];
  var _proxies = [];
  var _getTime = Date.now;
  var _bridge = function _bridge2(name, value) {
    return value;
  };
  var _integrate = function _integrate2() {
    var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;
    _bridge = function _bridge3(name, value) {
      return data[name](value);
    };
  };
  var _getProxyProp = function _getProxyProp2(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  };
  var _isViewport = function _isViewport2(el) {
    return !!~_root.indexOf(el);
  };
  var _addListener = function _addListener2(element, type, func, passive, capture) {
    return element.addEventListener(type, func, {
      passive: passive !== false,
      capture: !!capture
    });
  };
  var _removeListener = function _removeListener2(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _scrollLeft = "scrollLeft";
  var _scrollTop = "scrollTop";
  var _onScroll = function _onScroll2() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
  };
  var _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
    var cachingFunc = function cachingFunc2(value) {
      if (value || value === 0) {
        _startup && (_win4.history.scrollRestoration = "manual");
        var isNormalizing = _normalizer && _normalizer.isPressed;
        value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
        f(value);
        cachingFunc2.cacheID = _scrollers.cache;
        isNormalizing && _bridge("ss", value);
      } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
        cachingFunc2.cacheID = _scrollers.cache;
        cachingFunc2.v = f();
      }
      return cachingFunc2.v + cachingFunc2.offset;
    };
    cachingFunc.offset = 0;
    return f && cachingFunc;
  };
  var _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win4.scrollTo(value, _vertical.sc()) : _win4.pageXOffset || _doc4[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
    })
  };
  var _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win4.scrollTo(_horizontal.sc(), value) : _win4.pageYOffset || _doc4[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
    })
  };
  var _getTarget = function _getTarget2(t2, self) {
    return (self && self._ctx && self._ctx.selector || gsap4.utils.toArray)(t2)[0] || (typeof t2 === "string" && gsap4.config().nullTargetWarn !== false ? console.warn("Element not found:", t2) : null);
  };
  var _getScrollFunc = function _getScrollFunc2(element, _ref) {
    var s2 = _ref.s, sc = _ref.sc;
    _isViewport(element) && (element = _doc4.scrollingElement || _docEl);
    var i2 = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
    !~i2 && (i2 = _scrollers.push(element) - 1);
    _scrollers[i2 + offset] || _addListener(element, "scroll", _onScroll);
    var prev = _scrollers[i2 + offset], func = prev || (_scrollers[i2 + offset] = _scrollCacheFunc(_getProxyProp(element, s2), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
      return arguments.length ? element[s2] = value : element[s2];
    })));
    func.target = element;
    prev || (func.smooth = gsap4.getProperty(element, "scrollBehavior") === "smooth");
    return func;
  };
  var _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
      var t3 = _getTime();
      if (force || t3 - t1 > min) {
        v2 = v1;
        v1 = value2;
        t2 = t1;
        t1 = t3;
      } else if (useDelta) {
        v1 += value2;
      } else {
        v1 = v2 + (value2 - v2) / (t3 - t2) * (t1 - t2);
      }
    }, reset = function reset2() {
      v2 = v1 = useDelta ? 0 : v1;
      t2 = t1 = 0;
    }, getVelocity = function getVelocity2(latestValue) {
      var tOld = t2, vOld = v2, t3 = _getTime();
      (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
      return t1 === t2 || t3 - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t3 : t1) - tOld) * 1e3;
    };
    return {
      update,
      reset,
      getVelocity
    };
  };
  var _getEvent = function _getEvent2(e3, preventDefault) {
    preventDefault && !e3._gsapAllow && e3.preventDefault();
    return e3.changedTouches ? e3.changedTouches[0] : e3;
  };
  var _getAbsoluteMax = function _getAbsoluteMax2(a2) {
    var max = Math.max.apply(Math, a2), min = Math.min.apply(Math, a2);
    return Math.abs(max) >= Math.abs(min) ? max : min;
  };
  var _setScrollTrigger = function _setScrollTrigger2() {
    ScrollTrigger = gsap4.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
  };
  var _initCore7 = function _initCore8(core) {
    gsap4 = core || _getGSAP3();
    if (!_coreInitted4 && gsap4 && typeof document !== "undefined" && document.body) {
      _win4 = window;
      _doc4 = document;
      _docEl = _doc4.documentElement;
      _body = _doc4.body;
      _root = [_win4, _doc4, _docEl, _body];
      _clamp3 = gsap4.utils.clamp;
      _context3 = gsap4.core.context || function() {
      };
      _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
      _isTouch = Observer.isTouch = _win4.matchMedia && _win4.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win4 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
      _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
      setTimeout(function() {
        return _startup = 0;
      }, 500);
      _setScrollTrigger();
      _coreInitted4 = 1;
    }
    return _coreInitted4;
  };
  _horizontal.op = _vertical;
  _scrollers.cache = 0;
  var Observer = /* @__PURE__ */ function() {
    function Observer2(vars) {
      this.init(vars);
    }
    var _proto = Observer2.prototype;
    _proto.init = function init6(vars) {
      _coreInitted4 || _initCore7(gsap4) || console.warn("Please gsap.registerPlugin(Observer)");
      ScrollTrigger || _setScrollTrigger();
      var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce2 = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
      this.target = target = _getTarget(target) || _docEl;
      this.vars = vars;
      ignore && (ignore = gsap4.utils.toArray(ignore));
      tolerance = tolerance || 1e-9;
      dragMinimum = dragMinimum || 0;
      wheelSpeed = wheelSpeed || 1;
      scrollSpeed = scrollSpeed || 1;
      type = type || "wheel,touch,pointer";
      debounce2 = debounce2 !== false;
      lineHeight || (lineHeight = parseFloat(_win4.getComputedStyle(_body).lineHeight) || 22);
      var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc4, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
        return onClickTime = _getTime();
      }, _ignoreCheck = function _ignoreCheck2(e3, isPointerOrTouch) {
        return (self.event = e3) && ignore && ~ignore.indexOf(e3.target) || isPointerOrTouch && limitToTouch && e3.pointerType !== "touch" || ignoreCheck && ignoreCheck(e3, isPointerOrTouch);
      }, onStopFunc = function onStopFunc2() {
        self._vx.reset();
        self._vy.reset();
        onStopDelayedCall.pause();
        onStop && onStop(self);
      }, update = function update2() {
        var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
        onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
        if (changedX) {
          onRight && self.deltaX > 0 && onRight(self);
          onLeft && self.deltaX < 0 && onLeft(self);
          onChangeX && onChangeX(self);
          onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
          prevDeltaX = self.deltaX;
          deltaX[0] = deltaX[1] = deltaX[2] = 0;
        }
        if (changedY) {
          onDown && self.deltaY > 0 && onDown(self);
          onUp && self.deltaY < 0 && onUp(self);
          onChangeY && onChangeY(self);
          onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
          prevDeltaY = self.deltaY;
          deltaY[0] = deltaY[1] = deltaY[2] = 0;
        }
        if (moved || dragged) {
          onMove && onMove(self);
          if (dragged) {
            onDrag(self);
            dragged = false;
          }
          moved = false;
        }
        locked && !(locked = false) && onLockAxis && onLockAxis(self);
        if (wheeled) {
          onWheel(self);
          wheeled = false;
        }
        id = 0;
      }, onDelta = function onDelta2(x, y, index) {
        deltaX[index] += x;
        deltaY[index] += y;
        self._vx.update(x);
        self._vy.update(y);
        debounce2 ? id || (id = requestAnimationFrame(update)) : update();
      }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
        if (lockAxis && !axis) {
          self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
          locked = true;
        }
        if (axis !== "y") {
          deltaX[2] += x;
          self._vx.update(x, true);
        }
        if (axis !== "x") {
          deltaY[2] += y;
          self._vy.update(y, true);
        }
        debounce2 ? id || (id = requestAnimationFrame(update)) : update();
      }, _onDrag = function _onDrag2(e3) {
        if (_ignoreCheck(e3, 1)) {
          return;
        }
        e3 = _getEvent(e3, preventDefault);
        var x = e3.clientX, y = e3.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
        self.x = x;
        self.y = y;
        if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
          onDrag && (dragged = true);
          isDragging || (self.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
          isDragging || onDragStart && onDragStart(self);
        }
      }, _onPress = self.onPress = function(e3) {
        if (_ignoreCheck(e3, 1) || e3 && e3.button) {
          return;
        }
        self.axis = axis = null;
        onStopDelayedCall.pause();
        self.isPressed = true;
        e3 = _getEvent(e3);
        prevDeltaX = prevDeltaY = 0;
        self.startX = self.x = e3.clientX;
        self.startY = self.y = e3.clientY;
        self._vx.reset();
        self._vy.reset();
        _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
        self.deltaX = self.deltaY = 0;
        onPress && onPress(self);
      }, _onRelease = self.onRelease = function(e3) {
        if (_ignoreCheck(e3, 1)) {
          return;
        }
        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging, isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e3);
        if (!isDragNotClick && isTrackingDrag) {
          self._vx.reset();
          self._vy.reset();
          if (preventDefault && allowClicks) {
            gsap4.delayedCall(0.08, function() {
              if (_getTime() - onClickTime > 300 && !e3.defaultPrevented) {
                if (e3.target.click) {
                  e3.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win4, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e3.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }
        self.isDragging = self.isGesturing = self.isPressed = false;
        onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
        onDragEnd && wasDragging && onDragEnd(self);
        onRelease && onRelease(self, isDragNotClick);
      }, _onGestureStart = function _onGestureStart2(e3) {
        return e3.touches && e3.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e3, self.isDragging);
      }, _onGestureEnd = function _onGestureEnd2() {
        return (self.isGesturing = false) || onGestureEnd(self);
      }, onScroll = function onScroll2(e3) {
        if (_ignoreCheck(e3)) {
          return;
        }
        var x = scrollFuncX(), y = scrollFuncY();
        onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
        scrollX = x;
        scrollY = y;
        onStop && onStopDelayedCall.restart(true);
      }, _onWheel = function _onWheel2(e3) {
        if (_ignoreCheck(e3)) {
          return;
        }
        e3 = _getEvent(e3, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e3.deltaMode === 1 ? lineHeight : e3.deltaMode === 2 ? _win4.innerHeight : 1) * wheelSpeed;
        onDelta(e3.deltaX * multiplier, e3.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      }, _onMove = function _onMove2(e3) {
        if (_ignoreCheck(e3)) {
          return;
        }
        var x = e3.clientX, y = e3.clientY, dx = x - self.x, dy = y - self.y;
        self.x = x;
        self.y = y;
        moved = true;
        onStop && onStopDelayedCall.restart(true);
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      }, _onHover = function _onHover2(e3) {
        self.event = e3;
        onHover(self);
      }, _onHoverEnd = function _onHoverEnd2(e3) {
        self.event = e3;
        onHoverEnd(self);
      }, _onClick = function _onClick2(e3) {
        return _ignoreCheck(e3) || _getEvent(e3, preventDefault) && onClick(self);
      };
      onStopDelayedCall = self._dc = gsap4.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
      self.deltaX = self.deltaY = 0;
      self._vx = _getVelocityProp(0, 50, true);
      self._vy = _getVelocityProp(0, 50, true);
      self.scrollX = scrollFuncX;
      self.scrollY = scrollFuncY;
      self.isDragging = self.isGesturing = self.isPressed = false;
      _context3(this);
      self.enable = function(e3) {
        if (!self.isEnabled) {
          _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
          type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
          if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
            _addListener(target, _eventTypes[0], _onPress, passive, capture);
            _addListener(ownerDoc, _eventTypes[2], _onRelease);
            _addListener(ownerDoc, _eventTypes[3], _onRelease);
            allowClicks && _addListener(target, "click", clickCapture, true, true);
            onClick && _addListener(target, "click", _onClick);
            onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
            onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
            onHover && _addListener(target, _pointerType + "enter", _onHover);
            onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
            onMove && _addListener(target, _pointerType + "move", _onMove);
          }
          self.isEnabled = true;
          e3 && e3.type && _onPress(e3);
          onEnable && onEnable(self);
        }
        return self;
      };
      self.disable = function() {
        if (self.isEnabled) {
          _observers.filter(function(o2) {
            return o2 !== self && _isViewport(o2.target);
          }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          if (self.isPressed) {
            self._vx.reset();
            self._vy.reset();
            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          }
          _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
          _removeListener(target, "wheel", _onWheel, capture);
          _removeListener(target, _eventTypes[0], _onPress, capture);
          _removeListener(ownerDoc, _eventTypes[2], _onRelease);
          _removeListener(ownerDoc, _eventTypes[3], _onRelease);
          _removeListener(target, "click", clickCapture, true);
          _removeListener(target, "click", _onClick);
          _removeListener(ownerDoc, "gesturestart", _onGestureStart);
          _removeListener(ownerDoc, "gestureend", _onGestureEnd);
          _removeListener(target, _pointerType + "enter", _onHover);
          _removeListener(target, _pointerType + "leave", _onHoverEnd);
          _removeListener(target, _pointerType + "move", _onMove);
          self.isEnabled = self.isPressed = self.isDragging = false;
          onDisable && onDisable(self);
        }
      };
      self.kill = self.revert = function() {
        self.disable();
        var i2 = _observers.indexOf(self);
        i2 >= 0 && _observers.splice(i2, 1);
        _normalizer === self && (_normalizer = 0);
      };
      _observers.push(self);
      isNormalizer && _isViewport(target) && (_normalizer = self);
      self.enable(event);
    };
    _createClass3(Observer2, [{
      key: "velocityX",
      get: function get() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get() {
        return this._vy.getVelocity();
      }
    }]);
    return Observer2;
  }();
  Observer.version = "3.12.5";
  Observer.create = function(vars) {
    return new Observer(vars);
  };
  Observer.register = _initCore7;
  Observer.getAll = function() {
    return _observers.slice();
  };
  Observer.getById = function(id) {
    return _observers.filter(function(o2) {
      return o2.vars.id === id;
    })[0];
  };
  _getGSAP3() && gsap4.registerPlugin(Observer);

  // node_modules/gsap/ScrollTrigger.js
  var gsap5;
  var _coreInitted5;
  var _win5;
  var _doc5;
  var _docEl2;
  var _body2;
  var _root2;
  var _resizeDelay;
  var _toArray2;
  var _clamp4;
  var _time2;
  var _syncInterval;
  var _refreshing;
  var _pointerIsDown;
  var _transformProp2;
  var _i;
  var _prevWidth;
  var _prevHeight;
  var _autoRefresh;
  var _sort;
  var _suppressOverwrites2;
  var _ignoreResize;
  var _normalizer2;
  var _ignoreMobileResize;
  var _baseScreenHeight;
  var _baseScreenWidth;
  var _fixIOSBug;
  var _context4;
  var _scrollRestoration;
  var _div100vh;
  var _100vh;
  var _isReverted;
  var _clampingMax;
  var _limitCallbacks;
  var _startup2 = 1;
  var _getTime2 = Date.now;
  var _time1 = _getTime2();
  var _lastScrollTime = 0;
  var _enabled = 0;
  var _parseClamp = function _parseClamp2(value, type, self) {
    var clamp4 = _isString3(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
    self["_" + type + "Clamp"] = clamp4;
    return clamp4 ? value.substr(6, value.length - 7) : value;
  };
  var _keepClamp = function _keepClamp2(value, clamp4) {
    return clamp4 && (!_isString3(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
  };
  var _rafBugFix = function _rafBugFix2() {
    return _enabled && requestAnimationFrame(_rafBugFix2);
  };
  var _pointerDownHandler = function _pointerDownHandler2() {
    return _pointerIsDown = 1;
  };
  var _pointerUpHandler = function _pointerUpHandler2() {
    return _pointerIsDown = 0;
  };
  var _passThrough3 = function _passThrough4(v) {
    return v;
  };
  var _round3 = function _round4(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _windowExists5 = function _windowExists6() {
    return typeof window !== "undefined";
  };
  var _getGSAP5 = function _getGSAP6() {
    return gsap5 || _windowExists5() && (gsap5 = window.gsap) && gsap5.registerPlugin && gsap5;
  };
  var _isViewport3 = function _isViewport4(e3) {
    return !!~_root2.indexOf(e3);
  };
  var _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
    return (dimensionProperty === "Height" ? _100vh : _win5["inner" + dimensionProperty]) || _docEl2["client" + dimensionProperty] || _body2["client" + dimensionProperty];
  };
  var _getBoundsFunc = function _getBoundsFunc2(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
      _winOffsets.width = _win5.innerWidth;
      _winOffsets.height = _100vh;
      return _winOffsets;
    } : function() {
      return _getBounds(element);
    });
  };
  var _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
    var d = _ref.d, d2 = _ref.d2, a2 = _ref.a;
    return (a2 = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
      return a2()[d];
    } : function() {
      return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
    };
  };
  var _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
    return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
      return _winOffsets;
    };
  };
  var _maxScroll = function _maxScroll2(element, _ref2) {
    var s2 = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a2 = _ref2.a;
    return Math.max(0, (s2 = "scroll" + d2) && (a2 = _getProxyProp(element, s2)) ? a2() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl2[s2] || _body2[s2]) - _getViewportDimension(d2) : element[s2] - element["offset" + d2]);
  };
  var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
    for (var i2 = 0; i2 < _autoRefresh.length; i2 += 3) {
      (!events || ~events.indexOf(_autoRefresh[i2 + 1])) && func(_autoRefresh[i2], _autoRefresh[i2 + 1], _autoRefresh[i2 + 2]);
    }
  };
  var _isString3 = function _isString4(value) {
    return typeof value === "string";
  };
  var _isFunction3 = function _isFunction4(value) {
    return typeof value === "function";
  };
  var _isNumber3 = function _isNumber4(value) {
    return typeof value === "number";
  };
  var _isObject3 = function _isObject4(value) {
    return typeof value === "object";
  };
  var _endAnimation = function _endAnimation2(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  };
  var _callback3 = function _callback4(self, func) {
    if (self.enabled) {
      var result = self._ctx ? self._ctx.add(function() {
        return func(self);
      }) : func(self);
      result && result.totalTime && (self.callbackAnimation = result);
    }
  };
  var _abs = Math.abs;
  var _left = "left";
  var _top = "top";
  var _right = "right";
  var _bottom = "bottom";
  var _width = "width";
  var _height = "height";
  var _Right = "Right";
  var _Left = "Left";
  var _Top = "Top";
  var _Bottom = "Bottom";
  var _padding = "padding";
  var _margin = "margin";
  var _Width = "Width";
  var _Height = "Height";
  var _px = "px";
  var _getComputedStyle3 = function _getComputedStyle4(element) {
    return _win5.getComputedStyle(element);
  };
  var _makePositionable = function _makePositionable2(element) {
    var position = _getComputedStyle3(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
  };
  var _setDefaults3 = function _setDefaults4(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || (obj[p] = defaults2[p]);
    }
    return obj;
  };
  var _getBounds = function _getBounds2(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle3(element)[_transformProp2] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap5.to(element, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  };
  var _getSize = function _getSize2(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  };
  var _getLabelRatioArray = function _getLabelRatioArray2(timeline2) {
    var a2 = [], labels = timeline2.labels, duration = timeline2.duration(), p;
    for (p in labels) {
      a2.push(labels[p] / duration);
    }
    return a2;
  };
  var _getClosestLabel = function _getClosestLabel2(animation) {
    return function(value) {
      return gsap5.utils.snap(_getLabelRatioArray(animation), value);
    };
  };
  var _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
    var snap3 = gsap5.utils.snap(snapIncrementOrArray), a2 = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a3, b) {
      return a3 - b;
    });
    return a2 ? function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var i2;
      if (!direction) {
        return snap3(value);
      }
      if (direction > 0) {
        value -= threshold;
        for (i2 = 0; i2 < a2.length; i2++) {
          if (a2[i2] >= value) {
            return a2[i2];
          }
        }
        return a2[i2 - 1];
      } else {
        i2 = a2.length;
        value += threshold;
        while (i2--) {
          if (a2[i2] <= value) {
            return a2[i2];
          }
        }
      }
      return a2[0];
    } : function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var snapped = snap3(value);
      return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap3(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
  };
  var _getLabelAtDirection = function _getLabelAtDirection2(timeline2) {
    return function(value, st) {
      return _snapDirectional(_getLabelRatioArray(timeline2))(value, st.direction);
    };
  };
  var _multiListener = function _multiListener2(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
      return func(element, type, callback);
    });
  };
  var _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  };
  var _removeListener3 = function _removeListener4(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _wheelListener = function _wheelListener2(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;
    if (scrollFunc) {
      func(el, "wheel", scrollFunc);
      func(el, "touchmove", scrollFunc);
    }
  };
  var _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  };
  var _defaults2 = {
    toggleActions: "play",
    anticipatePin: 0
  };
  var _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  };
  var _offsetToPx = function _offsetToPx2(value, size) {
    if (_isString3(value)) {
      var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }
      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
  };
  var _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e3 = _doc5.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body2 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e3._isStart = isStart;
    e3.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e3.style.cssText = css;
    e3.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e3, parent.children[0]) : parent.appendChild(e3);
    e3._offset = e3["offset" + direction.op.d2];
    _positionMarker(e3, 0, direction, isStart);
    return e3;
  };
  var _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap5.set(marker, vars);
  };
  var _triggers = [];
  var _ids = {};
  var _rafID;
  var _sync = function _sync2() {
    return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
  };
  var _onScroll3 = function _onScroll4() {
    if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body2.clientWidth) {
      _scrollers.cache++;
      if (_normalizer2) {
        _rafID || (_rafID = requestAnimationFrame(_updateAll));
      } else {
        _updateAll();
      }
      _lastScrollTime || _dispatch3("scrollStart");
      _lastScrollTime = _getTime2();
    }
  };
  var _setBaseDimensions = function _setBaseDimensions2() {
    _baseScreenWidth = _win5.innerWidth;
    _baseScreenHeight = _win5.innerHeight;
  };
  var _onResize = function _onResize2() {
    _scrollers.cache++;
    !_refreshing && !_ignoreResize && !_doc5.fullscreenElement && !_doc5.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win5.innerWidth || Math.abs(_win5.innerHeight - _baseScreenHeight) > _win5.innerHeight * 0.25) && _resizeDelay.restart(true);
  };
  var _listeners2 = {};
  var _emptyArray2 = [];
  var _softRefresh = function _softRefresh2() {
    return _removeListener3(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
  };
  var _dispatch3 = function _dispatch4(type) {
    return _listeners2[type] && _listeners2[type].map(function(f) {
      return f();
    }) || _emptyArray2;
  };
  var _savedStyles = [];
  var _revertRecorded = function _revertRecorded2(media) {
    for (var i2 = 0; i2 < _savedStyles.length; i2 += 5) {
      if (!media || _savedStyles[i2 + 4] && _savedStyles[i2 + 4].query === media) {
        _savedStyles[i2].style.cssText = _savedStyles[i2 + 1];
        _savedStyles[i2].getBBox && _savedStyles[i2].setAttribute("transform", _savedStyles[i2 + 2] || "");
        _savedStyles[i2 + 3].uncache = 1;
      }
    }
  };
  var _revertAll = function _revertAll2(kill, media) {
    var trigger;
    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];
      if (trigger && (!media || trigger._ctx === media)) {
        if (kill) {
          trigger.kill(1);
        } else {
          trigger.revert(true, true);
        }
      }
    }
    _isReverted = true;
    media && _revertRecorded(media);
    media || _dispatch3("revert");
  };
  var _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
    _scrollers.cache++;
    (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
      return _isFunction3(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString3(scrollRestoration) && (_win5.history.scrollRestoration = _scrollRestoration = scrollRestoration);
  };
  var _refreshingAll;
  var _refreshID = 0;
  var _queueRefreshID;
  var _queueRefreshAll = function _queueRefreshAll2() {
    if (_queueRefreshID !== _refreshID) {
      var id = _queueRefreshID = _refreshID;
      requestAnimationFrame(function() {
        return id === _refreshID && _refreshAll(true);
      });
    }
  };
  var _refresh100vh = function _refresh100vh2() {
    _body2.appendChild(_div100vh);
    _100vh = !_normalizer2 && _div100vh.offsetHeight || _win5.innerHeight;
    _body2.removeChild(_div100vh);
  };
  var _hideAllMarkers = function _hideAllMarkers2(hide) {
    return _toArray2(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
      return el.style.display = hide ? "none" : "block";
    });
  };
  var _refreshAll = function _refreshAll2(force, skipRevert) {
    if (_lastScrollTime && !force && !_isReverted) {
      _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
      return;
    }
    _refresh100vh();
    _refreshingAll = ScrollTrigger2.isRefreshing = true;
    _scrollers.forEach(function(obj) {
      return _isFunction3(obj) && ++obj.cacheID && (obj.rec = obj());
    });
    var refreshInits = _dispatch3("refreshInit");
    _sort && ScrollTrigger2.sort();
    skipRevert || _revertAll();
    _scrollers.forEach(function(obj) {
      if (_isFunction3(obj)) {
        obj.smooth && (obj.target.style.scrollBehavior = "auto");
        obj(0);
      }
    });
    _triggers.slice(0).forEach(function(t2) {
      return t2.refresh();
    });
    _isReverted = false;
    _triggers.forEach(function(t2) {
      if (t2._subPinOffset && t2.pin) {
        var prop = t2.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t2.pin[prop];
        t2.revert(true, 1);
        t2.adjustPinSpacing(t2.pin[prop] - original);
        t2.refresh();
      }
    });
    _clampingMax = 1;
    _hideAllMarkers(true);
    _triggers.forEach(function(t2) {
      var max = _maxScroll(t2.scroller, t2._dir), endClamp = t2.vars.end === "max" || t2._endClamp && t2.end > max, startClamp = t2._startClamp && t2.start >= max;
      (endClamp || startClamp) && t2.setPositions(startClamp ? max - 1 : t2.start, endClamp ? Math.max(startClamp ? max : t2.start + 1, max) : t2.end, true);
    });
    _hideAllMarkers(false);
    _clampingMax = 0;
    refreshInits.forEach(function(result) {
      return result && result.render && result.render(-1);
    });
    _scrollers.forEach(function(obj) {
      if (_isFunction3(obj)) {
        obj.smooth && requestAnimationFrame(function() {
          return obj.target.style.scrollBehavior = "smooth";
        });
        obj.rec && obj(obj.rec);
      }
    });
    _clearScrollMemory(_scrollRestoration, 1);
    _resizeDelay.pause();
    _refreshID++;
    _refreshingAll = 2;
    _updateAll(2);
    _triggers.forEach(function(t2) {
      return _isFunction3(t2.vars.onRefresh) && t2.vars.onRefresh(t2);
    });
    _refreshingAll = ScrollTrigger2.isRefreshing = false;
    _dispatch3("refresh");
  };
  var _lastScroll = 0;
  var _direction = 1;
  var _primary;
  var _updateAll = function _updateAll2(force) {
    if (force === 2 || !_refreshingAll && !_isReverted) {
      ScrollTrigger2.isUpdating = true;
      _primary && _primary.update(0);
      var l2 = _triggers.length, time = _getTime2(), recordVelocity = time - _time1 >= 50, scroll = l2 && _triggers[0].scroll();
      _direction = _lastScroll > scroll ? -1 : 1;
      _refreshingAll || (_lastScroll = scroll);
      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
          _lastScrollTime = 0;
          _dispatch3("scrollEnd");
        }
        _time2 = _time1;
        _time1 = time;
      }
      if (_direction < 0) {
        _i = l2;
        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
        _direction = 1;
      } else {
        for (_i = 0; _i < l2; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }
      ScrollTrigger2.isUpdating = false;
    }
    _rafID = 0;
  };
  var _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
  var _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
  var _swapPinOut = function _swapPinOut2(pin, spacer, state) {
    _setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) {
      _setState(cache.spacerState);
    } else if (pin._gsap.swappedIn) {
      var parent = spacer.parentNode;
      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }
    pin._gsap.swappedIn = false;
  };
  var _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
      var i2 = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
      while (i2--) {
        p = _propNamesToCopy[i2];
        spacerStyle[p] = cs[p];
      }
      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.flexBasis = cs.flexBasis || "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
      _setState(spacerState);
      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      if (pin.parentNode !== spacer) {
        pin.parentNode.insertBefore(spacer, pin);
        spacer.appendChild(pin);
      }
      pin._gsap.swappedIn = true;
    }
  };
  var _capsExp2 = /([A-Z])/g;
  var _setState = function _setState2(state) {
    if (state) {
      var style = state.t.style, l2 = state.length, i2 = 0, p, value;
      (state.t._gsap || gsap5.core.getCache(state.t)).uncache = 1;
      for (; i2 < l2; i2 += 2) {
        value = state[i2 + 1];
        p = state[i2];
        if (value) {
          style[p] = value;
        } else if (style[p]) {
          style.removeProperty(p.replace(_capsExp2, "-$1").toLowerCase());
        }
      }
    }
  };
  var _getState = function _getState2(element) {
    var l2 = _stateProps.length, style = element.style, state = [], i2 = 0;
    for (; i2 < l2; i2++) {
      state.push(_stateProps[i2], style[_stateProps[i2]]);
    }
    state.t = element;
    return state;
  };
  var _copyState = function _copyState2(state, override, omitOffsets) {
    var result = [], l2 = state.length, i2 = omitOffsets ? 8 : 0, p;
    for (; i2 < l2; i2 += 2) {
      p = state[i2];
      result.push(p, p in override ? override[p] : state[i2 + 1]);
    }
    result.t = state.t;
    return result;
  };
  var _winOffsets = {
    left: 0,
    top: 0
  };
  var _parsePosition3 = function _parsePosition4(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    _isFunction3(value) && (value = value(self));
    if (_isString3(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }
    var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value) || (value = +value);
    if (!_isNumber3(value)) {
      _isFunction3(trigger) && (trigger = trigger(self));
      var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
      element = _getTarget(trigger, self) || _body2;
      bounds = _getBounds(element) || {};
      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle3(element).display === "none") {
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }
      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else {
      containerAnimation && (value = gsap5.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
      markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (clampZeroProp) {
      self[clampZeroProp] = value || -1e-3;
      value < 0 && (value = 0);
    }
    if (marker) {
      var position = value + scrollerSize, isStart = marker._isStart;
      p1 = "scroll" + direction.d2;
      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body2[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1);
      if (useFixedPosition) {
        scrollerBounds = _getBounds(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }
    if (containerAnimation && element) {
      p1 = _getBounds(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
  };
  var _prefixExp = /(webkit|moz|length|cssText|inset)/i;
  var _reparent = function _reparent2(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style = element.style, p, cs;
      if (parent === _body2) {
        element._stOrig = style.cssText;
        cs = _getComputedStyle3(element);
        for (p in cs) {
          if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
            style[p] = cs[p];
          }
        }
        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }
      gsap5.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  };
  var _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue, last2 = last1;
    return function(value) {
      var current = Math.round(getValueFunc());
      if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
        value = current;
        onInterrupt && onInterrupt();
      }
      last2 = last1;
      last1 = value;
      return value;
    };
  };
  var _shiftMarker = function _shiftMarker2(marker, direction, value) {
    var vars = {};
    vars[direction.p] = "+=" + value;
    gsap5.set(marker, vars);
  };
  var _getTweenCreator = function _getTweenCreator2(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
      var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
      initialValue = initialValue || getScroll();
      var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
        tween.kill();
        getTween2.tween = 0;
      });
      change2 = change1 && change2 || 0;
      change1 = change1 || scrollTo - initialValue;
      tween && tween.kill();
      vars[prop] = scrollTo;
      vars.inherit = false;
      vars.modifiers = modifiers;
      modifiers[prop] = function() {
        return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
      };
      vars.onUpdate = function() {
        _scrollers.cache++;
        getTween2.tween && _updateAll();
      };
      vars.onComplete = function() {
        getTween2.tween = 0;
        onComplete && onComplete.call(tween);
      };
      tween = getTween2.tween = gsap5.to(scroller, vars);
      return tween;
    };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function() {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    _addListener3(scroller, "wheel", getScroll.wheelHandler);
    ScrollTrigger2.isTouch && _addListener3(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
  };
  var ScrollTrigger2 = /* @__PURE__ */ function() {
    function ScrollTrigger3(vars, animation) {
      _coreInitted5 || ScrollTrigger3.register(gsap5) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      _context4(this);
      this.init(vars, animation);
    }
    var _proto = ScrollTrigger3.prototype;
    _proto.init = function init6(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(true, true);
      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough3;
        return;
      }
      vars = _setDefaults3(_isString3(vars) || _isNumber3(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults2);
      var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win5), scrollerCache = gsap5.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults2.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle3(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
        return vars.onRefreshInit(self);
      }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
      self._startClamp = self._endClamp = false;
      self._dir = direction;
      anticipatePin *= 45;
      self.scroller = scroller;
      self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
      scroll1 = scrollFunc();
      self.vars = vars;
      animation = animation || vars.animation;
      if ("refreshPriority" in vars) {
        _sort = 1;
        vars.refreshPriority === -9999 && (_primary = self);
      }
      scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      };
      self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
      self.scrubDuration = function(value) {
        scrubSmooth = _isNumber3(value) && value;
        if (!scrubSmooth) {
          scrubTween && scrubTween.progress(1).kill();
          scrubTween = 0;
        } else {
          scrubTween ? scrubTween.duration(value) : scrubTween = gsap5.to(animation, {
            ease: "expo",
            totalProgress: "+=0",
            inherit: false,
            duration: scrubSmooth,
            paused: true,
            onComplete: function onComplete() {
              return onScrubComplete && onScrubComplete(self);
            }
          });
        }
      };
      if (animation) {
        animation.vars.lazy = false;
        animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
        self.animation = animation.pause();
        animation.scrollTrigger = self;
        self.scrubDuration(scrub);
        snap1 = 0;
        id || (id = animation.vars.id);
      }
      if (snap3) {
        if (!_isObject3(snap3) || snap3.push) {
          snap3 = {
            snapTo: snap3
          };
        }
        "scrollBehavior" in _body2.style && gsap5.set(isViewport ? [_body2, _docEl2] : scroller, {
          scrollBehavior: "auto"
        });
        _scrollers.forEach(function(o2) {
          return _isFunction3(o2) && o2.target === (isViewport ? _doc5.scrollingElement || _docEl2 : scroller) && (o2.smooth = false);
        });
        snapFunc = _isFunction3(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== false ? function(value, st) {
          return _snapDirectional(snap3.snapTo)(value, _getTime2() - lastRefresh < 500 ? 0 : st.direction);
        } : gsap5.utils.snap(snap3.snapTo);
        snapDurClamp = snap3.duration || {
          min: 0.1,
          max: 2
        };
        snapDurClamp = _isObject3(snapDurClamp) ? _clamp4(snapDurClamp.min, snapDurClamp.max) : _clamp4(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap5.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
          var scroll = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
          if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
            var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap5.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap3.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
            endValue = snapFunc(naturalEnd, self);
            _isNumber3(endValue) || (endValue = naturalEnd);
            endScroll = Math.round(start + endValue * change);
            if (scroll <= end && scroll >= start && endScroll !== scroll) {
              if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                return;
              }
              if (snap3.inertia === false) {
                change1 = endValue - progress;
              }
              tweenTo(endScroll, {
                duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                ease: snap3.ease || "power3",
                data: _abs(endScroll - scroll),
                // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                onInterrupt: function onInterrupt() {
                  return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                },
                onComplete: function onComplete() {
                  self.update();
                  lastSnap = scrollFunc();
                  if (animation) {
                    scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                  }
                  snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self.progress;
                  onSnapComplete && onSnapComplete(self);
                  _onComplete && _onComplete(self);
                }
              }, scroll, change1 * change, endScroll - scroll - change1 * change);
              onStart && onStart(self, tweenTo.tween);
            }
          } else if (self.isActive && lastSnap !== scroll) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }
      id && (_ids[id] = self);
      trigger = self.trigger = _getTarget(trigger || pin !== true && pin);
      customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
      customRevertReturn && (customRevertReturn = customRevertReturn(self));
      pin = pin === true ? trigger : _getTarget(pin);
      _isString3(toggleClass) && (toggleClass = {
        targets: trigger,
        className: toggleClass
      });
      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle3(pin.parentNode).display === "flex" ? false : _padding);
        self.pin = pin;
        pinCache = gsap5.core.getCache(pin);
        if (!pinCache.spacer) {
          if (pinSpacer) {
            pinSpacer = _getTarget(pinSpacer);
            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
            pinCache.spacerIsNative = !!pinSpacer;
            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
          }
          pinCache.spacer = spacer = pinSpacer || _doc5.createElement("div");
          spacer.classList.add("pin-spacer");
          id && spacer.classList.add("pin-spacer-" + id);
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }
        vars.force3D !== false && gsap5.set(pin, {
          force3D: true
        });
        self.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle3(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap5.getProperty(pin);
        pinSetter = gsap5.quickSetter(pin, direction.a, _px);
        _swapPinIn(pin, spacer, cs);
        pinState = _getState(pin);
      }
      if (markers) {
        markerVars = _isObject3(markers) ? _setDefaults3(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];
        var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
        markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
        markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
        containerAnimation && (caMarkerSetter = gsap5.quickSetter([markerStart, markerEnd], direction.a, _px));
        if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
          _makePositionable(isViewport ? _body2 : scroller);
          gsap5.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap5.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap5.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }
      if (containerAnimation) {
        var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
        containerAnimation.eventCallback("onUpdate", function() {
          self.update(0, 0, 1);
          oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
        });
      }
      self.previous = function() {
        return _triggers[_triggers.indexOf(self) - 1];
      };
      self.next = function() {
        return _triggers[_triggers.indexOf(self) + 1];
      };
      self.revert = function(revert, temp) {
        if (!temp) {
          return self.kill(true);
        }
        var r2 = revert !== false || !self.enabled, prevRefreshing = _refreshing;
        if (r2 !== self.isReverted) {
          if (r2) {
            prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
            prevProgress = self.progress;
            prevAnimProgress = animation && animation.progress();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
            return m.style.display = r2 ? "none" : "block";
          });
          if (r2) {
            _refreshing = self;
            self.update(r2);
          }
          if (pin && (!pinReparent || !self.isActive)) {
            if (r2) {
              _swapPinOut(pin, spacer, pinOriginalState);
            } else {
              _swapPinIn(pin, spacer, _getComputedStyle3(pin), spacerState);
            }
          }
          r2 || self.update(r2);
          _refreshing = prevRefreshing;
          self.isReverted = r2;
        }
      };
      self.refresh = function(soft, force, position, pinOffset) {
        if ((_refreshing || !self.enabled) && !force) {
          return;
        }
        if (pin && soft && _lastScrollTime) {
          _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
          return;
        }
        !_refreshingAll && onRefreshInit && onRefreshInit(self);
        _refreshing = self;
        if (tweenTo.tween && !position) {
          tweenTo.tween.kill();
          tweenTo.tween = 0;
        }
        scrubTween && scrubTween.pause();
        invalidateOnRefresh && animation && animation.revert({
          kill: false
        }).invalidate();
        self.isReverted || self.revert(true, true);
        self._subPinOffset = false;
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject3(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject3(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i2 = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
        if (markers && _isObject3(position)) {
          markerStartOffset = gsap5.getProperty(markerStartTrigger, direction.p);
          markerEndOffset = gsap5.getProperty(markerEndTrigger, direction.p);
        }
        while (i2--) {
          curTrigger = _triggers[i2];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self);
          curPin = curTrigger.pin;
          if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert(true, true);
          }
          if (curTrigger !== _triggers[i2]) {
            triggerIndex--;
            i2--;
          }
        }
        _isFunction3(parsedStart) && (parsedStart = parsedStart(self));
        parsedStart = _parseClamp(parsedStart, "start", self);
        start = _parsePosition3(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
        _isFunction3(parsedEnd) && (parsedEnd = parsedEnd(self));
        if (_isString3(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString3(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset2 = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString3(parsedStart) ? parsedStart : (containerAnimation ? gsap5.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
            parsedEndTrigger = trigger;
          }
        }
        parsedEnd = _parseClamp(parsedEnd, "end", self);
        end = Math.max(start, _parsePosition3(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -1e-3;
        offset2 = 0;
        i2 = triggerIndex;
        while (i2--) {
          curTrigger = _triggers[i2];
          curPin = curTrigger.pin;
          if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
            cs2 = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
            if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
              offset2 += cs2 * (1 - curTrigger.progress);
            }
            curPin === pin && (otherPinOffset += cs2);
          }
        }
        start += offset2;
        end += offset2;
        self._startClamp && (self._startClamp += offset2);
        if (self._endClamp && !_refreshingAll) {
          self._endClamp = end || -1e-3;
          end = Math.min(end, _maxScroll(scroller, direction));
        }
        change = end - start || (start -= 0.01) && 1e-3;
        if (isFirstRefresh) {
          prevProgress = gsap5.utils.clamp(0, 1, gsap5.utils.normalize(start, end, prevScroll));
        }
        self._pinPush = otherPinOffset;
        if (markerStart && offset2) {
          cs2 = {};
          cs2[direction.a] = "+=" + offset2;
          pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
          gsap5.set([markerStart, markerEnd], cs2);
        }
        if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
          cs2 = _getComputedStyle3(pin);
          isVertical = direction === _vertical;
          scroll = scrollFunc();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          if (!max && end > 1) {
            forcedOverflow = (isViewport ? _doc5.scrollingElement || _docEl2 : scroller).style;
            forcedOverflow = {
              style: forcedOverflow,
              value: forcedOverflow["overflow" + direction.a.toUpperCase()]
            };
            if (isViewport && _getComputedStyle3(_body2)["overflow" + direction.a.toUpperCase()] !== "scroll") {
              forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
            }
          }
          _swapPinIn(pin, spacer, cs2);
          pinState = _getState(pin);
          bounds = _getBounds(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i2 = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            if (i2) {
              spacerState.push(direction.d, i2 + _px);
              spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i2 + _px);
            }
            _setState(spacerState);
            if (pinnedContainer) {
              _triggers.forEach(function(t2) {
                if (t2.pin === pinnedContainer && t2.vars.pinSpacing !== false) {
                  t2._subPinOffset = true;
                }
              });
            }
            useFixedPosition && scrollFunc(prevScroll);
          } else {
            i2 = _getSize(pin, direction);
            i2 && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i2 + _px);
          }
          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs2[_padding];
            override[_padding + _Top] = cs2[_padding + _Top];
            override[_padding + _Right] = cs2[_padding + _Right];
            override[_padding + _Bottom] = cs2[_padding + _Bottom];
            override[_padding + _Left] = cs2[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
            _refreshingAll && scrollFunc(0);
          }
          if (animation) {
            initted = animation._initted;
            _suppressOverwrites2(1);
            animation.render(animation.duration(), true, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            pinMoves = Math.abs(change - pinChange) > 1;
            useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.render(0, true, true);
            initted || animation.invalidate(true);
            animation.parent || animation.totalTime(animation.totalTime());
            _suppressOverwrites2(0);
          } else {
            pinChange = change;
          }
          forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
        } else if (trigger && scrollFunc() && !containerAnimation) {
          bounds = trigger.parentNode;
          while (bounds && bounds !== _body2) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }
            bounds = bounds.parentNode;
          }
        }
        revertedPins && revertedPins.forEach(function(t2) {
          return t2.revert(false, true);
        });
        self.start = start;
        self.end = end;
        scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
        if (!containerAnimation && !_refreshingAll) {
          scroll1 < prevScroll && scrollFunc(prevScroll);
          self.scroll.rec = 0;
        }
        self.revert(false, true);
        lastRefresh = _getTime2();
        if (snapDelayedCall) {
          lastSnap = -1;
          snapDelayedCall.restart(true);
        }
        _refreshing = 0;
        animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
        if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh) {
          animation && !isToggle && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap5.utils.normalize(start, end, 0) : prevProgress, true);
          self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
        }
        pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
        scrubTween && scrubTween.invalidate();
        if (!isNaN(markerStartOffset)) {
          markerStartOffset -= gsap5.getProperty(markerStartTrigger, direction.p);
          markerEndOffset -= gsap5.getProperty(markerEndTrigger, direction.p);
          _shiftMarker(markerStartTrigger, direction, markerStartOffset);
          _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
          _shiftMarker(markerEndTrigger, direction, markerEndOffset);
          _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
        }
        isFirstRefresh && !_refreshingAll && self.update();
        if (onRefresh && !_refreshingAll && !executingOnRefresh) {
          executingOnRefresh = true;
          onRefresh(self);
          executingOnRefresh = false;
        }
      };
      self.getVelocity = function() {
        return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
      };
      self.endAnimation = function() {
        _endAnimation(self.callbackAnimation);
        if (animation) {
          scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
        }
      };
      self.labelToScroll = function(label) {
        return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
      };
      self.getTrailing = function(name) {
        var i2 = _triggers.indexOf(self), a2 = self.direction > 0 ? _triggers.slice(0, i2).reverse() : _triggers.slice(i2 + 1);
        return (_isString3(name) ? a2.filter(function(t2) {
          return t2.vars.preventOverlaps === name;
        }) : a2).filter(function(t2) {
          return self.direction > 0 ? t2.end <= start : t2.start >= end;
        });
      };
      self.update = function(reset, recordVelocity, forceFake) {
        if (containerAnimation && !forceFake && !reset) {
          return;
        }
        var scroll = _refreshingAll === true ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = containerAnimation ? scrollFunc() : scroll;
          if (snap3) {
            snap22 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }
        if (anticipatePin && pin && !_refreshing && !_startup2 && _lastScrollTime) {
          if (!clipped && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
            clipped = 1e-4;
          } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
            clipped = 0.9999;
          }
        }
        if (clipped !== prevProgress2 && self.enabled) {
          isActive = self.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress2 && prevProgress2 < 1;
          toggled = isActive !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress2;
          self.direction = clipped > prevProgress2 ? 1 : -1;
          self.progress = clipped;
          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
            }
          }
          preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction3(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t2) {
            return t2.endAnimation();
          }));
          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup2) {
              scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
              if (scrubTween.resetTo) {
                scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
              } else {
                scrubTween.vars.totalProgress = clipped;
                scrubTween.invalidate().restart();
              }
            } else if (animation) {
              animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
            }
          }
          if (pin) {
            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
            if (!useFixedPosition) {
              pinSetter(_round3(pinStart + pinChange * clipped));
            } else if (stateChanged) {
              isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
              if (pinReparent) {
                if (!reset && (isActive || isAtMax)) {
                  var bounds = _getBounds(pin, true), _offset = scroll - start;
                  _reparent(pin, _body2, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }
              _setState(isActive || isAtMax ? pinActiveState : pinState);
              pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
            }
          }
          snap3 && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
          toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray2(toggleClass.targets).forEach(function(el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
          });
          onUpdate && !isToggle && !reset && onUpdate(self);
          if (stateChanged && !_refreshing) {
            if (isToggle) {
              if (isTakingAction) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else if (action === "restart") {
                  animation.restart(true);
                } else {
                  animation[action]();
                }
              }
              onUpdate && onUpdate(self);
            }
            if (toggled || !_limitCallbacks) {
              onToggle && toggled && _callback3(self, onToggle);
              callbacks[toggleState] && _callback3(self, callbacks[toggleState]);
              once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && _callback3(self, callbacks[toggleState]);
              }
            }
            if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber3(fastScrollEnd) ? fastScrollEnd : 2500)) {
              _endAnimation(self.callbackAnimation);
              scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self);
          }
        }
        if (markerEndSetter) {
          var n2 = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n2 + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n2);
        }
        caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
      };
      self.enable = function(reset, refresh) {
        if (!self.enabled) {
          self.enabled = true;
          _addListener3(scroller, "resize", _onResize);
          isViewport || _addListener3(scroller, "scroll", _onScroll3);
          onRefreshInit && _addListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (reset !== false) {
            self.progress = prevProgress = 0;
            scroll1 = scroll2 = lastSnap = scrollFunc();
          }
          refresh !== false && self.refresh();
        }
      };
      self.getTween = function(snap4) {
        return snap4 && tweenTo ? tweenTo.tween : scrubTween;
      };
      self.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
        if (containerAnimation) {
          var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
          newStart = st.start + _change * newStart / duration;
          newEnd = st.start + _change * newEnd / duration;
        }
        self.refresh(false, false, {
          start: _keepClamp(newStart, keepClamp && !!self._startClamp),
          end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
        }, pinOffset);
        self.update();
      };
      self.adjustPinSpacing = function(amount) {
        if (spacerState && amount) {
          var i2 = spacerState.indexOf(direction.d) + 1;
          spacerState[i2] = parseFloat(spacerState[i2]) + amount + _px;
          spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
          _setState(spacerState);
        }
      };
      self.disable = function(reset, allowAnimation) {
        if (self.enabled) {
          reset !== false && self.revert(true, true);
          self.enabled = self.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }
          if (!isViewport) {
            var i2 = _triggers.length;
            while (i2--) {
              if (_triggers[i2].scroller === scroller && _triggers[i2] !== self) {
                return;
              }
            }
            _removeListener3(scroller, "resize", _onResize);
            isViewport || _removeListener3(scroller, "scroll", _onScroll3);
          }
        }
      };
      self.kill = function(revert, allowAnimation) {
        self.disable(revert, allowAnimation);
        scrubTween && !allowAnimation && scrubTween.kill();
        id && delete _ids[id];
        var i2 = _triggers.indexOf(self);
        i2 >= 0 && _triggers.splice(i2, 1);
        i2 === _i && _direction > 0 && _i--;
        i2 = 0;
        _triggers.forEach(function(t2) {
          return t2.scroller === self.scroller && (i2 = 1);
        });
        i2 || _refreshingAll || (self.scroll.rec = 0);
        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.revert({
            kill: false
          });
          allowAnimation || animation.kill();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
          return m.parentNode && m.parentNode.removeChild(m);
        });
        _primary === self && (_primary = 0);
        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i2 = 0;
          _triggers.forEach(function(t2) {
            return t2.pin === pin && i2++;
          });
          i2 || (pinCache.spacer = 0);
        }
        vars.onKill && vars.onKill(self);
      };
      _triggers.push(self);
      self.enable(false, false);
      customRevertReturn && customRevertReturn(self);
      if (animation && animation.add && !change) {
        var updateFunc = self.update;
        self.update = function() {
          self.update = updateFunc;
          start || end || self.refresh();
        };
        gsap5.delayedCall(0.01, self.update);
        change = 0.01;
        start = end = 0;
      } else {
        self.refresh();
      }
      pin && _queueRefreshAll();
    };
    ScrollTrigger3.register = function register2(core) {
      if (!_coreInitted5) {
        gsap5 = core || _getGSAP5();
        _windowExists5() && window.document && ScrollTrigger3.enable();
        _coreInitted5 = _enabled;
      }
      return _coreInitted5;
    };
    ScrollTrigger3.defaults = function defaults2(config3) {
      if (config3) {
        for (var p in config3) {
          _defaults2[p] = config3[p];
        }
      }
      return _defaults2;
    };
    ScrollTrigger3.disable = function disable(reset, kill) {
      _enabled = 0;
      _triggers.forEach(function(trigger) {
        return trigger[kill ? "kill" : "disable"](reset);
      });
      _removeListener3(_win5, "wheel", _onScroll3);
      _removeListener3(_doc5, "scroll", _onScroll3);
      clearInterval(_syncInterval);
      _removeListener3(_doc5, "touchcancel", _passThrough3);
      _removeListener3(_body2, "touchstart", _passThrough3);
      _multiListener(_removeListener3, _doc5, "pointerdown,touchstart,mousedown", _pointerDownHandler);
      _multiListener(_removeListener3, _doc5, "pointerup,touchend,mouseup", _pointerUpHandler);
      _resizeDelay.kill();
      _iterateAutoRefresh(_removeListener3);
      for (var i2 = 0; i2 < _scrollers.length; i2 += 3) {
        _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 1]);
        _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 2]);
      }
    };
    ScrollTrigger3.enable = function enable() {
      _win5 = window;
      _doc5 = document;
      _docEl2 = _doc5.documentElement;
      _body2 = _doc5.body;
      if (gsap5) {
        _toArray2 = gsap5.utils.toArray;
        _clamp4 = gsap5.utils.clamp;
        _context4 = gsap5.core.context || _passThrough3;
        _suppressOverwrites2 = gsap5.core.suppressOverwrites || _passThrough3;
        _scrollRestoration = _win5.history.scrollRestoration || "auto";
        _lastScroll = _win5.pageYOffset;
        gsap5.core.globals("ScrollTrigger", ScrollTrigger3);
        if (_body2) {
          _enabled = 1;
          _div100vh = document.createElement("div");
          _div100vh.style.height = "100vh";
          _div100vh.style.position = "absolute";
          _refresh100vh();
          _rafBugFix();
          Observer.register(gsap5);
          ScrollTrigger3.isTouch = Observer.isTouch;
          _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
          _ignoreMobileResize = Observer.isTouch === 1;
          _addListener3(_win5, "wheel", _onScroll3);
          _root2 = [_win5, _doc5, _docEl2, _body2];
          if (gsap5.matchMedia) {
            ScrollTrigger3.matchMedia = function(vars) {
              var mm = gsap5.matchMedia(), p;
              for (p in vars) {
                mm.add(p, vars[p]);
              }
              return mm;
            };
            gsap5.addEventListener("matchMediaInit", function() {
              return _revertAll();
            });
            gsap5.addEventListener("matchMediaRevert", function() {
              return _revertRecorded();
            });
            gsap5.addEventListener("matchMedia", function() {
              _refreshAll(0, 1);
              _dispatch3("matchMedia");
            });
            gsap5.matchMedia("(orientation: portrait)", function() {
              _setBaseDimensions();
              return _setBaseDimensions;
            });
          } else {
            console.warn("Requires GSAP 3.11.0 or later");
          }
          _setBaseDimensions();
          _addListener3(_doc5, "scroll", _onScroll3);
          var bodyStyle = _body2.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap5.core.Animation.prototype, bounds, i2;
          AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
            value: function value() {
              return this.time(-0.01, true);
            }
          });
          bodyStyle.borderTopStyle = "solid";
          bounds = _getBounds(_body2);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
          _syncInterval = setInterval(_sync, 250);
          gsap5.delayedCall(0.5, function() {
            return _startup2 = 0;
          });
          _addListener3(_doc5, "touchcancel", _passThrough3);
          _addListener3(_body2, "touchstart", _passThrough3);
          _multiListener(_addListener3, _doc5, "pointerdown,touchstart,mousedown", _pointerDownHandler);
          _multiListener(_addListener3, _doc5, "pointerup,touchend,mouseup", _pointerUpHandler);
          _transformProp2 = gsap5.utils.checkPrefix("transform");
          _stateProps.push(_transformProp2);
          _coreInitted5 = _getTime2();
          _resizeDelay = gsap5.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc5, "visibilitychange", function() {
            var w = _win5.innerWidth, h2 = _win5.innerHeight;
            if (_doc5.hidden) {
              _prevWidth = w;
              _prevHeight = h2;
            } else if (_prevWidth !== w || _prevHeight !== h2) {
              _onResize();
            }
          }, _doc5, "DOMContentLoaded", _refreshAll, _win5, "load", _refreshAll, _win5, "resize", _onResize];
          _iterateAutoRefresh(_addListener3);
          _triggers.forEach(function(trigger) {
            return trigger.enable(0, 1);
          });
          for (i2 = 0; i2 < _scrollers.length; i2 += 3) {
            _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 1]);
            _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 2]);
          }
        }
      }
    };
    ScrollTrigger3.config = function config3(vars) {
      "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
      if ("autoRefreshEvents" in vars) {
        _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };
    ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
      var t2 = _getTarget(target), i2 = _scrollers.indexOf(t2), isViewport = _isViewport3(t2);
      if (~i2) {
        _scrollers.splice(i2, isViewport ? 6 : 2);
      }
      if (vars) {
        isViewport ? _proxies.unshift(_win5, vars, _body2, vars, _docEl2, vars) : _proxies.unshift(t2, vars);
      }
    };
    ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
      _triggers.forEach(function(t2) {
        return t2._ctx && t2._ctx.query === query && t2._ctx.kill(true, true);
      });
    };
    ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
      var bounds = (_isString3(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
      return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win5.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win5.innerHeight;
    };
    ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
      _isString3(element) && (element = _getTarget(element));
      var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
      return horizontal ? (bounds.left + offset) / _win5.innerWidth : (bounds.top + offset) / _win5.innerHeight;
    };
    ScrollTrigger3.killAll = function killAll(allowListeners) {
      _triggers.slice(0).forEach(function(t2) {
        return t2.vars.id !== "ScrollSmoother" && t2.kill();
      });
      if (allowListeners !== true) {
        var listeners = _listeners2.killAll || [];
        _listeners2 = {};
        listeners.forEach(function(f) {
          return f();
        });
      }
    };
    return ScrollTrigger3;
  }();
  ScrollTrigger2.version = "3.12.5";
  ScrollTrigger2.saveStyles = function(targets) {
    return targets ? _toArray2(targets).forEach(function(target) {
      if (target && target.style) {
        var i2 = _savedStyles.indexOf(target);
        i2 >= 0 && _savedStyles.splice(i2, 5);
        _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap5.core.getCache(target), _context4());
      }
    }) : _savedStyles;
  };
  ScrollTrigger2.revert = function(soft, media) {
    return _revertAll(!soft, media);
  };
  ScrollTrigger2.create = function(vars, animation) {
    return new ScrollTrigger2(vars, animation);
  };
  ScrollTrigger2.refresh = function(safe) {
    return safe ? _onResize() : (_coreInitted5 || ScrollTrigger2.register()) && _refreshAll(true);
  };
  ScrollTrigger2.update = function(force) {
    return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
  };
  ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
  ScrollTrigger2.maxScroll = function(element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getScrollFunc = function(element, horizontal) {
    return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getById = function(id) {
    return _ids[id];
  };
  ScrollTrigger2.getAll = function() {
    return _triggers.filter(function(t2) {
      return t2.vars.id !== "ScrollSmoother";
    });
  };
  ScrollTrigger2.isScrolling = function() {
    return !!_lastScrollTime;
  };
  ScrollTrigger2.snapDirectional = _snapDirectional;
  ScrollTrigger2.addEventListener = function(type, callback) {
    var a2 = _listeners2[type] || (_listeners2[type] = []);
    ~a2.indexOf(callback) || a2.push(callback);
  };
  ScrollTrigger2.removeEventListener = function(type, callback) {
    var a2 = _listeners2[type], i2 = a2 && a2.indexOf(callback);
    i2 >= 0 && a2.splice(i2, 1);
  };
  ScrollTrigger2.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
      var elements = [], triggers = [], delay = gsap5.delayedCall(interval, function() {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function(self) {
        elements.length || delay.restart(true);
        elements.push(self.trigger);
        triggers.push(self);
        batchMax <= elements.length && delay.progress(1);
      };
    }, p;
    for (p in vars) {
      varsCopy[p] = p.substr(0, 2) === "on" && _isFunction3(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    }
    if (_isFunction3(batchMax)) {
      batchMax = batchMax();
      _addListener3(ScrollTrigger2, "refresh", function() {
        return batchMax = vars.batchMax();
      });
    }
    _toArray2(targets).forEach(function(target) {
      var config3 = {};
      for (p in varsCopy) {
        config3[p] = varsCopy[p];
      }
      config3.trigger = target;
      result.push(ScrollTrigger2.create(config3));
    });
    return result;
  };
  var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
  };
  var _allowNativePanning = function _allowNativePanning2(target, direction) {
    if (direction === true) {
      target.style.removeProperty("touch-action");
    } else {
      target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
    }
    target === _docEl2 && _allowNativePanning2(_body2, direction);
  };
  var _overflow = {
    auto: 1,
    scroll: 1
  };
  var _nestedScroll = function _nestedScroll2(_ref5) {
    var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap5.core.getCache(node), time = _getTime2(), cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
      while (node && node !== _body2 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle3(node)).overflowY] || _overflow[cs.overflowX]))) {
        node = node.parentNode;
      }
      cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle3(node)).overflowY] || _overflow[cs.overflowX]);
      cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
      event.stopPropagation();
      event._gsapAllow = true;
    }
  };
  var _inputObserver = function _inputObserver2(target, type, inputs, nested) {
    return Observer.create({
      target,
      capture: true,
      debounce: false,
      lockAxis: true,
      type,
      onWheel: nested = nested && _nestedScroll,
      onPress: nested,
      onDrag: nested,
      onScroll: nested,
      onEnable: function onEnable() {
        return inputs && _addListener3(_doc5, Observer.eventTypes[0], _captureInputs, false, true);
      },
      onDisable: function onDisable() {
        return _removeListener3(_doc5, Observer.eventTypes[0], _captureInputs, true);
      }
    });
  };
  var _inputExp = /(input|label|select|textarea)/i;
  var _inputIsFocused;
  var _captureInputs = function _captureInputs2(e3) {
    var isInput = _inputExp.test(e3.target.tagName);
    if (isInput || _inputIsFocused) {
      e3._gsapAllow = true;
      _inputIsFocused = isInput;
    }
  };
  var _getScrollNormalizer = function _getScrollNormalizer2(vars) {
    _isObject3(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self, maxY, target = _getTarget(vars.target) || _docEl2, smoother = gsap5.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win5.visualViewport ? _win5.visualViewport.scale * _win5.visualViewport.width : _win5.outerWidth) / _win5.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction3(momentum) ? function() {
      return momentum(self);
    } : function() {
      return momentum || 2.8;
    }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
      return skipTouchMove = false;
    }, scrollClampX = _passThrough3, scrollClampY = _passThrough3, updateClamps = function updateClamps2() {
      maxY = _maxScroll(target, _vertical);
      scrollClampY = _clamp4(_fixIOSBug ? 1 : 0, maxY);
      normalizeScrollX && (scrollClampX = _clamp4(0, _maxScroll(target, _horizontal)));
      lastRefreshID = _refreshID;
    }, removeContentOffset = function removeContentOffset2() {
      content._gsap.y = _round3(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
      content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
    }, ignoreDrag = function ignoreDrag2() {
      if (skipTouchMove) {
        requestAnimationFrame(resumeTouchMove);
        var offset = _round3(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
        if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
          scrollFuncY.offset = scroll - scrollFuncY.v;
          var y = _round3((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
          content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
          content._gsap.y = y + "px";
          scrollFuncY.cacheID = _scrollers.cache;
          _updateAll();
        }
        return true;
      }
      scrollFuncY.offset && removeContentOffset();
      skipTouchMove = true;
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize2 = function onResize3() {
      updateClamps();
      if (tween.isActive() && tween.vars.scrollY > maxY) {
        scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
      }
    };
    content && gsap5.set(content, {
      y: "+=0"
    });
    vars.ignoreCheck = function(e3) {
      return _fixIOSBug && e3.type === "touchmove" && ignoreDrag(e3) || scale > 1.05 && e3.type !== "touchstart" || self.isGesturing || e3.touches && e3.touches.length > 1;
    };
    vars.onPress = function() {
      skipTouchMove = false;
      var prevScale = scale;
      scale = _round3((_win5.visualViewport && _win5.visualViewport.scale || 1) / initialScale);
      tween.pause();
      prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
      startScrollX = scrollFuncX();
      startScrollY = scrollFuncY();
      updateClamps();
      lastRefreshID = _refreshID;
    };
    vars.onRelease = vars.onGestureStart = function(self2, wasDragging) {
      scrollFuncY.offset && removeContentOffset();
      if (!wasDragging) {
        onStopDelayedCall.restart(true);
      } else {
        _scrollers.cache++;
        var dur = resolveMomentumDuration(), currentScroll, endScroll;
        if (normalizeScrollX) {
          currentScroll = scrollFuncX();
          endScroll = currentScroll + dur * 0.05 * -self2.velocityX / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
          tween.vars.scrollX = scrollClampX(endScroll);
        }
        currentScroll = scrollFuncY();
        endScroll = currentScroll + dur * 0.05 * -self2.velocityY / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
        tween.vars.scrollY = scrollClampY(endScroll);
        tween.invalidate().duration(dur).play(0.01);
        if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
          gsap5.to({}, {
            onUpdate: onResize2,
            duration: dur
          });
        }
      }
      onRelease && onRelease(self2);
    };
    vars.onWheel = function() {
      tween._ts && tween.pause();
      if (_getTime2() - wheelRefresh > 1e3) {
        lastRefreshID = 0;
        wheelRefresh = _getTime2();
      }
    };
    vars.onChange = function(self2, dx, dy, xArray, yArray) {
      _refreshID !== lastRefreshID && updateClamps();
      dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self2.startX - self2.x) : scrollFuncX() + dx - xArray[1]));
      if (dy) {
        scrollFuncY.offset && removeContentOffset();
        var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self2.startY - self2.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
        isTouch && y !== yClamped && (startScrollY += yClamped - y);
        scrollFuncY(yClamped);
      }
      (dy || dx) && _updateAll();
    };
    vars.onEnable = function() {
      _allowNativePanning(target, normalizeScrollX ? false : "x");
      ScrollTrigger2.addEventListener("refresh", onResize2);
      _addListener3(_win5, "resize", onResize2);
      if (scrollFuncY.smooth) {
        scrollFuncY.target.style.scrollBehavior = "auto";
        scrollFuncY.smooth = scrollFuncX.smooth = false;
      }
      inputObserver.enable();
    };
    vars.onDisable = function() {
      _allowNativePanning(target, true);
      _removeListener3(_win5, "resize", onResize2);
      ScrollTrigger2.removeEventListener("refresh", onResize2);
      inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self = new Observer(vars);
    self.iOS = _fixIOSBug;
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
    _fixIOSBug && gsap5.ticker.add(_passThrough3);
    onStopDelayedCall = self._dc;
    tween = gsap5.to(self, {
      ease: "power4",
      paused: true,
      inherit: false,
      scrollX: normalizeScrollX ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
          return tween.pause();
        })
      },
      onUpdate: _updateAll,
      onComplete: onStopDelayedCall.vars.onComplete
    });
    return self;
  };
  ScrollTrigger2.sort = function(func) {
    return _triggers.sort(func || function(a2, b) {
      return (a2.vars.refreshPriority || 0) * -1e6 + a2.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
    });
  };
  ScrollTrigger2.observe = function(vars) {
    return new Observer(vars);
  };
  ScrollTrigger2.normalizeScroll = function(vars) {
    if (typeof vars === "undefined") {
      return _normalizer2;
    }
    if (vars === true && _normalizer2) {
      return _normalizer2.enable();
    }
    if (vars === false) {
      _normalizer2 && _normalizer2.kill();
      _normalizer2 = vars;
      return;
    }
    var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
    _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
    _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
    return normalizer;
  };
  ScrollTrigger2.core = {
    // smaller file size way to leverage in ScrollSmoother and Observer
    _getVelocityProp,
    _inputObserver,
    _scrollers,
    _proxies,
    bridge: {
      // when normalizeScroll sets the scroll position (ss = setScroll)
      ss: function ss() {
        _lastScrollTime || _dispatch3("scrollStart");
        _lastScrollTime = _getTime2();
      },
      // a way to get the _refreshing value in Observer
      ref: function ref() {
        return _refreshing;
      }
    }
  };
  _getGSAP5() && gsap5.registerPlugin(ScrollTrigger2);

  // assets/scripts/modules/MaskLines.js
  gsapWithCSS.registerPlugin(SplitText);
  gsapWithCSS.registerPlugin(ScrollTrigger2);
  var MaskLines_default = class extends _default {
    constructor(m) {
      super(m);
      this.onResizeBind = this.onResize.bind(this);
      this.onProgressBind = this.onProgress.bind(this);
      this.delay = parseFloat(this.getData("delay")) || 0;
      this.stagger = parseFloat(this.getData("stagger")) || 0.1;
    }
    ///////////////
    // Lifecycle
    ///////////////
    init() {
      this.bindEvents();
      whenReady(FONT.EAGER).then((fonts) => {
        this.onFontsLoaded(fonts);
      });
    }
    destroy() {
      super.destroy();
      this.unbindEvents();
    }
    ///////////////
    // Events
    ///////////////
    unbindEvents() {
      window.removeEventListener("resize", this.onResizeBind);
      window.removeEventListener("progressEvent", this.onProgressBind);
    }
    bindEvents() {
      window.addEventListener("resize", this.onResizeBind);
      window.addEventListener("progressEvent", this.onProgressBind);
    }
    ///////////////
    // Callbacks
    ///////////////
    onResize() {
      this.reSplit();
    }
    onFontsLoaded(fonts) {
      this.reSplit();
    }
    onProgress(e3) {
      const { progress } = e3.detail;
      this.splitObject.lines.forEach((line, i2) => {
        const { from, to } = this.metrics[i2];
        const x = gsapWithCSS.utils.clamp(-25, 0, gsapWithCSS.utils.mapRange(from, to, -25, 0, progress));
        const opacity = gsapWithCSS.utils.clamp(0, 1, gsapWithCSS.utils.mapRange(from, to, 0, 1, progress));
        gsapWithCSS.set(line, { x, opacity });
      });
    }
    ///////////////
    // Methods
    ///////////////s
    split() {
      this.splitObject = new SplitText(this.el, {
        type: "lines",
        tag: "span"
      });
      this.metrics = this.splitObject.lines.map((line, i2, array) => {
        const from = i2 / array.length;
        const to = from + 1 / array.length;
        return {
          from,
          to
        };
      });
    }
    reSplit() {
      var _a, _b;
      (_b = (_a = this.splitObject) == null ? void 0 : _a.revert) == null ? void 0 : _b.call(_a);
      requestAnimationFrame(() => {
        this.split();
      });
    }
  };

  // assets/scripts/modules/FadeInText.js
  gsapWithCSS.registerPlugin(SplitText);
  var FadeInText_default = class extends _default {
    constructor(m) {
      super(m);
      console.log("constructor");
      this.onFadeinTextProgressBind = this.onFadeinTextProgress.bind(this);
      this.onResizeBind = this.onResize.bind(this);
      this.$texts = this.el;
      this.windowWidth = window.innerWidth;
      this.progress = 0;
      this.metrics = [];
      this.baseColor = getComputedStyle(this.el).getPropertyValue("--color-cta-fadein");
      this.targetColor = getComputedStyle(this.el).getPropertyValue("--color");
    }
    ///////////////
    // Lifecycle
    ///////////////
    init() {
      this.bindEvents();
      this.splitText();
      this.computeProgress();
    }
    destroy() {
      this.unbindEvents();
    }
    ///////////////
    // Events
    ///////////////
    bindEvents() {
      window.addEventListener("fadeinTextProgress", this.onFadeinTextProgressBind);
      window.addEventListener("resize", this.onResizeBind);
    }
    unbindEvents() {
      window.removeEventListener("fadeinTextProgress", this.onFadeinTextProgressBind);
      window.removeEventListener("resize", this.onResizeBind);
    }
    ///////////////
    // Callback
    ///////////////
    onFadeinTextProgress(e3) {
      const { target, progress } = e3.detail;
      if (!this.el.contains(target) || !this.split)
        return;
      this.progress = progress;
      this.computeProgress();
    }
    onResize({ width }) {
      if (this.windowWidth == width || this.split.lines.length == 0)
        return;
      this.windowWidth = width;
      this.metrics = [];
      this.split.revert();
      requestAnimationFrame(() => {
        this.splitText();
      });
    }
    ///////////////
    // Methods
    ///////////////
    splitText() {
      this.split = new SplitText(this.$texts, {
        type: "lines",
        linesClass: "c-fadein-text_line"
      });
      const widths = this.split.lines.map((line) => line.getBoundingClientRect().width);
      const totalWidth = widths.reduce((total, width) => {
        return total += width;
      }, 0);
      let widthIncrementor = 0;
      for (let index = 0; index < this.split.lines.length; index++) {
        const from = widthIncrementor / totalWidth;
        const ratio = widths[index] / totalWidth;
        widthIncrementor += widths[index];
        this.metrics.push({
          from,
          to: from + ratio
        });
      }
    }
    computeProgress() {
      for (let index = 0; index < this.split.lines.length; index++) {
        const $line = this.split.lines[index];
        const { from, to } = this.metrics[index];
        const clampedProgress = gsapWithCSS.utils.clamp(0, 1, gsapWithCSS.utils.mapRange(from, to, 0, 1, this.progress));
        $line.style.setProperty("--progress", `${clampedProgress}`);
        this.updateGradient($line, clampedProgress);
      }
    }
    updateGradient($item, progress) {
      const offset = 100;
      const x = progress;
      const g1 = 0;
      const g5 = 100;
      const g3 = gsapWithCSS.utils.mapRange(0, 1, -offset, 100 + offset, x);
      const g2 = Math.max(g3 - offset, 0);
      const g4 = Math.min(g3 + offset, 100);
      const background = `linear-gradient(to right, ${this.targetColor} ${g1}%, ${this.targetColor} ${g2}%, ${this.targetColor} ${g3}%, ${this.baseColor} ${g4}%, ${this.baseColor} ${g5}%)`;
      $item.style.setProperty("--background", `${background}`);
    }
  };

  // assets/scripts/modules/HoverShuffle.js
  var DURATION = 0.25;
  var SHUFFLE_PATTERN = new RegExp("\\p{Extended_Pictographic}|\\r|\\n|.", "gu");
  var HoverShuffle_default = class extends _default {
    constructor(m) {
      super(m);
    }
    init() {
      this.onItemEnterBind = this.onItemEnter.bind(this);
      this.onItemLeaveBind = this.onItemLeave.bind(this);
      this.update();
    }
    update() {
      this.reset();
      this.el.addEventListener("mouseenter", this.onItemEnterBind);
      this.el.addEventListener("mouseleave", this.onItemLeaveBind);
    }
    reset() {
      this.el.removeEventListener("mouseenter", this.onItemEnterBind);
      this.el.removeEventListener("mouseleave", this.onItemLeaveBind);
    }
    shuffle(input) {
      var a2 = typeof input == "string" ? input.split("") : input, n2 = a2.length;
      for (var i2 = n2 - 1; i2 > 0; i2--) {
        var j = Math.floor(Math.random() * (i2 + 1));
        var tmp = a2[i2];
        a2[i2] = a2[j];
        a2[j] = tmp;
      }
      return a2.join("");
    }
    onItemEnter(e3) {
      const $el = e3.currentTarget;
      let targets = [];
      if ($el.dataset.hoverShuffle == "children") {
        $el.querySelectorAll("[data-hover-shuffle-child]").forEach((child) => {
          targets.push(child);
          child.setAttribute("aria-label", child.innerText);
        });
      } else {
        targets = [$el];
        $el.setAttribute("aria-label", $el.innerText);
      }
      this.tw = gsapWithCSS.timeline({
        onComplete: () => {
          targets.forEach(($target) => {
            $target.innerText = $target.getAttribute("aria-label");
            $target.removeAttribute("aria-label");
          });
        }
      });
      const shufflePerSecond = 4;
      const shuffleDelay = DURATION / shufflePerSecond;
      for (let i2 = 0; i2 < shufflePerSecond; i2++) {
        for (let $target of targets) {
          this.tw.add(() => {
            this.shuffleElementTexts($target, this.shuffle);
          }, shuffleDelay * i2);
        }
      }
    }
    onItemLeave(e3) {
      this.tw && this.tw.kill();
      const $el = e3.currentTarget;
      let targets = [];
      if ($el.dataset.hoverShuffle == "children") {
        $el.querySelectorAll("[data-hover-shuffle-child]").forEach((child) => {
          targets.push(child);
        });
      } else {
        targets = [$el];
      }
      targets.forEach(($target) => {
        if ($target.getAttribute("aria-label"))
          $target.innerText = $target.getAttribute("aria-label");
        $target.removeAttribute("aria-label");
      });
    }
    shuffleElementTexts(item, shuffleFn) {
      if (!item.children.length && item.innerText) {
        const words = item.innerText.replace("\n", " \n ").split(" ");
        for (let i2 = 0; i2 < words.length; i2++) {
          const chars = [...words[i2].matchAll(SHUFFLE_PATTERN)].map((item2) => item2[0]);
          words[i2] = shuffleFn(chars);
        }
        item.innerText = words.join(" ");
      }
    }
  };

  // assets/scripts/globals.js
  var import_svg4everybody = __toESM(require_svg4everybody(), 1);
  var gridHelper2;
  (() => __async(void 0, null, function* () {
    if (ENV.IS_DEV) {
      const gridHelperModule = yield Promise.resolve().then(() => (init_grid_helper(), grid_helper_exports));
      gridHelper2 = gridHelperModule == null ? void 0 : gridHelperModule.gridHelper;
    }
  }))();
  function globals_default() {
    (0, import_svg4everybody.default)();
    gridHelper2 == null ? void 0 : gridHelper2();
  }

  // assets/scripts/utils/tickers.js
  var debounce = (callback, delay, immediate = false) => {
    let timeout = null;
    return (...args) => {
      clearTimeout(timeout);
      const later = () => {
        timeout = null;
        if (!immediate) {
          callback(...args);
        }
      };
      if (immediate && !timeout) {
        callback(...args);
      }
      timeout = setTimeout(later, delay);
    };
  };

  // assets/scripts/app.js
  var app = new main_esm_default({
    modules: modules_exports
  });
  function init5() {
    bindEvents();
    onResize();
    document.documentElement.style.setProperty(
      "--vh-initial",
      `${window.innerHeight * 0.01}px`
    );
    globals_default();
    app.init(app);
    setTimeout(() => {
      $html.classList.add(CSS_CLASS.FIRST_LOADED);
      $html.classList.add(CSS_CLASS.LOADED);
      $html.classList.remove(CSS_CLASS.LOADING);
      setTimeout(() => {
        $html.classList.add(CSS_CLASS.READY);
      }, 100);
    }, 100);
    if (isFontLoadingAPIAvailable) {
      loadFonts(FONT.EAGER, ENV.IS_DEV).then((eagerFonts) => {
        $html.classList.add(CSS_CLASS.FONTS_LOADED);
        if (ENV.IS_DEV) {
          console.group("Eager fonts loaded!", eagerFonts.length, "/", document.fonts.size);
          console.group("State of eager fonts:");
          eagerFonts.forEach((font) => console.log(
            font.family,
            font.style,
            font.weight,
            font.status
            /*, font*/
          ));
          console.groupEnd();
          console.group("State of all fonts:");
          document.fonts.forEach((font) => console.log(
            font.family,
            font.style,
            font.weight,
            font.status
            /*, font*/
          ));
          console.groupEnd();
        }
      });
    }
  }
  function bindEvents() {
    const resizeEndEvent = new CustomEvent(CUSTOM_EVENT.RESIZE_END);
    window.addEventListener(
      "resize",
      debounce(() => {
        window.dispatchEvent(resizeEndEvent);
      }, 200, false)
    );
    window.addEventListener(
      "resize",
      onResize
    );
    window.addEventListener(
      "orientationchange",
      debounce(() => {
        onOnrientationChange();
      }, 200, false)
    );
  }
  function onOnrientationChange() {
    document.documentElement.style.setProperty(
      "--vh-initial",
      `${window.innerHeight * 0.01}px`
    );
  }
  function onResize() {
    let vw = $html.offsetWidth * 0.01;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vw", `${vw}px`);
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  window.addEventListener("load", (event) => {
    init5();
  });
})();
/*! Bundled license information:

svg4everybody/dist/svg4everybody.js:
  (*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/strings.js:
  (*!
   * strings: 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrambleTextPlugin.js:
  (*!
   * ScrambleTextPlugin 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText: 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=app.js.map
