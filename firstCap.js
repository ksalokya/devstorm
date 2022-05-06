function firstCap(str){
    str = str.toLowerCase()
    
    return str.split(' ')
        .map(text =>
            text[0].toUpperCase()
                .concat(text.slice(1))
        )
        .join(' ');
}

module.exports = firstCap