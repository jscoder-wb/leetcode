var rotateString = function(s, goal) {
  if (s.length !== goal.length) return false; 
  let newS = s + s;
  return newS.includes(goal);
};