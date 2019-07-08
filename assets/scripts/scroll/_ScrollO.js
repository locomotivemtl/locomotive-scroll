// ==========================================================================
// Extended Locomotive Scroll
// ==========================================================================
/* jshint esnext: true */
import Scroll, { EVENT_KEY as VENDOR_EVENT_KEY, EVENT as VENDOR_EVENTS, DEFAULTS as VENDOR_DEFAULTS } from './vendors/Scroll'

/**
 * UNCOMMENT ONLY THE LINES YOU NEED
 */
// import { $window, $document } from '../../utils/environment';
// import debounce from '../../utils/debounce';
// import { isNumeric } from '../../utils/is';

export const EVENT_KEY = VENDOR_EVENT_KEY;

export const EVENT = Object.assign(VENDOR_EVENTS, {
    // TEST: `test.${EVENT_KEY}`
});

export const DEFAULTS = Object.assign(VENDOR_DEFAULTS, { });

export default class extends Scroll {
    constructor(options) {
        super(options)
    }
}
