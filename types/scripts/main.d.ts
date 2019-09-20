import LocomotiveScrollOptions from "./options";
import Smooth from "./smooth";
import Native from "./native";

export default class LocomotiveScroll implements LocomotiveScrollOptions {
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

    isMobile: boolean;
    options: LocomotiveScrollOptions;
    scroll: Smooth | Native;

    constructor(options?: LocomotiveScrollOptions);

    init(): void;
    update(): void;
    start(): void;
    stop(): void;
    scrollTo(target: Node | string, offset: number): void;
    setScroll(x: number, y: number): void;
    on(event: string, func: Function): void;
    destroy(): void;
}