function findSmallestGreater(n, arr) {
    // Step 1: Original array ki ek copy banao
    let sortedArr = [...arr];

    // Step 2: Copy array ko Bubble Sort se sort karo
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                // Swap elements
                let temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }

    let result = [];

    // Step 3: Original array ke har element ke liye sorted array mein just bada element dhoodho
    for (let i = 0; i < n; i++) {
        let currentElement = arr[i];
        let smallestGreater = -10000000; // Default value

        // Sorted array mein currentElement ke baad aane wala pehla bada element dhoodho
        for (let j = 0; j < n; j++) {
            if (sortedArr[j] > currentElement) {
                smallestGreater = sortedArr[j];
                break; // Pehla bada element hi smallest greater hoga kyunki array sorted hai
            }
        }
        
        result.push(smallestGreater);
    }

    return result;
}

// Example 1 Test:
console.log(findSmallestGreater(4, [13, 6, 17, 12]).join(' ')); 
// Output: 17 12 -10000000 13