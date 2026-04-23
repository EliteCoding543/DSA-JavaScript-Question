const rawUsers = [
  { id: 101, firstName: "Aman", lastName: "Sharma" },
  { id: 102, firstName: "John", lastName: "Doe" }
];

let result = rawUsers.map(item => ({
    id : item.id,
    FullName : `${item.firstName}, ${item.lastName}`
}))
console.log(result)