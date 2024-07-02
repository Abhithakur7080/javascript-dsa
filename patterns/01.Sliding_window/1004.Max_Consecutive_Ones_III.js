/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let windowStart = 0;
    let maxLength = 0;
    let maxOnesCount = 0

    for(let windowEnd = 0; windowEnd<nums.length; windowEnd++){
        if(nums[windowEnd] === 1){
            maxOnesCount++;
        }
        if((windowEnd - windowStart + 1 - maxOnesCount) > k){
            if(nums[windowStart]===1){
                maxOnesCount--;
            }
            windowStart++;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength
};