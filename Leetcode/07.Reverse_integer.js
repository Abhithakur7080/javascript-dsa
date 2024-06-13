//problem link: https://leetcode.com/problems/reverse-integer
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reversed = 0;
  const INT_MAX = 2 ** 31 - 1; // 2147483647
  const INT_MIN = -(2 ** 31); // -2147483648

  while (x !== 0) {
    let rem = x % 10;
    x = Math.trunc(x / 10);
    if (
      reversed > Math.trunc(INT_MAX / 10) ||
      (reversed === Math.trunc(INT_MAX / 10) && rem > 7)
    ) {
      return 0;
    }
    if (
      reversed < Math.trunc(INT_MIN / 10) ||
      (reversed === Math.trunc(INT_MIN / 10) && rem < -8)
    ) {
      return 0;
    }

    reversed = reversed * 10 + rem;
  }

  return reversed;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
