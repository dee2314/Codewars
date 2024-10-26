/**
 * Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements,
 *  with the same multiplicities (the multiplicity of a member is the number of times it appears). 
 * "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
 * 
 */

//SOLUTION
function comp(array1, array2) {
    // Check if either array is null or not an array
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return false;
    }

    // If both arrays are empty, they are considered the same
    if (array1.length === 0 && array2.length === 0) {
        return true;
    }

    // Map each element in array1 to its square
    const squaredArray1 = array1.map(num => num * num);

    // Sort both squaredArray1 and array2
    squaredArray1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    // Compare the sorted arrays
    return JSON.stringify(squaredArray1) === JSON.stringify(array2);
}