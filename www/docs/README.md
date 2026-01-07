> **Warning**
>
> Locomotive Scroll v5 is currently in **beta**. Be prepared for breaking changes compared to previous versions.

# Locomotive Scroll v5

> Detection of elements in viewport & smooth scrolling with parallax effects.

Locomotive Scroll is a lightweight JavaScript library (9.6kB gzipped) that provides smooth scrolling animations and advanced scroll interactions for web applications. Built on top of [Lenis](https://github.com/darkroomengineering/lenis), it offers features such as smooth scrolling, parallax effects, and scroll-based animations with a focus on performance and accessibility.

## What's New in V5

Version 5 is a complete rewrite with major improvements:

- **Lighter & Faster** — Built on Lenis 1.3.17, reduced to 9.6kB gzipped
- **TypeScript First** — Fully typed for better developer experience
- **Dual Intersection Observer Strategy** — Optimized detection for simple triggers vs. continuous animations
- **Smart Touch Detection** — Parallax automatically disabled on mobile for smooth 60fps scrolling
- **Custom Scroll Containers** — Support for full-page or contained scrolling
- **No Layout Shifts** — No more greedy CSS transforms breaking your layouts
- **Improved Resize Handling** — Synchronized with Lenis's internal ResizeObservers for perfect timing

## Key Features

| Feature | Description |
| ------- | ----------- |
| **Viewport Detection** | Using browser's native Intersection Observer API with dual optimization strategy |
| **Parallax Effects** | Simple, performant parallax with `data-scroll-speed` attribute |
| **Progress Tracking** | Real-time scroll progress (0-1) as CSS variables or JavaScript events |
| **Custom Events** | Trigger callbacks when elements enter/leave viewport |
| **Accessibility** | Native scrollbar, keyboard navigation, proper ARIA support |
| **Performance** | Elements only subscribe to RAF when visible **and** animating |

## Getting Started

Ready to dive in? Start with our [Quick Start Guide](quickstart.md) to learn how to install and use Locomotive Scroll in your project.

## Documentation

Explore the full documentation:

- **[Instance Options](options.md)** - Configure Locomotive Scroll and Lenis settings
- **[Methods](methods.md)** - Available instance methods for controlling scroll behavior
- **[Attributes](attributes.md)** - HTML data attributes for scroll effects and animations
- **[Playground](playground.md)** - Interactive examples and demos
- **[Limitations](limitations.md)** - Known limitations and workarounds

## Installation

```bash
npm install locomotive-scroll@beta
```

See the [Quick start](quickstart.md) guide for more details.

## Examples

Check out the [Playground](playground.md) to see locomotive-scroll in use.

## Dependencies

| Name | Description |
| ---- | ----------- |
| [Lenis](https://github.com/darkroomengineering/lenis) | Smooth scroll engine |

## Related

- [Lenis](https://github.com/darkroomengineering/lenis)
- [Locomotive Boilerplate 🚂](https://github.com/locomotivemtl/locomotive-boilerplate)
