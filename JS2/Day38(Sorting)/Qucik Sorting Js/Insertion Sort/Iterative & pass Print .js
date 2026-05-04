function iterativePass(arr){
    let n = arr.length;
    for(let i = 1; i < arr.length; i++){
        let currKey = arr[i];
        let PrevElement = i - 1;

        while(PrevElement >= 0 && arr[PrevElement] > currKey){
            arr[PrevElement + 1] = arr[PrevElement]
            PrevElement--
        }

        arr[PrevElement + 1] = currKey;
        console.log(arr.join(' '));
    }
}
let arr = [1, 4, 3, 5, 6, 2];
iterativePass(arr);