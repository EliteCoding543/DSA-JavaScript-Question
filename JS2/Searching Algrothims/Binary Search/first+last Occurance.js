var searchRange = function(arr, target) {
    let result = [-1, -1];

    // 1. First Occurrence dhoondo
    result[0] = findFirst(arr, target);
    
    // Agar first hi nahi mila, toh last dhoondne ka fayda nahi
    if (result[0] !== -1) {
        result[1] = findLast(arr, target);
    }

    return result;
};

// First Occurrence function
function findFirst(arr, target) {
    let start = 0, end = arr.length - 1;
    let ans = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            ans = mid;
            end = mid - 1; // Left side check karo aur ke liye
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return ans;
}

// Last Occurrence function
function findLast(arr, target) {
    let start = 0, end = arr.length - 1;
    let ans = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            ans = mid;
            start = mid + 1; // Right side check karo aur ke liye
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return ans;
}
console.log(searchRange([5,7,7,8,8,10], 8))