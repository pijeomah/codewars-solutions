// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291


//My solution
const uniTotal = (string) => {
    let num = 0 
    for(let i = 0; i < string.length; i++){
      num += string.charCodeAt(i)
    }
      return num
    }