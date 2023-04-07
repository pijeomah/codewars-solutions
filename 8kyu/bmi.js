// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//My Solution

function bmi(weight, height) {
    let BMI = weight/(height**2)
    if(BMI <= 18.5){
      return 'Underweight'
    }else if(BMI <= 25){
      return 'Normal'
    }else if(BMI <= 30){
      return 'Overweight'
    }else{
      return 'Obese'
    }
   }