function longsub(arr) {
    let ans=[];
    if (arr.length === 0) return 0;

    // Sort the array
    let sorted = arr.sort((a, b) => a - b);

    // Initialize variables to track the longest sequence
    let longestStreak = 1;
    let currentStreak = 1;

    // Traverse the sorted array
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] != sorted[i - 1]) { // Check for duplicates
            if (sorted[i] == sorted[i - 1] + 1) {
               
                ans.push(sorted[i])
                // Consecutive element found
                currentStreak++;
            } else {
                // Reset the current streak
                longestStreak = Math.max(longestStreak, currentStreak);
                currentStreak = 1;
            }
        }
    }

    // Compare the last streak
    longestStreak = Math.max(longestStreak, currentStreak);
    console.log(ans);

    return longestStreak;
}

// Example usage:
let arr = [1, 9, 3, 10, 4, 20, 2];
console.log(longsub(arr)); // Output: 4 (sequence is 1, 2, 3, 4)
