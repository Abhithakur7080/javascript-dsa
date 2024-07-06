//problem link: https://leetcode.com/problems/minimum-window-substring/
/**
 * @param {string} str
 * @param {string} pattern
 * @return {string}
 */
var minWindow = function (str, pattern) {
  let windowStart = 0;
  let matched = 0;
  let substringStart = 0;
  let minLength = str.length + 1;
  let freqMap = new Map();

  // Populate the frequency map with the characters in the pattern
  for (let char of pattern) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const endChar = str.charAt(windowEnd);
    if (freqMap.has(endChar)) {
      freqMap.set(endChar, freqMap.get(endChar) - 1);
      if (freqMap.get(endChar) >= 0) {
        // count every matching of a character
        matched++;
      }
    }

    // Shrink the window from the beginning if we have matched all the characters
    while (matched === pattern.length) {
      if (minLength > windowEnd - windowStart + 1) {
        minLength = windowEnd - windowStart + 1;
        substringStart = windowStart;
      }
      const startChar = str[windowStart];
      windowStart++;
      if (freqMap.has(startChar)) {
        if (freqMap.get(startChar) === 0) {
          matched--; // Before putting the character back, decrement the matched count
        }
        freqMap.set(startChar, freqMap.get(startChar) + 1);
      }
    }
  }

  if (minLength > str.length) {
    return "";
  }

  return str.substring(substringStart, substringStart + minLength);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));
