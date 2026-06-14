function isPalindrome(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}

function findClosestPalindrome(N) {
    let diff = 0;

    while (true) {
        if (N - diff >= 0 && isPalindrome(N - diff)) {
            return N - diff;
        }

        if (isPalindrome(N + diff)) {
            return N + diff;
        }

        diff++;
    }
}

let arr = [2, 12, 19];

let result = arr.map(num => findClosestPalindrome(num));

console.log(result);