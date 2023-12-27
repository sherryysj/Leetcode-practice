// method 1: work but overtime
class Solution {
    public int maxProfit(int[] prices) {
        int highestProfit = 0;
        for (int index = 0; index < prices.length; index++) {
            int[] leftPrices = Arrays.copyOfRange(prices, index + 1, prices.length);
            for (int leftPrice: leftPrices) {
                if (leftPrice > prices[index] && leftPrice - prices[index] > highestProfit) {
                    highestProfit = leftPrice - prices[index];
                }
            }
        }
        return highestProfit;
    }
}