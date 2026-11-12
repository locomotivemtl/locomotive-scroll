import { describe, expect, it, vi } from 'vitest';
import ScrollElement from '../core/ScrollElement';
import type { IScrollElementOptions } from '../types';
import { createLenisStub } from './createLenisStub';

type ScrollElementTestOptions = Partial<
    Pick<
        IScrollElementOptions,
        | 'enableTouchSpeed'
        | 'subscribeElementUpdateFn'
        | 'unsubscribeElementUpdateFn'
    >
>;

function createScrollElement(
    dataset: Record<string, string>,
    {
        enableTouchSpeed = false,
        subscribeElementUpdateFn = vi.fn(),
        unsubscribeElementUpdateFn = vi.fn(),
    }: ScrollElementTestOptions = {}
): ScrollElement {
    const $el = document.createElement('div');
    Object.assign($el.dataset, dataset);

    return new ScrollElement({
        $el,
        id: 0,
        needRaf: false,
        scrollOrientation: 'vertical',
        lenisInstance: createLenisStub(),
        enableTouchSpeed,
        subscribeElementUpdateFn,
        unsubscribeElementUpdateFn,
    });
}

function getTranslateY($el: HTMLElement): number {
    const match = /translate3d\(0, (-?[\d.e-]+)(?:px)?, 0\)/.exec(
        $el.style.transform
    );
    return match ? parseFloat(match[1]) : Number.NaN;
}

describe('ScrollElement attributes', () => {
    it('applies defaults when no attribute is set', () => {
        expect(createScrollElement({}).attributes).toEqual({
            scrollClass: 'is-inview',
            scrollOffset: '0,0',
            scrollPosition: 'start,end',
            scrollCssProgress: false,
            scrollEventProgress: null,
            scrollSpeed: null,
            scrollRepeat: false,
            scrollCall: null,
            scrollIgnoreFold: false,
            scrollEnableTouchSpeed: false,
            scrollDelay: null,
        });
    });

    it('parses attributes from the dataset', () => {
        const { attributes } = createScrollElement({
            scrollClass: 'is-visible',
            scrollOffset: '10%,20%',
            scrollPosition: 'middle,end',
            scrollCssProgress: '',
            scrollEventProgress: 'progressEvent',
            scrollSpeed: '-0.5',
            scrollRepeat: '',
            scrollCall: 'callEvent',
            scrollIgnoreFold: '',
            scrollEnableTouchSpeed: '',
            scrollDelay: '0.1',
        });

        expect(attributes).toEqual({
            scrollClass: 'is-visible',
            scrollOffset: '10%,20%',
            scrollPosition: 'middle,end',
            scrollCssProgress: true,
            scrollEventProgress: 'progressEvent',
            scrollSpeed: -0.5,
            scrollRepeat: true,
            scrollCall: 'callEvent',
            scrollIgnoreFold: true,
            scrollEnableTouchSpeed: true,
            scrollDelay: 0.1,
        });
    });

    it.each(['0', '1', '1.5', '-0.2', 'abc', ''])(
        'ignores data-scroll-delay="%s"',
        (scrollDelay) => {
            expect(
                createScrollElement({ scrollDelay }).attributes.scrollDelay
            ).toBeNull();
        }
    );
});

describe('ScrollElement enableTouchSpeed', () => {
    it('is off with neither the option nor the attribute', () => {
        expect(createScrollElement({}).attributes.scrollEnableTouchSpeed).toBe(
            false
        );
    });

    it('is on with the option alone', () => {
        expect(
            createScrollElement({}, { enableTouchSpeed: true }).attributes
                .scrollEnableTouchSpeed
        ).toBe(true);
    });

    it('is on with the attribute alone', () => {
        expect(
            createScrollElement({ scrollEnableTouchSpeed: '' }).attributes
                .scrollEnableTouchSpeed
        ).toBe(true);
    });

    it('keeps parallax on touch devices with the option', () => {
        const scrollElement = createScrollElement(
            { scrollSpeed: '0.5' },
            { enableTouchSpeed: true }
        );
        scrollElement.onRender({
            currentScroll: 100,
            smooth: false,
            reducedMotion: false,
            deltaTime: 1 / 60,
        });

        expect(scrollElement.$el.style.transform).toBe(
            'translate3d(0, -384px, 0)'
        );
    });
});

