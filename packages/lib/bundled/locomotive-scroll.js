(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define([], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.LocomotiveScroll = factory());
})(this, function() {
	// \0@oxc-project+runtime@0.157.0/helpers/esm/typeof.js
	function _typeof(o) {
		"@babel/helpers - typeof";
		return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
			return typeof o;
		} : function(o) {
			return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		}, _typeof(o);
	}
	// \0@oxc-project+runtime@0.157.0/helpers/esm/toPrimitive.js
	function toPrimitive(t, e) {
		if ("object" != _typeof(t) || !t) return t;
		var r;
		if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
			var i = r.call(t, e || "default");
			if ("object" != _typeof(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === e ? String : Number)(t);
	}
	// \0@oxc-project+runtime@0.157.0/helpers/esm/toPropertyKey.js
	function toPropertyKey(t) {
		var i = toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	// \0@oxc-project+runtime@0.157.0/helpers/esm/defineProperty.js
	function _defineProperty(e, r, t) {
		return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	// ../../node_modules/lenis/dist/lenis.mjs
	var version$1 = "1.3.17";
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
	var Animate = class {
		constructor() {
			_defineProperty(this, "isRunning", false);
			_defineProperty(this, "value", 0);
			_defineProperty(this, "from", 0);
			_defineProperty(this, "to", 0);
			_defineProperty(this, "currentTime", 0);
			_defineProperty(this, "lerp", void 0);
			_defineProperty(this, "duration", void 0);
			_defineProperty(this, "easing", void 0);
			_defineProperty(this, "onUpdate", void 0);
		}
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
			if (completed) this.stop();
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
	var Dimensions = class {
		constructor(wrapper, content, { autoResize = true, debounce: debounceValue = 250 } = {}) {
			_defineProperty(this, "width", 0);
			_defineProperty(this, "height", 0);
			_defineProperty(this, "scrollHeight", 0);
			_defineProperty(this, "scrollWidth", 0);
			_defineProperty(this, "debouncedResize", void 0);
			_defineProperty(this, "wrapperResizeObserver", void 0);
			_defineProperty(this, "contentResizeObserver", void 0);
			_defineProperty(this, "resize", () => {
				this.onWrapperResize();
				this.onContentResize();
			});
			_defineProperty(this, "onWrapperResize", () => {
				if (this.wrapper instanceof Window) {
					this.width = window.innerWidth;
					this.height = window.innerHeight;
				} else {
					this.width = this.wrapper.clientWidth;
					this.height = this.wrapper.clientHeight;
				}
			});
			_defineProperty(this, "onContentResize", () => {
				if (this.wrapper instanceof Window) {
					this.scrollHeight = this.content.scrollHeight;
					this.scrollWidth = this.content.scrollWidth;
				} else {
					this.scrollHeight = this.wrapper.scrollHeight;
					this.scrollWidth = this.wrapper.scrollWidth;
				}
			});
			this.wrapper = wrapper;
			this.content = content;
			if (autoResize) {
				this.debouncedResize = debounce(this.resize, debounceValue);
				if (this.wrapper instanceof Window) window.addEventListener("resize", this.debouncedResize, false);
				else {
					this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
					this.wrapperResizeObserver.observe(this.wrapper);
				}
				this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
				this.contentResizeObserver.observe(this.content);
			}
			this.resize();
		}
		destroy() {
			this.wrapperResizeObserver?.disconnect();
			this.contentResizeObserver?.disconnect();
			if (this.wrapper === window && this.debouncedResize) window.removeEventListener("resize", this.debouncedResize, false);
		}
		get limit() {
			return {
				x: this.scrollWidth - this.width,
				y: this.scrollHeight - this.height
			};
		}
	};
	var Emitter = class {
		constructor() {
			_defineProperty(this, "events", {});
		}
		/**
		* Emit an event with the given data
		* @param event Event name
		* @param args Data to pass to the event handlers
		*/
		emit(event, ...args) {
			let callbacks = this.events[event] || [];
			for (let i = 0, length = callbacks.length; i < length; i++) callbacks[i]?.(...args);
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
	var LINE_HEIGHT = 100 / 6;
	var listenerOptions = { passive: false };
	var VirtualScroll = class {
		constructor(element, options = {
			wheelMultiplier: 1,
			touchMultiplier: 1
		}) {
			_defineProperty(this, "touchStart", {
				x: 0,
				y: 0
			});
			_defineProperty(this, "lastDelta", {
				x: 0,
				y: 0
			});
			_defineProperty(this, "window", {
				width: 0,
				height: 0
			});
			_defineProperty(this, "emitter", new Emitter());
			_defineProperty(
				this,
				/**
				* Event handler for 'touchstart' event
				*
				* @param event Touch event
				*/
				"onTouchStart",
				(event) => {
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
				}
			);
			_defineProperty(
				this,
				/** Event handler for 'touchmove' event */
				"onTouchMove",
				(event) => {
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
				}
			);
			_defineProperty(this, "onTouchEnd", (event) => {
				this.emitter.emit("scroll", {
					deltaX: this.lastDelta.x,
					deltaY: this.lastDelta.y,
					event
				});
			});
			_defineProperty(
				this,
				/** Event handler for 'wheel' event */
				"onWheel",
				(event) => {
					let { deltaX, deltaY, deltaMode } = event;
					const multiplierX = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.width : 1;
					const multiplierY = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.height : 1;
					deltaX *= multiplierX;
					deltaY *= multiplierY;
					deltaX *= this.options.wheelMultiplier;
					deltaY *= this.options.wheelMultiplier;
					this.emitter.emit("scroll", {
						deltaX,
						deltaY,
						event
					});
				}
			);
			_defineProperty(this, "onWindowResize", () => {
				this.window = {
					width: window.innerWidth,
					height: window.innerHeight
				};
			});
			this.element = element;
			this.options = options;
			window.addEventListener("resize", this.onWindowResize, false);
			this.onWindowResize();
			this.element.addEventListener("wheel", this.onWheel, listenerOptions);
			this.element.addEventListener("touchstart", this.onTouchStart, listenerOptions);
			this.element.addEventListener("touchmove", this.onTouchMove, listenerOptions);
			this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
		}
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
			this.element.removeEventListener("touchstart", this.onTouchStart, listenerOptions);
			this.element.removeEventListener("touchmove", this.onTouchMove, listenerOptions);
			this.element.removeEventListener("touchend", this.onTouchEnd, listenerOptions);
		}
	};
	var defaultEasing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));
	var Lenis = class {
		constructor({ wrapper = window, content = document.documentElement, eventsTarget = wrapper, smoothWheel = true, syncTouch = false, syncTouchLerp = .075, touchInertiaExponent = 1.7, duration, easing, lerp: lerp2 = .1, infinite = false, orientation = "vertical", gestureOrientation = orientation === "horizontal" ? "both" : "vertical", touchMultiplier = 1, wheelMultiplier = 1, autoResize = true, prevent, virtualScroll, overscroll = true, autoRaf = false, anchors = false, autoToggle = false, allowNestedScroll = false, __experimental__naiveDimensions = false, naiveDimensions = __experimental__naiveDimensions, stopInertiaOnNavigate = false } = {}) {
			_defineProperty(this, "_isScrolling", false);
			_defineProperty(this, "_isStopped", false);
			_defineProperty(this, "_isLocked", false);
			_defineProperty(this, "_preventNextNativeScrollEvent", false);
			_defineProperty(this, "_resetVelocityTimeout", null);
			_defineProperty(this, "_rafId", null);
			_defineProperty(
				this,
				/**
				* Whether or not the user is touching the screen
				*/
				"isTouching",
				void 0
			);
			_defineProperty(
				this,
				/**
				* The time in ms since the lenis instance was created
				*/
				"time",
				0
			);
			_defineProperty(
				this,
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
				"userData",
				{}
			);
			_defineProperty(
				this,
				/**
				* The last velocity of the scroll
				*/
				"lastVelocity",
				0
			);
			_defineProperty(
				this,
				/**
				* The current velocity of the scroll
				*/
				"velocity",
				0
			);
			_defineProperty(
				this,
				/**
				* The direction of the scroll
				*/
				"direction",
				0
			);
			_defineProperty(
				this,
				/**
				* The options passed to the lenis instance
				*/
				"options",
				void 0
			);
			_defineProperty(
				this,
				/**
				* The target scroll value
				*/
				"targetScroll",
				void 0
			);
			_defineProperty(
				this,
				/**
				* The animated scroll value
				*/
				"animatedScroll",
				void 0
			);
			_defineProperty(this, "animate", new Animate());
			_defineProperty(this, "emitter", new Emitter());
			_defineProperty(this, "dimensions", void 0);
			_defineProperty(this, "virtualScroll", void 0);
			_defineProperty(this, "onScrollEnd", (e) => {
				if (!(e instanceof CustomEvent)) {
					if (this.isScrolling === "smooth" || this.isScrolling === false) e.stopPropagation();
				}
			});
			_defineProperty(this, "dispatchScrollendEvent", () => {
				this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
					bubbles: this.options.wrapper === window,
					detail: { lenisScrollEnd: true }
				}));
			});
			_defineProperty(this, "onTransitionEnd", (event) => {
				if (event.propertyName.includes("overflow")) this.checkOverflow();
			});
			_defineProperty(this, "onClick", (event) => {
				const anchorElements = event.composedPath().filter((node) => node instanceof HTMLAnchorElement && node.getAttribute("href"));
				if (this.options.anchors) {
					const anchor = anchorElements.find((node) => node.getAttribute("href")?.includes("#"));
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
					if (anchorElements.find((node) => node.host === window.location.host)) this.reset();
				}
			});
			_defineProperty(this, "onPointerDown", (event) => {
				if (event.button === 1) this.reset();
			});
			_defineProperty(this, "onVirtualScroll", (data) => {
				if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(data) === false) return;
				const { deltaX, deltaY, event } = data;
				this.emitter.emit("virtual-scroll", {
					deltaX,
					deltaY,
					event
				});
				if (event.ctrlKey) return;
				if (event.lenisStopPropagation) return;
				const isTouch = event.type.includes("touch");
				const isWheel = event.type.includes("wheel");
				this.isTouching = event.type === "touchstart" || event.type === "touchmove";
				const isClickOrTap = deltaX === 0 && deltaY === 0;
				if (this.options.syncTouch && isTouch && event.type === "touchstart" && isClickOrTap && !this.isStopped && !this.isLocked) {
					this.reset();
					return;
				}
				const isUnknownGesture = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
				if (isClickOrTap || isUnknownGesture) return;
				let composedPath = event.composedPath();
				composedPath = composedPath.slice(0, composedPath.indexOf(this.rootElement));
				const prevent = this.options.prevent;
				if (!!composedPath.find((node) => node instanceof HTMLElement && (typeof prevent === "function" && prevent?.(node) || node.hasAttribute?.("data-lenis-prevent") || isTouch && node.hasAttribute?.("data-lenis-prevent-touch") || isWheel && node.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.checkNestedScroll(node, {
					deltaX,
					deltaY
				})))) return;
				if (this.isStopped || this.isLocked) {
					if (event.cancelable) event.preventDefault();
					return;
				}
				if (!(this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel)) {
					this.isScrolling = "native";
					this.animate.stop();
					event.lenisStopPropagation = true;
					return;
				}
				let delta = deltaY;
				if (this.options.gestureOrientation === "both") delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
				else if (this.options.gestureOrientation === "horizontal") delta = deltaX;
				if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) event.lenisStopPropagation = true;
				if (event.cancelable) event.preventDefault();
				const isSyncTouch = isTouch && this.options.syncTouch;
				const hasTouchInertia = isTouch && event.type === "touchend";
				if (hasTouchInertia) delta = Math.sign(this.velocity) * Math.pow(Math.abs(this.velocity), this.options.touchInertiaExponent);
				this.scrollTo(this.targetScroll + delta, {
					programmatic: false,
					...isSyncTouch ? { lerp: hasTouchInertia ? this.options.syncTouchLerp : 1 } : {
						lerp: this.options.lerp,
						duration: this.options.duration,
						easing: this.options.easing
					}
				});
			});
			_defineProperty(this, "onNativeScroll", () => {
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
					this.direction = Math.sign(this.animatedScroll - lastScroll);
					if (!this.isStopped) this.isScrolling = "native";
					this.emit();
					if (this.velocity !== 0) this._resetVelocityTimeout = setTimeout(() => {
						this.lastVelocity = this.velocity;
						this.velocity = 0;
						this.isScrolling = false;
						this.emit();
					}, 400);
				}
			});
			_defineProperty(
				this,
				/**
				* RequestAnimationFrame for lenis
				*
				* @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
				*/
				"raf",
				(time) => {
					const deltaTime = time - (this.time || time);
					this.time = time;
					this.animate.advance(deltaTime * .001);
					if (this.options.autoRaf) this._rafId = requestAnimationFrame(this.raf);
				}
			);
			window.lenisVersion = version$1;
			if (!wrapper || wrapper === document.documentElement) wrapper = window;
			if (typeof duration === "number" && typeof easing !== "function") easing = defaultEasing;
			else if (typeof easing === "function" && typeof duration !== "number") duration = 1;
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
			this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: true });
			if (this.options.anchors || this.options.stopInertiaOnNavigate) this.options.wrapper.addEventListener("click", this.onClick, false);
			this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, false);
			this.virtualScroll = new VirtualScroll(eventsTarget, {
				touchMultiplier,
				wheelMultiplier
			});
			this.virtualScroll.on("scroll", this.onVirtualScroll);
			if (this.options.autoToggle) {
				this.checkOverflow();
				this.rootElement.addEventListener("transitionend", this.onTransitionEnd, { passive: true });
			}
			if (this.options.autoRaf) this._rafId = requestAnimationFrame(this.raf);
		}
		/**
		* Destroy the lenis instance, remove all event listeners and clean up the class name
		*/
		destroy() {
			this.emitter.destroy();
			this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, false);
			this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, { capture: true });
			this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, false);
			if (this.options.anchors || this.options.stopInertiaOnNavigate) this.options.wrapper.removeEventListener("click", this.onClick, false);
			this.virtualScroll.destroy();
			this.dimensions.destroy();
			this.cleanUpClassName();
			if (this._rafId) cancelAnimationFrame(this._rafId);
		}
		on(event, callback) {
			return this.emitter.on(event, callback);
		}
		off(event, callback) {
			return this.emitter.off(event, callback);
		}
		get overflow() {
			const property = this.isHorizontal ? "overflow-x" : "overflow-y";
			return getComputedStyle(this.rootElement)[property];
		}
		checkOverflow() {
			if (["hidden", "clip"].includes(this.overflow)) this.internalStop();
			else this.internalStart();
		}
		setScroll(scroll) {
			if (this.isHorizontal) this.options.wrapper.scrollTo({
				left: scroll,
				behavior: "instant"
			});
			else this.options.wrapper.scrollTo({
				top: scroll,
				behavior: "instant"
			});
		}
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
		scrollTo(target, { offset = 0, immediate = false, lock = false, programmatic = true, lerp: lerp2 = programmatic ? this.options.lerp : void 0, duration = programmatic ? this.options.duration : void 0, easing = programmatic ? this.options.easing : void 0, onStart, onComplete, force = false, userData } = {}) {
			if ((this.isStopped || this.isLocked) && !force) return;
			if (typeof target === "string" && [
				"top",
				"left",
				"start",
				"#"
			].includes(target)) target = 0;
			else if (typeof target === "string" && [
				"bottom",
				"right",
				"end"
			].includes(target)) target = this.limit;
			else {
				let node;
				if (typeof target === "string") {
					node = document.querySelector(target);
					if (!node) {
						if (target === "#top") target = 0;
						else console.warn("Lenis: Target not found", target);
					}
				} else if (target instanceof HTMLElement && target?.nodeType) node = target;
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
					if (distance > this.limit / 2) target = target - this.limit;
					else if (distance < -this.limit / 2) target = target + this.limit;
				}
			} else target = clamp$1(0, target, this.limit);
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
			if (!programmatic) this.targetScroll = target;
			if (typeof duration === "number" && typeof easing !== "function") easing = defaultEasing;
			else if (typeof easing === "function" && typeof duration !== "number") duration = 1;
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
					if (programmatic) this.targetScroll = value;
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
			const cache = node._lenis ?? (node._lenis = {});
			let hasOverflowX, hasOverflowY, isScrollableX, isScrollableY, scrollWidth, scrollHeight, clientWidth, clientHeight;
			const gestureOrientation = this.options.gestureOrientation;
			if (time - (cache.time ?? 0) > 2e3) {
				cache.time = Date.now();
				const computedStyle = window.getComputedStyle(node);
				cache.computedStyle = computedStyle;
				const overflowXString = computedStyle.overflowX;
				const overflowYString = computedStyle.overflowY;
				hasOverflowX = [
					"auto",
					"overlay",
					"scroll"
				].includes(overflowXString);
				hasOverflowY = [
					"auto",
					"overlay",
					"scroll"
				].includes(overflowYString);
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
			if (!hasOverflowX && !hasOverflowY || !isScrollableX && !isScrollableY) return false;
			if (gestureOrientation === "vertical" && (!hasOverflowY || !isScrollableY)) return false;
			if (gestureOrientation === "horizontal" && (!hasOverflowX || !isScrollableX)) return false;
			let orientation;
			if (gestureOrientation === "horizontal") orientation = "x";
			else if (gestureOrientation === "vertical") orientation = "y";
			else {
				const isScrollingX = deltaX !== 0;
				const isScrollingY = deltaY !== 0;
				if (isScrollingX && hasOverflowX && isScrollableX) orientation = "x";
				if (isScrollingY && hasOverflowY && isScrollableY) orientation = "y";
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
			} else return false;
			return (delta > 0 ? scroll < maxScroll : scroll > 0) && hasOverflow && isScrollable;
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
				if (this.isHorizontal) return this.rootElement.scrollWidth - this.rootElement.clientWidth;
				else return this.rootElement.scrollHeight - this.rootElement.clientHeight;
			} else return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
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
	// core/IO.ts
	var IO = class {
		constructor({ scrollElements, rootMargin = "-1px -1px -1px -1px", root = null, IORaf }) {
			this.scrollElements = scrollElements;
			this.rootMargin = rootMargin;
			this.root = root;
			this.IORaf = IORaf;
			this._init();
		}
		/**
		* Lifecyle - Initialize Intersection Observer.
		*
		* @private
		*/
		_init() {
			const observerOptions = {
				root: this.root,
				rootMargin: this.rootMargin
			};
			const onIntersect = (entries) => {
				entries.forEach((entry) => {
					const $targetItem = this.scrollElements.find((item) => item.$el === entry.target);
					if (entry.isIntersecting) {
						if ($targetItem) $targetItem.isAlreadyIntersected = true;
						this._setInview(entry);
					} else if ($targetItem && $targetItem.isAlreadyIntersected) this._setOutOfView(entry);
				});
			};
			this.observer = new IntersectionObserver(onIntersect, observerOptions);
			for (const scrollElement of this.scrollElements) {
				const $scrollElement = scrollElement.$el;
				this.observe($scrollElement);
			}
		}
		/**
		* Lifecyle - Destroy Intersection Observer.
		*/
		destroy() {
			this.observer.disconnect();
		}
		/**
		* Subscribe element to the Intersection Observer.
		*
		* @param {HTMLElement} $scrollElement - DOM Element to observe.
		*/
		observe($scrollElement) {
			if (!$scrollElement) return;
			this.observer.observe($scrollElement);
		}
		/**
		* Unsubscribe element to the Intersection Observer.
		*
		* @param {HTMLElement} $scrollElement - DOM Element to unobserve.
		*/
		unobserve($scrollElement) {
			if (!$scrollElement) return;
			this.observer.unobserve($scrollElement);
			this.scrollElements = this.scrollElements.filter((scrollElement) => scrollElement.$el !== $scrollElement);
		}
		/**
		* Find ScrollElementReference instance and trigger inview callbacks.
		*
		* @private
		*
		* @param {IntersectionObserverEntry} entry - DOM Element to observe.
		*/
		_setInview(entry) {
			const scrollElement = this.scrollElements.find((scrollElement) => scrollElement.$el === entry.target);
			this.IORaf && scrollElement?.setInteractivityOn();
			!this.IORaf && scrollElement?.setInview();
		}
		/**
		* Find ScrollElementReference instance and trigger out of view callbacks.
		*
		* @private
		*
		* @param {IntersectionObserverEntry} entry - DOM Element to observe.
		*/
		_setOutOfView(entry) {
			const scrollElement = this.scrollElements.find((scrollElement) => scrollElement.$el === entry.target);
			this.IORaf && scrollElement?.setInteractivityOff();
			!this.IORaf && scrollElement?.setOutOfView();
			if (!scrollElement?.attributes.scrollRepeat && !this.IORaf) this.unobserve(entry.target);
		}
	};
	// utils/maths.ts
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
		const inRange = inMax - inMin;
		const outRange = outMax - outMin;
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
		return array.reduce((prev, curr) => {
			return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev;
		});
	}
	// core/ScrollElement.ts
	/** Constants */
	const INVIEW_CLASS = "is-inview";
	const PROGRESS_CSS_VAR = "--progress";
	var ScrollElement = class {
		constructor({ $el, id, subscribeElementUpdateFn, unsubscribeElementUpdateFn, needRaf, scrollOrientation, lenisInstance }) {
			this.startPositionHandlers = {
				start: (offsetStart, wSize, viewport) => offsetStart - wSize + viewport,
				middle: (offsetStart, wSize, viewport, size) => offsetStart - wSize + viewport + size * .5,
				end: (offsetStart, wSize, viewport, size) => offsetStart - wSize + viewport + size,
				fold: () => 0
			};
			this.endPositionHandlers = {
				start: (offsetStart, viewport) => offsetStart - viewport,
				middle: (offsetStart, viewport, size) => offsetStart - viewport + size * .5,
				end: (offsetStart, viewport, size) => offsetStart - viewport + size
			};
			this.$el = $el;
			this.id = id;
			this.needRaf = needRaf;
			this.scrollOrientation = scrollOrientation;
			this.lenisInstance = lenisInstance;
			this.subscribeElementUpdateFn = subscribeElementUpdateFn;
			this.unsubscribeElementUpdateFn = unsubscribeElementUpdateFn;
			this.attributes = {
				scrollClass: this.$el.dataset["scrollClass"] ?? INVIEW_CLASS,
				scrollOffset: this.$el.dataset["scrollOffset"] ?? "0,0",
				scrollPosition: this.$el.dataset["scrollPosition"] ?? "start,end",
				scrollCssProgress: this.$el.dataset["scrollCssProgress"] !== void 0,
				scrollEventProgress: this.$el.dataset["scrollEventProgress"] ?? null,
				scrollSpeed: this.$el.dataset["scrollSpeed"] !== void 0 ? parseFloat(this.$el.dataset["scrollSpeed"]) : null,
				scrollRepeat: this.$el.dataset["scrollRepeat"] !== void 0,
				scrollCall: this.$el.dataset["scrollCall"] ?? null,
				scrollIgnoreFold: this.$el.dataset["scrollIgnoreFold"] !== void 0,
				scrollEnableTouchSpeed: this.$el.dataset["scrollEnableTouchSpeed"] !== void 0
			};
			this.intersection = {
				start: 0,
				end: 0
			};
			this.metrics = {
				offsetStart: 0,
				offsetEnd: 0,
				bcr: {}
			};
			this.currentScroll = this.lenisInstance.scroll;
			this.translateValue = 0;
			this.progress = 0;
			this.lastProgress = null;
			this.isInview = false;
			this.isInteractive = false;
			this.isAlreadyIntersected = false;
			this.isInFold = false;
			this.isFirstResize = true;
			this.getWindowSize = this.scrollOrientation === "vertical" ? () => this.lenisInstance.dimensions.height : () => this.lenisInstance.dimensions.width;
			this.getMetricsStart = this.scrollOrientation === "vertical" ? (bcr) => bcr.top : (bcr) => bcr.left;
			this.getMetricsSize = this.scrollOrientation === "vertical" ? (bcr) => bcr.height : (bcr) => bcr.width;
			this._init();
		}
		/**
		* Lifecyle - Initialize progress tracking.
		*
		* @private
		*/
		_init() {
			if (!this.needRaf) return;
			this._resize();
		}
		/**
		* Callback - Resize callback
		*/
		onResize({ currentScroll }) {
			this.currentScroll = currentScroll;
			this._resize();
		}
		/**
		* Callback - RAF callback
		*/
		onRender({ currentScroll, smooth }) {
			const wSize = this.getWindowSize();
			this.currentScroll = currentScroll;
			this._computeProgress();
			if (this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed)) {
				if (!this.attributes.scrollEnableTouchSpeed && !smooth) {
					if (this.translateValue) this.$el.style.transform = `translate3d(0, 0, 0)`;
					this.translateValue = 0;
				} else {
					if (this.isInFold) {
						const progress = Math.max(0, this.progress);
						this.translateValue = progress * wSize * this.attributes.scrollSpeed * -1;
					} else {
						const progress = mapRange(0, 1, -1, 1, this.progress);
						this.translateValue = progress * wSize * this.attributes.scrollSpeed * -1;
					}
					this.$el.style.transform = this.scrollOrientation === "vertical" ? `translate3d(0, ${this.translateValue}px, 0)` : `translate3d(${this.translateValue}px, 0, 0)`;
				}
			}
		}
		/**
		* Inview callback
		*/
		setInview() {
			if (this.isInview) return;
			this.isInview = true;
			this.$el.classList.add(this.attributes.scrollClass);
			const way = "enter";
			const from = this._getScrollCallFrom();
			this.attributes.scrollCall && this._dispatchCall(way, from);
		}
		/**
		* Out of view callback
		*/
		setOutOfView() {
			if (!(this.isInview && this.attributes.scrollRepeat)) return;
			this.isInview = false;
			this.$el.classList.remove(this.attributes.scrollClass);
			const way = "leave";
			const from = this._getScrollCallFrom();
			this.attributes.scrollCall && this._dispatchCall(way, from);
		}
		/**
		* Switch interactivity on to subscribe the instance to the RAF
		* and start calculations.
		*/
		setInteractivityOn() {
			if (this.isInteractive) return;
			this.isInteractive = true;
			this.subscribeElementUpdateFn(this);
		}
		/**
		* Switch interactivity off to unsubscribe the instance to the RAF
		* and stop calculations.
		*/
		setInteractivityOff() {
			if (!this.isInteractive) return;
			this.isInteractive = false;
			this.unsubscribeElementUpdateFn(this);
			this.lastProgress !== null && this._computeProgress(closestNumber([0, 1], this.lastProgress));
		}
		/**
		* Resize method that compute the element's values.
		*
		* @private
		*/
		_resize() {
			this.metrics.bcr = this.$el.getBoundingClientRect();
			this._computeMetrics();
			this._computeIntersection();
			if (this.isFirstResize) {
				this.isFirstResize = false;
				if (this.isInFold) this.setInview();
			}
		}
		/**
		* Compute element's offsets and determine if the element is in fold.
		*
		* @private
		*/
		_computeMetrics() {
			const wSize = this.getWindowSize();
			const metricsStart = this.getMetricsStart(this.metrics.bcr);
			const metricsSize = this.getMetricsSize(this.metrics.bcr);
			this.metrics.offsetStart = this.currentScroll + metricsStart - this.translateValue;
			this.metrics.offsetEnd = this.metrics.offsetStart + metricsSize;
			if (this.metrics.offsetStart < wSize && !this.attributes.scrollIgnoreFold) this.isInFold = true;
			else this.isInFold = false;
		}
		/**
		* Compute intersection values depending on the context.
		* Uses handler-based approach for cleaner, more maintainable code.
		*
		* @private
		*/
		_computeIntersection() {
			const wSize = this.getWindowSize();
			const metricsSize = this.getMetricsSize(this.metrics.bcr);
			const offset = this.attributes.scrollOffset.split(",");
			const offsetStart = offset[0]?.trim() ?? "0";
			const offsetEnd = offset[1]?.trim() ?? "0";
			const scrollPosition = this.attributes.scrollPosition.split(",");
			let scrollPositionStart = scrollPosition[0]?.trim() ?? "start";
			const scrollPositionEnd = scrollPosition[1]?.trim() ?? "end";
			const viewportStart = offsetStart.includes("%") ? wSize * parseInt(offsetStart.replace("%", "").trim()) * .01 : parseInt(offsetStart);
			const viewportEnd = offsetEnd.includes("%") ? wSize * parseInt(offsetEnd.replace("%", "").trim()) * .01 : parseInt(offsetEnd);
			if (this.isInFold) scrollPositionStart = "fold";
			const startHandler = this.startPositionHandlers[scrollPositionStart];
			this.intersection.start = startHandler ? startHandler(this.metrics.offsetStart, wSize, viewportStart, metricsSize) : this.metrics.offsetStart - wSize + viewportStart;
			const endHandler = this.endPositionHandlers[scrollPositionEnd];
			this.intersection.end = endHandler ? endHandler(this.metrics.offsetStart, viewportEnd, metricsSize) : this.metrics.offsetStart - viewportEnd + metricsSize;
			if (this.intersection.end <= this.intersection.start) switch (scrollPositionEnd) {
				case "start":
					this.intersection.end = this.intersection.start + 1;
					break;
				case "middle":
					this.intersection.end = this.intersection.start + metricsSize * .5;
					break;
				case "end":
					this.intersection.end = this.intersection.start + metricsSize;
					break;
				default: this.intersection.end = this.intersection.start + 1;
			}
		}
		/**
		* Compute the scroll progress of the element depending
		* on its intersection values.
		*
		* @private
		*
		* @param {number} [forcedProgress] - Value to force progress.
		*/
		_computeProgress(forcedProgress) {
			const progress = forcedProgress ?? clamp(0, 1, normalize(this.intersection.start, this.intersection.end, this.currentScroll));
			this.progress = progress;
			if (progress !== this.lastProgress) {
				this.lastProgress = progress;
				this.attributes.scrollCssProgress && this._setCssProgress(progress);
				this.attributes.scrollEventProgress && this._setCustomEventProgress(progress);
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
		*/
		_setCssProgress(currentProgress = 0) {
			this.$el.style.setProperty(PROGRESS_CSS_VAR, currentProgress.toString());
		}
		/**
		* Set the element's progress to the custom event listeners.
		*
		* @private
		*
		* @param {number} [currentProgress] - Progress value.
		*/
		_setCustomEventProgress(currentProgress = 0) {
			const customEventName = this.attributes.scrollEventProgress;
			if (!customEventName) return;
			const customEvent = new CustomEvent(customEventName, { detail: {
				target: this.$el,
				progress: currentProgress
			} });
			window.dispatchEvent(customEvent);
		}
		/**
		* Function to get scroll call from.
		*
		* @private
		*/
		_getScrollCallFrom() {
			const closestIntersectionValue = closestNumber([this.intersection.start, this.intersection.end], this.currentScroll);
			return this.intersection.start === closestIntersectionValue ? "start" : "end";
		}
		/**
		* Lifecyle - Destroy and cleanup the scroll element.
		*
		* Removes all CSS modifications and clears references to prevent memory leaks.
		*/
		destroy() {
			if (this.attributes.scrollCssProgress) this.$el.style.removeProperty(PROGRESS_CSS_VAR);
			if (this.attributes.scrollSpeed) this.$el.style.removeProperty("transform");
			if (this.isInview && this.attributes.scrollClass) this.$el.classList.remove(this.attributes.scrollClass);
		}
		/**
		* Function to dispatch a custom event.
		*
		* @private
		*
		* @param {string} way - Enter or leave.
		* @param {string} from - Start or end.
		*/
		_dispatchCall(way, from) {
			const customEventName = this.attributes.scrollCall;
			if (!customEventName) return;
			const customEvent = new CustomEvent(customEventName, { detail: {
				target: this.$el,
				way,
				from
			} });
			window.dispatchEvent(customEvent);
		}
	};
	// core/Core.ts
	/** Defined attributes that need a requestAnimationFrame */
	const ATTRIBUTES_THAT_NEED_RAF = [
		"scrollOffset",
		"scrollPosition",
		"scrollCssProgress",
		"scrollEventProgress",
		"scrollSpeed"
	];
	/** Default root margins */
	const TRIGGER_ROOT_MARGIN = "-1px -1px -1px -1px";
	const RAF_ROOT_MARGIN = "100% 100% 100% 100%";
	/** Default scroll attribute values */
	const DEFAULT_SCROLL_OFFSET = "0,0";
	const DEFAULT_SCROLL_POSITION = "top,bottom";
	var Core = class {
		constructor({ $el, triggerRootMargin, rafRootMargin, scrollOrientation, lenisInstance }) {
			if (!$el) {
				console.error("Please provide a DOM Element as scrollContainer");
				return;
			}
			this.$scrollContainer = $el;
			this.lenisInstance = lenisInstance;
			this.scrollOrientation = scrollOrientation;
			this.triggerRootMargin = triggerRootMargin ?? TRIGGER_ROOT_MARGIN;
			this.rafRootMargin = rafRootMargin ?? RAF_ROOT_MARGIN;
			this.scrollElements = [];
			this.triggeredScrollElements = [];
			this.RAFScrollElements = [];
			this.scrollElementsToUpdate = [];
			this._init();
		}
		/**
		* Lifecyle - Initialize the core.
		*
		* @private
		*/
		_init() {
			const $scrollElements = this.$scrollContainer.querySelectorAll("[data-scroll]");
			const $scrollElementsArr = this.toElementArray($scrollElements);
			this._subscribeScrollElements($scrollElementsArr);
			const ioRoot = this.lenisInstance.options.wrapper === window ? null : this.lenisInstance.options.wrapper;
			this.IOTriggerInstance = new IO({
				scrollElements: [...this.triggeredScrollElements],
				root: ioRoot,
				rootMargin: this.triggerRootMargin,
				IORaf: false
			});
			this.IORafInstance = new IO({
				scrollElements: [...this.RAFScrollElements],
				root: ioRoot,
				rootMargin: this.rafRootMargin,
				IORaf: true
			});
		}
		/**
		* Lifecyle - Destroy core.
		*/
		destroy() {
			this.IOTriggerInstance.destroy();
			this.IORafInstance.destroy();
			this._unsubscribeAllScrollElements();
		}
		/**
		* Callback - Resize callback.
		*/
		onResize({ currentScroll }) {
			for (const scrollElement of this.RAFScrollElements) scrollElement.onResize({ currentScroll });
		}
		/**
		* Callback - RAF callback.
		*/
		onRender({ currentScroll, smooth }) {
			for (const scrollElement of this.scrollElementsToUpdate) scrollElement.onRender({
				currentScroll,
				smooth
			});
		}
		/**
		* Remove items from lists of scroll elements and compute all new values.
		*
		* @param {HTMLElement} $oldContainer - HTMLElement that contains data-scroll elements to unsubscribe
		*/
		removeScrollElements($oldContainer) {
			const $scrollElementsToRemove = $oldContainer.querySelectorAll("[data-scroll]");
			if (!$scrollElementsToRemove.length) return;
			const $scrollElementsToRemoveSet = new Set(Array.from($scrollElementsToRemove));
			this.triggeredScrollElements = this.triggeredScrollElements.filter((scrollElement) => {
				if (!$scrollElementsToRemoveSet.has(scrollElement.$el)) return true;
				this.IOTriggerInstance.unobserve(scrollElement.$el);
				return false;
			});
			this.RAFScrollElements = this.RAFScrollElements.filter((scrollElement) => {
				if (!$scrollElementsToRemoveSet.has(scrollElement.$el)) return true;
				this.IORafInstance.unobserve(scrollElement.$el);
				return false;
			});
			$scrollElementsToRemove.forEach(($scrollElement) => {
				const targetScrollElementToUpdate = this.scrollElementsToUpdate.find((scrollElement) => scrollElement.$el === $scrollElement);
				const targetScrollElement = this.scrollElements.find((scrollElement) => scrollElement.$el === $scrollElement);
				if (targetScrollElementToUpdate) this._unsubscribeElementUpdate(targetScrollElementToUpdate);
				if (targetScrollElement) this.scrollElements = this.scrollElements.filter((scrollElementItem) => scrollElementItem.id !== targetScrollElement.id);
			});
		}
		/**
		* Add items to lists of scroll elements and compute all new values.
		*
		* @param {HTMLElement} $newContainer - HTMLElement that contains data-scroll elements to subscribe
		*/
		addScrollElements($newContainer) {
			const $scrollElements = $newContainer.querySelectorAll("[data-scroll]");
			const ids = [];
			this.scrollElements.forEach((scrollElement) => {
				ids.push(scrollElement.id);
			});
			const fromIndex = Math.max(...ids, 0) + 1;
			const $scrollElementsArr = this.toElementArray($scrollElements);
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
		*/
		_subscribeScrollElements($scrollElements, fromIndex = 0, toObserve = false) {
			for (let index = 0; index < $scrollElements.length; index++) {
				const $scrollElement = $scrollElements[index];
				const needRaf = this._checkRafNeeded($scrollElement);
				const scrollElementInstance = new ScrollElement({
					$el: $scrollElement,
					id: fromIndex + index,
					scrollOrientation: this.scrollOrientation,
					lenisInstance: this.lenisInstance,
					subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this),
					unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this),
					needRaf
				});
				this.scrollElements.push(scrollElementInstance);
				if (needRaf) {
					this.RAFScrollElements.push(scrollElementInstance);
					if (toObserve) {
						this.IORafInstance.scrollElements.push(scrollElementInstance);
						this.IORafInstance.observe(scrollElementInstance.$el);
					}
				} else {
					this.triggeredScrollElements.push(scrollElementInstance);
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
		*/
		_unsubscribeAllScrollElements() {
			for (const scrollElement of this.scrollElements) scrollElement.destroy();
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
		*/
		_subscribeElementUpdate(scrollElement) {
			this.scrollElementsToUpdate.push(scrollElement);
		}
		/**
		* Unscribe ScrollElement instance that doesn't need to be updated.
		*
		* @private
		*
		* @param {ScrollElement} scrollElement - The updated ScrollElement instance
		*     out of view now.
		*/
		_unsubscribeElementUpdate(scrollElement) {
			this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter((scrollElementToUpdate) => scrollElementToUpdate.id !== scrollElement.id);
		}
		/**
		* Convert NodeListOf<Element> to HTMLElement array.
		*
		* @private
		*
		* @param {NodeListOf<Element>} elements - The NodeList to convert.
		*
		* @returns {HTMLElement[]}
		*/
		toElementArray(elements) {
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
		*/
		_checkRafNeeded($scrollElement) {
			let attributesThatNeedRaf = [...ATTRIBUTES_THAT_NEED_RAF];
			const removeAttribute = (attributeToRemove) => {
				attributesThatNeedRaf = attributesThatNeedRaf.filter((attribute) => attribute !== attributeToRemove);
			};
			if ($scrollElement.dataset.scrollOffset) {
				if ($scrollElement.dataset.scrollOffset.split(",").map((test) => test.replace("%", "").trim()).join(",") !== DEFAULT_SCROLL_OFFSET) return true;
				else removeAttribute("scrollOffset");
			} else removeAttribute("scrollOffset");
			if ($scrollElement.dataset.scrollPosition) {
				if ($scrollElement.dataset.scrollPosition.trim() !== DEFAULT_SCROLL_POSITION) return true;
				else removeAttribute("scrollPosition");
			} else removeAttribute("scrollPosition");
			if ($scrollElement.dataset.scrollSpeed && !isNaN(parseFloat($scrollElement.dataset.scrollSpeed))) return true;
			else removeAttribute("scrollSpeed");
			for (const attribute of attributesThatNeedRaf) if (attribute in $scrollElement.dataset) return true;
			return false;
		}
	};
	// package.json
	var version = "5.0.1";
	// index.ts
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
	var LocomotiveScroll = class {
		constructor({ lenisOptions = {}, triggerRootMargin, rafRootMargin, autoStart = true, scrollCallback = () => {}, initCustomTicker, destroyCustomTicker } = {}) {
			this.lenisInstance = null;
			this.coreInstance = null;
			window.locomotiveScrollVersion = version;
			Object.assign(this, {
				lenisOptions,
				triggerRootMargin,
				rafRootMargin,
				autoStart,
				scrollCallback,
				initCustomTicker,
				destroyCustomTicker
			});
			this._onRenderBind = this._onRender.bind(this);
			this._onScrollToBind = this._onScrollTo.bind(this);
			this._onResizeBind = this._onResize.bind(this);
			this.rafPlaying = false;
			this.isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
			this._init();
		}
		/**
		* Lifecyle - Initialize instance.
		*
		* @private
		*/
		_init() {
			this.lenisInstance = new Lenis({ ...this.lenisOptions });
			if (this.scrollCallback) this.lenisInstance.on("scroll", this.scrollCallback);
			document.documentElement.setAttribute("data-scroll-orientation", this.lenisInstance.options.orientation);
			requestAnimationFrame(() => {
				this.coreInstance = new Core({
					$el: this.lenisInstance.rootElement,
					triggerRootMargin: this.triggerRootMargin,
					rafRootMargin: this.rafRootMargin,
					scrollOrientation: this.lenisInstance.options.orientation,
					lenisInstance: this.lenisInstance
				});
				this._bindEvents();
				if (this.initCustomTicker && !this.destroyCustomTicker) console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.");
				else if (!this.initCustomTicker && this.destroyCustomTicker) console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble.");
				this.autoStart && this.start();
			});
		}
		/**
		* Lifecyle - Destroy instance.
		*/
		destroy() {
			this.stop();
			this._unbindEvents();
			this.lenisInstance?.destroy();
			requestAnimationFrame(() => {
				this.coreInstance?.destroy();
			});
		}
		/**
		* Events - Subscribe events to listen.
		*/
		_bindEvents() {
			this._bindScrollToEvents();
			if (this.lenisInstance) {
				this._originalOnContentResize = this.lenisInstance.dimensions.onContentResize.bind(this.lenisInstance.dimensions);
				this._originalOnWrapperResize = this.lenisInstance.dimensions.onWrapperResize.bind(this.lenisInstance.dimensions);
				this.lenisInstance.dimensions.onContentResize = () => {
					this._originalOnContentResize?.();
					this._onResizeBind();
				};
				this.lenisInstance.dimensions.onWrapperResize = () => {
					this._originalOnWrapperResize?.();
					this._onResizeBind();
				};
			}
		}
		/**
		* Events - Unsubscribe listened events.
		*/
		_unbindEvents() {
			this._unbindScrollToEvents();
			if (this.lenisInstance) {
				if (this._originalOnContentResize) this.lenisInstance.dimensions.onContentResize = this._originalOnContentResize;
				if (this._originalOnWrapperResize) this.lenisInstance.dimensions.onWrapperResize = this._originalOnWrapperResize;
			}
		}
		/**
		* Events - Subscribe scrollTo events to listen.
		*/
		_bindScrollToEvents($container) {
			const $scrollToElements = ($container ? $container : this.lenisInstance?.rootElement)?.querySelectorAll("[data-scroll-to]");
			$scrollToElements?.length && $scrollToElements.forEach(($el) => {
				$el.addEventListener("click", this._onScrollToBind, false);
			});
		}
		/**
		* Events - Unsubscribe scrollTo listened events.
		*/
		_unbindScrollToEvents($container) {
			const $scrollToElements = ($container ? $container : this.lenisInstance?.rootElement)?.querySelectorAll("[data-scroll-to]");
			$scrollToElements?.length && $scrollToElements.forEach(($el) => {
				$el.removeEventListener("click", this._onScrollToBind, false);
			});
		}
		/**
		* Callback - Resize callback.
		*
		* Called synchronously after Lenis updates its dimensions via onContentResize/onWrapperResize.
		* All dimension values are already up-to-date when this executes.
		*/
		_onResize() {
			this.coreInstance?.onResize({
				currentScroll: this.lenisInstance?.scroll ?? 0,
				smooth: !this.isTouchDevice
			});
		}
		/**
		* Callback - Render callback.
		*/
		_onRender() {
			this.lenisInstance?.raf(Date.now());
			this.coreInstance?.onRender({
				currentScroll: this.lenisInstance?.scroll ?? 0,
				smooth: !this.isTouchDevice
			});
		}
		/**
		* Callback - Scroll To callback.
		*/
		_onScrollTo(event) {
			event.preventDefault();
			const $target = event.currentTarget ?? null;
			if (!$target) return;
			const target = $target.getAttribute("data-scroll-to-href") || $target.getAttribute("href");
			const offset = $target.getAttribute("data-scroll-to-offset") || 0;
			const duration = $target.getAttribute("data-scroll-to-duration") || this.lenisInstance?.options.duration;
			target && this.scrollTo(target, {
				offset: typeof offset === "string" ? parseInt(offset) : offset,
				duration: typeof duration === "string" ? parseInt(duration) : duration
			});
		}
		/**
		* Start RequestAnimationFrame that active Lenis smooth and scroll progress.
		*/
		start() {
			if (this.rafPlaying) return;
			this.lenisInstance?.start();
			this.rafPlaying = true;
			this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf();
		}
		/**
		* Stop RequestAnimationFrame that active Lenis smooth and scroll progress.
		*/
		stop() {
			if (!this.rafPlaying) return;
			this.lenisInstance?.stop();
			this.rafPlaying = false;
			this.destroyCustomTicker ? this.destroyCustomTicker(this._onRenderBind) : this.rafInstance && cancelAnimationFrame(this.rafInstance);
		}
		/**
		* Remove old scroll elements items and rebuild ScrollElements instances.
		*/
		removeScrollElements($oldContainer) {
			if (!$oldContainer) {
				console.error("Please provide a DOM Element as $oldContainer");
				return;
			}
			this._unbindScrollToEvents($oldContainer);
			this.coreInstance?.removeScrollElements($oldContainer);
		}
		/**
		* Add new scroll elements items and rebuild ScrollElements instances.
		*/
		addScrollElements($newContainer) {
			if (!$newContainer) {
				console.error("Please provide a DOM Element as $newContainer");
				return;
			}
			this.coreInstance?.addScrollElements($newContainer);
			requestAnimationFrame(() => {
				this._bindScrollToEvents($newContainer);
			});
		}
		/**
		* Trigger resize callback.
		*/
		resize() {
			this._onResizeBind();
		}
		/**
		* Trigger scroll to callback.
		*/
		scrollTo(target, options) {
			this.lenisInstance?.scrollTo(target, options);
		}
		/**
		* RequestAnimationFrame that active Lenis smooth and scroll progress.
		*
		* @private
		*
		*/
		_raf() {
			this._onRenderBind();
			this.rafInstance = requestAnimationFrame(() => this._raf());
		}
	};
	return LocomotiveScroll;
});
