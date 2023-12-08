// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!

// Note
// 1 Dollar = 100 Cents

//My Solution
function fuelPrice(litres, pricePerLitre) {
    if(litres >= 2 && litres < 4){
      let tp1 = litres * (pricePerLitre - .05)
      return Number(tp1.toFixed(2))
    }else if(litres >= 4 && litres < 6){
      let tp2 = litres * (pricePerLitre - .10)
        return Number(tp2.toFixed(2))
    }else if(litres >= 6 && litres < 8){
      let tp2 = litres * (pricePerLitre - .15)
        return Number(tp2.toFixed(2))
    }else if(litres >= 8 && litres < 10){
      let tp2 = litres * (pricePerLitre - .2)
        return Number(tp2.toFixed(2))
    }else if(litres >= 10){
      let tp2 = litres * (pricePerLitre - .25)
        return Number(tp2.toFixed(2))
    }
     
   }