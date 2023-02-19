function intersect(nums1: number[], nums2: number[]): number[] {
  const helperFunction = (a: number, b: number) => a - b;
  nums1.sort(helperFunction);
  nums2.sort(helperFunction);
  let arr = [];

  for (let i = 0, j = 0; i < nums1.length && j < nums2.length; i++, j++) {
    if (nums1[i] === nums2[j]) {
      arr.push(nums1[i]);
    } else if (nums1[i] > nums2[j]) {
      i--;
    } else {
      j--;
    }
  }
  return arr;
}