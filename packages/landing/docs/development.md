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
  * [`scripts`](#scripts)
  * [`styles`](#styles)
  * [`svgs`](#svgs)
  * [`versions`](#versions)

---

The boilerplate provides a custom, easily configured, and very simple,
task runner for [Node] to process assets and test quickly in browsers.

Learn more about the boilerplate's [tasks](#tasks) below.

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

It is merged over `loconfig.json`. For example, to proxy an existing
local server instead of serving `paths.dest`:

```json
{
    "paths": {
        "url": "localhost:8080"
    }
}
```

Your `loconfig.local.json` _should not_ be committed to your project's
source control.

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
                "infile": "{% paths.styles.src %}/main.css", // → ./assets/styles/main.css
                "outfile": "{% paths.styles.dest %}/main.css" // → ./www/assets/styles/main.css
            }
        ]
    }
}
```

#### `paths.url` option

The `paths.url` option defines the base URI of the project.

It is not set by default. When set, the development server proxies it
instead of serving [`paths.dest`](#pathsdest-option).

```json
{
    "paths": {
        "url": "localhost:8080"
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
                "infile": "./assets/styles/main.css",
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
        "port": 3000
    }
}
```

Visit [BrowserSync's documentation](https://browsersync.io/docs/options)
for all options.

## Tasks

The boilerplate provides a handful of tasks for handling
the most commonly processed assets.

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

A wrapper around [PostCSS] for compiling native CSS. In order, it inlines
`@import` rules ([postcss-import]), resolves `@custom-media` queries
([postcss-custom-media]), flattens nesting ([postcss-nesting]) and adds
vendor prefixes ([Autoprefixer]).

For production builds, unused styles are removed with [PurgeCSS], then the
result is minified with [cssnano].

Example:

```json
{
    "styles": [
        {
            "label": "Text Editor CSS",
            "infile": "{% paths.styles.src %}/app/editor.css",
            "outfile": "{% paths.styles.dest %}/app/editor.css"
        },
        {
            "label": "Application Dashboard CSS",
            "infile": "{% paths.styles.src %}/app/dashboard.css",
            "outfile": "{% paths.styles.dest %}/app/dashboard.css"
        },
        {
            "label": "Public Site Critical CSS",
            "infile": "{% paths.styles.src %}/site/critical.css",
            "outfile": "{% paths.styles.dest %}/site/critical.css"
        },
        {
            "label": "Public Site CSS",
            "infile": "{% paths.styles.src %}/site/main.css",
            "outfile": "{% paths.styles.dest %}/site/main.css"
        }
    ]
}
```

See [`styles.js`](../build/tasks/styles.js) for details.

The task also supports [PurgeCSS] to remove unused CSS.
See the [documentation on our Grid System](grid.md#build-tasks) for details.

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

### `versions`

A task to create and update values for use in versioning assets.

Can generate a hexadecimal value (using random bytes), use the current timestamp,
or increment a number.

Example:

```json
{
    "versions": [
        {
            "format": "timestamp",
            "key": "now",
            "outfile": "./assets.json"
        },
        {
            "format": "hex:8",
            "key": "hex",
            "outfile": "./assets.json"
        },
        {
            "format": "inc:semver",
            "key": "inc",
            "outfile": "./assets.json"
        }
    ]
}
```

```json
{
    "now": 1665071717350,
    "hex": "6ef54181c4ba",
    "hex": "1.0.2"
}
```

The task supports replacing the value of a data key in a JSON file or replacing
a string in a file using a [regular expression](RegExp).

* Explicit JSON field name:
    ```json
    {
        "key": "json:version"
    }
    ```
* Implicit JSON field name:
    ```json
    {
        "key": "version"
    }
    ```

The regular expression can be a `RegExp` object or a pattern prefixed with `regexp:`.

* ```json
  {
      "key": "regexp:(?<=^const ASSETS_VERSION = ')(?<build>\\d+)(?=';$)"
  }
  ```

* ```js
  {
      key: new RegExp('(?<=^const ASSETS_VERSION = ')(?<version>\\d+)(?=';$)')
  }
  ```
* ```js
  {
      key: /^ \* Version: +(?:.+?)\+(.+?)$/
  }
  ```

The regular expression pattern will match the first occurrence and replace
the first match in the following order: `build` (named capture), `version`
(named capture), `1` (first capture), or `0` (whole match).

See [`versions.js`](../build/tasks/versions.js) for details.

[Autoprefixer]: https://npmjs.com/package/autoprefixer
[BrowserSync]:  https://npmjs.com/package/browser-sync
[cssnano]:      https://npmjs.com/package/cssnano
[esbuild]:      https://npmjs.com/package/esbuild
[Node]:         https://nodejs.org/
[NPM]:          https://npmjs.com/
[NVM]:          https://github.com/nvm-sh/nvm
[PostCSS]:      https://npmjs.com/package/postcss
[postcss-custom-media]: https://npmjs.com/package/postcss-custom-media
[postcss-import]: https://npmjs.com/package/postcss-import
[postcss-nesting]: https://npmjs.com/package/postcss-nesting
[PurgeCSS]:     https://purgecss.com/
[RegExp]:       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[SVG Mixer]:    https://npmjs.com/package/svg-mixer
