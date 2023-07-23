// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

//Solution
function capitalize(s){
    let splitArr = s.split('')
      let mapped1 = splitArr.map((el,i)=>{
        if(i % 2 === 0){
      return el.toUpperCase()
        }else{
          return el
        }
      })
      
      
      let mapped2 = splitArr.map((el,i)=>{
        if(i % 2 !== 0){
      return el.toUpperCase()
        }else{
          return el
        }
      })
      let odd = mapped1.join('')
      let even = mapped2.join('')
      return [odd,even]
      
  };