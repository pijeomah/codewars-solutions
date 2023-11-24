// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!



//Solution
function dontGiveMeFive(start, end){
    let count = 0
    for(let i=start; i<=end; i++){
      if(!String(i).includes('5')){
        count++
      }
    }
    return count
  }
