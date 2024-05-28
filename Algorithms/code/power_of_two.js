function isPowerOfTwo(n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n%2 !== 0){
            return false;
        }
        n = n/2;
    }
    return true;
}
function isPowerOfTwoBitwise(n){
    if(n<1){
        return false;
    }
    return (n & (n-1))===0;
}
console.log(isPowerOfTwoBitwise(1));//true -> 001 & 000 = 000
console.log(isPowerOfTwoBitwise(2));//true -> 010 & 001 = 000
console.log(isPowerOfTwoBitwise(3));//false -> 011 & 010 = 010
console.log(isPowerOfTwoBitwise(4));//true -> 100 & 011 = 000
console.log(isPowerOfTwoBitwise(5));//false -> 101 & 100 = 100