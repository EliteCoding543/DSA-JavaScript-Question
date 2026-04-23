function subSequences(str){
    let myAns = "";
    function Helepr(i, ans){
        if(i == str.length){
            myAns += ans + " ";
            return
        }

        Helepr(str, i + 1, ans + str[i]);
        Helepr(str, i + 1);
    }
    Helepr(str, 0, "");
}

console.log(subSequences("abc"));