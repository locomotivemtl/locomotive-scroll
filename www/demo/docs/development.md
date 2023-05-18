# Development

* [Installation](#installation)
* [Usage](#usage)
* [Configuration](#configuration)
  * [Environment Configuration](#environment-configuration)
  * [Development Configuration](#development-configuration)
    * [`paths` option](#paths-option)
    * [`paths.url` option](#pathsurl-option)
    * [`paths.dest` option](#pathsdest-option)
    * [`tasks` option](#tasks-option)
    * [`server` option](#server-option)
* [Tasks](#tasks)
  * [`concats`](#concats)
  * [`scripts`](#scripts)
  * [`styles`](#styles)
  * [`svgs`](#svgs)

---

The boilerplate provides a custom, easily configured, and very simple,
task runner for [Node] to process assets and test quickly in browsers.

Learn more about the boilerplate's [tasks](#tasks) below.

## Installation

Make sure you have the following installed:

* [Node] — at least 14.17, the latest LTS is recommended.
* [NPM] — at least 6.0, the latest LTS is recommended.

```sh
# Switch to recommended Node version from .nvmrc
nvm use

# Install dependencies from package.json
npm install
```

## Usage

```sh
# Start development server, watch for changes, and compile assets
npm start

# Compile and minify assets
npm run build
```

See [`build.js`](../build/build.js) and [`watch.js`](../build/watch.js)
for details.

## Configuration

For development, most configuration values for processing front-end assets
are defined in the [`loconfig.json`](../loconfig.json) file that exists at
the root directory of your project.

### Environment Configuration

If any configuration options vary depending on whether your project is
running on your computer, a collaborator's computer, or on a web server,
these values should be stored in a `loconfig.local.json` file.

In fresh copy of the boilerplate, the root directory of your project
will contain a [`loconfig.example.json`](../loconfig.example.json) file.

> 💡 The boilerplate's default example customizes the development server
> to use a custom SSL certificate.

That file can be copied to `loconfig.local.json` and customized to suit
your local environment.

Your `loconfig.local.json` _should not_ be committed to your project's
source control.

> 💡 If you are developing with a team, you may wish to continue
> including a `loconfig.example.json` file with your project.

### Development Configuration

The boilerplate provides a few configuration settings to control the
behaviour for processing front-end assets.

#### `paths` option

The `paths` option defines URIs and file paths.

It is primarily used for template tags to reference any configuration
properties to reduce repetition.

Template tags are specified using `{%  %}` delimiters. They will be
automatically expanded when tasks process paths.

```jsonc
{
    "paths": {
        "styles": {
            "src": "./assets/styles",
            "dest": "./www/assets/styles"
        }
    },
    "tasks": {
        "styles": [
            {
                "infile": "{% paths.styles.src %}/main.scss", // → ./assets/styles/main.scss
                "outfile": "{% paths.styles.dest %}/main.css" // → ./www/assets/styles/main.css
            }
        ]
    }
}
```

#### `paths.url` option

The `paths.url` option defines the base URI of the project.

By default, it is used by the development server as a proxy
for an existing virtual host.

```json
{
    "paths": {
        "url": "locomotive-boilerplate.test"
    }
}
```

#### `paths.dest` option

The `paths.dest` option defines the public web directory of the project.

By default, it is used by the development server as the base directory
to serve the website from if a proxy URI is not provided.

```json
{
    "paths": {
        "dest": "./www"
    }
}
```

#### `tasks` option

Which assets and how they should be processed can be configured via
the `tasks` option:

```json
{
    "tasks": {
        "scripts": [
            {
                "includes": [
                    "./assets/scripts/app.js"
                ],
                "outfile": "./www/assets/scripts/app.js"
            }
        ],
        "styles": [
            {
                "infile": "./assets/styles/main.scss",
                "outfile": "./www/assets/styles/main.css"
            }
        ]
    }
}
```

See [tasks](#tasks) section, below, for details.

#### `server` option

The development server (BrowserSync) can be configured via
the `server` option:

```json
{
    "server": {
        "open": true,
        "https": {
            "key": "~/.config/valet/Certificates/{% paths.url %}.key",
            "cert": "~/.config/valet/Certificates/{% paths.url %}.crt"
        }
    }
}
```

Visit [BrowserSync's documentation](https://browsersync.io/docs/options)
for all options.

## Tasks

The boilerplate provides a handful of tasks for handling
the most commonly processed assets.

### `concats`

A wrapper around [concat] (with optional support for globbing) for concatenating multiple files.

By default, [tiny-glob] is installed with the boilerplate.

Example:

```json
{
    "concats": [
        {
            "label": "Application Vendors",
            "includes": [
                "{% paths.scripts.src %}/vendors/*.js",
                "node_modules/focus-visible/dist/focus-visible.min.js",
                "node_modules/vue/dist/vue.min.js",
                "node_modules/vuelidate/dist/vuelidate.min.js",
                "node_modules/vuelidate/dist/validators.min.js"
            ],
            "outfile": "{% paths.scripts.dest %}/app/vendors.js"
        },
        {
            "label": "Public Site Vendors",
            "includes": [
                "{% paths.scripts.src %}/vendors/*.js",
                "node_modules/focus-visible/dist/focus-visible.min.js"
            ],
            "outfile": "{% paths.scripts.dest %}/site/vendors.js"
        }
    ]
}
```

See [`concats.js`](../build/tasks/concats.js) for details.

### `scripts`

A wrapper around [esbuild] for bundling and minifying modern JS/ES modules.

Example:

```json
{
    "scripts": [
        {
            "label": "Application Dashboard JS",
            "includes": [
                "{% paths.scripts.src %}/app/dashboard.js"
            ],
            "outfile": "{% paths.scripts.dest %}/app/dashboard.js"
        },
        {
            "label": "Public Site JS",
            "includes": [
                "{% paths.scripts.src %}/site/main.js"
            ],
            "outfile": "{% paths.scripts.dest %}/site/main.js"
        }
    ]
}
```

See [`scripts.js`](../build/tasks/scripts.js) for details.

### `styles`

A wrapper around [node-sass] (and optionally [Autoprefixer] via [PostCSS])
for compiling and minifying Sass into CSS.

By default, [PostCSS] and [Autoprefixer] are installed with the boilerplate.

Example:

```json
{
    "styles": [
        {
            "label": "Text Editor CSS",
            "infile": "{% paths.styles.src %}/app/editor.scss",
            "outfile": "{% paths.styles.dest %}/app/editor.css"
        },
        {
            "label": "Application Dashboard CSS",
            "infile": "{% paths.styles.src %}/app/dashboard.scss",
            "outfile": "{% paths.styles.dest %}/app/dashboard.css"
        },
        {
            "label": "Public Site Critical CSS",
            "infile": "{% paths.styles.src %}/site/critical.scss",
            "outfile": "{% paths.styles.dest %}/site/critical.css"
        },
        {
            "label": "Public Site CSS",
            "infile": "{% paths.styles.src %}/site/main.scss",
            "outfile": "{% paths.styles.dest %}/site/main.css"
        }
    ]
}
```

See [`styles.js`](../build/tasks/styles.js) for details.

### `svgs`

A wrapper around [SVG Mixer] for transforming and minifying SVG files
and generating spritesheets.

Example:

```json
{
    "svgs": [
        {
            "label": "Application Spritesheet",
            "includes": [
                "{% paths.images.src %}/app/*.svg"
            ],
            "outfile": "{% paths.svgs.dest %}/app/sprite.svg"
        },
        {
            "label": "Public Site Spritesheet",
            "includes": [
                "{% paths.images.src %}/site/*.svg"
            ],
            "outfile": "{% paths.svgs.dest %}/site/sprite.svg"
        }
    ]
}
```

See [`svgs.js`](../build/tasks/svgs.js) for details.

[Autoprefixer]: https://npmjs.com/package/autoprefixer
[BrowserSync]:  https://npmjs.com/package/browser-sync
[concat]:       https://npmjs.com/package/concat
[esbuild]:      https://npmjs.com/package/esbuild
[fast-glob]:    https://npmjs.com/package/fast-glob
[glob]:         https://npmjs.com/package/glob
[globby]:       https://npmjs.com/package/globby
[Node]:         https://nodejs.org/
[node-sass]:    https://npmjs.com/package/node-sass
[NPM]:          https://npmjs.com/
[NVM]:          https://github.com/nvm-sh/nvm
[PostCSS]:      https://npmjs.com/package/postcss
[SVG Mixer]:    https://npmjs.com/package/svg-mixer
[tiny-glob]:    https://npmjs.com/package/tiny-glob
