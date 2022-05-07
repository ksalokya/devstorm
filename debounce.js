/**
 * Used to debounce api calls.
 * Note - This function is tested on DOM.
 *
 * @since 1.0.0
 * @category Function
 * @param {callback, time}
 * @returns {-}
 */

let timer;

function debounce(callback, time) {
    window.clearTimeout(timer);
    timer = window.setTimeout(callback, time);
}

module.exports = debounce