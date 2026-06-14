if(!Array.prototype.hasOwnProperty("sum")){
    Array.prototype.sum = function(){
        let s = 0;
        for(let item of this){
            s += item;
        }
      return s;
    }
    
}

String.prototype.toLowerCase = function(){
    return this.toUpperCase();
}

console.log("Shubham".toLowerCase());  // Bola to lower case but humne return uperCase kiya h esliye uper case hoga 



Array.prototype.binarySearch = function(target){
    let left = 0;
    let right = this.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right)/ 2);

        if(this[mid] === target){
            return mid;
        }

        else if(this[mid] > target){
            left = mid + 1
        }

        else {
            right = mid - 1
        }
    }

    return -1
}

let SortArr = [1, 2, 3, 4, 5, 6];
console.log(SortArr.binarySearch(5))    // Output is 4 index 
console.log(SortArr.binarySearch(15))   // Output -> -1 not find 

// ===============............/.........===.... Create a DOM 

const heading = document.getElementById("heading");

let arr = [3, 4, 5,  6, 6, 9, 8];
let avg = Math.floor(arr.sum() / arr.length);
heading.innerText = `Avarage Package is :  ${avg}`;

