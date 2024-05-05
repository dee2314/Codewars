/**
 * When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
 */

//SOLUTION
function position(letter) {
    // Convert the letter to lowercase to handle both cases
    letter = letter.toLowerCase();
    
    // Calculate the position of the letter in the alphabet
    // ASCII value of 'a' is 97, so subtracting 96 from the ASCII value of the letter gives its position
    var positionInAlphabet = letter.charCodeAt(0) - 96;
    
    // Return the position with a formatted string
    return "Position of alphabet: " + positionInAlphabet;
}