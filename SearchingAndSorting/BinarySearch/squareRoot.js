
var mySqrt = function(x) {
    let start=0;
    let end=x;
    
    let ans=0;
   
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2)
        if((mid*mid)===x){
          return mid
        }
        else if((mid*mid)<x){
            start=mid+1
        }
        else{
            ans=mid-1
            end=mid-1
        }
    }
    
    return ans
};

const ans=mySqrt(26)
console.log(ans,"ans")