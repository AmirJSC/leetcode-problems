function twoSum(numbers: number[], target: number): number[] {
  let map = {};

  for (let i = 0; i < numbers.length; i++) {
    let goal = target - numbers[i];
    if (map[goal] === undefined) {
      map[numbers[i]] = i + 1;
    } else {
      return [map[goal], i + 1];
    }
  }
}
