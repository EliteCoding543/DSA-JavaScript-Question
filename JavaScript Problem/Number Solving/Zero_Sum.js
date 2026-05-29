function smallestDifferenceArray(N) {
    let result = [];
    
    // Calculate the absolute starting point
    let floor = Math.floor(N / 2);
    
    for (let i = -floor; i <= floor; i++) {
        // If N is even, we must skip 0 to prevent having N+1 elements
        if (N % 2 === 0 && i === 0) {
            continue;
        }
        result.push(i);
    }
    
    return result;
}
console.log(smallestDifferenceArray([3]))