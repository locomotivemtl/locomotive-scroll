(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.LocomotiveScroll = factory());
})(this, (function () {
  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _createForOfIteratorHelperLoose(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (t) return (t = t.call(r)).next.bind(t);
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var o = 0;
      return function () {
        return o >= r.length ? {
          done: !0
        } : {
          done: !1,
          value: r[o++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  function clamp$1(t,i,e){return Math.max(t,Math.min(i,e))}class Animate{constructor(){this.isRunning=!1,this.value=0,this.from=0,this.to=0,this.duration=0,this.currentTime=0;}advance(t){var i;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=clamp$1(0,this.currentTime/this.duration,1);e=i>=1;const s=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*s;}else this.lerp?(this.value=function damp(t,i,e,s){return function lerp(t,i,e){return (1-e)*t+e*i}(t,i,1-Math.exp(-e*s))}(this.value,this.to,60*this.lerp,t),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),null===(i=this.onUpdate)||void 0===i||i.call(this,this.value,e);}stop(){this.isRunning=!1;}fromTo(t,i,{lerp:e,duration:s,easing:o,onStart:n,onUpdate:l}){this.from=this.value=t,this.to=i,this.lerp=e,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,null==n||n(),this.onUpdate=l;}}class Dimensions{constructor({wrapper:t,content:i,autoResize:e=!0,debounce:s=250}={}){this.width=0,this.height=0,this.scrollWidth=0,this.scrollHeight=0,this.resize=()=>{this.onWrapperResize(),this.onContentResize();},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):this.wrapper instanceof HTMLElement&&(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight);},this.onContentResize=()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):this.wrapper instanceof HTMLElement&&(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth);},this.wrapper=t,this.content=i,e&&(this.debouncedResize=function debounce(t,i){let e;return function(){let s=arguments,o=this;clearTimeout(e),e=setTimeout((function(){t.apply(o,s);}),i);}}(this.resize,s),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize();}destroy(){var t,i;null===(t=this.wrapperResizeObserver)||void 0===t||t.disconnect(),null===(i=this.contentResizeObserver)||void 0===i||i.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1);}get limit(){return {x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class Emitter{constructor(){this.events={};}emit(t,...i){let e=this.events[t]||[];for(let t=0,s=e.length;t<s;t++)e[t](...i);}on(t,i){var e;return (null===(e=this.events[t])||void 0===e?void 0:e.push(i))||(this.events[t]=[i]),()=>{var e;this.events[t]=null===(e=this.events[t])||void 0===e?void 0:e.filter((t=>i!==t));}}off(t,i){var e;this.events[t]=null===(e=this.events[t])||void 0===e?void 0:e.filter((t=>i!==t));}destroy(){this.events={};}}const t=100/6;class VirtualScroll{constructor(i,{wheelMultiplier:e=1,touchMultiplier:s=1}){this.lastDelta={x:0,y:0},this.windowWidth=0,this.windowHeight=0,this.onTouchStart=t=>{const{clientX:i,clientY:e}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=i,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t});},this.onTouchMove=t=>{var i,e,s,o;const{clientX:n,clientY:l}=t.targetTouches?t.targetTouches[0]:t,r=-(n-(null!==(e=null===(i=this.touchStart)||void 0===i?void 0:i.x)&&void 0!==e?e:0))*this.touchMultiplier,h=-(l-(null!==(o=null===(s=this.touchStart)||void 0===s?void 0:s.y)&&void 0!==o?o:0))*this.touchMultiplier;this.touchStart.x=n,this.touchStart.y=l,this.lastDelta={x:r,y:h},this.emitter.emit("scroll",{deltaX:r,deltaY:h,event:t});},this.onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t});},this.onWheel=i=>{let{deltaX:e,deltaY:s,deltaMode:o}=i;e*=1===o?t:2===o?this.windowWidth:1,s*=1===o?t:2===o?this.windowHeight:1,e*=this.wheelMultiplier,s*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:s,event:i});},this.onWindowResize=()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight;},this.element=i,this.wheelMultiplier=e,this.touchMultiplier=s,this.touchStart={x:null,y:null},this.emitter=new Emitter,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1});}on(t,i){return this.emitter.on(t,i)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel),this.element.removeEventListener("touchstart",this.onTouchStart),this.element.removeEventListener("touchmove",this.onTouchMove),this.element.removeEventListener("touchend",this.onTouchEnd);}}class Lenis{constructor({wrapper:t=window,content:i=document.documentElement,wheelEventsTarget:e=t,eventsTarget:s=e,smoothWheel:o=!0,syncTouch:n=!1,syncTouchLerp:l=.075,touchInertiaMultiplier:r=35,duration:h,easing:a=(t=>Math.min(1,1.001-Math.pow(2,-10*t))),lerp:c=.1,infinite:d=!1,orientation:u="vertical",gestureOrientation:p="vertical",touchMultiplier:m=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:w,virtualScroll:S,__experimental__naiveDimensions:f=!1}={}){this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.userData={},this.lastVelocity=0,this.velocity=0,this.direction=0,this.onPointerDown=t=>{1===t.button&&this.reset();},this.onVirtualScroll=t=>{if("function"==typeof this.options.virtualScroll&&!1===this.options.virtualScroll(t))return;const{deltaX:i,deltaY:e,event:s}=t;if(this.emitter.emit("virtual-scroll",{deltaX:i,deltaY:e,event:s}),s.ctrlKey)return;const o=s.type.includes("touch"),n=s.type.includes("wheel");this.isTouching="touchstart"===s.type||"touchmove"===s.type;if(this.options.syncTouch&&o&&"touchstart"===s.type&&!this.isStopped&&!this.isLocked)return void this.reset();const l=0===i&&0===e,r="vertical"===this.options.gestureOrientation&&0===e||"horizontal"===this.options.gestureOrientation&&0===i;if(l||r)return;let h=s.composedPath();h=h.slice(0,h.indexOf(this.rootElement));const a=this.options.prevent;if(h.find((t=>{var i,e,s,l,r;return t instanceof Element&&("function"==typeof a&&(null==a?void 0:a(t))||(null===(i=t.hasAttribute)||void 0===i?void 0:i.call(t,"data-lenis-prevent"))||o&&(null===(e=t.hasAttribute)||void 0===e?void 0:e.call(t,"data-lenis-prevent-touch"))||n&&(null===(s=t.hasAttribute)||void 0===s?void 0:s.call(t,"data-lenis-prevent-wheel"))||(null===(l=t.classList)||void 0===l?void 0:l.contains("lenis"))&&!(null===(r=t.classList)||void 0===r?void 0:r.contains("lenis-stopped")))})))return;if(this.isStopped||this.isLocked)return void s.preventDefault();if(!(this.options.syncTouch&&o||this.options.smoothWheel&&n))return this.isScrolling="native",void this.animate.stop();s.preventDefault();let c=e;"both"===this.options.gestureOrientation?c=Math.abs(e)>Math.abs(i)?e:i:"horizontal"===this.options.gestureOrientation&&(c=i);const d=o&&this.options.syncTouch,u=o&&"touchend"===s.type&&Math.abs(c)>5;u&&(c=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+c,Object.assign({programmatic:!1},d?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}));},this.onNativeScroll=()=>{if(clearTimeout(this.__resetVelocityTimeout),delete this.__resetVelocityTimeout,this.__preventNextNativeScrollEvent)delete this.__preventNextNativeScrollEvent;else if(!1===this.isScrolling||"native"===this.isScrolling){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isScrolling="native",this.emit(),0!==this.velocity&&(this.__resetVelocityTimeout=setTimeout((()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit();}),400));}},window.lenisVersion="1.1.9",t&&t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:i,wheelEventsTarget:e,eventsTarget:s,smoothWheel:o,syncTouch:n,syncTouchLerp:l,touchInertiaMultiplier:r,duration:h,easing:a,lerp:c,infinite:d,gestureOrientation:p,orientation:u,touchMultiplier:m,wheelMultiplier:v,autoResize:g,prevent:w,virtualScroll:S,__experimental__naiveDimensions:f},this.animate=new Animate,this.emitter=new Emitter,this.dimensions=new Dimensions({wrapper:t,content:i,autoResize:g}),this.updateClassName(),this.userData={},this.time=0,this.velocity=this.lastVelocity=0,this.isLocked=!1,this.isStopped=!1,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new VirtualScroll(s,{touchMultiplier:m,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll);}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName();}on(t,i){return this.emitter.on(t,i)}off(t,i){return this.emitter.off(t,i)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t;}resize(){this.dimensions.resize();}emit(){this.emitter.emit("scroll",this);}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop();}start(){this.isStopped&&(this.isStopped=!1,this.reset());}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset());}raf(t){const i=t-(this.time||t);this.time=t,this.animate.advance(.001*i);}scrollTo(t,{offset:i=0,immediate:e=!1,lock:s=!1,duration:o=this.options.duration,easing:n=this.options.easing,lerp:l=this.options.lerp,onStart:r,onComplete:h,force:a=!1,programmatic:c=!0,userData:d={}}={}){if(!this.isStopped&&!this.isLocked||a){if("string"==typeof t&&["top","left","start"].includes(t))t=0;else if("string"==typeof t&&["bottom","right","end"].includes(t))t=this.limit;else {let e;if("string"==typeof t?e=document.querySelector(t):t instanceof HTMLElement&&(null==t?void 0:t.nodeType)&&(e=t),e){if(this.options.wrapper!==window){const t=this.rootElement.getBoundingClientRect();i-=this.isHorizontal?t.left:t.top;}const s=e.getBoundingClientRect();t=(this.isHorizontal?s.left:s.top)+this.animatedScroll;}}if("number"==typeof t&&(t+=i,t=Math.round(t),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):t=clamp$1(0,t,this.limit),t!==this.targetScroll)){if(this.userData=d,e)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),null==h||h(this),void(this.userData={});c||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:o,easing:n,lerp:l,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",null==r||r(this);},onUpdate:(t,i)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),c&&(this.targetScroll=t),i||this.emit(),i&&(this.reset(),this.emit(),null==h||h(this),this.userData={},this.preventNextNativeScrollEvent());}});}}}preventNextNativeScrollEvent(){this.__preventNextNativeScrollEvent=!0,requestAnimationFrame((()=>{delete this.__preventNextNativeScrollEvent;}));}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return "horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function modulo(t,i){return (t%i+i)%i}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.updateClassName());}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.updateClassName());}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.updateClassName());}get isSmooth(){return "smooth"===this.isScrolling}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),"smooth"===this.isScrolling&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim();}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim();}}

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
      var maxID = Math.max.apply(Math, ids.concat([0]));
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
   * Locomotive Scroll
   *
   * Detection of elements in viewport & smooth scrolling with parallax.
   *
   * Inspired by
   * {@link https://github.com/locomotivemtl/locomotive-scroll locomotive-scroll.js}
   * and built around
   * {@link https://github.com/darkroomengineering/lenis lenis.js}.
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
      for (var _i = 0, _Object$entries = Object.entries(lenisOptions); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _Object$entries[_i],
          key = _Object$entries$_i[0];
        if (["wrapper", "content", "infinite"].includes(key)) {
          console.warn("Warning: Key \"" + key + "\" is not possible to edit in Locomotive Scroll.");
        }
      }
      // Get arguments
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
      this.lenisInstance = new Lenis(_extends({}, this.lenisOptions, {
        wrapper: window,
        content: document.documentElement,
        infinite: false
      }));
      (_this$lenisInstance = this.lenisInstance) == null || _this$lenisInstance.on('scroll', this.scrollCallback);
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
      (_this$coreInstance = this.coreInstance) == null || _this$coreInstance.destroy();
      // Ensure a delay before destroying to handle cases of instant destruction
      requestAnimationFrame(function () {
        var _this2$coreInstance;
        (_this2$coreInstance = _this2.coreInstance) == null || _this2$coreInstance.destroy();
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
        (_this5$coreInstance = _this5.coreInstance) == null || _this5$coreInstance.onResize({
          currentScroll: _this5.lenisInstance.scroll
        });
      });
    }
    /**
     * Callback - Render callback.
     */;
    _proto._onRender = function _onRender() {
      var _this$lenisInstance2, _this$coreInstance2;
      (_this$lenisInstance2 = this.lenisInstance) == null || _this$lenisInstance2.raf(Date.now());
      (_this$coreInstance2 = this.coreInstance) == null || _this$coreInstance2.onRender({
        currentScroll: this.lenisInstance.scroll,
        smooth: this.lenisInstance.options.smoothWheel
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
      var duration = $target.getAttribute('data-scroll-to-duration') || this.lenisInstance.options.duration;
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
      (_this$lenisInstance3 = this.lenisInstance) == null || _this$lenisInstance3.start();
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
      (_this$lenisInstance4 = this.lenisInstance) == null || _this$lenisInstance4.stop();
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
      (_this$coreInstance3 = this.coreInstance) == null || _this$coreInstance3.removeScrollElements($oldContainer);
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
      (_this$coreInstance4 = this.coreInstance) == null || _this$coreInstance4.addScrollElements($newContainer);
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
      (_this$lenisInstance5 = this.lenisInstance) == null || _this$lenisInstance5.scrollTo(target, {
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
