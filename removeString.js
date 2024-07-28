/**Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
 */

//SOLUTION
function remove(string) {
    // Check if the last character is an exclamation mark
    if (string.endsWith('!')) {
      // Remove the last character
      return string.slice(0, -1);
    }
    // If the last character is not an exclamation mark, return the string as is
    return string;
  }