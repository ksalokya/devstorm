/**
 * Converts today's date to mm-dd-yyyy format.
 *
 * @since 1.0.0
 * @category Date
 * @param {-}
 * @returns {string}
 */

const util = require("./format_date_util")

function date_mdy() {
    let newDate = util(new Date());
    return [newDate.month, newDate.day, newDate.year].join('-');
}

module.exports = date_mdy
