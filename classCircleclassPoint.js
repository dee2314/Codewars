/**
 * This series of katas will introduce you to basics of doing geometry with computers.

Write the itty bitty function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
The Circle class can be seen below:

// Represents a Circle where center is a Point and radius is a Number
class Circle {
  constructor(center, radius) { 
    this.center = center; 
    this.radius = radius;
  }
}
And the Point class can be seen below:

// Represents a Point where x and y are Numbers
class Point {
  constructor (x,y) { 
    this.x = x;
    this.y = y; 
  }
}
 */

//SOLUTION PARA LA PROBLEMA POR HOY
function circleArea(circle) {
    // Assuming circle has a center with x and y attributes, and a radius.
    const radius = circle.radius;
    const area = Math.PI * Math.pow(radius, 2);
    
    // Round the answer to 6 decimal places.
    return Math.round(area * 1e6) / 1e6;
  }