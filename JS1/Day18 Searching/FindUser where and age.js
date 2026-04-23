function UserageCity(arr){
    let ans = []
    for(let item of arr){
        if(item.age > 25 && item.city == "Delhi"){
            ans.push(item);
        }
    }

    return ans
  };

const users = [
 {id:1, name:"Aman", age:22, city:"Delhi"},
 {id:2, name:"Riya", age:28, city:"Mumbai"},
 {id:3, name:"Karan", age:30, city:"Delhi"}
];

console.log(UserageCity(users));
