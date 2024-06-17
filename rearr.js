function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        // Swap elements at start and end indices
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        // Move indices towards the center
        start++;
        end--;
    }

    return arr; // Return the reversed array
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
let reversedArr = reverseArray(arr);
console.log("Reversed array:", reversedArr); // Output: Reversed array: [5, 4, 3, 2, 1]
