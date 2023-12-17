/**
 * It's the academic year's end, fateful moment of your school report. 
 * The averages must be calculated. All the students come to you and entreat you to calculate 
 * their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
 * 
 */

//SOLUTION
function getAverage(marks) {
    const sum = marks.reduce((acc, mark) => acc + mark, 0);
    const average = sum / marks.length;
    
    // Round down to the nearest integer
    return Math.floor(average);
  }
  