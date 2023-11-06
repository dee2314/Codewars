/*
In this kata you will create a function that takes a list of non-negative integers 
and strings and returns a new list with the strings filtered out.
*/


//SOLUTION 
function filter_list(l) {
  const result = [];

  for (const element of l) {

    if (typeof element === 'number' && element >= 0) {
      result.push(element);
    }
  }
  
  return result;
}
