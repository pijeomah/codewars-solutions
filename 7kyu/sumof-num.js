// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0
//Solution
var SequenceSum = (function() {
    function SequenceSum() {}
  
   SequenceSum.showSequence = function(count) {
  //create a condition for when count is equals to 0
     let sum = 0
     let str = ""
     if(count === 0){
       return "0=0"
     //create contdition for when count is less than 0
     }else if(count < 0){
       return "< 0"
    // default condition for when count meets requirement 
     }else{
       //create a loop that will go over the numbers and add them or concatenate them
       for(let i=0; i < count; i ++){
         str += i + "+"
         sum += i
       }
       
       sum += count 
       str += count + " = " + sum     
       return str
     }
     
    };
  
    return SequenceSum;
  
  })();