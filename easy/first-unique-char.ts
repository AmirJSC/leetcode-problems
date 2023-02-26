function firstUniqChar1(s: string): number {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 1;
    } else {
      map[s[i]] = map[s[i]] + 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }
  return -1;
}

function firstUniqChar2(s: string): number {
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (s.indexOf(char) === s.lastIndexOf(char)) {
      return i;
    }
  }
  return -1;
}
