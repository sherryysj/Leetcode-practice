class Solution {
    public int[] twoSum(int[] nums, int target) {
        // solution 1: 55ms, 41.4MB
        for (int index1=0; index1<nums.length; index1++){
            for (int index2=index1+1; index2<nums.length; index2++){
                if(nums[index1]+nums[index2]==target){
                    return new int[] {index1,index2};
                };
            };
        };
        return new int[] {};
    }
}