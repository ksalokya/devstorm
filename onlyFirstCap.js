/**
 * Converts given string to the format,
 * first letter of first word is Capital
 * rest all are small.
 *
 * @since 1.0.0
 * @category String
 * @param {string}
 * @returns {string}
 */


function onlyFirstCap(str) {
    str = str.toLowerCase()

    return str[0].toUpperCase() + str.slice(1)
}

module.exports = onlyFirstCap