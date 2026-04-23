const users = [
  { name: "Aman", age: 20 },
  { name: "Riya", age: 25 },
  { name: "John", age: 20 },
  { name: "Alex", age: 25 }
];

const grouped = users.reduce((total, user) => {
  if (!total[user.age]) {
    total[user.age] = [];
  }
  
  total[user.age].push(user);
  return total;
}, {});

console.log(grouped)