class Solution {
public:
    bool canplace(int dist, vector<int>& stalls, int m) {
        int cntCows = 1;
        int last = stalls[0];
        for (int i = 1; i < stalls.size(); i++) {
            if (stalls[i] - last >= dist) {
                cntCows++;
                last = stalls[i];
            }
            if (cntCows >= m)
                return true;
        }
        return false;
    }
    int maxDistance(vector<int>& stalls, int m) {
        sort(stalls.begin(), stalls.end());
        int low = 0;
        int high = stalls[stalls.size() - 1];
        while (low <= high) {
            int mid = floor((low + high) / 2);
            if (canplace(mid, stalls, m)) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return high;
    }
};