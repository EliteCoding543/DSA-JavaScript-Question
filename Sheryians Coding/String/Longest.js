function longestString(arr) {
   let Longest = [0]
   for(let i = 0; i < arr.length; i++){
    if(arr[i].length > Longest.length){
      Longest = arr[i]
    }
   }
   return Longest
}

console.log(longestString(["cat","elephant","dog","Fish"]));
