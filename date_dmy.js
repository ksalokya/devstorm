const util = require("./format_date_util")

function date_dmy() {
    let newDate = util(new Date());
    return [newDate.day, newDate.month, newDate.year].join('-');
}

module.exports = date_dmy

