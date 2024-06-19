// we have a nearly sorted array where the position of a number can vary from n-1 , n , n+1 

const nearlySortedArray = (arr,target) => {
 let start=0;
 let end=arr.length-1;

 while(start<=end){
    let mid=Math.floor(start + (end - start)/2)
   if(arr[mid]===target){
    return mid
   }else if(arr[mid-1]>=0 && arr[mid-1]===target){
    return mid-1
   }else if(arr[mid+1]<arr?.length && arr[mid+1]===target){
    return mid+1
   }else if(arr[mid]<target){
    //over here we are shifting start to mid+2 because we have already checked for mid+1 on above 
      start=mid+2
   }
   else{
    //over here we are shifting start to mid-2 because we have already checked for mid+1 on above 
    end=mid-2
   }
 }
 return -1
}

let arr=[20,10,30,50,40,70,60]
let target = 60;

let ans = nearlySortedArray(arr,target)

console.log(ans)
