// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have attributes x and y (X and Y in C#).

// Write a function calculating distance between Point a and Point b.

// Tests compare expected result and actual answer with tolerance of 1e-6.


//My solution
function distanceBetweenTwoPoints(a,b){
return Math.hypot(a.x -b.x, a.y -b.y)
}
