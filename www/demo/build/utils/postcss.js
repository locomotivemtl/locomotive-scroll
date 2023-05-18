/**
 * @file If available, returns the PostCSS Processor creator and
 * any the Autoprefixer PostCSS plugin.
 */

let postcss, autoprefixer;

try {
    postcss = await import('postcss');
    postcss = postcss.default;

    autoprefixer = await import('autoprefixer');
    autoprefixer = autoprefixer.default;
} catch (err) {
    // do nothing
}

export default postcss;
export const pluginsList = [
    autoprefixer,
];
export const pluginsMap = {
    'autoprefixer': autoprefixer,
};
export {
    autoprefixer
};
