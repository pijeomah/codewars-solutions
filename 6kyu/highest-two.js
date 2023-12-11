// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

//My solution
function twoHighest(arr) {
    const uniqueSet = new Set(arr)
    const uniqueArr = [...uniqueSet]
    let lastTwo = []
    if(uniqueArr.length <= 2 ){
      return uniqueArr
    }else{
      const sorted = uniqueArr.sort((a,b) => a -b)
      for(let i=sorted.length-1; i >= sorted.length-2; i-- ){
      lastTwo.push(sorted[i])
      }
    }
    return lastTwo
  }

  //Other solution
  function twoHighest(arr) {
    let newSet = new Set(arr)
    
    return Array.from(newSet).sort((a,b) => b - a).slice(0, 2)
  }