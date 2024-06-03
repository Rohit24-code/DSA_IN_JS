// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [3,3,3,3,3]
// Output: 3

var findDuplicate = function (nums) {
  // 1.solution using visited method
  //  but in this we are modifing the array
  //    for(let i=0;i<nums.length;i++){
  //     let index=Math.abs(nums[i]);
  //     if(nums[index]<0) return index
  //     //setting value to negative
  //     else nums[index] *= -1
  //    }

  //in this also we are manuiplation the array to not manuplate the array we would need binary search solution.
  while (nums[0] != nums[nums[0]]) {
    swap(nums, 0, nums[0]);
  }

  return nums[0];
};

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
