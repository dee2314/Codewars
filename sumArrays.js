/**Write a function that takes an array of numbers and returns the sum of the numbers. 
 * The numbers can be negative or non-integer. 
 * If the array does not contain any numbers then you should return 0 */
function sum(numbers) {
    return numbers.reduce((total, num) => total + 
    (typeof num === 'number' && !isNaN(num) ? num : 0), 0);
}

//SIMPLER METHOD
//I like the optimization 
function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }