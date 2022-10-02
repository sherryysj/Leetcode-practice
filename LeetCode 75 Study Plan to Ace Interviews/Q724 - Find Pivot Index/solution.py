class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        sum = 0
        for num in nums:
            sum += num
        leftSum = 0
        for index in range(len(nums)):
            rightSum = sum - leftSum - nums[index]
            if leftSum == rightSum:
                return index
            leftSum += nums[index]
        return -1
