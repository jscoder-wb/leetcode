// top down solution
var combinationSum4 = function(nums, target) {
    const memo = new Array(target + 1).fill(null);
    const helper = (remaining = target) => {
        if(remaining < 0) return 0;
        if(remaining === 0) return 1;
        if(memo[remaining] !== null) return memo[remaining];

        let ways = 0;
        for(let num of nums) ways += helper(remaining - num);
        memo[remaining] = ways;
        return ways;
    };
    return helper();
};