var longestConsecutive = function(nums) {
  let set = new Set(nums), longest = 0
  for(let num of set) {
    if(!(set.has(num - 1))) {
      let count = 0
      while(set.has(num++)) count++
      longest = Math.max(longest, count)
    }
  } return longest   
};