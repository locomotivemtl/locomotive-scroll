/**
 * Integrates Lenis with Locomotive's built-in animation system
 */

import {
    CoreOptions,
    IModular,
    IScrollElementCallbacksValues,
    scrollOrientation,
} from '../types';
import IO from './IO';
import ScrollElement from './ScrollElement';

/** Defined attributes that need a requestAnimationFrame */
const ATTRIBUTES_THAT_NEED_RAF = [
    'scrollOffset',
    'scrollPosition',
    'scrollModuleProgress',
    'scrollCssProgress',
    'scrollEventProgress',
    'scrollSpeed',
];

/** Default root margins */
const TRIGGER_ROOT_MARGIN = '-1px -1px -1px -1px';
const RAF_ROOT_MARGIN = '100% 100% 100% 100%'; // Add 100vh top/bottom && 100vw left/right to use a biggest value with data-scroll-speed

export default class Core {
    private $scrollContainer!: HTMLElement;
    private modularInstance?: IModular;
    private triggerRootMargin!: string;
    private rafRootMargin!: string;
    private scrollElements!: ScrollElement[];
    private triggeredScrollElements!: ScrollElement[];
    private RAFScrollElements!: ScrollElement[];
    private scrollElementsToUpdate!: ScrollElement[];
    private IOTriggerInstance!: IO;
    private IORafInstance!: IO;
    private scrollOrientation!: scrollOrientation;

