// binary search solution from love babbar video
var mySqrt = function(x) {
    let start = 0 // start -> end is known as search space ans lies in this range
    let end = x
    let ans = -1
    let mid = Math.floor((start + end)/2) // possible ans
    while(start <= end) {
        let square = mid * mid
        if (square === x) return mid
        if(square < x){
            ans = mid
            start = mid + 1
        } else {
            end = mid - 1
        }
        mid = Math.floor((start + end)/2)
    }
    return ans
};