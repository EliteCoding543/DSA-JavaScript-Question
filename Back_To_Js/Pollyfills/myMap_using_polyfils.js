Array.prototype.myMap = function(callBack){
    let result = [];

    for(let i = 0; i < this.length; i++){
        result.push(callBack(this[i], i, this));  
        // This line work => result.push(callBack(1, 0, [1, 2, 3, 4]));
    }

    return result;
}

let arr = [1, 2, 3, 4];
const output = arr.myMap(nums => nums * 2);
console.log(output);