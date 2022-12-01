// DESCRIPTION:
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

//My Solution

function getNumberFromString(s) {
    numArr = s.split('')
    const digits = numArr.filter(x => x >= '0' && x <= '9')
    return Number(digits.join(''))
   }
   
   
   console.log(getNumberFromString("hell5o wor6ld"))
   