class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        # solution 1: create a new array for sums
        sums = []
        newSum = 0
        for num in nums:
            newSum += num
            sums.append(newSum)
        return sums

        # solution 2: modify nums directly
        for index in range(1, len(nums)):
            nums[index] += nums[index - 1]
        return nums
