// our task is to implement a function that takes two inputs, x and y, and returns the value of x raised to the power of y.

// Simple, right? But you are NOT allowed to use Math.pow();

// Both x and y will be natural numbers (non-negative integers) in range 0 <= x,y <= 13.

// Solution
function power(x,y){
    if(y===0){
      return 1
    }else{
      return x ** y
    }
  }