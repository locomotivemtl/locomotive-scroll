/**
 * The `PageVisibility` interface provides support for dispatching
 * a custom event derived from the value of {@see document.visibilityState}
 * when the "visibilitychange" event is fired.
 *
 * The custom events are:
 *
 * - "visibilityhidden" representing the "hidden" visibility state.
 * - "visibilityvisible" representing the "visibile" visibility state.
 *
 * Example:
 *
 * ```js
 * import pageVisibility from './utils/visibility.js';
 *
 * pageVisibility.enableCustomEvents();
 *
 * document.addEventListener('visibilityhidden', () => videoElement.pause());
 * ```
 *
 * The dispatched event object is the same from "visibilitychange"
 * and renamed according to the visibility state.
 *
 * The `PageVisibility` interface does not manage the attachment/detachment
 * of event listeners on the custom event types.
 *
 * Further reading:
 *
 * - {@link https://www.w3.org/TR/page-visibility/ W3 Specification}
 * - {@link https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API MDN Web Docs}
 */
export default new class PageVisibility {
    /**
     * Checks if the "visibilitychange" event listener has been registered.
     *
     * @return {boolean} Returns `false` if the event listener is not registered,
     *     otherwise returns `true`.
     */
    get isEnabled() {
        return isVisibilityChangeObserved;
    }

    /**
     * Removes the "visibilitychange" event listener.
     *
     * @return {boolean} Returns `false` if the event listener was already unregistered,
     *     otherwise returns `true`.
     */
    disableCustomEvents() {
        if (isVisibilityChangeObserved) {
            isVisibilityChangeObserved = false;
            document.removeEventListener('visibilitychange', handleCustomVisibilityChange);
            return true;
        }

        return false;
    }

    /**
     * Registers the "visibilitychange" event listener.
     *
     * @return {boolean} Returns `false` if the event listener was already registered,
     *     otherwise returns `true`.
     */
    enableCustomEvents() {
        if (!isVisibilityChangeObserved) {
            isVisibilityChangeObserved = true;
            document.addEventListener('visibilitychange', handleCustomVisibilityChange);
            return true;
        }

        return false;
    }
}

/**
 * Tracks whether custom visibility event types
 * are available (`true`) or not (`false`).
 *
 * @type {boolean}
 */
let isVisibilityChangeObserved = false;

/**
 * Dispatches a custom visibility event at the document derived
 * from the value of {@see document.visibilityState}.
 *
 * @listens document#visibilitychange
 *
 * @fires PageVisibility#visibilityhidden
 * @fires PageVisibility#visibilityvisible
 *
 * @param  {Event} event
 * @return {void}
 */
function handleCustomVisibilityChange(event) {
    document.dispatchEvent(new CustomEvent(`visibility${document.visibilityState}`, {
        detail: {
            cause: event
        }
    }));
}

/**
 * The "visibilityhidden" eveent is fired at the document when the contents
 * of its tab have become hidden.
 *
 * @event PageVisibility#visibilityhidden
 * @type  {Event}
 */

/**
 * The "visibilityvisible" eveent is fired at the document when the contents
 * of its tab have become visible.
 *
 * @event PageVisibility#visibilityvisible
 * @type  {Event}
 */
