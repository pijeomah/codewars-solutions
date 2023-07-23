// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

// Please also try:

// Simple time difference

// Simple remove duplicates

function solve(s){
    let arr = Array.from(s)
    let ucCount =arr.reduce((acc, c) => {
      return acc += c.toUpperCase() === c
    },0)
    let lcCount = arr.reduce((acc,c)=> {
      return acc += c.toLowerCase() === c
    }, 0)
    
    if(ucCount > lcCount){
      return s.toUpperCase()
    }else if(lcCount > ucCount ){
      return s.toLowerCase()
    }else if(ucCount == lcCount){
       return s.toLowerCase()
    }
  }
  
  console.log(solve('CoDE'))

  function solve(s){
    let upper = s.split('').filter(x => x === x.toUpperCase()).length
    let lower = s.length - upper
    return (upper > lower) ? s.toUpperCase() : s.toLowerCase() 
  }