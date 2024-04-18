/**
 * An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
 */

//SOLUTION
var isAnagram = function(test, original) {
    // Convert both strings to lowercase to make the comparison case-insensitive
    test = test.toLowerCase();
    original = original.toLowerCase();
    
    // If the lengths of the strings are different, they can't be anagrams
    if (test.length !== original.length) {
        return false;
    }
    
    // Convert the strings to arrays of characters and sort them
    var testArray = test.split("").sort();
    var originalArray = original.split("").sort();
    
    // Compare the sorted arrays
    for (var i = 0; i < testArray.length; i++) {
        if (testArray[i] !== originalArray[i]) {
            return false;
        }
    }
    
    // If all characters match, the strings are anagrams
    return true;
};

// Test cases
console.log(isAnagram("foefet", "toffee")); // Output: true
console.log(isAnagram("Buckethead", "DeathCubeK")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false