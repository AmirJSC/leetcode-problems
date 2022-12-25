function runningSum(nums: number[]): number[] {
  let currentTotal = 0;
  let arr = [];
  for(let i = 0; i < nums.length; i++) {
      currentTotal += nums[i];
      arr.push(currentTotal);
  }
  return arr;
};