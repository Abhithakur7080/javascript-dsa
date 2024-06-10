//problem link: https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let b = nums[j];
      if (a + b === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};

console.log(twoSum([2,7,11,15], 9));//[ 0, 1 ]
console.log(twoSum([3,2,4], 6));//[ 1, 2 ]
console.log(twoSum([3,3], 6));//[ 0, 1 ]