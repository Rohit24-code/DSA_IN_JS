// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//One approch is you can sort the array and use two pointer approch.

function twoSum(obj, target) {
    let obj = {};

    for (let i = 0; i < nums?.length; i++) {
      obj[nums[i]] = i;
    }
  
    for (let i = 0; i < nums?.length; i++) {
      if (obj[target - nums[i]] && i!==obj[target-nums[i]]) {
        return [i, obj[target - nums[i]]];
      }
    }
}

let arr = [1, 4, 45, 6, 10, 8];
let sum = 46;

let ans= twoSum(arr,sum)

console.log(ans)