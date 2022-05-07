function triggerFnPerInterval(callback, time) {
    return setInterval(callback, time || 0);
}

module.exports = triggerFnPerInterval
