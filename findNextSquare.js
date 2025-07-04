/**
 * Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square   
 */

//SOLUTION POR LA HOY, YAY


function findNextSquare(sq) {
    // Check if the square root is an integer
    let sqrt = Math.sqrt(sq);
    if (Number.isInteger(sqrt)) {
      // If it's a perfect square, return the next square
      return Math.pow(sqrt + 1, 2);
    } else {
      // If not a perfect square, return -1
      return -1;
    }
  }
