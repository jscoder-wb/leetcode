class Solution:
    def numWaterBottles(self, n: int, k: int) -> int:
        if n < k:
            return n
        return k + self.numWaterBottles(n - k + 1, k)