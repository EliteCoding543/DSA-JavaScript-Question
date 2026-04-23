// For of loop in array 
//  let arr = [10, 20, 30 ,40 ,50]
//  for(let shivam of arr){
//   console.log(shivam);
  
//  }

//  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  let i = 0;

//  while(i < array.length){
//     console.log(array[i]);
//     i++
  
//  }

 // Reverse Array 
 
let arr = [1, 2, 3, 4, 5, 6, 7]
arr.push(12)  // Appends new elements to the end of an array, and returns the new length of the array. Can insert Multiple Items 
console.log(arr);

arr.pop() // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr);

arr.shift() // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr);

arr.unshift() // Can insert Multiple Items 
// Inserts new elements at the start of an array, and returns the new length of the array. 

arr.join()
// A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
//  Adds all the elements of an array into a string, separated by the specified separator string.

let newArray = [1, 2, 3, 4, 5, 6,7, 8 , 9,  10]

// let ret = newArray.slice(5, 99) output is 5 6 7 8 9  exclusive last index   
// console.log(ret);
// console.log(newArray);

let ans = newArray.slice(-3, -1)
console.log(ans); // Output ===> 8, 9 becouse not exclusive last index  



//Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.

let SpliceArr = [1, 2, 4, 5, 7, 8, 9, 10]
let DeletedEle = SpliceArr.splice(2, 0, 104, 105, 106)
console.log(SpliceArr);
console.log(DeletedEle);   

// Kha se index se element delet krne h or kitne krne h vo mention kro or usme add bhi kr skte h jaha se delet hue h element 


//  Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

let ReverseElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
ReverseElement.reverse()
console.log(ReverseElement);



