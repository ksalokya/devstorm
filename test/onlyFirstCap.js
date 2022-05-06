const onlyFirstCap = require("updev/onlyFirstCap")

// Test Case - 1
if (onlyFirstCap("abcd efgh") === "Abcd efgh") {
    console.log("Test Case 1 passed.");
} else {
    console.log("Test Case 1 failed.");
}

// Test Case - 2
if (onlyFirstCap("abcd efgh ijkl") === "Abcd efgh ijkl") {
    console.log("Test Case 2 passed.");
} else {
    console.log("Test Case 2 failed.");
}

// Test Case - 3
if (onlyFirstCap("abcd") === "Abcd") {
    console.log("Test Case 3 passed.");
} else {
    console.log("Test Case 3 failed.");
}