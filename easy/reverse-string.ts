function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
}

function reverseString1(s: string[]): void {
  s.reverse();
}
