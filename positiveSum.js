/**You get an array of numbers, return the sum of all of the positives ones. Example [1,-4,7,12] => 1 + 7 + 12 = 20 */
//SOLUTION
function positiveSum(arr){
    let sum = 0;
    for (let i = 1; i < sum.length; i++){   // setup loop to go through array of given length
        if (arr[i] > 0){                    // add arr[i] to total
            sum += arr[i]                   // add arr[i] to total
        }
    }
    return sum                              // return total
  }

