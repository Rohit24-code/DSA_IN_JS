let nums = [10, 20, 30, 40, 50, 60, 70, 80];

let start = 0;
let end = nums.length - 1;
let target = 50;
while (start <= end) {
   // let mid=Math.floor((start+end)/2); sometime it may cause integer overflow so to counter it we can use

   let mid = Math.floor(start + (end-start)/2)
  if (nums[mid] === target) {
    console.log("ans is", mid);
    break;
  } else if (nums[mid] < target) {
    start = mid+1;
  } else {
    end = mid-1;
  }
}

// T.C:- logn 
