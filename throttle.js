/**
 * Used to debounce api calls.
 * Note - This function is tested on DOM.
 *
 * @since 1.0.0
 * @category Function
 * @param {callback, time}
 * @returns {-}
 */

let flag = false;

function throttle(callback, time) {
    if (flag)
        return;

    flag = true;

    setTimeout(() => {
        callback();
        flag = false;
    }, time);
};

module.exports = throttle