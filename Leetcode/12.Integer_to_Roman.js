/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  //"" for ignoring 0th value on 0th index and we match according to values
  // I=1, V=5, X=10, L=50, C=100, D=500, M=1000
  let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let thousands = ["", "M", "MM", "MMM"];
  return (
    thousands[Math.floor(num / 1000)] +
    hundreds[Math.floor((num % 1000) / 100)] +
    tens[Math.floor((num % 100) / 10)] +
    ones[Math.floor(num % 10)]
  );
};

console.log(intToRoman(3749));//MMMDCCXLIX
console.log(intToRoman(58));//LVIII
console.log(intToRoman(1994));//MCMXCIV
