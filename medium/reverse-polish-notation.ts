function evalRPN(tokens: string[]): number {
  let stack = [];
  tokens.map((token) => {
    if (token === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (token === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (token === "-") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b - a);
    } else if (token === "/") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(Math.trunc(b / a));
    } else {
      stack.push(parseInt(token));
    }
  });
  return stack.pop();
}
