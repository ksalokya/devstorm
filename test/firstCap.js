const firstCap = require("devstorm/firstCap")

// Test Case - 1
if (firstCap("abcd efgh") === "Abcd Efgh") {
    console.log("Test Case 1 passed.");
} else {
    console.log("Test Case 1 failed.");
}

// Test Case - 2
if (firstCap("abcd efgh ijkl") === "Abcd Efgh Ijkl") {
    console.log("Test Case 2 passed.");
} else {
    console.log("Test Case 2 failed.");
}

// Test Case - 3
if (firstCap("abcd") === "Abcd") {
    console.log("Test Case 3 passed.");
} else {
    console.log("Test Case 3 failed.");
}