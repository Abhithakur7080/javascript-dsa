//problem link: https://leetcode.com/problems/zigzag-conversion
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;

    let rows = new Array(numRows).fill("");
    let currentRow = 0;
    let goingDown = false;

    for (let char of s) {
        rows[currentRow] += char;
        if (currentRow === 0 || currentRow === numRows - 1){
            goingDown = !goingDown;
        }
        currentRow += goingDown ? 1 : -1;
    }

    return rows.join("");
};

console.log(convert("PAYPALISHIRING", 3));//PAHNAPLSIIGYIR
/*
P     A     H     N   ->  PAHN
A  P  L  S  I  I  G   ->  APLSIIG
Y     I     R         ->  YIR
*/
console.log(convert("PAYPALISHIRING", 4));//PINALSIGYAHRPI
/*
P        I        N  -> PIN
A     L  S    I   G  -> ALSIG
Y  A     H  R        -> YAHR
P        I           -> PI
*/
console.log(convert("A", 1));//A
