/**
Your task is to sum the differences between consecutive pairs in the array in descending order.
 */

  //SOLUTION fOR THE PROBLEM PLEASE
  function sumOfDifferences(arr) {
    // Sort the array in descending order
    const sortedArr = arr.sort((a, b) => b - a);
  
    // Initialize the sum variable
    let sum = 0;
  
    // Iterate through the array and sum the differences between consecutive pairs
    for (let i = 0; i < sortedArr.length - 1; i++) {
      sum += sortedArr[i] - sortedArr[i + 1];
    }
  
    return sum;
  }