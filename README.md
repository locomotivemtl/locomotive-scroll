<p align="center">
    <a href="https://github.com/locomotivemtl/locomotive-boilerplate">
        <img src="https://user-images.githubusercontent.com/4596862/58807621-67aeec00-85e6-11e9-8e3a-3fe4123ee76c.png" height="140">
    </a>
</p>
<h1 align="center">Locomotive Scroll</h1>
<p align="center">Elements in viewport detection & smooth scrolling with parallax.</p>

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
    // Or do it your way 😎
});
```
```html
<!-- Using modularJS -->
<div data-scroll data-scroll-call="function, module">Trigger</div>
<!-- Using jQuery events -->
<div data-scroll data-scroll-call="EVENT_NAME">Trigger</div>
<!-- Or do it your way 😎 -->
<div data-scroll data-scroll-call="{y,o,l,o}">Trigger</div>
```

## Options
| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `el` | `object` | `document` | Scroll container element. |
| `name` | `string` | `'scroll'` | Data attributes name. |
| `offset` | `number` | `0` | In-view trigger offset. |
| `repeat` | `boolean` | `false` | Repeat in-view detection. |
| `smooth` | `boolean` | `false` | Smooth scrolling |
| `smoothMobile` | `boolean` | `false` | Smooth scrolling on iOS and Android devices. |
| `direction` | `string` | `vertical` | Scroll direction |
| `inertia` | `number` | `1` | Lerp intensity |
| `class` | `string` | `'is-inview'` | Elements in-view class. |
| `scrollbarClass` | `string` | `c-scrollbar` | Scrollbar element class. |
| `scrollingClass` | `string` | `is-scrolling` | Is scrolling class. |
| `draggingClass` | `string` | `is-dragging` | Is dragging class. |
| `smoothClass` | `string` | `has-smoothscroll` | Has smooth scrolling class. |

## Attributes
| Attribute | Values | Description |
| --------- | ------ | ----------- |
| `data-scroll` |  | Detect if in-view. |
| `data-scroll-section` |  | Sections to scroll. Spliting your page in sections may improve performance. |
| `data-scroll-class` | `string` | Element in-view class.  |
| `data-scroll-offset` | `number` | Element in-view trigger offset. |
| `data-scroll-repeat` | `true`, `false` | Element in-view detection repeat. |
| `data-scroll-call` | `string` | Element in-view trigger call event. |
| `data-scroll-speed` | `number` | Element parallax speed. Negative value for inverse way. |
| `data-scroll-target` | `string` | Target element in-view position. |
| `data-scroll-position` | `top`, `bottom` | In-view trigger window position |
| `data-scroll-direction` | `vertical`, `horizontal` | Element parallax direction. |
| `data-scroll-delay` | `number` | Element parallax lerp delay. |
| `data-scroll-sticky` |  | Sticky element. Start and stops at `data-scroll-target` position. |

## Methods
| Method | Description | Arguments |
| ------ | ----------- | --------- |
| `init()` | Reinit the scroll. | |
| `update()` | Update elements position.  | |
| `destroy()` | Destroy the scroll events. | |
| `start()` | Restart the scroll events. | |
| `stop()` | Stop the scroll events. | |
| `scrollTo(target, offset)` | Scroll to element. | `target`: dom `object`, selector `string`, `top` or `bottom`  `offset`: `number` |

## Events
| Event | Arguments | Description |
| ----- | --------- | ----------- |
| `scroll` | `obj` | Returns scroll position. |
| `call` | `func` | Trigger if in-view. Returns your `string` or `array` if contains `,`. |

## Dependencies
| Name | Description |
| ---- | ----------- |
| [Virtual Scroll] | Custom scroll event. |
| [modularScroll] | Elements in viewport detection. Forked from it, not a dependency. |

[Virtual Scroll]: https://github.com/ayamflow/virtual-scroll
[modularScroll]:  https://github.com/modularorg/modularscroll
