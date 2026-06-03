function sumArrayExceptSelf(nums, n) {
    let totalSum = 0;

    for (let i = 0; i < n; i++) {
        totalSum += nums[i];
    }

    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(totalSum - nums[i]);
    }

    return result;
}