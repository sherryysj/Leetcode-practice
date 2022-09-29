/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  // solution 1: modify nums directly by for loop
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }
  return nums;

  // solution 2: return a new sum array by array map
  let sum = 0;
  return nums.map((num) => {
    sum += num;
    return sum;
  });
};
