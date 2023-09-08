/**Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0 */

//SOLUTION
function strCount(str, letter){  
    //code here
    let count = 0;
    
    for (let i = 0; i < str.length; i++){
      if (str[i] === letter){
        count++;
      }
    }
    
    return count
    
  };


//OPTIMIZED SOLUTION
function strCount(str, letter){  
  return str.split(letter).length-1
}

//Notes 
/*Be sure to understand why split works a bit better. 
 It works by splitting the string into an array using the specified letter as 
 the delimiter and then counting the number of resulting segments minus one. 
 The subtraction of 1 is necessary because 
the split method splits the string at the specified delimiter, 
and the number of resulting segments is one more than the count of occurrences.*/