let arr=[22,33,11,55,44]

function selectionSort(arr){
  let n=arr.length;

  for(let i=0;i<n-1;i++){

    let minIndex=i;
 
    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[minIndex]){
            minIndex=j
        }
    }

    swap(arr,i,minIndex)
  }

  return arr
}

function swap(arr,p1,p2){
    let temp= arr[p1]
    arr[p1]=arr[p2]
    arr[p2]=temp
  }

let ans=selectionSort(arr)

console.log(ans)