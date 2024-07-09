var minimumAbsDifference = function(arr) {
    let minAblosute = Infinity;
    let output = [];

    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i++) {
        const minus = arr[i + 1] - arr[i];
        if (minus < minAblosute) {
            minAblosute = minus;
            output = [[arr[i], arr[i + 1]]];
        } else if (minus === minAblosute) {
            output.push([arr[i], arr[i + 1]]);
        }
    }
    
    return output;
};