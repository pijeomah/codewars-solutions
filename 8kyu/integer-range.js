// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)


//My Solution
function generateRange(min, max, step){
    let arr= []
  for(let i = min; i <= max; i+= step ){
     arr.push(i)
  }
  return arr
  }