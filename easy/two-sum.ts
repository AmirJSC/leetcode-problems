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

function twoSum1(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    let goal = target - numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] === goal) {
        return [i + 1, j + 1];
      }
    }
  }
  return [];
}
