// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then,

// ((P-1)! + 1) / (P * P)
// should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

//My Solution
function amIWilson(P) {
  
    function factorial(n){
      if(n === 0){
        return 1
      }else{
        return n * factorial(n-1)
      }
    }
   return (factorial(P-1) + 1) % (P * P) === 0
    
    }
    
  //Other solution(the first solution doesn not work on 563)
  function amIWilson(P) {
    const knownWilsonPrimes = [5,13,563]
    return knownWilsonPrimes.includes(P)
    }
    
      