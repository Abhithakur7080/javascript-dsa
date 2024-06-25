/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let windowSum = 0;
  let minLength = Infinity;
  let windowStart = 0;
  //iterate the nums rooms |---------------|
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    //sum of the elements inside the window
    windowSum += nums[windowEnd];
    // if window sum is greater or equal to the target then check with decrease
    // |---window---|+++|-|
    while (windowSum >= target) {
    //check the window size start|--window--|end due to index start from 0 add 1 every iteration
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      // |-| -- |---window---|
      windowSum -= nums[windowStart];
      windowStart++;
    }
  }
  //if not any window size found
  if (minLength === Infinity) {
    minLength = 0;
  }
  return minLength;
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
