import { isScrollStopped } from '@root/src/stores/scroll';
import LocomotiveScroll from 'node_modules/locomotive-scroll';

import type {
    ILenisScrollToOptions,
    lenisTargetScrollTo
} from 'node_modules/locomotive-scroll/dist/types/types';

export class Scroll {
    static locomotiveScroll: LocomotiveScroll;
    static lastProgress: number;
    static scrollOrientation: number;

    // =============================================================================
    // Lifecycle
    // =============================================================================
    static init() {
        const scrollOrientation = document.documentElement.dataset.scrollOrientationSettings as 'vertical' | 'horizontal';

        this.locomotiveScroll = new LocomotiveScroll({
            lenisOptions: {
                orientation: scrollOrientation,
            },
            scrollCallback: ({ progress }) => {
                if (progress > this.lastProgress) {
                    if (this.scrollOrientation != 1) {
                        this.scrollOrientation = 1;
                        document.documentElement.style.setProperty(
                            '--scroll-direction',
                            this.scrollOrientation.toString()
                        );
                    }
                } else if (this.scrollOrientation != -1) {
                    this.scrollOrientation = -1;
                    document.documentElement.style.setProperty(
                        '--scroll-direction',
                        this.scrollOrientation.toString()
                    );
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
