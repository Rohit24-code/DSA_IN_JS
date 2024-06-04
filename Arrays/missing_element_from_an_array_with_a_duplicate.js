let arr=[1,3,3,3,4]

// over here the number are from 1 to n and one number is missing as well as duplicated tell that number 

function missingElement(arr){
   
    for(let i=0;i<arr.length;i++){
        let index=Math.abs(arr[i])
        if(arr[index-1]>0){
            arr[index-1]*= -1
        }  
    }
    console.log(arr,"arr")
   let ans=[]
    for(let j=0;j<arr.length;j++){
        if(arr[j]>0){
            ans.push(j+1)
        }
    }

    return ans;
}

let ans= missingElement(arr)
console.log(ans)