// DESCRIPTION:
// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

//My solution

function correctPolishLetters (string) {
    // your code
    let strArray = string.split('')
   
   let poleng = strArray.map(x => {
    if(x == 'ą'){
      return 'a'
    }else if(x == 'ć'){
      return 'c'
    }else if(x == 'ę'){
      return 'e'
    }else if(x == 'ł'){
      return 'l'
    }else if(x == 'ń'){
      return 'n'
    }else if(x == 'ó'){
      return 'o'
    }else if(x == 'ś'){
      return 's'
    }else if(x == 'ź'){
      return 'z'
    }else if(x == 'ż'){
      return 'z'
    }else{return x}
   })
  
   return poleng.join('')
  }

  //best Practice
  function correctPolishLetters (string) {
    var dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
    return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
  }