describe('ScrollElement parallax', () => {
    const smoothValues = {
        currentScroll: 100,
        smooth: true,
        deltaTime: 1 / 60,
    };

    it('translates the element by its speed', () => {
        const scrollElement = createScrollElement({ scrollSpeed: '0.5' });
        scrollElement.onRender({ ...smoothValues, reducedMotion: false });

        expect(scrollElement.$el.style.transform).toBe(
            'translate3d(0, -384px, 0)'
        );
    });

    it('resets the translation under reduced motion', () => {
        const scrollElement = createScrollElement({ scrollSpeed: '0.5' });
        scrollElement.onRender({ ...smoothValues, reducedMotion: false });
        scrollElement.onRender({ ...smoothValues, reducedMotion: true });

        expect(scrollElement.$el.style.transform).toBe('translate3d(0, 0, 0)');
    });

    it('ignores data-scroll-enable-touch-speed under reduced motion', () => {
        const scrollElement = createScrollElement({
            scrollSpeed: '0.5',
            scrollEnableTouchSpeed: '',
        });
        scrollElement.onRender({ ...smoothValues, reducedMotion: false });
        scrollElement.onRender({
            currentScroll: 100,
            smooth: false,
            reducedMotion: true,
            deltaTime: 1 / 60,
        });

        expect(scrollElement.$el.style.transform).toBe('translate3d(0, 0, 0)');
    });

    it('translates again once reduced motion is turned off', () => {
        const scrollElement = createScrollElement({ scrollSpeed: '0.5' });
        scrollElement.onRender({ ...smoothValues, reducedMotion: true });
        scrollElement.onRender({ ...smoothValues, reducedMotion: false });

        expect(scrollElement.$el.style.transform).toBe(
            'translate3d(0, -384px, 0)'
        );
    });
});

