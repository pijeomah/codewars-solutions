// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.



//My solution
function isSortedAndHow(array) {
    for(let i = 0; i < array.length; i++){
       if(array[i] < array[i+1]){
      return "yes, ascending"
    }else if(array[i] >= array[i+1] && array[i+1] >= array[i+2]){
      return "yes, descending"
    }else{
      return "no"
    }
    }
   
  }