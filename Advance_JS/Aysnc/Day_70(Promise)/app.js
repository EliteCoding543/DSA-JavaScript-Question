const p1 = new Promise((res, rej) => {
    let arr = [1, 2, 3, 4, 5];
    if(arr.length > 0){
        res("Data Mil gya");
    }

    else {
        rej("Please Try again ! Not Fatch data");
    }
})

console.log(p1);

//  Now 2 method promise .catch() and .than()  handling property

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({name : "Shubham Kashyap"});
        reject({mes : "Please Try again!"});
    }, 4000)
})

p2.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("Ye to cahlega hi rej ho ya resolve");
})