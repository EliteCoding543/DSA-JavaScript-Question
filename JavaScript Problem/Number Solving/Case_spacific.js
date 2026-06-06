function sortCase(S) {
    let uppercaseChars = [];
    let lowercaseChars = [];

    // Step 1: Separate uppercase and lowercase characters
    for (let i = 0; i < S.length; i++) {
        let char = S[i];
        if (char === char.toUpperCase()) {
            uppercaseChars.push(char);
        } else {
            lowercaseChars.push(char);
        }
    }

    // Step 2: Sort both arrays lexicographically
    uppercaseChars.sort();
    lowercaseChars.sort();

    let result = [];
    let upPtr = 0;
    let lowPtr = 0;

    // Step 3: Reconstruct the string keeping original case positions
    for (let i = 0; i < S.length; i++) {
        let char = S[i];
        if (char === char.toUpperCase()) {
            result.push(uppercaseChars[upPtr]);
            upPtr++;
        } else {
            result.push(lowercaseChars[lowPtr]);
            lowPtr++;
        }
    }

    return result.join('');
}

console.log(sortCase("abcd"));