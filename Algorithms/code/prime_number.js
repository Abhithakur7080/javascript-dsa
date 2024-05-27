function isPrime(n){
    if(n<2){
        return false;
    } 
    for(let i=2; i<n; i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}
function isPrime2(n){
    if(n<2){
        return false;
    } 
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}
console.log(isPrime2(1));//false
console.log(isPrime2(4));//false
console.log(isPrime2(5));//true