const removeHTMLTags = require("devstorm/removeHTMLTags")

// Test Case - 1
let tag1 = "<h1>Hello World!</h1>"
if (removeHTMLTags(tag1) === "Hello World!") {
    console.log("Test Case 1 passed.");
} else {
    console.log("Test Case 1 failed.");
}

// Test Case - 2
let tag2 = "<span>Hello World!</span>"
if (removeHTMLTags(tag1) === "Hello World!") {
    console.log("Test Case 2 passed.");
} else {
    console.log("Test Case 2 failed.");
}

// Test Case - 3
let tag3 = "<p>Hello World!</p>"
if (removeHTMLTags(tag1) === "Hello World!") {
    console.log("Test Case 3 passed.");
} else {
    console.log("Test Case 3 failed.");
}