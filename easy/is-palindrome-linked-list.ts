class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome1(head: ListNode | null): boolean {
  let arr = [];
  let current = head;
  
  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  return arr.join("") === arr.reverse().join("");
}
