function findClosestPair(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    let closestPair = [];
    let minDiff = Infinity; // Shuruat mein difference bahut bada rakhenge

    while (left < right) {
        let sum = arr[left] + arr[right];
        let currentDiff = Math.abs(target - sum); // Target se kitni doori hai

        // Agar naya difference purane se kam hai, toh ise 'Best' maan lo
        if (currentDiff < minDiff) {
            minDiff = currentDiff;
            closestPair = [arr[left], arr[right]];
        }

        // Pointer movement (Wahi purana logic)
        if (sum < target) {
            left++; // Sum badhao taaki target ke paas pahunchein
        } else if (sum > target) {
            right--; // Sum kam karo taaki target ke paas pahunchein
        } else {
            // Agar sum === target mil gaya, toh isse closest kuch nahi ho sakta
            return [arr[left], arr[right]];
        }
    }

    return closestPair;
}

let arr = [10, 22, 28, 29, 30, 40];
let target = 54;
console.log("Closest Pair:", findClosestPair(arr, target)); 
// Output: [22, 30] (Sum = 52, Diff = 2)