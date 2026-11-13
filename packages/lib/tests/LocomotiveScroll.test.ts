import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import LocomotiveScroll from '../index';

const { LenisMock } = vi.hoisted(() => {
    class LenisMock {
        static instances: LenisMock[] = [];

        rootElement = document.documentElement;
        options: { orientation: string; duration?: number };
        dimensions = { onContentResize() {}, onWrapperResize() {} };
        scrollTo = vi.fn();

        constructor(options: { duration?: number } = {}) {
            this.options = { orientation: 'vertical', ...options };
            LenisMock.instances.push(this);
        }

        on() {}

        destroy() {}
    }

    return { LenisMock };
});

vi.mock('lenis', () => ({ default: LenisMock }));
vi.mock('../core/Core', () => ({
    default: class {
        destroy() {}
    },
}));

function createScrollTo(dataset: Record<string, string>): HTMLAnchorElement {
    const $link = document.createElement('a');
    $link.href = '#target';
    $link.dataset.scrollTo = '';
    Object.assign($link.dataset, dataset);
    document.body.append($link);
    return $link;
}

describe('data-scroll-to', () => {
    beforeEach(() => {
        LenisMock.instances = [];
        vi.stubGlobal(
            'requestAnimationFrame',
            (callback: FrameRequestCallback) => {
                callback(0);
                return 0;
            }
        );
    });

    afterEach(() => {
        document.body.innerHTML = '';
        vi.unstubAllGlobals();
    });

    it('passes a decimal data-scroll-to-duration as is', () => {
        const $link = createScrollTo({ scrollToDuration: '1.5' });
        new LocomotiveScroll({ autoStart: false });

        $link.click();

        expect(LenisMock.instances[0].scrollTo).toHaveBeenCalledWith(
            '#target',
            expect.objectContaining({ duration: 1.5 })
        );
    });

    it('falls back to the Lenis duration without data-scroll-to-duration', () => {
        const $link = createScrollTo({});
        new LocomotiveScroll({
            autoStart: false,
            lenisOptions: { duration: 0.8 },
        });

        $link.click();

        expect(LenisMock.instances[0].scrollTo).toHaveBeenCalledWith(
            '#target',
            expect.objectContaining({ duration: 0.8 })
        );
    });
});
