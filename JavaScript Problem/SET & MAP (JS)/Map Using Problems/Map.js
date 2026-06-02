let map = new Map();

map.set("name", "Shubham");
map.set("age", 22);

console.log(map.has("name"));

console.log(map.get("age"));
console.log(map)
map.set("program", "MERN Stack");

console.log(map)

console.log(map.get("program"));

console.log(map.entries());
console.log([...map.entries()]);

console.log(map.keys());
console.log([...map.keys()]);
console.log(map.values());
 console.log([...map.values()]);
 
 for(let [key, value] of map){
   console.log([key, value])
 }


//   Count of frq arr 

let arr = [1, 1, 1, 3, 2, 2, 2, 2, 2,];
let myMap = new Map()
// Agar num nahi hai 0 maan lo aur 1 store karo
for(let num of arr){
  myMap.set(num, (myMap.get(num)  || 0) + 1)
}

//Agar num pehle se hai. uski frequency lao aur +1 karo
for(let [key , value] of myMap){
    console.log([key, value])
}