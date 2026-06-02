let arr = [1, 2, 1, 2, 2, 3, 4, 3, 4, ];

function removeDuplicate(arr){
    let mySet = new Set(arr)

    return [...mySet]
}

console.log(removeDuplicate(arr))