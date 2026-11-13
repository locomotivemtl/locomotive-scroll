import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import LocomotiveScroll from '../index';

const { LenisMock, CoreMock } = vi.hoisted(() => {
    class DimensionsMock {
        onWrapperResize() {}
        onContentResize() {}

        // Same sequence as Lenis Dimensions.resize
        resize() {
            this.onWrapperResize();
            this.onContentResize();
        }
    }

    class LenisMock {
        static instances: LenisMock[] = [];

        rootElement = document.documentElement;
        options: { orientation: string; duration?: number };
        dimensions = new DimensionsMock();
        scrollTo = vi.fn();

        constructor(options: { duration?: number } = {}) {
            this.options = { orientation: 'vertical', ...options };
            LenisMock.instances.push(this);
        }

        on() {}

        destroy() {}
    }

    class CoreMock {
        static instances: CoreMock[] = [];

        onResize = vi.fn();

        constructor() {
            CoreMock.instances.push(this);
        }

        destroy() {}
    }

    return { LenisMock, CoreMock };
});

vi.mock('lenis', () => ({ default: LenisMock }));
vi.mock('../core/Core', () => ({ default: CoreMock }));

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

describe('resize', () => {
    beforeEach(() => {
        LenisMock.instances = [];
        CoreMock.instances = [];
        vi.stubGlobal(
            'requestAnimationFrame',
            (callback: FrameRequestCallback) => {
                callback(0);
                return 0;
            }
        );
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('resizes the core once per Lenis resize', () => {
        new LocomotiveScroll({ autoStart: false });

        LenisMock.instances[0].dimensions.resize();

        expect(CoreMock.instances[0].onResize).toHaveBeenCalledTimes(1);
    });
});
