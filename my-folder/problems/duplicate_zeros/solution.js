var duplicateZeros = function(arr) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0); // start operation from i, delete 0 elements (2nd parameter), add 0 in ith index
            arr.pop();
            i+=1
        }
    }
};