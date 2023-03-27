function isValid(s: string): boolean {
  const stack = [];
  const hash = { "(": ")", "{": "}", "[": "]" };
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      stack.push(s[i]);
    } else {
      if (hash[stack.pop()] !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
