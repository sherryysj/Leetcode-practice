// method 1: work but overtime
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let highestProfit = 0;
  prices.forEach((price, index) => {
    prices.slice(index + 1).forEach((leftPrice) => {
      if (leftPrice > price && leftPrice - price > highestProfit) {
        highestProfit = leftPrice - price;
      }
    });
  });
  return highestProfit;
};
