/**
 * You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
 */

//SOLUTION
function calculator(a, b, sign) {
    // Check if a and b are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "unknown value";
    }
    
    // Perform the operation based on the sign
    switch (sign) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            // Check if the second number is not zero to avoid division by zero
            if (b !== 0) {
                return a / b;
            } else {
                return "division by zero";
            }
        default:
            return "unknown value";
    }
}