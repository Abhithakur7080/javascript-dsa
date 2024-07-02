//problem link: https://leetcode.com/problems/plus-one
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//     const sum =  Number(digits.join("")) + 1;
//     return sum.toString().split('').map(Number);
// };
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
    }
    return [1,...digits];
}

// console.log(plusOne([1,2,3]));//[ 1, 2, 4 ]
// console.log(plusOne([4,3,2,1]));//[ 4, 3, 2, 2 ]
// console.log(plusOne([9]));//[ 1, 0 ]
console.log(plusOne([9, 8, 9]));//[ 1, 0 ]