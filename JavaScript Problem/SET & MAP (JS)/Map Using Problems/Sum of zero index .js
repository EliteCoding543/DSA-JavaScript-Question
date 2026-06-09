function findZeroSumSubarrays(arr) {
    let map = new Map();
    let prefixSum = 0;
    let result = [];

    map.set(0, [-1]);

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        if (map.has(prefixSum)) {
            let indexes = map.get(prefixSum);

            for (let start of indexes) {
                result.push([start + 1, i]);
            }

            indexes.push(i);
        } else {
            map.set(prefixSum, [i]);
        }
    }

    if (result.length === 0) {
        console.log(-1);
        return;
    }

    result.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });

    for (let [start, end] of result) {
        console.log(`Subarray found from Index ${start} to ${end}`);
    }
}

findZeroSumSubarrays([6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7]);