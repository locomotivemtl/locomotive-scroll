import LocomotiveScrollOptions from "./options";
import { Vector2 } from "./utils/maths";

export type LocomotiveElementAttributes = {
    el: HTMLElement;
    class: string;
    top: number;
    bottom: number;
    offset: number;
    repeat: boolean;
    inView: boolean;
    call: string;
}

export type ScrollInstance = {
    scroll: Vector2;
    limit: number;
}

export default class Core implements LocomotiveScrollOptions {
    el?: Element;
    elMobile?: Element;
    name?: string;
    offset?: number;
    repeat?: boolean;
    smooth?: boolean;
    smoothMobile?: boolean;
    direction?: string;
    inertia?: number;
    class?: string;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    getSpeed?: boolean;
    getDirection?: boolean;

    namespace: string;
    html: Element;
    windowHeight: number;
    windowMiddle: number;
    els: Element[];
    hasScrollTicking: boolean;
    hasCallEventSet: boolean;
    instance: ScrollInstance;

    constructor(options?: LocomotiveScrollOptions);

    init(): void;
    checkScroll(): void;
    checkResize(): void;
    initEvents(): void;
    setScrollTo(event: Event): void;
    addElements(): void;
    detectElements(hasCallEventSet: boolean): void;
    setInView(current: LocomotiveElementAttributes, i: number): void;
    setOutOfView(current: LocomotiveElementAttributes, i: number): void;
    dispatchCall(current: LocomotiveElementAttributes, way: string): void;
    dispatchScroll(): void;
    setEvents(event: string, func: Function): void;
    startScroll(): void;
    stopScroll(): void;
    setScroll(x: number, y: number): void;
    destroy(): void;
}