// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

//My solution

const opposite = (number) => number === Math.abs(number) ? -Math.abs(number) : Math.abs(number)

//Ilike this solution
function opposite(number) {
    return number/-1;
  }