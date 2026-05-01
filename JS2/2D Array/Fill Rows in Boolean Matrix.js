function BooleanMatrixProblem(m, n, mat) {
    // Har row par iterate karo
    for (let i = 0; i < m; i++) {
        let hasOne = false;

        // Check karo ki kya is row mein koi bhi '1' hai
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                hasOne = true;
                break; // Ek '1' milte hi loop break kar do
            }
        }

        // Agar '1' mila, toh puri row ko '1' se fill kar do
        if (hasOne) {
            for (let j = 0; j < n; j++) {
                mat[i][j] = 1;
            }
        }
    }
    return mat;
}
console.log(BooleanMatrixProblem(5, 4, [[1, 0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 1, 0], 
    [0, 0, 0, 0], 
    [0, 1, 0, 0]]))