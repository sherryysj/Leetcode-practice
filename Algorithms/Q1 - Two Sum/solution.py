# solution 1 - hard search by nested for loop: 3000ms, 15.6MB
class Solution1:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for index1 in range(len(nums)):
            for index2 in range(index1 + 1, len(nums)):
                if (nums[index1] + nums[index2] == target):
                    return [index1, index2]


# solution 2 - hash map by dict: 28ms, 16.1MB
class Solution2:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        indexMap = {}
        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in indexMap:
                return [i, indexMap.get(diff)]
            else:
                indexMap[nums[i]] = i
