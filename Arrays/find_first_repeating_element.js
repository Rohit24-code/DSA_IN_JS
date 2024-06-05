// From Geeks of Geeks 
// Given an array arr[] of size n, find the first repeating element. The element should occur more than once and the index of its first occurrence should be the smallest.

// Note:- The position you return should be according to 1-based indexing. 

// Example 1:

// Input:
// n = 7
// arr[] = {1, 5, 3, 4, 3, 5, 6}
// Output: 2
// Explanation: 
// 5 is appearing twice and 
// its first appearence is at index 2 
// which is less than 3 whose first 
// occuring index is 3.

// Example 2:

// Input:
// n = 4
// arr[] = {1, 2, 3, 4}
// Output: -1
// Explanation: 
// All elements appear only once so 
// answer is -1.

// Your Task:
// You don't need to read input or print anything. Complete the function firstRepeated() which takes arr and n as input parameters and returns the position of the first repeating element. If there is no such element, return -1.
 

// Expected Time Complexity: O(n)
// Expected Auxilliary Space: O(n)

// MY solution 
function firstRepeated(arr, n) {
    let obj={}
    
    for(let i=0;i<n;i++){
        if(obj[arr[i]]===undefined){
            obj[arr[i]]=1
        }else{
            obj[arr[i]]++
        }
    }
    
    
    for(let i =0;i<n;i++){
        if(obj[arr[i]]>1){
            return i + 1
        }
    }
    
    return -1
    // your code here
}