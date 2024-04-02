# Limitations

> We encourage the open-source community to develop and share their own solutions to overcome limitations in Locomotive Scroll.

## Lenis

Lenis already have its own [considerations](https://github.com/darkroomengineering/lenis#considerations). We recommend reviewing them before using Locomotive Scroll to ensure a smooth integration and avoid any potential conflicts. 

There are certain Lenis `options` that are not supported in the Locomotive Scroll layer :

- `infinite` Due to the way we handle the Intersection Observer, the infinite feature is currently not supported. However, we may consider supporting this feature in the future.

## SSR

Due to Locomotive Scroll's reliance on the window reference and Intersection Observer, it may not be fully compatible with server-side rendering setups. SSR typically involves rendering the web page on the server before sending it to the client, and certain client-side dependencies may not function properly in this context. Therefore, when using Locomotive Scroll with SSR, it's important to carefully consider and test its compatibility to ensure optimal functionality.

## Third Party Injected Popups

Some third-party JavaScript used on websites may inject popups or modals that require scrolling. In certain cases, conflicts can arise when the default Lenis `wrapper` (typically the `window`) captures the scroll event. Normally, we can [resolve this](https://github.com/darkroomengineering/lenis#use-the-data-lenis-prevent-attribute-on-nested-scroll-elements-in-addition-we-advise-you-to-add-overscroll-behavior-contain-on-this-element) by adding the `data-lenis-prevent` data attribute to the DOM element that requires inner scrolling, such as a popup. However, this solution cannot be used when the DOM is injected dynamically. 

To address this issue, we have found a workaround. Here's how it works:

1. Listen to the `wheel` event on the Lenis `content` element.
2. Use the [`Event.composedPath()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath) method to obtain the event's path array.
3. Check if the modal element is present within the array returned by `composedPath()`.
4. If the modal is detected, stop the event propagation to prevent conflicts.

It's worth noting that for this solution to work effectively, the modal must have a selectable selector that can be targeted in the event handling process.

HMTL :

```html
...

<body>
    <main>
        <div>
            <h1>Hello 👋</h1>
        </div>
    </main>

    <!-- Injected popup DOM -->
    <div id="modalSelector" style="position: fixed; height: 200px; width: 200px; overflow: scroll;"></div>
</body>
...
```

Javascript :

```js
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

locomotiveScroll.lenisInstance.options.content.addEventListener('wheel', (event) => {
    const paths = event.composedPath();

    paths.find((el) => {
        if(el instanceof HTMLElement && el?.getAttribute('id') == ('modalSelector')) {
            event.stopPropagation();

            return;
        }
    })
});
```
