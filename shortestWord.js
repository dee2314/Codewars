/**
 * Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */


//SOLUTION
function findShort(s) {

    const words = s.split(' ');


    const shortestLength = words.reduce((shortest, word) => {
        return Math.min(shortest, word.length);
    }, Infinity);

    return shortestLength;
}

