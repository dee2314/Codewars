/**
 * Make a function that returns the value multiplied by 50 and increased by 6. 
 * If the value entered is a string it should return "Error".
 */


//SOLUTION
function problem(x) {
    // Check if the input is a string
    if (typeof x === 'string') {
        return "Error";
    }
    
    // Multiply the value by 50 and add 6
    return x * 50 + 6;
}