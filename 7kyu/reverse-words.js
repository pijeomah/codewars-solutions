// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


//My solution
function reverseWords(str) {
    const arr = str.split('').reverse().join('').split(' ').reverse().join(' ')
  
    //let rev = arr.reverse()
    return arr
  }