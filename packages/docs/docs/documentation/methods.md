---
sidebar_position: 2
---

# Methods

## destroy()

The `destroy()` method allows you to destroy the Locomotive Scroll instance along with its associated events. It is useful when you want to remove Locomotive Scroll functionality from a specific element or completely clean up the instance.

```js
const locomotiveScroll = new LocomotiveScroll();
locomotiveScroll.destroy();
```

## start()

The `start()` method allows you to manually start the scroll. By default, the scroll automatically starts when you create the Locomotive Scroll instance. However, there may be situations where you need to programmatically control when the scroll starts. In such cases, you can utilize the [autoStart](/documentation/options#autostart) option to have more flexibility and decide whether to initiate the scroll automatically or not.

```js
const locomotiveScroll = new LocomotiveScroll({ autoStart: false });

// Starting the locomotive scroll on the next frame
requestAnimationFrame(() => {
    locomotiveScroll.start();
});
```

> :bulb: **Tip**: If you prefer not to start Locomotive Scroll automatically, you can utilize the [autoStart](/documentation/options#autostart) option.

## stop()

The `stop()` method allows you to manually stop the scroll. When you call this method, the scroll motion will come to a halt.

```js
const locomotiveScroll = new LocomotiveScroll();

// Stopping locomotive-scroll on the next frame
requestAnimationFrame(() => {
    locomotiveScroll.stop();
});
```
> :bulb: **Tip**: If you prefer not to start Locomotive Scroll automatically, you can utilize the [autoStart](/documentation/options#autostart) option.

## resize()

The `resize()` method allows you to manually trigger the resize callback of the Locomotive Scroll instance. This is useful when you need to handle resizing events programmatically or when you want to manually update the scroll calculations after a layout change.

> :bulb: **Note**: Locomotive Scroll automatically handles resize events by synchronizing with Lenis's internal ResizeObservers (`onContentResize` and `onWrapperResize`). Manual resizing is rarely needed unless you're making dynamic layout changes that Lenis doesn't detect.

```js
const locomotiveScroll = new LocomotiveScroll();
locomotiveScroll.resize();
```

## removeScrollElements($oldContainer)

The `removeScrollElements($oldContainer)` method allows you to dynamically unobserve scroll elements (`[data-scroll]`) by providing their container. This is particularly useful when you're updating the DOM dynamically, such as through Ajax fetching or other operations that add or remove elements from the page.

-   **Parameters:**
    -   `$oldContainer` (_HTMLElement_): The `NodeElement` that has been removed from the DOM. This container should be the parent element that contains the scroll elements you want to unobserve.

Here's an example of how to use the `removeScrollElements($oldContainer)` method:

```js
const locomotiveScroll = new LocomotiveScroll();
const $oldContainer = document.getElementById('containerToRemove');

// Call the method to remove scroll elements from the old container
locomotiveScroll.removeScrollElements($oldContainer);
```

## addScrollElements($newContainer)

The `addScrollElements($newContainer)` method allows you to dynamically observe scroll elements (`[data-scroll]`) by providing their container. This is particularly useful when you're updating the DOM dynamically, such as through Ajax fetching or other operations that add or remove elements from the page.

-   **Parameters:**
    -   `$newContainer` (_HTMLElement_): The `NodeElement` that has been added from the DOM. This container should be the parent element that contains the scroll elements you want to observe.

Here's an example of how to use the `addScrollElements($newContainer)` method:

```js
const locomotiveScroll = new LocomotiveScroll();
const $newContainer = document.getElementById('containerToAdd');

// Call the method to add scroll elements from the new container
locomotiveScroll.addScrollElements($newContainer);
```

## scrollTo(target, options)

The `scrollTo(target, options)` method allows you to scroll to a specific target on the page.

-   **Parameters:**
    -   `target` (_optional, number / HTMLElement / string_): The target to scroll to. It can be a `number` (scroll position), `HTMLElement` (DOM element), or `string` (CSS selector or keyword: `top`, `left`, `start`, `bottom`, `right`, `end`).
    -   `options` (_optional, ILenisScrollToOptions_): An options object passed as is to [Lenis's `scrollTo`](https://github.com/darkroomengineering/lenis/tree/v1.3.27#methods):
        -   `offset` (_number_, default `0`): Pixels added to the target position. A negative value stops before the target. When the target is an element or a selector, its [`scroll-margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin) and the container's [`scroll-padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding) are taken into account too, and add up with `offset`.
        -   `immediate` (_boolean_, default `false`): Jump to the target without animation.
        -   `lock` (_boolean_, default `false`): Prevent the user from scrolling until the target is reached.
        -   `force` (_boolean_, default `false`): Reach the target even if the instance is stopped.
        -   `lerp` (_number_, defaults to the instance's `lerp`): Linear interpolation intensity, between 0 and 1. Ignored when `duration` or `easing` is set.
        -   `duration` (_number_, defaults to the instance's `duration`): Duration of the scroll animation in seconds. Defaults to `1` when only `easing` is set.
        -   `easing` (_function_, defaults to the instance's `easing`): Easing function used with `duration`. Defaults to `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))` when only `duration` is set.
        -   `onStart` (_function_): Called with the Lenis instance when the animation starts. Not called for an `immediate` scroll.
        -   `onComplete` (_function_): Called with the Lenis instance when the target is reached.
        -   `programmatic` (_boolean_, default `true`): Treat the scroll as initiated from code. With `false`, Lenis handles it like a user scroll: the instance's `lerp`, `duration` and `easing` no longer apply, so without your own `lerp` or `duration` it jumps to the target in one frame.
        -   `userData` (`Record<string, unknown>`): Data attached to this scroll, readable as `lenis.userData` in [`scrollCallback`](options.md#scrollcallback) until the scroll ends.

Under reduced motion (Lenis's [`respectReducedMotion`](options.md#lenisoptions), `true` by default), a programmatic `scrollTo` jumps instantly, as with `immediate: true`.

By calling `scrollTo(target, options)`, Locomotive Scroll will smoothly scroll to the specified target on the page, taking into account the provided options.

```js
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();
const $target = document.getElementById('jsTarget');

function scrollTo(params) {
    const { target, options } = params;
    locomotiveScroll.scrollTo(target, options);
}

scrollTo({ target: $target, options: {} });
```
