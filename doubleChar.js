/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "*/


//SOLUTION
function doubleChar(str) {
    // Your code here
    let result = '';
    
    for (let i = 0; i < str.length; i++){
      result += str.charAt(i) + str.charAt(i);
    }
    
    return result
  }
//charAt means the character directory