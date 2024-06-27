// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

 

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"


var reverseOnlyLetters = function(s) {
    let p1=0;
    let p2=s?.length-1;
    let newStr=s?.split("")
    
    while(p1<p2){
      
      if(!isLetter(newStr[p1])){
          p1++
      }else if(!isLetter(newStr[p2])){
          p2--
      }else{
          swap(newStr,p1,p2)
          p1++
          p2--
      }
    }
  
    return newStr?.join("")
  };
  
  function isLetter(char) {
    let code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  }
  
  function swap(arr,p1,p2){
   let temp = arr[p1];
   arr[p1]=arr[p2]
   arr[p2]=temp
  }