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
                scrollPosition: 'top,bottom',
            });
            expect(core()._checkRafNeeded($el)).toBe(false);
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
});
