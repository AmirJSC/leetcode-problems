function generate(numRows: number): number[][] {
  let res = [];
  for (let i = 0; i < numRows; i++) {
    let tmp = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        tmp.push(1);
      } else {
        tmp.push(res[i - 1][j - 1] + res[i - 1][j]);
      }
    }
    res.push(tmp);
  }
  return res;
}
