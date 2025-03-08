/**
 * 
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
 */

//SOLUTION
function abbrevName(name) {
  
    const nameParts = name.split(' ');
  
    const initials = nameParts.map(word => word[0].toUpperCase()).join('.');
  
    return initials;
  }

// A SPICIER SOLUTION FOR THE PROBLEM
function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}