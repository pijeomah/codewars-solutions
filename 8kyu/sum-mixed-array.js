// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//My Solution
function sumMix(x){
    let sum = x.reduce((acc,c) => acc + Number(c), 0)
    return sum
    }

   
//Best Practice
const sumMix=x=>x.reduce((a,b)=>+b+a,0)    