let arr = [1, 5, 7, 1]
let target = 6;

function findPairCount(arr, target){
    let count = 0;
    let frequencyCount = new Map()
    for(let i = 0; i < arr.length; i++){
        const num = arr[i]
        frequencyCount.set(num, (frequencyCount.get(num) || 0) + 1);
    }

    // Now Chcek 
    for(let i = 0; i < arr.length; i++){
        let currentElement = arr[i]
        let requiredElemet = target - currentElement;

        if(frequencyCount.has(requiredElemet)){
            // Case 1: Agar dono number same hain (Jaise target=6, current=3, required=3)
            if (requiredElemet === currentElement) {
                count += (frequencyCount.get(requiredElemet) - 1);
            } 
            // Case 2: Agar dono number alag hain (Jaise 1 aur 5)
            else {
                count += frequencyCount.get(requiredElemet);
            }
        }
    }
    // Unique Pair
    return count / 2;
}

console.log(findPairCount(arr, target))