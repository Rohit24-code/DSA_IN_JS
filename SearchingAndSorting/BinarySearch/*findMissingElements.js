let arr=[1,2,3,4,6,7,8,9]

// over here we have numbers from 1 to n find the missing number amd we have to do it in less than o(n)
// VERY IMPORTANT QUESTION 


// observation : - over here we can see that if i add one to the index i will get 1 on 0th and so on till i reach 
// 4+1 should be 5 but it is 4+2=6 and from here on we have to add 2 to it so we have to find the first occurence of 
// such number where we will have to add 2 .

let s=0;
let e=arr?.length-1;
let ans = -1;

while(s<=e){
    let m=Math.floor(s + (e-s)/2)
    let diff = arr[m] - m;

    if(diff===1){
        s=m+1
    }else{
        ans=m;
        e=m-1;
    }
}

//In home work i have to remove this condition by modiifing the above code and this case is because we can not find the last index 
if(ans+1===0){
    ans= arr?.length+1
}

console.log(ans+1) 



