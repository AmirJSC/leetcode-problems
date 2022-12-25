function plusOne(digits: number[]): number[] {
  let result = [];
  (BigInt(digits.join("")) + BigInt(1))
    .toString()
    .split("")
    .map((num) => {
      result.push(parseInt(num));
    });
  return result;
}