describe('ScrollElement delay', () => {
    // Element at 1500px, 300px tall, in a 768px viewport: progress runs from scroll 732 to 1800
    const intersectionStart = 732;
    const intersectionRange = 1068;
    const trailLimit = 768 * 0.25;

    function createMeasuredScrollElement(
        dataset: Record<string, string>,
        options: ScrollElementTestOptions = {}
    ): ScrollElement {
        const $el = document.createElement('div');
        Object.assign($el.dataset, dataset);
        $el.getBoundingClientRect = () =>
            ({ top: 1500, left: 0, width: 300, height: 300 }) as DOMRect;

        return new ScrollElement({
            $el,
            id: 0,
            needRaf: true,
            scrollOrientation: 'vertical',
            lenisInstance: createLenisStub(),
            enableTouchSpeed: false,
            subscribeElementUpdateFn:
                options.subscribeElementUpdateFn ?? vi.fn(),
            unsubscribeElementUpdateFn:
                options.unsubscribeElementUpdateFn ?? vi.fn(),
        });
    }

    function parallaxAt(scroll: number, speed: number): number {
        const progress = Math.min(
            1,
            Math.max(0, (scroll - intersectionStart) / intersectionRange)
        );
        return (progress * 2 - 1) * 768 * speed * -1;
    }

    function render(scrollElement: ScrollElement, currentScroll: number) {
        scrollElement.onRender({
            currentScroll,
            smooth: true,
            reducedMotion: false,
            deltaTime: 1 / 60,
        });
    }

    function renderUntil(
        scrollElement: ScrollElement,
        currentScroll: number,
        isDone: () => boolean,
        maxFrames = 1000
    ) {
        for (let frame = 0; frame < maxFrames && !isDone(); frame++) {
            render(scrollElement, currentScroll);
        }
    }

    // Subscribe, then scroll so the element trails behind its target
    function startTrailing(scrollElement: ScrollElement) {
        scrollElement.setInteractivityOn();
        render(scrollElement, 900);
        render(scrollElement, 1000);
    }

    it('snaps to the target on the first render', () => {
        const scrollElement = createMeasuredScrollElement({
            scrollSpeed: '0.5',
            scrollDelay: '0.1',
        });
        render(scrollElement, 1000);

        expect(getTranslateY(scrollElement.$el)).toBeCloseTo(
            parallaxAt(1000, 0.5)
        );
    });

    it('delays the parallax by the factor at 60 fps, as v4', () => {
        const scrollElement = createMeasuredScrollElement({
            scrollSpeed: '0.5',
            scrollDelay: '0.1',
        });
        render(scrollElement, 900);
        render(scrollElement, 1000);

        expect(getTranslateY(scrollElement.$el)).toBeCloseTo(
            parallaxAt(910, 0.5)
        );
    });

    it('lands on the parallax target', () => {
        const scrollElement = createMeasuredScrollElement({
            scrollSpeed: '0.5',
            scrollDelay: '0.1',
        });
        const target = parallaxAt(1000, 0.5);
        render(scrollElement, 900);
        renderUntil(
            scrollElement,
            1000,
            () => getTranslateY(scrollElement.$el) === target
        );

        expect(getTranslateY(scrollElement.$el)).toBe(target);
    });

    it('trails without data-scroll-speed, then lands back in place', () => {
        const scrollElement = createMeasuredScrollElement({
            scrollDelay: '0.1',
        });
        render(scrollElement, 900);
        render(scrollElement, 1000);

        expect(getTranslateY(scrollElement.$el)).toBeCloseTo(
            trailLimit * Math.tanh((0.25 * 90) / trailLimit)
        );

        renderUntil(
            scrollElement,
            1000,
            () => getTranslateY(scrollElement.$el) === 0
        );

        expect(getTranslateY(scrollElement.$el)).toBe(0);
    });

    it('limits the trail on large jumps', () => {
        const scrollElement = createMeasuredScrollElement({
            scrollDelay: '0.1',
        });
        render(scrollElement, 900);
        render(scrollElement, 9000);

        expect(getTranslateY(scrollElement.$el)).toBeLessThan(trailLimit);
        expect(getTranslateY(scrollElement.$el)).toBeGreaterThan(
            trailLimit * 0.8
        );
    });

    it('comes back quickly once the scroll stops after a large jump', () => {
        const scrollElement = createMeasuredScrollElement({
            scrollDelay: '0.1',
        });
        render(scrollElement, 900);
        for (let frame = 0; frame < 40; frame++) {
            render(scrollElement, 9000);
        }

        expect(getTranslateY(scrollElement.$el)).toBeLessThan(10);
    });

    it('trails behind with a negative speed', () => {
        const scrollElement = createMeasuredScrollElement({
            scrollSpeed: '-0.2',
            scrollDelay: '0.1',
        });
        render(scrollElement, 900);
        render(scrollElement, 1000);

        expect(getTranslateY(scrollElement.$el)).toBeGreaterThan(
            parallaxAt(1000, -0.2)
        );
    });

    it('keeps rendering out of view until the target is reached', () => {
        const unsubscribeElementUpdateFn = vi.fn();
        const scrollElement = createMeasuredScrollElement(
            { scrollSpeed: '0.5', scrollDelay: '0.1' },
            { unsubscribeElementUpdateFn }
        );
        startTrailing(scrollElement);
        scrollElement.setInteractivityOff();

        expect(unsubscribeElementUpdateFn).not.toHaveBeenCalled();

        renderUntil(
            scrollElement,
            1000,
            () => unsubscribeElementUpdateFn.mock.calls.length > 0
        );

        expect(unsubscribeElementUpdateFn).toHaveBeenCalledOnce();
        expect(getTranslateY(scrollElement.$el)).toBe(parallaxAt(1000, 0.5));
    });

    it('unsubscribes right away without a delay', () => {
        const unsubscribeElementUpdateFn = vi.fn();
        const scrollElement = createMeasuredScrollElement(
            { scrollSpeed: '0.5' },
            { unsubscribeElementUpdateFn }
        );
        startTrailing(scrollElement);
        scrollElement.setInteractivityOff();

        expect(unsubscribeElementUpdateFn).toHaveBeenCalledOnce();
    });

    it('does not subscribe twice when it comes back while settling', () => {
        const subscribeElementUpdateFn = vi.fn();
        const unsubscribeElementUpdateFn = vi.fn();
        const scrollElement = createMeasuredScrollElement(
            { scrollSpeed: '0.5', scrollDelay: '0.1' },
            { subscribeElementUpdateFn, unsubscribeElementUpdateFn }
        );
        startTrailing(scrollElement);
        scrollElement.setInteractivityOff();
        scrollElement.setInteractivityOn();
        renderUntil(
            scrollElement,
            1000,
            () => getTranslateY(scrollElement.$el) === parallaxAt(1000, 0.5)
        );

        expect(subscribeElementUpdateFn).toHaveBeenCalledOnce();
        expect(unsubscribeElementUpdateFn).not.toHaveBeenCalled();
    });

    it('resets and stops settling under reduced motion', () => {
        const unsubscribeElementUpdateFn = vi.fn();
        const scrollElement = createMeasuredScrollElement(
            { scrollDelay: '0.1' },
            { unsubscribeElementUpdateFn }
        );
        startTrailing(scrollElement);
        scrollElement.setInteractivityOff();
        scrollElement.onRender({
            currentScroll: 1000,
            smooth: true,
            reducedMotion: true,
            deltaTime: 1 / 60,
        });

        expect(scrollElement.$el.style.transform).toBe('translate3d(0, 0, 0)');
        expect(unsubscribeElementUpdateFn).toHaveBeenCalledOnce();
    });

    it('resets and stops settling on touch devices', () => {
        const unsubscribeElementUpdateFn = vi.fn();
        const scrollElement = createMeasuredScrollElement(
            { scrollDelay: '0.1' },
            { unsubscribeElementUpdateFn }
        );
        startTrailing(scrollElement);
        scrollElement.setInteractivityOff();
        scrollElement.onRender({
            currentScroll: 1000,
            smooth: false,
            reducedMotion: false,
            deltaTime: 1 / 60,
        });

        expect(scrollElement.$el.style.transform).toBe('translate3d(0, 0, 0)');
        expect(unsubscribeElementUpdateFn).toHaveBeenCalledOnce();
    });

    it('snaps to the target again when parallax resumes after a reset', () => {
        const scrollElement = createMeasuredScrollElement({
            scrollSpeed: '0.5',
            scrollDelay: '0.1',
        });
        render(scrollElement, 900);
        scrollElement.onRender({
            currentScroll: 900,
            smooth: true,
            reducedMotion: true,
            deltaTime: 1 / 60,
        });
        render(scrollElement, 1000);

        expect(getTranslateY(scrollElement.$el)).toBeCloseTo(
            parallaxAt(1000, 0.5)
        );
    });
});
