// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//My solution
var capitals = function (word) {
    let wordArr = word.split('')
    let empty = []
    wordArr.filter((el,i)=> {
      if(el !== el.toUpperCase()){
        return el
      }else if(el === el.toUpperCase()){
        empty.push(i)
      }
    })
    return empty
}