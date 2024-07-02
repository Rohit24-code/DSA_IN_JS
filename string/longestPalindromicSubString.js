// 5. Longest Palindromic Substring
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English let



var longestPalindrome = function(s) {
    let ans = "";
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (checkPalindrome(s, i, j)) {
                let subStr = s.slice(i, j + 1);
                if (subStr.length > ans.length) {
                    ans = subStr;
                }
            }
        }
    }
    
    return ans;
};

function checkPalindrome(str, start, end) {
    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
