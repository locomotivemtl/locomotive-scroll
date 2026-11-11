// \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
let lenis = require("lenis");
lenis = __toESM(lenis, 1);
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
		this.lenisInstance = new lenis.default({ ...this.lenisOptions });
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
module.exports = LocomotiveScroll;

module.exports.default = module.exports;
//# sourceMappingURL=locomotive-scroll.cjs.map