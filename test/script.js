const fn = require("updev/delay")

function temp(){
    console.log("hello")
}

let temp1 = fn(temp,1000)
console.log(temp1)