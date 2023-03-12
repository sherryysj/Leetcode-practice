/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (right - left > 0) {
    const midIndex = Math.floor((right + left) / 2);
    if (target === nums[midIndex]) {
      return midIndex;
    }

    if (target > nums[midIndex]) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }
  }

  if (target === nums[left]) {
    return left;
  }

  return -1;
};
