let arr = [1, 2, 3, 4,5 ,6,-2, -3, -5, -6, -8, 0, 0, 0, 0]

function Solve(arr){
    let zero = 0
    let negative = 0;
    let positive = 0;

    for(let item of arr){
        if(item === 0){
            zero++
        }

        else if(item < 0){
            negative++
        }

        else if(item > 0){
            positive++
        }
    }

    return {zero, positive, negativen}

}

console.log(Solve(arr));
