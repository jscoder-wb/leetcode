var minPatches = function(nums, n) {
    let patch = 0, i = 0;
    let maxNum = 0;
    while (maxNum < n) {
        if (i < nums.length && nums[i] <= maxNum + 1) {
            maxNum += nums[i++];
        } else {
            maxNum += maxNum + 1;
            patch++;
        }
    }
    return patch;
};
// watch codestory for understanding