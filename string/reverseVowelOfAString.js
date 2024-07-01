// 345. Reverse Vowels of a String
// Solved
// Easy
// Topics
// Companies
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

var reverseVowels = function(s) {
    let arr=s?.split("")
    let start=0;
    let end= arr.length-1;

    while(start<end){
        if((checkVowel(arr[start]?.toLowerCase())) && (checkVowel(arr[end]?.toLowerCase()))){
            swap(arr,start,end)
            start++;
            end--;
        }
        else if(checkVowel(arr[start]?.toLowerCase())){
             end--
        }
        else if(checkVowel(arr[end]?.toLowerCase())){
            start++
        }
        else{
            start++;
            end--
        }
    }

    return arr?.join("")
};

function swap(arr,start,end){
    let temp=arr[start]
    arr[start]=arr[end]
    arr[end]=temp
}

const checkVowel=(value)=>{
 if(value==="a" || value==="e" || value==="i" || value==="o" || value==="u" ){
    return true
 }else {
    return false
 }
}