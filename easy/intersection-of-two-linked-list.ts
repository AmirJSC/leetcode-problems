function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) {
    return null;
  }

  let nodeA = headA;
  let nodeB = headB;

  while (nodeA !== nodeB) {
    if (nodeA !== null) {
      nodeA = nodeA.next;
    } else {
      nodeA = headB;
    }

    if (nodeB !== null) {
      nodeB = nodeB.next;
    } else {
      nodeB = headA;
    }
  }
  return nodeA;
}
