/**
 * Used to trigger function per second.
 *
 * @since 1.0.0
 * @category Function
 * @param {callback, time}
 * @returns {object}
 */

function triggerFnPerSecond(callback) {
    return setInterval(callback, 1000);
}

module.exports = triggerFnPerSecond
