function multiplyRecursively(n, m) {
  //Write code here and print output
//   function helper(n, m, ans){
    if(m === 1){
    //   console.log(ans)
      return n
    }

  return n + multiplyRecursively(n , m - 1);
}

console.log(multiplyRecursively(10, 4));