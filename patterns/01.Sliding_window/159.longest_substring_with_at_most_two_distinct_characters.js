/**
 * @param {String} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = (s) => {
  let windowStart = 0;
  let maxLength = 0;
  let freqMap = new Map();

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const endChar = s.charAt(windowEnd);
    freqMap.set(endChar, freqMap.get(endChar) + 1 || 1);

    while (freqMap.size > 2) {
      const startChar = s.charAt(windowStart);
      freqMap.set(startChar, freqMap.get(startChar) - 1);
      if (freqMap.get(startChar) === 0) {
        freqMap.delete(startChar);
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};
console.log(lengthOfLongestSubstringTwoDistinct("eceba")); //3
console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb")); //5
