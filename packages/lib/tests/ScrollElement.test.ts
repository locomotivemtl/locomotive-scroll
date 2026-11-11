import { describe, expect, it, vi } from 'vitest';
import ScrollElement from '../core/ScrollElement';
import { createLenisStub } from './createLenisStub';

function createScrollElement(dataset: Record<string, string>): ScrollElement {
    const $el = document.createElement('div');
    Object.assign($el.dataset, dataset);

    return new ScrollElement({
        $el,
        id: 0,
        needRaf: false,
        scrollOrientation: 'vertical',
        lenisInstance: createLenisStub(),
        subscribeElementUpdateFn: vi.fn(),
        unsubscribeElementUpdateFn: vi.fn(),
    });
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
        });
    });
});

describe('ScrollElement parallax', () => {
    const smoothValues = { currentScroll: 100, smooth: true };

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
