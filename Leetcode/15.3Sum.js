//problem link: https://leetcode.com/problems/container-with-most-water/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let triplets = [];
    let n = nums.length;
    if (n < 3) {
        return triplets;
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < n - 2; i++) {
        // Skip duplicate elements for i
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = n - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                triplets.push([nums[i], nums[left], nums[right]]);
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
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return triplets;
};
console.log(threeSum([-1,0,1,2,-1,-4]));//[ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(threeSum([0,1,1]));//[]
console.log(threeSum([0,0,0]));//[ [ 0, 0, 0 ] ]