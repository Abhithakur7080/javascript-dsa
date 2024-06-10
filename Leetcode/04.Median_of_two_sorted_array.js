//problem link: https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let ans = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            ans[k] = nums1[i];
            i++;
        } else {
            ans[k] = nums2[j];
            j++;
        }
        k++;
    }
    while (i < nums1.length) {
        ans[k] = nums1[i];
        i++;
        k++;
    }
    while (j < nums2.length) {
        ans[k] = nums2[j];
        j++;
        k++;
    }

    let mid = Math.floor(ans.length / 2);
    if (ans.length % 2 === 0) {
        return (ans[mid - 1] + ans[mid]) / 2;
    } else {
        return ans[mid];
    }
};

console.log(findMedianSortedArrays([1,3], [2]));//2
console.log(findMedianSortedArrays([1,2], [3,4]));//2.5
