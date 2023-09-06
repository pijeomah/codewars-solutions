// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

//Solution
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let sqAge1 = age1 * age1
      let sqAge2 = age2 * age2
        let sqAge3 = age3 * age3
          let sqAge4 = age4 * age4
          let sqAge5 = age5 * age5
          let sqAge6 = age6 * age6
          let sqAge7 = age7 * age7
          let sqAge8 = age8 * age8
          
          let squareSum = sqAge1 + sqAge2 + sqAge3 + sqAge4 + sqAge5 + sqAge6 + sqAge7 + sqAge8
        let root = Math.sqrt(squareSum)
        return Math.floor(root / 2)
        
  }