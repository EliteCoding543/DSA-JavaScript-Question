let str = "abcEFGH!%$#@"

function countLatter(str){
    let UpperCase = 0;
    let LowerCase = 0
    let SpacialChar = 0

  for(let item of str){
    if(item >= "A" && item < "Z"){
        UpperCase++
    }

    else if(item >= "a" && item < "z"){
        LowerCase++
    }
    else {
        SpacialChar++
    }
  }

  return {UpperCase, LowerCase, SpacialChar}  // Object ko ase bhi likh sakte h 

  // UpperCaseCount : UpperCase,
  // LowerCaseCount : LowerCase
}

console.log(countLatter(str));
