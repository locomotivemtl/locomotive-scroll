import Lenis from '@studio-freight/lenis';

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
class IO {
  constructor({
    scrollElements,
    rootMargin = '-1px -1px -1px -1px',
    IORaf
  }) {
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
  _init() {
    // Options
    const observerOptions = {
      rootMargin: this.rootMargin
    };
    // Callback
    const onIntersect = entries => {
      entries.forEach(entry => {
        const $targetItem = this.scrollElements.find(item => item.$el === entry.target);
        if (entry.isIntersecting) {
          $targetItem && ($targetItem.isAlreadyIntersected = true);
          this._setInview(entry);
        } else if ($targetItem && $targetItem.isAlreadyIntersected) {
          this._setOutOfView(entry);
        }
      });
    };
    // Instance
    this.observer = new IntersectionObserver(onIntersect, observerOptions);
    // Observe each default elements
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
    if (!$scrollElement) {
      return;
    }
    this.observer.observe($scrollElement);
  }
  /**
   * Unsubscribe element to the Intersection Observer.
   *
   * @param {HTMLElement} $scrollElement - DOM Element to unobserve.
   */
  unobserve($scrollElement) {
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
   */
  _setInview(entry) {
    const scrollElement = this.scrollElements.find(scrollElement => scrollElement.$el === entry.target);
    this.IORaf && (scrollElement == null ? void 0 : scrollElement.setInteractivityOn());
    !this.IORaf && (scrollElement == null ? void 0 : scrollElement.setInview());
  }
  /**
   * Find ScrollElementReference instance and trigger out of view callbacks.
   *
   * @private
   *
   * @param {IntersectionObserverEntry} entry - DOM Element to observe.
   */
  _setOutOfView(entry) {
    const scrollElement = this.scrollElements.find(scrollElement => scrollElement.$el === entry.target);
    this.IORaf && (scrollElement == null ? void 0 : scrollElement.setInteractivityOff());
    !this.IORaf && (scrollElement == null ? void 0 : scrollElement.setOutOfView());
    // Unobserve if element doesn't have repeat attribute
    if (!(scrollElement != null && scrollElement.attributes.scrollRepeat) && !this.IORaf) {
      this.unobserve(entry.target);
    }
  }
}

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
 * - scrollModuleProgress - Send scroll progress to modular module that have a specific method (PROGRESS_MODULAR_METHOD)
 * - scrollCssProgress - Add a specific css variable (PROGRESS_CSS_VAR) that store the scroll progress
 * - scrollEventProgress - Send scroll progress to custom event listeners.
 * - scrollSpeed - Add a scroll multiplicator to create a parallax effect
 * - scrollRepeat - Repeat the option to trigger animation each time the element is intersected
 * - scrollCall - Call a custom event or a modular callback when the element is intersected
 */
/** Constants */
const INVIEW_CLASS = 'is-inview';
const PROGRESS_CSS_VAR = '--progress';
const PROGRESS_MODULAR_METHOD = 'onScrollProgress';
class ScrollElement {
  constructor({
    $el,
    id,
    modularInstance,
    subscribeElementUpdateFn,
    unsubscribeElementUpdateFn,
    needRaf,
    scrollOrientation
  }) {
    var _this$$el$dataset$scr, _this$$el$dataset$scr2, _this$$el$dataset$scr3, _this$$el$dataset$scr4, _this$$el$dataset$scr5;
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
  _init() {
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
   */
  onResize({
    currentScroll
  }) {
    this.currentScroll = currentScroll;
    this._resize();
  }
  /**
   * Callback - RAF callback
   */
  onRender({
    currentScroll,
    smooth
  }) {
    const wSize = this.scrollOrientation === 'vertical' ? window.innerHeight : window.innerWidth;
    this.currentScroll = currentScroll;
    this._computeProgress();
    // Parallax
    if (this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed)) {
      // if touch detected or smooth disabled
      if (!this.attributes.scrollEnableTouchSpeed && !smooth) {
        if (this.translateValue) {
          this.$el.style.transform = `translate3d(0, 0, 0)`;
        }
        this.translateValue = 0;
        // if mousewheel or smooth enabled
      } else {
        // Check fold condition
        if (this.isInFold) {
          const progress = Math.max(0, this.progress);
          this.translateValue = progress * wSize * this.attributes.scrollSpeed * -1;
        } else {
          const progress = mapRange(0, 1, -1, 1, this.progress);
          this.translateValue = progress * wSize * this.attributes.scrollSpeed * -1;
        }
        this.$el.style.transform = this.scrollOrientation === 'vertical' ? `translate3d(0, ${this.translateValue}px, 0)` : `translate3d(${this.translateValue}px, 0, 0)`;
      }
    }
  }
  /**
   * Inview callback
   */
  setInview() {
    if (this.isInview) {
      return;
    }
    this.isInview = true;
    this.$el.classList.add(this.attributes.scrollClass);
    const way = 'enter';
    const from = this._getScrollCallFrom();
    this.attributes.scrollCall && this._dispatchCall(way, from);
  }
  /**
   * Out of view callback
   */
  setOutOfView() {
    if (!(this.isInview && this.attributes.scrollRepeat)) {
      return;
    }
    this.isInview = false;
    this.$el.classList.remove(this.attributes.scrollClass);
    const way = 'leave';
    const from = this._getScrollCallFrom();
    this.attributes.scrollCall && this._dispatchCall(way, from);
  }
  /**
   * Switch interactivity on to subscribe the instance to the RAF
   * and start calculations.
   */
  setInteractivityOn() {
    if (this.isInteractive) {
      return;
    }
    this.isInteractive = true;
    this.subscribeElementUpdateFn(this);
  }
  /**
   * Switch interactivity off to unsubscribe the instance to the RAF
   * and stop calculations.
   */
  setInteractivityOff() {
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
   */
  _resize() {
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
   */
  _computeMetrics() {
    const {
      top,
      left,
      height,
      width
    } = this.metrics.bcr;
    const wSize = this.scrollOrientation === 'vertical' ? window.innerHeight : window.innerWidth;
    const metricsStart = this.scrollOrientation === 'vertical' ? top : left;
    const metricsSize = this.scrollOrientation === 'vertical' ? height : width;
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
   */
  _computeIntersection() {
    // Window size
    const wSize = this.scrollOrientation === 'vertical' ? window.innerHeight : window.innerWidth;
    // Metrics size
    const metricsSize = this.scrollOrientation === 'vertical' ? this.metrics.bcr.height : this.metrics.bcr.width;
    // Offset
    const offset = this.attributes.scrollOffset.split(',');
    const offsetStart = offset[0] != undefined ? offset[0].trim() : '0';
    const offsetEnd = offset[1] != undefined ? offset[1].trim() : '0';
    // Positions
    const scrollPosition = this.attributes.scrollPosition.split(',');
    let scrollPositionStart = scrollPosition[0] != undefined ? scrollPosition[0].trim() : 'start';
    const scrollPositionEnd = scrollPosition[1] != undefined ? scrollPosition[1].trim() : 'end';
    // Viewport
    const viewportStart = offsetStart.includes('%') ? wSize * parseInt(offsetStart.replace('%', '').trim()) * 0.01 : parseInt(offsetStart);
    const viewportEnd = offsetEnd.includes('%') ? wSize * parseInt(offsetEnd.replace('%', '').trim()) * 0.01 : parseInt(offsetEnd);
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
   */
  _computeProgress(forcedProgress) {
    // Progress
    const progress = forcedProgress != null ? forcedProgress : clamp(0, 1, normalize(this.intersection.start, this.intersection.end, this.currentScroll));
    this.progress = progress;
    if (progress != this.lastProgress) {
      this.lastProgress = progress;
      // Set the element's progress to the css variable
      this.attributes.scrollCssProgress && this._setCssProgress(progress);
      // Set the element's progress to the custom event listeners
      this.attributes.scrollEventProgress && this._setCustomEventProgress(progress);
      // Set the element's progress to inline modules
      if (this.attributes.scrollModuleProgress) {
        for (const modularModules of this.progressModularModules) {
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
    const customEvent = new CustomEvent(customEventName, {
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
   */
  _getProgressModularModules() {
    if (!this.modularInstance) {
      return;
    }
    const modulesIdNames = Object.keys(this.$el.dataset).filter(key => key.includes('module'));
    const modules = Object.entries(this.modularInstance.modules);
    if (!modulesIdNames.length) {
      return;
    }
    for (const modulesIdName of modulesIdNames) {
      const moduleId = this.$el.dataset[modulesIdName];
      if (!moduleId) {
        return;
      }
      for (const module of modules) {
        const [moduleName, moduleObj] = module;
        if (moduleId in moduleObj) {
          this.progressModularModules.push({
            moduleName,
            moduleId
          });
        }
      }
    }
  }
  /**
   * Function to get scroll call from.
   *
   * @private
   */
  _getScrollCallFrom() {
    const closestIntersectionValue = closestNumber([this.intersection.start, this.intersection.end], this.currentScroll);
    return this.intersection.start === closestIntersectionValue ? 'start' : 'end';
  }
  /**
   * Function to dispatch a custom event or call a modular callback.
   *
   * @private
   *
   * @param {scrollCallWay} way - Enter or leave.
   * @param {scrollCallFrom} from - Start or end.
   */
  _dispatchCall(way, from) {
    var _this$attributes$scro, _this$attributes;
    const callParameters = (_this$attributes$scro = this.attributes.scrollCall) == null ? void 0 : _this$attributes$scro.split(',');
    const callSelf = (_this$attributes = this.attributes) == null ? void 0 : _this$attributes.scrollCallSelf;
    if (callParameters && callParameters.length > 1) {
      var _targetModuleId;
      // Using Modular.js (https://github.com/modularorg/modularjs)
      const [func, moduleName, moduleId] = callParameters;
      let targetModuleId;
      // If the module is set on the scroll element
      if (callSelf) {
        targetModuleId = this.$el.dataset[`module${moduleName.trim()}`];
      } else {
        targetModuleId = moduleId;
      }
      this.modularInstance && this.modularInstance.call(func.trim(), {
        target: this.$el,
        way,
        from
      }, moduleName.trim(), (_targetModuleId = targetModuleId) == null ? void 0 : _targetModuleId.trim());
    } else if (callParameters) {
      // Using CustomEvent API (https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
      const [customEventName] = callParameters;
      const customEvent = new CustomEvent(customEventName, {
        detail: {
          target: this.$el,
          way,
          from
        }
      });
      window.dispatchEvent(customEvent);
    }
  }
}

/**
 * Integrates Lenis with Locomotive's built-in animation system
 */
/** Defined attributes that need a requestAnimationFrame */
const ATTRIBUTES_THAT_NEED_RAF = ['scrollOffset', 'scrollPosition', 'scrollModuleProgress', 'scrollCssProgress', 'scrollEventProgress', 'scrollSpeed'];
/** Default root margins */
const TRIGGER_ROOT_MARGIN = '-1px -1px -1px -1px';
const RAF_ROOT_MARGIN = '100% 100% 100% 100%'; // Add 100vh top/bottom && 100vw left/right to use a biggest value with data-scroll-speed
class Core {
  constructor({
    $el,
    modularInstance,
    triggerRootMargin,
    rafRootMargin,
    scrollOrientation
  }) {
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
  _init() {
    const $scrollElements = this.$scrollContainer.querySelectorAll('[data-scroll]');
    const $scrollElementsArr = Array.from($scrollElements);
    this._subscribeScrollElements($scrollElementsArr);
    // Trigger IO
    this.IOTriggerInstance = new IO({
      scrollElements: [...this.triggeredScrollElements],
      rootMargin: this.triggerRootMargin,
      IORaf: false
    });
    // Raf IO
    this.IORafInstance = new IO({
      scrollElements: [...this.RAFScrollElements],
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
  onResize({
    currentScroll
  }) {
    for (const scrollElement of this.RAFScrollElements) {
      scrollElement.onResize({
        currentScroll
      });
    }
  }
  /**
   * Callback - RAF callback.
   */
  onRender({
    currentScroll,
    smooth
  }) {
    for (const scrollElement of this.scrollElementsToUpdate) {
      scrollElement.onRender({
        currentScroll,
        smooth
      });
    }
  }
  /**
   * Remove items from lists of scroll elements and compute all new values.
   *
   * @param {HTMLElement} $oldContainer - HTMLElement that contains data-scroll elements to unsubscribe
   */
  removeScrollElements($oldContainer) {
    const $scrollElementsToRemove = $oldContainer.querySelectorAll('[data-scroll]');
    if (!$scrollElementsToRemove.length) return;
    // 1. Remove from IO
    for (let index = 0; index < this.triggeredScrollElements.length; index++) {
      const scrollElement = this.triggeredScrollElements[index];
      const $scrollElementsToRemoveArr = Array.from($scrollElementsToRemove);
      if ($scrollElementsToRemoveArr.indexOf(scrollElement.$el) > -1) {
        this.IOTriggerInstance.unobserve(scrollElement.$el);
        this.triggeredScrollElements.splice(index, 1);
      }
    }
    for (let index = 0; index < this.RAFScrollElements.length; index++) {
      const scrollElement = this.RAFScrollElements[index];
      const $scrollElementsToRemoveArr = Array.from($scrollElementsToRemove);
      if ($scrollElementsToRemoveArr.indexOf(scrollElement.$el) > -1) {
        this.IORafInstance.unobserve(scrollElement.$el);
        this.RAFScrollElements.splice(index, 1);
      }
    }
    // 2. Remove from scrollElementsToUpdate[] and scrollElements[]
    $scrollElementsToRemove.forEach($scrollElement => {
      const targetScrollElementToUpdate = this.scrollElementsToUpdate.find(scrollElement => scrollElement.$el === $scrollElement);
      const targetScrollElement = this.scrollElements.find(scrollElement => scrollElement.$el === $scrollElement);
      if (targetScrollElementToUpdate) {
        this._unsubscribeElementUpdate(targetScrollElementToUpdate);
      }
      if (targetScrollElement) {
        this.scrollElements = this.scrollElements.filter(scrollElementItem => scrollElementItem.id != targetScrollElement.id);
      }
    });
  }
  /**
   * Add items to lists of scroll elements and compute all new values.
   *
   * @param {HTMLElement} $newContainer - HTMLElement that contains data-scroll elements to subscribe
   */
  addScrollElements($newContainer) {
    // 3. Rebuild ScrollElements
    const $scrollElements = $newContainer.querySelectorAll('[data-scroll]');
    // 4. Get max scrollElement.id
    const ids = [];
    this.scrollElements.forEach(scrollElement => {
      ids.push(scrollElement.id);
    });
    const maxID = Math.max(...ids);
    const fromIndex = maxID + 1;
    const $scrollElementsArr = Array.from($scrollElements);
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
    // For each scroll element create a ScrollElement instance
    for (let index = 0; index < $scrollElements.length; index++) {
      const $scrollElement = $scrollElements[index];
      const needRaf = this._checkRafNeeded($scrollElement);
      const scrollElementInstance = new ScrollElement({
        $el: $scrollElement,
        id: fromIndex + index,
        scrollOrientation: this.scrollOrientation,
        modularInstance: this.modularInstance,
        subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this),
        unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this),
        needRaf
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
   */
  _unsubscribeAllScrollElements() {
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
    this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter(scrollElementToUpdate => scrollElementToUpdate.id != scrollElement.id);
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
    // Remove utils
    const removeAttribute = attributeToRemove => {
      attributesThatNeedRaf = attributesThatNeedRaf.filter(attribute => attribute != attributeToRemove);
    };
    // 1. Check scroll offset values
    if ($scrollElement.dataset.scrollOffset) {
      const value = $scrollElement.dataset.scrollOffset.split(',').map(test => test.replace('%', '').trim()).join(',');
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
      const value = $scrollElement.dataset.scrollPosition.trim();
      if (value != 'top,bottom') {
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
    for (const attribute of attributesThatNeedRaf) {
      if (attribute in $scrollElement.dataset) {
        return true;
      }
    }
    return false;
  }
}

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
class RO {
  constructor({
    resizeElements,
    resizeCallback = () => {}
  }) {
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
  _init() {
    // Callback
    const onResize = entries => {
      var _this$resizeCallback;
      !this.isFirstObserve && ((_this$resizeCallback = this.resizeCallback) == null ? void 0 : _this$resizeCallback.call(this));
      this.isFirstObserve = false;
    };
    // Instance
    this.observer = new ResizeObserver(onResize);
    // Observe each default elements
    for (const $resizeElement of this.$resizeElements) {
      this.observer.observe($resizeElement);
    }
  }
  /**
   * Lifecyle - Destroy Resize Observer.
   */
  destroy() {
    this.observer.disconnect();
  }
}

/**
 * @type {ILenisOptions}
 */
const defaultLenisOptions = {
  wrapper: window,
  content: document.documentElement,
  lerp: 0.1,
  duration: 1.2,
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  normalizeWheel: true,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // https://www.desmos.com/calculator/brs54l4xou
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
class LocomotiveScroll {
  constructor({
    lenisOptions = {},
    modularInstance,
    triggerRootMargin,
    rafRootMargin,
    autoResize = true,
    autoStart = true,
    scrollCallback = () => {},
    initCustomTicker,
    destroyCustomTicker
  } = {}) {
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
      lenisOptions,
      modularInstance,
      triggerRootMargin,
      rafRootMargin,
      autoResize,
      autoStart,
      scrollCallback,
      initCustomTicker,
      destroyCustomTicker
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
  _init() {
    var _this$lenisInstance;
    // Create Lenis instance
    this.lenisInstance = new Lenis({
      wrapper: this.lenisOptions.wrapper,
      content: this.lenisOptions.content,
      lerp: this.lenisOptions.lerp,
      duration: this.lenisOptions.duration,
      orientation: this.lenisOptions.orientation,
      gestureOrientation: this.lenisOptions.gestureOrientation,
      smoothWheel: this.lenisOptions.smoothWheel,
      smoothTouch: this.lenisOptions.smoothTouch,
      wheelMultiplier: this.lenisOptions.wheelMultiplier,
      touchMultiplier: this.lenisOptions.touchMultiplier,
      normalizeWheel: this.lenisOptions.normalizeWheel,
      easing: this.lenisOptions.easing
    });
    (_this$lenisInstance = this.lenisInstance) == null ? void 0 : _this$lenisInstance.on('scroll', this.scrollCallback);
    // Add scroll direction attribute on body
    document.documentElement.setAttribute('data-scroll-orientation', this.lenisInstance.options.orientation);
    requestAnimationFrame(() => {
      // Create Core Instance
      this.coreInstance = new Core({
        $el: this.lenisInstance.rootElement,
        modularInstance: this.modularInstance,
        triggerRootMargin: this.triggerRootMargin,
        rafRootMargin: this.rafRootMargin,
        scrollOrientation: this.lenisInstance.options.orientation
      });
      // Bind Events
      this._bindEvents();
      // RAF warning
      if (this.initCustomTicker && !this.destroyCustomTicker) {
        console.warn('initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.');
      } else if (!this.initCustomTicker && this.destroyCustomTicker) {
        console.warn('destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble.');
      }
      // Start RAF
      this.autoStart && this.start();
    });
  }
  /**
   * Lifecyle - Destroy instance.
   */
  destroy() {
    // Stop raf
    this.stop();
    // Unbind Events
    this._unbindEvents();
    // Destroy Lenis
    this.lenisInstance.destroy();
    // Destroy Core
    this.coreInstance.destroy();
  }
  /**
   * Events - Subscribe events to listen.
   */
  _bindEvents() {
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
   */
  _unbindEvents() {
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
   */
  _bindScrollToEvents($container) {
    const $rootContainer = $container ? $container : this.lenisInstance.rootElement;
    const $scrollToElements = $rootContainer == null ? void 0 : $rootContainer.querySelectorAll('[data-scroll-to]');
    ($scrollToElements == null ? void 0 : $scrollToElements.length) && $scrollToElements.forEach($el => {
      $el.addEventListener('click', this._onScrollToBind, false);
    });
  }
  /**
   * Events - Unsubscribe scrollTo listened events.
   */
  _unbindScrollToEvents($container) {
    const $rootContainer = $container ? $container : this.lenisInstance.rootElement;
    const $scrollToElements = $rootContainer == null ? void 0 : $rootContainer.querySelectorAll('[data-scroll-to]');
    ($scrollToElements == null ? void 0 : $scrollToElements.length) && $scrollToElements.forEach($el => {
      $el.removeEventListener('click', this._onScrollToBind, false);
    });
  }
  /**
   * Callback - Resize callback.
   */
  _onResize() {
    // Waiting the next frame to get the new current scroll value return by Lenis
    requestAnimationFrame(() => {
      var _this$coreInstance;
      (_this$coreInstance = this.coreInstance) == null ? void 0 : _this$coreInstance.onResize({
        currentScroll: this.lenisInstance.scroll
      });
    });
  }
  /**
   * Callback - Render callback.
   */
  _onRender() {
    var _this$lenisInstance2, _this$coreInstance2;
    (_this$lenisInstance2 = this.lenisInstance) == null ? void 0 : _this$lenisInstance2.raf(Date.now());
    (_this$coreInstance2 = this.coreInstance) == null ? void 0 : _this$coreInstance2.onRender({
      currentScroll: this.lenisInstance.scroll,
      smooth: this.lenisInstance.isSmooth
    });
  }
  /**
   * Callback - Scroll To callback.
   */
  _onScrollTo(event) {
    var _event$currentTarget;
    event.preventDefault();
    const $target = (_event$currentTarget = event.currentTarget) != null ? _event$currentTarget : null;
    if (!$target) return;
    const target = $target.getAttribute('data-scroll-to-href') || $target.getAttribute('href');
    const offset = $target.getAttribute('data-scroll-to-offset') || 0;
    const duration = $target.getAttribute('data-scroll-to-duration') || this.lenisOptions.duration || defaultLenisOptions.duration;
    target && this.scrollTo(target, {
      offset: typeof offset === 'string' ? parseInt(offset) : offset,
      duration: typeof duration === 'string' ? parseInt(duration) : duration
    });
  }
  /**
   * Start RequestAnimationFrame that active Lenis smooth and scroll progress.
   */
  start() {
    if (this.rafPlaying) {
      return;
    }
    this.rafPlaying = true;
    this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf();
  }
  /**
   * Stop RequestAnimationFrame that active Lenis smooth and scroll progress.
   */
  stop() {
    if (!this.rafPlaying) {
      return;
    }
    this.rafPlaying = false;
    this.destroyCustomTicker ? this.destroyCustomTicker(this._onRenderBind) : this.rafInstance && cancelAnimationFrame(this.rafInstance);
  }
  /**
   * Remove old scroll elements items and rebuild ScrollElements instances.
   */
  removeScrollElements($oldContainer) {
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
   */
  addScrollElements($newContainer) {
    var _this$coreInstance4;
    if (!$newContainer) {
      console.error('Please provide a DOM Element as $newContainer');
      return;
    }
    (_this$coreInstance4 = this.coreInstance) == null ? void 0 : _this$coreInstance4.addScrollElements($newContainer);
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
    var _this$lenisInstance3;
    (_this$lenisInstance3 = this.lenisInstance) == null ? void 0 : _this$lenisInstance3.scrollTo(target, {
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
   */
  _raf() {
    this._onRenderBind();
    this.rafInstance = requestAnimationFrame(() => this._raf());
  }
}

export { LocomotiveScroll as default };
//# sourceMappingURL=locomotive-scroll.modern.mjs.map
