function arrayOperations(arr) {
  let sum = 0;
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  let avg = Math.floor(sum / arr.length);
  return { sum, avg, max };   // return values
}

console.log(arrayOperations([1, 2, 3, 4, 6, 7]));

//   

var x = 10;
function x() 
{
   return 20; 
}
console.log(typeof x);
console.log(x);


// Accumeraltorr

let arr = [1, 3, 3, 4, 4]

let res = arr.reduce((acc, curr) => {
  return acc = acc * curr

})

console.log("Acc is ", res);

