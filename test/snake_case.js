const snake_case = require("devstorm/snake_case")

// Test Case - 1
if (snake_case("abcd efgh") === "abcd_efgh") {
    console.log("Test Case 1 passed.");
} else {
    console.log("Test Case 1 failed.");
}

// Test Case - 2
if (snake_case("abcd efgh ijkl") === "abcd_efgh_ijkl") {
    console.log("Test Case 2 passed.");
} else {
    console.log("Test Case 2 failed.");
}

// Test Case - 3
if (snake_case("abcd") === "abcd") {
    console.log("Test Case 3 passed.");
} else {
    console.log("Test Case 3 failed.");
}