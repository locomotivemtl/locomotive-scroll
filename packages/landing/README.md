<p align="center">
    <a href="https://github.com/locomotivemtl/locomotive-boilerplate">
        <img src="https://user-images.githubusercontent.com/4596862/54868065-c2aea200-4d5e-11e9-9ce3-e0013c15f48c.png" height="140">
    </a>
</p>
<h1 align="center">Locomotive Boilerplate</h1>
<p align="center">Front-end boilerplate for projects by <a href="https://locomotive.ca/">Locomotive</a>.</p>

## Features

* Uses [Eleventy] to render Twig views, [build assets](docs/development.md) and serve them with live reload.
* Uses [PostCSS] to bundle native CSS, with nesting and custom media queries.
* Uses [ESBuild] for extremely fast processing of JS/ES modules.
* Generates an SVG spritesheet from `assets/images/sprite/`.
* Uses [ITCSS] for a sane and scalable CSS architecture.
* Uses [Locomotive Scroll] for smooth scrolling with parallax effects.
* Uses a custom [grid system](docs/grid.md) for layout creation.

Learn more about [languages and technologies](docs/technologies.md).

## Getting started

Make sure you have the following installed:

* [Node] — 24, the version in the repository root `.nvmrc`.
* [NPM] — at least 8.0, the latest LTS is recommended.

> 💡 You can use [NVM] to install and use different versions of Node via the command-line.

```sh
# Clone the repository.
git clone https://github.com/locomotivemtl/locomotive-boilerplate.git my-new-project

# Enter the newly-cloned directory.
cd my-new-project
```

Then replace the original remote repository with your project's repository.

Then update the following files to suit your project:

* [`README.md`](README.md):
  The file you are currently reading.
* [`package.json`](package.json):
  * Package name: `@locomotivemtl/boilerplate`
  * Package title: `Locomotive Boilerplate`
* [`package-lock.json`](package-lock.json):
  * Package name: `@locomotivemtl/boilerplate`
* [`environment.js`](assets/scripts/utils/environment.js):
  * Application name: `Boilerplate`
* [`site.webmanifest`](www/site.webmanifest):
  * Manifest name: `Locomotive Boilerplate`
  * Manifest short name: `Boilerplate`
* HTML files:
  * Page title: `Locomotive Boilerplate`

## Installation

```sh
# Switch to the Node version from the repository root .nvmrc
nvm use

# Install dependencies from package.json
npm install
```

## Development

```sh
# Start the development server on localhost:3000, rebuild and reload on changes
npm start

# Compile and minify assets
npm run build
```

Learn more about [development and building](docs/development.md).

## Documentation

* [Development and building](docs/development.md)
* [Languages and technologies](docs/technologies.md)
* [Grid system](docs/grid.md)

[Eleventy]:          https://www.11ty.dev/
[ESBuild]:           https://npmjs.com/package/esbuild
[ITCSS]:             https://itcss.io/
[Locomotive Scroll]: https://npmjs.com/package/locomotive-scroll
[modularJS]:         https://npmjs.com/package/modujs
[modularLoad]:       https://npmjs.com/package/modularload
[PostCSS]:           https://postcss.org/
[Node]:              https://nodejs.org/
[NPM]:               https://npmjs.com/
[NVM]:               https://github.com/nvm-sh/nvm
