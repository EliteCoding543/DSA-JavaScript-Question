function bubbleSort(a, n) {
    let totalSwaps = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                // Swap elements
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                
                // Swap count badhao
                totalSwaps++;
            }
        }
    }
    return [totalSwaps, a[0], a[n - 1]];
}
console.log(bubbleSort([6, 4, 1], 3));
console.log(bubbleSort([1, 2, 3], 3));
