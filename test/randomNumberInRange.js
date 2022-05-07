const randomNum = require("devstorm/randomNumberInRange")

// Test Case - 1
// Range => 1 - 100
let num1 = randomNum(1, 100)
if (num1 >= 1 && num1 <= 100) {
    console.log("Test Case 1 passed.");
} else {
    console.log("Test Case 1 failed.");
}

// Test Case - 2
// Range => 50 - 120
let num2 = randomNum(50, 120)
if (num2 >= 50 && num2 <= 120) {
    console.log("Test Case 2 passed.");
} else {
    console.log("Test Case 2 failed.");
}

// Test Case - 3
// Range => -70 - 400
let num3 = randomNum(-70, 400)
if (num3 >= -70 && num3 <= 400) {
    console.log("Test Case 3 passed.");
} else {
    console.log("Test Case 3 failed.");
}