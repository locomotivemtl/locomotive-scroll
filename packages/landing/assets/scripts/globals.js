export default function () {
    // A literal comparison lets esbuild drop the grid helper from production bundles
    if (process.env.NODE_ENV === 'development') {
        import('./utils/grid-helper').then(({ gridHelper }) => gridHelper());
    }
}
