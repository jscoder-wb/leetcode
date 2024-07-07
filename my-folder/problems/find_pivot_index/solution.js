// prefix sum solution
var pivotIndex = function (nums) {
    let sum = 0, leftSum = 0, rightSum = 0;
    nums.forEach(element => {
        sum += element;
    });
    for (let i = 0; i < nums.length; i++) {
        rightSum = sum - leftSum - nums[i];
        if (leftSum == rightSum) return i;
        leftSum += nums[i];
    }
    return -1;
};