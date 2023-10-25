/**
 * 
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.
 */

//SOLUTION
function squareOrSquareRoot(array) {

    const resultArray = [];
  
    // Iterate through the input array
    for (let i = 0; i < array.length; i++) {
      const number = array[i];
      const squareRoot = Math.sqrt(number);
  
     
      if (Number.isInteger(squareRoot)) {
        resultArray.push(squareRoot);
      } else {
        resultArray.push(number * number);
      }
    }
  
    return resultArray;
  }

