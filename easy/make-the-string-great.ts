function makeGood(s: string): string {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
      continue;
    }

    if (
      stack[stack.length - 1] !== s[i] &&
      stack[stack.length - 1].toUpperCase() === s[i].toUpperCase()
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
}
