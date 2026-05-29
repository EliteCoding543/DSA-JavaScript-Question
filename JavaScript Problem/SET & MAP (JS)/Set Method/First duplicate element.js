let arr = [1,2,3,2,5];
function FirstDuplicate(arr){
    let seen = new Set();

    for(let num of arr){
        if(seen.has(num)){
            return num;
        }

        else {
            seen.add(num)
        }
    }

    return -1
}

console.log(FirstDuplicate(arr));
