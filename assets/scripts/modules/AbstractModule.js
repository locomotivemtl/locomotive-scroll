/* jshint esnext: true */
import { $document, $window, $html, $body } from '../utils/environment';

/**
 * Abstract module
 * Gives access to generic jQuery nodes
 */
export default class {
    constructor(options) {
        this.$document = $document;
        this.$window = $window;
        this.$html = $html;
        this.$body = $body;
        this.$el = options.$el;
        this.el = options.el;
    }
}
