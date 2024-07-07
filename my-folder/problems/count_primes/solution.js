// sieve eratosthenes
var countPrimes = function(n) {
    let isPrime = Array(n).fill(true, 2);  // 2nd parameter is start index
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
            for (let j = i * i;  j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return count;
};