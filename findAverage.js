/**
 * Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.


 */

//SOLUTION FOR THE PROBLEM!
function findAverage(array) {
    if (array.length === 0) {
      return 0;
    } else {
      const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
      const average = sum / array.length;
  
      return average;
    }
  }