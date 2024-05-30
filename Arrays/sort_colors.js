// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

var sortColors = function(nums) {
    let low=0;
    let medium=0;
    let high=nums?.length-1;
  
    while(medium<=high){
  
      if(nums[medium]===0){
          swap(nums,low,medium)
          low++
          medium++
      }
      else if(nums[medium]===1){
           medium++
      }else{
          swap(nums,medium,high)
          high--
      }
  
    }
  };
  
  function swap(arr,left,right){
      let temp = arr[left]
      arr[left]=arr[right]
      arr[right]=temp
  }