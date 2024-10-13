/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
  const result = [];
  const n = nums.length;
  const frequency = new Map();

  // Initialize the frequency map with the first `k` elements
  for (let i = 0; i < k; i++) {
    frequency.set(nums[i], (frequency.get(nums[i]) || 0) + 1);
  }

  const calculateXSum = () => {
    const freqArray = Array.from(frequency.entries());

    freqArray.sort((a, b) => {
      if (b[1] === a[1]) {
        return b[0] - a[0]; // Sort by value if frequencies are the same
      }
      return b[1] - a[1]; // Sort by frequency
    });

    let topElementsSum = 0
    if (freqArray.length < x) {
      for (let i = 0; i < freqArray.length; i++) {
        topElementsSum += (freqArray[i][0] * freqArray[i][1])
      }
    } else {
      for (let i = 0; i < x; i++) {
        topElementsSum += (freqArray[i][0] * freqArray[i][1])
      }
    }
    return topElementsSum
  };

  // Calculate x-sum for the first window
  result.push(calculateXSum());

  // Slide the window over the rest of the array
  for (let i = k; i < n; i++) {
    // Remove the element going out of the window
    const outgoing = nums[i - k];
    const incoming = nums[i];

    // Update the frequency map
    frequency.set(outgoing, frequency.get(outgoing) - 1);
    if (frequency.get(outgoing) === 0) {
      frequency.delete(outgoing);
    }
    frequency.set(incoming, (frequency.get(incoming) || 0) + 1);

    // Calculate x-sum for the current window
    result.push(calculateXSum());
  }

  return result;
};