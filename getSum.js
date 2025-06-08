/**
 * Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
 */


//SOLUTION FOR THE PROBLEM
function getSum(a, b) {
    // If a and b are equal, return a (or b, since they are the same)
    if (a === b) {
        return a;
    }

    // Determine the lower and upper bounds
    let min = Math.min(a, b);
    let max = Math.max(a, b);

    // Calculate the sum of all integers between min and max, inclusive
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}