function introduce(){
    console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
}

let p1 = {
    name : "shubham",
    age : 22,

//     introduce: function(){
//     console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
// }
}

let p2 = {
    name : "kashyap",
    age : 33
}

// p1.introduce() -> 1
// p2.introduce.call(p2) -> 1


introduce.call(p1);
introduce.call(p2);