const isLeap = require("updev/isLeap")

// Test Case - 1
if (isLeap(2020)) {
    console.log("Test Case 1 passed.");
} else {
    console.log("Test Case 1 failed.");
}

// Test Case - 2
if (isLeap(2024)) {
    console.log("Test Case 2 passed.");
} else {
    console.log("Test Case 2 failed.");
}

// Test Case - 3
if (!isLeap(2019)) {
    console.log("Test Case 3 passed.");
} else {
    console.log("Test Case 3 failed.");
}