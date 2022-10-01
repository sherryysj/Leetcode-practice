/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
  }
  leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    rightSum = sum - nums[i] - leftSum;
    if (leftSum == rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
