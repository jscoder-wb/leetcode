// increasing monotonic stack solution
// similar to next smaller element bas discount minus karna h
const finalPrices = function(prices) {
    const stack = [];
    const output = [];
    for (let i = prices.length - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] > prices[i]) {
            stack.pop();
        }
        output[i] = stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1];
        stack.push(prices[i]);
    }
    return output;
};