class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Input: [1,2,3,4,5], Output: [5,4,3,2,1]
function reverseList(head: ListNode | null): ListNode | null {
  let current = head;
  let previous = null;
  while (current) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
  let prev = null;
  let next = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}
