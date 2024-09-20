var climbStairs = function(n) {
    function helper(n) {
        if (n === 0 || n === 1) return 1
        if (memo[n]) return memo[n]
        return memo[n] = helper(n - 1) + helper(n - 2)
    }
    const memo = {}
    return helper(n);
}; 
// number of ways to get to 5th step =  
//     number of ways to get to 4th step (5) + 
//     number of ways to get to 3rd step (3)
