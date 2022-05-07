/**
 * Converts string to Pascal Case.
 *
 * @since 1.0.0
 * @category String
 * @param {string}
 * @returns {string}
 */

function pascal(str) {
    str = str.toLowerCase()

    return str.split(' ')
        .map(text =>
            text[0].toUpperCase()
                .concat(text.slice(1))
        )
        .join('');
}

module.exports = pascal