---
sidebar_position: 1
---

# Options

## lenisOptions

-   **Type:** `object`

_(Optional)_ The `lenisOptions` parameter is passed as is to Lenis 1.3.27. Locomotive Scroll does not override any of [Lenis's settings](https://github.com/darkroomengineering/lenis/tree/v1.3.27#settings):

-   `wrapper` (**HTMLElement|Window**, default `window`): The element used as the scroll container. Set it to a custom element for contained scrolling (see [Custom Scroll Container](#custom-scroll-container)).
-   `content` (**HTMLElement**, default `document.documentElement`): The element that contains the scrolled content, usually `wrapper`'s direct child.
-   `eventsTarget` (**HTMLElement|Window**, default `wrapper`): The element that listens to `wheel` and `touch` events.
-   `smoothWheel` (**boolean**, default `true`): Smooth the scroll initiated by `wheel` events.
-   `syncTouch` (**boolean**, default `false`): Mimic touch device scroll while allowing scroll sync. It can feel less natural than native touch scrolling.
-   `syncTouchLerp` (**number**, default `0.075`): Linear interpolation intensity used with `syncTouch`, between 0 and 1.
-   `touchInertiaExponent` (**number**, default `1.7`): Strength of the `syncTouch` inertia.
-   `lerp` (**number**, default `0.1`): Linear interpolation intensity between frames, between 0 and 1. Ignored when `duration` or `easing` is set.
-   `duration` (**number**, no default): Scroll animation duration in seconds. Setting it switches from `lerp` to `easing`. Defaults to `1` when only `easing` is set.
-   `easing` (**function**, no default): Easing function used with `duration`. Defaults to `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))` when only `duration` is set. You can pick one from [Easings.net](https://easings.net/).
-   `infinite` (**boolean**, default `false`): Enable infinite scrolling.
-   `orientation` (**string**, default `'vertical'`): Scroll orientation, `vertical` or `horizontal`. Locomotive Scroll adds a matching `data-scroll-orientation` attribute on the `<html>` tag.
-   `gestureOrientation` (**string**, default `'vertical'`, `'both'` when `orientation` is `horizontal`): Orientation of the gestures, `vertical`, `horizontal` or `both`.
-   `wheelMultiplier` (**number**, default `1`): Multiplier applied to mouse wheel events.
-   `touchMultiplier` (**number**, default `1`): Multiplier applied to touch events.
-   `autoResize` (**boolean**, default `true`): Resize the instance automatically.
-   `prevent` (**function**): `(node) => boolean`, return `true` to stop scroll smoothing for the events that traverse `node`.
-   `virtualScroll` (**function**): `(data) => boolean`, modify the events before they are consumed, or return `false` to ignore them.
-   `overscroll` (**boolean**, default `true`): Enable overscroll on a nested instance, similar to CSS [`overscroll-behavior`](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior).
-   `anchors` (**boolean|object**, default `false`): Handle anchor links. Pass an object of [`scrollTo` options](methods.md#scrolltotarget-options) to configure the scroll.
-   `autoToggle` (**boolean**, default `false`): Start and stop automatically based on the wrapper's `overflow` property.
-   `allowNestedScroll` (**boolean**, default `false`): Allow nested scroll.
-   `naiveDimensions` (**boolean**, default `false`): Use a naive dimensions calculation. It has a performance impact. Replaces the deprecated `__experimental__naiveDimensions`.
-   `stopInertiaOnNavigate` (**boolean**, default `false`): Stop the inertia when an internal link is clicked.
-   `respectReducedMotion` (**boolean**, default `true`): Honor `prefers-reduced-motion: reduce`. Smoothing is turned off, so scroll follows the input 1:1, and programmatic scrolls, including `scrollTo`, jump instantly. Locomotive Scroll also turns off the `data-scroll-speed` parallax and `data-scroll-delay`, including on elements with `data-scroll-enable-touch-speed`. Set it to `false` to keep smoothing and parallax under reduced motion.
-   `autoRaf` (**boolean**, default `false`): Run Lenis's own `requestAnimationFrame` loop. Locomotive Scroll already calls `lenis.raf()` from its loop, or from your [custom ticker](#initcustomticker), so you don't need it.

Here's an example of using `lenisOptions` with its main default values:

```js
const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        respectReducedMotion: true,
    },
});
```

### Custom Scroll Container

You can use a custom scroll container instead of the default full-page scroll:

```js
const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        wrapper: document.querySelector('.scroll-container'),
        content: document.querySelector('.scroll-content'),
    },
});
```

```html
<div class="scroll-container" style="height: 100vh; overflow: hidden;">
    <div class="scroll-content">
        <div data-scroll data-scroll-speed="0.5">Parallax element</div>
    </div>
</div>
```

**Requirements:**
- The `wrapper` must have a fixed height and `overflow: hidden` (or `auto`/`scroll`)
- The `content` must be a direct child of the wrapper
- Intersection Observers will automatically use the wrapper as their root
- Resize detection is automatically synchronized with Lenis's ResizeObservers

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

_(Optional)_ Specifies the root margin for scroll elements that need to be triggered by the [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) based on a **RequestAnimationFrame**. This option is relevant for elements with any of the following attributes: `data-scroll-offset`, `data-scroll-position`, `data-scroll-css-progress`, `data-scroll-event-progress`, `data-scroll-speed`.

```js
// Default Value
const locomotiveScroll = new LocomotiveScroll({
    rafRootMargin: '100% 100% 100% 100%',
});
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

## enableTouchSpeed

-   **Type:** `boolean`
-   **Default:** `false`

_(Optional)_ Enable the `data-scroll-speed` parallax and `data-scroll-delay` on touch devices for every element, as [`data-scroll-enable-touch-speed`](attributes.md#data-scroll-enable-touch-speed) does for one element. Reduced motion still turns them off (see [`respectReducedMotion`](#lenisoptions)).

```js
const locomotiveScroll = new LocomotiveScroll({
    enableTouchSpeed: true,
});
```

**Note:** Parallax on touch devices may impact scrolling smoothness, especially on lower-end devices. Test it on your target devices.

## legacyTriggers

-   **Type:** `boolean`
-   **Default:** `false`

:::warning Deprecated
`legacyTriggers` is a transition option. It will be removed in 6.0.
:::

_(Optional)_ Since 5.1, on elements with `data-scroll-speed`, `is-inview`, `--progress`, progress events and `data-scroll-call` follow where the element is displayed, so the element enters and leaves when it actually appears and disappears. Set `legacyTriggers` to `true` to compute them on the element's natural position, as in 5.0. The parallax itself is the same either way.

```js
const locomotiveScroll = new LocomotiveScroll({
    legacyTriggers: true,
});
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
    destroyCustomTicker: (render) => {
        gsap.ticker.remove(render);
    },
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
    initCustomTicker: (render) => {
        gsap.ticker.add(render);
    },
    destroyCustomTicker: (render) => {
        gsap.ticker.remove(render);
    },
});
```
