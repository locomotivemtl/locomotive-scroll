> **Warning**
>
> Locomotive Scroll v5 is currently in **beta**. Be prepared for breaking changes compared to previous versions.

# Locomotive Scroll

[![npm version](https://img.shields.io/npm/v/locomotive-scroll.svg)](https://www.npmjs.com/package/locomotive-scroll)
[![npm downloads](https://img.shields.io/npm/dm/locomotive-scroll.svg)](https://www.npmjs.com/package/locomotive-scroll)
[![bundle size](https://img.shields.io/bundlephobia/minzip/locomotive-scroll)](https://bundlephobia.com/package/locomotive-scroll@beta)
[![license](https://img.shields.io/npm/l/locomotive-scroll.svg)](https://github.com/locomotivemtl/locomotive-scroll/blob/master/LICENSE)

A lightweight scroll library for modern web experiences. Detection, animation, and smooth scrolling — all in **9.6kB**.

Built on top of [Lenis](https://github.com/darkroomengineering/lenis).

[Documentation](https://scroll.locomotive.ca/docs) · [Examples](https://scroll.locomotive.ca/docs/#/playground)

---

## Features

- **Lightweight** — Only 9.6kB gzipped
- **TypeScript First** — Fully typed
- **Built on Lenis 1.3.17** — Latest stable release with improved performance
- **Dual Intersection Observers** — Optimized detection for simple triggers vs. continuous animations
- **Smart Touch Detection** — Parallax auto-disabled on mobile for native scrolling
- **Accessible** — Native scrollbar, keyboard navigation, proper ARIA support
- **No Layout Shifts** — No more greedy CSS transforms breaking your layouts

---

## Installation

```bash
npm install locomotive-scroll@beta
```

---

## Quick Start

### Basic Setup

```js
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();
```

That's it! Locomotive Scroll is now active with sensible defaults.

### Add Parallax

```html
<div data-scroll data-scroll-speed="0.5">
  I move at half speed (smooth parallax)
</div>
```

### Trigger Animations

```html
<div data-scroll data-scroll-class="fade-in">
  I get the 'fade-in' class when scrolled into view
</div>
```

### Track Progress

```html
<div data-scroll data-scroll-css-progress>
  <div class="progress-bar" style="width: calc(var(--progress) * 100%)"></div>
</div>
```

---

## Built-in Tools

### In-view Detection

Add classes, trigger callbacks, or fire custom events when elements enter the viewport.

```html
<div data-scroll data-scroll-class="is-revealed">
  Revealed on scroll
</div>
```

### Progress Tracking

Get real-time scroll progress (0-1) as CSS variables or JavaScript events.

```html
<div data-scroll data-scroll-css-progress>
  <!-- --progress CSS variable available here -->
</div>
```

```html
<div data-scroll data-scroll-event-progress="myProgress">
  Progress via custom events
</div>
```

```js
window.addEventListener('myProgress', (e) => {
  console.log(e.detail.progress); // 0 to 1
});
```

### Parallax Effects

Simple, performant parallax with one attribute.

```html
<!-- Desktop only (default) -->
<div data-scroll data-scroll-speed="0.5">
  Parallax on desktop
</div>

<!-- All devices including mobile -->
<div data-scroll data-scroll-speed="0.5" data-scroll-enable-touch-speed>
  Parallax everywhere
</div>
```

**Note:** Parallax is automatically disabled on touch devices for native scrolling performance. Enable it explicitly with `data-scroll-enable-touch-speed` when needed.

### Custom Callbacks

```html
<div data-scroll data-scroll-call="videoTrigger">
  Video container
</div>
```

```js
window.addEventListener('videoTrigger', (e) => {
  const { target, way, from } = e.detail;
  // way: 'enter' | 'leave'
  // from: 'start' | 'end'

  if (way === 'enter') {
    target.querySelector('video').play();
  }
});
```

---

## Configuration

### Instance Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `autoStart` | `boolean` | `true` | Automatically start the scroll on initialization |
| `destroyCustomTicker` | `function` | `undefined` | Callback to destroy custom ticker (e.g., GSAP) |
| `initCustomTicker` | `function` | `undefined` | Callback to initialize custom ticker (e.g., GSAP) |
| `lenisOptions` | `object` | `{}` | Lenis configuration options (see below) |
| `rafRootMargin` | `string` | `'100% 100% 100% 100%'` | Root margin for RAF-based Intersection Observer |
| `scrollCallback` | `function` | `undefined` | Callback fired on scroll with velocity, direction, progress |
| `triggerRootMargin` | `string` | `'-1px'` | Root margin for trigger-based Intersection Observer |

#### Lenis Options

Pass any [Lenis option](https://github.com/darkroomengineering/lenis#instance-settings) via `lenisOptions`:

```js
const scroll = new LocomotiveScroll({
  lenisOptions: {
    duration: 1.2,
    orientation: 'vertical', // or 'horizontal'
    smoothWheel: true,
    lerp: 0.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  },
});
```

#### Custom Scroll Containers

Locomotive Scroll v5 supports custom scroll containers via Lenis options. By default, it scrolls the entire page (`window`), but you can specify a custom wrapper and content element:

```js
const scroll = new LocomotiveScroll({
  lenisOptions: {
    wrapper: document.querySelector('.scroll-container'),
    content: document.querySelector('.scroll-content'),
  },
});
```

```html
<div class="scroll-container" style="height: 100vh; overflow: hidden;">
  <div class="scroll-content">
    <div data-scroll data-scroll-speed="0.5">Parallax element</div>
  </div>
</div>
```

**Requirements for custom containers:**
- The `wrapper` must have a fixed height and `overflow: hidden` (or `auto`/`scroll`)
- The `content` must be a direct child of the wrapper
- Intersection Observers will automatically use the wrapper as their root

**Note:** Resize detection is automatically synchronized with Lenis's internal ResizeObservers, ensuring perfect timing for dimension updates.

[See all options →](https://scroll.locomotive.ca/docs/#/options)

### Data Attributes

| Attribute | Description |
|-----------|-------------|
| `data-scroll` | Enable detection on element |
| `data-scroll-speed` | Parallax speed (-1 to 1) |
| `data-scroll-class` | Class to add when in view |
| `data-scroll-repeat` | Repeat animation on each enter |
| `data-scroll-call` | Trigger custom event |
| `data-scroll-position` | Custom trigger positions |
| `data-scroll-offset` | Custom viewport offsets |
| `data-scroll-css-progress` | CSS `--progress` variable |
| `data-scroll-event-progress` | Progress custom events |
| `data-scroll-enable-touch-speed` | Enable parallax on mobile |
| `data-scroll-to` | Click to scroll to target |

[See all attributes →](https://scroll.locomotive.ca/docs/#/attributes)

---

## Methods

```js
const scroll = new LocomotiveScroll();

// Start/stop
scroll.start();
scroll.stop();

// Scroll to
scroll.scrollTo('#section');
scroll.scrollTo(500); // pixels
scroll.scrollTo(element, {
  offset: 100,
  duration: 2,
  easing: (t) => t * t,
});

// Dynamic content
scroll.addScrollElements($newContainer);
scroll.removeScrollElements($oldContainer);

// Lifecycle
scroll.resize();
scroll.destroy();
```

[See all methods →](https://scroll.locomotive.ca/docs/#/methods)

---

## Advanced Usage

### Access Lenis Instance

```js
const scroll = new LocomotiveScroll();

// Direct access to Lenis
scroll.lenisInstance.scrollTo(500, { immediate: true });
console.log(scroll.lenisInstance.direction); // 1 | -1 | 0
console.log(scroll.lenisInstance.velocity);
```

### Custom Ticker (GSAP)

```js
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';

const scroll = new LocomotiveScroll({
  initCustomTicker: (render) => gsap.ticker.add(render),
  destroyCustomTicker: (render) => gsap.ticker.remove(render),
});
```

---

## What's New in V5

### Complete Rewrite

Version 5 is a complete rewrite built on top of Lenis. Lighter, faster, and designed for modern workflows.

### TypeScript First

Fully typed. Better autocomplete, fewer bugs.

```ts
import LocomotiveScroll, {
  ILocomotiveScrollOptions,
  ILenisScrollValues
} from 'locomotive-scroll';
```

### Dual Intersection Observer Strategy

Two separate observers optimize performance:
- **Trigger IO** — Simple in-view detection (classes, callbacks)
- **RAF IO** — Continuous animations (parallax, progress)

Elements only subscribe to RAF when visible **and** animating.

### Smart Touch Detection

Permanent touch device detection using `'ontouchstart' in window || navigator.maxTouchPoints > 0`.

Parallax automatically disabled on touch devices for native scrolling.

### No Layout Shifts

No more greedy CSS transforms breaking your layouts. Works perfectly with `position: sticky`, fixed headers, and existing CSS.

---

## Browser Support

Locomotive Scroll works on all modern browsers that support:
- [Intersection Observer API](https://caniuse.com/intersectionobserver)
- [Resize Observer API](https://caniuse.com/resizeobserver)
- ES6+

---

## Dependencies

| Package | Description |
|---------|-------------|
| [Lenis](https://github.com/darkroomengineering/lenis) | Smooth scroll engine |

---

## Showcase

Projects built with Locomotive Scroll:

- [Mission.dev](https://mission.dev)
- [Locomotive.ca](https://locomotive.ca)

[More examples →](https://github.com/locomotivemtl/locomotive-scroll#showcase)

---

## Support

- [Documentation](https://scroll.locomotive.ca/docs)
- [GitHub Issues](https://github.com/locomotivemtl/locomotive-scroll/issues)