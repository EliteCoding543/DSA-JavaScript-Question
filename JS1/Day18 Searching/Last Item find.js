function LastItemFind(arr){

    // for(let i = arr.length - 1; i >= 0; i--){
    //     if(arr[i].category == "electronics"){
    //         return arr[i]
    //     }
    // }
    
    let ans = []
     for(let item of arr ){
        if(item.category == "electronics") {
            ans = item
            // Break
        }   
     }

     return ans
}

const items = [
 {id:1, name:"TV", category:"electronics"},
 {id:2, name:"Shirt", category:"clothing"},
 {id:3, name:"Phone", category:"electronics"},
 {id:4, name:"Laptop", category:"electronics"}
];

console.log(LastItemFind(items));
