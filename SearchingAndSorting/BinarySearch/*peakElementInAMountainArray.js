// VERY IMPORTANT MUST DRY RUN TILL THE VERY END.
// You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

// Return the index of the peak element.

// Your task is to solve it in O(log(n)) time complexity.

// Example 1:

// Input: arr = [0,1,0]

// Output: 1

// Example 2:

// Input: arr = [0,2,1,0]

// Output: 1

// Example 3:

// Input: arr = [0,10,5,2]

// Output: 1

let arr=[0,10,5,2]

var peakIndexInMountainArray = function (arr) {
  //    on left side arr[i] < arr[i+1];
  //     on right side arr[i] > arr[i+1];

  //     peak is something that is
  //     arr[i]>arr[i+1];
  //     arr[i]>arr[i-1];

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] < arr[mid + 1]) {
      //iska mtlb dost left me ho tum to peak right me he hoga
      start = mid + 1;
    } else {
      //iska mtlb hum ya to right me h ya peak element khud h to
      // hum khe uska peche na chale jaye - kr k isliye end=mid kr rhe h
      end = mid;
    }
  }

  //here i can return end or start
   console.log(start);
};


peakIndexInMountainArray(arr)