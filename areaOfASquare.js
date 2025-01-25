/**Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Graph

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
 * 
 */


//SOLUTION FOR THE PROBLEM
function squareArea(A) {
    const radius = (2 * A) / Math.PI; // Calculate the radius of the circle
    const side = radius; // The side of the square equals the radius of the circle
    const area = side * side; // Calculate the area of the square
    return parseFloat(area.toFixed(2)); // Round to two decimal places
  }

