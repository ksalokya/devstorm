/**
 * Converts today's date to yyyy-mm-dd format.
 *
 * @since 1.0.0
 * @category Date
 * @param {-}
 * @returns {string}
 */

const util = require("./format_date_util")

function date_ymd() {
    let newDate = util(new Date());
    return [newDate.year, newDate.month, newDate.day].join('-');
}

module.exports = date_ymd
