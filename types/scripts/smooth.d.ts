import Core from "./core";
import LocomotiveScrollOptions from "./options";


export default class Smooth extends Core {
    isScrolling: boolean;
    isDraggingScrollbar: boolean;
    isTicking: boolean;
    parallaxElements: Element[];
    inertiaRatio: number;
    stop: boolean;

    constructor(options?: LocomotiveScrollOptions);

    init(): void;
    setScrollLimit(): void;
    startScrolling(): void;
    stopScrolling(): void;
    checkKey(e: KeyboardEvent): void;
    checkScroll(): void;
    checkResize(): void;
    updateDelta(e: WheelEvent): void;
    updateScroll(e: Event): void;
    addDirection(): void;
    addSpeed(): void;
    initScrollBar(): void;
    reinitScrollBar(): void;
    destroyScrollBar(): void;
    getScrollBar(e: Event): void;
    releaseScrollBar(e: Event): void;
    moveScrollBar(e: MouseEvent): void;
    addElements(): void;
    addSections(): void;
    transform(element: Element, x: number, y: number, delay: number): void;
    transformElement(isForced: boolean): void;
    scrollTo(targetOption: string | Event, offsetOption: number): void;
    update(): void;
    startScroll(): void;
    stopScroll(): void;
    setScroll(x: number, y: number): void;
    destroy(): void;
}