let arr = [2, 3, 5, 6, 7, 8, 9, 4];

function insertionSort1(arr) {
  let n = arr.length;
  let key = arr[n - 1];
  let i = n - 2;

  while (i >= 0 && arr[i] > key) {
    arr[i + 1] = arr[i];
    console.log(arr.join(' ') + ' ');
    i--;
  }

  arr[i + 1] = key;
  console.log(arr.join(' ') + ' ');
}

insertionSort1(arr);
