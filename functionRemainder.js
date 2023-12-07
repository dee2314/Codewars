/**
 * Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.
 */

//SOLUTION
function remainder(a, b){
    // Divide the larger argument by the smaller argument and return the remainder
    var min = Math.min(a,b);
    var max = Math.max(a,b);
  
    return min ? max % min : NaN;
  }