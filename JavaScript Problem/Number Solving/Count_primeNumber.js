function countPrime(n){
    let count = 0;

    for(let num = 2; num <= n; num++){
        let isPrime = true;

        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            count++;
        }
    }

    return count;
}