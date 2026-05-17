function array11(nums, index) {
    // Base Case: If index is out of bounds, stop recursion
    if (index >= nums.length) {
        return 0;
    }

    // Check if the current element is 11
    if (nums[index] === 11) {
        // Count 1 and move to the next index
        return 1 + array11(nums, index + 1);
    } else {
        // Count 0 and move to the next index
        return array11(nums, index + 1);
    }
}

console.log(array11([1, 11, 2, 3, 11], 0))