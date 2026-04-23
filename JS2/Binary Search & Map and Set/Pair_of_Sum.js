let arr = [1, 2, 3, 4, 5, 6, 7];
let target = 9;
let left = 0;
let right = arr.length - 1;

while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
        // Dono numbers ko print karo
        console.log(`Pair found: ${arr[left]}, ${arr[right]}`);
        
        // IMPORTANT: Pointers badhao taaki next pair dhund sakein
        left++;
        right--;
    } 
    else if (sum > target) {
        right--; // Sum bada hai, toh bada number chhota karo
    } 
    else {
        left++; // Sum chhota hai, toh chhota number bada karo
    }
}


//  Pair of Sum For loops(Brute Force)

let Arr = [2, 3, 4, 5 , 6, 7];
let Findtarget = 11;

for(let i = 0; i < Arr.length; i++){
    for(let j = i + 1; j < Arr.length; j++){
        if(Arr[i] + Arr[j] === Findtarget){
            console.log(`pair Found = (${Arr[i]} ${Arr[j]})`);
        }
    }
}