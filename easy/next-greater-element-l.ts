function nextGreaterElement1(nums1: number[], nums2: number[]): number[] {
  let stack = [];
  for (let i = 0; i < nums1.length; i++) {
    let index = nums2.indexOf(nums1[i]);
    let element = getNextGreaterElement(index, nums2);
    stack.push(element);
  }
  return stack;
}

function getNextGreaterElement(index: number, arr: number[]) {
  for (let i = index + 1; i < arr.length; i++) {
    if (arr[i] > arr[index]) {
      return arr[i];
    }
  }
  return -1;
}

function nextGreaterElement2(nums1: number[], nums2: number[]): number[] {
  let stack = [];
  let hashMap = {};

  for (let i = 0; i < nums2.length; i++) {
    let num = nums2[i];
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      hashMap[stack.pop()] = num;
    }
    stack.push(num);
  }

  let result = [];
  for (const num of nums1) {
    result.push(hashMap[num] ?? -1);
  }

  return result;
}
