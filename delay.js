function delay(callback, time){
    return setTimeout(callback,time || 0);
}

module.exports = delay