/**
 * Used to delay any function call by some time which is passed as parameter.
 *
 * @since 1.0.0
 * @category Api
 * @param {callback, time}
 * @returns {object}
 */

function delay(callback, time) {
    return setTimeout(callback, time || 0);
}

module.exports = delay