//problem link: https://leetcode.com/problems/minimum-increment-to-make-array-unique
/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      const newValue = nums[i - 1] + 1;
      count += newValue - nums[i];
      nums[i] = newValue;
    }
  }
  return count;
};

console.log(minIncrementForUnique([1, 2, 2]));//1
console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]));//6
