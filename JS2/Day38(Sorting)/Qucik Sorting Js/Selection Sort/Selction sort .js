function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // 👉 minimum find karo
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // 👉 swap only if needed
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }

        // 👉 har pass ke baad print
        console.log(`Pass ${i + 1}:`, arr);
    }

    return arr;
}

let arr = [29, 10, 14, 37, 13];
console.log("Sorted:", selectionSort(arr));