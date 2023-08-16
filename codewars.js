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
/** Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

*/
//SOLUTION
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

/**Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 */
//SOLUTION
function rowSumOddNumbers(n) {
	// TODO
  return n * n * n;
}

/** Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.*/
//SOLUTION
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
/**Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

 */
//SOLUTION
function removeEveryOther(arr){
  //your code here
  return arr.filter((element, index) => index % 2 === 0);
}

/** Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. 
 * Write a function to help Bob with this calculation.*/
//SOLUTION
class Kata {
  static getVolumeOfCuboid(l, w, h) {
    return l * w * h;
  }
};

/**You get an array of numbers, return the sum of all of the positives ones. Example [1,-4,7,12] => 1 + 7 + 12 = 20 */
//SOLUTION
function positiveSum(arr){
  let sum = 0;
  for (let i = 1; i < sum.length; i++){
      if (arr[i] > 0){
          sum += arr[i]
      }
  }
  return sum
}

