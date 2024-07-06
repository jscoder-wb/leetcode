/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
  let ballPosition = 0; // Start with child 0 holding the ball
  let direction = 1; // Initially, the ball moves towards the right

  for (let i = 0; i < time; i++) {
    if (direction === 1) {
      if (ballPosition === n - 1) direction = -1; 
      ballPosition += direction;
    } else {
      if (ballPosition === 0) direction = 1;  
      ballPosition += direction;
    }
  } 
  return ballPosition + 1;
};