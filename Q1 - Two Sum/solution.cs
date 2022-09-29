public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        // solution 1: 164ms, 43.1MB
        for (int index1=0; index1<nums.Length; index1++){
            for (int index2=index1+1; index2<nums.Length; index2++){
                if(nums[index1]+nums[index2]==target){
                    return new int[] {index1,index2};
                };
            };
        };
        return new int[] {};
    }
}