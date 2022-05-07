/**
 * Used to trigger function after some interval.
 *
 * @since 1.0.0
 * @category Function
 * @param {callback, time}
 * @returns {object}
 */

function triggerFnPerInterval(callback, time) {
    return setInterval(callback, time || 0);
}

module.exports = triggerFnPerInterval