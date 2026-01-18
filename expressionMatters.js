/**
 * Task
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
Example
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.

Notes
The numbers are always positive.
The numbers are in the range (1  ≤  a, b, c  ≤  10).
You can use the same operation more than once.
It's not necessary to place all the signs and brackets.
Repetition in numbers may occur .
You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

 */

//SOLUTION FOR THE PROBLEM!
function expressionMatter(a, b, c) {
    // Try all possible combinations and return the maximum value
    const max1 = a * (b + c);
    const max2 = a * b * c;
    const max3 = a + b * c;
    const max4 = (a + b) * c;
    const max5 = a + b + c;
  
    return Math.max(max1, max2, max3, max4, max5);
  }