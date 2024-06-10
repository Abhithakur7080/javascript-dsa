//problem link: https://leetcode.com/problems/next-permutation/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var swap = function (nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
};
var reverse = function (nums, left, right) {
  while (left < right) {
    swap(nums, left, right);
    left++;
    right--;
  }
};
var nextPermutation = function (nums) {
  let n = nums.length;
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = n - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }
  reverse(nums, i + 1, n - 1);
};
let arr1 = [1,2,3]
nextPermutation(arr1)
console.log(arr1);//[ 1, 3, 2 ]

let arr2 = [3,2,1]
nextPermutation(arr1)
console.log(arr1);//[ 2, 1, 3 ]

let arr3 = [1,1,5]
nextPermutation(arr1)
console.log(arr1);//[ 2, 3, 1 ]