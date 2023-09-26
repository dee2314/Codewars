/**Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 */

//SOLUTION
function rowSumOddNumbers(n) {
	// TODO
  return n * n * n;
}

//BREAKDOWN
/**The pattern of consecutive odd numbers in the triangular arrangement suggests that the sum of the numbers 
 * in each row can be expressed as n * n * n, where 'n' represents the row number. Here's why it works:

The first row (n=1) contains only one number, 
which is 1, and 1 * 1 * 1 equals 1, which is the correct sum.

The second row (n=2) contains two numbers,
 3 and 5. 2 * 2 * 2 equals 8, which is the correct sum (3 + 5 = 8).

The third row (n=3) contains three numbers, 
7, 9, and 11. 3 * 3 * 3 equals 27, which is the correct sum (7 + 9 + 11 = 27).

This pattern continues, and for any nth row,
 n * n * n will correctly calculate the sum of the numbers in that row. 
 So, in this specific context, the provided solution is valid. */