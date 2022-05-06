const pascal =  require("updev/PascalCase")

function camel(str){
    str = pascal(str)
    return str[0].toLowerCase() + str.slice(1);
}

module.exports = camel
