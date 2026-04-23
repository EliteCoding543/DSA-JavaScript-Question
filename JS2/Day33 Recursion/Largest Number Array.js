function maxElement(arr){
    function Helper(i){
       if(i == arr.length - 1){   // base Case yaha par rukhna
        return arr[i]
       } 

       let MaxNum = Helper(i + 1);
       return Math.max(arr[i], MaxNum);
    }

    return Helper(0)
}

console.log(maxElement([1, 2, 24, 6, 18, 9], 0))