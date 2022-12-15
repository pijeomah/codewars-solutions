// DESCRIPTION:
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

//My Solution
function nameShuffler(str){
    //Shuffle It
    let newArr = str.split(' ')
    newArr.splice(0,2, newArr[1],newArr[0])
    let newName = newArr.join(' ')
    return newName
    
  }
new
  //Best Practice
  function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }
  