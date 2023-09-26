/**Complete the square sum function so that it squares each number passed into it and then sums the results together. */

//SOLUTION
function squareSum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
      sum += numbers[i] ** 2;
    }
    return sum
  }


//BREAKDOWN
/** 1. We start by initializing a variable sum to 0. This variable will be used to accumulate the sum of the squares.

2. Next, we use a for loop to iterate through the numbers array. The loop runs from i = 0 to i < numbers.length, 
which means it processes each element in the array one by one.

3. Inside the loop, we calculate the square of the current number using the ** operator, and we add it to the sum variable.
 This line, sum += numbers[i] ** 2;, effectively adds the square of the current number to the running total.

4. The loop continues to the next number in the array, 
repeating this process until all numbers in the array have been squared and summed.

5. Finally, we return the value of sum, 
which holds the sum of the squares of all the numbers in the input array. */