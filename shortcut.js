/**
 * Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
 */

function shortcut(string) {
    // Use regular expression to remove lowercase vowels
    return string.replace(/[aeiou]/g, '');
}