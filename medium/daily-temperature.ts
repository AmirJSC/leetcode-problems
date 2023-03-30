function dailyTemperatures1(temperatures: number[]): number[] {
  let res = [];
  for (let i = 0; i < temperatures.length; i++) {
    let tmp;
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        tmp = j - i;
        break;
      }
    }
    tmp ? res.push(tmp) : res.push(0);
  }
  return res;
}

function dailyTemperatures2(temperatures: number[]): number[] {
  let res = new Array(temperatures.length).fill(0);
  let stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let index = stack.pop();
      res[index] = i - index;
    }
    stack.push(i);
  }
  return res;
}
