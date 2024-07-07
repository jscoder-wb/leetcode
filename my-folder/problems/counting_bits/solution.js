// Bottom Up Dynamic programming solution from neetcode YT channel
var countBits = function(num) {
    let dp = [0]
    let offset = 1
    for(let i = 1; i <= num; i++){
        if(i == (offset * 2)) offset = i
        dp[i] = 1 + dp[i - offset]
    }
    return dp
};