
// DESCRIPTION:
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

function sumOfDifferences(arr) {
    arr.sort((a,b) => b-a)
    let sum = 0
    for(let i = 0; i < arr.length-1; i++){
      sum = sum + arr[i] - arr[i + 1]
    }
    return sum
  }