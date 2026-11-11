# Releasing

Pushing a `vX.Y.Z` tag publishes the package: `.github/workflows/release.yml` tests, builds and checks it, publishes it to npm with provenance, then creates the GitHub release.

## One-time setup

An owner of the npm package declares the Trusted Publisher on npmjs.com, in the package settings:

- Repository: `locomotivemtl/locomotive-scroll`
- Workflow: `release.yml`

No npm token is stored in the repository.

## Steps

`main` requires one review, so the version bump goes through a pull request and the tag is created after the merge.

1. Create the release branch from an up-to-date `main`:

    ```bash
    git switch -c release/vX.Y.Z
    ```

2. Bump the version:

    ```bash
    npm version X.Y.Z -w packages/lib --no-git-tag-version
    ```

3. Update `CHANGELOG.md`: give the release its date.

4. Open a pull request and merge it once reviewed.

5. Tag the merge commit on `main`:

    ```bash
    git switch main
    git pull
    git tag vX.Y.Z
    git push origin vX.Y.Z
    ```

6. Check the [Release workflow](https://github.com/locomotivemtl/locomotive-scroll/actions/workflows/release.yml), then:

    ```bash
    npm view locomotive-scroll dist-tags
    ```

## Prereleases

A tag containing `-`, such as `v5.1.0-beta.1`, is published on the npm `next` dist-tag and marked as a prerelease on GitHub. Any other tag is published on `latest`.

## Tag format

Always `vX.Y.Z`. The workflow fails before publishing if the tag differs from `v` + the version in `packages/lib/package.json`.
