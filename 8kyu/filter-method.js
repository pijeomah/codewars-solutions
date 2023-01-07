// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

//My Solution
Array.prototype.filter = function (func) {
    // create an empty array
       let empty = []
       //create a for loop to iterate through the given array  
         for(let i = 0; i < this.length; i++){
       // create a conditional that evaluates if the particular element mmets the conditon func
           if(func(this[i])){
             empty.push(this[i])
           } 
         }
         return empty
       }