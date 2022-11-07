// DESCRIPTION:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    let newStr = s.sort()
    let firstWord = newStr[0]
    let firstSplit = firstWord.split('')
    let starred = firstSplit.join('***')
    return starred
    
  }