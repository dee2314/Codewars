/**
 * Create a combat function that takes the player's current health and the amount of damage recieved, 
 * and returns the player's new health. Health can't be less than 0.
 */

//SOLUTION FOR MY PROBLEM
function combat(health, damage) {
    const newHealth = health - damage;
    return newHealth < 0 ? 0 : newHealth;
  }
  