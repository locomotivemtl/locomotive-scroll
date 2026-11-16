import { beforeEach, describe, expect, it, vi } from 'vitest';
import Core from '../core/Core';
import { createLenisStub } from './createLenisStub';

class IntersectionObserverStub {
    static instances: IntersectionObserverStub[] = [];

    unobserved: Element[] = [];
    callback: IntersectionObserverCallback;

    constructor(callback: IntersectionObserverCallback) {
        this.callback = callback;
        IntersectionObserverStub.instances.push(this);
    }

    observe() {}

    unobserve($el: Element) {
        this.unobserved.push($el);
    }

    disconnect() {}

    intersect(target: Element) {
        this.callback(
            [{ target, isIntersecting: true } as IntersectionObserverEntry],
            this as unknown as IntersectionObserver
        );
    }
}

function createElement(
    $parent: HTMLElement,
    dataset: Record<string, string> = {}
): HTMLElement {
    const $el = document.createElement('div');
    $el.dataset.scroll = '';
    Object.assign($el.dataset, dataset);
    $parent.append($el);
    return $el;
}

function placeElement($el: HTMLElement, top: number, height: number) {
    $el.getBoundingClientRect = () =>
        ({ top, left: 0, width: 100, height }) as DOMRect;
}

function renderFrame(core: Core, currentScroll: number) {
    core.onRender({
        currentScroll,
        smooth: true,
        reducedMotion: false,
        deltaTime: 1 / 60,
    });
}

function createCore($root: HTMLElement): Core {
    return new Core({
        $el: $root,
        scrollOrientation: 'vertical',
        lenisInstance: createLenisStub(),
        enableTouchSpeed: false,
        legacyTriggers: false,
    });
}

describe('Core', () => {
    let $root: HTMLElement;

    beforeEach(() => {
        IntersectionObserverStub.instances = [];
        vi.stubGlobal('IntersectionObserver', IntersectionObserverStub);
        $root = document.createElement('div');
        document.body.append($root);
    });

    describe('_checkRafNeeded', () => {
        const core = () => createCore($root);

        it('is false for a plain element', () => {
            expect(core()._checkRafNeeded(createElement($root))).toBe(false);
        });

        it('is false for default offset and position values', () => {
            const $el = createElement($root, {
                scrollOffset: '0%, 0%',
                scrollPosition: 'start,end',
            });
            expect(core()._checkRafNeeded($el)).toBe(false);
        });

        it('is false for the default position with spaces', () => {
            const $el = createElement($root, { scrollPosition: 'start, end' });
            expect(core()._checkRafNeeded($el)).toBe(false);
        });

        it('is true for a position other than the default', () => {
            const $el = createElement($root, { scrollPosition: 'top,bottom' });
            expect(core()._checkRafNeeded($el)).toBe(true);
        });

        it('is true for a scroll delay', () => {
            const $el = createElement($root, { scrollDelay: '0.1' });
            expect(core()._checkRafNeeded($el)).toBe(true);
        });

        it('is true for a custom offset', () => {
            const $el = createElement($root, { scrollOffset: '10%,0' });
            expect(core()._checkRafNeeded($el)).toBe(true);
        });

        it('is true for a numeric speed and false for an invalid one', () => {
            const $speed = createElement($root, { scrollSpeed: '0.5' });
            const $invalid = createElement($root, { scrollSpeed: 'abc' });
            expect(core()._checkRafNeeded($speed)).toBe(true);
            expect(core()._checkRafNeeded($invalid)).toBe(false);
        });

        it('is true for progress attributes', () => {
            const $el = createElement($root, { scrollCssProgress: '' });
            expect(core()._checkRafNeeded($el)).toBe(true);
        });
    });

    describe('removeScrollElements', () => {
        it('unobserves two adjacent trigger elements', () => {
            const $container = document.createElement('div');
            $root.append($container);
            const $first = createElement($container);
            const $second = createElement($container);
            const $kept = createElement($root);

            createCore($root).removeScrollElements($container);

            const [triggerObserver] = IntersectionObserverStub.instances;
            expect(triggerObserver.unobserved).toEqual([$first, $second]);
            expect(triggerObserver.unobserved).not.toContain($kept);
        });

        it('unobserves two adjacent RAF elements', () => {
            const $container = document.createElement('div');
            $root.append($container);
            const $first = createElement($container, { scrollSpeed: '0.5' });
            const $second = createElement($container, { scrollSpeed: '0.5' });

            createCore($root).removeScrollElements($container);

            const [, rafObserver] = IntersectionObserverStub.instances;
            expect(rafObserver.unobserved).toEqual([$first, $second]);
        });

        it('forgets removed elements in the observer', () => {
            const $container = document.createElement('div');
            $root.append($container);
            const $removed = createElement($container);

            createCore($root).removeScrollElements($container);

            const [triggerObserver] = IntersectionObserverStub.instances;
            triggerObserver.intersect($removed);
            expect($removed.classList.contains('is-inview')).toBe(false);
        });
    });

    describe('onRender after a scroll jump', () => {
        // An infinite wrap or an immediate scrollTo lands before the IntersectionObserver reports
        it('renders the elements of the new viewport in the same frame', () => {
            const $top = createElement($root, { scrollCssProgress: '' });
            const $end = createElement($root, { scrollCssProgress: '' });
            placeElement($top, 0, 300);
            placeElement($end, 1500, 300);
            const core = createCore($root);
            const [, rafObserver] = IntersectionObserverStub.instances;

            rafObserver.intersect($end);
            renderFrame(core, 1232);
            expect($top.style.getPropertyValue('--progress')).toBe('');

            renderFrame(core, 0);
            expect($top.style.getPropertyValue('--progress')).not.toBe('');
        });

        it('leaves the elements away from the new viewport to the observer', () => {
            const $far = createElement($root, { scrollCssProgress: '' });
            const $end = createElement($root, { scrollCssProgress: '' });
            placeElement($far, 1700, 300);
            placeElement($end, 3000, 300);
            const core = createCore($root);
            const [, rafObserver] = IntersectionObserverStub.instances;

            rafObserver.intersect($end);
            renderFrame(core, 3000);
            renderFrame(core, 0);
            expect($far.style.getPropertyValue('--progress')).toBe('');
        });

        it('waits for the observer on a regular scroll', () => {
            const $next = createElement($root, { scrollCssProgress: '' });
            placeElement($next, 1000, 300);
            const core = createCore($root);

            renderFrame(core, 0);
            renderFrame(core, 300);
            expect($next.style.getPropertyValue('--progress')).toBe('');
        });
    });
});
