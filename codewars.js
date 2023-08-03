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
