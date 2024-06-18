//over here we have to find the element that is the pivot meaning the greatest and return its index

let nums = [4,5,6,7,8,9,0,1,2,3];

function findPivotIndex(nums){
  let start=0;
  let end=nums.length-1;
  
  while(start<end){
    let mid= Math.floor(start + (end - start)/2)
    if(nums[start]===nums[end]) return start
    else if(mid+1<nums.length && nums[mid]>nums[mid+1]){
        //ye mid+1 vala condition is tooo IMPORTANT qke ni to invalid index access kr lenge apan try dry run for [1,3]
        //mtlb is number k right me chota number h to 
        return mid
    }else if(mid-1>=0 && nums[mid]<nums[mid-1]){
         //ye mid-1>=0 vala condition is tooo IMPORTANT qke ni to invalid index access kr lenge apan jese -1 try dry run for [1,3]
        //mtlb is ye baat ho rhe h jn hmara nums[mid]=0 and nums[mid-1]=7
        return mid-1
    }else if (nums[mid]<nums[start]){
        //yha hum compare kr rhe h start se agar koi number start is chota h mtlb right side se h and hume
        // hmare value left me milege
       end=mid-1;
    }else{
        //yha hum compare kr rhe h end se agar koi number start is bda h mtlb left side se h and hume
        // age ja k check krna h
        start = mid+1
    }
  }
}

let ans=findPivotIndex(nums)
console.log(ans,"ans")