/**
 * Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
 */

//SOLUTION
function replace(s) {
    // Define vowels
    const vowels = 'aeiouAEIOU';
    
    // Initialize an empty string to store the result
    let result = '';
    
    // Iterate over each character in the input string
    for (let i = 0; i < s.length; i++) {
      // If the current character is a vowel, replace it with '!'
      if (vowels.includes(s[i])) {
        result += '!';
      } else {
        // If the current character is not a vowel, keep it unchanged
        result += s[i];
      }
    }
    
    // Return the final result
    return result;
  }