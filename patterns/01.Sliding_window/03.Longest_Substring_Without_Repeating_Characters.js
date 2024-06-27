/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let windowStart = 0;
  let maxLength = 0;
  let freqMap = new Map();

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const endChar = s.charAt(windowEnd);

    if (freqMap.has(endChar)) {
      //replace the window start value if exist in map
      windowStart = Math.max(windowStart, freqMap.get(endChar) + 1);
    }
    //if exist then replace value with window end index else add new key value
    freqMap.set(endChar, windowEnd);

    //check the window length and store the maximum window length
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength
};

console.log(lengthOfLongestSubstring("abcabcbb"));//3
console.log(lengthOfLongestSubstring("bbbbb"));//1
