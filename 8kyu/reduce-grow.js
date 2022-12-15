// DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//My solution

function grow(x){
    let sorted = x.sort()
    return sorted.reduce((acc,c) => acc * c,0)
  }

  //BP
  const grow=x=> x.reduce((a,b) => a*b);