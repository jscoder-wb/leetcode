// LIS solution
var maxEnvelopes = function(envelopes) { 
    envelopes.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    const lis = [envelopes[0][1]]; // Initialize LIS with the first height.

    for (let i = 1; i < envelopes.length; i++) {
        const height = envelopes[i][1];

        if (height > lis[lis.length - 1]) {
            lis.push(height);
        } else {
            // Find the correct position to update LIS.
            let left = 0;
            let right = lis.length - 1;
            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                if (lis[mid] < height) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            lis[left] = height;
        }
    }

    return lis.length;
};