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
        legacyTriggers: false,
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
            legacyTriggers: false,
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

    it('lands on the target and stops settling once out of the viewport', () => {
        const unsubscribeElementUpdateFn = vi.fn();
        const scrollElement = createMeasuredScrollElement(
            { scrollSpeed: '0.5', scrollDelay: '0.1' },
            { unsubscribeElementUpdateFn }
        );
        startTrailing(scrollElement);
        // Displayed and target positions are both above the viewport
        render(scrollElement, 2500);
        scrollElement.setInteractivityOff();
        render(scrollElement, 2500);

        expect(unsubscribeElementUpdateFn).toHaveBeenCalledOnce();
        expect(getTranslateY(scrollElement.$el)).toBe(parallaxAt(2500, 0.5));
    });

    it('lands out of the viewport without data-scroll-speed', () => {
        const unsubscribeElementUpdateFn = vi.fn();
        const scrollElement = createMeasuredScrollElement(
            { scrollDelay: '0.1' },
            { unsubscribeElementUpdateFn }
        );
        startTrailing(scrollElement);
        render(scrollElement, 2500);
        scrollElement.setInteractivityOff();
        render(scrollElement, 2500);

        expect(unsubscribeElementUpdateFn).toHaveBeenCalledOnce();
        expect(getTranslateY(scrollElement.$el)).toBe(0);
    });

    it('keeps settling while the displayed element is visible', () => {
        const unsubscribeElementUpdateFn = vi.fn();
        const scrollElement = createMeasuredScrollElement(
            { scrollSpeed: '0.5', scrollDelay: '0.1' },
            { unsubscribeElementUpdateFn }
        );
        startTrailing(scrollElement);
        scrollElement.setInteractivityOff();
        render(scrollElement, 1000);

        expect(unsubscribeElementUpdateFn).not.toHaveBeenCalled();
    });

    it('keeps settling while its target is visible', () => {
        const unsubscribeElementUpdateFn = vi.fn();
        const scrollElement = createMeasuredScrollElement(
            { scrollDelay: '0.1' },
            { unsubscribeElementUpdateFn }
        );
        // Displayed top trails below the viewport, the target top is at 700px
        scrollElement.setInteractivityOn();
        render(scrollElement, 400);
        render(scrollElement, 800);
        scrollElement.setInteractivityOff();
        render(scrollElement, 800);

        expect(getTranslateY(scrollElement.$el)).toBeGreaterThan(768 - 700);
        expect(unsubscribeElementUpdateFn).not.toHaveBeenCalled();
    });

    it('comes back from where it landed', () => {
        const scrollElement = createMeasuredScrollElement({
            scrollSpeed: '0.5',
            scrollDelay: '0.1',
        });
        startTrailing(scrollElement);
        render(scrollElement, 2500);
        scrollElement.setInteractivityOff();
        render(scrollElement, 2500);
        scrollElement.setInteractivityOn();
        render(scrollElement, 1000);

        // The delayed scroll is still past the intersection, so the parallax holds its end value
        expect(getTranslateY(scrollElement.$el)).toBeCloseTo(
            parallaxAt(2500, 0.5)
        );
    });

    // Lands above the viewport at 2500, then comes back into the RAF margin at 1700
    function leaveAndComeBack(scrollElement: ScrollElement): number {
        startTrailing(scrollElement);
        render(scrollElement, 2500);
        scrollElement.setInteractivityOff();
        render(scrollElement, 2500);
        const frozen = getTranslateY(scrollElement.$el);
        scrollElement.setInteractivityOn();
        render(scrollElement, 1700);
        return frozen;
    }

    it('comes back without a jump without data-scroll-speed', () => {
        const scrollElement = createMeasuredScrollElement({
            scrollDelay: '0.1',
        });
        const frozen = leaveAndComeBack(scrollElement);

        expect(
            Math.abs(getTranslateY(scrollElement.$el) - frozen)
        ).toBeLessThan(1);
    });

    it('comes back without a jump with a trailing parallax', () => {
        const scrollElement = createMeasuredScrollElement({
            scrollSpeed: '0.1',
            scrollDelay: '0.1',
        });
        const frozen = leaveAndComeBack(scrollElement);

        expect(
            Math.abs(getTranslateY(scrollElement.$el) - frozen)
        ).toBeLessThan(1);
    });

    it('lands on the target after coming back', () => {
        const scrollElement = createMeasuredScrollElement({
            scrollSpeed: '0.1',
            scrollDelay: '0.1',
        });
        leaveAndComeBack(scrollElement);
        renderUntil(
            scrollElement,
            1700,
            () => getTranslateY(scrollElement.$el) === parallaxAt(1700, 0.1)
        );

        expect(getTranslateY(scrollElement.$el)).toBe(parallaxAt(1700, 0.1));
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

describe('ScrollElement visual triggers', () => {
    interface TriggerElementOptions {
        top?: number;
        scrollOrientation?: 'vertical' | 'horizontal';
        legacyTriggers?: boolean;
    }

    interface Crossing {
        scroll: number;
        edge: number;
        previousEdge: number;
    }

    // 300px element; the viewport is 768px tall and 1024px wide
    const size = 300;

    function createTriggerElement(
        dataset: Record<string, string>,
        {
            top = 1500,
            scrollOrientation = 'vertical',
            legacyTriggers = false,
        }: TriggerElementOptions = {}
    ): ScrollElement {
        const $el = document.createElement('div');
        Object.assign($el.dataset, dataset);
        $el.getBoundingClientRect = () =>
            (scrollOrientation === 'vertical'
                ? { top, left: 0, width: size, height: size }
                : { top: 0, left: top, width: size, height: size }) as DOMRect;

        return new ScrollElement({
            $el,
            id: 0,
            needRaf: true,
            scrollOrientation,
            lenisInstance: createLenisStub(),
            enableTouchSpeed: false,
            legacyTriggers,
            subscribeElementUpdateFn: vi.fn(),
            unsubscribeElementUpdateFn: vi.fn(),
        });
    }

    function getTranslate(scrollElement: ScrollElement): number {
        const match =
            scrollElement.scrollOrientation === 'vertical'
                ? /translate3d\(0, (-?[\d.e-]+)(?:px)?, 0\)/.exec(
                      scrollElement.$el.style.transform
                  )
                : /translate3d\((-?[\d.e-]+)(?:px)?, 0, 0\)/.exec(
                      scrollElement.$el.style.transform
                  );
        return match ? parseFloat(match[1]) : 0;
    }

    function render(
        scrollElement: ScrollElement,
        currentScroll: number,
        reducedMotion = false
    ) {
        scrollElement.onRender({
            currentScroll,
            smooth: true,
            reducedMotion,
            deltaTime: 1 / 60,
        });
    }

    // Scroll 1px per frame until the inview state flips, and report where the displayed edge was
    function scrollUntil(
        scrollElement: ScrollElement,
        from: number,
        isInview: boolean,
        getEdge: (scroll: number, translate: number) => number,
        reducedMotion = false
    ): Crossing {
        let previousEdge = Number.NaN;
        for (let scroll = from; scroll < 5000; scroll++) {
            render(scrollElement, scroll, reducedMotion);
            const edge = getEdge(scroll, getTranslate(scrollElement));
            if (
                scrollElement.$el.classList.contains('is-inview') === isInview
            ) {
                return { scroll, edge, previousEdge };
            }
            previousEdge = edge;
        }
        return { scroll: Number.NaN, edge: Number.NaN, previousEdge };
    }

    function displayedStart(top: number) {
        return (scroll: number, translate: number) => top - scroll + translate;
    }

    function displayedEnd(top: number) {
        return (scroll: number, translate: number) =>
            top + size - scroll + translate;
    }

    // Entry needs progress > 0, so the edge is past the line
    function expectEntry({ edge, previousEdge }: Crossing, line: number) {
        expect(previousEdge).toBeGreaterThanOrEqual(line);
        expect(edge).toBeLessThan(line);
    }

    // Exit happens at progress 1, so the edge can sit on the line
    function expectExit({ edge, previousEdge }: Crossing, line: number) {
        expect(previousEdge).toBeGreaterThan(line);
        expect(edge).toBeLessThanOrEqual(line);
    }

    it('enters when the displayed edge reaches the viewport with a positive speed', () => {
        const scrollElement = createTriggerElement({ scrollSpeed: '0.5' });

        expectEntry(
            scrollUntil(scrollElement, 0, true, displayedStart(1500)),
            768
        );
    });

    it('enters when the displayed edge reaches the viewport with a negative speed', () => {
        const scrollElement = createTriggerElement({ scrollSpeed: '-0.3' });

        expectEntry(
            scrollUntil(scrollElement, 0, true, displayedStart(1500)),
            768
        );
    });

    it('enters on the first displayed entry when the element moves backward', () => {
        const scrollElement = createTriggerElement(
            { scrollSpeed: '-2' },
            { top: 2500 }
        );
        const crossing = scrollUntil(
            scrollElement,
            0,
            true,
            displayedStart(2500)
        );

        expectEntry(crossing, 768);
        // The edge crosses three times; the first one comes before the natural entry at 1732
        expect(crossing.scroll).toBeLessThan(1732);
    });

    it('leaves when the displayed edge leaves the viewport', () => {
        const scrollElement = createTriggerElement({
            scrollSpeed: '0.5',
            scrollRepeat: '',
        });
        const { scroll } = scrollUntil(
            scrollElement,
            0,
            true,
            displayedStart(1500)
        );

        expectExit(
            scrollUntil(scrollElement, scroll, false, displayedEnd(1500)),
            0
        );
    });

    it('leaves on the last displayed exit when the element moves backward', () => {
        const scrollElement = createTriggerElement(
            { scrollSpeed: '-2', scrollRepeat: '' },
            { top: 2500 }
        );
        const { scroll } = scrollUntil(
            scrollElement,
            0,
            true,
            displayedStart(2500)
        );

        expectExit(
            scrollUntil(scrollElement, scroll, false, displayedEnd(2500)),
            0
        );
    });

    it('applies the offset to the displayed position', () => {
        const scrollElement = createTriggerElement({
            scrollSpeed: '0.5',
            scrollOffset: '30%,30%',
        });

        expectEntry(
            scrollUntil(scrollElement, 0, true, displayedStart(1500)),
            768 * 0.7
        );
    });

    it('applies the position to the displayed element', () => {
        const scrollElement = createTriggerElement({
            scrollSpeed: '0.5',
            scrollPosition: 'end,end',
        });

        expectEntry(
            scrollUntil(scrollElement, 0, true, displayedEnd(1500)),
            768
        );
    });

    it('leaves the fold when the displayed edge leaves the viewport', () => {
        const scrollElement = createTriggerElement(
            { scrollSpeed: '0.5', scrollRepeat: '' },
            { top: 300 }
        );

        expect(scrollElement.$el.classList.contains('is-inview')).toBe(true);
        expectExit(scrollUntil(scrollElement, 0, false, displayedEnd(300)), 0);
    });

    it('stays in view at the top of the page in the fold with data-scroll-repeat', () => {
        const scrollElement = createTriggerElement(
            { scrollSpeed: '0.5', scrollRepeat: '' },
            { top: 300 }
        );
        render(scrollElement, 0);
        render(scrollElement, 100);
        render(scrollElement, 0);

        expect(scrollElement.$el.classList.contains('is-inview')).toBe(true);
    });

    it('calls from the end when it comes back into the fold from below', () => {
        const scrollElement = createTriggerElement(
            { scrollSpeed: '0.5', scrollRepeat: '', scrollCall: 'foldCall' },
            { top: 300 }
        );
        const froms: string[] = [];
        const onCall = (event: Event) =>
            froms.push((event as CustomEvent<{ from: string }>).detail.from);
        window.addEventListener('foldCall', onCall);
        render(scrollElement, 1);
        render(scrollElement, 500);
        // Closer to the displayed exit, at 366, than to the start, at 0
        render(scrollElement, 250);
        window.removeEventListener('foldCall', onCall);

        // Leave, then enter again; the fold entry fired in the constructor
        expect(froms).toEqual(['end', 'end']);
    });

    it('enters on the displayed position horizontally', () => {
        const scrollElement = createTriggerElement(
            { scrollSpeed: '0.5' },
            { scrollOrientation: 'horizontal' }
        );

        expectEntry(
            scrollUntil(scrollElement, 0, true, displayedStart(1500)),
            1024
        );
    });

    it('fills --progress between the displayed entry and exit', () => {
        const scrollElement = createTriggerElement({
            scrollSpeed: '0.5',
            scrollCssProgress: '',
        });
        const { scroll } = scrollUntil(
            scrollElement,
            0,
            true,
            displayedStart(1500)
        );
        render(scrollElement, scroll - 1);

        expect(scrollElement.$el.style.getPropertyValue('--progress')).toBe(
            '0'
        );
    });

    it('triggers on the displayed position without delay', () => {
        const delayed = createTriggerElement({
            scrollSpeed: '0.5',
            scrollDelay: '0.1',
        });
        const direct = createTriggerElement({ scrollSpeed: '0.5' });
        const getEdge = displayedStart(1500);

        expect(scrollUntil(delayed, 0, true, getEdge).scroll).toBe(
            scrollUntil(direct, 0, true, getEdge).scroll
        );
    });

    it('keeps the parallax on the natural position', () => {
        const scrollElement = createTriggerElement({ scrollSpeed: '0.5' });
        render(scrollElement, 1000);

        expect(getTranslate(scrollElement)).toBeCloseTo(
            (((1000 - 732) / 1068) * 2 - 1) * 768 * 0.5 * -1
        );
    });

    it('triggers on the natural position with legacyTriggers', () => {
        const scrollElement = createTriggerElement(
            { scrollSpeed: '0.5' },
            { legacyTriggers: true }
        );

        expect(
            scrollUntil(scrollElement, 0, true, displayedStart(1500)).scroll
        ).toBe(733);
    });

    it('triggers on the natural position under reduced motion', () => {
        const scrollElement = createTriggerElement({ scrollSpeed: '0.5' });

        expect(
            scrollUntil(scrollElement, 0, true, displayedStart(1500), true)
                .scroll
        ).toBe(733);
    });
});
