---
sidebar_position: 1
---

# Limitations

> We encourage the open-source community to develop and share their own solutions to overcome limitations in Locomotive Scroll.

## Lenis

Lenis already have its own [considerations](https://github.com/darkroomengineering/lenis#considerations). We recommend reviewing them before using Locomotive Scroll to ensure a smooth integration and avoid any potential conflicts.

## SSR

Due to Locomotive Scroll's reliance on the window reference and Intersection Observer, it may not be fully compatible with server-side rendering setups. SSR typically involves rendering the web page on the server before sending it to the client, and certain client-side dependencies may not function properly in this context. Therefore, when using Locomotive Scroll with SSR, it's important to carefully consider and test its compatibility to ensure optimal functionality.

## Third Party Injected Popups

Some third-party JavaScript used on websites may inject popups or modals that require scrolling. In certain cases, conflicts can arise when the default Lenis `wrapper` (typically the `window`) captures the scroll event. Normally, we can [resolve this](https://github.com/darkroomengineering/lenis#use-the-data-lenis-prevent-attribute-on-nested-scroll-elements-in-addition-we-advise-you-to-add-overscroll-behavior-contain-on-this-element) by adding the `data-lenis-prevent` data attribute to the DOM element that requires inner scrolling, such as a popup. However, this solution cannot be used when the DOM is injected dynamically.

Since Lenis v1.1.0, you can use the `prevent` option to manually prevent scroll smoothing based on elements traversed by events. If the function returns `true`, it will prevent the scroll from being smoothed.

HTML:

```html
<main class="main">
    <h1 class="title">Third Party Injected Popups</h1>

    <!-- Injected popup DOM -->
    <div id="modalSelector">
        <h2>Scroll inside the modal</h2>
        <!-- Modal content -->
    </div>
</main>
```

JavaScript:

```js
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        prevent: (node) => node.getAttribute('id') === 'modalSelector',
    },
});
```

You can check out the [example](https://codesandbox.io/p/sandbox/third-party-injected-popups-xch5tq) for more details.