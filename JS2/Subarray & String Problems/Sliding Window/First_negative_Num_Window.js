function firstNegative(arr, k) {
  let result = [];
  let queue = []; // negative numbers store karega

  let left = 0;

  for (let right = 0; right < arr.length; right++) {

    // agar negative hai to queue me daalo
    if (arr[right] < 0) {
      queue.push(arr[right]);
    }

    // jab window size k ho jaye
    if (right - left + 1 === k) {

      // answer push karo
      if (queue.length > 0) {
        result.push(queue[0]);
      } else {
        result.push(0);
      }

      // window slide karne se pehle check
      if (arr[left] === queue[0]) {
        queue.shift(); // remove old negative
      }

      left++; // window aage badhao
    }
  }

  return result;
}

// test
console.log(firstNegative([12,-1,-7,8,-15,30,16,28], 3));
// Output: [-1, -1, -7, -15, -15, 0]