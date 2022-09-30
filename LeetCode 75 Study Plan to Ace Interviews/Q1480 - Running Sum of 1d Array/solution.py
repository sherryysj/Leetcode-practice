# solution 1: create a new array for sums
class Solution1:
    def runningSum(self, nums: List[int]) -> List[int]:
        sums = []
        newSum = 0
        for num in nums:
            newSum += num
            sums.append(newSum)
        return sums


# solution 2: modify nums directly
class Solution2:
    def runningSum(self, nums: List[int]) -> List[int]:
        for index in range(1, len(nums)):
            nums[index] += nums[index - 1]
        return nums
