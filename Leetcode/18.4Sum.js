//problem link: https://leetcode.com/problems/4sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let quadruplets = [];
  let n = nums.length;
  if (n < 4) {
    return quadruplets;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 3; i++) {
    // Skip duplicate elements for i
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < n - 2; j++) {
      // Skip duplicate elements for j
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let left = j + 1;
      let right = n - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          // Skip duplicate elements for left
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
          // Skip duplicate elements for right
          while (left < right && nums[right] === nums[right + 1]) {
            right--;
          }
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return quadruplets;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); //[ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]
console.log(fourSum([2, 2, 2, 2, 2], 8)); //[ [ 2, 2, 2, 2 ] ]
