// DESCRIPTION:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//My solution
function invert(array) {
    let inverted = array.map(x => {
      if(x === Math.abs(x)){
        return -Math.abs(x)
      }else{return Math.abs(x)}
    })
    return inverted
  }


  //Best Practice

  const invert = array => array.map(num => -num);