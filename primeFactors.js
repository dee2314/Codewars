/**
 * Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
 */

//SOLUTION
function primeFactors(n) {
    let result = "";
    let factor = 2;

    while (n > 1) {
        let count = 0;

        while (n % factor === 0) {
            n /= factor;
            count++;
        }

        if (count > 0) {
            result += `(${factor}` + (count > 1 ? `**${count}` : "") + `)`;
        }

        factor++;
    }

    return result;
}
