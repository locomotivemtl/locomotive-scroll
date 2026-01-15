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

  var version$1 = "5.0.0";

  // package.json
  var version = "1.3.17";

  // packages/core/src/maths.ts
  function clamp$1(min, input, max) {
    return Math.max(min, Math.min(input, max));
  }
  function lerp(x, y, t) {
    return (1 - t) * x + t * y;
  }
  function damp(x, y, lambda, deltaTime) {
    return lerp(x, y, 1 - Math.exp(-lambda * deltaTime));
  }
  function modulo(n, d) {
    return (n % d + d) % d;
  }

  // packages/core/src/animate.ts
  var Animate = class {
    isRunning = false;
    value = 0;
    from = 0;
    to = 0;
    currentTime = 0;
    // These are instanciated in the fromTo method
    lerp;
    duration;
    easing;
    onUpdate;
    /**
     * Advance the animation by the given delta time
     *
     * @param deltaTime - The time in seconds to advance the animation
     */
    advance(deltaTime) {
      if (!this.isRunning) return;
      let completed = false;
      if (this.duration && this.easing) {
        this.currentTime += deltaTime;
        const linearProgress = clamp$1(0, this.currentTime / this.duration, 1);
        completed = linearProgress >= 1;
        const easedProgress = completed ? 1 : this.easing(linearProgress);
        this.value = this.from + (this.to - this.from) * easedProgress;
      } else if (this.lerp) {
        this.value = damp(this.value, this.to, this.lerp * 60, deltaTime);
        if (Math.round(this.value) === this.to) {
          this.value = this.to;
          completed = true;
        }
      } else {
        this.value = this.to;
        completed = true;
      }
      if (completed) {
        this.stop();
      }
      this.onUpdate?.(this.value, completed);
    }
    /** Stop the animation */
    stop() {
      this.isRunning = false;
    }
    /**
     * Set up the animation from a starting value to an ending value
     * with optional parameters for lerping, duration, easing, and onUpdate callback
     *
     * @param from - The starting value
     * @param to - The ending value
     * @param options - Options for the animation
     */
    fromTo(from, to, { lerp: lerp2, duration, easing, onStart, onUpdate }) {
      this.from = this.value = from;
      this.to = to;
      this.lerp = lerp2;
      this.duration = duration;
      this.easing = easing;
      this.currentTime = 0;
      this.isRunning = true;
      onStart?.();
      this.onUpdate = onUpdate;
    }
  };

  // packages/core/src/debounce.ts
  function debounce(callback, delay) {
    let timer;
    return function(...args) {
      let context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = void 0;
        callback.apply(context, args);
      }, delay);
    };
  }

  // packages/core/src/dimensions.ts
  var Dimensions = class {
    constructor(wrapper, content, { autoResize = true, debounce: debounceValue = 250 } = {}) {
      this.wrapper = wrapper;
      this.content = content;
      if (autoResize) {
        this.debouncedResize = debounce(this.resize, debounceValue);
        if (this.wrapper instanceof Window) {
          window.addEventListener("resize", this.debouncedResize, false);
        } else {
          this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
          this.wrapperResizeObserver.observe(this.wrapper);
        }
        this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
        this.contentResizeObserver.observe(this.content);
      }
      this.resize();
    }
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    // These are instanciated in the constructor as they need information from the options
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    destroy() {
      this.wrapperResizeObserver?.disconnect();
      this.contentResizeObserver?.disconnect();
      if (this.wrapper === window && this.debouncedResize) {
        window.removeEventListener("resize", this.debouncedResize, false);
      }
    }
    resize = () => {
      this.onWrapperResize();
      this.onContentResize();
    };
    onWrapperResize = () => {
      if (this.wrapper instanceof Window) {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      } else {
        this.width = this.wrapper.clientWidth;
        this.height = this.wrapper.clientHeight;
      }
    };
    onContentResize = () => {
      if (this.wrapper instanceof Window) {
        this.scrollHeight = this.content.scrollHeight;
        this.scrollWidth = this.content.scrollWidth;
      } else {
        this.scrollHeight = this.wrapper.scrollHeight;
        this.scrollWidth = this.wrapper.scrollWidth;
      }
    };
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height
      };
    }
  };

  // packages/core/src/emitter.ts
  var Emitter = class {
    events = {};
    /**
     * Emit an event with the given data
     * @param event Event name
     * @param args Data to pass to the event handlers
     */
    emit(event, ...args) {
      let callbacks = this.events[event] || [];
      for (let i = 0, length = callbacks.length; i < length; i++) {
        callbacks[i]?.(...args);
      }
    }
    /**
     * Add a callback to the event
     * @param event Event name
     * @param cb Callback function
     * @returns Unsubscribe function
     */
    on(event, cb) {
      this.events[event]?.push(cb) || (this.events[event] = [cb]);
      return () => {
        this.events[event] = this.events[event]?.filter((i) => cb !== i);
      };
    }
    /**
     * Remove a callback from the event
     * @param event Event name
     * @param callback Callback function
     */
    off(event, callback) {
      this.events[event] = this.events[event]?.filter((i) => callback !== i);
    }
    /**
     * Remove all event listeners and clean up
     */
    destroy() {
      this.events = {};
    }
  };

  // packages/core/src/virtual-scroll.ts
  var LINE_HEIGHT = 100 / 6;
  var listenerOptions = { passive: false };
  var VirtualScroll = class {
    constructor(element, options = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      this.element = element;
      this.options = options;
      window.addEventListener("resize", this.onWindowResize, false);
      this.onWindowResize();
      this.element.addEventListener("wheel", this.onWheel, listenerOptions);
      this.element.addEventListener(
        "touchstart",
        this.onTouchStart,
        listenerOptions
      );
      this.element.addEventListener(
        "touchmove",
        this.onTouchMove,
        listenerOptions
      );
      this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
    }
    touchStart = {
      x: 0,
      y: 0
    };
    lastDelta = {
      x: 0,
      y: 0
    };
    window = {
      width: 0,
      height: 0
    };
    emitter = new Emitter();
    /**
     * Add an event listener for the given event and callback
     *
     * @param event Event name
     * @param callback Callback function
     */
    on(event, callback) {
      return this.emitter.on(event, callback);
    }
    /** Remove all event listeners and clean up */
    destroy() {
      this.emitter.destroy();
      window.removeEventListener("resize", this.onWindowResize, false);
      this.element.removeEventListener("wheel", this.onWheel, listenerOptions);
      this.element.removeEventListener(
        "touchstart",
        this.onTouchStart,
        listenerOptions
      );
      this.element.removeEventListener(
        "touchmove",
        this.onTouchMove,
        listenerOptions
      );
      this.element.removeEventListener(
        "touchend",
        this.onTouchEnd,
        listenerOptions
      );
    }
    /**
     * Event handler for 'touchstart' event
     *
     * @param event Touch event
     */
    onTouchStart = (event) => {
      const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
      this.touchStart.x = clientX;
      this.touchStart.y = clientY;
      this.lastDelta = {
        x: 0,
        y: 0
      };
      this.emitter.emit("scroll", {
        deltaX: 0,
        deltaY: 0,
        event
      });
    };
    /** Event handler for 'touchmove' event */
    onTouchMove = (event) => {
      const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
      const deltaX = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
      const deltaY = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
      this.touchStart.x = clientX;
      this.touchStart.y = clientY;
      this.lastDelta = {
        x: deltaX,
        y: deltaY
      };
      this.emitter.emit("scroll", {
        deltaX,
        deltaY,
        event
      });
    };
    onTouchEnd = (event) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event
      });
    };
    /** Event handler for 'wheel' event */
    onWheel = (event) => {
      let { deltaX, deltaY, deltaMode } = event;
      const multiplierX = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.width : 1;
      const multiplierY = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.height : 1;
      deltaX *= multiplierX;
      deltaY *= multiplierY;
      deltaX *= this.options.wheelMultiplier;
      deltaY *= this.options.wheelMultiplier;
      this.emitter.emit("scroll", { deltaX, deltaY, event });
    };
    onWindowResize = () => {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };
  };

  // packages/core/src/lenis.ts
  var defaultEasing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));
  var Lenis = class {
    _isScrolling = false;
    // true when scroll is animating
    _isStopped = false;
    // true if user should not be able to scroll - enable/disable programmatically
    _isLocked = false;
    // same as isStopped but enabled/disabled when scroll reaches target
    _preventNextNativeScrollEvent = false;
    _resetVelocityTimeout = null;
    _rafId = null;
    /**
     * Whether or not the user is touching the screen
     */
    isTouching;
    /**
     * The time in ms since the lenis instance was created
     */
    time = 0;
    /**
     * User data that will be forwarded through the scroll event
     *
     * @example
     * lenis.scrollTo(100, {
     *   userData: {
     *     foo: 'bar'
     *   }
     * })
     */
    userData = {};
    /**
     * The last velocity of the scroll
     */
    lastVelocity = 0;
    /**
     * The current velocity of the scroll
     */
    velocity = 0;
    /**
     * The direction of the scroll
     */
    direction = 0;
    /**
     * The options passed to the lenis instance
     */
    options;
    /**
     * The target scroll value
     */
    targetScroll;
    /**
     * The animated scroll value
     */
    animatedScroll;
    // These are instanciated here as they don't need information from the options
    animate = new Animate();
    emitter = new Emitter();
    // These are instanciated in the constructor as they need information from the options
    dimensions;
    // This is not private because it's used in the Snap class
    virtualScroll;
    constructor({
      wrapper = window,
      content = document.documentElement,
      eventsTarget = wrapper,
      smoothWheel = true,
      syncTouch = false,
      syncTouchLerp = 0.075,
      touchInertiaExponent = 1.7,
      duration,
      // in seconds
      easing,
      lerp: lerp2 = 0.1,
      infinite = false,
      orientation = "vertical",
      // vertical, horizontal
      gestureOrientation = orientation === "horizontal" ? "both" : "vertical",
      // vertical, horizontal, both
      touchMultiplier = 1,
      wheelMultiplier = 1,
      autoResize = true,
      prevent,
      virtualScroll,
      overscroll = true,
      autoRaf = false,
      anchors = false,
      autoToggle = false,
      // https://caniuse.com/?search=transition-behavior
      allowNestedScroll = false,
      // @ts-ignore: this will be deprecated in the future
      __experimental__naiveDimensions = false,
      naiveDimensions = __experimental__naiveDimensions,
      stopInertiaOnNavigate = false
    } = {}) {
      window.lenisVersion = version;
      if (!wrapper || wrapper === document.documentElement) {
        wrapper = window;
      }
      if (typeof duration === "number" && typeof easing !== "function") {
        easing = defaultEasing;
      } else if (typeof easing === "function" && typeof duration !== "number") {
        duration = 1;
      }
      this.options = {
        wrapper,
        content,
        eventsTarget,
        smoothWheel,
        syncTouch,
        syncTouchLerp,
        touchInertiaExponent,
        duration,
        easing,
        lerp: lerp2,
        infinite,
        gestureOrientation,
        orientation,
        touchMultiplier,
        wheelMultiplier,
        autoResize,
        prevent,
        virtualScroll,
        overscroll,
        autoRaf,
        anchors,
        autoToggle,
        allowNestedScroll,
        naiveDimensions,
        stopInertiaOnNavigate
      };
      this.dimensions = new Dimensions(wrapper, content, { autoResize });
      this.updateClassName();
      this.targetScroll = this.animatedScroll = this.actualScroll;
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false);
      this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
        capture: true
      });
      if (this.options.anchors || this.options.stopInertiaOnNavigate) {
        this.options.wrapper.addEventListener(
          "click",
          this.onClick,
          false
        );
      }
      this.options.wrapper.addEventListener(
        "pointerdown",
        this.onPointerDown,
        false
      );
      this.virtualScroll = new VirtualScroll(eventsTarget, {
        touchMultiplier,
        wheelMultiplier
      });
      this.virtualScroll.on("scroll", this.onVirtualScroll);
      if (this.options.autoToggle) {
        this.checkOverflow();
        this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
          passive: true
        });
      }
      if (this.options.autoRaf) {
        this._rafId = requestAnimationFrame(this.raf);
      }
    }
    /**
     * Destroy the lenis instance, remove all event listeners and clean up the class name
     */
    destroy() {
      this.emitter.destroy();
      this.options.wrapper.removeEventListener(
        "scroll",
        this.onNativeScroll,
        false
      );
      this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
        capture: true
      });
      this.options.wrapper.removeEventListener(
        "pointerdown",
        this.onPointerDown,
        false
      );
      if (this.options.anchors || this.options.stopInertiaOnNavigate) {
        this.options.wrapper.removeEventListener(
          "click",
          this.onClick,
          false
        );
      }
      this.virtualScroll.destroy();
      this.dimensions.destroy();
      this.cleanUpClassName();
      if (this._rafId) {
        cancelAnimationFrame(this._rafId);
      }
    }
    on(event, callback) {
      return this.emitter.on(event, callback);
    }
    off(event, callback) {
      return this.emitter.off(event, callback);
    }
    onScrollEnd = (e) => {
      if (!(e instanceof CustomEvent)) {
        if (this.isScrolling === "smooth" || this.isScrolling === false) {
          e.stopPropagation();
        }
      }
    };
    dispatchScrollendEvent = () => {
      this.options.wrapper.dispatchEvent(
        new CustomEvent("scrollend", {
          bubbles: this.options.wrapper === window,
          // cancelable: false,
          detail: {
            lenisScrollEnd: true
          }
        })
      );
    };
    get overflow() {
      const property = this.isHorizontal ? "overflow-x" : "overflow-y";
      return getComputedStyle(this.rootElement)[property];
    }
    checkOverflow() {
      if (["hidden", "clip"].includes(this.overflow)) {
        this.internalStop();
      } else {
        this.internalStart();
      }
    }
    onTransitionEnd = (event) => {
      if (event.propertyName.includes("overflow")) {
        this.checkOverflow();
      }
    };
    setScroll(scroll) {
      if (this.isHorizontal) {
        this.options.wrapper.scrollTo({ left: scroll, behavior: "instant" });
      } else {
        this.options.wrapper.scrollTo({ top: scroll, behavior: "instant" });
      }
    }
    onClick = (event) => {
      const path = event.composedPath();
      const anchorElements = path.filter(
        (node) => node instanceof HTMLAnchorElement && node.getAttribute("href")
      );
      if (this.options.anchors) {
        const anchor = anchorElements.find(
          (node) => node.getAttribute("href")?.includes("#")
        );
        if (anchor) {
          const href = anchor.getAttribute("href");
          if (href) {
            const options = typeof this.options.anchors === "object" && this.options.anchors ? this.options.anchors : void 0;
            const target = `#${href.split("#")[1]}`;
            this.scrollTo(target, options);
          }
        }
      }
      if (this.options.stopInertiaOnNavigate) {
        const internalLink = anchorElements.find(
          (node) => node.host === window.location.host
        );
        if (internalLink) {
          this.reset();
        }
      }
    };
    onPointerDown = (event) => {
      if (event.button === 1) {
        this.reset();
      }
    };
    onVirtualScroll = (data) => {
      if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(data) === false)
        return;
      const { deltaX, deltaY, event } = data;
      this.emitter.emit("virtual-scroll", { deltaX, deltaY, event });
      if (event.ctrlKey) return;
      if (event.lenisStopPropagation) return;
      const isTouch = event.type.includes("touch");
      const isWheel = event.type.includes("wheel");
      this.isTouching = event.type === "touchstart" || event.type === "touchmove";
      const isClickOrTap = deltaX === 0 && deltaY === 0;
      const isTapToStop = this.options.syncTouch && isTouch && event.type === "touchstart" && isClickOrTap && !this.isStopped && !this.isLocked;
      if (isTapToStop) {
        this.reset();
        return;
      }
      const isUnknownGesture = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
      if (isClickOrTap || isUnknownGesture) {
        return;
      }
      let composedPath = event.composedPath();
      composedPath = composedPath.slice(0, composedPath.indexOf(this.rootElement));
      const prevent = this.options.prevent;
      if (!!composedPath.find(
        (node) => node instanceof HTMLElement && (typeof prevent === "function" && prevent?.(node) || node.hasAttribute?.("data-lenis-prevent") || isTouch && node.hasAttribute?.("data-lenis-prevent-touch") || isWheel && node.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.checkNestedScroll(node, { deltaX, deltaY }))
      ))
        return;
      if (this.isStopped || this.isLocked) {
        if (event.cancelable) {
          event.preventDefault();
        }
        return;
      }
      const isSmooth = this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel;
      if (!isSmooth) {
        this.isScrolling = "native";
        this.animate.stop();
        event.lenisStopPropagation = true;
        return;
      }
      let delta = deltaY;
      if (this.options.gestureOrientation === "both") {
        delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
      } else if (this.options.gestureOrientation === "horizontal") {
        delta = deltaX;
      }
      if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) {
        event.lenisStopPropagation = true;
      }
      if (event.cancelable) {
        event.preventDefault();
      }
      const isSyncTouch = isTouch && this.options.syncTouch;
      const isTouchEnd = isTouch && event.type === "touchend";
      const hasTouchInertia = isTouchEnd;
      if (hasTouchInertia) {
        delta = Math.sign(this.velocity) * Math.pow(Math.abs(this.velocity), this.options.touchInertiaExponent);
      }
      this.scrollTo(this.targetScroll + delta, {
        programmatic: false,
        ...isSyncTouch ? {
          lerp: hasTouchInertia ? this.options.syncTouchLerp : 1
        } : {
          lerp: this.options.lerp,
          duration: this.options.duration,
          easing: this.options.easing
        }
      });
    };
    /**
     * Force lenis to recalculate the dimensions
     */
    resize() {
      this.dimensions.resize();
      this.animatedScroll = this.targetScroll = this.actualScroll;
      this.emit();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    onNativeScroll = () => {
      if (this._resetVelocityTimeout !== null) {
        clearTimeout(this._resetVelocityTimeout);
        this._resetVelocityTimeout = null;
      }
      if (this._preventNextNativeScrollEvent) {
        this._preventNextNativeScrollEvent = false;
        return;
      }
      if (this.isScrolling === false || this.isScrolling === "native") {
        const lastScroll = this.animatedScroll;
        this.animatedScroll = this.targetScroll = this.actualScroll;
        this.lastVelocity = this.velocity;
        this.velocity = this.animatedScroll - lastScroll;
        this.direction = Math.sign(
          this.animatedScroll - lastScroll
        );
        if (!this.isStopped) {
          this.isScrolling = "native";
        }
        this.emit();
        if (this.velocity !== 0) {
          this._resetVelocityTimeout = setTimeout(() => {
            this.lastVelocity = this.velocity;
            this.velocity = 0;
            this.isScrolling = false;
            this.emit();
          }, 400);
        }
      }
    };
    reset() {
      this.isLocked = false;
      this.isScrolling = false;
      this.animatedScroll = this.targetScroll = this.actualScroll;
      this.lastVelocity = this.velocity = 0;
      this.animate.stop();
    }
    /**
     * Start lenis scroll after it has been stopped
     */
    start() {
      if (!this.isStopped) return;
      if (this.options.autoToggle) {
        this.rootElement.style.removeProperty("overflow");
        return;
      }
      this.internalStart();
    }
    internalStart() {
      if (!this.isStopped) return;
      this.reset();
      this.isStopped = false;
      this.emit();
    }
    /**
     * Stop lenis scroll
     */
    stop() {
      if (this.isStopped) return;
      if (this.options.autoToggle) {
        this.rootElement.style.setProperty("overflow", "clip");
        return;
      }
      this.internalStop();
    }
    internalStop() {
      if (this.isStopped) return;
      this.reset();
      this.isStopped = true;
      this.emit();
    }
    /**
     * RequestAnimationFrame for lenis
     *
     * @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
     */
    raf = (time) => {
      const deltaTime = time - (this.time || time);
      this.time = time;
      this.animate.advance(deltaTime * 1e-3);
      if (this.options.autoRaf) {
        this._rafId = requestAnimationFrame(this.raf);
      }
    };
    /**
     * Scroll to a target value
     *
     * @param target The target value to scroll to
     * @param options The options for the scroll
     *
     * @example
     * lenis.scrollTo(100, {
     *   offset: 100,
     *   duration: 1,
     *   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
     *   lerp: 0.1,
     *   onStart: () => {
     *     console.log('onStart')
     *   },
     *   onComplete: () => {
     *     console.log('onComplete')
     *   },
     * })
     */
    scrollTo(target, {
      offset = 0,
      immediate = false,
      lock = false,
      programmatic = true,
      // called from outside of the class
      lerp: lerp2 = programmatic ? this.options.lerp : void 0,
      duration = programmatic ? this.options.duration : void 0,
      easing = programmatic ? this.options.easing : void 0,
      onStart,
      onComplete,
      force = false,
      // scroll even if stopped
      userData
    } = {}) {
      if ((this.isStopped || this.isLocked) && !force) return;
      if (typeof target === "string" && ["top", "left", "start", "#"].includes(target)) {
        target = 0;
      } else if (typeof target === "string" && ["bottom", "right", "end"].includes(target)) {
        target = this.limit;
      } else {
        let node;
        if (typeof target === "string") {
          node = document.querySelector(target);
          if (!node) {
            if (target === "#top") {
              target = 0;
            } else {
              console.warn("Lenis: Target not found", target);
            }
          }
        } else if (target instanceof HTMLElement && target?.nodeType) {
          node = target;
        }
        if (node) {
          if (this.options.wrapper !== window) {
            const wrapperRect = this.rootElement.getBoundingClientRect();
            offset -= this.isHorizontal ? wrapperRect.left : wrapperRect.top;
          }
          const rect = node.getBoundingClientRect();
          target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll;
        }
      }
      if (typeof target !== "number") return;
      target += offset;
      target = Math.round(target);
      if (this.options.infinite) {
        if (programmatic) {
          this.targetScroll = this.animatedScroll = this.scroll;
          const distance = target - this.animatedScroll;
          if (distance > this.limit / 2) {
            target = target - this.limit;
          } else if (distance < -this.limit / 2) {
            target = target + this.limit;
          }
        }
      } else {
        target = clamp$1(0, target, this.limit);
      }
      if (target === this.targetScroll) {
        onStart?.(this);
        onComplete?.(this);
        return;
      }
      this.userData = userData ?? {};
      if (immediate) {
        this.animatedScroll = this.targetScroll = target;
        this.setScroll(this.scroll);
        this.reset();
        this.preventNextNativeScrollEvent();
        this.emit();
        onComplete?.(this);
        this.userData = {};
        requestAnimationFrame(() => {
          this.dispatchScrollendEvent();
        });
        return;
      }
      if (!programmatic) {
        this.targetScroll = target;
      }
      if (typeof duration === "number" && typeof easing !== "function") {
        easing = defaultEasing;
      } else if (typeof easing === "function" && typeof duration !== "number") {
        duration = 1;
      }
      this.animate.fromTo(this.animatedScroll, target, {
        duration,
        easing,
        lerp: lerp2,
        onStart: () => {
          if (lock) this.isLocked = true;
          this.isScrolling = "smooth";
          onStart?.(this);
        },
        onUpdate: (value, completed) => {
          this.isScrolling = "smooth";
          this.lastVelocity = this.velocity;
          this.velocity = value - this.animatedScroll;
          this.direction = Math.sign(this.velocity);
          this.animatedScroll = value;
          this.setScroll(this.scroll);
          if (programmatic) {
            this.targetScroll = value;
          }
          if (!completed) this.emit();
          if (completed) {
            this.reset();
            this.emit();
            onComplete?.(this);
            this.userData = {};
            requestAnimationFrame(() => {
              this.dispatchScrollendEvent();
            });
            this.preventNextNativeScrollEvent();
          }
        }
      });
    }
    preventNextNativeScrollEvent() {
      this._preventNextNativeScrollEvent = true;
      requestAnimationFrame(() => {
        this._preventNextNativeScrollEvent = false;
      });
    }
    checkNestedScroll(node, { deltaX, deltaY }) {
      const time = Date.now();
      const cache = node._lenis ??= {};
      let hasOverflowX, hasOverflowY, isScrollableX, isScrollableY, scrollWidth, scrollHeight, clientWidth, clientHeight;
      const gestureOrientation = this.options.gestureOrientation;
      if (time - (cache.time ?? 0) > 2e3) {
        cache.time = Date.now();
        const computedStyle = window.getComputedStyle(node);
        cache.computedStyle = computedStyle;
        const overflowXString = computedStyle.overflowX;
        const overflowYString = computedStyle.overflowY;
        hasOverflowX = ["auto", "overlay", "scroll"].includes(overflowXString);
        hasOverflowY = ["auto", "overlay", "scroll"].includes(overflowYString);
        cache.hasOverflowX = hasOverflowX;
        cache.hasOverflowY = hasOverflowY;
        if (!hasOverflowX && !hasOverflowY) return false;
        if (gestureOrientation === "vertical" && !hasOverflowY) return false;
        if (gestureOrientation === "horizontal" && !hasOverflowX) return false;
        scrollWidth = node.scrollWidth;
        scrollHeight = node.scrollHeight;
        clientWidth = node.clientWidth;
        clientHeight = node.clientHeight;
        isScrollableX = scrollWidth > clientWidth;
        isScrollableY = scrollHeight > clientHeight;
        cache.isScrollableX = isScrollableX;
        cache.isScrollableY = isScrollableY;
        cache.scrollWidth = scrollWidth;
        cache.scrollHeight = scrollHeight;
        cache.clientWidth = clientWidth;
        cache.clientHeight = clientHeight;
      } else {
        isScrollableX = cache.isScrollableX;
        isScrollableY = cache.isScrollableY;
        hasOverflowX = cache.hasOverflowX;
        hasOverflowY = cache.hasOverflowY;
        scrollWidth = cache.scrollWidth;
        scrollHeight = cache.scrollHeight;
        clientWidth = cache.clientWidth;
        clientHeight = cache.clientHeight;
      }
      if (!hasOverflowX && !hasOverflowY || !isScrollableX && !isScrollableY) {
        return false;
      }
      if (gestureOrientation === "vertical" && (!hasOverflowY || !isScrollableY))
        return false;
      if (gestureOrientation === "horizontal" && (!hasOverflowX || !isScrollableX))
        return false;
      let orientation;
      if (gestureOrientation === "horizontal") {
        orientation = "x";
      } else if (gestureOrientation === "vertical") {
        orientation = "y";
      } else {
        const isScrollingX = deltaX !== 0;
        const isScrollingY = deltaY !== 0;
        if (isScrollingX && hasOverflowX && isScrollableX) {
          orientation = "x";
        }
        if (isScrollingY && hasOverflowY && isScrollableY) {
          orientation = "y";
        }
      }
      if (!orientation) return false;
      let scroll, maxScroll, delta, hasOverflow, isScrollable;
      if (orientation === "x") {
        scroll = node.scrollLeft;
        maxScroll = scrollWidth - clientWidth;
        delta = deltaX;
        hasOverflow = hasOverflowX;
        isScrollable = isScrollableX;
      } else if (orientation === "y") {
        scroll = node.scrollTop;
        maxScroll = scrollHeight - clientHeight;
        delta = deltaY;
        hasOverflow = hasOverflowY;
        isScrollable = isScrollableY;
      } else {
        return false;
      }
      const willScroll = delta > 0 ? scroll < maxScroll : scroll > 0;
      return willScroll && hasOverflow && isScrollable;
    }
    /**
     * The root element on which lenis is instanced
     */
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    /**
     * The limit which is the maximum scroll value
     */
    get limit() {
      if (this.options.naiveDimensions) {
        if (this.isHorizontal) {
          return this.rootElement.scrollWidth - this.rootElement.clientWidth;
        } else {
          return this.rootElement.scrollHeight - this.rootElement.clientHeight;
        }
      } else {
        return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
    }
    /**
     * Whether or not the scroll is horizontal
     */
    get isHorizontal() {
      return this.options.orientation === "horizontal";
    }
    /**
     * The actual scroll value
     */
    get actualScroll() {
      const wrapper = this.options.wrapper;
      return this.isHorizontal ? wrapper.scrollX ?? wrapper.scrollLeft : wrapper.scrollY ?? wrapper.scrollTop;
    }
    /**
     * The current scroll value
     */
    get scroll() {
      return this.options.infinite ? modulo(this.animatedScroll, this.limit) : this.animatedScroll;
    }
    /**
     * The progress of the scroll relative to the limit
     */
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    /**
     * Current scroll state
     */
    get isScrolling() {
      return this._isScrolling;
    }
    set isScrolling(value) {
      if (this._isScrolling !== value) {
        this._isScrolling = value;
        this.updateClassName();
      }
    }
    /**
     * Check if lenis is stopped
     */
    get isStopped() {
      return this._isStopped;
    }
    set isStopped(value) {
      if (this._isStopped !== value) {
        this._isStopped = value;
        this.updateClassName();
      }
    }
    /**
     * Check if lenis is locked
     */
    get isLocked() {
      return this._isLocked;
    }
    set isLocked(value) {
      if (this._isLocked !== value) {
        this._isLocked = value;
        this.updateClassName();
      }
    }
    /**
     * Check if lenis is smooth scrolling
     */
    get isSmooth() {
      return this.isScrolling === "smooth";
    }
    /**
     * The class name applied to the wrapper element
     */
    get className() {
      let className = "lenis";
      if (this.options.autoToggle) className += " lenis-autoToggle";
      if (this.isStopped) className += " lenis-stopped";
      if (this.isLocked) className += " lenis-locked";
      if (this.isScrolling) className += " lenis-scrolling";
      if (this.isScrolling === "smooth") className += " lenis-smooth";
      return className;
    }
    updateClassName() {
      this.cleanUpClassName();
      this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
    }
    cleanUpClassName() {
      this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
    }
  };

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
        _ref$root = _ref.root,
        root = _ref$root === void 0 ? null : _ref$root,
        IORaf = _ref.IORaf;
      this.scrollElements = void 0;
      this.rootMargin = void 0;
      this.root = void 0;
      this.IORaf = void 0;
      this.observer = void 0;
      // Parameters
      this.scrollElements = scrollElements;
      this.rootMargin = rootMargin;
      this.root = root;
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
        root: this.root,
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

  /**
   * Scroll Element
   *
   * Give tools to compute element progress in the viewport and triggers callbacks to animate it.
   *
   * Features functions to:
   *
   * - scrollClass - Add a custom class when the element is intersected by the offset
   * - scrollOffset - Determine offsets to intersect the element
   * - scrollPosition - Determine the element positions to consider an element as intersected.
   * - scrollCssProgress - Add a specific css variable (PROGRESS_CSS_VAR) that store the scroll progress
   * - scrollEventProgress - Send scroll progress to custom event listeners.
   * - scrollSpeed - Add a scroll multiplicator to create a parallax effect
   * - scrollRepeat - Repeat the option to trigger animation each time the element is intersected
   * - scrollCall - Call a custom event when the element is intersected
   */
  /** Constants */
  var INVIEW_CLASS = 'is-inview';
  var PROGRESS_CSS_VAR = '--progress';
  var ScrollElement = /*#__PURE__*/function () {
    function ScrollElement(_ref) {
      var _this$$el$dataset$scr,
        _this$$el$dataset$scr2,
        _this$$el$dataset$scr3,
        _this$$el$dataset$scr4,
        _this$$el$dataset$scr5,
        _this = this;
      var $el = _ref.$el,
        id = _ref.id,
        subscribeElementUpdateFn = _ref.subscribeElementUpdateFn,
        unsubscribeElementUpdateFn = _ref.unsubscribeElementUpdateFn,
        needRaf = _ref.needRaf,
        scrollOrientation = _ref.scrollOrientation,
        lenisInstance = _ref.lenisInstance;
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
      this.isInview = void 0;
      this.isInteractive = void 0;
      this.isInFold = void 0;
      this.isFirstResize = void 0;
      this.subscribeElementUpdateFn = void 0;
      this.unsubscribeElementUpdateFn = void 0;
      this.lenisInstance = void 0;
      // Cached functions to avoid orientation checks every frame
      this.getWindowSize = void 0;
      this.getMetricsStart = void 0;
      this.getMetricsSize = void 0;
      // Position handlers for intersection.start (includes wSize)
      this.startPositionHandlers = {
        'start': function start(offsetStart, wSize, viewport) {
          return offsetStart - wSize + viewport;
        },
        'middle': function middle(offsetStart, wSize, viewport, size) {
          return offsetStart - wSize + viewport + size * 0.5;
        },
        'end': function end(offsetStart, wSize, viewport, size) {
          return offsetStart - wSize + viewport + size;
        },
        'fold': function fold() {
          return 0;
        }
      };
      // Position handlers for intersection.end (DOES NOT include wSize - critical difference)
      this.endPositionHandlers = {
        'start': function start(offsetStart, viewport) {
          return offsetStart - viewport;
        },
        'middle': function middle(offsetStart, viewport, size) {
          return offsetStart - viewport + size * 0.5;
        },
        'end': function end(offsetStart, viewport, size) {
          return offsetStart - viewport + size;
        }
      };
      // Scroll DOM element
      this.$el = $el;
      // Unique ID
      this.id = id;
      // RAF option
      this.needRaf = needRaf;
      // Scroll Direction
      this.scrollOrientation = scrollOrientation;
      // Lenis instance
      this.lenisInstance = lenisInstance;
      // Parent's callbacks
      this.subscribeElementUpdateFn = subscribeElementUpdateFn;
      this.unsubscribeElementUpdateFn = unsubscribeElementUpdateFn;
      // Attributes
      this.attributes = {
        scrollClass: (_this$$el$dataset$scr = this.$el.dataset['scrollClass']) != null ? _this$$el$dataset$scr : INVIEW_CLASS,
        scrollOffset: (_this$$el$dataset$scr2 = this.$el.dataset['scrollOffset']) != null ? _this$$el$dataset$scr2 : '0,0',
        scrollPosition: (_this$$el$dataset$scr3 = this.$el.dataset['scrollPosition']) != null ? _this$$el$dataset$scr3 : 'start,end',
        scrollCssProgress: this.$el.dataset['scrollCssProgress'] !== undefined,
        scrollEventProgress: (_this$$el$dataset$scr4 = this.$el.dataset['scrollEventProgress']) != null ? _this$$el$dataset$scr4 : null,
        scrollSpeed: this.$el.dataset['scrollSpeed'] !== undefined ? parseFloat(this.$el.dataset['scrollSpeed']) : null,
        scrollRepeat: this.$el.dataset['scrollRepeat'] !== undefined,
        scrollCall: (_this$$el$dataset$scr5 = this.$el.dataset['scrollCall']) != null ? _this$$el$dataset$scr5 : null,
        scrollIgnoreFold: this.$el.dataset['scrollIgnoreFold'] !== undefined,
        scrollEnableTouchSpeed: this.$el.dataset['scrollEnableTouchSpeed'] !== undefined
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
      this.currentScroll = this.lenisInstance.scroll;
      // Parallax
      this.translateValue = 0;
      // Progress
      this.progress = 0;
      this.lastProgress = null;
      // Inview
      this.isInview = false;
      this.isInteractive = false;
      this.isAlreadyIntersected = false;
      this.isInFold = false;
      this.isFirstResize = true;
      // Cache orientation-dependent functions to avoid repeated conditionals
      this.getWindowSize = this.scrollOrientation === 'vertical' ? function () {
        return _this.lenisInstance.dimensions.height;
      } : function () {
        return _this.lenisInstance.dimensions.width;
      };
      this.getMetricsStart = this.scrollOrientation === 'vertical' ? function (bcr) {
        return bcr.top;
      } : function (bcr) {
        return bcr.left;
      };
      this.getMetricsSize = this.scrollOrientation === 'vertical' ? function (bcr) {
        return bcr.height;
      } : function (bcr) {
        return bcr.width;
      };
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
      var wSize = this.getWindowSize();
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
      this.lastProgress !== null && this._computeProgress(closestNumber([0, 1], this.lastProgress));
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
      var wSize = this.getWindowSize();
      var metricsStart = this.getMetricsStart(this.metrics.bcr);
      var metricsSize = this.getMetricsSize(this.metrics.bcr);
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
     * Uses handler-based approach for cleaner, more maintainable code.
     *
     * @private
     */;
    _proto._computeIntersection = function _computeIntersection() {
      var _offset$0$trim, _offset$, _offset$1$trim, _offset$2, _scrollPosition$0$tri, _scrollPosition$, _scrollPosition$1$tri, _scrollPosition$2;
      var wSize = this.getWindowSize();
      var metricsSize = this.getMetricsSize(this.metrics.bcr);
      // Parse offset
      var offset = this.attributes.scrollOffset.split(',');
      var offsetStart = (_offset$0$trim = (_offset$ = offset[0]) == null ? void 0 : _offset$.trim()) != null ? _offset$0$trim : '0';
      var offsetEnd = (_offset$1$trim = (_offset$2 = offset[1]) == null ? void 0 : _offset$2.trim()) != null ? _offset$1$trim : '0';
      // Parse positions
      var scrollPosition = this.attributes.scrollPosition.split(',');
      var scrollPositionStart = (_scrollPosition$0$tri = (_scrollPosition$ = scrollPosition[0]) == null ? void 0 : _scrollPosition$.trim()) != null ? _scrollPosition$0$tri : 'start';
      var scrollPositionEnd = (_scrollPosition$1$tri = (_scrollPosition$2 = scrollPosition[1]) == null ? void 0 : _scrollPosition$2.trim()) != null ? _scrollPosition$1$tri : 'end';
      // Calculate viewport offsets
      var viewportStart = offsetStart.includes('%') ? wSize * parseInt(offsetStart.replace('%', '').trim()) * 0.01 : parseInt(offsetStart);
      var viewportEnd = offsetEnd.includes('%') ? wSize * parseInt(offsetEnd.replace('%', '').trim()) * 0.01 : parseInt(offsetEnd);
      // Fold exception
      if (this.isInFold) {
        scrollPositionStart = 'fold';
      }
      // Calculate intersection.start using handlers
      var startHandler = this.startPositionHandlers[scrollPositionStart];
      this.intersection.start = startHandler ? startHandler(this.metrics.offsetStart, wSize, viewportStart, metricsSize) : this.metrics.offsetStart - wSize + viewportStart; // default fallback
      // Calculate intersection.end using handlers
      var endHandler = this.endPositionHandlers[scrollPositionEnd];
      this.intersection.end = endHandler ? endHandler(this.metrics.offsetStart, viewportEnd, metricsSize) : this.metrics.offsetStart - viewportEnd + metricsSize; // default fallback
      // Ensure end > start
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
      if (progress !== this.lastProgress) {
        this.lastProgress = progress;
        // Set the element's progress to the css variable
        this.attributes.scrollCssProgress && this._setCssProgress(progress);
        // Set the element's progress to the custom event listeners
        this.attributes.scrollEventProgress && this._setCustomEventProgress(progress);
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
     * Function to get scroll call from.
     *
     * @private
     */;
    _proto._getScrollCallFrom = function _getScrollCallFrom() {
      var closestIntersectionValue = closestNumber([this.intersection.start, this.intersection.end], this.currentScroll);
      return this.intersection.start === closestIntersectionValue ? 'start' : 'end';
    }
    /**
     * Lifecyle - Destroy and cleanup the scroll element.
     *
     * Removes all CSS modifications and clears references to prevent memory leaks.
     */;
    _proto.destroy = function destroy() {
      // Remove CSS variables
      if (this.attributes.scrollCssProgress) {
        this.$el.style.removeProperty(PROGRESS_CSS_VAR);
      }
      // Remove transform if parallax was applied
      if (this.attributes.scrollSpeed) {
        this.$el.style.removeProperty('transform');
      }
      // Remove class if added
      if (this.isInview && this.attributes.scrollClass) {
        this.$el.classList.remove(this.attributes.scrollClass);
      }
    }
    /**
     * Function to dispatch a custom event.
     *
     * @private
     *
     * @param {string} way - Enter or leave.
     * @param {string} from - Start or end.
     */;
    _proto._dispatchCall = function _dispatchCall(way, from) {
      var customEventName = this.attributes.scrollCall;
      if (!customEventName) return;
      // Using CustomEvent API (https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
      var customEvent = new CustomEvent(customEventName, {
        detail: {
          target: this.$el,
          way: way,
          from: from
        }
      });
      window.dispatchEvent(customEvent);
    };
    return ScrollElement;
  }();

  /** Defined attributes that need a requestAnimationFrame */
  var ATTRIBUTES_THAT_NEED_RAF = ['scrollOffset', 'scrollPosition', 'scrollCssProgress', 'scrollEventProgress', 'scrollSpeed'];
  /** Default root margins */
  var TRIGGER_ROOT_MARGIN = '-1px -1px -1px -1px';
  var RAF_ROOT_MARGIN = '100% 100% 100% 100%'; // Add 100vh top/bottom && 100vw left/right to use a biggest value with data-scroll-speed
  /** Default scroll attribute values */
  var DEFAULT_SCROLL_OFFSET = '0,0';
  var DEFAULT_SCROLL_POSITION = 'top,bottom';
  var Core = /*#__PURE__*/function () {
    function Core(_ref) {
      var $el = _ref.$el,
        triggerRootMargin = _ref.triggerRootMargin,
        rafRootMargin = _ref.rafRootMargin,
        scrollOrientation = _ref.scrollOrientation,
        lenisInstance = _ref.lenisInstance;
      this.$scrollContainer = void 0;
      this.triggerRootMargin = void 0;
      this.rafRootMargin = void 0;
      this.scrollElements = void 0;
      this.triggeredScrollElements = void 0;
      this.RAFScrollElements = void 0;
      this.scrollElementsToUpdate = void 0;
      this.IOTriggerInstance = void 0;
      this.IORafInstance = void 0;
      this.scrollOrientation = void 0;
      this.lenisInstance = void 0;
      if (!$el) {
        console.error('Please provide a DOM Element as scrollContainer');
        return;
      }
      // Scroll container
      this.$scrollContainer = $el;
      // Lenis instance
      this.lenisInstance = lenisInstance;
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
      var $scrollElementsArr = this.toElementArray($scrollElements);
      this._subscribeScrollElements($scrollElementsArr);
      // Determine IO root (null for window, wrapper element for custom container)
      var ioRoot = this.lenisInstance.options.wrapper === window ? null : this.lenisInstance.options.wrapper;
      // Trigger IO
      this.IOTriggerInstance = new IO({
        scrollElements: [].concat(this.triggeredScrollElements),
        root: ioRoot,
        rootMargin: this.triggerRootMargin,
        IORaf: false
      });
      // Raf IO
      this.IORafInstance = new IO({
        scrollElements: [].concat(this.RAFScrollElements),
        root: ioRoot,
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
      var $scrollElementsToRemoveSet = new Set(Array.from($scrollElementsToRemove));
      // 1. Remove from IO
      for (var index = 0; index < this.triggeredScrollElements.length; index++) {
        var scrollElement = this.triggeredScrollElements[index];
        if ($scrollElementsToRemoveSet.has(scrollElement.$el)) {
          this.IOTriggerInstance.unobserve(scrollElement.$el);
          this.triggeredScrollElements.splice(index, 1);
        }
      }
      for (var _index = 0; _index < this.RAFScrollElements.length; _index++) {
        var _scrollElement = this.RAFScrollElements[_index];
        if ($scrollElementsToRemoveSet.has(_scrollElement.$el)) {
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
      var $scrollElementsArr = this.toElementArray($scrollElements);
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
          lenisInstance: this.lenisInstance,
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
      // Destroy all scroll elements to clean up CSS and references
      for (var _iterator3 = _createForOfIteratorHelperLoose(this.scrollElements), _step3; !(_step3 = _iterator3()).done;) {
        var scrollElement = _step3.value;
        scrollElement.destroy();
      }
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
     * Convert NodeListOf<Element> to HTMLElement array.
     *
     * @private
     *
     * @param {NodeListOf<Element>} elements - The NodeList to convert.
     *
     * @returns {HTMLElement[]}
     */;
    _proto.toElementArray = function toElementArray(elements) {
      return Array.from(elements);
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
          return attribute !== attributeToRemove;
        });
      };
      // 1. Check scroll offset values
      if ($scrollElement.dataset.scrollOffset) {
        var value = $scrollElement.dataset.scrollOffset.split(',').map(function (test) {
          return test.replace('%', '').trim();
        }).join(',');
        if (value !== DEFAULT_SCROLL_OFFSET) {
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
        if (_value !== DEFAULT_SCROLL_POSITION) {
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
      for (var _iterator4 = _createForOfIteratorHelperLoose(attributesThatNeedRaf), _step4; !(_step4 = _iterator4()).done;) {
        var attribute = _step4.value;
        if (attribute in $scrollElement.dataset) {
          return true;
        }
      }
      return false;
    };
    return Core;
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
        triggerRootMargin = _ref.triggerRootMargin,
        rafRootMargin = _ref.rafRootMargin,
        _ref$autoStart = _ref.autoStart,
        autoStart = _ref$autoStart === void 0 ? true : _ref$autoStart,
        _ref$scrollCallback = _ref.scrollCallback,
        scrollCallback = _ref$scrollCallback === void 0 ? function () {} : _ref$scrollCallback,
        initCustomTicker = _ref.initCustomTicker,
        destroyCustomTicker = _ref.destroyCustomTicker;
      this.rafPlaying = void 0;
      this.lenisInstance = null;
      this.coreInstance = null;
      this.lenisOptions = void 0;
      this.triggerRootMargin = void 0;
      this.rafRootMargin = void 0;
      this.rafInstance = void 0;
      this.autoStart = void 0;
      this.isTouchDevice = void 0;
      this.initCustomTicker = void 0;
      this.destroyCustomTicker = void 0;
      this._onRenderBind = void 0;
      this._onResizeBind = void 0;
      this._onScrollToBind = void 0;
      this._originalOnContentResize = void 0;
      this._originalOnWrapperResize = void 0;
      // Set version
      window.locomotiveScrollVersion = version$1;
      // Get arguments
      Object.assign(this, {
        lenisOptions: lenisOptions,
        triggerRootMargin: triggerRootMargin,
        rafRootMargin: rafRootMargin,
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
      // Detect if device has touch capability
      this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
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
      var _this = this;
      // Create Lenis instance
      this.lenisInstance = new Lenis(_extends({}, this.lenisOptions));
      // Subscribe to scroll callback if provided
      if (this.scrollCallback) {
        this.lenisInstance.on('scroll', this.scrollCallback);
      }
      // Add scroll direction attribute on body
      document.documentElement.setAttribute('data-scroll-orientation', this.lenisInstance.options.orientation);
      requestAnimationFrame(function () {
        // Create Core Instance
        // lenisInstance is guaranteed to exist at this point (created above)
        _this.coreInstance = new Core({
          $el: _this.lenisInstance.rootElement,
          triggerRootMargin: _this.triggerRootMargin,
          rafRootMargin: _this.rafRootMargin,
          scrollOrientation: _this.lenisInstance.options.orientation,
          lenisInstance: _this.lenisInstance
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
      var _this$lenisInstance,
        _this2 = this;
      // Stop raf
      this.stop();
      // Unbind Events
      this._unbindEvents();
      // Destroy Lenis
      (_this$lenisInstance = this.lenisInstance) == null || _this$lenisInstance.destroy();
      // Destroy Core after RAF to ensure any pending Intersection Observer callbacks complete
      // This prevents race conditions when destroy() is called while IO callbacks are queued
      requestAnimationFrame(function () {
        var _this2$coreInstance;
        (_this2$coreInstance = _this2.coreInstance) == null || _this2$coreInstance.destroy();
      });
    }
    /**
     * Events - Subscribe events to listen.
     */;
    _proto._bindEvents = function _bindEvents() {
      var _this3 = this;
      this._bindScrollToEvents();
      // Hook into Lenis dimensions resize callbacks
      // onContentResize: called when content size changes (images load, dynamic content)
      // onWrapperResize: called when wrapper size changes (window resize, layout changes)
      if (this.lenisInstance) {
        this._originalOnContentResize = this.lenisInstance.dimensions.onContentResize.bind(this.lenisInstance.dimensions);
        this._originalOnWrapperResize = this.lenisInstance.dimensions.onWrapperResize.bind(this.lenisInstance.dimensions);
        this.lenisInstance.dimensions.onContentResize = function () {
          _this3._originalOnContentResize == null || _this3._originalOnContentResize();
          _this3._onResizeBind();
        };
        this.lenisInstance.dimensions.onWrapperResize = function () {
          _this3._originalOnWrapperResize == null || _this3._originalOnWrapperResize();
          _this3._onResizeBind();
        };
      }
    }
    /**
     * Events - Unsubscribe listened events.
     */;
    _proto._unbindEvents = function _unbindEvents() {
      this._unbindScrollToEvents();
      // Restore original Lenis dimensions resize callbacks
      if (this.lenisInstance) {
        if (this._originalOnContentResize) {
          this.lenisInstance.dimensions.onContentResize = this._originalOnContentResize;
        }
        if (this._originalOnWrapperResize) {
          this.lenisInstance.dimensions.onWrapperResize = this._originalOnWrapperResize;
        }
      }
    }
    /**
     * Events - Subscribe scrollTo events to listen.
     */;
    _proto._bindScrollToEvents = function _bindScrollToEvents($container) {
      var _this$lenisInstance2,
        _this4 = this;
      var $rootContainer = $container ? $container : (_this$lenisInstance2 = this.lenisInstance) == null ? void 0 : _this$lenisInstance2.rootElement;
      var $scrollToElements = $rootContainer == null ? void 0 : $rootContainer.querySelectorAll('[data-scroll-to]');
      ($scrollToElements == null ? void 0 : $scrollToElements.length) && $scrollToElements.forEach(function ($el) {
        $el.addEventListener('click', _this4._onScrollToBind, false);
      });
    }
    /**
     * Events - Unsubscribe scrollTo listened events.
     */;
    _proto._unbindScrollToEvents = function _unbindScrollToEvents($container) {
      var _this$lenisInstance3,
        _this5 = this;
      var $rootContainer = $container ? $container : (_this$lenisInstance3 = this.lenisInstance) == null ? void 0 : _this$lenisInstance3.rootElement;
      var $scrollToElements = $rootContainer == null ? void 0 : $rootContainer.querySelectorAll('[data-scroll-to]');
      ($scrollToElements == null ? void 0 : $scrollToElements.length) && $scrollToElements.forEach(function ($el) {
        $el.removeEventListener('click', _this5._onScrollToBind, false);
      });
    }
    /**
     * Callback - Resize callback.
     *
     * Called synchronously after Lenis updates its dimensions via onContentResize/onWrapperResize.
     * All dimension values are already up-to-date when this executes.
     */;
    _proto._onResize = function _onResize() {
      var _this$coreInstance, _this$lenisInstance$s, _this$lenisInstance4;
      (_this$coreInstance = this.coreInstance) == null || _this$coreInstance.onResize({
        currentScroll: (_this$lenisInstance$s = (_this$lenisInstance4 = this.lenisInstance) == null ? void 0 : _this$lenisInstance4.scroll) != null ? _this$lenisInstance$s : 0,
        smooth: !this.isTouchDevice
      });
    }
    /**
     * Callback - Render callback.
     */;
    _proto._onRender = function _onRender() {
      var _this$lenisInstance5, _this$coreInstance2, _this$lenisInstance$s2, _this$lenisInstance6;
      (_this$lenisInstance5 = this.lenisInstance) == null || _this$lenisInstance5.raf(Date.now());
      (_this$coreInstance2 = this.coreInstance) == null || _this$coreInstance2.onRender({
        currentScroll: (_this$lenisInstance$s2 = (_this$lenisInstance6 = this.lenisInstance) == null ? void 0 : _this$lenisInstance6.scroll) != null ? _this$lenisInstance$s2 : 0,
        smooth: !this.isTouchDevice
      });
    }
    /**
     * Callback - Scroll To callback.
     */;
    _proto._onScrollTo = function _onScrollTo(event) {
      var _event$currentTarget, _this$lenisInstance7;
      event.preventDefault();
      var $target = (_event$currentTarget = event.currentTarget) != null ? _event$currentTarget : null;
      if (!$target) return;
      var target = $target.getAttribute('data-scroll-to-href') || $target.getAttribute('href');
      var offset = $target.getAttribute('data-scroll-to-offset') || 0;
      var duration = $target.getAttribute('data-scroll-to-duration') || ((_this$lenisInstance7 = this.lenisInstance) == null ? void 0 : _this$lenisInstance7.options.duration);
      target && this.scrollTo(target, {
        offset: typeof offset === 'string' ? parseInt(offset) : offset,
        duration: typeof duration === 'string' ? parseInt(duration) : duration
      });
    }
    /**
     * Start RequestAnimationFrame that active Lenis smooth and scroll progress.
     */;
    _proto.start = function start() {
      var _this$lenisInstance8;
      if (this.rafPlaying) {
        return;
      }
      // Call lenis start method
      (_this$lenisInstance8 = this.lenisInstance) == null || _this$lenisInstance8.start();
      this.rafPlaying = true;
      this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf();
    }
    /**
     * Stop RequestAnimationFrame that active Lenis smooth and scroll progress.
     */;
    _proto.stop = function stop() {
      var _this$lenisInstance9;
      if (!this.rafPlaying) {
        return;
      }
      // Call lenis stop method
      (_this$lenisInstance9 = this.lenisInstance) == null || _this$lenisInstance9.stop();
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
      var _this$lenisInstance0;
      (_this$lenisInstance0 = this.lenisInstance) == null || _this$lenisInstance0.scrollTo(target, {
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
