function Person(n, a, c){
    this.name = n;
    this.age = a;
    this.city = c;
}

let p1 = new Person("Mohit", 23, "Delhi");
let p2 = new Person("shubham", 12, "Noida");

console.log(p1, p2);