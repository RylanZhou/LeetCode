/* ***********************************************************
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:
Input: [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
             Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

Example 2:
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.

Example 3:
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
************************************************************ */
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  const len = prices.length
  // NOTE: You can make at most TWO transactions.
  /*
    Method 1:
      Set a divide point from 0 to n. In each loop, we will get two sections. Find the maximum profit in each section, result1 and result2, then add them together. Find the maximum of result1 + result2. To get each result, we can call the function in "./0121_Best Time to Buy and Sell Stock.js" as in findMaxProfit(left, right, prices).
  */
  // Find where the prices are not decreasing
  let divide = 1
  while (divide < len && prices[divide] <= prices[divide - 1]) {
    divide++
  }

  const findMaxProfit = (left, right, prices) => {
    let max = 0,
      result = 0
    for (let i = left + 1; i <= right; i++) {
      max = Math.max(0, max + (prices[i] - prices[i - 1]))
      result = Math.max(max, result)
    }
    return result
  }

  // Do separation and comparisons
  let result = 0
  for (let i = divide; i < len; i++) {
    result = Math.max(
      result,
      findMaxProfit(0, i, prices) + findMaxProfit(i + 1, len - 1, prices)
    )
  }
  return result
}

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfitII(prices) {
  const len = prices.length
  if (!len) {
    return 0
  }
  // NOTE: You can make at most TWO transactions.
  /*
    Method 2: Dynamic Programming
      dp[i][j] means the total profit of i trades on j-th day. Obviously, i = 1 or 2.

      When i === 1:
        1) On j-th day, we don't buy or sell, so the profit stays the same as j-1-th day.
          => dp[1][j] = dp[1][j - 1]
        2) On j-th day, we sell, so the profit is Math.max(prices[j] - prices[x]), where 0 < x < j, meaning the day we buy.
          => dp[1][j] = Math.max(prices[j] - prices[x])
        Therefore,
          => dp[1][j] = Math.max(dp[1][j - 1], prices[j] - prices[x])
      
      When i === 2:
        1) On j-th day, we don't buy or sell.
          => dp[2][j] = dp[2][j - 1]
        2) On j-th day, we sell. In this case, additionally, we have to add dp[1][x - 1]. dp[1][x - 1] means the max profit of one trade on the day before we buy the second trade.
          => dp[2][j] = Math.max(prices[j] - prices[x]) + dp[1][x - 1]
        Therefore,
          => dp[2][j] = Math.max(dp[2][j - 1], prices[j] - prices[x] + dp[1][j - 1])
  */
  const dp = [new Array(len), new Array(len)]
  dp[0][0] = 0
  dp[1][0] = 0
  for (let i = 0; i < 2; i++) {
    for (let j = 1; j < len; j++) {
      // Find max of prices[j] - prices[x] or prices[j] - prices[x] + dp[0][j - 1]
      // Or: find min of prices[x] or (prices[x] - dp[0][j - 1])
      let min = prices[0]
      for (let x = 1; x < j; x++) {
        if (i === 0) {
          min = Math.min(min, prices[x])
        } else {
          min = Math.min(min, prices[x] - dp[0][x - 1])
        }
      }
      // Do subtraction
      dp[i][j] = Math.max(dp[i][j - 1], prices[j] - min)
    }
  }

  return dp[1][len - 1]
}

console.log(maxProfitII([0, 0, 3, 1, 4]))
