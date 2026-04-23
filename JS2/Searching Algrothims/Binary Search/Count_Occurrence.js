function countOccurrence(arr, target){
    function findFirts(){
        let start = 0;
        let end = arr.length - 1;
        let indx = -1;

        while(start <= end){
           let mid = Math.floor((start + end) / 2);

            if(arr[mid] === target){
                indx = mid;
                end = mid - 1
            }

            else if(arr[mid] > target){
                end = mid - 1
            }

            else {
                start = mid + 1
            }
        }
        return indx;
    }

    function findSecond(){
         let start = 0;
         let end = arr.length - 1;
         let indx = -1;

         while(start <= end){
           let mid = Math.floor((start + end)/ 2);

            if(arr[mid] === target){
                indx = mid;
                start = mid + 1;  // Right Move
            }

            else if(arr[mid] > target){
                end = mid - 1;
            }

            else {
                start = mid + 1
            }
         }

         return indx;
    }

    let first = findFirts();
    if(first === -1) return 0;
   let last = findSecond();
   return last - first + 1;
}

console.log(countOccurrence([1, 2, 2, 2, 2, 2, 3], 2));