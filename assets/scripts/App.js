/* jshint esnext: true */
import { $document, $body } from './utils/environment';
import { getNodeData } from './utils/html';

// Basic modules
import * as modules from './modules';

class App {
    constructor() {
        this.modules = modules;
        this.currentModules = [];

        $document.on('initModules.App', (event) => {
            this.deleteModules()
                .initModules();
        });
    }

    /**
     * Destroy all existing modules
     * @return  {Object}  this  Allows chaining
     */
    deleteModules() {
        // Loop modules
        var i = this.currentModules.length;

        // Destroy all modules
        while (i--) {
            this.currentModules[i].destroy();
            this.currentModules.splice(i);
        }

        return this;
    }

    /**
     * Find modules and initialize them
     * @return  {Object}  this  Allows chaining
     */
    initModules() {
        // Elements with module
        var moduleEls = document.querySelectorAll('[data-module]');

        // Loop through elements
        var i = 0;
        var elsLen = moduleEls.length;

        for (; i < elsLen; i++) {

            // Current element
            let el = moduleEls[i];

            // All data- attributes considered as options
            let options = getNodeData(el);

            // Add current DOM element and jQuery element
            options.el = el;
            options.$el = $(el);

            // Module does exist at this point
            let attr = options.module;

            // Splitting modules found in the data-attribute
            let moduleIdents = attr.replace(/\s/g, '').split(',');

            // Loop modules
            let j = 0;
            let modulesLen = moduleIdents.length;

            for (; j < modulesLen; j++) {
                let moduleAttr = moduleIdents[j];

                if (typeof this.modules[moduleAttr] === 'function') {
                    let module = new this.modules[moduleAttr](options);
                    this.currentModules.push(module);
                }
            }
        }

        return this;
    }
}

// IIFE for loading the application
// ==========================================================================
(function() {
    window.App = new App();
    $document.trigger({
        type: 'initModules.App',
        firstBlood: true
    });

    $document.on('SmoothScroll.isReady', (event) => {
        $body.addClass('is-loaded');
    });
})();
