public class Solution {
    public int PivotIndex(int[] nums) {
        int sum = nums[0];
        for (int i = 1; i < nums.Length; i++) {
            sum += nums[i];
        }
        int leftSum = 0;
        for (int i = 0; i < nums.Length; i++) {
            int rightSum = sum - nums[i] - leftSum;
            if (leftSum == rightSum) {
                return i;
            }
            leftSum += nums[i];
        };
        return -1;
    }
}