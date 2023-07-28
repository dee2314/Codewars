/** Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/
//SOLUTION
function maps(arr){
  return arr.map(n => n * 2)
 }

//BREAKDOWN
/**This function, maps, takes an array as its input and is designed to double each element in the array. It does this using the map method.

1. Inside the function, we use the map method on the input array arr. 
The map method is used to create a new array by applying a given function to each element of the original array.

2. In this case, the function provided to map is an arrow function n => n * 2. 
This function takes each element n from the original array, multiplies it by 2 (n * 2), and returns the result.

3. The map method processes each element in the array, doubles it, 
and creates a new array with the doubled values.

4. Finally, the function returns the new array containing the doubled elements. */