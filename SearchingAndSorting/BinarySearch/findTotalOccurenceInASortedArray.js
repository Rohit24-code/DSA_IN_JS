let arr=[12,13,14,15,15,15,15,15,15,34,45,45,68]
let start=0;
let end=arr.length-1;
let start1=0;
let end1=arr.length-1;
let target=15;
let firstAns=-1;
let lastAns=-1;

function findFirstOccurance(){
    while(start<=end){
        // let mid=Math.floor((start+end)/2); sometime it may cause integer overflow so to counter it we can use
    
        let mid = Math.floor(start + (end-start)/2)
        if(arr[mid]===target){
            firstAns=mid;
            end=mid-1;
        }
        else if(arr[mid]<target){
            start=mid+1;
        }else{
            end=mid-1;
        }
    }
}

function findLastOccurance(){
    while(start1<=end1){
        let mid=Math.floor(start1 + (end1-start1)/2);
    
        if(arr[mid]===target){
            lastAns=mid
            start1=mid+1;
        }
        else if(arr[mid]<target){
            start1=mid+1;
        }
        else{
            end1=mid-1;
        }
    }
}
findFirstOccurance()
findLastOccurance()

console.log(lastAns,firstAns,"last first")

console.log(( lastAns - firstAns) + 1)
