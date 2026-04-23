let arr = [
    {
        name: "Shubham",
        age : 12
    },

    {
        name: "Mohan",
        age : 76
    },

    {
        name: "Rohit",
        age : 12
    },

    {
        name: "Teenu",
        age : 22
    }
];

arr.sort((a, b) => {
      return b.locleCompare(a.age)
})

console.log(arr)