import concatFiles, { developmentConcatFilesArgs } from './tasks/concats.js';
import compileScripts, { developmentScriptsArgs } from './tasks/scripts.js';
import compileStyles, { developmentStylesArgs } from './tasks/styles.js' ;
import compileSVGs, { developmentSVGsArgs } from './tasks/svgs.js';
import loconfig from './helpers/config.js';
import message from './helpers/message.js';
import notification from './helpers/notification.js';
import resolve from './helpers/template.js';
import { merge } from './utils/index.js';
import browserSync from 'browser-sync';
import { join } from 'node:path';

// Match a URL protocol.
const regexUrlStartsWithProtocol = /^[a-z0-9\-]:\/\//i;

// Build scripts, compile styles, concat files,
// and generate spritesheets on first hit
concatFiles(...developmentConcatFilesArgs);
compileScripts(...developmentScriptsArgs);
compileStyles(...developmentStylesArgs);
compileSVGs(...developmentSVGsArgs);

// Create a new BrowserSync instance
const server = browserSync.create();

// Start the BrowserSync server
server.init(createServerOptions(loconfig), (err) => {
    if (err) {
        message('Error starting development server', 'error');
        message(err);

        notification({
            title:   'Development server failed',
            message: `${err.name}: ${err.message}`
        });
    }
});

configureServer(server, loconfig);

/**
 * Configures the BrowserSync options.
 *
 * @param  {BrowserSync} server         - The BrowserSync API.
 * @param  {object}      loconfig       - The project configset.
 * @param  {object}      loconfig.paths - The paths options.
 * @param  {object}      loconfig.tasks - The tasks options.
 * @return {void}
 */
function configureServer(server, { paths, tasks }) {
    const views = createViewsArray(paths.views);

    // Reload on any changes to views or processed files
    server.watch(
        [
            ...views,
            join(paths.scripts.dest, '*.js'),
            join(paths.styles.dest, '*.css'),
            join(paths.svgs.dest, '*.svg'),
        ]
    ).on('change', server.reload);

    // Watch source scripts
    server.watch(
        [
            join(paths.scripts.src, '**/*.js'),
        ]
    ).on('change', () => {
        compileScripts(...developmentScriptsArgs);
    });

    // Watch source concats
    server.watch(
        resolve(
            tasks.concats.reduce(
                (patterns, { includes }) => patterns.concat(includes),
                []
            )
        )
    ).on('change', () => {
        concatFiles(...developmentConcatFilesArgs);
    });

    // Watch source styles
    server.watch(
        [
            join(paths.styles.src, '**/*.scss'),
        ]
    ).on('change', () => {
        compileStyles(...developmentStylesArgs);
    });

    // Watch source SVGs
    server.watch(
        [
            join(paths.svgs.src, '*.svg'),
        ]
    ).on('change', () => {
        compileSVGs(...developmentSVGsArgs);
    });
}

/**
 * Creates a new object with all the BrowserSync options.
 *
 * @param  {object} loconfig        - The project configset.
 * @param  {object} loconfig.paths  - The paths options.
 * @param  {object} loconfig.server - The server options.
 * @return {object} Returns the server options.
 */
function createServerOptions({
    paths,
    server: options
}) {
    const config = {
        open: false,
        notify: false,
        ghostMode: false
    };

    // Resolve the URL for the BrowserSync server
    if (isNonEmptyString(paths.url)) {
        // Use proxy
        config.proxy = paths.url;
    } else if (isNonEmptyString(paths.dest)) {
        // Use base directory
        config.server = {
            baseDir: paths.dest
        };
    }

    merge(config, resolve(options));

    // If HTTPS is enabled, prepend `https://` to proxy URL
    if (options?.https) {
        if (isNonEmptyString(config.proxy?.target)) {
            config.proxy.target = prependSchemeToUrl(config.proxy.target, 'https');
        } else if (isNonEmptyString(config.proxy)) {
            config.proxy = prependSchemeToUrl(config.proxy, 'https');
        }
    }

    return config;
}

/**
 * Creates a new array (shallow-copied) from the views configset.
 *
 * @param  {*} views - The views configset.
 * @throws {TypeError} If views is invalid.
 * @return {array} Returns the views array.
 */
function createViewsArray(views) {
    if (Array.isArray(views)) {
        return Array.from(views);
    }

    switch (typeof views) {
        case 'string':
            return [ views ];

        case 'object':
            if (views != null) {
                return Object.values(views);
            }
    }

    throw new TypeError(
        'Expected \'views\' to be a string, array, or object'
    );
}

/**
 * Prepends the scheme to the URL.
 *
 * @param  {string} url      - The URL to mutate.
 * @param  {string} [scheme] - The URL scheme to prepend.
 * @return {string} Returns the mutated URL.
 */
function prependSchemeToUrl(url, scheme = 'http') {
    if (regexUrlStartsWithProtocol.test(url)) {
        return url.replace(regexUrlStartsWithProtocol, `${scheme}://`);
    }

    return `${scheme}://${url}`;
}

/**
 * Determines whether the passed value is a string with at least one character.
 *
 * @param  {*} value - The value to be checked.
 * @return {boolean} Returns `true` if the value is a non-empty string,
 *     otherwise `false`.
 */
function isNonEmptyString(value) {
    return (typeof value === 'string' && value.length > 0);
}
