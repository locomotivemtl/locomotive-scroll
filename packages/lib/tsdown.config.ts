import type { UserConfig } from 'tsdown';
import { defineConfig } from 'tsdown';

const umdConfig: UserConfig = {
    format: 'umd',
    globalName: 'LocomotiveScroll',
    target: 'es2020',
    dts: false,
    sourcemap: false,
    outDir: 'bundled',
    deps: { alwaysBundle: ['lenis'], onlyBundle: ['lenis'] },
    // tsdown appends `.umd` by default, the published CDN names have no suffix
    outputOptions: { entryFileNames: '[name].js' },
};

export default defineConfig([
    {
        entry: { 'locomotive-scroll': 'index.ts' },
        format: ['esm', 'cjs'],
        dts: true,
        fixedExtension: true,
        sourcemap: true,
        target: 'es2020',
        outDir: 'dist',
        deps: { neverBundle: ['lenis'] },
        // d.cts declares `export default`: without this, `.default` is undefined at runtime
        footer: ({ format }) =>
            format === 'cjs'
                ? { js: 'module.exports.default = module.exports;' }
                : {},
    },
    {
        ...umdConfig,
        entry: { 'locomotive-scroll': 'index.ts' },
    },
    {
        ...umdConfig,
        entry: { 'locomotive-scroll.min': 'index.ts' },
        minify: true,
    },
]);
