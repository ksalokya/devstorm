/**
 * Converts given string to the format,
 * first letter is capital of all words rest all are small.
 *
 * @since 1.0.0
 * @category String
 * @param {string}
 * @returns {string}
 */


function firstCap(str) {
    str = str.toLowerCase()

    return str.split(' ')
        .map(text =>
            text[0].toUpperCase()
                .concat(text.slice(1))
        )
        .join(' ');
}

module.exports = firstCap