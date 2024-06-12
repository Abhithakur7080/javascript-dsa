//problem link: https://leetcode.com/problems/longest-substring-without-repeating-characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const seen = new Set();
  let maxCount = 0;
  let left = 0;
  let right = 0;
  while (right < s.length) {
    const c = s.charAt(right);
    if (seen.has(c)) {
      while (s.charAt(left) !== c) {
        seen.delete(s.charAt(left));
        left++;
      }
      seen.delete(c);
      left++;
    } else {
      seen.add(c);
      maxCount = Math.max(maxCount, right - left + 1);
      right++;
    }
  }
  return maxCount;
};

console.log(lengthOfLongestSubstring("abcabcbb"));//3
console.log(lengthOfLongestSubstring("bbbbb"));//1
