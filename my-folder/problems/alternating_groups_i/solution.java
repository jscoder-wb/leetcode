class Solution {
    public int numberOfAlternatingGroups(int[] colors) {
        int n = colors.length;
        if (n < 3) {
            return 0;
        }

        int alternatingGroups = 0;

        for (int i = 0; i < n; i++) {
            if (i > 0 && i < n - 1) {
                if (colors[i] != colors[i - 1] && colors[i] != colors[i + 1]) {
                    alternatingGroups++;
                }
            } else if (i == 0) {
                if (colors[i] != colors[n - 1] && colors[i] != colors[i + 1]) {
                    alternatingGroups++;
                }
            } else if (i == n - 1) {
                if (colors[i] != colors[i - 1] && colors[i] != colors[0]) {
                    alternatingGroups++;
                }
            }
        }

        return alternatingGroups;
    }
}