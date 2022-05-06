let flag = false;
function throttle (callback, time) {

    if (flag)
        return;

    flag = true;

    setTimeout(() => {
        callback();
        flag = false;
    }, time);
};

module.exports = throttle