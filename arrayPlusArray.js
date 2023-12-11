/**
 * I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
 */

//SOLUTION
function arrayPlusArray(arr1, arr2) {
    // Concatenate the two arrays and use reduce to calculate the sum
    const sum = arr1.concat(arr2).reduce((acc, num) => acc + num, 0);

    return sum;
}