/**
 * Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 */

//SOLUTION
function grow(x) {
    if (x.length === 0) {
      return 0;
    }
    
    return x.reduce(function (accumulator, currentValue) {
      return accumulator * currentValue;
    });
  }