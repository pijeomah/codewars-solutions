// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//My solution
function findShort(s){
    let splitStr = s.split(' ')
   let lengths = splitStr.map(el =>  el.length
   )
   let min =  Math.min(...lengths)
   return min
  }