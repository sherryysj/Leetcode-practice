class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # solution 1: 3000ms, 15.6MB
        for index1 in range(0, len(nums)):
            for index2 in range(index1+1, len(nums)):
                if (nums[index1]+nums[index2] == target):
                    return [index1, index2]
