//problem link: https://leetcode.com/problems/string-to-integer-atoi/
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const INT_MAX = 2 ** 31 - 1; // 2147483647
  const INT_MIN = -(2 ** 31); // -2147483648

  let i = 0,
    sign = 1,
    result = 0;

  //1. checking whitespace
  while (i < s.length && s[i] === " ") {
    i++;
  }
  //2. checking sign
  if (i < s.length && (s[i] === "+" || s[i] === "-")) {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }
  //3. convert character to number
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    // result = result*10 + (s[i] - "0");
    result = result * 10 + Number(s[i]);
    // 4. Rounding 32-bit signed
    if (sign === 1 && result > INT_MAX) return INT_MAX;
    if (sign === -1 && result > -INT_MIN) return INT_MIN;
    i++;
  }
  return result * sign;
};
console.log(myAtoi("42")); //42
console.log(myAtoi("-042")); //-42
console.log(myAtoi("1337c0d3")); //1337
