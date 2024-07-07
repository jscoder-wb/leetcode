let findDuplicates = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if(nums[index] < 0) result.push(index + 1);
        else nums[index] = - nums[index]
    }
    return result;
    // har ek element ka (element - 1 )th index ka value checking if it is -ve or +ve if -ve then element is duplicate
};