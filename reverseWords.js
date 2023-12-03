/**
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.
*/

//SOLUTION
function reverseWords(str) {
  // Split the string into an array of words
  const wordsArray = str.split(' ');

  // Reverse the order of the words in the array
  const reversedArray = wordsArray.reverse();

  // Join the reversed array back into a string
  const reversedString = reversedArray.join(' ');

  // Return the final reversed string
  return reversedString;
}

//A SHORTER AND MORE CONCISE SOLUTION
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

