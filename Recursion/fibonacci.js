function fibonacci(num){
  if(num===0 || num===1){
    return num
  }
 let ans= fibonacci(num-2) + fibonacci(num-1)
 return ans
}

let ans=fibonacci(7)
console.log(ans,"Ans")