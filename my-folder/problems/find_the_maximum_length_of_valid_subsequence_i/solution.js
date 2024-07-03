// 4 possible cases  [0,0,0,0.....] or [1,1,1,1....]  [0,1,0,1......] or [1,0,1,0,1,0........] 
function maximumLength(nums) {
  const n = nums.length
  function f(nums, turn) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      if ((turn === 0 && nums[i] === 0) || turn === 1 && nums[i] === 1) {
        count++;
        turn ^= 1;
      }
    }
    return count;
  }
  let evenEven = 0
    , oddOdd = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 0) {
      nums[i] = 0;
      evenEven++;
    } else {
      nums[i] = 1;
      oddOdd++;
    }
  }
  const evenOdd = f(nums, 0);
  const oddEven = f(nums, 1);
  return Math.max(evenOdd, oddEven, evenEven, oddOdd);
}