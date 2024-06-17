function uniq(s1, s2) {
    let ans = {};
    let sumstring = s1 + s2;
    let str = sumstring.toLowerCase();
    let res = "";

    // Count frequencies of each character in the combined string
    for (let char of str) {
        if (char >= "a" && char <= "z") {
            if (ans[char]) {
                ans[char]++;
            } else {
                ans[char] = 1;
            }
        }
    }

    // Find characters that appear exactly once and accumulate them into 'res'
    for (let key in ans) {
        if (ans.hasOwnProperty(key)) {
            console.log(key + ': ' + ans[key]);
            if (ans[key] === 1) {
                res += key;
            }
        }
    }

    console.log("Unique characters: " + res);
}

// Example usage:
uniq("hello", "there");
