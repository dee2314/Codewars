/**
 * Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
 */

//SOLUTION
function reverseWords(str) {
    const words = str.split(' ');

    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
  
    const result = reversedWords.join(' ');
  
    return result;
  }