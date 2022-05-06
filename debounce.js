let timer;

function debounce(callback, time) {
    window.clearTimeout(timer);
    timer = window.setTimeout(callback, time);
}

module.exports = debounce