//problem link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = -1;
  let end = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (start === -1) {
        start = i;
      } else {
        end = i;
      }
    }
  }
  if (start !== -1 && end === -1) {
    end = start;
  }
  return [start, end];
};

console.log(searchRange([5,7,7,8,8,10], 8));//[ 3, 4 ]
console.log(searchRange([5,7,7,8,8,10], 6));//[ -1, -1 ]
console.log(searchRange([], 0));//[ -1, -1 ]
