[![](https://img.shields.io/npm/v/locomotive-scroll)](https://www.npmjs.com/package/locomotive-scroll)
[![](https://img.shields.io/npm/dm/locomotive-scroll)](https://www.npmjs.com/package/locomotive-scroll)

<p align="center">        
    <a href="https://github.com/locomotivemtl/locomotive-scroll">
        <img src="https://user-images.githubusercontent.com/4596862/58807621-67aeec00-85e6-11e9-8e3a-3fe4123ee76c.png" height="140">
    </a>
</p>
<h1 align="center">Locomotive Scroll</h1>
<p align="center">Detection of elements in viewport & smooth scrolling with parallax effects.</p>

## Installation

```sh
npm install locomotive-scroll
```

## Usage

### Basic
With simple detection.

#### HTML
```html
<h1 data-scroll>Hey</h1>
<p data-scroll>👋</p>
```

#### CSS
Add the base styles to your CSS file.

[`locomotive-scroll.css`](https://github.com/locomotivemtl/locomotive-scroll/blob/master/dist/locomotive-scroll.css)

#### JS

##### With a bundler
```js
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();
```

##### Or without
```js
<script src="locomotive-scroll.min.js"></script>
<script>
    (function () {
        var scroll = new LocomotiveScroll();
    })();
</script>
```
_Get the [JS file](https://github.com/locomotivemtl/locomotive-scroll/blob/master/dist/locomotive-scroll.min.js)._

### Smooth
With smooth scrolling and parallax.

```html
<div data-scroll-container>
    <div data-scroll-section>
        <h1 data-scroll>Hey</h1>
        <p data-scroll>👋</p>
    </div>
    <div data-scroll-section>
        <h2 data-scroll data-scroll-speed="1">What's up?</h2>
        <p data-scroll data-scroll-speed="2">😬</p>
    </div>
</div>
```

```js
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
```

_Note: scroll-sections are optional but recommended to improve performance, particularly in long pages._

### Advanced
Make it do what you want.

#### With methods
```html
<section id="js-target">Come here please.</section>
```

```js
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();
const target = document.querySelector('#js-target');

scroll.scrollTo(target);
```

#### With events

```html
<!-- Using modularJS -->
<div data-scroll data-scroll-call="function, module">Trigger</div>
<!-- Using jQuery events -->
<div data-scroll data-scroll-call="EVENT_NAME">Trigger</div>
<!-- Or do it your own way 😎 -->
<div data-scroll data-scroll-call="{y,o,l,o}">Trigger</div>
```

```js
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();

scroll.on('call', func => {
    // Using modularJS
    this.call(...func);
    // Using jQuery events
    $(document).trigger(func);
    // Or do it your own way 😎
});
```

## Instance options

| Option              | Type      | Default                | Description                                                                           |
| ------------------- | --------- | ---------------------- | ------------------------------------------------------------------------------------- |
| `el`                | `object`  | `document`             | Scroll container element.                                                             |
| `name`              | `string`  | `'scroll'`             | Data attribute prefix (`data-scroll-xxxx`).                                           |
| `offset`            | `array(2)`| `[0,0]`                | Global in-view trigger offset : `[bottom,top]`<br>Use a string with `%` to use a percentage of the viewport height.<br>Use a numeric value for absolute pixels unit.<br>E.g. `["30%",0]`, `[100,0]`, `["30%", 100]`  |
| `repeat`            | `boolean` | `false`                | Repeat in-view detection.                                                             |
| `smooth`            | `boolean` | `false`                | Smooth scrolling.                                                                     |
| `smoothMobile`      | `boolean` | `false`                | Smooth scrolling on iOS and Android devices.                                          |
| `direction`         | `string`  | `vertical`             | Scroll direction.                                                                     |
| ~~`inertia`~~       | ~~`number`~~  | ~~`1`~~            | ⚠️ **Deprecated**, use option `lerp` instead                                          |
| `lerp`              | `number`  | `0.1`                  | Linear interpolation (lerp) intensity. Float between `0` and `1`.<br>This defines the "smoothness" intensity. The closer to `0`, the smoother. |
| `getDirection`      | `boolean` | `false`                | Add direction to scroll event.                                                        |
| `getSpeed`          | `boolean` | `false`                | Add speed to scroll event.                                                            |
| `class`             | `string`  | `is-inview`            | Element in-view class.                                                                |
| `initClass`         | `string`  | `has-scroll-init`      | Initialize class.                                                                     |
| `scrollingClass`    | `string`  | `has-scroll-scrolling` | Is scrolling class.                                                                   |
| `draggingClass`     | `string`  | `has-scroll-dragging`  | Is dragging class.                                                                    |
| `smoothClass`       | `string`  | `has-scroll-smooth`    | Has smooth scrolling class.                                                           |
| `scrollbarContainer`| `object`  | `false`                | Specifies the container element for the scrollbar to be appended in. If false, scrollbar will be appended to the body. (smooth-only) | 
| `scrollbarClass`    | `string`  | `c-scrollbar`          | Scrollbar element class.                                                              |
| `multiplier`        | `number`  | `1`                    | Factor applied to the scroll delta, allowing to boost/reduce scrolling speed (regardless of the platform). |
| `firefoxMultiplier` | `number`  | `50`                   | Boost scrolling speed of Firefox on Windows.                                          |
| `touchMultiplier`   | `number`  | `2`                    | Mutiply touch action to scroll faster than finger movement.                           |
| `scrollFromAnywhere`| `boolean` | `false`                | (_smooth only_)<br>By default locomotive-scroll listens for scroll events only on the scroll container (`el` option). With this option set to true, it listens on the whole document instead. |

## Element attributes

| Attribute               | Values                   | Description                                                                              |
| ----------------------- | ------------------------ | ---------------------------------------------------------------------------------------- |
| `data-scroll`           |                          | Detect if in-view.                                                                       |
| `data-scroll-container` |                          | Defines the scroll container. Required for [basic styling](https://github.com/locomotivemtl/locomotive-scroll/blob/master/dist/locomotive-scroll.css).                                                                                      |
| `data-scroll-section`   |                          | Defines a scrollable section. Splitting your page into sections may improve performance. |
| `data-scroll-class`     | `string`                 | Element in-view class.                                                                   |
| `data-scroll-offset`    | `string`                 | Element in-view trigger offset : `bottom,top`<br>First value is `bottom` offset, second (optional) is `top` offset.<br> Percent is relative to viewport height, otherwise it's absolute pixels.<br>E.g. `"10"`, `"100,50%"`, `"25%, 15%"`  |
| `data-scroll-repeat`    | `true`, `false`          | Element in-view detection repeat.                                                        |
| `data-scroll-call`      | `string`                 | Element in-view trigger call event.                                                      |
| `data-scroll-speed`     | `number`                 | Element parallax speed. A negative value will reverse the direction.                     |
| `data-scroll-target`    | `string`                 | Target element's in-view position.                                                       |
| `data-scroll-position`  | `top`, `bottom`          | Window position of in-view trigger.                                                      |
| `data-scroll-direction` | `vertical`, `horizontal` | Element's parallax direction.                                                            |
| `data-scroll-delay`     | `number`                 | Element's parallax lerp delay.                                                           |
| `data-scroll-sticky`    |                          | Sticky element. Starts and stops at `data-scroll-target` position.                       |

## Instance methods

| Method                     | Description                    | Arguments                                                                       |
| -------------------------- | ------------------------------ | ------------------------------------------------------------------------------- |
| `init()`                   | Reinitializes the scroll.      |                                                                                 |
| `on(eventName, function)`  | Listen [instance events] ⬇.    |                                                                                 |
| `update()`                 | Updates all element positions. |                                                                                 |
| `destroy()`                | Destroys the scroll events.    |                                                                                 |
| `start()`                  | Restarts the scroll events.    |                                                                                 |
| `stop()`                   | Stops the scroll events.       |                                                                                 |
| `scrollTo(target, offset, duration, easing, disableLerp, callback)` | Scroll to an element.          | <div>`target`: Defines where you want to scroll. Available values types are :<ul><li>`node` : a dom element</li><li>`string` : you can type your own selector, or use values `"top"` and `"bottom"` to reach scroll boundaries</li><li>`int` : An absolute scroll coordinate in pixels</li></ul></div><div>`offset` (optional) : An `integer` that defines an offset from your target. E.g. `-100` if you want to scroll 100 pixels above your target</div><br><div>`duration` (optional, **smooth only**) : An `integer` defining the duration of the scroll animation in milliseconds. Defaults to `1000`</div><br><div>`easing` (optional, **smooth only**) : An `array` of 4 floats between 0 and 1 defining the bezier curve for the animation's easing.<br>Defaults to `[0.25, 0.00, 0.35, 1.00]`<br>See [http://greweb.me/bezier-easing-editor/example/](http://greweb.me/bezier-easing-editor/example/)<br>*Keep in mind this will also be affected by the lerp unless you set `disableLerp` to `true`*.</div><br><div>`disableLerp` (optional, **smooth only**) : Lerp effect won't be applied if set to `true`</div><br><div>`callback` (optional) : `function` called when scrollTo completes (note that it won't wait for lerp to stabilize)</div> |

## Instance events

| Event    | Arguments | Description                                                           |
| -------- | --------- | --------------------------------------------------------------------- |
| `scroll` | `obj`     | Returns scroll instance (position, limit, speed, direction).          |
| `call`   | `func`    | Trigger if in-view. Returns your `string` or `array` if contains `,`. |

## Dependencies

| Name             | Description                                                        |
| ---------------- | ------------------------------------------------------------------ |
| [Virtual Scroll] | Custom scroll event with inertia/momentum.                         |
| [modularScroll]  | Elements in viewport detection. Forked from it, not a dependency.  |
| [bezier-easing]  | Improve `scrollTo` system and add `duration` & `easing` parameters |

[instance events]: #instance-events
[Virtual Scroll]: https://github.com/ayamflow/virtual-scroll
[modularScroll]: https://github.com/modularorg/modularscroll
[bezier-easing]: https://github.com/gre/bezier-easing


## Browser support

Works on most modern browsers. Chrome, Firefox, Safari, Edge...

To get IE 11 support, you need polyfills.
You can use your own or include these before our script.

```html
<script nomodule src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.6.0/polyfill.min.js" crossorigin="anonymous"></script>
<script nomodule src="https://polyfill.io/v3/polyfill.min.js?features=Object.assign%2CElement.prototype.append%2CNodeList.prototype.forEach%2CCustomEvent%2Csmoothscroll" crossorigin="anonymous"></script>
```

## Who's using Locomotive Scroll?
- [thierrychopain.com](https://thierrychopain.com/)
- [clmt.paris](https://clmt.paris/)
- [miragefestival.com/2020](https://www.miragefestival.com/2020/)
- [mazellier.design](https://www.mazellier.design/)
- [ccccontemple.com](https://ccccontemple.com/)
- [abhishekjha.me/muteza](https://abhishekjha.me/muteza/)
- [normal.studio](https://normal.studio/en/)
- [mixlegno.com](https://www.mixlegno.com/)
- [nfq.group](https://nfq.group/)
- [works.studio](https://works.studio/)
- [beangels.eu](https://www.beangels.eu/)
- [izakaya-caen.fr](https://www.izakaya-caen.fr/)
- [white-elephant.fr](https://www.white-elephant.fr/)
- [henge07.com](https://www.henge07.com/)
- [loirevalleylodges.com](https://loirevalleylodges.com/)

## Related

- [Locomotive Boilerplate 🚂](https://github.com/locomotivemtl/locomotive-boilerplate)
