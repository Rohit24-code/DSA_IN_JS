let arr=[12,13,14,15,15,15,34,45,45,68]
let start=0;
let end=arr.length-1;
let target=45;
let ans=-1;
while(start<=end){
    // let mid=Math.floor((start+end)/2); sometime it may cause integer overflow so to counter it we can use

    let mid = Math.floor(start + (end-start)/2)
    if(arr[mid]===target){
        ans=mid;
        end=mid-1;
    }
    else if(arr[mid]<target){
        start=mid+1;
    }else{
        end=mid-1;
    }
}

console.log(ans)