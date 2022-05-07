/**
 * Used to check if given year is leap or not.
 *
 * @since 1.0.0
 * @category Date
 * @param {year}
 * @returns {boolean}
 */


function isLeap(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    } else {
        return false;
    }
}

module.exports = isLeap