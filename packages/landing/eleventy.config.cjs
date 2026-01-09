// Import required modules
const twig = require("twig");
const fs = require('fs')
const eleventyPluginTwig = require("@factorial/eleventy-plugin-twig");

// Export Eleventy configuration
module.exports = function(eleventyConfig) {
    // Function to generate a version identifier
    function generateVersion() {
        // You can use a timestamp, a hash of asset files, or any other method you prefer
        return Date.now();
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
    })

    // // Add a filter to append the version to asset URLs
    twig.extendFilter('version', function(url) {
        const version = generateVersion();
        return `${url}?v=${version}`;
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
