const triggerFn = require("updev/triggerFnPerSecond")

let t = 1
var x;

function myFunc(){
    console.log(t)
    t++;

    if(t === 6) clearInterval(x)
}

x = triggerFn(myFunc)