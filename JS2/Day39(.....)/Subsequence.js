function subSequence(arr, index, ans){
    if(index == arr.length){
        console.log(ans)
        return
    }

    ans.push(arr[index])
    subSequence(arr, index + 1, ans);

    ans.pop(arr[index])
    subSequence(arr, index + 1, ans);
}

console.log(subSequence([1, 2, 3], 0, []));