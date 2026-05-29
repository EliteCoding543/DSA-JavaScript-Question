// / 2. has() in Map. Checks whether a key exists in a Map.

const user = new Map()

user.set("name", "Rahul")
user.set("age", 15);

console.log(user.has("name"));
console.log(user.has("15"));

// Value exist karti hai ya nahi kaise check kare
// Method map.value

console.log([...user.values()].includes("Rahul"));  // true;

// [...user.value()] Ye Map ki saari values ko array me convert kar deta hai.

