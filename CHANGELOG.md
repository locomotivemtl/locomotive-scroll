# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.1.1] - Unreleased

### Fixed

- An element with `data-scroll-delay` stops rendering once it is out of the viewport. It used to update its `transform` on every frame while scrolling and for about 1.5 seconds after. It now jumps to its final position out of sight, and resumes from there when it comes back.

## [5.1.0] - 2026-11-13

### Added

- The `enableTouchSpeed` option (default `false`) enables parallax on touch devices for every element, as `data-scroll-enable-touch-speed` does for one element ([#594](https://github.com/locomotivemtl/locomotive-scroll/issues/594)).
- The `data-scroll-delay` attribute is back ([#539](https://github.com/locomotivemtl/locomotive-scroll/issues/539)). It takes the v4 lerp factor, between 0 and 1 excluded (for example `0.1`), and makes the element trail behind the scroll, then land where it would be without delay. With `data-scroll-speed`, it delays the parallax as in v4, now at any frame rate. Without `data-scroll-speed`, or with a low or negative speed, the element still trails by a minimum amount. The trail is capped relative to the viewport. Triggers, `is-inview`, `--progress` and events ignore the delay: they follow the position the element lands on. It is turned off under reduced motion and on touch devices, like the parallax.
- The `data-lenis-prevent-vertical` and `data-lenis-prevent-horizontal` attributes from Lenis, to stop scroll smoothing on one axis inside an element.

### Changed

- Lenis is updated from 1.3.17 to 1.3.27.
- Scrolling honors `prefers-reduced-motion: reduce` by default, through Lenis's new `respectReducedMotion` option: smoothing is turned off, so scroll follows the input 1:1, and programmatic scrolls, including `scrollTo`, jump instantly. To keep the previous behavior, pass `lenisOptions: { respectReducedMotion: false }`.
- Under reduced motion, `data-scroll-speed` parallax is turned off, including on elements with `data-scroll-enable-touch-speed`. It follows `respectReducedMotion`.
- `scrollTo` and `data-scroll-to` now account for the target's `scroll-margin` and the scroll container's `scroll-padding`. A page that already sets them and compensates with `data-scroll-to-offset` now gets both offsets.
- `scrollTo` options type `userData` as `Record<string, unknown>` instead of `Record<string, any>`, following Lenis.
- With `data-scroll-speed`, `is-inview`, `--progress`, progress events and `data-scroll-call` follow where the element is displayed instead of its natural position, so the element enters and leaves when it actually appears and disappears. The parallax itself is unchanged. Under reduced motion, and on touch devices without parallax, they stay on the natural position. To keep the 5.0 behavior, pass `legacyTriggers: true`.

### Deprecated

- The `legacyTriggers` option (default `false`), which keeps the 5.0 triggers on the natural position. It is a transition option and will be removed in 6.0.

### Fixed

- Text selection on iOS.
- The `lenis` class no longer comes back on the root element after `destroy()`.
- `syncTouch` is more accurate and no longer jitters on slow scrolls.
- Anchor links with special characters, with the `anchors` Lenis option.
- An element in the fold with `data-scroll-repeat` and a RAF attribute (`data-scroll-speed`, a custom offset, progress) no longer loses `is-inview` at the top of the page.
- `data-scroll-to-duration` keeps its decimals: `1.5` was read as `1` second.

## [5.1.0-beta.1] - 2026-11-13

### Added

- The `enableTouchSpeed` option (default `false`) enables parallax on touch devices for every element, as `data-scroll-enable-touch-speed` does for one element ([#594](https://github.com/locomotivemtl/locomotive-scroll/issues/594)).
- The `data-scroll-delay` attribute is back ([#539](https://github.com/locomotivemtl/locomotive-scroll/issues/539)). It takes the v4 lerp factor, between 0 and 1 excluded (for example `0.1`), and makes the element trail behind the scroll, then land where it would be without delay. With `data-scroll-speed`, it delays the parallax as in v4, now at any frame rate. Without `data-scroll-speed`, or with a low or negative speed, the element still trails by a minimum amount. The trail is capped relative to the viewport. Triggers, `is-inview`, `--progress` and events ignore the delay: they follow the position the element lands on. It is turned off under reduced motion and on touch devices, like the parallax.
- The `data-lenis-prevent-vertical` and `data-lenis-prevent-horizontal` attributes from Lenis, to stop scroll smoothing on one axis inside an element.

### Changed

- Lenis is updated from 1.3.17 to 1.3.27.
- Scrolling honors `prefers-reduced-motion: reduce` by default, through Lenis's new `respectReducedMotion` option: smoothing is turned off, so scroll follows the input 1:1, and programmatic scrolls, including `scrollTo`, jump instantly. To keep the previous behavior, pass `lenisOptions: { respectReducedMotion: false }`.
- Under reduced motion, `data-scroll-speed` parallax is turned off, including on elements with `data-scroll-enable-touch-speed`. It follows `respectReducedMotion`.
- `scrollTo` and `data-scroll-to` now account for the target's `scroll-margin` and the scroll container's `scroll-padding`. A page that already sets them and compensates with `data-scroll-to-offset` now gets both offsets.
- `scrollTo` options type `userData` as `Record<string, unknown>` instead of `Record<string, any>`, following Lenis.
- With `data-scroll-speed`, `is-inview`, `--progress`, progress events and `data-scroll-call` follow where the element is displayed instead of its natural position, so the element enters and leaves when it actually appears and disappears. The parallax itself is unchanged. Under reduced motion, and on touch devices without parallax, they stay on the natural position. To keep the 5.0 behavior, pass `legacyTriggers: true`.

### Deprecated

- The `legacyTriggers` option (default `false`), which keeps the 5.0 triggers on the natural position. It is a transition option and will be removed in 6.0.

### Fixed

- Text selection on iOS.
- The `lenis` class no longer comes back on the root element after `destroy()`.
- `syncTouch` is more accurate and no longer jitters on slow scrolls.
- Anchor links with special characters, with the `anchors` Lenis option.
- An element in the fold with `data-scroll-repeat` and a RAF attribute (`data-scroll-speed`, a custom offset, progress) no longer loses `is-inview` at the top of the page.
- `data-scroll-to-duration` keeps its decimals: `1.5` was read as `1` second.

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
