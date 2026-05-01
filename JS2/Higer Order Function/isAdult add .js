let arr = [{name : "Shivam", age: 17}, {name : "aakash", age: 21}];

let result = arr.map((item) => {

    item.isAdult = (item.age >= 18)
    // ya ase kr skte h jo comment part h 
    // return {
    //     ...item,
    //     isAdult: item.age >= 18
    // }

    return item
})
console.log(result)