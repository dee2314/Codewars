/** Given a string of digits, you should replace any digit below 5 with '0' 
 * and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string*/


//SOLUTION FOR THE PROBLEM!
function fakeBin(x) {
    let result = ''; // Initialize an empty string to store the result
    for (let i = 0; i < x.length; i++) {
      if (parseInt(x[i]) < 5) {
        result += '0'; // Append '0' to the result string
      } else {
        result += '1'; // Append '1' to the result string
      }
    }
    return result; // Return the final result
  }