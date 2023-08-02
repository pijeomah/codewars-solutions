// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"


//My Solution
var greet = function(name) {
    let lower = name.toLowerCase()
    let capitalized = lower.charAt(0).toUpperCase() + lower.slice(1)
    return `Hello ${capitalized}!`
    };