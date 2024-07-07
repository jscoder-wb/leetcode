// binary search solution
var peakIndexInMountainArray = function(arr) {
    let first = 0, last = arr.length - 1; 
    while (first < last) {
        let mid = Math.floor((first + last) / 2); 
        if (arr[mid] < arr[mid + 1]) first = mid + 1
        else last = mid
    }
    return first
};
// see babbar video for understanding