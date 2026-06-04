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

/* Do not change the code below */
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  
  // The system passes the string on the very first line (lineNumber == 0)
  if (lineNumber == 0) {
    logic();
    readline.close();
  }
}

function logic() {
  // Read from inputArr[0] as seen in your editor's setup
  console.log(sortCase(inputArr[0].trim()));
}