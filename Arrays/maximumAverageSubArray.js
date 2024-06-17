// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000


// BRUTE FORCE APPROACH BY ME 
// let ans=-Infinity
//     let condition=nums.length===k ? nums.length : nums.length-k
//     for(let i=0;i<=condition;i++){
//         let sum=0
//         for(let j=i;j<i+k;j++){
//           sum+=nums[j]
//         }
//         if(sum>ans){
//             ans=sum
//         }
//     }
  
//     return  ans/k




// OPTIMISED SLIDING WINDOW APPROACH 
let ans=-Infinity
    let sum = 0;
    let p1=0;
    let p2=k-1;
     
     for(let i=0;i<=p2;i++){
        sum+=nums[i]
     }
     ans=sum
     p2++
     while(p2<nums?.length){
        sum-=nums[p1];
        sum+=nums[p2]
        p1++;
        p2++;
        

        if(sum>ans){
            ans=sum
        }
     }

     return ans/k