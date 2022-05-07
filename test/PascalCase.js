const PascalCase = require("devstorm/PascalCase")

// Test Case - 1
if (PascalCase("abcd efgh") === "AbcdEfgh") {
    console.log("Test Case 1 passed.");
} else {
    console.log("Test Case 1 failed.");
}

// Test Case - 2
if (PascalCase("abcd efgh ijkl") === "AbcdEfghIjkl") {
    console.log("Test Case 2 passed.");
} else {
    console.log("Test Case 2 failed.");
}

// Test Case - 3
if (PascalCase("abcd") === "Abcd") {
    console.log("Test Case 3 passed.");
} else {
    console.log("Test Case 3 failed.");
}