/**
 * Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. 
 * Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten.
 Remember that you are standing at the front of the queue which is at the end of the array:
 */

 //SOLUTION
 function warnTheSheep(queue) {
    const wolfIndex = queue.findIndex(animal => animal === 'wolf');
    const sheepIndex = queue.length - 1 - wolfIndex;
  
    if (wolfIndex === queue.length - 1) {
      return "Pls go away and stop eating my sheep";
    } else {
      return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
    }
  }