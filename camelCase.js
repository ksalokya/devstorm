/**
 * Converts string to Camel Case.
 *
 * @since 1.0.0
 * @category String
 * @param {string}
 * @returns {string}
 */

const pascal = require("./PascalCase")

function camel(str) {
    str = pascal(str)
    return str[0].toLowerCase() + str.slice(1);
}

module.exports = camel
