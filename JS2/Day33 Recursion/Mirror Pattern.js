function mirror(num){
  if(num == 0) return "";

  return mirror(num - 1) + num;
}

function reverse(num){
  if(num == 0) return "";

  return num + reverse(num - 1);
}

console.log(mirror(3) + reverse(2));