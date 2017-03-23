/* jshint esnext: true */
import { $document } from './utils/environment';

import { getNodeData } from './utils/html';

import ScrollManager from './modules/ScrollManager';

// IIFE for loading the application
// ==========================================================================
(function() {
    // Current element
    const el = document.getElementById('js-scroll');

    // All data- attributes considered as options
    const options = getNodeData(el);

    // Add current DOM element and jQuery element
    options.el = el;
    options.$el = $(el);

    // Create module
    const scrollManager = new ScrollManager(options);
    scrollManager.init();
})();
