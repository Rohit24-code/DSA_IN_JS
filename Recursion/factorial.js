

function factorial(n){
   if(n===1){
    return 1
   }else{
    let awaitingRecursionAns=factorial(n-1)
    let ans= n * awaitingRecursionAns
    return ans
   }
}

let ans=factorial(5)
console.log(ans,"ans")