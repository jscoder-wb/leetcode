class Solution {
public:
    int countPrimes(int n) {
        if (n <= 1)
            return 0;
        int cnt = 0;
        vector<bool> prime(n, true);
        prime[0] = prime[1] = false;
        for (int i = 2; i < n; i++) {
            if (prime[i]) {
                cnt++;
                for (int j = i * 2; j < n; j += i) {
                    prime[j] = 0;
                }
            }
        }
        return cnt;
    }
};