function searchInsert2(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  if (nums[start] > target) {
    return start;
  }

  if (nums[end] < target) {
    return end + 1;
  }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return Math.ceil((start + end) / 2);
}

function searchInsert1(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return end;
}
