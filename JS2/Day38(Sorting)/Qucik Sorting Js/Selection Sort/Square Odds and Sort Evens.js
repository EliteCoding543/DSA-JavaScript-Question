function squareOdd(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num % 2 !== 0) {
            result.push(num * num);
        } else {
            result.push(num);
        }
    }

    // Selection Sort
    for (let i = 0; i < result.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < result.length; j++) {
            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }

        [result[i], result[minIndex]] = [result[minIndex], result[i]];
    }

    return result;
}

console.log(squareOdd([3, 6, 2, 4, 8, 11, 7]));