    constructor({
        $el,
        modularInstance,
        triggerRootMargin,
        rafRootMargin,
        scrollOrientation,
    }: CoreOptions) {
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
        this.triggerRootMargin = triggerRootMargin ?? TRIGGER_ROOT_MARGIN;
        this.rafRootMargin = rafRootMargin ?? RAF_ROOT_MARGIN;

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
    private _init() {
        const $scrollElements =
            this.$scrollContainer.querySelectorAll('[data-scroll]');

        const $scrollElementsArr = Array.from($scrollElements) as HTMLElement[]
        this._subscribeScrollElements($scrollElementsArr);

        // Trigger IO
        this.IOTriggerInstance = new IO({
            scrollElements: [...this.triggeredScrollElements],
            rootMargin: this.triggerRootMargin,
            IORaf: false,
        });

        // Raf IO
        this.IORafInstance = new IO({
            scrollElements: [...this.RAFScrollElements],
            rootMargin: this.rafRootMargin,
            IORaf: true,
        });
    }

    /**
     * Lifecyle - Destroy core.
     */
    public destroy() {
        this.IOTriggerInstance.destroy();
        this.IORafInstance.destroy();
        this._unsubscribeAllScrollElements();
    }

    /**
     * Callback - Resize callback.
     */
    onResize({ currentScroll }: IScrollElementCallbacksValues) {
        for (const scrollElement of this.RAFScrollElements) {
            scrollElement.onResize({
                currentScroll,
            } as IScrollElementCallbacksValues);
        }
    }

    /**
     * Callback - RAF callback.
     */
    onRender({ currentScroll, smooth }: IScrollElementCallbacksValues) {
        for (const scrollElement of this.scrollElementsToUpdate) {
            scrollElement.onRender({
                currentScroll,
                smooth,
            } as IScrollElementCallbacksValues);
        }
    }

    /**
     * Remove items from lists of scroll elements and compute all new values.
     *
     * @param {HTMLElement} $oldContainer - HTMLElement that contains data-scroll elements to unsubscribe
     */
    removeScrollElements($oldContainer: HTMLElement) {
        const $scrollElementsToRemove =
            $oldContainer.querySelectorAll('[data-scroll]');

        if (!$scrollElementsToRemove.length) return;

        // 1. Remove from IO
        for (let index = 0; index < this.triggeredScrollElements.length; index++) {
            const scrollElement = this.triggeredScrollElements[index];
            const $scrollElementsToRemoveArr = Array.from($scrollElementsToRemove) as HTMLElement []
            if ($scrollElementsToRemoveArr.indexOf(scrollElement.$el) > -1) {
                this.IOTriggerInstance.unobserve(scrollElement.$el);
                this.triggeredScrollElements.splice(index, 1);
            }
        }

        for (let index = 0; index < this.RAFScrollElements.length; index++) {
            const scrollElement = this.RAFScrollElements[index];
            const $scrollElementsToRemoveArr = Array.from($scrollElementsToRemove) as HTMLElement []
            if ($scrollElementsToRemoveArr.indexOf(scrollElement.$el) > -1) {
                this.IORafInstance.unobserve(scrollElement.$el);
                this.RAFScrollElements.splice(index, 1);
            }
        }

        // 2. Remove from scrollElementsToUpdate[] and scrollElements[]
        $scrollElementsToRemove.forEach(($scrollElement) => {
            const targetScrollElementToUpdate =
                this.scrollElementsToUpdate.find(
                    (scrollElement) => scrollElement.$el === $scrollElement
                );
            const targetScrollElement = this.scrollElements.find(
                (scrollElement) => scrollElement.$el === $scrollElement
            );

            if (targetScrollElementToUpdate) {
                this._unsubscribeElementUpdate(targetScrollElementToUpdate);
            }
            if (targetScrollElement) {
                this.scrollElements = this.scrollElements.filter(
                    (scrollElementItem) =>
                        scrollElementItem.id != targetScrollElement.id
                );
            }
        });
    }

    /**
     * Add items to lists of scroll elements and compute all new values.
     *
     * @param {HTMLElement} $newContainer - HTMLElement that contains data-scroll elements to subscribe
     */
    addScrollElements($newContainer: HTMLElement) {
        // 3. Rebuild ScrollElements
        const $scrollElements = $newContainer.querySelectorAll('[data-scroll]');

        // 4. Get max scrollElement.id
        const ids: number[] = [];
        this.scrollElements.forEach((scrollElement) => {
            ids.push(scrollElement.id);
        });
        const maxID = Math.max(...ids);
        const fromIndex = maxID + 1;
        const $scrollElementsArr = Array.from($scrollElements) as HTMLElement[]
        this._subscribeScrollElements(
            $scrollElementsArr,
            fromIndex,
            true
        );
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
    _subscribeScrollElements(
        $scrollElements: HTMLElement[],
        fromIndex = 0,
        toObserve = false
    ) {
        // For each scroll element create a ScrollElement instance
        for (let index = 0; index < $scrollElements.length; index++) {
            const $scrollElement = $scrollElements[index];
            const needRaf = this._checkRafNeeded($scrollElement);

            const scrollElementInstance = new ScrollElement({
                $el: $scrollElement,
                id: fromIndex + index,
                scrollOrientation: this.scrollOrientation,
                modularInstance: this.modularInstance,
                subscribeElementUpdateFn:
                    this._subscribeElementUpdate.bind(this),
                unsubscribeElementUpdateFn:
                    this._unsubscribeElementUpdate.bind(this),
                needRaf,
            });

            // Push to common array
            this.scrollElements.push(scrollElementInstance);

            // Push to specific array
            if (needRaf) {
                this.RAFScrollElements.push(scrollElementInstance);

                // Dynamic observe item
                if (toObserve) {
                    this.IORafInstance.scrollElements.push(
                        scrollElementInstance
                    );
                    this.IORafInstance.observe(scrollElementInstance.$el);
                }
            } else {
                this.triggeredScrollElements.push(scrollElementInstance);

                // Dynamic observe item
                if (toObserve) {
                    this.IOTriggerInstance.scrollElements.push(
                        scrollElementInstance
                    );
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
    _subscribeElementUpdate(scrollElement: ScrollElement) {
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
    _unsubscribeElementUpdate(scrollElement: ScrollElement) {
        this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter(
            (scrollElementToUpdate) =>
                scrollElementToUpdate.id != scrollElement.id
        );
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
    _checkRafNeeded($scrollElement: HTMLElement) {
        let attributesThatNeedRaf = [...ATTRIBUTES_THAT_NEED_RAF];

        // Remove utils
        const removeAttribute = (attributeToRemove: string) => {
            attributesThatNeedRaf = attributesThatNeedRaf.filter(
                (attribute) => attribute != attributeToRemove
            );
        };

        // 1. Check scroll offset values
        if ($scrollElement.dataset.scrollOffset) {
            const value = $scrollElement.dataset.scrollOffset
                .split(',')
                .map((test) => test.replace('%', '').trim())
                .join(',');
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
        if (
            $scrollElement.dataset.scrollSpeed &&
            !isNaN(parseFloat($scrollElement.dataset.scrollSpeed))
        ) {
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
