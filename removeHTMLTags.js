function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
};

module.exports = removeHTMLTags