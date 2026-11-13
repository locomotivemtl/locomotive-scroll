/**
 * @file Returns the PostCSS Processor creator and the plugins
 * used to compile and minify the styles.
 */

/**
 * @typedef {import('autoprefixer').autoprefixer.Options} AutoprefixerOptions
 */

/**
 * @typedef {import('postcss').AcceptedPlugin} AcceptedPlugin
 */

/**
 * @typedef {import('postcss').PluginCreator<object>} PluginCreator
 */

/**
 * @typedef {import('postcss').ProcessOptions} ProcessOptions
 */

/**
 * @typedef {import('postcss').Processor} Processor
 */

/**
 * @typedef {AcceptedPlugin[]} PluginList
 */

/**
 * @typedef {Record<string, PluginCreator>} PluginMap
 */

/**
 * @typedef {PluginList|PluginMap} PluginCollection
 */

/**
 * @typedef {object} PostCSSOptions
 *
 * @property {ProcessOptions}      processor    - The `Processor#process()` options.
 * @property {AutoprefixerOptions} autoprefixer - The `autoprefixer()` options.
 */

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'postcss';
import postcssCustomMedia from 'postcss-custom-media';
import postcssImport from 'postcss-import';
import postcssNesting from 'postcss-nesting';

/**
 * @type {PluginMap} The compile plugins, in the order they run.
 *     `postcss-import` comes first so the other plugins see a single file,
 *     and the custom media queries are resolved before the nesting is flattened.
 */
const pluginsMap = {
    'postcss-import': postcssImport,
    'postcss-custom-media': postcssCustomMedia,
    'postcss-nesting': postcssNesting,
    'autoprefixer': autoprefixer,
};

/**
 * @type {PluginMap} The minify plugins, run after the purge.
 */
const minifyPluginsMap = {
    'cssnano': cssnano,
};

/**
 * Creates a PostCSS Processor with the given plugins and options.
 *
 * @param {PluginCollection} pluginsListOrMap - A list or map of plugins.
 *     If a map of plugins, the plugin name looks up `options`.
 * @param {PostCSSOptions}   options - The PostCSS wrapper options.
 *
 * @returns {Processor}
 */
function createProcessor(pluginsListOrMap, options)
{
    const plugins = parsePlugins(pluginsListOrMap, options);

    return postcss(plugins);
}

/**
 * Parses the PostCSS plugins and options.
 *
 * @param {PluginCollection} pluginsListOrMap - A list or map of plugins.
 *     If a map of plugins, the plugin name looks up `options`.
 * @param {PostCSSOptions}   options - The PostCSS wrapper options.
 *
 * @returns {PluginList}
 */
function parsePlugins(pluginsListOrMap, options)
{
    if (Array.isArray(pluginsListOrMap)) {
        return pluginsListOrMap;
    }

    return Object.entries(pluginsListOrMap).map(
        ([ name, plugin ]) => plugin(options[name])
    );
}

export default postcss;

export {
    createProcessor,
    minifyPluginsMap,
    parsePlugins,
    pluginsMap,
    postcss,
};
