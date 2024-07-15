var minimumOperations = function (nums) {
  let count = 0;
  
  for (let element of nums) 
    if (element % 3 !== 0) ++count
  
  return count;
};