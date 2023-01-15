function moveZeroes(nums: number[]): void {
  let zeroCount = 0;
  let { length } = nums;
  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
      nums.splice(i, 1);
      length--;
      i--;
    }
  }
  for (let j = 0; j < zeroCount; j++) {
    nums.push(0);
  }
}

function moveZeroes1(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
    }
  }
}

function moveZeroes2(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
    }
  }
}
