function canConstruct1(ransomNote: string, magazine: string): boolean {
  for (let i = 0; i < ransomNote.length; i++) {
    let index = magazine.indexOf(ransomNote[i]);
    if (index === -1) {
      return false;
    } else {
      magazine = magazine.substring(0, index) + magazine.substring(index + 1);
    }
  }
  return true;
}

function canConstruct2(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) return false;

  for (let i = 0; i < ransomNote.length; i++) {
    let index = magazine.indexOf(ransomNote[i]);
    if (index === -1) {
      return false;
    } else {
      magazine = magazine.replace(ransomNote[i], "");
    }
  }
}
