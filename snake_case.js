function snake(str) {
    str = str.toLowerCase()

    return str.split(' ').join('_');
}

module.exports = snake