/**In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false. */

//SOLUTION
function periodIsLate(last, today, cycleLength) {
    const timeDifference = today.getTime() - last.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    if (daysDifference > cycleLength) {
      return true;
    } else {
      return false;
    }
  }

//MORE CONCISE SOLUTION
function periodIsLate(last, today, cycleLength)
{
  return (today-last)/86400000>cycleLength
}