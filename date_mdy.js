const util = require("./format_date_util")

function date_mdy() {
    let newDate = util(new Date());
    return [newDate.month, newDate.day, newDate.year].join('-');
}

module.exports = date_mdy
