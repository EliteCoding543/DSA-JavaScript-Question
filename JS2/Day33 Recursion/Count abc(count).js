function CountABC(str, i) {
  if (i > str.length - 3) { // stop if less than 3 chars remaining
    return 0;
  }

  if (
    (str[i] === "a" && str[i + 1] === "b" && (str[i + 2] === "a" || str[i + 2] === "c"))
  ) {
    return 1 + CountABC(str, i + 1);
  } 
  
  else {
    return CountABC(str, i + 1);
  }
}


 console.log(CountABC("abcxxabc"));