/**
 * Converts today's date to dd-mm-yyyy format.
 *
 * @since 1.0.0
 * @category Date
 * @param {-}
 * @returns {string}
 */

const util = require("./format_date_util")

function date_dmy() {
    let newDate = util(new Date());
    return [newDate.day, newDate.month, newDate.year].join('-');
}

module.exports = date_dmy