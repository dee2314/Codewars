/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined*/

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  return arrayOfSheep.filter(Boolean).length
}

/**What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space. */

function addLength(str) {
  //start-here
   return str.split(" ").map(s => `${s} ${s.length}`)
    };

/*Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"
    
After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:
    
Example(Input --> Output)*/

function findNeedle(haystack) {
  // your code here
  const needleIndex = haystack.indexOf('needle');
  return `found the needle at position ${needleIndex}`
}

/**Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order. */
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

/**This code does not execute properly. Try to figure out why. */
/* ORIGINAL CODE function multiply(a, b){
a * b*/
//SOLUTION 
 function multiply (a,b){
return a * b
};

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
  //...
   return bool ? 'Yes':'No';
}

/*Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' */

//Solution
function solution(str){
  return str.split('').reverse().join('');  
}

/** Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/
//SOLUTION
function maps(x){
  return x.map(n => n * 2);
}
/** Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.*/
//SOLUTION
function sumTwoSmallestNumbers(numbers) {  
  let first = Math.min(...numbers)
  numbers.splice(numbers.indexOf(first), 1)
  let second = Math.min(...numbers)
  return first + second
}
/** */
/** */
/** */
