/**
 * This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Input coordinates fit in range 
−
50
⩽
�
,
�
⩽
50
−50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.


 */

//SOLUTION
function distanceBetweenPoints(a, b) {
    const deltaX = b.x - a.x;
    const deltaY = b.y - a.y;
    
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    
    // Round the answer to 6 decimal places.
    return Math.round(distance * 1e6) / 1e6;
  }