var rearrangeArray = function(nums) {
   let positives = nums.filter(x => x > 0)
   let negatives = nums.filter(x => x < 0)
   let result = []
   for(i = 0; i < nums.length / 2; i++) {
    result.push(positives[i], negatives[i])
   } 
   return result
};