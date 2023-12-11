/**
 * Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))
 */

//SOLUTION
function addBinary(a, b) {
    // Convert input numbers to binary strings
    const binaryA = a.toString(2);
    const binaryB = b.toString(2);

    // Perform binary addition
    const sumDecimal = a + b;
    const sumBinary = sumDecimal.toString(2);

    return sumBinary;
}
