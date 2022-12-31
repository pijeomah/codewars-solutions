// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"


//My solution
function warnTheSheep(queue) {
    let reversed = queue.reverse()
    let index = reversed.indexOf("wolf")
    if( index === 0){
        return "Pls go away and stop eating my sheep"
    }else{
        return `Oi! Sheep number ! You are about to be eaten by a wolf!`
    }

}