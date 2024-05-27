function fibonacci(n){
    const fibo = [0, 1];
    for(let i=2; i<n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo
}
console.log(fibonacci(2));//[ 0, 1 ]
console.log(fibonacci(3));//[ 0, 1, 1 ]
console.log(fibonacci(7));//[ 0, 1, 1, 2, 3, 5, 8 ]