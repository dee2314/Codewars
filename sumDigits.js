/**
 * Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
 */

//SOLUTION
function sumDigits(number) {
    // Convert number to string to easily access each digit
    const numberString = Math.abs(number).toString();
    
    // Initialize sum
    let sum = 0;
    
    // Iterate through each character in the string
    for (let i = 0; i < numberString.length; i++) {
        // Convert character to number and add it to the sum
        sum += parseInt(numberString[i], 10);
    }
    
    // Return the sum
    return sum;
}