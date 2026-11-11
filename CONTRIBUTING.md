# Contributing

## Setup

The Node version is set in `.nvmrc`, and the repository uses npm workspaces.

```bash
npm ci
npm run dev
```

`npm run dev` starts the demo.

## Packages

| Package            | Purpose                                  |
| ------------------ | ---------------------------------------- |
| `packages/lib`     | The published `locomotive-scroll` module |
| `packages/demo`    | Astro demo                               |
| `packages/landing` | Landing page, served at `/`              |
| `packages/docs`    | Docusaurus documentation                 |

The output in `www/`, `packages/lib/dist` and `packages/lib/bundled` is generated: change the sources instead.

## Checks

CI runs these on every pull request:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

After changing the build or the package exports, also run:

```bash
npm run build -w packages/lib
npm run check:package -w packages/lib
```

## Landing

```bash
npm run start -w packages/landing
npm run build:landing
```

The landing inlines the library source and reads its displayed version from `packages/lib/package.json`. Fonts, favicons and other files with no build step live in `packages/landing/assets/static/` and are copied to `www/landing/assets/`.

## Pull requests

Branch from `main` and open a pull request against it. `main` requires one review. Add user-facing changes to `CHANGELOG.md`.

Releases are described in [RELEASING.md](./RELEASING.md).
