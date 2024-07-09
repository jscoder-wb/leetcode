// backtracking solution
var subsets = function(nums, index = 0, subset = [], results = []) {
    if (index === nums.length) results.push(subset);
    else {
        //include part
        subsets(nums, index + 1, [...subset, nums[index]], results);

        //exclude part
        subsets(nums, index + 1, subset, results);
    }
    return results;
};