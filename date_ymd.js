const util = require("./format_date_util")

function date_ymd() {
    let newDate = util(new Date());
    return [newDate.year, newDate.month, newDate.day].join('-');
}

module.exports = date_ymd
