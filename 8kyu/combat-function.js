// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

//My solution
function combat(health, damage) {
    if(health > damage){
      return health -damage
    }else{
    return 0
    }
  }