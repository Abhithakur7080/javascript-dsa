//problem link: https://leetcode.com/problems/pass-the-pillow
/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let chunks = Math.floor(time / (n - 1));
    return chunks % 2 === 0 ? (time % (n - 1) + 1) : (n - time % (n - 1));
};

console.log(passThePillow(4, 5));//2
console.log(passThePillow(3, 2));//3