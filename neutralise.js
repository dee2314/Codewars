/**
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
When negatives and positives interact, they become neutral, and are shown as the number 0.
*/

//SOLUTION FOR THE PROBLEM
function neutralise(s1, s2) {
  if (s1.length !== s2.length) {
    // Handle strings of different lengths, if needed
    return "Input strings must have the same length";
  }

  let result = "";
  
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === '+' && s2[i] === '+') {
      result += '+';
    } else if (s1[i] === '-' && s2[i] === '-') {
      result += '-';
    } else {
      result += '0';
    }
  }
  
  return result;
}
