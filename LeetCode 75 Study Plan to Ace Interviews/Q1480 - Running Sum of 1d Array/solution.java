class Solution {
    public int[] runningSum(int[] nums) {
        // solution 1: modify nums directly by for loop
        for (int i = 1; i < nums.length; i++){
            nums[i] = nums[i] + nums[i - 1];
        }
        return nums;
    }
}