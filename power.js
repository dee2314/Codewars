/**
 * The function takes in 2 inputs x and y, and should return x to the power of y

Simple, right? But you're NOT allowed to use Math.pow();

Obs: x and y will be naturals, so DON'T take fractions into consideration;

Note : zero to the power of zero equals one in this kata

Great coding <3
 */

//SOLUTION

function power(x, y) {
    if (y === 0) {
      return 1;
    }
  
    let result = 1;
    for (let i = 0; i < y; i++) {
      result *= x;
    }
  
    return result;
  }