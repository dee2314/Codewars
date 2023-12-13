/**Remove n exclamation marks in the sentence from left to right. n is positive integer. */

//SOLUTION
function remove(s, n) {
    let result = '';
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '!' && n > 0) {
        n--;
      } else {
        result += s[i];
      }
    }
  
    return result;
  }