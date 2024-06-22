let arr=[1,4,5,3,2]

function bubbleSort(arr){
let n=arr.length;

for(let i=0;i<n-1;i++){
    for(let j=0;j<n-i-1;j++){
        if(arr[j]>arr[j+1]){
            // if we want in decresing then change the sign
            swap(arr,j,j+1)
        }
    }
}

return arr
}

function swap(arr,p1,p2){
  let temp= arr[p1]
  arr[p1]=arr[p2]
  arr[p2]=temp
}

let ans =bubbleSort(arr)
console.log(ans)