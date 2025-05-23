/**
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.
*/

//SOLUTION FOR THE PROBLEM
function century(year) {
  // Calculate the century by dividing the year by 100.
  let centuryNumber = Math.ceil(year / 100);
  
  return centuryNumber;
}

