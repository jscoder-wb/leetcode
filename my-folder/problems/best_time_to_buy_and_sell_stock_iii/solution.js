var maxProfit = function(prices) {
  const dp = Array.from(Array(prices.length), () =>
    Array.from(Array(2), () => Array(3).fill(-1))
  )
 const f = function(idx, buyorsell, transaction){
   if(transaction > 2 || idx >= prices.length) return 0
   if(dp[idx][buyorsell][transaction] != -1) return dp[idx][buyorsell][transaction];
   let profit = 0
   if (buyorsell){
     let buykaro = -prices[idx] + f(idx + 1, 0, transaction)
     let skipkaro = f(idx + 1, 1, transaction)
     profit = Math.max(buykaro, skipkaro)
   } else {
     let sellkaro = prices[idx] + f(idx + 1, 1, transaction + 1)
     let skipkaro = f(idx + 1, 0, transaction)
     profit = Math.max(sellkaro, skipkaro)
   }
   return dp[idx][buyorsell][transaction] = profit
 } 
 return f(0, 1, 1) 
};