// DP solution from love babbar video
const maxProfit = (prices) => {
  let profit = 0,
    currentMin = prices[0];
  for (let j = 1; j < prices.length; j++){
    profit = Math.max(prices[j] - currentMin, profit);
    currentMin = Math.min(prices[j], currentMin);
  }
  return profit;
};