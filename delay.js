/**
 * Used to delay any function call by some time t secs.
 *
 * @since 1.0.0
 * @category Api
 * @param {callback, time}
 * @returns {object}
 */

function delay(callback, time) {
    return setTimeout(callback, time);
}

module.exports = delay