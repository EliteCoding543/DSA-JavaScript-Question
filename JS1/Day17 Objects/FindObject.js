// function FindObj(arr, Targetid){
//     for(let item of arr){
//         if(item.id == Targetid){
//             return item
//         }
//     }

//     return {}

// }
// const user = [
//         {id :1, name : "Neha"},
//         {id : 2, name : "Shubham"},
//         {id : 3, name : "Shivani"},
//         {id : 4, name : "Kajal"}
//     ];

// console.log(FindObj(user, 2));    

// Using For of loop 

function FindUserCity(arr, Usercity){
    let ans = []
    for(let item of arr){
        if(item.city == Usercity){
            ans.push(item.name)
        }
    }

    return ans
}

const User = [
    {name : "Shubham", city: "Delhi"},
    {name : "Shivani", city : "Mumbai"},
    {name : "Rohit", city : "Delhi"},
    {name : "Mohit", city : "Noida"}

]

console.log(FindUserCity(User, "Delhi"));
