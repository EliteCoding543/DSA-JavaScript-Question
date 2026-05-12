// Odd-Even Sort / Brick Sort
function oddEvenSort(arr){

    let sorted = false;

    while(!sorted){

        sorted = true;

        // EVEN PHASE
        for(let i = 0; i <= arr.length - 2; i += 2){

            if(arr[i] > arr[i + 1]){

                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

                sorted = false;
            }
        }

        // ODD PHASE
        for(let i = 1; i <= arr.length - 2; i += 2){

            if(arr[i] > arr[i + 1]){

                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

                sorted = false;
            }
        }
    }

    return arr;
}

let arr = [7, 6, 8, 5, 4, 9];

console.log(oddEvenSort(arr).join(" "));