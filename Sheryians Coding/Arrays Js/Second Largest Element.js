function SecondLargest(arr, n) {
  // Write code here
  let max = arr[0]
  for(let item of arr){
    if(item > max){
      max = item
    }
  }
  let Smax = -1
  for(let item of arr){
    if(item > Smax && item < max){
      Smax = item
    }
  }
  console.log(Smax)
} 
