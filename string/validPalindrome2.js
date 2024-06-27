// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false


var validPalindrome = function(s) {
    let start=0;
    let end=s.length-1;


    while(start<=end){
        if(s[start]===s[end]){
            start++;
            end--;
        }else{
        
            // Removed first character
             let right = isPalandrome(s,start +1,end)

             //Removed Last Character
            let left = isPalandrome(s,start,end-1)

            return left || right
        }
    }
    return true
};

function isPalandrome(arr,start,end){
     while(start<=end){
        if(arr[start]===arr[end]){
            start++;
            end--;
        }else{
            return false
        }
        
        }

        return true
}

let ans =validPalindrome("abcbda")

console.log(ans)