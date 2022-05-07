/**
 * Converts string to Snake Case.
 *
 * @since 1.0.0
 * @category String
 * @param {string}
 * @returns {string}
 */

function snake(str) {
    str = str.toLowerCase()

    return str.split(' ').join('_');
}

module.exports = snake