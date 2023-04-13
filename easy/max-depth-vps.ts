function maxDepth(s: string): number {
  let stack = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else if (s[i] === ")") {
      max = Math.max(max, stack.length);
      stack.pop();
    }
  }
  return max;
}
