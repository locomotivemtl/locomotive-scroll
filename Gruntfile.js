/**
 * Grunt Task Wrangler
 *
 * @copyright Copyright © 2016 Locomotive
 * @license   Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt)
{
    var path = require('path');

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'build/grunt/config'),
        data: {
            paths: {
                grunt: 'build/grunt',
                npm:   'node_modules',
                js: {
                    src:  'assets/scripts',
                    dist: 'www/assets/scripts'
                },
                css: {
                    src:  'assets/styles',
                    dist: 'www/assets/styles'
                },
                img: {
                    src:  'assets/images',
                    dist: 'www/assets/images'
                }
            }
        }
    });
};
