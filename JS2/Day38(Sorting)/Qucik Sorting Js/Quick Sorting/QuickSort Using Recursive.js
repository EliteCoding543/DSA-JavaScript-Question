function quickSortRecursive(arr, start, end) {
    // base case
    if (start >= end) {
        return;
    }

    let pivotIndex = partition(arr, start, end);

    quickSortRecursive(arr, start, pivotIndex - 1);
    quickSortRecursive(arr, pivotIndex + 1, end);

    return arr; // return sorted array

    function partition(arr, start, end) {
        let indx = start - 1;
        let pivot = arr[end]; // correct

        for (let j = start; j < end; j++) {
            if (arr[j] <= pivot) {
                indx++;
                [arr[j], arr[indx]] = [arr[indx], arr[j]];
            }
        }

        indx++;
        [arr[indx], arr[end]] = [arr[end], arr[indx]];

        return indx;
    }
}

console.log(quickSortRecursive([5, 3, 6, 8, 2], 0, 4));