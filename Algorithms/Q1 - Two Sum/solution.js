// solution 1 - hard search by nested for loop: 121ms, 42.4MB
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var solution1 = function (nums, target) {
  for (let index1 = 0; index1 < nums.length; index1++) {
    for (let index2 = index1 + 1; index2 < nums.length; index2++) {
      if (nums[index1] + nums[index2] === target) {
        return [index1, index2];
      }
    }
  }
  return [];
};

// solution 2 - hash map by object: 64ms, 41.5MB
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var solution2 = function (nums, target) {
  const indexMap = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    // in is much fast than Object.keys.includes (760ms)
    if (diff in indexMap) {
      return [i, indexMap[diff]];
    } else {
      indexMap[nums[i]] = i;
    }
  }
  return [];
};
