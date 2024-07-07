var trap = function (height) {
  const leftMax = new Array(height.length);
  const rightMax = new Array(height.length);
  let water = 0;

  leftMax[0] = height[0];
  rightMax[height.length - 1] = height[height.length - 1];

  for (let i = 1; i < height.length; i++)
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);

  for (let i = height.length - 2; i >= 0; i--)
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);

  for (let i = 0; i < height.length; i++)
    water += Math.min(leftMax[i], rightMax[i]) - height[i];

  return water;
}; // watch anuj video