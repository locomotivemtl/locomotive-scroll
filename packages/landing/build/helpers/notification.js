/**
 * @file Provides a decorator for cross-platform notification.
 */

import notifier from 'node-notifier';

/**
 * Sends a cross-platform native notification.
 *
 * Wraps around node-notifier to assign default values.
 *
 * @param  {string|object} options         - The notification options or a message.
 * @param  {string}        options.title   - The notification title.
 * @param  {string}        options.message - The notification message.
 * @param  {string}        options.icon    - The notification icon.
 * @param  {function}      callback        - The notification callback.
 * @return {void}
 */
function notification(options, callback) {
    if (typeof options === 'string') {
        options = {
            message: options
        };
    } else if (!options.title && !options.message) {
        throw new TypeError(
            'Notification expects at least a \'message\' parameter'
        );
    }

    if (typeof options.icon === 'undefined') {
        options.icon = 'https://user-images.githubusercontent.com/4596862/54868065-c2aea200-4d5e-11e9-9ce3-e0013c15f48c.png';
    }

    // If notification does not use a callback,
    // shorten the wait before timing out.
    if (typeof callback === 'undefined') {
        if (typeof options.wait === 'undefined') {
            if (typeof options.timeout === 'undefined') {
                options.timeout = 5;
            }
        }
    }

    notifier.notify(options, callback);
}

export default notification;

export {
    notification,
};
