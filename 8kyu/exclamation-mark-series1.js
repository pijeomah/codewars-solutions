// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"


function remove (string) {
    //coding and coding....
    
    if(string.charAt(string.length-1) === '!'){
      return string.slice(0,-1);
    }else{return string}
    
  }
  
  console.log(remove('!Hi!'))