function sortMatrixElements(matrix) {
    // Flatten the matrix into a 1D array
    let flattened = matrix.flat();

    
    // Sort the flattened array
    flattened.sort((a, b) => a - b); // Change to (a, b) => b - a for descending order

    // Calculate the number of rows and columns
    let rows = matrix.length;

    let cols = matrix[0].length;

    // Reshape the sorted array back into matrix form
    let sortedMatrix = [];
    for (let i = 0; i < rows; i++) {
        sortedMatrix.push(flattened.slice(i * cols, (i + 1) * cols));
    }

    return sortedMatrix;
}

// Example usage:
let matrix = [
    [3, 1, 4],
    [1, 5, 9],
    [2, 6, 5]
];
let sortedMatrix = sortMatrixElements(matrix);
console.log("Sorted Matrix:");
console.log(sortedMatrix);
