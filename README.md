<p align="center">
    <a href="https://github.com/locomotivemtl/locomotive-boilerplate">
        <img src="https://user-images.githubusercontent.com/4596862/58807621-67aeec00-85e6-11e9-8e3a-3fe4123ee76c.png" height="140">
    </a>
</p>
<h1 align="center">Locomotive Scroll</h1>
<p align="center">Detection of elements in viewport & smooth scrolling with parallax effects.</p>

## Installation
```sh
npm install locomotivescroll
```

## Usage
```js
import locomotiveScroll from 'locomotivescroll';

const scroll = new locomotiveScroll();
```
```html
<h1 data-scroll>Hello</h1>
<p data-scroll>Text</p>
```

#### With smooth scrolling
```js
import locomotiveScroll from 'locomotivescroll';

const scroll = new locomotiveScroll({
    el: document.querySelector('#js-scroll'),
    smooth: true
});
```
```html
<h1 data-scroll data-scroll-speed="1">Hello</h1>
<p data-scroll data-scroll-speed="2">Text</p>
```

#### With methods
```js
import locomotiveScroll from 'locomotivescroll';

const scroll = new locomotiveScroll();
const target = document.querySelector('#js-target');

scroll.scrollTo(target);
```

#### With events
```js
import locomotiveScroll from 'locomotivescroll';

const scroll = new locomotiveScroll();

scroll.on('call', (func) => {
    // Using modularJS
    this.call(...func);
    // Using jQuery events
    $(document).trigger(func);
    // Or do it your own way 😎
});
```
```html
<!-- Using modularJS -->
<div data-scroll data-scroll-call="function, module">Trigger</div>
<!-- Using jQuery events -->
<div data-scroll data-scroll-call="EVENT_NAME">Trigger</div>
<!-- Or do it your own way 😎 -->
<div data-scroll data-scroll-call="{y,o,l,o}">Trigger</div>
```

## Instance options
| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `el` | `object` | `document` | Scroll container element. |
| `name` | `string` | `'scroll'` | Data attribute prefix (`data-scroll-xxxx`). |
| `offset` | `array` | `0` | In-view trigger offset. |
| `repeat` | `boolean` | `false` | Repeat in-view detection. |
| `smooth` | `boolean` | `false` | Smooth scrolling. |
| `smoothMobile` | `boolean` | `false` | Smooth scrolling on iOS and Android devices. |
| `direction` | `string` | `vertical` | Scroll direction. |
| `inertia` | `number` | `1` | Lerp intensity. |
| `getDirection` | `boolean` | `false` | Add direction to scroll event. |
| `getSpeed` | `boolean` | `false` | Add speed to scroll event. |
| `class` | `string` | `'is-inview'` | Element in-view class. |
| `initClass` | `string` | `has-scroll-init` | Initialize class. |
| `scrollingClass` | `string` | `has-scroll-scrolling` | Is scrolling class. |
| `draggingClass` | `string` | `has-scroll-dragging` | Is dragging class. |
| `smoothClass` | `string` | `has-scroll-smooth` | Has smooth scrolling class. |
| `scrollbarClass` | `string` | `c-scrollbar` | Scrollbar element class. |

## Element attributes
| Attribute | Values | Description |
| --------- | ------ | ----------- |
| `data-scroll` |  | Detect if in-view. |
| `data-scroll-section` |  | Defines a scrollable section. Splitting your page into sections may improve performance. |
| `data-scroll-class` | `string` | Element in-view class. |
| `data-scroll-offset` | `string` | Element in-view trigger offset (ex.: `"10"`, `"100,50%"`, `"25%, 15%"`). |
| `data-scroll-repeat` | `true`, `false` | Element in-view detection repeat. |
| `data-scroll-call` | `string` | Element in-view trigger call event. |
| `data-scroll-speed` | `number` | Element parallax speed. A negative value will reverse the direction. |
| `data-scroll-target` | `string` | Target element's in-view position. |
| `data-scroll-position` | `top`, `bottom` | Window position of in-view trigger. |
| `data-scroll-direction` | `vertical`, `horizontal` | Element's parallax direction. |
| `data-scroll-delay` | `number` | Element's parallax lerp delay. |
| `data-scroll-sticky` |  | Sticky element. Starts and stops at `data-scroll-target` position. |

## Instance methods
| Method | Description | Arguments |
| ------ | ----------- | --------- |
| `init()` | Reinitializes the scroll. | |
| `on(eventName, function)` | Listen [instance events] ⬇. | |
| `update()` | Updates all element positions.  | |
| `destroy()` | Destroys the scroll events. | |
| `start()` | Restarts the scroll events. | |
| `stop()` | Stops the scroll events. | |
| `scrollTo(target, offset)` | Scroll to an element. | `target`: dom `object`, selector `string`, `top` or `bottom`  `offset`: `number` |

## Instance events
| Event | Arguments | Description |
| ----- | --------- | ----------- |
| `scroll` | `obj` | Returns scroll instance (position, limit, speed, direction). |
| `call` | `func` | Trigger if in-view. Returns your `string` or `array` if contains `,`. |

## Dependencies
| Name | Description |
| ---- | ----------- |
| [Virtual Scroll] | Custom scroll event with inertia/momentum. |
| [modularScroll] | Elements in viewport detection. Forked from it, not a dependency. |

[instance events]: #instance-events
[Virtual Scroll]: https://github.com/ayamflow/virtual-scroll
[modularScroll]:  https://github.com/modularorg/modularscroll
