let numWaterBottles = (n, k) => {
    // \U0001f6d1 base case: drink all n bottles and \U0001f6ab cannot exchange enough empty bottles for another drink
    if (n < k)
        return n;
    // \U0001f680 recursive case: drink k bottles at a time and ✅ exchange those k empty bottles for +1 more drink \U0001f37a
    return k + numWaterBottles(n - k + 1, k);
};