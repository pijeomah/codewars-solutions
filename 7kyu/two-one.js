// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


//My solution
function longest(s1, s2) {
    // your code
    let concatStr = s1 + s2
    const stringArr = concatStr.split('')
    const stringSet = new Set(stringArr)
    let newArr = Array.from(stringSet)
    return newArr.sort().join('')
  }

  //Other Solution
  const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')