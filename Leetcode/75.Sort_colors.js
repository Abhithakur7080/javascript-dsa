//problem link: https://leetcode.com/problems/sort-colors
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0;
  let mid = 0;
  let right = nums.length - 1;

  while (mid <= right) {
    if (nums[mid] === 0) {
      [nums[left], nums[mid]] = [nums[mid], nums[left]];
      mid++;
      left++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[right], nums[mid]] = [nums[mid], nums[right]];
      right--;
    }
  }
};

let nums1 = [2,0,2,1,1,0];
sortColors(nums1)
console.log(nums1);//[ 0, 0, 1, 1, 2, 2 ]

let nums2 = [2,0,1];
sortColors(nums2)
console.log(nums2);//[ 0, 1, 2 ]