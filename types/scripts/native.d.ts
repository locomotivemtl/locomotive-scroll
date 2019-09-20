import Core from "./core";
import LocomotiveScrollOptions from "./options";


export default class Native extends Core {
    constructor(options?: LocomotiveScrollOptions);

    init(): void;
    checkScroll(): void;
    checkResize(): void;
    addElements(): void;
    updateElements(): void;
    scrollTo(targetOption: string | Event, offsetOption: number): void;
    update(): void;
    destroy(): void;
}