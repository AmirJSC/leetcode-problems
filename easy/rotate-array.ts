function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  function swap(nums: number[], l: number, r: number): void {
    while (l <= r) {
      let temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      l++;
      r--;
    }
  }

  swap(nums, 0, nums.length - 1);
  swap(nums, 0, k - 1);
  swap(nums, k, nums.length - 1);
}
