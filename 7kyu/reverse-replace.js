// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

//My solution
function reverseLetter(str) {
    let stringArray = str.split('')
    let onlyAlpha = stringArray.filter(el => /^[a-zA-Z]+$/.test(el))
    return onlyAlpha.reverse().join("")  
      
    }
//Clever Solution
    function reverseLetter(str) {
        let reversedString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            if (str[i].toLowerCase() === str[i].toUpperCase()) {
                continue;
            }
            reversedString += str[i];
        }
        return reversedString;
    }