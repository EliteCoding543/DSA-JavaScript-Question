let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  let temp = [];
  for (let j = i; j < arr.length; j++) {
    temp.push(arr[j]);
    console.log(temp);
  }
}