/**
 * @param {string} str
 * @param {number} k
 * @return {number}
 */
var longestSubstringWithKdistinct = function (str, k) {
  let windowStart = 0;
  let maxLength = 0;
  let charFrequency = new Map();

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const endChar = str.charAt(windowEnd);
    charFrequency.set(endChar, charFrequency.get(endChar) + 1 || 1);

    while (charFrequency.size > k) {
        const startChar = str.charAt(windowStart);
        charFrequency.set(startChar, charFrequency.get(startChar) - 1);
        if (charFrequency.get(startChar) === 0) {
            charFrequency.delete(startChar);
        }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};

console.log(longestSubstringWithKdistinct("araaci", 2)); //4, The longest substring with no more than '2' distinct characters is "araa".
console.log(longestSubstringWithKdistinct("araaci", 1)); //2, The longest substring with no more than '1' distinct characters is "aa".
console.log(longestSubstringWithKdistinct("cbbebi", 3)); //5, The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
