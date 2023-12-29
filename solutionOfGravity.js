/**
 * Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

input
Two arrays are given :

arr_val (value array), consists of 3 elements
1st element : mass of obj 1
2nd element : mass of obj 2
3rd element : distance between their centers
arr_unit (unit array), consists of 3 elements
1st element : unit for mass of obj 1
2nd element : unit for mass of obj 2
3rd element : unit for distance between their centers
mass units are :

kilogram (kg)
gram (g)
milligram (mg)
microgram (μg)
pound (lb)
distance units are :

meter (m)
centimeter (cm)
millimeter (mm)
micrometer (μm)
feet (ft)
Note
value of G = 6.67 × 10−11 N⋅kg−2⋅m2

1 ft = 0.3048 m

1 lb = 0.453592 kg

return value must be Newton for force (obviously)

μ copy this from here to use it in your solution
 */

//SOLUTION
const solution = (arr_val, arr_unit) => {
    const G = 6.67 * Math.pow(10, -11);
  
    // Define conversion factors
    const massUnits = {
      kg: 1,
      g: 0.001,
      mg: 0.000001,
      μg: 0.000000001,
      lb: 0.453592
    };
  
    const distanceUnits = {
      m: 1,
      cm: 0.01,
      mm: 0.001,
      μm: 0.000001,
      ft: 0.3048
    };
  
    // Convert masses and distance to standard units
    const m1 = arr_val[0] * massUnits[arr_unit[0]];
    const m2 = arr_val[1] * massUnits[arr_unit[1]];
    const d = arr_val[2] * distanceUnits[arr_unit[2]];
  
    // Calculate gravitational force
    const force = (G * m1 * m2) / Math.pow(d, 2);
  
    return force;
  };
  