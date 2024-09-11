/**
 * You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):
 */

//SOLUTION FOR THE PROBLEM TO THE CODE
const areaOrPerimeter = function(length, width) {
    if (length === width) {
      // It's a square, return its area
      return length * length;
    } else {
      // It's a rectangle, return its perimeter
      return 2 * (length + width);
    }
  };s