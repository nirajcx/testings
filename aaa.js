function longsub(arr) {
    if (arr.length === 0) return { longestStreak: 0, longestSubsequence: [] };

    // Sort the array
    let sorted = arr.sort((a, b) => a - b);

    // Initialize variables to track the longest sequence
    let longestStreak = 1;
    let currentStreak = 1;
    let currentSubsequence = [sorted[0]];
    let longestSubsequence = [...currentSubsequence];

    // Traverse the sorted array
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] !== sorted[i - 1]) { // Check for duplicates
            if (sorted[i] == sorted[i - 1] + 1) {
                // Consecutive element found
                currentStreak++;
                currentSubsequence.push(sorted[i]);
            } else {
                // Check if the current streak is the longest
                if (currentStreak > longestStreak) {
                    longestStreak = currentStreak;
                    longestSubsequence = [...currentSubsequence];
                }
                // Reset the current streak
                currentStreak = 1;
                currentSubsequence = [sorted[i]];
            }
        }
    }

    // Final check for the last streak
    if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
        longestSubsequence = [...currentSubsequence];
    }

    console.log(longestSubsequence);
    return { longestStreak, longestSubsequence };
}

// Example usage:
let arr = [1, 9, 3, 10, 4, 20, 2];
let result = longsub(arr);
console.log("Longest Streak: ", result.longestStreak); // Output: 4 (sequence is 1, 2, 3, 4)
console.log("Longest Subsequence: ", result.longestSubsequence); // Output: [1, 2, 3, 4]
