# Instance Options

## lenisOptions

-   **Type:** `object`

_(Optional)_ The `lenisOptions` parameter is an optional object that allows you to configure specific settings based on some of [Lenis's instance settings](https://github.com/darkroomengineering/lenis#instance-settings):

-   `wrapper` (**HTMLElement|Window**): Specifies the element that will be used as the scroll container.
-   `content` (**HTMLElement**): Specifies the element that contains the content that will be scrolled, usually `wrapper`'s direct child.
-   `lerp` (**number**): Specifies the intensity of linear interpolation (lerp) between frames, ranging from 0 to 1.
-   `duration` (**number**): Specifies the duration of the animation.
-   `orientation` (**string**): Specifies whether the scrolling is `vertical` or `horizontal`. It adds a `data-scroll-orientation` attribute on the `<html>` tag.
-   `gestureOrientation` (**boolean**): Specifies the orientation of the gestures. It can be set to `vertical`, `horizontal`, or `both`.
-   `smoothWheel` (**boolean**): Specifies whether to enable smooth scrolling for mouse wheel events.
-   `smoothTouch` (**boolean**): Specifies whether to enable smooth scrolling for touch events. Note that it is disabled by default because it is impossible to mimic the native smoothness of touch devices.
-   `wheelMultiplier` (**number**): Specifies the multiplier to use for mouse wheel events.
-   `touchMultiplier` (**number**): Specifies the multiplier to use for touch events.
-   `normalizeWheel` (**boolean**): Specifies whether to normalize wheel inputs across different browsers.
-   `easing` (**function**): Specifies the rate of change of a specific value. Our default easing is custom, but you can choose one from [Easings.net](https://easings.net/).

Here's an example of using `lenisOptions` with its default values:

```js
const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    },
});
```

## triggerRootMargin

-   **Type:** `string`
-   **Default:** `'-1px -1px -1px -1px'`

_(Optional)_ Specifies the root margin for scroll elements that need to be triggered by the [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin).

```js
// Default Value
const locomotiveScroll = new LocomotiveScroll({
    triggerRootMargin: '-1px -1px -1px -1px',
});
```

## rafRootMargin

-   **Type:** `string`
-   **Default:** `'100% 100% 100% 100%'`

_(Optional)_ Specifies the root margin for scroll elements that need to be triggered by the [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) based on a **RequestAnimationFrame**. This option is relevant for elements with any of the following attributes: `data-scroll-offset`, `data-scroll-position`, `data-scroll-module-progress`, `data-scroll-css-progress`, `data-scroll-speed`.

```js
// Default Value
const locomotiveScroll = new LocomotiveScroll({
    rafRootMargin: '100% 100% 100% 100%',
});
```

## autoResize

-   Type: `boolean`
-   Default: `true`

_(Optional)_ Enable or disable the resize logic of the library. By default, the library uses a [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) to trigger its resize logic.

```js
// Default Value
const locomotiveScroll = new LocomotiveScroll({
    autoResize: true,
});
```

You can also use your own resize logic to override the default resize behavior used by Locomotive Scroll. Here's an example:

```js
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll({
    autoResize: false,
});

window.addEventListener('resize', locomotiveScroll.resize.bind(locomotiveScroll));
```

## autoStart

-   Type: `boolean`
-   Default: `true`

_(Optional)_  Enable or disable the RAF (Request Animation Frame) starting. By default, the RAF starts automatically when Locomotive Scroll is initialized.

If you want to manually control when the RAF starts, you can set `autoStart` to `false`.

```js
// Default Value
const locomotiveScroll = new LocomotiveScroll({
    autoStart: false,
});

// Manually start the RAF
setTimeout(() => {
    locomotiveScroll.start();
}, 2000)
```

## scrollCallback

-   **Type:** `function`

_(Optional)_ Specifies a callback function that can return an object with the following properties: `{ scroll, limit, velocity, direction, progress }`. This functionality is made possible by Lenis's scroll callback feature.

```js
import LocomotiveScroll from 'locomotive-scroll';

function onScroll({ scroll, limit, velocity, direction, progress }) {
    console.log(scroll, limit, velocity, direction, progress);
}

const locomotiveScroll = new LocomotiveScroll({
    scrollCallback: onScroll,
});
```

## initCustomTicker

-   **Type:** `function`

_(Optional)_ Specifies a callback function to initialize an external ticker instead of Locomotive Scroll's default request animation frame. The `destroyCustomTicker` function also needs to be declared.

You can use an external ticker by following this example, which overrides the default request animation frame used by Locomotive Scroll:

```js
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap/all';

const locomotiveScroll = new LocomotiveScroll({
    initCustomTicker: (render) => {
        gsap.ticker.add(render);
    },
    /* destroyCustomTicker: (render) => {
        gsap.ticker.remove(render);
    }, */
});
```

## destroyCustomTicker

-   **Type:** `function`

_(Optional)_ Specifies a callback function to destroy an external ticker instead of Locomotive Scroll's default request animation frame. The `initCustomTicker` function also needs to be declared.

You can use an external ticker by following this example, which overrides the default request animation frame used by Locomotive Scroll:

```js
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap/all';

const locomotiveScroll = new LocomotiveScroll({
    /* initCustomTicker: (render) => {
        gsap.ticker.add(render);
    }, */
    destroyCustomTicker: (render) => {
        gsap.ticker.remove(render);
    },
});
```
