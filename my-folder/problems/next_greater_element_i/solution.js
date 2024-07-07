// decreasing monotonic stack solution
const nextGreaterElement = (nums1, nums2) => {
  const stack = [];
  const map = {};
  for (let i = nums2.length - 1; i >= 0; --i) {
    while (stack.length && stack[stack.length - 1] <= nums2[i]) {
      stack.pop();
    }
    map[nums2[i]] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(nums2[i]);
  }
  return nums1.map(num => map[num]);
};