/**The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth" */

//PROBLEM
function getPlanetName(id){
var name;
switch(id){
  case 1:
    name = 'Mercury'
  case 2:
    name = 'Venus'
  case 3:
    name = 'Earth'
  case 4:
    name = 'Mars'
  case 5:
    name = 'Jupiter'
  case 6:
    name = 'Saturn'
  case 7:
    name = 'Uranus'
  case 8:
    name = 'Neptune'
}

return name;
};


//SOLUTION
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
};

//THE WHY?
/**. Without break statements, 
 * the code will fall through all the cases and set name to the value 
 * specified in the last case (in this case, 'Neptune') for any input value. */