/**
 * Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */

//SOLUTION FOR THE PROBLEM
function solution(string) {
    return string.replace(/([A-Z])/g, " $1");
  }