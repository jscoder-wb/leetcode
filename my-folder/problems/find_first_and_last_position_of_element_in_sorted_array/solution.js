// Binary search solution
function firstOccr(nums,target) {
    let left = 0
    let right = nums.length-1
    let index = -1
    
    while(left<=right) {
        let mid = Math.floor((left+right)/2)
        if(nums[mid] === target) {
            index = mid
            right = mid-1
        } 
        else if (target < nums[mid]) right = mid-1
        else left = mid+1
    }
    return index
}

function lastOccr(nums,target) {
    let left = 0
    let right = nums.length-1
    let index = -1
    
    while(left<=right) {
        let mid = Math.floor((left+right)/2)
        if(nums[mid] === target) {
            index = mid
            left = mid+1
        } 
        else if(target < nums[mid]) right = mid-1
        else left = mid+1
    }
    return index
}
var searchRange = function(nums, target) {
    let first = firstOccr(nums,target)
    let last = lastOccr(nums,target)
    return [first,last]
};