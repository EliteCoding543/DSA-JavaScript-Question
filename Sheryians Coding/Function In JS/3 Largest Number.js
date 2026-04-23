function ThreeLargest(a, b, c){
    if(a >= b && a >= c) return a;
    if(b >= a && b >= c) return b;
    return c;
}

console.log(ThreeLargest(-20, 40, 10));