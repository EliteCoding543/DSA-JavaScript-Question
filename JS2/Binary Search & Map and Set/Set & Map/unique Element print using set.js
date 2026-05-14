let arr = [10, 45, 18, 9, 9, 10, 45, 10, 8, 10];

let set = new Set();
for(let i = 0; i < arr.length; i++){
    if(set.has(arr[i])){  // Agar set ke andar value h to delet kr do sam dono value 
        set.delete(arr[i])
    }

    else {
        set.add(arr[i])  // Agar nhi h set ke andar to add kro value 
    }
}

console.log(set);