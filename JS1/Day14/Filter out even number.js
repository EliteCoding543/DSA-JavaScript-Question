const arr = [1, 3, 4, 3, 4]

const NewArr = arr.map(item => item * 3).filter(item => item % 2 == 0).reduce((acc, curr) =>{
    return (acc * curr)
},1)

console.log(NewArr) ;

// Reverse A string 

function reverseAString(inputString){
    let result = "";   // empty string

    for(let i = inputString.length - 1; i >= 0; i--){
        result = result + inputString[i];
    }
  if(result === inputString){
    console.log("Is Palindrome", result);
  }

  else {
    console.log("Not Palindrome", result);
    
  }

    return result;
}

console.log(reverseAString("NAYAN"));



