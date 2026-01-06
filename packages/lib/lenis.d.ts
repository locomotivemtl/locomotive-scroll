// Module augmentation to fix Lenis 1.3.17 TypeScript bugs
import 'lenis';

declare module 'lenis' {
    export interface LenisOptions {
        // Fix: __experimental__naiveDimensions is used in Lenis but not declared in types
        __experimental__naiveDimensions?: boolean;
    }
}
