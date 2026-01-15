# Locomotive Scroll

[![npm version](https://img.shields.io/npm/v/locomotive-scroll.svg)](https://www.npmjs.com/package/locomotive-scroll)
[![npm downloads](https://img.shields.io/npm/dm/locomotive-scroll.svg)](https://www.npmjs.com/package/locomotive-scroll)
[![bundle size](https://img.shields.io/bundlephobia/minzip/locomotive-scroll)](https://bundlephobia.com/package/locomotive-scroll)

A **lightweight** & **modern** scroll library for detection, animation, and smooth scrolling. Built on top of [Lenis](https://github.com/darkroomengineering/lenis).

## Documentation

Full documentation available at [scroll.locomotive.ca/docs](https://scroll.locomotive.ca/docs).

## Quick Start

```bash
npm install locomotive-scroll
```

```js
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();
```

```css
@import 'locomotive-scroll/dist/locomotive-scroll.css';
```

```html
<div data-scroll data-scroll-speed="0.5">I move at half speed</div>
```

## Features

-   **Lightweight** — Only 9.4kB gzipped
-   **TypeScript First** — Fully typed
-   **Built on Lenis** — Latest stable release with improved performance
-   **Dual Intersection Observers** — Optimized detection for triggers vs. animations
-   **Smart Touch Detection** — Parallax auto-disabled on mobile
-   **Accessible** — Native scrollbar, keyboard navigation, proper ARIA support

## Demo

Check out the [examples and playground](https://scroll.locomotive.ca/docs/examples)

## Support

[GitHub Issues](https://github.com/locomotivemtl/locomotive-scroll/issues)
