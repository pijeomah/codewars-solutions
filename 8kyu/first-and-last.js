
      function removeChar(str){
        //You got this!
       let strSplit = str.split('')
       newArr = strSplit.shift()
        lasArr = strSplit.pop()
      return strSplit.join('')
       
       };
       console.log(removeChar('eloquent') )      