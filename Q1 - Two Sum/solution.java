class Solution {
    public int[] twoSum(int[] nums, int target) {
        // solution 1: 42ms, 41.3MB
        int[] solution = new int[2];
        outerloop:
        for (int index1=0; index1<nums.length; index1++){
            for (int index2=index1+1; index2<nums.length; index2++){
                if(nums[index1]+nums[index2]==target){
                    solution[0] = index1;
                    solution[1] = index2;
                    break outerloop;
                };
            };
        };
        return solution;
    };
}