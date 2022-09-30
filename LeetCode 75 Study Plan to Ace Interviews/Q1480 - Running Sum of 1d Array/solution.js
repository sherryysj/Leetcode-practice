// solution 1: modify nums directly by for loop
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var solution1 = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }
  return nums;
};

// solution 2: return a new sum array by array map
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var solution2 = function (nums) {
  let sum = 0;
  return nums.map((num) => {
    sum += num;
    return sum;
  });
};
