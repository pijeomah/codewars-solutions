// git


function remove (string) {
    //coding and coding....
    
    if(string.charAt(string.length-1) === '!'){
      return string.slice(0,-1);
    }else{return string}
    
  }
  
  console.log(remove('!Hi!'))