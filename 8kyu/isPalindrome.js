// Write a function that checks if a given string (case insensitive) is a palindrome.


//My Solution
function isPalindrome(x) {
    x =x.toLowerCase()
    let revX = x.split('')
    revX = revX.reverse()
    let joined = revX.join('').toLowerCase()
    if(joined == x) return true
    else{return false}
    
  }