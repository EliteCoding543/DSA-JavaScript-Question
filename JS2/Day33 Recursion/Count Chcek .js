// function count1(n){
//     function helper(n, count){
//         if(n == 0){
//             console.log(count)
//             return
//         }
//         lastDigit = n % 10;
//         n = Math.floor(n / 10)

//         if(lastDigit == 1){
//             count++
//         }
//         return helper(n, count);
//     }

//    return  helper(n, 0);
// }

// count1(131511)

//  Without Extra varibale 

function count(num){
    if(num == 0){
        return 0
    } // Base Case 

    lastDigit = num % 10
    num = Math.floor(num / 10)

    if(lastDigit == 1){
        return 1 + count(num);
    }

    else {
        return count(num)
    }
}

console.log(count(112131));

