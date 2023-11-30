(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.LocomotiveScroll = factory());
})(this, (function () {
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function t(){return t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);}return t},t.apply(this,arguments)}function e(t,e,i){return Math.max(t,Math.min(e,i))}class i{advance(t){var i;if(!this.isRunning)return;let s=!1;if(this.lerp)this.value=(o=this.value,n=this.to,(1-(l=1-Math.exp(-60*this.lerp*t)))*o+l*n),Math.round(this.value)===this.to&&(this.value=this.to,s=!0);else {this.currentTime+=t;const i=e(0,this.currentTime/this.duration,1);s=i>=1;const o=s?1:this.easing(i);this.value=this.from+(this.to-this.from)*o;}var o,n,l;null==(i=this.onUpdate)||i.call(this,this.value,s),s&&this.stop();}stop(){this.isRunning=!1;}fromTo(t,e,{lerp:i=.1,duration:s=1,easing:o=(t=>t),onStart:n,onUpdate:l}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,null==n||n(),this.onUpdate=l;}}class s{constructor({wrapper:t,content:e,autoResize:i=!0}={}){if(this.resize=()=>{this.onWrapperResize(),this.onContentResize();},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight);},this.onContentResize=()=>{this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth;},this.wrapper=t,this.content=e,i){const t=function(t,e){let i;return function(){let e=arguments,s=this;clearTimeout(i),i=setTimeout(function(){t.apply(s,e);},250);}}(this.resize);this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(t),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(t),this.contentResizeObserver.observe(this.content);}this.resize();}destroy(){var t,e;null==(t=this.wrapperResizeObserver)||t.disconnect(),null==(e=this.contentResizeObserver)||e.disconnect();}get limit(){return {x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class o{constructor(){this.events={};}emit(t,...e){let i=this.events[t]||[];for(let t=0,s=i.length;t<s;t++)i[t](...e);}on(t,e){var i;return (null==(i=this.events[t])?void 0:i.push(e))||(this.events[t]=[e]),()=>{var i;this.events[t]=null==(i=this.events[t])?void 0:i.filter(t=>e!==t);}}off(t,e){var i;this.events[t]=null==(i=this.events[t])?void 0:i.filter(t=>e!==t);}destroy(){this.events={};}}class n{constructor(t,{wheelMultiplier:i=1,touchMultiplier:s=2,normalizeWheel:n=!1}){this.onTouchStart=t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0};},this.onTouchMove=t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t,s=-(e-this.touchStart.x)*this.touchMultiplier,o=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:s,y:o},this.emitter.emit("scroll",{deltaX:s,deltaY:o,event:t});},this.onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t});},this.onWheel=t=>{let{deltaX:i,deltaY:s}=t;this.normalizeWheel&&(i=e(-100,i,100),s=e(-100,s,100)),i*=this.wheelMultiplier,s*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:t});},this.element=t,this.wheelMultiplier=i,this.touchMultiplier=s,this.normalizeWheel=n,this.touchStart={x:null,y:null},this.emitter=new o,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1});}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1});}}class l{constructor({wrapper:e=window,content:l=document.documentElement,wheelEventsTarget:r=e,eventsTarget:h=r,smoothWheel:a=!0,smoothTouch:c=!1,syncTouch:u=!1,syncTouchLerp:p=.1,__iosNoInertiaSyncTouchLerp:d=.4,touchInertiaMultiplier:m=35,duration:v,easing:g=(t=>Math.min(1,1.001-Math.pow(2,-10*t))),lerp:S=!v&&.1,infinite:w=!1,orientation:f="vertical",gestureOrientation:y="vertical",touchMultiplier:T=1,wheelMultiplier:z=1,normalizeWheel:_=!1,autoResize:M=!0}={}){this.onVirtualScroll=({deltaX:e,deltaY:i,event:s})=>{if(s.ctrlKey)return;const o=s.type.includes("touch"),n=s.type.includes("wheel");if("both"===this.options.gestureOrientation&&0===e&&0===i||"vertical"===this.options.gestureOrientation&&0===i||"horizontal"===this.options.gestureOrientation&&0===e||o&&"vertical"===this.options.gestureOrientation&&0===this.scroll&&!this.options.infinite&&i<=0)return;let l=s.composedPath();if(l=l.slice(0,l.indexOf(this.rootElement)),l.find(t=>{var e;return (null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent"))||o&&(null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent-touch"))||n&&(null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent-wheel"))||(null==(e=t.classList)?void 0:e.contains("lenis"))}))return;if(this.isStopped||this.isLocked)return void s.preventDefault();if(this.isSmooth=(this.options.smoothTouch||this.options.syncTouch)&&o||this.options.smoothWheel&&n,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();s.preventDefault();let r=i;"both"===this.options.gestureOrientation?r=Math.abs(i)>Math.abs(e)?i:e:"horizontal"===this.options.gestureOrientation&&(r=e);const h=o&&this.options.syncTouch,a=o&&"touchend"===s.type&&Math.abs(r)>1;a&&(r=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+r,t({programmatic:!1},h&&{lerp:a?this.syncTouchLerp:this.options.__iosNoInertiaSyncTouchLerp}));},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-t),this.emit();}},window.lenisVersion="1.0.29",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:l,wheelEventsTarget:r,eventsTarget:h,smoothWheel:a,smoothTouch:c,syncTouch:u,syncTouchLerp:p,__iosNoInertiaSyncTouchLerp:d,touchInertiaMultiplier:m,duration:v,easing:g,lerp:S,infinite:w,gestureOrientation:y,orientation:f,touchMultiplier:T,wheelMultiplier:z,normalizeWheel:_,autoResize:M},this.animate=new i,this.emitter=new o,this.dimensions=new s({wrapper:e,content:l,autoResize:M}),this.toggleClass("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=u||a||c,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,{passive:!1}),this.virtualScroll=new n(h,{touchMultiplier:T,wheelMultiplier:z,normalizeWheel:_}),this.virtualScroll.on("scroll",this.onVirtualScroll);}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClass("lenis",!1),this.toggleClass("lenis-smooth",!1),this.toggleClass("lenis-scrolling",!1),this.toggleClass("lenis-stopped",!1),this.toggleClass("lenis-locked",!1);}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t;}resize(){this.dimensions.resize();}emit(){this.emitter.emit("scroll",this);}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop();}start(){this.isStopped=!1,this.reset();}stop(){this.isStopped=!0,this.animate.stop(),this.reset();}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e);}scrollTo(t,{offset:i=0,immediate:s=!1,lock:o=!1,duration:n=this.options.duration,easing:l=this.options.easing,lerp:r=!n&&this.options.lerp,onComplete:h=null,force:a=!1,programmatic:c=!0}={}){if(!this.isStopped&&!this.isLocked||a){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else {var u;let e;if("string"==typeof t?e=document.querySelector(t):null!=(u=t)&&u.nodeType&&(e=t),e){if(this.options.wrapper!==window){const t=this.options.wrapper.getBoundingClientRect();i-=this.isHorizontal?t.left:t.top;}const s=e.getBoundingClientRect();t=(this.isHorizontal?s.left:s.top)+this.animatedScroll;}}if("number"==typeof t){if(t+=i,t=Math.round(t),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):t=e(0,t,this.limit),s)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),void(null==h||h(this));if(!c){if(t===this.targetScroll)return;this.targetScroll=t;}this.animate.fromTo(this.animatedScroll,t,{duration:n,easing:l,lerp:r,onStart:()=>{o&&(this.isLocked=!0),this.isScrolling=!0;},onUpdate:(t,e)=>{this.isScrolling=!0,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),c&&(this.targetScroll=t),e||this.emit(),e&&(this.reset(),this.emit(),null==h||h(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent;}));}});}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return "horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll;var t;}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.__isSmooth=t,this.toggleClass("lenis-smooth",t));}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.toggleClass("lenis-scrolling",t));}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.toggleClass("lenis-stopped",t));}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.toggleClass("lenis-locked",t));}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isSmooth&&(t+=" lenis-smooth"),t}toggleClass(t,e){this.rootElement.classList.toggle(t,e),this.emitter.emit("className change",this);}}

  /**
   * Intersection Observer
   *
   * Detecting visibility of an element in the viewport.
   *
   * Features functions to:
   *
   * - Trigger inview/outOfView callbacks
   * - If the element has a requestAnimationFrame dependency, set interactivy status for the ScrollElement Class
   *
   * References:
   *
   * - {@link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API}
   */
  var IO = /*#__PURE__*/function () {
    function IO(_ref) {
      var scrollElements = _ref.scrollElements,
        _ref$rootMargin = _ref.rootMargin,
        rootMargin = _ref$rootMargin === void 0 ? '-1px -1px -1px -1px' : _ref$rootMargin,
        IORaf = _ref.IORaf;
      this.scrollElements = void 0;
      this.rootMargin = void 0;
      this.IORaf = void 0;
      this.observer = void 0;
      // Parameters
      this.scrollElements = scrollElements;
      this.rootMargin = rootMargin;
      this.IORaf = IORaf;
      // Init
      this._init();
    }
    /**
     * Lifecyle - Initialize Intersection Observer.
     *
     * @private
     */
    var _proto = IO.prototype;
    _proto._init = function _init() {
      var _this = this;
      // Options
      var observerOptions = {
        rootMargin: this.rootMargin
      };
      // Callback
      var onIntersect = function onIntersect(entries) {
        entries.forEach(function (entry) {
          var $targetItem = _this.scrollElements.find(function (item) {
            return item.$el === entry.target;
          });
          if (entry.isIntersecting) {
            $targetItem && ($targetItem.isAlreadyIntersected = true);
            _this._setInview(entry);
          } else if ($targetItem && $targetItem.isAlreadyIntersected) {
            _this._setOutOfView(entry);
          }
        });
      };
      // Instance
      this.observer = new IntersectionObserver(onIntersect, observerOptions);
      // Observe each default elements
      for (var _iterator = _createForOfIteratorHelperLoose(this.scrollElements), _step; !(_step = _iterator()).done;) {
        var scrollElement = _step.value;
        var $scrollElement = scrollElement.$el;
        this.observe($scrollElement);
      }
    }
    /**
     * Lifecyle - Destroy Intersection Observer.
     */;
    _proto.destroy = function destroy() {
      this.observer.disconnect();
    }
    /**
     * Subscribe element to the Intersection Observer.
     *
     * @param {HTMLElement} $scrollElement - DOM Element to observe.
     */;
    _proto.observe = function observe($scrollElement) {
      if (!$scrollElement) {
        return;
      }
      this.observer.observe($scrollElement);
    }
    /**
     * Unsubscribe element to the Intersection Observer.
     *
     * @param {HTMLElement} $scrollElement - DOM Element to unobserve.
     */;
    _proto.unobserve = function unobserve($scrollElement) {
      if (!$scrollElement) {
        return;
      }
      this.observer.unobserve($scrollElement);
    }
    /**
     * Find ScrollElementReference instance and trigger inview callbacks.
     *
     * @private
     *
     * @param {IntersectionObserverEntry} entry - DOM Element to observe.
     */;
    _proto._setInview = function _setInview(entry) {
      var scrollElement = this.scrollElements.find(function (scrollElement) {
        return scrollElement.$el === entry.target;
      });
      this.IORaf && (scrollElement == null ? void 0 : scrollElement.setInteractivityOn());
      !this.IORaf && (scrollElement == null ? void 0 : scrollElement.setInview());
    }
    /**
     * Find ScrollElementReference instance and trigger out of view callbacks.
     *
     * @private
     *
     * @param {IntersectionObserverEntry} entry - DOM Element to observe.
     */;
    _proto._setOutOfView = function _setOutOfView(entry) {
      var scrollElement = this.scrollElements.find(function (scrollElement) {
        return scrollElement.$el === entry.target;
      });
      this.IORaf && (scrollElement == null ? void 0 : scrollElement.setInteractivityOff());
      !this.IORaf && (scrollElement == null ? void 0 : scrollElement.setOutOfView());
      // Unobserve if element doesn't have repeat attribute
      if (!(scrollElement != null && scrollElement.attributes.scrollRepeat) && !this.IORaf) {
        this.unobserve(entry.target);
      }
    };
    return IO;
  }();

  // https://greensock.com/docs/v3/GSAP/gsap.utils
  /**
   * Clamp a value to fit within a specific range (ex: clamp(0, 100, -12) --> 0).
   *
   * @param {number} min   - Minimum value expected.
   * @param {number} max   - Maximum value expected.
   * @param {number} value - Current value.
   *
   * @returns {number} - Clamped value.
   */
  function clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
  }
  /**
   * Map one range to another (ex: mapRange(-10, 10, 0, 100, 5) --> 75).
   *
   * @param {number} inMin  - Current minimum value.
   * @param {number} inMax  - Current maximum value.
   * @param {number} outMin - Maximum value expected.
   * @param {number} outMax - Maximum value expected.
   * @param {number} value  - Current value.
   *
   * @returns {number} - New value that should be between minimum value expected and maximum value.
   */
  function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin;
    var outRange = outMax - outMin;
    return outMin + ((value - inMin) / inRange * outRange || 0);
  }
  /**
   * Map a number within a range to a progress between 0 to 1 (ex: normalize(100, 200, 150) --> 0.5).
   *
   * @param {number} min   - Current minimum value.
   * @param {number} max   - Current maximum value.
   * @param {number} value - Current value.
   *
   * @returns {number} - New value that should be between 0 and 1.
   */
  function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  }
  /**
   * Get closest number from an array.
   *
   * @param {number[]} array  - Numbers array.
   * @param {number}   target - Reference value.
   *
   * @returns {number} - Closest number.
   */
  function closestNumber(array, target) {
    return array.reduce(function (prev, curr) {
      return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev;
    });
  }

  /** Constants */
  var INVIEW_CLASS = 'is-inview';
  var PROGRESS_CSS_VAR = '--progress';
  var PROGRESS_MODULAR_METHOD = 'onScrollProgress';
  var ScrollElement = /*#__PURE__*/function () {
    function ScrollElement(_ref) {
      var _this$$el$dataset$scr, _this$$el$dataset$scr2, _this$$el$dataset$scr3, _this$$el$dataset$scr4, _this$$el$dataset$scr5;
      var $el = _ref.$el,
        id = _ref.id,
        modularInstance = _ref.modularInstance,
        subscribeElementUpdateFn = _ref.subscribeElementUpdateFn,
        unsubscribeElementUpdateFn = _ref.unsubscribeElementUpdateFn,
        needRaf = _ref.needRaf,
        scrollOrientation = _ref.scrollOrientation;
      this.$el = void 0;
      this.id = void 0;
      this.needRaf = void 0;
      this.attributes = void 0;
      this.scrollOrientation = void 0;
      this.isAlreadyIntersected = void 0;
      this.intersection = void 0;
      this.metrics = void 0;
      this.currentScroll = void 0;
      this.translateValue = void 0;
      this.progress = void 0;
      this.lastProgress = void 0;
      this.modularInstance = void 0;
      this.progressModularModules = void 0;
      this.isInview = void 0;
      this.isInteractive = void 0;
      this.isInFold = void 0;
      this.isFirstResize = void 0;
      this.subscribeElementUpdateFn = void 0;
      this.unsubscribeElementUpdateFn = void 0;
      // Scroll DOM element
      this.$el = $el;
      // Unique ID
      this.id = id;
      // RAF option
      this.needRaf = needRaf;
      // Scroll Direction
      this.scrollOrientation = scrollOrientation;
      // Modular.js
      this.modularInstance = modularInstance;
      // Parent's callbacks
      this.subscribeElementUpdateFn = subscribeElementUpdateFn;
      this.unsubscribeElementUpdateFn = unsubscribeElementUpdateFn;
      // Attributes
      this.attributes = {
        scrollClass: (_this$$el$dataset$scr = this.$el.dataset['scrollClass']) != null ? _this$$el$dataset$scr : INVIEW_CLASS,
        scrollOffset: (_this$$el$dataset$scr2 = this.$el.dataset['scrollOffset']) != null ? _this$$el$dataset$scr2 : '0,0',
        scrollPosition: (_this$$el$dataset$scr3 = this.$el.dataset['scrollPosition']) != null ? _this$$el$dataset$scr3 : 'start,end',
        scrollModuleProgress: this.$el.dataset['scrollModuleProgress'] != null,
        scrollCssProgress: this.$el.dataset['scrollCssProgress'] != null,
        scrollEventProgress: (_this$$el$dataset$scr4 = this.$el.dataset['scrollEventProgress']) != null ? _this$$el$dataset$scr4 : null,
        scrollSpeed: this.$el.dataset['scrollSpeed'] != null ? parseFloat(this.$el.dataset['scrollSpeed']) : null,
        scrollRepeat: this.$el.dataset['scrollRepeat'] != null,
        scrollCall: (_this$$el$dataset$scr5 = this.$el.dataset['scrollCall']) != null ? _this$$el$dataset$scr5 : null,
        scrollCallSelf: this.$el.dataset['scrollCallSelf'] != null,
        scrollIgnoreFold: this.$el.dataset['scrollIgnoreFold'] != null,
        scrollEnableTouchSpeed: this.$el.dataset['scrollEnableTouchSpeed'] != null
      };
      // Limits
      this.intersection = {
        start: 0,
        end: 0
      };
      // Metrics
      this.metrics = {
        offsetStart: 0,
        offsetEnd: 0,
        bcr: {}
      };
      // Scroll Values
      this.currentScroll = this.scrollOrientation === 'vertical' ? window.scrollY : window.scrollX;
      // Parallax
      this.translateValue = 0;
      // Progress
      this.progress = 0;
      this.lastProgress = null;
      this.progressModularModules = [];
      // Inview
      this.isInview = false;
      this.isInteractive = false;
      this.isAlreadyIntersected = false;
      this.isInFold = false;
      this.isFirstResize = true;
      // Init
      this._init();
    }
    /**
     * Lifecyle - Initialize progress tracking.
     *
     * @private
     */
    var _proto = ScrollElement.prototype;
    _proto._init = function _init() {
      if (!this.needRaf) {
        return;
      }
      // Prepare modules progress
      if (this.modularInstance && this.attributes.scrollModuleProgress) {
        this._getProgressModularModules();
      }
      // First resize to compute all values
      this._resize();
    }
    /**
     * Callback - Resize callback
     */;
    _proto.onResize = function onResize(_ref2) {
      var currentScroll = _ref2.currentScroll;
      this.currentScroll = currentScroll;
      this._resize();
    }
    /**
     * Callback - RAF callback
     */;
    _proto.onRender = function onRender(_ref3) {
      var currentScroll = _ref3.currentScroll,
        smooth = _ref3.smooth;
      var wSize = this.scrollOrientation === 'vertical' ? window.innerHeight : window.innerWidth;
      this.currentScroll = currentScroll;
      this._computeProgress();
      // Parallax
      if (this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed)) {
        // if touch detected or smooth disabled
        if (!this.attributes.scrollEnableTouchSpeed && !smooth) {
          if (this.translateValue) {
            this.$el.style.transform = "translate3d(0, 0, 0)";
          }
          this.translateValue = 0;
          // if mousewheel or smooth enabled
        } else {
          // Check fold condition
          if (this.isInFold) {
            var progress = Math.max(0, this.progress);
            this.translateValue = progress * wSize * this.attributes.scrollSpeed * -1;
          } else {
            var _progress = mapRange(0, 1, -1, 1, this.progress);
            this.translateValue = _progress * wSize * this.attributes.scrollSpeed * -1;
          }
          this.$el.style.transform = this.scrollOrientation === 'vertical' ? "translate3d(0, " + this.translateValue + "px, 0)" : "translate3d(" + this.translateValue + "px, 0, 0)";
        }
      }
    }
    /**
     * Inview callback
     */;
    _proto.setInview = function setInview() {
      if (this.isInview) {
        return;
      }
      this.isInview = true;
      this.$el.classList.add(this.attributes.scrollClass);
      var way = 'enter';
      var from = this._getScrollCallFrom();
      this.attributes.scrollCall && this._dispatchCall(way, from);
    }
    /**
     * Out of view callback
     */;
    _proto.setOutOfView = function setOutOfView() {
      if (!(this.isInview && this.attributes.scrollRepeat)) {
        return;
      }
      this.isInview = false;
      this.$el.classList.remove(this.attributes.scrollClass);
      var way = 'leave';
      var from = this._getScrollCallFrom();
      this.attributes.scrollCall && this._dispatchCall(way, from);
    }
    /**
     * Switch interactivity on to subscribe the instance to the RAF
     * and start calculations.
     */;
    _proto.setInteractivityOn = function setInteractivityOn() {
      if (this.isInteractive) {
        return;
      }
      this.isInteractive = true;
      this.subscribeElementUpdateFn(this);
    }
    /**
     * Switch interactivity off to unsubscribe the instance to the RAF
     * and stop calculations.
     */;
    _proto.setInteractivityOff = function setInteractivityOff() {
      if (!this.isInteractive) {
        return;
      }
      this.isInteractive = false;
      this.unsubscribeElementUpdateFn(this);
      // Force progress to progress limit when the element is out
      this.lastProgress != null && this._computeProgress(closestNumber([0, 1], this.lastProgress));
    }
    /**
     * Resize method that compute the element's values.
     *
     * @private
     */;
    _proto._resize = function _resize() {
      this.metrics.bcr = this.$el.getBoundingClientRect();
      this._computeMetrics();
      this._computeIntersection();
      // First resize logic
      if (this.isFirstResize) {
        this.isFirstResize = false;
        // Dispatch default call if the element is in fold.
        if (this.isInFold) {
          this.setInview();
        }
      }
    }
    /**
     * Compute element's offsets and determine if the element is in fold.
     *
     * @private
     */;
    _proto._computeMetrics = function _computeMetrics() {
      var _this$metrics$bcr = this.metrics.bcr,
        top = _this$metrics$bcr.top,
        left = _this$metrics$bcr.left,
        height = _this$metrics$bcr.height,
        width = _this$metrics$bcr.width;
      var wSize = this.scrollOrientation === 'vertical' ? window.innerHeight : window.innerWidth;
      var metricsStart = this.scrollOrientation === 'vertical' ? top : left;
      var metricsSize = this.scrollOrientation === 'vertical' ? height : width;
      this.metrics.offsetStart = this.currentScroll + metricsStart - this.translateValue;
      this.metrics.offsetEnd = this.metrics.offsetStart + metricsSize;
      if (this.metrics.offsetStart < wSize && !this.attributes.scrollIgnoreFold) {
        this.isInFold = true;
      } else {
        this.isInFold = false;
      }
    }
    /**
     * Compute intersection values depending on the context.
     *
     * @private
     */;
    _proto._computeIntersection = function _computeIntersection() {
      // Window size
      var wSize = this.scrollOrientation === 'vertical' ? window.innerHeight : window.innerWidth;
      // Metrics size
      var metricsSize = this.scrollOrientation === 'vertical' ? this.metrics.bcr.height : this.metrics.bcr.width;
      // Offset
      var offset = this.attributes.scrollOffset.split(',');
      var offsetStart = offset[0] != undefined ? offset[0].trim() : '0';
      var offsetEnd = offset[1] != undefined ? offset[1].trim() : '0';
      // Positions
      var scrollPosition = this.attributes.scrollPosition.split(',');
      var scrollPositionStart = scrollPosition[0] != undefined ? scrollPosition[0].trim() : 'start';
      var scrollPositionEnd = scrollPosition[1] != undefined ? scrollPosition[1].trim() : 'end';
      // Viewport
      var viewportStart = offsetStart.includes('%') ? wSize * parseInt(offsetStart.replace('%', '').trim()) * 0.01 : parseInt(offsetStart);
      var viewportEnd = offsetEnd.includes('%') ? wSize * parseInt(offsetEnd.replace('%', '').trim()) * 0.01 : parseInt(offsetEnd);
      // Fold exception
      if (this.isInFold) {
        scrollPositionStart = 'fold';
      }
      // Define Intersection Start
      switch (scrollPositionStart) {
        case 'start':
          this.intersection.start = this.metrics.offsetStart - wSize + viewportStart;
          break;
        case 'middle':
          this.intersection.start = this.metrics.offsetStart - wSize + viewportStart + metricsSize * 0.5;
          break;
        case 'end':
          this.intersection.start = this.metrics.offsetStart - wSize + viewportStart + metricsSize;
          break;
        case 'fold':
          this.intersection.start = 0;
          break;
        default:
          this.intersection.start = this.metrics.offsetStart - wSize + viewportStart;
          break;
      }
      // Define Intersection End
      switch (scrollPositionEnd) {
        case 'start':
          this.intersection.end = this.metrics.offsetStart - viewportEnd;
          break;
        case 'middle':
          this.intersection.end = this.metrics.offsetStart - viewportEnd + metricsSize * 0.5;
          break;
        case 'end':
          this.intersection.end = this.metrics.offsetStart - viewportEnd + metricsSize;
          break;
        default:
          this.intersection.end = this.metrics.offsetStart - viewportEnd + metricsSize;
          break;
      }
      // Avoid to have the end < the start intersection >
      if (this.intersection.end <= this.intersection.start) {
        switch (scrollPositionEnd) {
          case 'start':
            this.intersection.end = this.intersection.start + 1;
            break;
          case 'middle':
            this.intersection.end = this.intersection.start + metricsSize * 0.5;
            break;
          case 'end':
            this.intersection.end = this.intersection.start + metricsSize;
            break;
          default:
            this.intersection.end = this.intersection.start + 1;
            break;
        }
      }
    }
    /**
     * Compute the scroll progress of the element depending
     * on its intersection values.
     *
     * @private
     *
     * @param {number} [forcedProgress] - Value to force progress.
     */;
    _proto._computeProgress = function _computeProgress(forcedProgress) {
      // Progress
      var progress = forcedProgress != null ? forcedProgress : clamp(0, 1, normalize(this.intersection.start, this.intersection.end, this.currentScroll));
      this.progress = progress;
      if (progress != this.lastProgress) {
        this.lastProgress = progress;
        // Set the element's progress to the css variable
        this.attributes.scrollCssProgress && this._setCssProgress(progress);
        // Set the element's progress to the custom event listeners
        this.attributes.scrollEventProgress && this._setCustomEventProgress(progress);
        // Set the element's progress to inline modules
        if (this.attributes.scrollModuleProgress) {
          for (var _iterator = _createForOfIteratorHelperLoose(this.progressModularModules), _step; !(_step = _iterator()).done;) {
            var modularModules = _step.value;
            this.modularInstance && this.modularInstance.call(PROGRESS_MODULAR_METHOD, progress, modularModules.moduleName, modularModules.moduleId);
          }
        }
        // Logic to trigger the inview/out of view callbacks
        progress > 0 && progress < 1 && this.setInview();
        progress === 0 && this.setOutOfView();
        progress === 1 && this.setOutOfView();
      }
    }
    /**
     * Set the element's progress to a specific css variable.
     *
     * @private
     *
     * @param {number} [currentProgress] - Progress value.
     */;
    _proto._setCssProgress = function _setCssProgress(currentProgress) {
      if (currentProgress === void 0) {
        currentProgress = 0;
      }
      this.$el.style.setProperty(PROGRESS_CSS_VAR, currentProgress.toString());
    }
    /**
     * Set the element's progress to the custom event listeners.
     *
     * @private
     *
     * @param {number} [currentProgress] - Progress value.
     */;
    _proto._setCustomEventProgress = function _setCustomEventProgress(currentProgress) {
      if (currentProgress === void 0) {
        currentProgress = 0;
      }
      var customEventName = this.attributes.scrollEventProgress;
      if (!customEventName) return;
      var customEvent = new CustomEvent(customEventName, {
        detail: {
          target: this.$el,
          progress: currentProgress
        }
      });
      window.dispatchEvent(customEvent);
    }
    /**
     * Get modular modules that can listen the element's progress.
     *
     * @private
     */;
    _proto._getProgressModularModules = function _getProgressModularModules() {
      if (!this.modularInstance) {
        return;
      }
      var modulesIdNames = Object.keys(this.$el.dataset).filter(function (key) {
        return key.includes('module');
      });
      var modules = Object.entries(this.modularInstance.modules);
      if (!modulesIdNames.length) {
        return;
      }
      for (var _iterator2 = _createForOfIteratorHelperLoose(modulesIdNames), _step2; !(_step2 = _iterator2()).done;) {
        var modulesIdName = _step2.value;
        var moduleId = this.$el.dataset[modulesIdName];
        if (!moduleId) {
          return;
        }
        for (var _iterator3 = _createForOfIteratorHelperLoose(modules), _step3; !(_step3 = _iterator3()).done;) {
          var module = _step3.value;
          var moduleName = module[0],
            moduleObj = module[1];
          if (moduleId in moduleObj) {
            this.progressModularModules.push({
              moduleName: moduleName,
              moduleId: moduleId
            });
          }
        }
      }
    }
    /**
     * Function to get scroll call from.
     *
     * @private
     */;
    _proto._getScrollCallFrom = function _getScrollCallFrom() {
      var closestIntersectionValue = closestNumber([this.intersection.start, this.intersection.end], this.currentScroll);
      return this.intersection.start === closestIntersectionValue ? 'start' : 'end';
    }
    /**
     * Function to dispatch a custom event or call a modular callback.
     *
     * @private
     *
     * @param {scrollCallWay} way - Enter or leave.
     * @param {scrollCallFrom} from - Start or end.
     */;
    _proto._dispatchCall = function _dispatchCall(way, from) {
      var _this$attributes$scro, _this$attributes;
      var callParameters = (_this$attributes$scro = this.attributes.scrollCall) == null ? void 0 : _this$attributes$scro.split(',');
      var callSelf = (_this$attributes = this.attributes) == null ? void 0 : _this$attributes.scrollCallSelf;
      if (callParameters && callParameters.length > 1) {
        var _targetModuleId;
        // Using Modular.js (https://github.com/modularorg/modularjs)
        var func = callParameters[0],
          moduleName = callParameters[1],
          moduleId = callParameters[2];
        var targetModuleId;
        // If the module is set on the scroll element
        if (callSelf) {
          targetModuleId = this.$el.dataset["module" + moduleName.trim()];
        } else {
          targetModuleId = moduleId;
        }
        this.modularInstance && this.modularInstance.call(func.trim(), {
          target: this.$el,
          way: way,
          from: from
        }, moduleName.trim(), (_targetModuleId = targetModuleId) == null ? void 0 : _targetModuleId.trim());
      } else if (callParameters) {
        // Using CustomEvent API (https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
        var customEventName = callParameters[0];
        var customEvent = new CustomEvent(customEventName, {
          detail: {
            target: this.$el,
            way: way,
            from: from
          }
        });
        window.dispatchEvent(customEvent);
      }
    };
    return ScrollElement;
  }();

  /** Defined attributes that need a requestAnimationFrame */
  var ATTRIBUTES_THAT_NEED_RAF = ['scrollOffset', 'scrollPosition', 'scrollModuleProgress', 'scrollCssProgress', 'scrollEventProgress', 'scrollSpeed'];
  /** Default root margins */
  var TRIGGER_ROOT_MARGIN = '-1px -1px -1px -1px';
  var RAF_ROOT_MARGIN = '100% 100% 100% 100%'; // Add 100vh top/bottom && 100vw left/right to use a biggest value with data-scroll-speed
  var Core = /*#__PURE__*/function () {
    function Core(_ref) {
      var $el = _ref.$el,
        modularInstance = _ref.modularInstance,
        triggerRootMargin = _ref.triggerRootMargin,
        rafRootMargin = _ref.rafRootMargin,
        scrollOrientation = _ref.scrollOrientation;
      this.$scrollContainer = void 0;
      this.modularInstance = void 0;
      this.triggerRootMargin = void 0;
      this.rafRootMargin = void 0;
      this.scrollElements = void 0;
      this.triggeredScrollElements = void 0;
      this.RAFScrollElements = void 0;
      this.scrollElementsToUpdate = void 0;
      this.IOTriggerInstance = void 0;
      this.IORafInstance = void 0;
      this.scrollOrientation = void 0;
      if (!$el) {
        console.error('Please provide a DOM Element as scrollContainer');
        return;
      }
      // Scroll container
      this.$scrollContainer = $el;
      // Modular.js
      this.modularInstance = modularInstance;
      // Scroll Direction
      this.scrollOrientation = scrollOrientation;
      // IO Margins
      this.triggerRootMargin = triggerRootMargin != null ? triggerRootMargin : TRIGGER_ROOT_MARGIN;
      this.rafRootMargin = rafRootMargin != null ? rafRootMargin : RAF_ROOT_MARGIN;
      // ScrollElements arrays
      this.scrollElements = [];
      this.triggeredScrollElements = [];
      this.RAFScrollElements = [];
      this.scrollElementsToUpdate = [];
      // Init
      this._init();
    }
    /**
     * Lifecyle - Initialize the core.
     *
     * @private
     */
    var _proto = Core.prototype;
    _proto._init = function _init() {
      var $scrollElements = this.$scrollContainer.querySelectorAll('[data-scroll]');
      var $scrollElementsArr = Array.from($scrollElements);
      this._subscribeScrollElements($scrollElementsArr);
      // Trigger IO
      this.IOTriggerInstance = new IO({
        scrollElements: [].concat(this.triggeredScrollElements),
        rootMargin: this.triggerRootMargin,
        IORaf: false
      });
      // Raf IO
      this.IORafInstance = new IO({
        scrollElements: [].concat(this.RAFScrollElements),
        rootMargin: this.rafRootMargin,
        IORaf: true
      });
    }
    /**
     * Lifecyle - Destroy core.
     */;
    _proto.destroy = function destroy() {
      this.IOTriggerInstance.destroy();
      this.IORafInstance.destroy();
      this._unsubscribeAllScrollElements();
    }
    /**
     * Callback - Resize callback.
     */;
    _proto.onResize = function onResize(_ref2) {
      var currentScroll = _ref2.currentScroll;
      for (var _iterator = _createForOfIteratorHelperLoose(this.RAFScrollElements), _step; !(_step = _iterator()).done;) {
        var scrollElement = _step.value;
        scrollElement.onResize({
          currentScroll: currentScroll
        });
      }
    }
    /**
     * Callback - RAF callback.
     */;
    _proto.onRender = function onRender(_ref3) {
      var currentScroll = _ref3.currentScroll,
        smooth = _ref3.smooth;
      for (var _iterator2 = _createForOfIteratorHelperLoose(this.scrollElementsToUpdate), _step2; !(_step2 = _iterator2()).done;) {
        var scrollElement = _step2.value;
        scrollElement.onRender({
          currentScroll: currentScroll,
          smooth: smooth
        });
      }
    }
    /**
     * Remove items from lists of scroll elements and compute all new values.
     *
     * @param {HTMLElement} $oldContainer - HTMLElement that contains data-scroll elements to unsubscribe
     */;
    _proto.removeScrollElements = function removeScrollElements($oldContainer) {
      var _this = this;
      var $scrollElementsToRemove = $oldContainer.querySelectorAll('[data-scroll]');
      if (!$scrollElementsToRemove.length) return;
      // 1. Remove from IO
      for (var index = 0; index < this.triggeredScrollElements.length; index++) {
        var scrollElement = this.triggeredScrollElements[index];
        var $scrollElementsToRemoveArr = Array.from($scrollElementsToRemove);
        if ($scrollElementsToRemoveArr.indexOf(scrollElement.$el) > -1) {
          this.IOTriggerInstance.unobserve(scrollElement.$el);
          this.triggeredScrollElements.splice(index, 1);
        }
      }
      for (var _index = 0; _index < this.RAFScrollElements.length; _index++) {
        var _scrollElement = this.RAFScrollElements[_index];
        var _$scrollElementsToRemoveArr = Array.from($scrollElementsToRemove);
        if (_$scrollElementsToRemoveArr.indexOf(_scrollElement.$el) > -1) {
          this.IORafInstance.unobserve(_scrollElement.$el);
          this.RAFScrollElements.splice(_index, 1);
        }
      }
      // 2. Remove from scrollElementsToUpdate[] and scrollElements[]
      $scrollElementsToRemove.forEach(function ($scrollElement) {
        var targetScrollElementToUpdate = _this.scrollElementsToUpdate.find(function (scrollElement) {
          return scrollElement.$el === $scrollElement;
        });
        var targetScrollElement = _this.scrollElements.find(function (scrollElement) {
          return scrollElement.$el === $scrollElement;
        });
        if (targetScrollElementToUpdate) {
          _this._unsubscribeElementUpdate(targetScrollElementToUpdate);
        }
        if (targetScrollElement) {
          _this.scrollElements = _this.scrollElements.filter(function (scrollElementItem) {
            return scrollElementItem.id != targetScrollElement.id;
          });
        }
      });
    }
    /**
     * Add items to lists of scroll elements and compute all new values.
     *
     * @param {HTMLElement} $newContainer - HTMLElement that contains data-scroll elements to subscribe
     */;
    _proto.addScrollElements = function addScrollElements($newContainer) {
      // 3. Rebuild ScrollElements
      var $scrollElements = $newContainer.querySelectorAll('[data-scroll]');
      // 4. Get max scrollElement.id
      var ids = [];
      this.scrollElements.forEach(function (scrollElement) {
        ids.push(scrollElement.id);
      });
      var maxID = Math.max.apply(Math, ids);
      var fromIndex = maxID + 1;
      var $scrollElementsArr = Array.from($scrollElements);
      this._subscribeScrollElements($scrollElementsArr, fromIndex, true);
    }
    /**
     * Create a ScrollElement instance for each elements with
     * `data-scroll` attribute.
     *
     * @private
     *
     * @param {HTMLElement[]} $scrollElements - List of elements that need
     *     to be regarded.
     */;
    _proto._subscribeScrollElements = function _subscribeScrollElements($scrollElements, fromIndex, toObserve) {
      if (fromIndex === void 0) {
        fromIndex = 0;
      }
      if (toObserve === void 0) {
        toObserve = false;
      }
      // For each scroll element create a ScrollElement instance
      for (var index = 0; index < $scrollElements.length; index++) {
        var $scrollElement = $scrollElements[index];
        var needRaf = this._checkRafNeeded($scrollElement);
        var scrollElementInstance = new ScrollElement({
          $el: $scrollElement,
          id: fromIndex + index,
          scrollOrientation: this.scrollOrientation,
          modularInstance: this.modularInstance,
          subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this),
          unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this),
          needRaf: needRaf
        });
        // Push to common array
        this.scrollElements.push(scrollElementInstance);
        // Push to specific array
        if (needRaf) {
          this.RAFScrollElements.push(scrollElementInstance);
          // Dynamic observe item
          if (toObserve) {
            this.IORafInstance.scrollElements.push(scrollElementInstance);
            this.IORafInstance.observe(scrollElementInstance.$el);
          }
        } else {
          this.triggeredScrollElements.push(scrollElementInstance);
          // Dynamic observe item
          if (toObserve) {
            this.IOTriggerInstance.scrollElements.push(scrollElementInstance);
            this.IOTriggerInstance.observe(scrollElementInstance.$el);
          }
        }
      }
    }
    /**
     * Clear all ScrollElement arrays.
     *
     * @private
     */;
    _proto._unsubscribeAllScrollElements = function _unsubscribeAllScrollElements() {
      this.scrollElements = [];
      this.RAFScrollElements = [];
      this.triggeredScrollElements = [];
      this.scrollElementsToUpdate = [];
    }
    /**
     * Subscribe ScrollElement instance that needs to be updated.
     *
     * @private
     *
     * @param {ScrollElement} scrollElement - ScrollElement instance inview
     *     that needs to be updated.
     */;
    _proto._subscribeElementUpdate = function _subscribeElementUpdate(scrollElement) {
      this.scrollElementsToUpdate.push(scrollElement);
    }
    /**
     * Unscribe ScrollElement instance that doesn't need to be updated.
     *
     * @private
     *
     * @param {ScrollElement} scrollElement - The updated ScrollElement instance
     *     out of view now.
     */;
    _proto._unsubscribeElementUpdate = function _unsubscribeElementUpdate(scrollElement) {
      this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter(function (scrollElementToUpdate) {
        return scrollElementToUpdate.id != scrollElement.id;
      });
    }
    /**
     * Check if a DOM Element need a requestAnimationFrame to be used.
     *
     * @private
     *
     * @param {HTMLElement} $scrollElement - The element that needs to be checked.
     *
     * @returns {boolean}
     */;
    _proto._checkRafNeeded = function _checkRafNeeded($scrollElement) {
      var attributesThatNeedRaf = [].concat(ATTRIBUTES_THAT_NEED_RAF);
      // Remove utils
      var removeAttribute = function removeAttribute(attributeToRemove) {
        attributesThatNeedRaf = attributesThatNeedRaf.filter(function (attribute) {
          return attribute != attributeToRemove;
        });
      };
      // 1. Check scroll offset values
      if ($scrollElement.dataset.scrollOffset) {
        var value = $scrollElement.dataset.scrollOffset.split(',').map(function (test) {
          return test.replace('%', '').trim();
        }).join(',');
        if (value != '0,0') {
          return true;
        } else {
          removeAttribute('scrollOffset');
        }
      } else {
        removeAttribute('scrollOffset');
      }
      // 2. Check scroll position values
      if ($scrollElement.dataset.scrollPosition) {
        var _value = $scrollElement.dataset.scrollPosition.trim();
        if (_value != 'top,bottom') {
          return true;
        } else {
          removeAttribute('scrollPosition');
        }
      } else {
        removeAttribute('scrollPosition');
      }
      // 3. Check scroll speed values
      if ($scrollElement.dataset.scrollSpeed && !isNaN(parseFloat($scrollElement.dataset.scrollSpeed))) {
        return true;
      } else {
        removeAttribute('scrollSpeed');
      }
      // 4. Check others attributes
      for (var _iterator3 = _createForOfIteratorHelperLoose(attributesThatNeedRaf), _step3; !(_step3 = _iterator3()).done;) {
        var attribute = _step3.value;
        if (attribute in $scrollElement.dataset) {
          return true;
        }
      }
      return false;
    };
    return Core;
  }();

  /**
   * Resize Observer
   *
   * The Resize Observer API provides a performant mechanism by which code can monitor an element for changes to its size,
   * with notifications being delivered to the observer each time the size changes.
   *
   * Features functions to:
   *
   * - Trigger the resize callback if the specified element's size change.
   *
   * References:
   *
   * - {@link https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API}
   */
  var RO = /*#__PURE__*/function () {
    function RO(_ref) {
      var resizeElements = _ref.resizeElements,
        _ref$resizeCallback = _ref.resizeCallback,
        resizeCallback = _ref$resizeCallback === void 0 ? function () {} : _ref$resizeCallback;
      this.$resizeElements = void 0;
      this.isFirstObserve = void 0;
      this.observer = void 0;
      this.resizeCallback = void 0;
      // Parameters
      this.$resizeElements = resizeElements;
      this.resizeCallback = resizeCallback;
      // Flags
      this.isFirstObserve = true;
      // Init
      this._init();
    }
    /**
     * Lifecyle - Initialize Resize Observer.
     *
     * @private
     */
    var _proto = RO.prototype;
    _proto._init = function _init() {
      var _this = this;
      // Callback
      var onResize = function onResize(entries) {
        !_this.isFirstObserve && (_this.resizeCallback == null ? void 0 : _this.resizeCallback());
        _this.isFirstObserve = false;
      };
      // Instance
      this.observer = new ResizeObserver(onResize);
      // Observe each default elements
      for (var _iterator = _createForOfIteratorHelperLoose(this.$resizeElements), _step; !(_step = _iterator()).done;) {
        var $resizeElement = _step.value;
        this.observer.observe($resizeElement);
      }
    }
    /**
     * Lifecyle - Destroy Resize Observer.
     */;
    _proto.destroy = function destroy() {
      this.observer.disconnect();
    };
    return RO;
  }();

  /**
   * @type {ILenisOptions}
   */
  var defaultLenisOptions = {
    wrapper: window,
    content: document.documentElement,
    eventsTarget: window,
    lerp: 0.1,
    duration: 0.75,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
    syncTouch: false,
    syncTouchLerp: 0.1,
    touchInertiaMultiplier: 35,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    normalizeWheel: false,
    autoResize: true,
    easing: function easing(t) {
      return Math.min(1, 1.001 - Math.pow(2, -10 * t));
    } // https://www.desmos.com/calculator/brs54l4xou
  };
  /**
   * Locomotive Scroll
   *
   * Detection of elements in viewport & smooth scrolling with parallax.
   *
   * Inspired by
   * {@link https://github.com/locomotivemtl/locomotive-scroll locomotive-scroll.js}
   * and built around
   * {@link https://github.com/studio-freight/lenis lenis.js}.
   */
  var LocomotiveScroll = /*#__PURE__*/function () {
    function LocomotiveScroll(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
        _ref$lenisOptions = _ref.lenisOptions,
        lenisOptions = _ref$lenisOptions === void 0 ? {} : _ref$lenisOptions,
        modularInstance = _ref.modularInstance,
        triggerRootMargin = _ref.triggerRootMargin,
        rafRootMargin = _ref.rafRootMargin,
        _ref$autoResize = _ref.autoResize,
        autoResize = _ref$autoResize === void 0 ? true : _ref$autoResize,
        _ref$autoStart = _ref.autoStart,
        autoStart = _ref$autoStart === void 0 ? true : _ref$autoStart,
        _ref$scrollCallback = _ref.scrollCallback,
        scrollCallback = _ref$scrollCallback === void 0 ? function () {} : _ref$scrollCallback,
        initCustomTicker = _ref.initCustomTicker,
        destroyCustomTicker = _ref.destroyCustomTicker;
      this.rafPlaying = void 0;
      this.lenisInstance = void 0;
      this.coreInstance = void 0;
      this.lenisOptions = void 0;
      this.modularInstance = void 0;
      this.triggerRootMargin = void 0;
      this.rafRootMargin = void 0;
      this.rafInstance = void 0;
      this.autoResize = void 0;
      this.autoStart = void 0;
      this.ROInstance = void 0;
      this.initCustomTicker = void 0;
      this.destroyCustomTicker = void 0;
      this._onRenderBind = void 0;
      this._onResizeBind = void 0;
      this._onScrollToBind = void 0;
      // Arguments
      this.lenisOptions = _extends({}, defaultLenisOptions, lenisOptions);
      Object.assign(this, {
        lenisOptions: lenisOptions,
        modularInstance: modularInstance,
        triggerRootMargin: triggerRootMargin,
        rafRootMargin: rafRootMargin,
        autoResize: autoResize,
        autoStart: autoStart,
        scrollCallback: scrollCallback,
        initCustomTicker: initCustomTicker,
        destroyCustomTicker: destroyCustomTicker
      });
      // Binding
      this._onRenderBind = this._onRender.bind(this);
      this._onScrollToBind = this._onScrollTo.bind(this);
      this._onResizeBind = this._onResize.bind(this);
      // Data
      this.rafPlaying = false;
      // Init
      this._init();
    }
    /**
     * Lifecyle - Initialize instance.
     *
     * @private
     */
    var _proto = LocomotiveScroll.prototype;
    _proto._init = function _init() {
      var _this$lenisInstance,
        _this = this;
      // Create Lenis instance
      this.lenisInstance = new l({
        wrapper: this.lenisOptions.wrapper,
        content: this.lenisOptions.content,
        eventsTarget: this.lenisOptions.eventsTarget,
        lerp: this.lenisOptions.lerp,
        duration: this.lenisOptions.duration,
        orientation: this.lenisOptions.orientation,
        gestureOrientation: this.lenisOptions.gestureOrientation,
        smoothWheel: this.lenisOptions.smoothWheel,
        smoothTouch: this.lenisOptions.smoothTouch,
        syncTouch: this.lenisOptions.syncTouch,
        syncTouchLerp: this.lenisOptions.syncTouchLerp,
        touchInertiaMultiplier: this.lenisOptions.touchInertiaMultiplier,
        wheelMultiplier: this.lenisOptions.wheelMultiplier,
        touchMultiplier: this.lenisOptions.touchMultiplier,
        normalizeWheel: this.lenisOptions.normalizeWheel,
        easing: this.lenisOptions.easing
      });
      (_this$lenisInstance = this.lenisInstance) == null ? void 0 : _this$lenisInstance.on('scroll', this.scrollCallback);
      // Add scroll direction attribute on body
      document.documentElement.setAttribute('data-scroll-orientation', this.lenisInstance.options.orientation);
      requestAnimationFrame(function () {
        // Create Core Instance
        _this.coreInstance = new Core({
          $el: _this.lenisInstance.rootElement,
          modularInstance: _this.modularInstance,
          triggerRootMargin: _this.triggerRootMargin,
          rafRootMargin: _this.rafRootMargin,
          scrollOrientation: _this.lenisInstance.options.orientation
        });
        // Bind Events
        _this._bindEvents();
        // RAF warning
        if (_this.initCustomTicker && !_this.destroyCustomTicker) {
          console.warn('initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.');
        } else if (!_this.initCustomTicker && _this.destroyCustomTicker) {
          console.warn('destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble.');
        }
        // Start RAF
        _this.autoStart && _this.start();
      });
    }
    /**
     * Lifecyle - Destroy instance.
     */;
    _proto.destroy = function destroy() {
      var _this$coreInstance,
        _this2 = this;
      // Stop raf
      this.stop();
      // Unbind Events
      this._unbindEvents();
      // Destroy Lenis
      this.lenisInstance.destroy();
      // Destroy Core
      (_this$coreInstance = this.coreInstance) == null ? void 0 : _this$coreInstance.destroy();
      // Ensure a delay before destroying to handle cases of instant destruction
      requestAnimationFrame(function () {
        var _this2$coreInstance;
        (_this2$coreInstance = _this2.coreInstance) == null ? void 0 : _this2$coreInstance.destroy();
      });
    }
    /**
     * Events - Subscribe events to listen.
     */;
    _proto._bindEvents = function _bindEvents() {
      this._bindScrollToEvents();
      if (this.autoResize) {
        if ('ResizeObserver' in window) {
          this.ROInstance = new RO({
            resizeElements: [document.body],
            resizeCallback: this._onResizeBind
          });
        } else {
          window.addEventListener('resize', this._onResizeBind);
        }
      }
    }
    /**
     * Events - Unsubscribe listened events.
     */;
    _proto._unbindEvents = function _unbindEvents() {
      this._unbindScrollToEvents();
      if (this.autoResize) {
        if ('ResizeObserver' in window) {
          this.ROInstance && this.ROInstance.destroy();
        } else {
          window.removeEventListener('resize', this._onResizeBind);
        }
      }
    }
    /**
     * Events - Subscribe scrollTo events to listen.
     */;
    _proto._bindScrollToEvents = function _bindScrollToEvents($container) {
      var _this3 = this;
      var $rootContainer = $container ? $container : this.lenisInstance.rootElement;
      var $scrollToElements = $rootContainer == null ? void 0 : $rootContainer.querySelectorAll('[data-scroll-to]');
      ($scrollToElements == null ? void 0 : $scrollToElements.length) && $scrollToElements.forEach(function ($el) {
        $el.addEventListener('click', _this3._onScrollToBind, false);
      });
    }
    /**
     * Events - Unsubscribe scrollTo listened events.
     */;
    _proto._unbindScrollToEvents = function _unbindScrollToEvents($container) {
      var _this4 = this;
      var $rootContainer = $container ? $container : this.lenisInstance.rootElement;
      var $scrollToElements = $rootContainer == null ? void 0 : $rootContainer.querySelectorAll('[data-scroll-to]');
      ($scrollToElements == null ? void 0 : $scrollToElements.length) && $scrollToElements.forEach(function ($el) {
        $el.removeEventListener('click', _this4._onScrollToBind, false);
      });
    }
    /**
     * Callback - Resize callback.
     */;
    _proto._onResize = function _onResize() {
      var _this5 = this;
      // Waiting the next frame to get the new current scroll value return by Lenis
      requestAnimationFrame(function () {
        var _this5$coreInstance;
        (_this5$coreInstance = _this5.coreInstance) == null ? void 0 : _this5$coreInstance.onResize({
          currentScroll: _this5.lenisInstance.scroll
        });
      });
    }
    /**
     * Callback - Render callback.
     */;
    _proto._onRender = function _onRender() {
      var _this$lenisInstance2, _this$coreInstance2;
      (_this$lenisInstance2 = this.lenisInstance) == null ? void 0 : _this$lenisInstance2.raf(Date.now());
      (_this$coreInstance2 = this.coreInstance) == null ? void 0 : _this$coreInstance2.onRender({
        currentScroll: this.lenisInstance.scroll,
        smooth: this.lenisInstance.isSmooth
      });
    }
    /**
     * Callback - Scroll To callback.
     */;
    _proto._onScrollTo = function _onScrollTo(event) {
      var _event$currentTarget;
      event.preventDefault();
      var $target = (_event$currentTarget = event.currentTarget) != null ? _event$currentTarget : null;
      if (!$target) return;
      var target = $target.getAttribute('data-scroll-to-href') || $target.getAttribute('href');
      var offset = $target.getAttribute('data-scroll-to-offset') || 0;
      var duration = $target.getAttribute('data-scroll-to-duration') || this.lenisOptions.duration || defaultLenisOptions.duration;
      target && this.scrollTo(target, {
        offset: typeof offset === 'string' ? parseInt(offset) : offset,
        duration: typeof duration === 'string' ? parseInt(duration) : duration
      });
    }
    /**
     * Start RequestAnimationFrame that active Lenis smooth and scroll progress.
     */;
    _proto.start = function start() {
      var _this$lenisInstance3;
      if (this.rafPlaying) {
        return;
      }
      // Call lenis start method
      (_this$lenisInstance3 = this.lenisInstance) == null ? void 0 : _this$lenisInstance3.start();
      this.rafPlaying = true;
      this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf();
    }
    /**
     * Stop RequestAnimationFrame that active Lenis smooth and scroll progress.
     */;
    _proto.stop = function stop() {
      var _this$lenisInstance4;
      if (!this.rafPlaying) {
        return;
      }
      // Call lenis stop method
      (_this$lenisInstance4 = this.lenisInstance) == null ? void 0 : _this$lenisInstance4.stop();
      this.rafPlaying = false;
      this.destroyCustomTicker ? this.destroyCustomTicker(this._onRenderBind) : this.rafInstance && cancelAnimationFrame(this.rafInstance);
    }
    /**
     * Remove old scroll elements items and rebuild ScrollElements instances.
     */;
    _proto.removeScrollElements = function removeScrollElements($oldContainer) {
      var _this$coreInstance3;
      if (!$oldContainer) {
        console.error('Please provide a DOM Element as $oldContainer');
        return;
      }
      this._unbindScrollToEvents($oldContainer);
      (_this$coreInstance3 = this.coreInstance) == null ? void 0 : _this$coreInstance3.removeScrollElements($oldContainer);
    }
    /**
     * Add new scroll elements items and rebuild ScrollElements instances.
     */;
    _proto.addScrollElements = function addScrollElements($newContainer) {
      var _this$coreInstance4,
        _this6 = this;
      if (!$newContainer) {
        console.error('Please provide a DOM Element as $newContainer');
        return;
      }
      (_this$coreInstance4 = this.coreInstance) == null ? void 0 : _this$coreInstance4.addScrollElements($newContainer);
      requestAnimationFrame(function () {
        _this6._bindScrollToEvents($newContainer);
      });
    }
    /**
     * Trigger resize callback.
     */;
    _proto.resize = function resize() {
      this._onResizeBind();
    }
    /**
     * Trigger scroll to callback.
     */;
    _proto.scrollTo = function scrollTo(target, options) {
      var _this$lenisInstance5;
      (_this$lenisInstance5 = this.lenisInstance) == null ? void 0 : _this$lenisInstance5.scrollTo(target, {
        offset: options == null ? void 0 : options.offset,
        lerp: options == null ? void 0 : options.lerp,
        duration: options == null ? void 0 : options.duration,
        immediate: options == null ? void 0 : options.immediate,
        lock: options == null ? void 0 : options.lock,
        force: options == null ? void 0 : options.force,
        easing: options == null ? void 0 : options.easing,
        onComplete: options == null ? void 0 : options.onComplete
      });
    }
    /**
     * RequestAnimationFrame that active Lenis smooth and scroll progress.
     *
     * @private
     *
     */;
    _proto._raf = function _raf() {
      var _this7 = this;
      this._onRenderBind();
      this.rafInstance = requestAnimationFrame(function () {
        return _this7._raf();
      });
    };
    return LocomotiveScroll;
  }();

  return LocomotiveScroll;

}));
