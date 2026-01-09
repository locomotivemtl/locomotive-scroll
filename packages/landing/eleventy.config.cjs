// Import required modules
const twig = require("twig");
const fs = require('fs');
const path = require('path');
const eleventyPluginTwig = require("@factorial/eleventy-plugin-twig");

// Export Eleventy configuration
module.exports = function(eleventyConfig) {
    // Load assets.json version
    const assetsJsonPath = path.resolve(__dirname, '../../www/landing/assets.json');
    let assetsVersion = null;

    function getAssetsVersion() {
        if (assetsVersion === null) {
            try {
                const assetsData = JSON.parse(fs.readFileSync(assetsJsonPath, 'utf-8'));
                assetsVersion = assetsData.version;
            } catch(error) {
                console.warn('Could not load assets.json, using timestamp instead');
                assetsVersion = Date.now();
            }
        }
        return assetsVersion;
    }

    eleventyConfig.setServerOptions({
        enabled: false,
    });

    eleventyConfig.addWatchTarget("views/**/*");

    // Use twig
    eleventyConfig.addPlugin(eleventyPluginTwig, {
        twig: {
            namespaces: {
                layouts: "views/layouts",
                partials: "views/partials",
                snippets: "views/snippets"
            }
        },
        dir: {
            input: 'views/templates',
            output: '../../www/landing'
        }
    });

    twig.extendFilter("log", function(value) {
        return '<pre>'+JSON.stringify(value)+'</pre>';
    });

    twig.extendFilter("slug", function(str) {
        return str
            .toLowerCase() // Convert the string to lowercase
            .replace(/\s+/g, '-') // Replace spaces with dashes
            .replace(/[^\w-]/g, '') // Remove non-word characters
            .replace(/--+/g, '-') // Replace consecutive dashes with a single dash
            .trim(); // Trim any leading or trailing dashes
    });

    // Add a filter to append the version to asset URLs from assets.json
    twig.extendFilter('asset', function(url) {
        const version = getAssetsVersion();
        return `${url}?v=${version}`;
    });

    // Add global data for assets version
    eleventyConfig.addGlobalData('assetsVersion', function() {
        return getAssetsVersion();
    });

    twig.extendFunction("critical_css", function() {
        try {
            return fs.readFileSync('../../www/landing/assets/styles/critical.css', 'utf-8')
        } catch(error) {
            return '';
        }
    });

    // Configure and return Eleventy settings
    return {
        templateFormats: ['twig'],
        dir: {
            input: 'views/templates',
            output: '../../www/landing',
            data: '../../data'
        }
    };
};
