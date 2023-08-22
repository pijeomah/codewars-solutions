// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"


//My solution
function hello(name) {
    if(name){
       return 'Hello, ' + name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)+ '!'
     }else  if(name == '' || name == undefined){
       return 'Hello, World!'
     }
     console.log(name)
   }