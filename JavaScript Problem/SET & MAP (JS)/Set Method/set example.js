let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(20);
mySet.add(30);
mySet.add("Hello");
mySet.add(1.2);

// gar value h to visti otherwise not avil
if(mySet.has(20)){
    console.log("Already Visited")
}
else{
    console.log("Not Avail")
}

console.log("Before Delete Method My" ,mySet)

console.log(mySet.has("hello"))
console.log(mySet.has("Hello"))

mySet.delete(1.2)
console.log("After Delete Method My" ,mySet)