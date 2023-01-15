function sortedSquares(nums: number[]): number[] {
  let array = [];
  let l = 0;
  let r = nums.length - 1;
  let p = r;

  while (l <= r) {
    if (nums[r] ** 2 > nums[l] ** 2) {
      array[p] = nums[r] ** 2;
      r--;
    } else {
      array[p] = nums[l] ** 2;
      l++;
    }
    p--;
  }
  return array;
}


[99,10,0,11,1000]