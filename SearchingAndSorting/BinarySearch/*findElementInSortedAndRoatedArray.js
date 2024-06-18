// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

function findPivotIndex(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    console.log(start, end, mid, arr, "start,end,mid,arr");
    if (arr[start] === arr[end]) {
      console.log("inside", start);
      return start;
    } else if (mid - 1 >= 0 && arr[mid] < arr[mid - 1]) {
      return mid - 1;
    } else if (mid + 1 < arr.length && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] < arr[start]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

function findBinarySearch(arr, start, end, target) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    console.log(start, end, mid, arr, "start,end,mid,arr,binary");
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  let pivotIndex = findPivotIndex(nums);
  console.log(pivotIndex, "pivotIndex");
  if (target >= nums[start] && target <= nums[pivotIndex]) {
    return findBinarySearch(nums, start, pivotIndex, target);
  } else {
    return findBinarySearch(nums, pivotIndex + 1, end, target);
  }
};

console.log(search, "search");
