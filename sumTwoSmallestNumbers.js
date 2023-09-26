/** Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.*/
//SOLUTION
function sumTwoSmallestNumbers(numbers) {  
    let first = Math.min(...numbers)
    numbers.splice(numbers.indexOf(first), 1)
    let second = Math.min(...numbers)
    return first + second
  }

 //BREAKDOWN
 /**This function, sumTwoSmallestNumbers, takes an array of numbers as its input and 
  * is designed to find and sum the two smallest numbers in that array.

1. We begin by finding the smallest number in the input array numbers using the Math.min(...numbers) function. 
This gives us the smallest value in the array, and we store it in the variable first.

2. Next, we locate the index of the first smallest number in the numbers array using numbers.indexOf(first). 
We then remove it from the array using splice. This ensures that the smallest number is no longer part of the array, so we can find the second smallest number.

3. After removing the first smallest number, we again use Math.min(...numbers) to find the smallest number in the modified numbers array,
 and we store it in the variable second.

4. Finally, we return the sum of first and second, 
which are the two smallest numbers in the original input array. */