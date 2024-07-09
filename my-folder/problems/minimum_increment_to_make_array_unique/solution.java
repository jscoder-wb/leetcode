class Solution {
  public int findMax(int nums[]) {
    int max = Integer.MIN_VALUE;
    for (int i = 0; i < nums.length; i++) {
      max = Math.max(nums[i], max);
    }
    return max;
  }

  public int minIncrementForUnique(int[] nums) {
    int maxElem = findMax(nums);
    int n = nums.length;
    int countArr[] = new int[maxElem + n];

    for (int num : nums) {
      countArr[num]++;
    }
    int moves = 0;
    for (int i = 0; i < countArr.length; i++) {
      if (countArr[i] <= 1)
        continue;
      int extra = countArr[i] - 1;
      moves += extra;
      countArr[i + 1] += extra;
      countArr[i] = 1;
    }
    return moves;
  }
}