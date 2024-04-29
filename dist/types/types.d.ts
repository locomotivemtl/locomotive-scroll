import ScrollElement from './core/ScrollElement';
import type { LenisOptions } from 'lenis';
export interface IModular {
    el: HTMLElement;
    events: any;
    modules: any;
    $(): any;
    parent(): any;
    call(func: string, args: any | null, moduleName: string, moduleId?: string): any;
    on(): any;
    getData(): any;
    setData(): any;
}
export interface ILenisScrollValues {
    scroll: number;
    limit: number;
    velocity: number;
    direction: number;
    progress: number;
}
export type lenisTargetScrollTo = number | HTMLElement | string;
export interface ILenisScrollTo {
    target: number | HTMLElement | string;
    options?: ILenisScrollToOptions;
}
export interface ILenisScrollToOptions {
    offset?: number;
    lerp?: number;
    duration?: number;
    immediate?: boolean;
    lock?: boolean;
    force?: boolean;
    easing?(t: number): number;
    onComplete?(): void;
}
export interface ILocomotiveScrollOptions {
    lenisOptions?: LenisOptions;
    modularInstance?: IModular;
    triggerRootMargin?: string;
    rafRootMargin?: string;
    autoResize?: boolean;
    autoStart?: boolean;
    scrollCallback?(scrollValues: ILenisScrollValues): void;
    initCustomTicker?(render: () => void): void;
    destroyCustomTicker?(render: () => void): void;
}
export interface IScrollElementOptions {
    $el: HTMLElement;
    id: number;
    needRaf: boolean;
    scrollOrientation: scrollOrientation;
    modularInstance?: IModular;
    subscribeElementUpdateFn(scrollElement: ScrollElement): void;
    unsubscribeElementUpdateFn(scrollElement: ScrollElement): void;
    scrollCallback?(scrollValues: ILenisScrollValues): void;
}
export interface IScrollElementAttributes {
    scrollClass: string;
    scrollOffset: string;
    scrollPosition: string;
    scrollModuleProgress: boolean;
    scrollCssProgress: boolean;
    scrollEventProgress: string | null;
    scrollSpeed: number | null;
    scrollRepeat: boolean;
    scrollCall: string | null;
    scrollCallSelf: boolean;
    scrollIgnoreFold: boolean;
    scrollEnableTouchSpeed: boolean;
}
export interface IScrollElementIntersection {
    start: number;
    end: number;
}
export interface IScrollElementMetrics {
    offsetStart: number;
    offsetEnd: number;
    bcr: DOMRect;
}
export interface IScrollElementCallbacksValues {
    currentScroll: number;
    smooth: boolean | null;
}
export interface IProgressModularModules {
    moduleName: string;
    moduleId: string;
}
export type scrollCallWay = 'enter' | 'leave';
export type scrollCallFrom = 'start' | 'end';
export interface IIOOptions {
    scrollElements: ScrollElement[];
    IORaf: boolean;
    rootMargin?: string;
}
export interface CoreOptions {
    $el: HTMLElement;
    modularInstance?: IModular;
    triggerRootMargin?: string;
    rafRootMargin?: string;
    scrollOrientation: scrollOrientation;
}
export type scrollOrientation = 'vertical' | 'horizontal';
export type gestureOrientation = 'vertical' | 'horizontal' | 'both';
export interface IROOptions {
    resizeElements: HTMLElement[];
    resizeCallback(): void;
}
