<p align="center">
    <a href="https://github.com/locomotivemtl/locomotive-boilerplate">
        <img src="https://user-images.githubusercontent.com/4596862/58807621-67aeec00-85e6-11e9-8e3a-3fe4123ee76c.png" height="140">
    </a>
</p>
<h1 align="center">Locomotive Scroll</h1>
<p align="center">Elements in viewport detection & smooth scrolling with parallax.</p>

## Data attributes
Data | Value | Description
--- | --- | ---
data-speed | float | Speed of transform
data-delay | float | For elements with a data-speed, to add a lerp
data-repeat | false | Determine if the "In View" class is added one or each times
data-inview-class | is-show | CSS Class when the element is in view.
data-position | top/bottom | Trigger from top/bottom of the window instead of the default from bottom to top
data-target | #id, .class | Trigger from another element
data-horizontal | false | Use transformX instead of transformY
data-sticky | false | Set $element sticky when it's in viewport
data-sticky-target | #id | Stop the element stick when the target is in viewport
data-callback | `test.Scroll(test:0|key:value|isTriggered:true)` | trigger event, with options way wich return "leave" or "enter" when $element is in viewport
data-viewport-offset | i,j | value between 0 to 1 (0.3 to start at 30% of the bottom of the viewport), useful to trigger a sequence of callbacks. (i : value wich start at the bottom, j : start at the top, j is optional)

## Dependencies
Locomotive Smooth Scroll is build on top of [virtual-scroll](https://github.com/ayamflow/virtual-scroll).

## Getting started

1.  **Get the latest node modules**
    -	`npm install`

2.  **Run grunt and start coding**
    -   `gulp`
