/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length;
  const finalSum = n * (n+1) / 2 ;
  let accmulateSum = 0

  
  for(let i=0; i<nums.length; i++){
      accmulateSum += nums[i];
  }

  return finalSum - accmulateSum;
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))