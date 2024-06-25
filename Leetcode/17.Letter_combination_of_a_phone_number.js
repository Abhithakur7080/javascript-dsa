/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if(!digits.length){
        return []
    }
  const keypad = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let res = [];
  function backtrack(str, i){
    if(str.length === digits.length){
        res.push(str)
    } else {
        for(let char of keypad[digits[i]]){
            backtrack(str+char, i+1)
        }
    }
  }
  backtrack('', 0);
  return res;
};
console.log();