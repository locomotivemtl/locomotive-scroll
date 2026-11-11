# Releasing

Pushing a `vX.Y.Z` tag stages the package: `.github/workflows/release.yml` tests, builds and checks it, stages it on npm with provenance, then creates a draft GitHub release. Nothing is public until a maintainer approves the staged version with 2FA.

## One-time setup

An owner of the npm package declares the Trusted Publisher on npmjs.com, in the package settings:

- Repository: `locomotivemtl/locomotive-scroll`
- Workflow: `release.yml`
- Allow `npm publish`: leave unchecked, so every version requires approval

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

6. Once the [Release workflow](https://github.com/locomotivemtl/locomotive-scroll/actions/workflows/release.yml) succeeds, review and approve the staged version:

    ```bash
    npm stage list locomotive-scroll
    npm stage view <stage-id>
    npm stage approve <stage-id>
    ```

7. Publish the draft GitHub release and check the result:

    ```bash
    gh release edit vX.Y.Z --draft=false
    npm view locomotive-scroll dist-tags
    ```

## Prereleases

A tag containing `-`, such as `v5.1.0-beta.1`, goes to the npm `next` dist-tag once approved and is marked as a prerelease on GitHub. Any other tag goes to `latest`.

## Tag format

Always `vX.Y.Z`. The workflow fails before staging if the tag differs from `v` + the version in `packages/lib/package.json`.
