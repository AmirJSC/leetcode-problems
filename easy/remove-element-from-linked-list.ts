function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return head;
  }

  // ex. case: [1,1,1,1,1], val: 1
  while (head && head.val === val) {
    head = head.next;
  }

  let current = head;

  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}
