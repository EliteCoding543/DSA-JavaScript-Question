function reverseIsSorted(arr, n = arr.length){
    // Base case Chcek
    if(n === 0 || n === 1) return true;

    // Recursive Call 
    return arr[n - 1] >= arr[n -  2] && reverseIsSorted(arr, n - 1);
}

console.log(reverseIsSorted([1, 2, 3, 4]));
console.log(reverseIsSorted([1, 2, 3, 5, 4]));
console.log(reverseIsSorted([5, 3, 4, 1])); 