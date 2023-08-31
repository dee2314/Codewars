/**Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59 */

//SOLUTION
function past(h, m, s){
    //#Happy Coding! ^_^
    return (h * 3600 + m * 60 + s) * 1000
  };
//h * 3600, Why? 3600 seconds in an hour
//m * 60, Why? converts minutes to seconds
//s represents the input seconds