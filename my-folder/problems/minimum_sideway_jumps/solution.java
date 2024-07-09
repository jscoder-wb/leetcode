// 2d dp memo solution
class Solution {
  private int solve(int[] obs, int currlane, int currpos, int[][] dp) {
    int n = obs.length;
    if (currpos == n - 1) {
      return 0;
    }
    if (dp[currlane][currpos] != -1) {
      return dp[currlane][currpos];
    }
    if (obs[currpos + 1] != currlane) {
      return dp[currlane][currpos] = solve(obs, currlane, currpos + 1, dp);
    } else {
      int ans = Integer.MAX_VALUE;
      for (int i = 1; i <= 3; i++) {
        if (currlane != i && obs[currpos] != i)
          ans = Math.min(ans, 1 + solve(obs, i, currpos, dp));
      }
      return dp[currlane][currpos] = ans;
    }
  }

  public int minSideJumps(int[] obstacles) {
    int n = obstacles.length + 1;
    int[][] dp = new int[4][n];
    for (int i = 0; i < 4; i++) {
      Arrays.fill(dp[i], -1);
    }
    return solve(obstacles, 2, 0, dp);
  }
}