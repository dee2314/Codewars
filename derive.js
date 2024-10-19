/**
 * This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.
 */

//SOLUTION POR LA PROBLEMA
function derive(coefficient, exponent) {
    const newCoefficient = coefficient * exponent;
    const newExponent = exponent - 1;
  
    if (newExponent === 0) {
      return newCoefficient.toString();
    } else if (newExponent === 1) {
      return `${newCoefficient}x`;
    } else {
      return `${newCoefficient}x^${newExponent}`;
    }
  }