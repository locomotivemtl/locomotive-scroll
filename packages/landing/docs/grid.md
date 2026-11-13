# Grid system

* [Architectures](#architecture)
  * [Build tasks](#build-tasks)
    * [Configuration](#configuration)
* [Usage](#usage)
  * [Example](#example)

## Architecture

The boilerplate's grid system is meant to be simple and easy to use. The goal is to create a light, flexible, and reusable way to build layouts.
The following styles are needed to work properly:

* [`o-grid`](../assets/styles/objects/grid.css) — Object file where the default grid styles are set such as column numbers, modifiers, and options.
* [`u-grid-columns`](../assets/styles/utilities/grid-column.css) — Utility file with a `u-gc-{start}/{end}` class for every column pair, without media query and for the `@from-medium` and `@to-medium` breakpoints.

### Build tasks

The columns in [`u-grid-columns`](../assets/styles/utilities/grid-column.css) add a lot of styles to the compiled CSS file. To mitigate that, [PurgeCSS] is integrated into the `styles` build task to purge unused CSS.

#### Configuration

Depending on your project, you will need to specify all the files that include CSS classes from the grid system. These files will be scanned by [PurgeCSS] to your compiled CSS files.

The landing scans its Twig views, data files and source scripts, set in the `purge()` function of [`build/assets.js`](../build/assets.js):

```js
content: [
    join(root, 'views/**/*.twig'),
    join(root, 'data/**/*.json'),
    join(root, 'assets/scripts/**/*.js'), // use case: `el.classList.add('u-gc-1/2')`
],
```

> ⚠️ PurgeCSS reads the sources, not the rendered HTML, so the stylesheet hash is known before the templates render. Write every grid and spacing class in full: a class assembled in Twig, such as `u-gc-{{ start }}/{{ end }}`, never appears in a source and is purged without warning. Put the full class name in the view or in a `data/*.json` file instead.

## Usage

The column layouts are set in [`objects/grid.css`](../assets/styles/objects/grid.css). You can create multiple column layouts depending on media queries:

```css
.o-grid {
    display: grid;
    width: 100%;

    &.-col-12 {
        grid-template-columns: repeat(12, 1fr);
    }

    &.-col-12\@from-medium {
        @media (--from-medium) {
            grid-template-columns: repeat(12, 1fr);
        }
    }
    /* … */
}
```

The `u-gc-*` classes in [`utilities/grid-column.css`](../assets/styles/utilities/grid-column.css) go up to 5 columns. For more columns or another breakpoint, add the matching classes to that file.

### Example

The following layout has 4 columns at `>=999px` and 12 columns at `<1000px`.

```html
<div class="o-container">
    <h1 class="c-heading -h1">Hello</h1>

    <div class="o-grid -col-4 -col-12@from-medium -gutters">
        <div class="o-grid_item u-gc-1/8@from-medium">
            <h2 class="c-heading -h2">This grid has 4 columns and 12 columns from `medium` MQ</h2>
        </div>

        <div class="o-grid_item u-gc-1/5@from-medium">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita provident distinctio deleniti eaque cumque doloremque aut quo dicta porro commodi, temporibus totam dolor autem tempore quasi ullam sed suscipit vero?</p>
        </div>

        <div class="o-grid_item u-gc-5/9@from-medium">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita provident distinctio deleniti eaque cumque doloremque aut quo dicta porro commodi, temporibus totam dolor autem tempore quasi ullam sed suscipit vero?</p>
        </div>

        <div class="o-grid_item u-gc-9/13@from-medium">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita provident distinctio deleniti eaque cumque doloremque aut quo dicta porro commodi, temporibus totam dolor autem tempore quasi ullam sed suscipit vero?</p>
        </div>
    </div>
</div>
```

[PurgeCSS]: https://purgecss.com/
