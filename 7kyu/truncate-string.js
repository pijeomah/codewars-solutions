// Note that inserting the three dots to the end will add to the string length.

// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

// Examples
// ('codewars', 9)  ==>  'codewars'
// ('codewars', 7)  ==>  'code...'
// ('codewars', 2)  ==>  'co...'
// Taken from FCC

//My Solution
function truncateString(str, num) {
	if(num >= str.length) return str
  if(num <= 3){
    return str.slice(0, num) + '...'
  }else{
    return str.slice(0, num -3) + '...'
  }
}