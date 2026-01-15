---
sidebar_position: 2
---

# Usage

## Javascript

### With a bundler

```js
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();
```

### Without a bundler

```html
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll/bundled/locomotive-scroll.min.js"></script>
<script>
    const locomotiveScroll = new LocomotiveScroll();
</script>
```

## CSS

### Essential styles

Add the base styles to your CSS file:

```css
@import 'locomotive-scroll/dist/locomotive-scroll.css';
```

Or link directly to the bundled CSS:

```html
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/locomotive-scroll/bundled/locomotive-scroll.css"
/>
```

Learn more about styling considerations on [Lenis documentation](https://github.com/darkroomengineering/lenis#considerations).

### Sass Import

```scss
// Vendors
@import 'node_modules/locomotive-scroll/dist/locomotive-scroll';
```

### Horizontal styles

If you are utilizing the horizontal feature, we recommend applying the following CSS rules:

```css
/* Only necessary with horizontal scrolling */
html[data-scroll-orientation='horizontal'] {
    body {
        width: fit-content;
    }
    [data-scroll-container] {
        display: flex;
    }
}
```

## Let's try

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
