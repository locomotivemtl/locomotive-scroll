# Technologies

* [Styles](#styles)
  * [CSS Architecture](#css-architecture)
  * [CSS Naming Convention](#css-naming-convention)
  * [CSS Namespacing](#css-namespacing)
  * [Example](#example-1)
* [Scripts](#scripts)
  * [Example](#example-2)
* [Page transitions](#page-transitions)
  * [Example](#example-3)
* [Scroll detection](#scroll-detection)
  * [Example](#example-4)

## Styles

[SCSS][Sass] is a superset of CSS that adds many helpful features to improve
and modularize our styles.

We use [node-sass] (LibSass) for processing and minifying SCSS into CSS.

We also use [PostCSS] and [Autoprefixer] to parse our CSS and add
vendor prefixes for experimental features.

### CSS Architecture

The boilerplate's CSS architecture is based on [Inuit CSS][inuitcss] and [ITCSS].

* `settings`: Global variables, site-wide settings, config switches, etc.
* `tools`: Site-wide mixins and functions.
* `generic`: Low-specificity, far-reaching rulesets (e.g. resets).
* `elements`: Unclassed HTML elements (e.g. `a {}`, `blockquote {}`, `address {}`).
* `objects`: Objects, abstractions, and design patterns (e.g. `.o-layout {}`).
* `components`: Discrete, complete chunks of UI (e.g. `.c-carousel {}`).
* `utilities`: High-specificity, very explicit selectors. Overrides and helper
  classes (e.g. `.u-hidden {}`)

Learn more about [Inuit CSS](https://github.com/inuitcss/inuitcss#css-directory-structure).

### CSS Naming Convention

We use a simplified [BEM] (Block, Element, Modifier) syntax:

* `.block`
* `.block_element`
* `.-modifier`

### CSS Namespacing

We namespace our classes for more UI transparency:

* `o-`: Object that it may be used in any number of unrelated contexts to the one you can currently see it in. Making modifications to these types of class could potentially have knock-on effects in a lot of other unrelated places.
* `c-`: Component is a concrete, implementation-specific piece of UI. All of the changes you make to its styles should be detectable in the context you’re currently looking at. Modifying these styles should be safe and have no side effects.
* `u-`: Utility has a very specific role (often providing only one declaration) and should not be bound onto or changed. It can be reused and is not tied to any specific piece of UI.
* `s-`: Scope creates a new styling context. Similar to a Theme, but not necessarily cosmetic, these should be used sparingly—they can be open to abuse and lead to poor CSS if not used wisely.
* `is-`, `has-`: Is currently styled a certain way because of a state or condition. It tells us that the DOM currently has a temporary, optional, or short-lived style applied to it due to a certain state being invoked.

Learn about [namespacing](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/).

### Example \#1

```html
<div class="c-block -large">
    <div class="c-block_layout o-layout">
        <div class="o-layout_item u-1/2@from-medium">
            <div class="c-block_heading o-h -medium">Heading</div>
        </div>
        <div class="o-layout_item u-1/2@from-medium">
           <a class="c-block_button o-button -outline" href="#">Button</a>
        </div>
    </div>
</div>
```

```scss
.c-block {
    &.-large {
        padding: rem(60px);
    }
}

.c-block_heading {
    @media (max-width: $to-medium) {
        .c-block.-large & {
            margin-bottom: rem(40px);
        } 
    }
}
```

## Scripts

We use [esbuild] for bundling and minifying JavaScript/ES modules.

[modularJS] is a small framework we use on top of ES modules.

* Automatically init visible modules.
* Easily call other modules methods.
* Quickly set scoped events with delegation.
* Simply select DOM elements scoped in their module.

[_source_](https://npmjs.com/package/modujs#why)

### Example \#2

```html
<div data-module-example>
    <div data-example="main">
        <h2>Example</h2>
    </div>
    <button data-example="load">More</button>
</div>
```

```js
import { module } from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);

        this.events = {
            click: {
                load: 'loadMore'
            }
        };
    }

    loadMore() {
        this.$('main')[0].classList.add('is-loading');
    }
}
```

Learn more about [modularJS].

## Page transitions

[modularLoad] is used for page transitions and lazy loading.

### Example \#3

```html
<nav>
    <a href="/">Home</a>
    <a href="/page" data-load="transitionName">Page</a>
</nav>
<div data-load-container>
    <img data-load-src="assets/images/hello.jpg">
</div>
```
```js
import modularLoad from 'modularload';

this.load = new modularLoad({
    enterDelay: 300,
    transitions: {
        transitionName: {
            enterDelay: 450
        }
    }
});
```

Learn more about [modularLoad].

## Scroll detection

[Locomotive Scroll][locomotive-scroll] is used for elements in viewport
detection and smooth scrolling with parallax.

### Example \#4

```html
<div data-module-scroll>
    <div data-scroll>Trigger</div>
    <div data-scroll data-scroll-speed="1">Parallax</div>
</div>
```

```js
import LocomotiveScroll from 'locomotive-scroll';

this.scroll = new LocomotiveScroll({
    el: this.el,
    smooth: true
});
````

Learn more about [Locomotive Scroll][locomotive-scroll].

[Autoprefixer]:      https://npmjs.com/package/autoprefixer
[BEM]:               https://bem.info/
[BrowserSync]:       https://npmjs.com/package/browser-sync
[esbuild]:           https://npmjs.com/package/esbuild
[inuitcss]:          https://github.com/inuitcss/inuitcss
[ITCSS]:             https://itcss.io/
[locomotive-scroll]: https://npmjs.com/package/locomotive-scroll
[modularJS]:         https://npmjs.com/package/modujs
[modularLoad]:       https://npmjs.com/package/modularload
[node-sass]:         https://npmjs.com/package/node-sass
[PostCSS]:           https://npmjs.com/package/postcss
[Sass]:              https://sass-lang.com/
[svg-mixer]:         https://npmjs.com/package/svg-mixer
[Node]:              https://nodejs.org/
[NPM]:               https://npmjs.com/
[NVM]:               https://github.com/nvm-sh/nvm
