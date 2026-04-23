var FizzBuzz = function(arr){
    let ans = []
    for(let i = 1; i <= arr; i++){
       if(i % 3 == 0 && i % 5 == 0){
        ans.push("FizzBuzz")
       }

       else if(i % 3 == 0){
        ans.push("Fizz")
       }

       else if(i % 5 == 0){
        ans.push("Buzz")
       }


       else {
        // Both Method Convert Number to String
          // ans.push(String(i))
        //   ans.push("" + i)  
          ans.push(`${i}`)
       }
    }

    return ans
};

console.log(FizzBuzz(20));

