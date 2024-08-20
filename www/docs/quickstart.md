# Quick start

## Installation

To install Locomotive Scroll, you have two options:

### NPM

You can install it via NPM by running the following command:

```bash
npm install locomotive-scroll@beta
```

### Manual Installation

Alternatively, you can manually add Locomotive Scroll to your `package.json` file.

Choose the method that suits your project setup and proceed with the installation.

For more details and package information, you can visit the [NPM package page](https://www.npmjs.com/package/locomotive-scroll).

## Usage

### Javascript

With a bundler

```js
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();
```

Or without

```js
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@beta/bundled/locomotive-scroll.min.js"></script>
<script>
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
</script>
```

### CSS

#### Essential styles

Add the base styles to your CSS file.

[locomotive-scroll.css](https://github.com/locomotivemtl/locomotive-scroll/blob/v5-beta/bundled/locomotive-scroll.css)

Learn more about styling considerations on [Lenis documentation](https://github.com/darkroomengineering/lenis#considerations).

#### Sass Import

You can also import the following .css file.

[locomotive-scroll.css](https://github.com/locomotivemtl/locomotive-scroll/blob/v5-beta/bundled/locomotive-scroll.css)

```scss
// Vendors
@import 'node_modules/locomotive-scroll/dist/locomotive-scroll';
```

#### Horizontal styles

If you are utilizing the horizontal feature, we recommend applying the following CSS rules:

```css
/* Only necessary with horizontal scrolling */
html[data-scroll-orientation="horizontal"] {
    body {
        width: fit-content;
    }
    [data-scroll-container] {
        display: flex;
    }
}
```

### Let's try

```html
<main style="height: 150vh;">
    <div>
        <h1>Hello 👋</h1>
    </div>
    <div>
        <h2 data-scroll data-scroll-speed="0.5">What's up?</h2>
        <p data-scroll data-scroll-speed="0.8">😬</p>
    </div>
</main>
```

```js
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
```
