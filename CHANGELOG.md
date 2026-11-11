# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.0.2] - Unreleased

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
