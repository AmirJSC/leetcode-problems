class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  L1: ListNode | null,
  L2: ListNode | null
): ListNode | null {
  let L3 = new ListNode(null, null);
  let newList = L3;

  while (L1 !== null && L2 !== null) {
    if (L1.val <= L2.val) {
      L3.next = L1;
      L1 = L1.next;
    } else {
      L3.next = L2;
      L2 = L2.next;
    }
    L3 = L3.next;
  }

  if (L1 === null) {
    L3.next = L2;
  }
  if (L2 === null) {
    L3.next = L1;
  }

  return newList.next;
}
