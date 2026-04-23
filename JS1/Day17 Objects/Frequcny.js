// let str = "abcdabc"

// let ans = {}
// for(let item of str){

//     if(ans .hasOwnProperty(item)){
//         ans[item] = ans[item] + 1
//     }

//     else 
//     {
//         ans[item] = 1
//     }
// }

// console.log(ans); 

// Object.preventExtensions
    
const obj = {
    name : "Shubham",
    age : 21
}

Object.preventExtensions(obj)  //  Add nhi krne dega Delet And update krne dega
Object.seal(obj)  // Add nhi krne dega and delete nhi krne dega Update kr skte ho sirf
Object.freeze(obj) // Ye 3 hi nhi krne dega 

obj.city = "Noida"  // Obj ke andar new key value add krna 
obj["Country"] = "India"   // Adding 

delete obj.age
obj.name = "Shivani"

console.log(obj);

