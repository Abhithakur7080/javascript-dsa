//problem link: https://leetcode.com/problems/maximum-average-subarray-i
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findMaxAverage = function(nums, k) {
//     let max = 0;
//     for(let i=0; i<nums.length-k; i++){
//         let sum = 0;
//         for(let j=0; j<k; j++){
//             sum += nums[i];
//         }
//         max = Math.max(max, sum)
//     }
//     return max/4;
// };

var findMaxAverage = function (nums, k) {
  let windowSum = 0;
  //get starter window sum from 0 to kth - 1
  for (let i = 0; i < k; i++) {
    //sum of the elements inside the window
    // |---window---|+++|-|
    windowSum += nums[i];
  }
  //set it as initial maximum sum
  let maxSum = windowSum;

  for (let windowEnd = k; windowEnd < nums.length; windowEnd++) {
    //remove left nums[ith] value and add right nums[kth] value
    // |-L-| -- |---window---| ++ |-R-|
    windowSum = windowSum - nums[windowEnd - k] + nums[windowEnd];
    //calculate maximum from previous max sum and current sum
    maxSum = Math.max(maxSum, windowSum);
  }

  //average = total sum / no. of component included to sum
  return maxSum / k;
};
console.log(findMaxAverage([1,12,-5,-6,50,3], 4));//12.75
console.log(findMaxAverage([5], 1));//5