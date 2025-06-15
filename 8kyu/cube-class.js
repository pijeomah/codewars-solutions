// Hey Codewarrior!

// In the previous kata, you have implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code one (or more) such that one can instantiate an object via it, handling either no arguments or a single integer.

// Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

// The constructor taking no arguments should assign 0 to Cube's Side property.

class Cube {
    constructor(side){
      this.setSide(side)
    //   the constructor calls the setSide function that converts negative ints to positive and sets defualt as 0
    }
    
    getSide() {
      return this.side; 
    //   returns value for the length set by the setter
    }
    setSide(side = 0) {
     this.side = Math.abs(side);
    }
  }