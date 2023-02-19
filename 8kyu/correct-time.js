// DESCRIPTION:
// A new task for you!

// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
// Examples
// "09:10:01" -> "09:10:01"  
// "11:70:10" -> "12:10:10"  
// "19:99:99" -> "20:40:39"  
// "24:01:01" -> "00:01:01"  
// If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

//My solution

function timeCorrect(timestring) {
    //create a condition that returns null if the timestring is a null value
    if (timestring != null) {
        return null
    }
    //return the timestring value if it is an empty string
    if(!timestring){
     return timestring
    }
    //split the timestring into an array using the : as a delimiter
    newArr = timestring.split(":")
    //create a that caters for a case where the seconds are greater than 59
    if(newArr[2] > 59){
     //create a variable that holds the rounded down value of dividing the third item in the array by 60 
     let least = Math.floor(newArr[2]/ 60)
     //assign the third item the remainder of dividing it by 60
     newArr[2] = newArr[2] % 60
     //add the least variable to the second item in the array and multiply by one
     newArr[1] = 1*newArr[1] + least
    }
    if(newArr[1] > 59){
     least = Math.floor(newArr[1] / 60)
     newArr[1] = newArr[1] % 60
     newArr[0] = 1 * newArr[0] + least
   }
   
   if(newArr[0] > 23){
     newArr[0] = newArr[0] % 24
   }
   
   return newArr.map((item) => {
     if(item < 10 && (typeof item == 'number')){
       item = '0' + item
     }
     return item
   }).join(':')
   
    }
    console.log(timeCorrect("0a:1c:22"))