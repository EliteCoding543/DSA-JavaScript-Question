function Person(n, a, c){
   this.name = n;
   this.age = a;
   this.city = c;

}

let p1 = new Person("Shubham", 12, "Noida");
let p2 = new Person("Mohit", 33, "Delhi");

//    How to create a function in side constructor 
 
  Person.prototype.SayHi = function(){
    console.log(`My name is ${this.name} and my age is ${this.age} my city is ${this.city}`);
  }

p1.SayHi();
p2.SayHi();

const user = {
    name: "Shubham",
    show() {
        console.log(this.name);
    }
};

const x = user.show;

user.show();
x();