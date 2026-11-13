# Development

* [Installation](#installation)
* [Usage](#usage)
* [Build](#build)
  * [Scripts](#scripts)
  * [Styles](#styles)
  * [SVG sprite](#svg-sprite)
  * [Asset versions](#asset-versions)

---

The landing is built with [Eleventy]. Its config,
[`eleventy.config.js`](../eleventy.config.js), renders the Twig views and
runs [`build/assets.js`](../build/assets.js) before each build, which
compiles the scripts, styles and SVG sprite.

## Installation

Make sure you have the following installed:

* [Node] — 24, the version in the repository root `.nvmrc`.
* [NPM] — at least 8.0, the latest LTS is recommended.

> 💡 You can use [NVM] to install and use different versions of Node via the command-line.

```sh
# Switch to the Node version from the repository root .nvmrc
nvm use

# Install dependencies from package.json
npm install
```

## Usage

```sh
# Start the development server on localhost:3000, rebuild and reload on changes
npm start

# Compile, purge and minify assets
npm run build
```

The development server comes with Eleventy. If port 3000 is taken,
it uses the next free one. Changes to `views/`, `data/` and `assets/`
trigger a rebuild and a page reload.

Both commands write to `www/landing` at the repository root.
A failing step (invalid CSS, unresolved import, malformed SVG) fails
`npm run build` with a non-zero exit code; `npm start` logs the error
and keeps watching.

## Build

### Scripts

[esbuild] bundles `assets/scripts/app.js` into `assets/scripts/app.js`,
with a source map. Production builds are minified, which also sets
`process.env.NODE_ENV` to `"production"` (`"development"` otherwise).

### Styles

[PostCSS] compiles `assets/styles/main.css`. In order, it inlines
`@import` rules ([postcss-import]), resolves `@custom-media` queries
([postcss-custom-media]), flattens nesting ([postcss-nesting]) and adds
vendor prefixes ([Autoprefixer]).

For production builds, unused grid and spacing utilities are removed with
[PurgeCSS], then the result is minified with [cssnano].
PurgeCSS scans the Twig views, the data files and the source scripts.
See the [documentation on our Grid System](grid.md#build-tasks) for details.

### SVG sprite

Each SVG in `assets/images/sprite/` becomes a `<symbol>` of
`assets/images/sprite.svg`, with the file name as its `id`:

```twig
{% include "@snippets/icon.twig" with { icon: 'github' } %}
```

### Asset versions

The `asset` Twig filter appends a hash of the built file to its URL,
so a URL only changes when its content does:

```twig
<link rel="stylesheet" href="{{ 'assets/styles/main.css' | asset }}">
```

It throws for a URL that is not a built asset.

[Autoprefixer]: https://npmjs.com/package/autoprefixer
[cssnano]:      https://npmjs.com/package/cssnano
[Eleventy]:     https://www.11ty.dev/
[esbuild]:      https://npmjs.com/package/esbuild
[Node]:         https://nodejs.org/
[NPM]:          https://npmjs.com/
[NVM]:          https://github.com/nvm-sh/nvm
[PostCSS]:      https://npmjs.com/package/postcss
[postcss-custom-media]: https://npmjs.com/package/postcss-custom-media
[postcss-import]: https://npmjs.com/package/postcss-import
[postcss-nesting]: https://npmjs.com/package/postcss-nesting
[PurgeCSS]:     https://purgecss.com/
