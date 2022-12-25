function lengthOfLastWords(s: string): number {
  let array = s.trim().split(' ');
  return array[array.length-1].length || 0;
}