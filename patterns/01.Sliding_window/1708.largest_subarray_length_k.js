/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// var maxSubarrayOfSizeK = function (arr, k) {
//   //brute force
//   let maxSum = 0;
//   let windowSum = 0;

//   //loop through array
//   for (let i = 0; i < arr.length - k + 1; i++) {
//     //keep track of sum in current window
//     windowSum = 0;
//     for (let j = i; j < i + k; j++) {
//       windowSum += arr[j];
//     }

//     //if currentWindowSum is > maxWindowSum
//     //set currentWindwoSum to maxWindowSum
//     maxSum = Math.max(maxSum, windowSum);
//   }
//   return maxSum;
// };
var maxSubarrayOfSizeK = function (arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return maxSum;
};

console.log(maxSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3)); //9
console.log(maxSubarrayOfSizeK([2, 3, 4, 1, 5], 2)); //7
