const triggerFn = require("devstorm/triggerFnPerSecond")

let t = 1
var x;

function myFunc(){
    console.log(t)
    t++;

    if(t === 6)
        clearTimeout(x)
}

x = triggerFn(myFunc)