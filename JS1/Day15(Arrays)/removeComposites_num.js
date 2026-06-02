function removeComposite(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return true;
        }
    }

    return false;
}

let arr = [3, 12, 13, 15];

let result = arr.filter(num => !removeComposite(num));

console.log(result);