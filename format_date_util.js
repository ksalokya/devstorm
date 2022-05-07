/**
 * Utility function used in date functions of this package.
 *
 * @since 1.0.0
 * @category Date
 * @param {-}
 * @returns {object}
 */


function format_date_util() {
    let newDate = new Date();
    let month = '' + (newDate.getMonth() + 1);
    let day = '' + newDate.getDate();
    let year = newDate.getFullYear();

    if (day.length < 2) day = '0' + day;
    if (month.length < 2) month = '0' + month;

    return {day, month, year};
}

module.exports = format_date_util