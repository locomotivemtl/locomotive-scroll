# Changelog

## [v5.0.0-beta.22](#) (2026-01-06)

### Bug Fixes & features <!-- {docsify-ignore} -->

- Updated Lenis from `v1.1.9` to `v1.3.17` with improved touch handling, bug fixes, and new options (`stopInertiaOnNavigate`, `naiveDimensions`)
- Improved TypeScript type safety across the codebase
- Refactored intersection computation for better maintainability
- Added proper cleanup with `destroy()` method in ScrollElement to prevent memory leaks
- Performance optimizations: cached orientation-dependent functions and optimized element lookups

### Breaking Changes <!-- {docsify-ignore} -->

- **Removed ModularJS support**: The `modularInstance` option and all ModularJS-related attributes have been removed (`data-scroll-module-progress`, `data-scroll-call-self`). If you need to trigger callbacks when elements enter/leave the viewport, use `data-scroll-call` with native CustomEvents instead (this continues to work as before)

## [v5.0.0-beta.5](#) (2023-05-17)

### Bug Fixes & features <!-- {docsify-ignore} -->

- Bumped lenis version: upgrading the lenis version to `v1.0.12`
- Horizontal scroll support: allowing users to effortlessly navigate horizontally-scrollable content within our library.
- Assets ready for npm: preparing assets specifically tailored for npm to streamline the integration process.
- The `addScrollElements()` function has been added to dynamically add scroll elements to the IntersectionObserver.
- The `removeScrollElements()` function has been added to remove scroll elements from the IntersectionObserver.
- The `update()` function has been removed.
- Update computing of parallax
