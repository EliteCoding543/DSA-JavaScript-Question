let arr = [{firstName : "Shubham", Lastname: "Kashyap"},
           {firstName: "Aman", Lastname: "Sharma"}
]

let result = arr.map((item) => {
   return{
    fullName : `${item.firstName} ${item.Lastname}`
   } 
})
console.log(result)
