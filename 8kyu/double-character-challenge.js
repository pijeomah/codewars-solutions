// DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!


//My solution
function doubleChar(str) {
    // Your code here
    let newArr = str.split('')
    let doubles = newArr.map(x => x + x)
    let newDoubles = doubles.join('')
    return newDoubles

  }

  //Best Practice
  const doubleChar = (str) => str.split("").map(c => c + c).join("");