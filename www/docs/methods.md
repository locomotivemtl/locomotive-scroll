# Methods Options

## destroy()

The `destroy()` method allows you to destroy the Locomotive Scroll instance along with its associated events. It is useful when you want to remove Locomotive Scroll functionality from a specific element or completely clean up the instance.

```js
const locomotiveScroll = new LocomotiveScroll();
locomotiveScroll.destroy();
```

## start()

The `start()` method allows you to manually start the scroll. By default, the scroll automatically starts when you create the Locomotive Scroll instance. However, there may be situations where you need to programmatically control when the scroll starts. In such cases, you can utilize the [autoStart](/options?id=autostart) option to have more flexibility and decide whether to initiate the scroll automatically or not.

```js
const locomotiveScroll = new LocomotiveScroll({ autoStart: false });

// Starting the locomotive scroll on the next frame
requestAnimationFrame(() => {
    locomotiveScroll.start();
});
```

> :bulb: **Tip**: If you prefer not to start Locomotive Scroll automatically, you can utilize the [autoStart](/options?id=autostart) option.

## stop()

The `stop()` method allows you to manually stop the scroll. When you call this method, the scroll motion will come to a halt.

```js
const locomotiveScroll = new LocomotiveScroll();

// Stopping locomotive-scroll on the next frame
requestAnimationFrame(() => {
    locomotiveScroll.stop();
});
```
> :bulb: **Tip**: If you prefer not to start Locomotive Scroll automatically, you can utilize the [autoStart](/options?id=autostart) option.

## resize()

The `resize()` method allows you to manually trigger the resize callback of the Locomotive Scroll instance. This is useful when you need to handle resizing events programmatically or when you want to manually update the scroll calculations after a layout change.

> :warning: **Note**: Locomotive Scroll automatically handles resize events, eliminating the need for manual resizing. For more information, please refer to the [Autoresize](/options?id=autoresize) section in the documentation.

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
    -   `$newContainer` (_HTMLElement_): The `NodeElement` that has been addeed from the DOM. This container should be the parent element that contains the scroll elements you want to observe.

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
    -   `options` (_optional, ILenisScrollToOptions_): An options object that configures the scroll behavior. The available options are based on [Lenis's scroll-to options](https://github.com/darkroomengineering/lenis#instance-methods):
        -   `offset` (_number_): A number equivalent to `scroll-padding-top`. Specifies the offset from the top of the target element.
        -   `lerp` (_number_): Animation lerp intensity.
        -   `duration` (_number_): The duration of the scroll animation in seconds.
        -   `immediate` (_boolean_): If set to `true`, it ignores the duration and easing and performs an immediate scroll.
        -   `lock` (_boolean_): Whether or not to prevent the user from scrolling until the target is reached.
        -   `force` (_boolean_): Reach the target even if the instance is stopped.
        -   `onComplete` (_function_): A callback function called when the target is reached.
        -   `easing` (_function_): A smooth scroll easing function.

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
