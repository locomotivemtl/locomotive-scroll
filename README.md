# Locomotive Smooth Scroll

![experimental](https://img.shields.io/badge/stability-experimental-orange.svg)

## Data attributes
Data | Value | Description
--- | --- | ---
data-speed | number | Speed of transform
data-persist | false | Determine if the "In View" class is added one or each times
data-inview-class | is-show | CSS Class when the element is in view.
data-position | top/bottom | Trigger from top/bottom of the window instead of the default from bottom to top
data-target | #id, .class | Trigger from another element
data-horizontal | true | Use transformX instead of transformY

## Dependencies
Locomotive Smooth Scroll is build on top of [smooth-scrollbar](https://github.com/idiotWu/smooth-scrollbar).

## Getting started

1.  **Get the latest node modules**
    -	`npm install`

2.  **Run grunt and start coding**
    -   `grunt`

### BrowserSync

BrowserSync will automatically inject, refresh and sync all your browsers.

Run `grunt sync`

## JavaScript

-   We use HTML data attributes to init our JavaScript modules: `data-module`
-   All DOM related JavaScript is hooked to `js-` prefixed HTML classes
-   [jQuery](https://jquery.com) is globally included

[locomtl]:   https://locomotive.ca
[smoothscrollbar]:   https://github.com/idiotWu/smooth-scrollbar

## Todo
-	Manage responsive (disable smooth scrolling on mobile)
-	Manage a parts of data attributes with general options (example: set persist for all)
-   Function to get the percentage (distance) of my element on the viewport
-   Find a solution to have really slow element
