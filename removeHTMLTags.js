/**
 * Remove html tags from a string.
 *
 * @since 1.0.0
 * @category Regex
 * @param {string}
 * @returns {string}
 */

function removeHTMLTags(str) {
    return str.replace(/<[^>]*>?/gm, '');
};

module.exports = removeHTMLTags