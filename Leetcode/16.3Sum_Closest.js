//problem link: https://leetcode.com/problems/3sum-closest/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let n = nums.length;
  if (n < 3) {
    return triplets;
  }
  nums.sort((a, b) => a - b);
  let closest_sum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        return sum;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
      if(Math.abs(sum - target) < Math.abs(closest_sum - target)){
        closest_sum = sum
      }
    }
  }
  return closest_sum;
};
console.log(threeSumClosest([-1, 2, 1, -4], 1)); //2
console.log(threeSumClosest([0, 0, 0], 1)); //0
