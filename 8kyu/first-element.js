// DESCRIPTION:
// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

//My solution
// function first(arr, n) {
//     // return arr;
//     let empty = []
//     if(n == null){
//       return [arr[0]]
//     }else if(n > arr.length){
//              return arr
//              }
    
//   for(let i = 0; i < n; i++){
//     empty.push(arr[i])
//   }
//     return empty
//   }
  
//   //BEst PRactice
//   const second = (arr, n=1) => arr.slice(0,n)
