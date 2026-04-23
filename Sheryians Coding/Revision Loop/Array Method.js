let numArr = [1, 2, 3, 4, 5]
let NewNum = []
for(let i = numArr.length - 1; i >=0; i--){
    NewNum[numArr.length - 1 - i] = numArr[i];
}
console.log(NewNum);
