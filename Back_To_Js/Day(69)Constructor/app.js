function Person(n, a, c){
    this.name = n;
    this.age = a;
    this.city = c;
}

let p1 = new Person("Mohit", 23, "Delhi");
let p2 = new Person("shubham", 12, "Noida");
let p3 = new Person("Shivani", 19, "Greater Noida West");

console.log(p1);
console.log(p2);
console.log(p3.city, p3.age);
console.log(p3);