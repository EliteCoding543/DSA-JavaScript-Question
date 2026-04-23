function HighExpen(arr){
     let ans = []
     for(let item of arr){
         if(item.price > 5000){
            ans.push(item)
         }
     }
     // if Amount Not Find in this object than return Epty Obj
     if(ans.length === 0){
        return "Kuch nhi mila"
     }
   return ans;   
}

const Pro = [
    {id: 1, name : "Mouse", price : 500 },
    {id: 2, name : "Laptop", price : 1500 },
    {id: 3, name : "Monitor", price : 12000 },
    {id: 4, name : "Tablet", price : 80000 },
    {id: 5, name : "MacBook", price : 61500 },
];

console.log(HighExpen(Pro));
