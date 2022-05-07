const camelCase = require("devstorm/camelCase")

// Test Case - 1
if (camelCase("abcd efgh") === "abcdEfgh") {
    console.log("Test Case 1 passed.");
} else {
    console.log("Test Case 1 failed.");
}

// Test Case - 2
if (camelCase("abcd efgh ijkl") === "abcdEfghIjkl") {
    console.log("Test Case 2 passed.");
} else {
    console.log("Test Case 2 failed.");
}

// Test Case - 3
if (camelCase("abcd") === "abcd") {
    console.log("Test Case 3 passed.");
} else {
    console.log("Test Case 3 failed.");
}