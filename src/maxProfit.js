/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let n = prices.length;
    let buy = [-prices[0]]; // -1
    let sell = [0]; //0

    for (var i = 1; i < prices.length; i++) {
        buy[i] = Math.max(buy[i - 1], (sell[i - 2] || 0) - prices[i]);
        sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
    }
    return sell[n - 1];
};

maxProfit([1, 2, 3, 0, 2]);
