import type Lenis from 'lenis';

export function createLenisStub(): Lenis {
    return {
        scroll: 0,
        limit: 2000,
        options: { wrapper: window, orientation: 'vertical' },
        dimensions: { width: 1024, height: 768 },
    } as unknown as Lenis;
}
