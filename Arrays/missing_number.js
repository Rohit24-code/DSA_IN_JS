var missingNumber = function (nums) {
  // Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

  // Example 1:

  // Input: nums = [3,0,1]
  // Output: 2
  // Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
  // Example 2:

  // Input: nums = [0,1]
  // Output: 2
  // Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
  // Example 3:

  // Input: nums = [9,6,4,2,3,5,7,0,1]
  // Output: 8
  // Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

  //my solution
  // let n=nums.length;
  //  let sortedNum=nums?.sort((a,b)=>a-b)
  // for(let i=0;i<=n;i++){
  //   if(sortedNum[i]!=i){
  //     return i
  //   }
  // }

  //XOR is the solution given so the approch with XOR is that we will XOR all nums like 0^2^3^4 and     0^1^3^4 so it cut each other like we do while diving in maths and the only thing that will be left is the ans.
  let ans = 0;
  for (let i = 1; i <= nums.length; i++) {
    ans ^= i;
  }
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i];
  }
  return ans;
  // };
};
