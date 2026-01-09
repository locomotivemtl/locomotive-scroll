import modular from 'modujs';
import * as modules from './modules';
import globals from './globals';
import { debounce } from './utils/tickers'
import { $html } from './utils/dom';
import { ENV, FONT, CUSTOM_EVENT, CSS_CLASS } from './config'
import { isFontLoadingAPIAvailable, loadFonts } from './utils/fonts';

// Modules
const app = new modular({
    modules: modules,
});

function init() {

    // Bind global events
    bindEvents();

    // First resize
    onResize()

    // Set initial viewport height
    document.documentElement.style.setProperty(
        "--vh-initial",
        `${window.innerHeight * 0.01}px`
    )

    globals();

    app.init(app);

    setTimeout(() => {
        $html.classList.add(CSS_CLASS.FIRST_LOADED)
        $html.classList.add(CSS_CLASS.LOADED);
        $html.classList.remove(CSS_CLASS.LOADING);

        setTimeout(() => {
            $html.classList.add(CSS_CLASS.READY);
        }, 100);
    }, 100);

    /**
     * Eagerly load the following fonts.
     */
    if (isFontLoadingAPIAvailable) {
        loadFonts(FONT.EAGER, ENV.IS_DEV).then((eagerFonts) => {
            $html.classList.add(CSS_CLASS.FONTS_LOADED);

            if (ENV.IS_DEV) {
                console.group('Eager fonts loaded!', eagerFonts.length, '/', document.fonts.size);
                console.group('State of eager fonts:')
                eagerFonts.forEach((font) => console.log(font.family, font.style, font.weight, font.status/*, font*/))
                console.groupEnd()
                console.group('State of all fonts:')
                document.fonts.forEach((font) => console.log(font.family, font.style, font.weight, font.status/*, font*/))
                console.groupEnd()
            }
        });
    }
}

////////////////
// Global events
////////////////
function bindEvents() {

    // Resize event
    const resizeEndEvent = new CustomEvent(CUSTOM_EVENT.RESIZE_END)
    window.addEventListener(
        "resize",
        debounce(() => {
            window.dispatchEvent(resizeEndEvent)
        }, 200, false)
    )
    window.addEventListener(
        "resize",
        onResize
    )

    // Orientation change event
    window.addEventListener(
        "orientationchange",
        debounce(() => {
            onOnrientationChange()
        }, 200, false)
    )
}

////////////////
// Callbacks
////////////////
function onOnrientationChange() {
    document.documentElement.style.setProperty(
        "--vh-initial",
        `${window.innerHeight * 0.01}px`
    )
}

function onResize() {
    let vw = $html.offsetWidth * 0.01
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vw", `${vw}px`)
    document.documentElement.style.setProperty("--vh", `${vh}px`)
}

////////////////
// Execute
////////////////
window.addEventListener('load', (event) => {
    init();
});
