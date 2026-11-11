# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.1.0] - Unreleased

### Added

- The `enableTouchSpeed` option (default `false`) enables parallax on touch devices for every element, as `data-scroll-enable-touch-speed` does for one element ([#594](https://github.com/locomotivemtl/locomotive-scroll/issues/594)).
- The `data-lenis-prevent-vertical` and `data-lenis-prevent-horizontal` attributes from Lenis, to stop scroll smoothing on one axis inside an element.

### Changed

- Lenis is updated from 1.3.17 to 1.3.27.
- Scrolling honors `prefers-reduced-motion: reduce` by default, through Lenis's new `respectReducedMotion` option: smoothing is turned off, so scroll follows the input 1:1, and programmatic scrolls, including `scrollTo`, jump instantly. To keep the previous behavior, pass `lenisOptions: { respectReducedMotion: false }`.
- Under reduced motion, `data-scroll-speed` parallax is turned off, including on elements with `data-scroll-enable-touch-speed`. It follows `respectReducedMotion`.
- `scrollTo` and `data-scroll-to` now account for the target's `scroll-margin` and the scroll container's `scroll-padding`. A page that already sets them and compensates with `data-scroll-to-offset` now gets both offsets.
- `scrollTo` options type `userData` as `Record<string, unknown>` instead of `Record<string, any>`, following Lenis.

### Fixed

- Text selection on iOS.
- The `lenis` class no longer comes back on the root element after `destroy()`.
- `syncTouch` is more accurate and no longer jitters on slow scrolls.
- Anchor links with special characters, with the `anchors` Lenis option.

## [5.0.2] - 2026-11-11

### Changed

- The library is built with tsdown instead of microbundle.
- `bundled/` files now target ES2020 and are no longer transpiled further.
- Public types are aligned with Lenis: `ILenisScrollToOptions` and `lenisTargetScrollTo` derive from Lenis, and `scrollCallback` uses its `ScrollCallback` type.

### Fixed

- `main` and the `require` export pointed to a missing `dist/locomotive-scroll.js`. They now point to `dist/locomotive-scroll.cjs`, so `require('locomotive-scroll')` works, and each module format gets matching types.
- `scrollTo` forwards all its options to Lenis, including `onStart`, `programmatic` and `userData`.
- `removeScrollElements` no longer skips adjacent elements.
- Removed elements are no longer retained by the `IntersectionObserver` wrapper.

### Removed

- The undocumented `dist/locomotive-scroll.modern.mjs` and `dist/locomotive-scroll.umd.js` files and their source maps. Use `dist/locomotive-scroll.mjs`, or `bundled/locomotive-scroll.js` for a UMD build.
- The undocumented `dist/types/*` files. Types are now `dist/locomotive-scroll.d.mts` and `dist/locomotive-scroll.d.cts`.
- The `engines` field of the package.
- `IScrollElementOptions.scrollCallback`.
