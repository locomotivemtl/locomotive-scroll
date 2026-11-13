<p align="center">
    <a href="https://github.com/locomotivemtl/locomotive-boilerplate">
        <img src="https://user-images.githubusercontent.com/4596862/54868065-c2aea200-4d5e-11e9-9ce3-e0013c15f48c.png" height="140">
    </a>
</p>
<h1 align="center">Locomotive Astro Boilerplate</h1>
<p align="center">Front-end Astro boilerplate for projects by <a href="https://locomotive.ca/">Locomotive</a>.</p>

## Features

* Uses [Astro] for all-in-one web framework.
* Uses [Sass] for a feature rich superset of CSS.
* Uses [Tailwind CSS] for a sane and scalable CSS architecture.
* Uses [Locomotive Scroll] for smooth scrolling with parallax effects.
* Uses [Swup] for versatile and extensible page transition.
* Uses [Prettier] for a formatted and easy to maintain codebase.

## Getting started

Make sure you have the following installed:

* [Node] — 24, the version in the repository root `.nvmrc`.
* [NPM] — at least 8.0, the latest LTS is recommended.

> 💡 You can use [NVM] to install and use different versions of Node via the command-line.

```sh
# Clone the repository.
git clone https://github.com/locomotivemtl/astro-boilerplate.git my-new-project

# Enter the newly-cloned directory.
cd my-new-project
```

## Installation

```sh
# Switch to the Node version from the repository root .nvmrc
nvm use

# Install dependencies from package.json
npm install
```

## Development

```sh
# Start development server, watch for changes, and compile assets
npm start

# Compile and minify assets
npm run build
```

## Project Structure

Inside of your project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── ScrollToggler/
│   │       └── ScrollToggler.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── main.css
│   └── scripts/
│       ├── components/
│       ├── utils/
│       ├── app.ts
│       └── config.ts
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run format`          | Format files using prettier                      |

## Documentation

* [Astro]
* [Locomotive Scroll]
* [Tailwind CSS]
* [Swup]
* [Prettier]

[Astro]:             https://docs.astro.build/en/getting-started/
[Tailwind CSS]:      https://tailwindcss.com/docs/installation
[Locomotive Scroll]: https://scroll.locomotive.ca/docs
[Swup]:              https://swup.js.org/getting-started/
[Node]:              https://nodejs.org/
[NPM]:               https://npmjs.com/
[NVM]:               https://github.com/nvm-sh/nvm
[Prettier]:          https://prettier.io/
