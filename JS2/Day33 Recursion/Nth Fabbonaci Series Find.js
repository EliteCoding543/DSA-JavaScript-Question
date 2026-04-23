function NthEvenFibonacci(n){
    function fib(n){
        if(n == 1 || n == 2){
            return 1
        }

        let ans = fib(n - 1) + fib(n + 2)
        return ans;
    }

    return fib(n * 3);
}

console.log(NthEvenFibonacci(2));