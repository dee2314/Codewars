/** The cockroach is one of the fastest insects.
 *  Write a function which takes its speed in km per hour and returns it in cm per second, 
 * rounded down to the integer (= floored).*/


//SOLUTION FOR THE PROBLEM TODAY
function cockroachSpeed(s) {
    //Good Luck!
    const speedInCmPerSec = Math.floor(s * 100000 / 3600);
    
    return speedInCmPerSec;
  }