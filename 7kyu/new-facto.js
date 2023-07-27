// Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

// 

//Solution
function factorial(n){
    if(n === 0 || n === 1){
      return 1
    }
    for(let i = n - 1; i >= 1; i-- ){
     n *= i
    }
    
    return n
  }