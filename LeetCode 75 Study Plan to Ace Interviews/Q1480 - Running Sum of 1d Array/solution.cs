// solution 1: create a new array for sums
public class Solution {
    public int[] RunningSum(int[] nums) {
        int newSum = 0;
        int[] sums = new int[nums.Length];
        for (int i = 0; i < nums.Length; i++){
            newSum += nums[i];
            sums[i] = newSum;
        };
        return sums;
    }
}

// solution 2: modify nums directly
public class Solution2 {
    public int[] RunningSum(int[] nums) {
        for(int i = 1; i < nums.Length; i++){
            nums[i] = nums[i - 1] + nums[i];
        }
        return nums;
    }
}