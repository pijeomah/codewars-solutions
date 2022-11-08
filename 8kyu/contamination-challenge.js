// DESCRIPTION:
// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example

//My solution
function contamination(text, char){
    // Code here ;)
    let newText = text.split('')
    let newArr = newText.map(x => char).join('')
   let fullmut = text.length == 0 || char.length == 0 ? " " : newArr
   return fullmut
  
  }
  
  console.log(contamination('abcpoofp', ''))

  //Clean Solution
  function contamination(text, char){
    return char.repeat(text.length)
  }