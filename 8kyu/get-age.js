// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

//My solution
function getAge(inputString){
    let nuevo = inputString.split('')
    let numero = nuevo.shift()
    return Number(numero)
    }


    //Alt Solution
    function getAge(inputString){
        return parseInt(inputString[0]); 
      }