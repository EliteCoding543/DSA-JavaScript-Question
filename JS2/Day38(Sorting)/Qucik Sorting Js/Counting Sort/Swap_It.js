function SwapIT(myArr) {
    let mismatchCount = 0;

    // Count how many elements are not in their correct sorted positions
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] !== i + 1) {
            mismatchCount++;
        }
    }

    if (mismatchCount === 0 || mismatchCount === 2) {
        return "YES"
    } else {
        return "NO"
    }
}

console.log(SwapIT([5, 2, 3, 4, 1]));
console.log(SwapIT([5, 1, 2, 4, 3]));