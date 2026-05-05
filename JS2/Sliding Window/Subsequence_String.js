function generateSubsequence(input, output)
{
    // Base Case
    if (input.length==0) {
        console.log(output);
        return;
    }
    // Include
    generateSubsequence(
        input.substring(1), output + input[0]);
    
    // Exclude
    generateSubsequence(
        input.substring(1), output);
}
const inputString = 'abc';
generateSubsequence(inputString,"");