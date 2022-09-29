class Solution {
    public int[] twoSum(int[] nums, int target) {
        // solution 1 - hard search: 55ms, 41.4MB
        for (int index1 = 0; index1 < nums.length; index1++) {
            for (int index2 = index1 + 1; index2 < nums.length; index2++) {
                if (nums[index1] + nums[index2] == target) {
                    return new int[] { index1, index2 };
                }
            }
        }
        return new int[] {};
        
        // solution 2 - hash map: 2ms, 41.8MB
        HashMap<Integer, Integer> indexMap = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            int diff = target - nums[i];
            if (indexMap.keySet().contains(diff)) {
                return new int[] {i, indexMap.get(diff)};
            } else {
                indexMap.put(nums[i], i);
            }
        }
        return new int[] {};
    }
}
