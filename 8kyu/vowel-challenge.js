
// DESCRIPTION:
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.





//My Solution
function isVow(a){
    return a.map(x => {
        if(x == 97){
           return 'a'
        }else if(x == 101){
           return 'e'
        }else if(x == 105){
           return 'i'
        }else if(x == 111){
           return 'o'
        }else if(x == 117){
           return 'u'
        }else{ return x}
     })
  }


  //Best Practice
  function isVow(a){
    return a.map(i => {
    if (String.fromCharCode(i) === 'a')
    return 'a';
    else if (String.fromCharCode(i) === 'e')
    return 'e';
    else if (String.fromCharCode(i) === 'i')
    return 'i';
    else if (String.fromCharCode(i) === 'o')
    return 'o';
    else if (String.fromCharCode(i) === 'u')
    return 'u';
    else 
    return i;
    })
    }