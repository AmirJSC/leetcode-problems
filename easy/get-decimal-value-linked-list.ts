function getDecimalValue(head: ListNode | null): number {
  let binary = "";
  let cur = head;

  while (cur) {
    binary += cur.val.toString();
    cur = cur.next;
  }
  return parseInt(binary, 2);
}
