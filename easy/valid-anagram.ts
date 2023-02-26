function isAnagram1(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  return s.split("").sort().join() === t.split("").sort().join();
}

function isAnagram2(s: string, t: string): boolean {
  let hashMap = {};

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]] === undefined) {
      hashMap[s[i]] = 1;
    } else {
      hashMap[s[i]]++;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (hashMap[t[j]] === undefined || hashMap[t[j]] === 0) {
      return false;
    } else {
      hashMap[t[j]]--;
    }
  }

  return true;
}
