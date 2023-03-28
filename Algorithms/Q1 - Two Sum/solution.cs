// solution 1 - hard search by nested for loop: 164ms, 43.1MB
public class Solution1 {
    public int[] TwoSum(int[] nums, int target) {
        for (int index1 = 0; index1 < nums.Length; index1++) {
            for (int index2 = index1 + 1; index2 < nums.Length; index2++) {
                if (nums[index1] + nums[index2] == target) {
                    return new int[] { index1, index2 };
                }
            }
        }
        return new int[] { };
    }
}

// solution 2 - hash map by dictionary: 124ms, 43.7MB
public class Solution2 {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> indexMap = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++) {
            int diff = target - nums[i];
            if (indexMap.ContainsKey(diff)) {
                return new int[] { i, indexMap[diff] };
            } else {
                indexMap[nums[i]] = i;
            }
        }
        return new int[] { };
    }
}