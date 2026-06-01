function twoSum(arr, target){
    let myMap = new Map();

    for(let i = 0; i < arr.length; i++){
        let num = arr[i]
        let Sum = target - num;

        if(myMap.has(Sum)){
            return[myMap.get(Sum), i]
        }

        myMap.set(num, i)
    }
}

console.log(twoSum([1, 3, 5, 15, 11, 9], 14))