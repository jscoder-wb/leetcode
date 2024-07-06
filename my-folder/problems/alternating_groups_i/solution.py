class Solution:
    def numberOfAlternatingGroups(self, colors: List[int]) -> int:
        n = len(colors)
        if n < 3:
            return 0
        alternating_groups = 0
        for i in range(n):
            if i > 0 and i < n - 1:
                if (colors[i] != colors[i - 1]) and (colors[i] != colors[i + 1]):
                    alternating_groups += 1
            elif i == 0:
                if (colors[i] != colors[-1]) and (colors[i] != colors[i + 1]):
                    alternating_groups += 1
            elif i == n - 1:
                if (colors[i] != colors[i - 1]) and (colors[i] != colors[0]):
                    alternating_groups += 1
        return alternating_groups