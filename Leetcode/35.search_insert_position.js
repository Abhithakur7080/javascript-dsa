//problem link: https://leetcode.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if(target === nums[mid]){
        return mid
    } else if(nums[mid] > target) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }
  }
  return left;
};

console.log(searchInsert([1,3,5,6], 5));//2
console.log(searchInsert([1,3,5,6], 2));//1
console.log(searchInsert([1,3,5,6], 7));//4