// DESCRIPTION:
// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

//My Solution
function getDrinkByProfession(param){
    let newParam = param.toUpperCase()
    if(newParam === "Jabroni".toUpperCase()){
      return "Patron Tequila"
    }else if(newParam === "School Counselor".toUpperCase()){
      return "Anything with Alcohol"
    }else if(newParam === "Programmer".toUpperCase()){
      return "Hipster Craft Beer"
    }else if(newParam === "Bike Gang Member".toUpperCase()){
      return "Moonshine"
    }else if(newParam === "Politician".toUpperCase()){
      return "Your tax dollars"
    }else if(newParam === "Rapper".toUpperCase()){
      return "Cristal"
    }else{return "Beer"}
  
  }

  //Better Practice
  function getDrinkByProfession(param) {
    param = param.toLowerCase();
    
    switch(param) {
      case "jabroni": return "Patron Tequila";
      case "school counselor": return "Anything with Alcohol";
      case "programmer": return "Hipster Craft Beer";
      case "bike gang member": return "Moonshine";
      case "politician": return	"Your tax dollars";
      case "rapper": return "Cristal";
      default: return "Beer";
    }
  }