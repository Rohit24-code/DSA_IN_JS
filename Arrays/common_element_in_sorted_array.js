function checkCommonElement(arr1,arr2,arr3){
let ans=[]
let i=0;
let j=0;
let k=0;

while(i<arr1?.length || j<arr2?.length || k<arr3?.length){
    console.log(i,j,k,ans,"i,j,k,ans",arr1[i])
    if(arr1[i]===arr2[j] && arr2[j]===arr3[k]){
      
        ans.push(arr1[i])
        i++;
        j++;
        k++
        
     }
     else if(arr1[i]<arr2[j]){
     i++
     }else if(arr2[j]<arr3[k]){
     j++
     }else{
     k++
     }
}


console.log(ans)
    
}

let arr1=[1,5,10,20,40,80];
let arr2=[6,7,20,80,100];
let arr3=[3,4,5,20,30,70,80,120]

checkCommonElement(arr1,arr2,arr3)