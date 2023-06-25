// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

//My solution

function minMax(arr){
    let newArr = []
    let sorted = arr.sort((a,b)=> a-b)
   for(let i=0; i < 1; i++){
    newArr.push(sorted[0])
    newArr.push(sorted[sorted.length-1])
   }
   return newArr
  }


  //Other solutin
  function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }

