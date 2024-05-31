//move all negative number to the left of the array and the sequence does not matters that much.

let arr=[-3,2,-4,-3,5,-5,9,-8,4,-4,4,3,6,64,-3,-5,345];

//1st solution taking extra space
// let ans=[];
// for(let i=0;i<arr?.length;i++){
//     if(arr[i]<0){
//         ans.unshift(arr[i])
//     }
//     else{
//         ans.push(arr[i])
//     }
// }
// Tc:-O(n)
// sp:-O(n)

// console.log(ans,"ans")

// second solution is using sort

//third solution is DUTCH NATIONAL FLAG Algorithm (two pointer)

let left=0;
let right=arr?.length-1;

while(left<right){
   
    if(arr[right]>0){
        right--
    }
    else if(arr[left]<0){
        left++
    }else{
        swap(arr,left,right)
        left++
        right--
    }
}

console.log(arr,"array")

function swap(arr,left,right){
    let temp=arr[left]
    arr[left]=arr[right]
    arr[right]=temp
}