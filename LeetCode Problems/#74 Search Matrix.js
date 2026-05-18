let arr = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
let target = 34;

// Helper function to perform binary search on a single row
function searchInRow(row, target) {
    let start = 0;
    let end = row.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (row[mid] === target) {
            return true; // Target found
        } else if (target > row[mid]) {
            start = mid + 1; // Search right half
        } else {
            end = mid - 1; // Search left half
        }
    }
    return false;
}

function SearchMat(arr, target) {
    if (arr.length === 0 || arr[0].length === 0) return false;

    let m = arr.length;
    let n = arr[0].length;
    let startRow = 0;
    let endRow = m - 1;

    // Phase 1: Binary Search on Rows to find the correct row range
    while (startRow <= endRow) {
        let midRow = Math.floor((startRow + endRow) / 2);

        // Check if the target lies within the boundaries of the current midRow
        if (target >= arr[midRow][0] && target <= arr[midRow][n - 1]) {
            // Phase 2: Perform binary search inside this specific row
            return searchInRow(arr[midRow], target);
        } 
        // If target is greater than the largest item in the row, look down
        else if (target > arr[midRow][n - 1]) {
            startRow = midRow + 1;
        } 
        // Otherwise, look up
        else {
            endRow = midRow - 1;
        }
    }
    return false; // Target not within matrix bounds
}

console.log(SearchMat(arr, target)); // Output: true