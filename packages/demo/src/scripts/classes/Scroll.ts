import { isScrollStopped } from '@root/src/stores/scroll';
import LocomotiveScroll from '../../../../lib/index';

import type {
    ILenisScrollToOptions,
    lenisTargetScrollTo
} from '../../../../lib/types';

export class Scroll {
    static locomotiveScroll: LocomotiveScroll;
    static lastProgress: number;
    static scrollDirection: number;

    // =============================================================================
    // Lifecycle
    // =============================================================================
    static init() {
        const { scrollOrientationSettings, scrollInfiniteSettings } = document.documentElement.dataset;

        this.locomotiveScroll = new LocomotiveScroll({
            lenisOptions: {
                orientation: scrollOrientationSettings as 'vertical' | 'horizontal',
                infinite: scrollInfiniteSettings !== undefined,
            },
            scrollCallback: ({ progress }) => {
                const scrollDirection = progress > this.lastProgress ? 1 : -1;

                if (scrollDirection !== this.scrollDirection) {
                    this.scrollDirection = scrollDirection;
                    document.documentElement.dataset.scrollDirection =
                        scrollDirection === 1 ? 'forward' : 'backward';
                }

                this.lastProgress = progress as number;
            }
        });

        isScrollStopped.listen((value) => {
            if (value) {
                this.stop();
            } else {
                this.start();
            }
        });
    }

    static destroy() {
        this.locomotiveScroll?.destroy();
    }

    // =============================================================================
    // Methods
    // =============================================================================
    static start() {
        this.locomotiveScroll?.start();
    }

    static stop() {
        this.locomotiveScroll?.stop();
    }

    static addScrollElements(container: HTMLElement) {
        this.locomotiveScroll?.addScrollElements(container);
    }

    static removeScrollElements(container: HTMLElement) {
        this.locomotiveScroll?.removeScrollElements(container);
    }

    static scrollTo(target: lenisTargetScrollTo, options?: ILenisScrollToOptions) {
        this.locomotiveScroll?.scrollTo(target, options);
    }
}
