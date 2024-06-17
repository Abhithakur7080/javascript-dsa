//problem link: https://leetcode.com/problems/roman-to-integer
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = new Map();
    romanMap.set("I", 1);
    romanMap.set("V", 5);
    romanMap.set("X", 10);
    romanMap.set("L", 50);
    romanMap.set("C", 100);
    romanMap.set("D", 500);
    romanMap.set("M", 1000);

    let ans = 0;
    for(let i=0; i<s.length; i++){
        ans += romanMap.get(s[i])
        if(0<i && romanMap.get(s[i]) > romanMap.get(s[i-1])){
            ans -= 2 * romanMap.get(s[i-1])
        }
    }
    return ans;
};

console.log(romanToInt("III"));//3
console.log(romanToInt("LVIII"));//58
console.log(romanToInt("MCMXCIV"));//1994