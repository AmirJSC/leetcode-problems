type IsPalindrome = (x: number) => boolean;

const isPalindrome1: IsPalindrome = (x) => {
  if (x < 0) {
    return false;
  }

  const stringNumber = x.toString();
  const { length } = stringNumber;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (stringNumber[i] !== stringNumber[length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const isPalindrome2: IsPalindrome = (x) => {
  return x.toString() === x.toString().split("").reverse().join("");
};
